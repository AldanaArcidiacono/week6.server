import fs from 'fs/promises';
import { Pet } from './pet';

(async () => {
    const file = './pets.json';
    const file2 = './pet2.json';
    const data = await fs.readFile(file);
    const pets: Array<Pet> = JSON.parse(data.toLocaleString());
    const petsMonth: Array<Pet> = pets.map((item) => ({
        ...item,
        age: item.age * 12,
    }));
    console.log(petsMonth);
    await fs.writeFile(file2, JSON.stringify(petsMonth));
})();
