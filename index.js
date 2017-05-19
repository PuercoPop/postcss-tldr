;'use strict';
var fs = require('fs');
var postcss = require('postcss');


var colorPalette = require('./color-palette');

// Print the AST and the CSS.

fs.readFile('valid.css', (err, css) => {
  postcss().process(css, {}).then( (result) => {
    console.log(result.css);
    // console.log(result);
    console.log(result.root.nodes[0].nodes);
  });
});
