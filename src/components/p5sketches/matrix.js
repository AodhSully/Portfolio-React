export default function sketch (m) {

  let streams = [];
  let fadeInterval = 1.6;
  let symbolSize = 18;

   m.setup = function () {
    m.createCanvas(
      900, 400
      // window.innerWidth,
      // window.innerHeight
    );
    m.background(51);

    let x = 0;
    for (var i = 0; i <= m.width / symbolSize; i++) {
      var stream = new m.Stream();
      stream.generateSymbols(x, m.random(-2000, 0));
      streams.push(stream);
      x += symbolSize
    }

    m.textFont('Consolas');
    m.textSize(symbolSize);
  }

  m.draw = function () {
    m.background(0, 150);
    streams.forEach(function(stream) {
      stream.render();
    });
  }

  m.Symbol = function (x, y, speed, first, opacity) {
    this.x = x;
    this.y = y;
    //fix value Expected an assignment or function call
    this.value;

    this.speed = speed;
    this.first = first;
    this.opacity = opacity;

    this.switchInterval = m.round(m.random(2, 25));

    this.setToRandomSymbol = function() {
      var charType = m.round(m.random(0, 5));
      if (m.frameCount % this.switchInterval === 0) {
        if (charType > 1) {
          // set it to Katakana symbols
          this.value = String.fromCharCode(
            0x30A0 + m.round(m.random(0, 96))
          );
        } else {
          // set it to numeric value
          this.value = m.round(m.random(0,9));
        }
      }
    }

    this.rain = function() {
      this.y = (this.y >= m.height) ? 0 : this.y += this.speed;
    }

  }

  m.Stream = function () {
    this.symbols = [];
    this.totalSymbols = m.round(m.random(5, 35));
    this.speed = m.random(5, 15);

    this.generateSymbols = function(x, y) {
      var opacity = 255;
      var first = m.round(m.random(0, 4)) === 1;
      for (var i =0; i <= this.totalSymbols; i++) {
        m.symbol = new m.Symbol(
          x,
          y,
          this.speed,
          first,
          opacity
        );
        m.symbol.setToRandomSymbol();
        this.symbols.push(m.symbol);
        opacity -= (255 / this.totalSymbols) / fadeInterval;
        y -= symbolSize;
        first = false;
      }
    }

    this.render = function() {
      this.symbols.forEach(function(symbol) {
        if (m.symbol.first) {
          m.fill(140, 255, 170, symbol.opacity);
        } else {
          m.fill(0, 255, 70, symbol.opacity);
        }
        m.text(m.symbol.value, m.symbol.x, m.symbol.y);
        m.symbol.rain();
        m.symbol.setToRandomSymbol();
      });
    }
  }
}
