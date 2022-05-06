let escolha = "REI".toLowerCase();
switch (escolha) {
    case "peão":
        console.log("O Peão só exerce movimento de 1 casa pra frente");
        break;
    
    case "torre":
        console.log("A Torre movimenta-se em direção reta pelas colunas ou fileiras");
        break;
    
    case "cavalo":
        console.log("O Cavalo movimenta-se sempre em L, ou seja, duas casas para frente, para o lado ou para trás e uma para a esquerda ou direita");
        break;

    case "bispo":
        console.log("O Bispo move-se pela diagonal, sendo que nunca poderá mudar a cor das casas em que se encontra, uma vez que movendo-se em diagonal, não lhe é permitido passar para uma diagonal de outra cor.");
        break;

    case "rainha":
        console.log("A Rainha é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal.");
        break;
    
    case "rei":
        console.log("O Rei move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance");
        break;
}
console.log("Você naõ digitou uma peça de xadrez.")