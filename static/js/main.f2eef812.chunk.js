(this["webpackJsonppeterapps-site"]=this["webpackJsonppeterapps-site"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(20),r=a.n(o),l=a(6),s=a(36),c=a(11),m=a(30),p=a(17),u=a(33),h=a.n(u),d=a(46),f=a(47),b=a.n(f),y=a(67),E=a.n(y);function g(e,t,a){(function(){var i=Object(d.a)(h.a.mark((function i(){var n,o,r,l,s,c;return h.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:n=Array(a.length),o=Array(a.length),r=0;case 3:if(!(r<a.length)){i.next=19;break}if(!(l=a[r].url).includes("youtube.com/")){i.next=11;break}s=l.split("v=")[1],n[r]="https://img.youtube.com/vi/"+s+(a[r].sd?"/mqdefault.jpg":"/maxresdefault.jpg"),o[r]={date:a[r].date,description:a[r].description},i.next=16;break;case 11:return i.next=13,b.a.get("https://vimeo.com/api/oembed.json?url="+l);case 13:c=i.sent,n[r]=c.data.thumbnail_url,o[r]={date:a[r].date||E()(c.data.upload_date).format("MMM D, YYYY"),description:a[r].description||c.data.description};case 16:++r,i.next=3;break;case 19:e({type:"EPISODES_THUMBNAILS_LOADED",episodesThumbnails:n,series:t,episodesMetadata:o});case 20:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}})()()}var w={seriesLoaded:!1,seriesThumbnails:!1,episodesLoaded:{},episodesThumbnails:{},episodesMetadata:{}},v=a(7);function k(){var e=Object(v.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}a(111),a(112);var A=a(149),S=a(151);a(113);function I(e){return n.a.createElement(A.a,{expand:"lg",variant:"dark"},n.a.createElement(A.a.Brand,{as:l.b,to:"/"},n.a.createElement("img",{alt:"",src:"/logo192.png",width:"30",height:"30",className:"d-inline-block align-top navbar-logo"})," ","Peter Apps"),n.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(S.a,{className:"mr-auto"},n.a.createElement(S.a.Link,{as:l.b,to:"/"},"Home"),n.a.createElement(S.a.Link,{as:l.b,to:"/films"},"Films"),n.a.createElement(S.a.Link,{as:l.b,to:"/minisites"},"Minisites"),n.a.createElement(S.a.Link,{as:l.b,to:"/about"},"About"))))}var T=a(73),j=a(23);a(118);function M(e){return n.a.createElement("footer",{className:"footer mt-auto py-3"},n.a.createElement("p",null,"Peter Linder. 2021."),n.a.createElement("div",{className:"social-container"},n.a.createElement(x,{title:"linkedin",icon:j.d,url:"https://www.linkedin.com/in/peter-a-linder/"}),n.a.createElement(x,{title:"github",icon:j.b,url:"https://github.com/peterapps/"}),n.a.createElement(x,{title:"youtube",icon:j.g,url:"https://www.youtube.com/c/PeterLinder66"}),n.a.createElement(x,{title:"vimeo",icon:j.f,url:"https://vimeo.com/peterlinder"}),n.a.createElement(x,{title:"soundcloud",icon:j.e,url:"http://soundcloud.com/peterlinder"}),n.a.createElement(x,{title:"facebook",icon:j.a,url:"https://www.facebook.com/peterlinder66"}),n.a.createElement(x,{title:"instagram",icon:j.c,url:"https://www.instagram.com/grayroof66/"})))}function x(e){var t=e.icon,a=e.url,i=e.title;return n.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"social "+i},n.a.createElement(T.a,{icon:t,size:"lg"}))}var P=a(12),N=a(148),O=a(143),C=a(76),L=a.n(C),F=a(77),B=a.n(F),J=a(78),R=a.n(J),D=(a(119),function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement("title",null,"Home | Peter Apps")),n.a.createElement(N.a,null,n.a.createElement(N.a.Item,null,n.a.createElement("img",{className:"d-block w-100 home-carousel",src:L.a,alt:"Films"}),n.a.createElement(N.a.Caption,{className:"text-left"},n.a.createElement("h1",null,"Films"),n.a.createElement("p",null,"For the past 10 years, one of my most entertaining off-and-on hobbies has been filmmaking. I really should do it more. I've made films for fun, for school, with friends, and even with enemies, but it's (almost) always a good time."),n.a.createElement("p",null,n.a.createElement(l.b,{to:"/films/"},n.a.createElement(O.a,{variant:"primary",size:"lg"},"Explore films"))))),n.a.createElement(N.a.Item,null,n.a.createElement("img",{className:"d-block w-100 home-carousel",src:B.a,alt:"Games and Tools"}),n.a.createElement(N.a.Caption,{className:"text-left"},n.a.createElement("h1",null,"Games and Tools"),n.a.createElement("p",null,"I've been making random minisites since my freshman year of high school, working towards a collection of miscellaneous games and tools. Some of them are fun. Others are... math, I guess."),n.a.createElement("p",null,n.a.createElement(l.b,{to:"/minisites/"},n.a.createElement(O.a,{variant:"primary",size:"lg"},"Explore minisites"))))),n.a.createElement(N.a.Item,null,n.a.createElement("img",{className:"d-block w-100 home-carousel",src:R.a,alt:"About"}),n.a.createElement(N.a.Caption,{className:"text-left"},n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"See a brief bio about me, Peter."),n.a.createElement("p",null,n.a.createElement(l.b,{to:"/about/"},n.a.createElement(O.a,{variant:"primary",size:"lg"},"About Me")))))))}),z=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement("title",null,"Not found page")),n.a.createElement("p",null,"404 not found"))},V=a(145),G=a(152),H=(a(43),{series:[{title:"Cloudy Day Studios",path:"cloudy",description:'A collection of films created by me and my high school friends, most prominently the legendary Ruiqi "Ricky" Wang. For some reason we called ourselves Cloudy Day Studios.',episodes:[{title:"Detective Ricky - Teaser 1",url:"https://www.youtube.com/watch?v=5KrDG1h1-v0",path:"detective-ricky-teaser-1",date:"June 30, 2021",description:"The first teaser trailer for Detective Ricky, an upcoming short film.",sd:!0},{title:"Rockney IV",url:"https://www.youtube.com/watch?v=qy91wyWtbPg",path:"rockney-iv",date:"Jun 1, 2019",description:"An AP Chinese final project that I helped my friends with."},{title:"How Monster",url:"https://www.youtube.com/watch?v=zT881Z3UhzM",path:"how-monster",date:"Jan 21, 2019",description:"AP Chem turns Eason into a monster. Gah!"},{title:"Backsetbowl",url:"https://www.youtube.com/watch?v=d8M7MA8Xjkc",path:"backsetbowl",date:"Nov 24, 2018",description:"My friend Ricky's Video Production project about a boy who has no friends but makes some. English subtitles included."},{title:"PARCC Rap [Music Video]",url:"https://www.youtube.com/watch?v=3ea4fACaBCo",path:"parcc-rap",date:"Sep 19, 2017",description:"A rap explaining the faults in the PARCC standardized test. Sorry about the rapper's lack of rhythm. We're working on it."},{title:"My Nike Ad: An Action Scene",path:"nike-ad",url:"https://vimeo.com/223855850"}]},{title:"NJ Film School shorts",path:"njfilm",description:"Short films I made during my years at NJ Film School.",episodes:[{title:"Left on Read",url:"https://vimeo.com/285561441",path:"left-on-read"},{title:"Easy Money",url:"https://vimeo.com/285561386",path:"easy-money"},{title:"Geronimo (Music Video)",url:"https://vimeo.com/285561305",path:"geronimo"},{title:"Monopoly",url:"https://vimeo.com/285561090",path:"monopoly"},{title:"Ringtone",url:"https://vimeo.com/230275265",path:"ringtone"},{title:"Bayside Disciplinary Academy",url:"https://vimeo.com/230275207",path:"bayside-disciplinary-academy"},{title:"Collaborative",url:"https://vimeo.com/230274876",path:"collaborative"},{title:"Art",url:"https://vimeo.com/179566266",path:"art"},{title:"Pursuit",url:"https://vimeo.com/179566225",path:"pursuit"},{title:"Passing Notes",url:"https://vimeo.com/179566208",path:"passing-notes"},{title:"Miscommunication",url:"https://vimeo.com/179566139",path:"miscommunication"},{title:"The Shady Business",url:"https://vimeo.com/134455288",path:"the-shady-business"},{title:"Writer's Block",url:"https://vimeo.com/134455267",path:"writers-block"},{title:"Human Snake",url:"https://vimeo.com/134455257",path:"human-snake"},{title:"Telephone Assassin",url:"https://vimeo.com/134455196",path:"telephone-assassin"},{title:"The Cool Guy",url:"https://vimeo.com/102402771",path:"the-cool-guy"},{title:"Stop Motion Flying",url:"https://vimeo.com/102402611",path:"stop-motion-flying"},{title:"5 Shot Silent",url:"https://vimeo.com/102402610",path:"silent"},{title:"Telephone",url:"https://vimeo.com/102402609",path:"telephone"}]},{title:"Miscellaneous with Alex",path:"alex",description:"One-off shorts that I made for some reason with my friend Alex.",episodes:[{title:"Chip and Drip",url:"https://vimeo.com/211044247",path:"chip-and-drip",date:"Jul 23, 2011",description:"The exciting adventures of Chip, a chocolate chip cookie, and Drip, an ice cream cone."},{title:"The Bionic Heel Man",url:"https://vimeo.com/289168624",path:"bionic-heel-man",date:"August, 2014",description:"Alex has a boo-boo on his heel and gets a little tune-up."},{title:"The Alex Observation Vlog",url:"https://vimeo.com/225704173",path:"alex-observation-vlog"}]},{title:"Montages",path:"montages",description:"Various montages of things I've done.",episodes:[{title:"Parasailing, Summer 2016",url:"https://vimeo.com/210845177",path:"parasailing-2016"},{title:"Boating in the Bay",url:"https://vimeo.com/222922355",path:"boating-in-the-bay"},{title:"Visiting Cornell",url:"https://vimeo.com/223922026",path:"visiting-cornell"},{title:"Beach Trip",url:"https://vimeo.com/224974660",path:"beach-trip"}]},{title:"Creations with Zach",path:"cwz",description:"A series of my friend Zach creating repulsive concoctions involving energy drinks and snacks.",episodes:[{title:"Potted Plant",url:"https://www.youtube.com/watch?v=CnJsXXQIoRA",path:"potted-plant",date:"June 18, 2021",description:"Potted plants not included. Guest starring Vinay Balan."},{title:"Energy Mac",url:"https://www.youtube.com/watch?v=go3HQzTjnp0",path:"energy-mac",date:"Dec 23, 2019",description:"Mac and cheese gets an upgrade\u2026 without the cheese."},{title:"Wormy Pop",url:"https://www.youtube.com/watch?v=_QonzYXgAww",path:"wormy-pop",date:"Jul 16, 2017",description:"It's hot in the summer... but this'll cool you down!"},{title:"Crappy Cocoa",url:"https://www.youtube.com/watch?v=auGIopUazQk",path:"crappy-cocoa",date:"Jul 11, 2017",description:"One layer of chocolate is okay, two layers is good... but three layers is great!",sd:!0},{title:"Cream Bull + SPECIAL GUESTS",url:"https://www.youtube.com/watch?v=7EM_NTdVaG8",path:"cream-bull",date:"Jun 29, 2017",description:"Milkshakes are so last year... but this'll add a kick!",sd:!0},{title:"Juicy Creeper",url:"https://www.youtube.com/watch?v=KNv0JsnJPqs",path:"juicy-creeper",date:"Jun 28, 2017",description:"This monster just got a little bit explosive... with a secret ingredient!",sd:!0},{title:"Grassy Grape",url:"https://www.youtube.com/watch?v=PK0P9ELHxQY",path:"grassy-grape",date:"Jun 28, 2017",description:"Enjoy a new cocktail... of Mountain Dew and grape juice!"}]},{title:"High School Projects",path:"school",description:"Miscellaneous videos made for high school projects.",episodes:[{title:"Xtreme Inertia",url:"https://www.youtube.com/watch?v=07nxyqzkO70",path:"xtreme-inertia",date:"Oct 22, 2017",description:"A simple demonstration of the principles of inertia, by Amay Mehta, Peter Linder, and Vinay Balan."},{title:"Xtreme Inertia [Trailer]",url:"https://www.youtube.com/watch?v=yjjIo_wh1uI",path:"xtreme-inertia-preview",date:"Oct 22, 2017",description:"A trailer for a thrilling demonstration of inertia.",sd:!0},{title:"Periodic News",url:"https://www.youtube.com/watch?v=CoovbC3uH-k",path:"periodic-news",date:"Jan 30, 2017",description:"A project by Tim Zhang and Peter Linder for chemistry."},{title:"P is for the Planet",url:"https://www.youtube.com/watch?v=WOl0b6f1wlE",path:"p-planet",date:"Jun 19, 2016",description:"A fake foundation for world history."}]},{title:"Spanish Projects",path:"spanish",description:"Videos my friend Prateek and I made for high school Spanish.",episodes:[{title:"\xa1El Adivino Fant\xe1stico!",url:"https://www.youtube.com/watch?v=ETJMxv4csRQ",path:"el-adivino",date:"May 28, 2017",description:"Pedro visita a Prateek, un adivino, pero Prateek no es muy honesto."},{title:"\xa1El Adivino Fant\xe1stico! - Bloopers",url:"https://www.youtube.com/watch?v=nzEUZQ7j6LU",path:"el-adivino-bloopers",date:"May 30, 2017",description:'Todos los errors c\xf3micos del cortometraje "\xa1El Adivino Fant\xe1stico!"'},{title:"\xa1El Adivino Fant\xe1stico! - Teaser Trailer [English]",url:"https://www.youtube.com/watch?v=Rx31tNwkKWY",path:"el-adivino-trailer",date:"May 30, 2017",description:'A sneak peak at the Spanish short film "\xa1El Adivino Fant\xe1stico!"'},{title:"\xa1El Adivino Fant\xe1stico! - Tr\xe1iler [Espa\xf1ol]",url:"https://www.youtube.com/watch?v=3D9omPsfeoE",path:"el-adivino-avance",date:"May 31, 2017",description:'Un avance para el cotrometraje "\xa1El Adivino F\xe1ntastico!"'},{title:"Noticias Venezolanas + Bloopers!",url:"https://www.youtube.com/watch?v=jK1LT2syeXg",path:"noticias",date:"Mar 19, 2018",description:"Peter Linder y Prateek Humane reportan las noticias de Venezuela."},{title:"\xa1Luche! - Video Musical",url:"https://www.youtube.com/watch?v=FDhqYne9C-w",path:"luche",date:"Jun 3, 2018",description:"A Spanish music video to the tune of HYFR by Drake.",sd:!0},{title:"\xa1Luche! - BTS + Bloopers",url:"https://www.youtube.com/watch?v=FEJmVEsG-Mw",path:"luche-bloopers",date:"Jun 3, 2018",description:"BTS and bloopers for our Spanish music video.",sd:!0},{title:"Leche Frita",url:"https://www.youtube.com/watch?v=6_kh0wVzjAA",path:"leche-frita",date:"Jun 2, 2019",description:"The final project for AP Spanish. It tasted... not horrible. Although it made my stomach feel pretty sick the next day."}]},{title:"Mr. Flap",path:"flap",description:"A series I made with my cousin Yoav, filled to the brim with laughter, tears, and just the right amount of humanity.",episodes:[{title:"Mr. Flap on the Loose",url:"https://vimeo.com/289170141",path:"mr-flap",date:"July, 2014",description:"Mr. Flap and Chuck get in a bit of an altercation."},{title:"Mr. Flap II",url:"https://vimeo.com/289170389",path:"mr-flap-ii",date:"August, 2015",description:"Mr. Flap is back. Hence a sequel."},{title:"Chuck: A Mr. Flap Anthology",url:"https://vimeo.com/289170636",path:"chuck",date:"August, 2015"}]},{title:"The Stoopid Muvy",path:"stoopid",description:"A webseries my friend Alex and I created in elementary school that probably lasted a little too long.",episodes:[{title:"S3E1: Stoopidly Retro",url:"https://vimeo.com/134453394",path:"s3e1",description:'The Stoopid Muvy is back with a collection of clips utilizing goofy humor. In "Stoopidly Retro" the episode\'s clips revolve around parodies of old TV shows, such as Full House, The Twilight Zone, and Batman (TV series).'},{title:"S2E3: The Realliest Stoopid Muvy",url:"https://vimeo.com/210843530",path:"s2e3",date:"Summer, 2013",description:"The season finale of Season 2."},{title:"S2E2: The Very Stoopid Muvy",url:"https://vimeo.com/210841251",path:"s2e3",date:"Summer, 2013",description:"Episode 2 of Season 2. Ha ha, I said tutu."},{title:"S2E1: The Really Stoopid Muvy",url:"https://vimeo.com/210839364",path:"s2e1",date:"Summer, 2013",description:"Back and better than ever in the 3-year reunion of the Stoopid Muvy."},{title:"S1E3: C. Zin 3",url:"https://vimeo.com/179644245",path:"s1e3",date:"Jul 12, 2011",description:'In the conclusion to season 1, C. Zin 3 guest stars as a "friend".'},{title:"S1E2: Season, Too",url:"https://vimeo.com/179133231",path:"s1e2",date:"Jun 26, 2011",description:"Back and stupider than ever!"},{title:"S1E1: Season Won",url:"https://vimeo.com/179133049",path:"s1e1",date:"Jun 25, 2011",description:"Introducing a movie that couldn't get any stupiderer."}]},{title:"Peter's Peeves",path:"peeves",description:"A series of rants about things that really don't matter. I just felt like getting them off my chest... and onto the internet",episodes:[{title:"S1E1: Nintendo Switch",url:"https://vimeo.com/211040186",path:"s1e1"},{title:"S1E2: Backwards Compatibility",url:"https://vimeo.com/211040193",path:"s1e2"},{title:"S1E3: English Stuff",url:"https://vimeo.com/211040188",path:"s1e3"},{title:"S1E4: Star Wars",url:"https://vimeo.com/211040185",path:"s1e4"},{title:"S2E1: Peeve-tacular",url:"https://vimeo.com/415343908",path:"s2e1"}]},{title:"Mock Commercials",path:"commercials",description:"Parody or fake commercials, created both for fun and for school",episodes:[{title:"Coughaway",url:"https://vimeo.com/210844802",path:"coughaway"},{title:"ElectoBuy",url:"https://vimeo.com/211040496",path:"electobuy"}]},{title:"Willy O'Laughlin",path:"willy",description:"A series I made with a family friend Jeff. There isn't really a good explanation for why it exists.",episodes:[{title:"S1E2",url:"https://vimeo.com/211041428",path:"s1e2",date:"August, 2011"},{title:"S1E3",url:"https://vimeo.com/211041491",path:"s1e3",date:"August, 2012"}]}]}),_=a(144),W=(a(120),function(e){return n.a.createElement("div",{className:"loader-div"},n.a.createElement(_.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")),n.a.createElement("span",null,"Loading..."))}),U=function(e){var t=Object(c.b)(),a=Object(c.c)((function(e){return e.seriesLoaded})),i=Object(c.c)((function(e){return e.seriesThumbnails}));return a||function(e,t){(function(){var a=Object(d.a)(h.a.mark((function a(){var i,n,o,r,l,s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=Array(t.length),n=0;case 2:if(!(n<t.length)){a.next=17;break}if(o=t[n].episodes[0],!(r=o.url).includes("youtube.com/")){a.next=10;break}l=r.split("v=")[1],i[n]="https://img.youtube.com/vi/"+l+(o.sd?"/mqdefault.jpg":"/maxresdefault.jpg"),a.next=14;break;case 10:return a.next=12,b.a.get("https://vimeo.com/api/oembed.json?url="+r);case 12:s=a.sent,i[n]=s.data.thumbnail_url;case 14:++n,a.next=2;break;case 17:e({type:"SERIES_THUMBNAILS_LOADED",seriesThumbnails:i});case 18:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}(t,H.series),n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement("title",null,"Films | Peter Apps")),n.a.createElement("h1",null,"Films"),n.a.createElement("p",null,"One hobby that I particularly enjoy, though I don't do it enough, is filming. Here you can browse through some hand-picked films I've been involved with in a variety of roles, including producer, director, editor, writer, and actor."),n.a.createElement("h3",null,"Series"),!a&&n.a.createElement(W,null),a&&n.a.createElement(V.a,null,H.series.map((function(e,t){return n.a.createElement(G.a,{key:e.path,className:"film-series-card"},n.a.createElement(G.a.Link,{as:l.b,to:"/films/"+e.path+"/"},n.a.createElement(G.a.Img,{variant:"top",src:i[t]})),n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,null,e.title),n.a.createElement(G.a.Text,null,e.description),n.a.createElement(G.a.Link,{as:l.b,to:"/films/"+e.path+"/"},"View ",e.episodes.length," episodes")))}))))},Z=a(150),q=a(146),Y=a(147),K=a(153),Q=(a(121),[{name:"Grocket",path:"grocket",description:"Grocket, originally named AntiEason, was a game I made to frustrate my friend Eason after I saw him playing a lot of osu!"},{name:"Jetpack Face",path:"jetpackface",description:"Jetpack Face is the first game I made, and was a project I developed during the summer of 2014. It is a pretty shameless clone of Jetpack Joyride, but it stars a face and has some ridiculous powerups. There aren't really any instructions. I guess that's my bad."},{name:"ShuttleSim",path:"shuttle",description:"This isn't so much a game as it is a simulation. I made it simply because it allowed me to apply what I was learning in high school physics."},{name:"Wonder Whim-Tim",path:"wonder",description:"The name Wonder Whim-Tim has a rich and complex history. In this case, it refers to a platform fighter game that my friend Julian and I made for our AP Computer Science A final project, where the characters are based on our friends (and their strengths and weaknesses)."},{name:"Zak Attack",path:"zakattack",description:"Zak Attack is the first platform fighter I developed, which I made while at a cybersecurity summer camp with my friend Zach and a Russian fellow I met named Zak. You can guess who the two characters are."}]),X=[{name:"Airfoil Plotter",path:"airfoil",description:"A tool that graphs the cross-sectional geometry of an airfoil based off its 4-digit NACA descriptor."},{name:"Binator",path:"binator",description:"A tool that maximizes the number of letter emojis in a given string, or minimizes it."},{name:"Inspirational Quote Generator",path:"quotes",description:"A tool to generate inspirational quotes by randomly stringing some words together. Sometimes it's inspirational. Other times... eh."},{name:"Integral Approximator",path:"integral",description:"A tool that can approximate a definite integral with the three common methods of LRAM, RRAM, and MRAM. The tool also uses the Desmos API to graph a visualization of the approximate integral."},{name:"Pi Calculator",path:"pi-calc",description:"A visualization of the Monte Carlo method for approximating the value of pi."},{name:"Ricky Simulator",path:"ricky",description:"A tool that generates Ricky-like quotes, based on a collection of a few thousands texts he sent me over the course of three years. Some are frighteningly accurate."},{name:"Trilateration Simulator",path:"trilat",description:"A visualization of how trilateration can be used to localize in a 2D plane with at least three beacons."},{name:"Vector Addition Calculator",path:"vectors",description:"A visual calculator for 2D vector addition, originally created as a tool for my high school physics class."}],$=function(e){var t=function(e,t,a){return n.a.createElement("div",{className:"minisite-tab-container"},n.a.createElement("h4",null,e),n.a.createElement(Z.a.Container,{id:"minisite-tab",defaultActiveKey:"#"+a[0].path},n.a.createElement(q.a,{className:"minisite-tab-row"},n.a.createElement(Y.a,{sm:4},n.a.createElement(K.a,null,a.map((function(e){return n.a.createElement(K.a.Item,{key:e.path,action:!0,href:"#"+e.path},e.name)})))),n.a.createElement(Y.a,{sm:8},n.a.createElement(Z.a.Content,null,a.map((function(e){return n.a.createElement(Z.a.Pane,{key:e.path,eventKey:"#"+e.path},n.a.createElement("p",null,e.description),n.a.createElement("p",null,n.a.createElement("a",{href:"/minisites/"+t+"/"+e.path+"/"},"Open ",e.name)))})))))))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement("title",null,"Minisites | Peter Apps")),n.a.createElement("h1",null,"Minisites"),n.a.createElement("p",null,"Long before this site existed, I had a variety of standalone web-based games and tools, listed below."),t("Games","games",Q),t("Tools","tools",X))},ee=(a(122),function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement("title",null,"About | Peter Apps")),n.a.createElement("h1",null,"About Me"),n.a.createElement("hr",{className:"hr-blue"}),n.a.createElement("p",null,"I am currently a junior at the University of Michigan, where I'm pursuing a BSE in Computer Engineering. I'm fascinated by both the software and hardware aspect of computers, and I hope to do work in systems software in the future. This past summer, I interned at Nokia Bell Labs in the robotics department, working on automating the tuning process for a localization algorithm with deep learning. I'm currently the AUVSI Chief Engineer for M-Fly, a student organization at the University of Michigan where I'm responsible for the development of an autonomous airplane to compete in the AUVSI-SUAS challenge. This semester, I'll be working with Seoul Robotics through the TechLab at Mcity program."),n.a.createElement("p",null,"My skills include proficiency in a variety of popular programming languages, most prominently C++, Python, Java, and JavaScript/Node.JS. I'm also experienced in popular libraries such as Keras, NumPy, OpenCV, along with command line tools such as Git."),n.a.createElement("p",null,"Beyond school and work, I enjoy filmmaking as a hobby; in particular, I find cinematography and film editing fascinating. I also have a passion for learning about areas beyond my major and enjoy taking online courses to learn new subjects."),n.a.createElement("p",null,"To learn more about me, check out"," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/peter-linder-aa648b181/",target:"_blank",rel:"noopener noreferrer"},"my LinkedIn profile"),"."))}),te=a(154),ae=a(80),ie=a.n(ae),ne=function(e){var t=Object(v.g)(),a=t.seriesPath,i=t.episodePath,o=Object(c.b)(),r=H.series.find((function(e){return e.path===a}));if(!r)return n.a.createElement(z,null);var s=r.episodes.findIndex((function(e){return e.path===i}));if(-1===s)return n.a.createElement(z,null);var m=r.episodes[s],p=Object(c.c)((function(e){return e.episodesLoaded[a]})),u=Object(c.c)((function(e){return e.episodesThumbnails[a]})),h=Object(c.c)((function(e){return e.episodesMetadata[a]}));return p||g(o,a,r.episodes),n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement("title",null,m.title," | ",r.title," | Films | Peter Apps")),n.a.createElement(te.a,null,n.a.createElement(l.b,{to:"/films/",className:"breadcrumb-item"},"Films"),n.a.createElement(l.b,{to:"/films/"+a+"/",className:"breadcrumb-item"},r.title),n.a.createElement(te.a.Item,{active:!0},m.title)),n.a.createElement("h1",null,m.title),n.a.createElement(q.a,{className:"episode-row"},n.a.createElement(Y.a,{md:"6"},n.a.createElement(ie.a,{url:m.url,width:"100%",controls:!0})),n.a.createElement(Y.a,{md:"3"},s<r.episodes.length-1&&u?n.a.createElement(G.a,{className:"card-preview-video"},n.a.createElement(G.a.Img,{variant:"top",src:u[s+1]}),n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,null,r.episodes[s+1].title),n.a.createElement(l.b,{to:"/films/"+a+"/"+r.episodes[s+1].path},"Go to previous episode"))):u&&n.a.createElement(G.a,{className:"card-preview-video no-video"},n.a.createElement(G.a.Img,{variant:"top",src:u[s],style:{filter:"brightness(0.4)"}}),n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,null,"No previous episode"),n.a.createElement("span",null,"\xa0")))),n.a.createElement(Y.a,{md:"3"},s>0&&u?n.a.createElement(G.a,{className:"card-preview-video"},n.a.createElement(G.a.Img,{variant:"top",src:u[s-1]}),n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,null,r.episodes[s-1].title),n.a.createElement(l.b,{to:"/films/"+a+"/"+r.episodes[s-1].path},"Go to next episode"))):u&&n.a.createElement(G.a,{className:"card-preview-video no-video"},n.a.createElement(G.a.Img,{variant:"top",src:u[s],style:{filter:"brightness(0.4)"}}),n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,null,"No next episode"),n.a.createElement("span",null,"\xa0"))))),n.a.createElement("p",null,"Published:"," ",h&&h[s]&&h[s].date),n.a.createElement("p",null,"Description:"," ",h&&h[s]&&h[s].description))},oe=function(e){var t=Object(v.g)().seriesPath,a=Object(c.b)(),i=H.series.find((function(e){return e.path===t}));if(!i)return n.a.createElement(z,null);var o=Object(c.c)((function(e){return e.episodesLoaded[t]})),r=Object(c.c)((function(e){return e.episodesThumbnails[t]})),s=Object(c.c)((function(e){return e.episodesMetadata[t]}));return o||g(a,t,i.episodes),n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement("title",null,i.title," | Films | Peter Apps")),n.a.createElement(te.a,null,n.a.createElement(l.b,{to:"/films/",className:"breadcrumb-item"},"Films"),n.a.createElement(te.a.Item,{active:!0},i.title)),n.a.createElement("h1",null,i.title),n.a.createElement("p",null,i.description),n.a.createElement("h3",null,i.episodes.length," Episodes"),!o&&n.a.createElement(W,null),o&&i.episodes.map((function(e,a){return n.a.createElement(G.a,{className:"mb-3 film-episode-card",key:a},n.a.createElement(q.a,{noGutters:!0},n.a.createElement(Y.a,{md:3},n.a.createElement(G.a.Link,{as:l.b,to:"/films/"+t+"/"+e.path},n.a.createElement(G.a.Img,{src:r&&r[a]}))),n.a.createElement(Y.a,{md:9},n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,null,n.a.createElement(G.a.Link,{as:l.b,to:"/films/"+t+"/"+e.path},e.title)),n.a.createElement(G.a.Text,{className:"episode-card-description"},s&&s[a]&&s[a].description),n.a.createElement(G.a.Text,null,n.a.createElement("small",{className:"text-muted"},s&&s[a]&&s[a].date))))))})))};var re=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(I,null),n.a.createElement("div",{className:"Page"},n.a.createElement(v.c,null,n.a.createElement(v.a,{exact:!0,path:"/",component:D}),n.a.createElement(v.a,{exact:!0,path:"/films",component:U}),n.a.createElement(v.a,{exact:!0,path:"/films/:seriesPath/:episodePath",component:ne}),n.a.createElement(v.a,{exact:!0,path:"/films/:seriesPath/",component:oe}),n.a.createElement(v.a,{exact:!0,path:"/minisites",component:$}),n.a.createElement(v.a,{exact:!0,path:"/about",component:ee}),n.a.createElement(v.a,{component:z}))),n.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(127),a(128);var le=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SERIES_THUMBNAILS_LOADED":return Object(p.a)(Object(p.a)({},e),{},{seriesLoaded:!0,seriesThumbnails:t.seriesThumbnails});case"EPISODES_THUMBNAILS_LOADED":return Object(p.a)(Object(p.a)({},e),{},{episodesLoaded:Object(p.a)(Object(p.a)({},e.episodesLoaded),{},Object(m.a)({},t.series,!0)),episodesThumbnails:Object(p.a)(Object(p.a)({},e.episodesThumbnails),{},Object(m.a)({},t.series,t.episodesThumbnails)),episodesMetadata:Object(p.a)(Object(p.a)({},e.episodesMetadata),{},Object(m.a)({},t.series,t.episodesMetadata))});default:return e}}));r.a.render(n.a.createElement(c.a,{store:le},n.a.createElement(l.a,{basename:"/"},n.a.createElement(k,null),n.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/carousel-films.56c41b32.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/carousel-sites.bc5b965a.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/carousel-about.3cb09480.jpg"},83:function(e,t,a){e.exports=a(129)}},[[83,12,13]]]);
//# sourceMappingURL=main.f2eef812.chunk.js.map