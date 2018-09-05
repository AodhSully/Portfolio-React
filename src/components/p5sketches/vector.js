export default function sketch (v) {

  v.setup = function () {
    v.createCanvas(900, 400);
  }

  v.draw = function () {
    v.background(51);
    let mouse = v.createVector(v.mouseX, v.mouseY);
    let center = v.createVector(v.width/2, v.height/2);
    mouse.sub(center);

    mouse.normalize();

    mouse.mult(150);

    v.translate(v.width/2, v.height/2);

    v.stroke(0, 255, 0);
    v.strokeWeight(2);
    v.line(0,0,mouse.x,mouse.y);
  }
}
