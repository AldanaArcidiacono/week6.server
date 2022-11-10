import fs from 'fs';

const file = './dist/data.txt';
const file2 = './dist/data2.txt';
const info = 'Estudio node 😍';

fs.readFile(file, (err, data) => {
    console.log(data.toLocaleString());
    const finalInfo = data.toLocaleString() + info;
    fs.writeFile(file2, finalInfo, () => {
        fs.readFile(file2, () => {
            console.log(data.toLocaleString());
        });
    });
});
