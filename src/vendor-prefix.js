;'use strict';
var postcss = require('postcss');
var fs = require('fs');
var prefixes = require('./vendor-prefixes.json');

var rootNode = postcss.parse(fs.readFileSync('example-2.css', { encoding: 'utf-8' }));

function declHasPrefix(decl, prefixes) {
  if (prefixes.hasOwnProperty(decl.prop)) {
    return [ true, prefixes[decl.prop]];
  } else {
    return [ false, null ];
  }
}

// Por cada element en el arreglo prefix.prefixes va a clonar la declaration y luego remplazar el side por el elemento iterado y lo va a insertar en el padre de la decl
function insertPrefixes(decl, prefix) {
  prefix.prefixes.map(function (el) {
    var newDecl = decl.clone()
    newDecl[prefix.side] = el;
    decl.parent.append(newDecl);
  });

}

var prefixedDeclarations = []
rootNode.walkDecls(decl => {
  var [ isPresent, prefix ] =  declHasPrefix(decl, prefixes)
  if (isPresent) {
    prefixedDeclarations.append(insertPrefixes(decl, prefix));
    
  };
})

