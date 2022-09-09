import * as fs from 'node:fs' ;

console.log(fs.readFileSync("file1.txt", 'utf8'));

import * as superheroes from 'superheroes';

console.log(superheroes.random());