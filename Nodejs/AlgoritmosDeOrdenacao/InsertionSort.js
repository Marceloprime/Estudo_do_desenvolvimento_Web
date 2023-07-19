const list = [2,4,53,1,6,-1,-3,-5]

function insertionSort(lista){
    for(let x = 0; x < lista.length; x++){
        let analise = x
        while(analise > 0 && lista[analise] < lista[analise - 1]) {
            let itemAnalise = lista[analise]
            let itemAnterior = lista[analise - 1]

            lista[analise] = itemAnterior
            lista[analise -1] = itemAnalise

            analise--
        }
    }
}

insertionSort(list)

console.log(list)