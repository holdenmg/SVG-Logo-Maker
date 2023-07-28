const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');
const Circle = require( './lib/shapes.js');
const Square = require('./lib/shapes.js');
const Triangle = require('./lib/shapes.js');


const questions = [ {
    type: 'input',
    message: 'Enter text for logo (Must not be more than 3 characters)',
    name: 'text',
  },
  {
    type: 'input',
    message: 'Enter a text color:',
    name: 'text-color',
  },

  {
    type: 'list',
    message: 'Choose shape',
    name: 'shape',
    choices: ['Circle','Square','Triangle']
  },
  {
    type: 'input',
    message: 'Enter shape color',
    name: 'shape-color',
  },

];

//Function to write svg content
function writeToFile(fileName, data) {
  const svgContent = createSvg(data);
  fs.writeFile(fileName, logoSVG, (err) =>
  err ? console.log(err) : console.log("Generated logo.svg")
  )};

  function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        if(answers.shape = 'Cirlce'){
           const logo = new Circle();
           writeToFile('logo.svg', logo.render())
        }
        else if(answers.shape = 'Triangle') {
            const logo = new Triangle();
            const logoSVG = logo.render()
            writeToFile('logo.svg', logoSVG)
        }
        else{
            const logo = new Square();
            const logoSVG = logo.render()
            writeToFile('logo.svg', logoSVG)
        }
    })
    };

    init();
