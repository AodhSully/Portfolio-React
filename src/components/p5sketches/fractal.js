export default function sketch (f) {

  var angle = 0;
  var slider;
  // var TWO_PI = f.TWO_PI;
  // var PI = f.PI;
  //p5.disableFriendlyErrors = true;

  f.setup = function () {
    f.createCanvas(900, 400);
    slider = f.createSlider(0, f.TWO_PI, f.PI / 4, 0.01);
  }

  f.draw = function () {
    f.background(51);
    angle = slider.value();
    f.stroke(255);
    f.translate(200, f.height);
    f.branch(100);
  }

  f.branch = function (len) {
    // var len = 200;
    f.line(0,0,0, - len);
    f.translate(0, - len);
    if (len > 4) {
      f.push();
      f.rotate(angle);
      f.branch(len * 0.67);
      f.pop();
      f.push();
      //line(0, 0, 0, - len * 0.67);
      f.rotate(-angle);
      f.branch(len * 0.67);
      f.pop();
    }

  }

}
