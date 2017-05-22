;'use strict';
var fs = require('fs');
var postcss = require('postcss');
var colors = require('./color-palette.json')

/*

- Find all the rules.
- Walk the properties.
- Replace the strings with sigil.

*/

function isVar(x) {
  return (typeof(x) === "string") && (x.length > 0) && x[0] === "$";
}

// // Returns a new CSS AST

function substVar(rootNode) {
  rootNode.walkDecls(rule => {
    if (isVar(rule.value)) {
      rule.value = colors[rule.value.slice(1)];
    }
  });
};

var rootNode = postcss.parse(fs.readFileSync('example.css', { encoding: 'utf-8' }));
substVar(rootNode);
console.log(rootNode.toString());
