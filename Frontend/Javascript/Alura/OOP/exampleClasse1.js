class Conta{
    
    constructor(cliente, cpf, cidade){
        
        this.saldo = 0
        this.cliente = cliente
        this.cpf = cpf
        this.cidade = cidade
        
    }


    set Cidade(valor){
        if(valor !== ""){
            this.cidade = valor
        }
    }

    get Cidade(){
        return this.cidade
    }
}



let conta1 = new Conta('Marcelo', '0000000', 'Ribeirão Preto')

console.log(conta1)

conta1.Cidade = 'São Paulo'

console.log(conta1)

conta1.Cidade = ''

console.log(conta1)