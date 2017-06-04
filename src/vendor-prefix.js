;'use strict';
var postcss = require('postcss');
var fs = require('fs');
var prefixes = require('../data/vendor-prefixes.json');


var rootNode = postcss.parse(fs.readFileSync('./css/example-2.css', { encoding: 'utf-8' }));

function declHasPrefix(decl, prefixes) {
  if (prefixes.hasOwnProperty(decl.prop)) {
    return [ true, prefixes[decl.prop]];
  } else {
    return [ false, null ];
  }
}

var prefixedDeclarations = []
rootNode.walkDecls(decl => {
  var [ isPresent, prefix ] =  declHasPrefix(decl, prefixes)
  if (isPresent) {
    prefix.values.forEach((value) => {
      decl.cloneBefore({value: value});
    });
  };
})

console.log(rootNode.toString());
