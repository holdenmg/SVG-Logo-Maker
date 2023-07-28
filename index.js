const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./shapes.js');
const Circle = require( './shapes.js');
const Square = require('./shapes.js');


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
    choices: ['circle','square','triangle']
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
  fs.writeFile(fileName, svgContent, (err) =>
  err ? console.log(err) : console.log("success")
  )};

  function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    writeToFile('logo.svg', answers)
    });
}