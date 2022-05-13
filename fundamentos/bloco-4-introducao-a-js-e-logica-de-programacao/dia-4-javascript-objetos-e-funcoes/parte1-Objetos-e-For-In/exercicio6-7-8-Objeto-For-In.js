let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [ 
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ]
  };

console.log("O livro favorito de", leitor.nome, leitor.sobrenome + 'se chama', "'" + leitor.livrosFavoritos[0].titulo +"'.");

for (let index = 0; index < leitor.livrosFavoritos.length; index = index + 1) {
    console.log("O livro favorito de", leitor.nome, leitor.sobrenome + 'se chama', "'" + leitor.livrosFavoritos[index].titulo + "'.");
}

for (index in leitor.livrosFavoritos) {
    console.log("O livro favorito de", leitor.nome, leitor.sobrenome + 'se chama', "'" + leitor.livrosFavoritos[index].titulo + "'.");
}

console.log("Júlia tem", leitor.livrosFavoritos.length, "livros favoritos.")