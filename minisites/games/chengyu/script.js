// Game State
let gameState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    questionData: [], // Raw data from JSON
    history: [] // Record of each question's result
};

// DOM Elements
const screens = {
    landing: document.getElementById('landing-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const ui = {
    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn'),
    nextBtn: document.getElementById('next-btn'),
    questionCard: document.getElementById('question-card'),
    scoreDisplay: document.getElementById('score'),
    progressBar: document.getElementById('progress-fill'),
    feedbackArea: document.getElementById('feedback-area'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackIcon: document.getElementById('feedback-icon'),
    finalScore: document.getElementById('final-score')
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    ui.startBtn.addEventListener('click', startQuiz);
    ui.restartBtn.addEventListener('click', startQuiz);
    ui.nextBtn.addEventListener('click', nextQuestion);

    // Global close for autocomplete list
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });

    // Help Modal Logic
    const helpBtn = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal');
    const closeHelp = document.getElementById('close-help');

    if (helpBtn && helpModal && closeHelp) {
        helpBtn.addEventListener('click', () => {
            helpModal.classList.add('active');
            helpModal.classList.remove('hidden');
        });

        closeHelp.addEventListener('click', () => {
            helpModal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === helpModal) {
                helpModal.classList.remove('active');
            }
        });
    }

    // Allow 'Enter' to submit answer
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const activeInput = document.activeElement;
            if (activeInput && (activeInput.tagName === 'INPUT')) {
                // If feedback is already showing, 'Enter' goes to next question
                if (!ui.feedbackArea.classList.contains('hidden')) {
                    nextQuestion();
                } else {
                    checkAnswer();
                }
            } else if (!ui.feedbackArea.classList.contains('hidden')) {
                // specific case: button is focused or nothing is focused but feedback is visible
                nextQuestion();
            }
        }
    });
});

async function loadData() {
    try {
        const response = await fetch('chengyu.json');
        if (!response.ok) throw new Error('Failed to load data');
        gameState.questionData = await response.json();
        console.log(`Loaded ${gameState.questionData.length} chengyu.`);
    } catch (error) {
        console.error(error);
        alert('Error loading quiz data. Please check the console.');
    }
}

function startQuiz() {
    if (gameState.questionData.length === 0) {
        alert('Data not loaded yet. Please wait or refresh.');
        return;
    }

    gameState.score = 0;
    gameState.currentQuestionIndex = 0;
    gameState.questions = generateQuestions();
    gameState.totalQuestions = gameState.questions.length;
    gameState.history = [];

    // UI Updates
    updateScore();
    updateProgress();
    switchScreen('quiz');

    renderQuestion();
}

function generateQuestions() {
    // Shuffle the raw data
    const shuffled = [...gameState.questionData].sort(() => 0.5 - Math.random());

    // Create question objects with types
    return shuffled.map(item => {
        // Randomly assign type: 'A' (Meaning -> Hanzi/Pinyin) or 'B' (Hanzi -> Meaning)
        const type = Math.random() > 0.5 ? 'A' : 'B';
        return {
            ...item,
            type: type
        };
    });
}

function renderQuestion() {
    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    const card = ui.questionCard;

    // Reset feedback
    ui.feedbackArea.className = 'feedback hidden'; // Reset classes
    ui.feedbackText.textContent = '';
    ui.feedbackIcon.innerHTML = '';
    ui.nextBtn.classList.add('hidden');

    // Build Card Content
    card.innerHTML = ''; // Clear previous

    if (currentQ.type === 'A') {
        // Type A: Given Meaning -> Guess Hanzi OR Pinyin
        const html = `
            <div class="question-text">
                <p class="subtitle">What is the idiom for:</p>
                <h2>"${currentQ.figurative_meanings[Math.floor(Math.random() * currentQ.figurative_meanings.length)]}"</h2>
            </div>
            <div class="input-group">
                <label for="input-combined">Answer (Hanzi or Pinyin)</label>
                <input type="text" id="input-combined" placeholder="Type Hanzi (e.g. 守株待兔) or Pinyin (e.g. shou3 zhu1 dai4 tu4)" autocomplete="off">
            </div>
            <button onclick="checkAnswer()" class="primary-btn">Submit</button>
        `;
        card.innerHTML = html;
        setTimeout(() => document.getElementById('input-combined').focus(), 100);

    } else {
        // Type B: Given Hanzi -> Guess Meaning (Custom Autocomplete)
        const html = `
            <div class="question-text">
                <p class="subtitle">What is the meaning of:</p>
                <div class="hanzi-lg">${currentQ.chinese}</div>
                <div class="pinyin-sub">${currentQ.pretty_pinyin || ''}</div>
            </div>
            <div class="input-group autocomplete">
                <label for="input-meaning">Figurative Meaning</label>
                <input type="text" id="input-meaning" placeholder="Type to search..." autocomplete="off">
            </div>
            <button onclick="checkAnswer()" class="primary-btn">Submit</button>
        `;
        card.innerHTML = html;

        // Setup Autocomplete
        const input = document.getElementById("input-meaning");
        const allMeanings = gameState.questionData.flatMap(q => q.figurative_meanings);
        setupAutocomplete(input, allMeanings);

        setTimeout(() => input.focus(), 100);
    }
}

