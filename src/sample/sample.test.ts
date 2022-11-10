import { greetings } from './sample.js';

describe('Given function greetings', () => {
    describe('When I run it with the argument "Pepe"', () => {
        const userName = 'Pepe';
        const result = greetings(userName);
        test('Then the return should include "Pepe"', () => {
            expect(result).toContain(userName);
        });
    });
});
