const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 33234566", "11 23456534"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo ){
            console.log("Saldo insuficiente");
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo} reais`);
        }
    },
};

cliente.efetuaPagamento(20);