// ---------------------------------------------------------
// Pinyin Normalization Logic
// ---------------------------------------------------------
const toneMap = {
    'ā': ['a', 1], 'á': ['a', 2], 'ǎ': ['a', 3], 'à': ['a', 4],
    'ē': ['e', 1], 'é': ['e', 2], 'ě': ['e', 3], 'è': ['e', 4],
    'ī': ['i', 1], 'í': ['i', 2], 'ǐ': ['i', 3], 'ì': ['i', 4],
    'ō': ['o', 1], 'ó': ['o', 2], 'ǒ': ['o', 3], 'ò': ['o', 4],
    'ū': ['u', 1], 'ú': ['u', 2], 'ǔ': ['u', 3], 'ù': ['u', 4],
    'ü': ['v', 0], 'ǘ': ['v', 2], 'ǚ': ['v', 3], 'ǜ': ['v', 4]
};

function normalizePinyin(input) {
    if (!input) return "";
    // Normalize to lower case first
    let text = input.toLowerCase().trim();

    // Split by spaces to handle words separately
    let parts = text.split(/\s+/);

    return parts.map(part => {
        let toneNumber = null;
        let normalizedPart = "";

        // Check for existing numbers first (e.g. cao3)
        const matchNums = part.match(/([a-z]+)([1-5])/);
        if (matchNums) {
            // Already in format like "cao3", just return it
            return part;
        }

        // Check each char for tone mark
        for (let char of part) {
            if (toneMap[char]) {
                normalizedPart += toneMap[char][0];
                toneNumber = toneMap[char][1];
            } else {
                normalizedPart += char;
            }
        }

        // If we found a tone mark, append the number
        // If no tone mark found, and it wasn't numbered, it stays as is (neutral or incomplete)
        // User requirement: "cǎo" -> "cao3"
        // If user typed "cao", we might assume neutral (5) or just leave it. 
        // JSON uses 1-4.
        if (toneNumber !== null) {
            return normalizedPart + toneNumber;
        }
        return normalizedPart;
    }).join(" ");
}

