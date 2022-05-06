const peao = "peão";
const torre = "torre";
const cavalo = "cavalo";
const bispo = "bispo";
const rainha = "rainha";
const rei = "rei"
let escolha = "REIr".toLowerCase();
if (escolha === peao) {
    console.log("O Peão só exerce movimento de 1 casa pra frente");
}
else if (escolha === torre) {
    console.log("A Torre movimenta-se em direção reta pelas colunas ou fileiras");
}
else if (escolha === cavalo) {
    console.log("O Cavalo movimenta-se sempre em L, ou seja, duas casas para frente, para o lado ou para trás e uma para a esquerda ou direita");
}
else if (escolha === bispo) {
    console.log("O Bispo move-se pela diagonal, sendo que nunca poderá mudar a cor das casas em que se encontra, uma vez que movendo-se em diagonal, não lhe é permitido passar para uma diagonal de outra cor.");
}
else if (escolha === rainha) {
    console.log("A Rainha é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal.");
}
else if (escolha === rei) {
    console.log("O Rei move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance");
}
else {
    console.log("Você naõ digitou uma peça de xadrez.")
}