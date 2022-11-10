import fs from 'fs/promises';

(async () => {
    const file = './dist/data.txt';
    const file2 = './dist/data2.txt';
    const data = await fs.readFile(file);
    const info = 'Estudio node 😍';
    console.log(data.toLocaleString());
    const finalInfo = data.toLocaleString() + info;
    await fs.writeFile(file2, finalInfo);
    const data2 = await fs.readFile(file2);
    console.log(data2.toLocaleString());
})();
