const notas = [ 10, 6.5, 8, 7.5]

// map() vs forEach()
// The map() method returns a new array, whereas the forEach() method does not return a new array.

let somaDeNotas = 0
notas.forEach((nota)=>{
    somaDeNotas += nota
})

console.log(somaDeNotas)