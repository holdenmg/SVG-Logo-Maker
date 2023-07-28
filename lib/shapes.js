class Shape {
    constructor(text, fontColor, shapeColor) {
     this.text = text;
     this.fontColor = fontColor;
     this.shapeColor = shapeColor;
    }
  }
  class Circle extends Shape {
    constructor(text, fontColor, shapeColor) {
      super(text, fontColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill=${this.shapeColor} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.fontColor}>${text}</text></svg>`;
    }
  };

  class Triangle extends Shape {
    constructor(text, fontColor, shapeColor) {
        super(text, fontColor, shapeColor);
      }
      render() {
          return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.fontColor}>${text}</text></svg>`
    }
  };

  class Square extends Shape {
    constructor(text, fontColor, shapeColor) {
        super(text, fontColor, shapeColor);
      }
      render() {
          return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.fontColor}>${text}</text></svg>`
    }
  };
  
  module.exports = Shape, Circle, Triangle, Square;