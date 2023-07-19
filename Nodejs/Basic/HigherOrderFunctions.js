// Uma higher order function é uma função que recebe uma outra como argumento, ou uma função que retorna outra função.

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}

const usuarioLogin = (nome) => {
    let array = []
    for( i = 0; i < 90000; i++){
        array.push(i)
    }
    return acesso(nome)
}

usuarioLogin("Luke")