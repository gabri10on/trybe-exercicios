let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: true,
  }
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell.s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: true,
  }

  for (index in info, info2) {
      console.log(info[index], "e", info2[index])
  }