const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//EX1

console.log('EX1');
const addNewKey = (obj, key, value) => {
  obj[key] = value;
}

addNewKey(lesson2, 'turno', 'noite');
console.log(lesson2);

//EX2

console.log('\nEX2');
const objectKeys = (obj) => Object.keys(obj);
console.log(objectKeys(lesson1));

//EX3

console.log('\nEX3');
const tamanhoObjeto = (obj) => Object.keys(obj).length;
console.log(tamanhoObjeto(lesson1));

//Ex4

console.log('\nEX4');
const objectValue = (obj) => Object.values(obj);
console.log(objectValue(lesson1));

//EX5

console.log('\nEX5');
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//EX6

console.log('\nEX6');
const numeroTotalEstudantes = (obj) => obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
console.log(`Número de estudantes total é igual á ${numeroTotalEstudantes(allLessons)}.`);

//EX7

console.log('\nEX7');
const getValueByNumber = (obj, value) => Object.values(obj)[value];
console.log(getValueByNumber(lesson1, 0));

//EX8
console.log('\nEX8');
const verifyPair = (obj, textKey, textValue) => {
  const getKey = Object.keys(obj);
  const getValue = Object.values(obj);
  for (let index = 0; index < getKey.length ; index += 1) {
    if (getKey[index] === textKey && getValue[index] === textValue) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
