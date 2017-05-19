;'use strict';
var fs = require('fs');
var postcss = require('postcss');


var colorPalette = require('./color-palette');

// Print the AST and the CSS.
/*
fs.readFile('example.css', (err, css) => {
  postcss().process(css, {}).then( (result) => {
    console.log(result.css);
    // console.log(result);
    console.log(result.root.nodes[0].nodes);
  });
});
*/

function isVar(x) {
  return (typeof(x) === "string") && (x.length > 0) && x[0] === "$";
}

// Returns a new CSS AST
function substituteVariables(css, colorPalette) {
  return postcss().process(css, {}).then(result => {

    css.walk(function (node) {
      
    });
    
    return result;
  });
}

fs.readFile('example.css', (err, css) => {
  substituteVariables(css).then((css) => console.log(css.css));
});
