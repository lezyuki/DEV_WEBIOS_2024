let arrayal = [17, 43, 8, 4, 97, 56, 29]

arrayal.forEach((numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} é par`)
    } else {
        console.log(`${numero} é ímpar`)
    }
})


// ex 2

let numbers = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61]
let numbersfilt = numbers.filter(numbers => numbers >= 20 && numbers<= 80);
console.log(numbersfilt)


