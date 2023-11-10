const N3 = require('n3');

const { DataFactory } = N3;

const { namedNode, blankNode, literal, defaultGraph, quad } = DataFactory;

const writer = new N3.Writer({ format: 'N3' });

let x = blankNode();
let g = blankNode();
writer.addQuad(
    x,
    namedNode('urn:x:says'),
    g
);

writer.addQuad(
    x,
    namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
    namedNode('urn:x:Cat'),
    g
);

writer.end((error, result) => console.log(result));