// ---------------------------------------------------------
// Autocomplete Logic
// ---------------------------------------------------------
function setupAutocomplete(inp, arr) {
    let currentFocus;

    inp.addEventListener("input", function (e) {
        let val = this.value;
        closeAllLists();
        if (!val || val.length < 5) return false;

        currentFocus = -1;
        let a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        // Filter matches (simple substring match, case insensitive)
        let matches = arr.filter(item => item.toLowerCase().includes(val.toLowerCase()));

        for (let i = 0; i < matches.length; i++) {
            let itemStr = matches[i];
            let b = document.createElement("DIV");
            b.className = "autocomplete-item";
            // Highlight matching part logic is complex for loose matching,
            // just showing the text is sufficient for MVP.
            b.innerHTML = itemStr;
            b.innerHTML += "<input type='hidden' value='" + itemStr.replace(/'/g, "&#39;") + "'>";
            b.addEventListener("click", function (e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);

            if (i > 9) break; // Limit to 10 suggestions
        }
    });

    inp.addEventListener("keydown", function (e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) { // DOWN
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { // UP
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) { // ENTER
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
                e.preventDefault(); // Prevent submit if selecting
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
}

function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != document.getElementById("input-meaning")) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}

// ---------------------------------------------------------
// Core Game Logic
// ---------------------------------------------------------
window.checkAnswer = function () {
    if (!ui.feedbackArea.classList.contains('hidden')) return; // Prevent double checking

    // Gray out the submit button
    const submitBtn = ui.questionCard.querySelector('button');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitted';
    }

    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    let points = 0;
    let isCorrect = false;
    let correctAnswerText = "";

    if (currentQ.type === 'A') {
        const inputVal = document.getElementById('input-combined').value.trim();
        const normInput = normalizePinyin(inputVal);
        const targetPinyin = currentQ.pinyin; // e.g. "diao4 hu3 ..."

        // Check Hanzi (10 points)
        if (inputVal === currentQ.chinese) {
            isCorrect = true;
            points = 10;
        }
        // Check Pinyin (8 points)
        // Compare normalized input against target pinyin (which is already numbered)
        else if (normInput.toLowerCase() === targetPinyin.toLowerCase()) {
            isCorrect = true;
            points = 8;
        }
        // Check Pinyin without tones (5 points)
        else {
            const tonelessInput = normInput.replace(/[0-9]/g, '').toLowerCase();
            const tonelessTarget = targetPinyin.replace(/[0-9]/g, '').toLowerCase();
            if (tonelessInput === tonelessTarget) {
                isCorrect = true;
                points = 5;
            }
        }

        correctAnswerText = `${currentQ.chinese} (${currentQ.pinyin})`;
    } else {
        const inputMeaning = document.getElementById('input-meaning').value.trim();
        // Exact match required for meaning (from autocomplete)
        if (currentQ.figurative_meanings.includes(inputMeaning)) {
            isCorrect = true;
            points = 10; // Standard points for Type B (unspecified, assuming 10)
        }
        correctAnswerText = currentQ.figurative_meanings.join("<br>");
    }

    // Record History
    gameState.history.push({
        question: currentQ,
        correct: isCorrect,
        points: points
    });

    if (isCorrect) {
        gameState.score += points;
        let subMsg = "";
        if (points === 5) subMsg = " (No tones)";
        else if (points === 8) subMsg = " (Pinyin)";
        else if (points === 10 && currentQ.type === 'A') subMsg = " (Hanzi)";

        showFeedback(true, 'Correct!', `Earned ${points} points!${subMsg}`);
    } else {
        showFeedback(false, 'Incorrect', `Correct answer: <br>${correctAnswerText}`);
    }

    updateScore();
    updateProgress();
};

function showFeedback(isSuccess, title, message) {
    const area = ui.feedbackArea;
    const text = ui.feedbackText;
    const icon = ui.feedbackIcon;

    area.classList.remove('hidden', 'success', 'error');
    area.classList.add(isSuccess ? 'success' : 'error');

    // Icons
    icon.innerHTML = isSuccess ?
        '<span class="feedback-icon-lg">✅</span>' :
        '<span class="feedback-icon-lg">❌</span>';

    text.innerHTML = `<strong>${title}</strong><br>${message}`;

    // Show Next button
    ui.nextBtn.classList.remove('hidden');
    ui.nextBtn.focus();
}

function nextQuestion() {
    gameState.currentQuestionIndex++;
    if (gameState.currentQuestionIndex >= gameState.totalQuestions) {
        endQuiz();
    } else {
        renderQuestion();
    }
}

function updateScore() {
    ui.scoreDisplay.textContent = gameState.score;
}

function updateProgress() {
    const pct = ((gameState.currentQuestionIndex) / gameState.totalQuestions) * 100;
    ui.progressBar.style.width = `${pct}%`;
}

function endQuiz() {
    ui.finalScore.textContent = `${gameState.score}`;
    renderSummary();
    switchScreen('result');
}

function renderSummary() {
    const list = document.getElementById('summary-list');
    list.innerHTML = ''; // Clear existing

    gameState.history.forEach((record, index) => {
        const item = document.createElement('div');
        item.className = `summary-item ${record.correct ? 'correct' : 'incorrect'}`;

        const qText = record.question.chinese;
        const subText = record.question.literal_meaning || record.question.pretty_pinyin;

        item.innerHTML = `
            <div class="summary-text">
                <span class="summary-q-main">${index + 1}. ${qText}</span>
                <span class="summary-q-sub">${subText}</span>
            </div>
            <div class="summary-points ${record.points > 0 ? 'plus' : 'zero'}">
                ${record.points > 0 ? '+' + record.points : '0'}
            </div>
        `;
        list.appendChild(item);
    });
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}
