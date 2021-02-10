var tt, vb, rob, rp;
var vl, rl, ml;

function setup() {
  createCanvas(400, 400);

  tt = createElement("h1");
  tt.html("Shady Website");
  tt.position(100, 20);

  vb = createButton("Free VBucks");
  vb.position(150, 150);
  vb.mousePressed(vbucks);

  rob = createButton("Free Robucks");
  rob.position(148, 200);
  rob.mousePressed(robucks);

  rp = createButton("Free Money");
  rp.position(150, 250);
  rp.mousePressed(rupees);
}

function draw() {
  background(220);
}

function vbucks() {
  vl = createA("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "click for vbucks");
  vl.position(145, 175);
}

function robucks() {
  rl = createA("https://www.youtube.com/watch?v=Tt7bzxurJ1I", "click for robucks");
  rl.position(145, 225);
}

function rupees() {
  ml = createA("https://www.youtube.com/watch?v=6XK4S8OQPuU", "click to get real money");
  ml.position(125, 275);
}