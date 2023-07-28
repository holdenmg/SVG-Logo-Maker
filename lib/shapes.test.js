const Circle = require( './circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
//these tests are testing the render method of each shape
describe('Circle', () => {
    
    describe('render', () => {
      it('should render a svg html based on prompt input', () => {
        const circle = new Circle('hmg', 'blue', 'green');
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill=green /><text x="150" y="125" font-size="60" text-anchor="middle" fill=blue>hmg</text></svg>`
        expect(circle.render()).toEqual(svg);
      });
    });
});

describe('Triangle', () => {
    
    describe('render', () => {
      it('should render a svg html based on prompt input', () => {
        const triangle = new Triangle('hmg', 'pink', 'purple');
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill=purple /><text x="150" y="125" font-size="60" text-anchor="middle" fill=pink>hmg</text></svg>`
        expect(triangle.render()).toEqual(svg);
      });
    });
});

describe('Square', () => {
    
    describe('render', () => {
      it('should render a svg html based on passed in constructors', () => {
        const square = new Square('hmg', 'red', 'magenta');
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="110" y="70" width="80" height="80" fill=magenta /><text x="150" y="125" font-size="60" text-anchor="middle" fill=red>hmg</text></svg>`
        expect(square.render()).toEqual(svg);
      });
    });
});

