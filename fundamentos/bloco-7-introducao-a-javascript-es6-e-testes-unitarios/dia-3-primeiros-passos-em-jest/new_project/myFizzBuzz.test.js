const myFizzBuzz = require('./myFizzBuzz.js');

describe('Requerimentos do ex 3', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado => num = 15', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado => num = 9', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado => num = 10', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado => num = 11', () => {
        expect(myFizzBuzz(11)).toBe(11);
    });
    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado => num = a', () => {
        expect(myFizzBuzz('a')).toBe(false);
    });
});