const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 pessoa.seguroSocial = "312321-32";
 
 console.log('os dados dessa pessoa são:', pessoa);

 pessoa.cpf = "222333564-86";

 console.log(`Os 4 ultimos digitos do cpf são: ${pessoa.cpf.substring(0, 4)}`);


