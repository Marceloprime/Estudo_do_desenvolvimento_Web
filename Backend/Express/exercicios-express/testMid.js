function test(nome){
    console.log('Sucesso no teste ' + nome)

    return (req,res,next) => {
        next()
    }
}

module.exports = test