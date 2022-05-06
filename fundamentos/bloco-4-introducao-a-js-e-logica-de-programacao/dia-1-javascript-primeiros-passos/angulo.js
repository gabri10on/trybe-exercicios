const angulo1 = 30;
const angulo2 = 30;
const angulo3 = 900;
let valid = null;
let total = (angulo1 + angulo2 + angulo3);
if (total == 180) {
    valid = true;
}
else {
    valid = false;
}
console.log(valid);