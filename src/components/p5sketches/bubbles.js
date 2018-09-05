export default function sketch (b) {

  let bubbles = [];

  b.setup = function () {
    b.createCanvas(900, 400);
  }

  b.draw = function () {
    b.background(51);
    bubbles.push(new Bubble(b.createVector(b.width / 2, 50)));

    // Looping through backwards to delete
    for (var i = bubbles.length - 1; i >= 0; i--) {
      var p = bubbles[i];
      p.run();
      if (p.isDead()) {
        //remove bubbles
        bubbles.splice(i, 1);
      }
    }
  }

  class Bubble {

    constructor(position) {
      this.acceleration = b.createVector(0, 0.09);
      this.velocity = b.createVector(b.random(-1, 1), b.random(-1, 0));
      this.position = position.copy();
      this.lifespan = 200;
    }

    run() {
      this.update();
      this.display();
    }

    //update pos
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 1.5;
    }

    //bubble
    display() {
      b.stroke(0, 255, 0, this.lifespan);
      b.strokeWeight(2);
      b.fill(0, 255, 100, this.lifespan);
      b.ellipse(this.position.x, this.position.y, 12, 12);
    }

    //burst bubble
    isDead() {
      if (this.lifespan < 0.0) {
        return true;
      } else {
        return false;
      }
    }

  }
}
