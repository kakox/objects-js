const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 33234566", "11 23456534"],
    
}
cliente.enderecos = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

for (let chave in cliente){
    let tipo = typeof cliente [chave];
    if ( tipo !== "object" && tipo !== "function"){

    console.log(`A chave ${chave} tem o valor ${cliente[chave]} `);

    }

}