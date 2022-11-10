import { program } from 'commander';
import * as dotenv from 'dotenv';

dotenv.config();

// La key esta guardada en un archivo .env
const key = process.env.KEY as string;
const port = process.env.PORT || 3500;

console.log(key);
console.log(port);

// Permite definir opciones de nombre o abreviatura y guardarlo.
// En este caso guardamos un valor
program.option('-u, --user <char>').option('-h, --help');
// Lo
program.parse();

const { user, help } = program.opts();
console.log({ user }, { help });
if (help) {
    console.log('Escribe -u, --user para indicar el nombre de usuario');
}
