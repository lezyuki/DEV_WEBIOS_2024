// Array 
var numeros = [-2,  40,  16,  111,  33,  64]

console.log(numeros)
console.log(numeros[3])

// var aleatorios = [true, "texto", 345, "texto", false]
// console.log(aleatorios)
console.clear()

// crie um array unidimensional com 7 posições em todas as posições insira o nome de 7 pessoas especiais em sua vida. retorne no console a pessoa na posição 3 e 7;
var numeros = ["andre", "Matheus", "Carlos", "Lucas", "Sueli", "Leticia", "Ricardo", "Davi"]

console.log(numeros[3])
console.log(numeros[7])

console.clear()

var bidi = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350, 23456],
]
console.log(bidi)
console.clear()

var bidu = [
    ["Pipoca", "Arroz", "Feijão", "Batata"],
    ["Molho de tomate", "Alface", "Leite em pó", "Detergente"],
    ["Leite de coco", "Candida", "Maçã", "Vinagre"],
    ["Bolacha", "Azeite", "Limão", "Shampoo"],
]
console.log(bidu[0][2])
console.log(bidu[1][3])
console.log(bidu[2][2])
console.log(bidu[3][3])

console.clear()

var moeda = ["real", "euro", "coroa", "dolar"]

console.log(moeda)
moeda[3] = "Yen"
console.log(moeda)

console.clear()

let numArray = [2, 4, 6, 8 , 10]
console.log(numArray)
var mudanca = numArray.toString()
console.log(mudanca)

console.clear()

var teste1 = [5, 10, 15, 20, 25, 30]
console.log(teste1)
var mudanca2 = teste1.join("_")
console.log(mudanca2)
// transforma arrat em string e muda o separador dos valores

console.clear()

var teste1 = [5, 10, 15, 20, 25, 30]

console.log(teste1)
var mudanca2 = teste1.join(" & ")
var mudanca3 = teste1.toString()
console.log("Com join")
console.log(mudanca2)
console.log("Com o toString")
console.log(mudanca3)
// transforma arrat em string e muda o separador dos valores

console.clear()

let array = [0, 2, 3, 5, 7]
console.log(array.length)

console.clear()

const frutas1 = ['banana', 'laranja', 'maçã', 'Manga']
let Manga = frutas1.pop()
console.log(frutas1)
console.log(Manga)
// remove SEMPRE o ultimo elemento no caso a "manga"
console.clear()

const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga']
let y = frutas2.push('kiwi')
console.log(frutas2)
console.log(y)

console.clear()

const frutas3 = ['Banana', 'Laranja', 'pera', 'melancia']
let banana = frutas3.shift()
console.log(frutas3)
console.log(banana)
//o método shift() remove o elemento no início do array deslocando todos os elementos em uma posição e retorna esse elemento retirado

console.clear()
const frutas4 = ['Banana', 'Laranja']
console.log(frutas4)
let w = frutas4.unshift( 'kiwi' )
console.log(frutas4)
console.log(w) 

console.clear()

let frutas5 = ['Banana', 'Laranja', 'Maça', 'Manga']
delete frutas5[2];
console.log(frutas5);