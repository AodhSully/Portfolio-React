export default function star (p) {

  // Star [] p.stars = new Star[900];
  var speed;
  var stars;
  var Star;

  p.setup = function () {
    p.createCanvas(800, 400);
    p.stars = new Star(200);

    for (var i = 0; i < p.stars.length; i++){
      p.stars[i] = new p.Star();
    }
  }

  p.draw = function () {
    p.speed = p.map(p.mouseX, 0, p.width, 0 , 10);
    p.background(0);
    p.translate(p.width/2, p.height/2);

    for (var i = 0; i < p.stars.length; i++){
      p.stars[i].update();
      p.stars[i].show();
    }
  }

};
