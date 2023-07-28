const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(text, fontColor, shapeColor) {
        super(text, fontColor, shapeColor);
      }
      render() {
          return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="110" y="70" width="80" height="80" fill=${this.shapeColor} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.fontColor}>${this.text}</text></svg>`
    }
  };

  module.exports = Square;