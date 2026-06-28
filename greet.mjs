import { readFileSync, writeFileSync } from 'node:fs';

const name = readFileSync('data.txt', 'utf8').trim();
const line = `Hello, ${name}!`;
writeFileSync('out.txt', line + '\n');
console.log('greet task ran:', line);
