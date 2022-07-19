const sum = require('./sum.js');

describe('Resultado da soma', () => {
    it('Soma de 4 + 5', () => {
        expect(sum(4,5)).toBe(9);
    });
    it('Soma de 0 + 0', () => {
        expect(sum(0,0)).toBe(0);
    });
    test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
        expect(() => {sun()}).toThrow();
    });
    it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => {sum(5,'0')}).toThrowError(new Error('parameters must be numbers'));
    });
})