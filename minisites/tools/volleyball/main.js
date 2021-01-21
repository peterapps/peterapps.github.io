// http://www.ambrsoft.com/trigocalc/circle3d.htm

function angleNormalize(z) {
  return Math.atan2(Math.sin(z), Math.cos(z));
}

function angleDiff(a, b) {
  a = angleNormalize(a);
  b = angleNormalize(b);
  let d1 = a - b;
  let d2 = 2 * Math.PI - Math.abs(d1);
  if (d1 > 0) d2 *= -1;
  return Math.abs(d1) < Math.abs(d2) ? d1 : d2;
}

function getCircleFromPoints([x1, y1], [x2, y2], [x3, y3], ccw) {
  let a = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;
  let b =
    (x1 * x1 + y1 * y1) * (y3 - y2) +
    (x2 * x2 + y2 * y2) * (y1 - y3) +
    (x3 * x3 + y3 * y3) * (y2 - y1);
  let c =
    (x1 * x1 + y1 * y1) * (x2 - x3) +
    (x2 * x2 + y2 * y2) * (x3 - x1) +
    (x3 * x3 + y3 * y3) * (x1 - x2);
  let d =
    (x1 * x1 + y1 * y1) * (x3 * y2 - x2 * y3) +
    (x2 * x2 + y2 * y2) * (x1 * y3 - x3 * y1) +
    (x3 * x3 + y3 * y3) * (x2 * y1 - x1 * y2);

  let radius = Math.sqrt((b ** 2 + c ** 2) / (4 * a ** 2) - d / a);
  let x0 = -b / (2 * a);
  let y0 = -c / (2 * a);

  let start = Math.atan2(y1 - y0, x1 - x0);
  let end = Math.atan2(y3 - y0, x3 - x0);
  start = angleNormalize(start);
  end = angleNormalize(end);

  return {
    radius: radius,
    x: x0,
    y: y0,
    start: start,
    end: end,
    diff: angleDiff(end, start),
    ccw: ccw
  };
}

// Main circle
let circleR = 459;
let circleX = 501 + circleR;
let circleY = 81 + circleR;

// Arcs
let arcs = [
  getCircleFromPoints([588, 276], [728, 406], [964, 444], true),
  getCircleFromPoints([508, 483], [729, 632], [1057, 638], true),
  getCircleFromPoints([530, 695], [755, 815], [1040, 822], true),
  getCircleFromPoints([1062, 94], [854, 205], [728, 406], true),
  getCircleFromPoints([1270, 208], [1098, 270], [964, 444], true),
  getCircleFromPoints([937, 994], [1057, 638], [964, 444], true),
  getCircleFromPoints([1150, 958], [1261, 546], [1098, 270], true)
];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let i = 0;

function loop() {
  let percentage = Math.min(i, 1);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleR, 0, 2 * Math.PI);
  ctx.fill();

  ctx.strokeStyle = "black";
  ctx.lineWidth = 16;
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleR, 0, 2 * Math.PI);
  ctx.stroke();

  arcs.forEach(arc => {
    let endAngle = arc.start + arc.diff * percentage;
    ctx.beginPath();
    ctx.arc(
      arc.x,
      arc.y,
      arc.radius,
      arc.start,
      angleNormalize(endAngle),
      arc.ccw
    );
    ctx.stroke();
  });

  // Increment with PID
  let di = Math.sqrt(i * 0.0005);
  di = Math.max(di, 0.0001);
  i += di;

  if (i > 1.5) i = 0;
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
