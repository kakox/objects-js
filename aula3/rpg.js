const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   const guerreiro = {...fichaGuerreiro, ...equipGuerreiro}

   console.log(guerreiro)

//    const mago = {
//  nome: "Gandalf",
//  classe: "mago"
// }
//  const guerreiro = {
//  nome: "Aragorn",
//  classe: "guerreiro"
// }

// const ranger = {
//  nome: "Legolas",
//  classe: "ranger"
// }

// const personagens = {...mago, ...guerreiro, ...ranger};
// console.log(personagens);