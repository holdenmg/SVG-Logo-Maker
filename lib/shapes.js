class Shape {
    constructor(svg) {
      this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
      
    }
  }
  class Circle extends Shape {
    constructor(svg, shapeData) {
      super(svg);
      this.shapeData =  `<circle cx="150" cy="100" r="80" fill=${shape-color} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${text-color}>${text}</text></svg>`;
      
    }
    render() {
        return this.svg + this.shapeData;
    };
  };

  class Triangle extends Shape {
    constructor(svg, shapeData) {
      super(svg);
      this.shapeData =  `<polygon points="150, 18 244, 182 56, 182" fill=${shape-color} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${text-color}>${text}</text></svg>`;
      
    }
    render() {
        return this.svg + this.shapeData;
    };
  };

  class Square extends Shape {
    constructor(svg, shapeData) {
      super(svg);
      this.shapeData =  `<square cx="150" cy="100" r="80" fill=${shape-color} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${text-color}>${text}</text></svg>`;
      
    }
    render() {
        return this.svg + this.shapeData;
    };
  };
  
  module.exports = Shape, Circle, Triangle, Square;