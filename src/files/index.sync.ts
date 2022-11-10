import fs from 'fs';

const file = './dist/data.txt';

const data = fs.readFileSync(file);

const info = 'Estudio node 😍';
const finalInfo = data.toLocaleString() + info;

const file2 = './dist/data2.txt';
fs.writeFileSync(file2, finalInfo);
const data2 = fs.readFileSync(file2);
console.log(data2.toLocaleString());
