export default function star (s) {

  var speed;
  var stars;
  var Star;

  // Star [] p.stars = new Star[900];
  s.setup = function () {
    s.createCanvas(600, 400);
    s.stars = new Star(200);

    for (var i = 0; i < s.stars.length; i++){
      s.stars[i] = new s.Star();
    }
  }

  s.draw = function () {
    s.speed = s.map(s.mouseX, 0, s.width, 0 , 10);
    s.background(0);
    s.translate(s.width/2, s.height/2);

    for (var i = 0; i < s.stars.length; i++){
      s.stars[i].update();
      s.stars[i].show();
    }
  }
};
