// concatenar String

var string = "Os alunos estão"
var string2 = "reprovados "
var string3 = "ou aprovados? "
var num1 = 3
var num2 = 4

// + >> soma ou concatenação
console.log(string + string2 + string3)

// template string 

console.log(`${string + string2 + string3 + (num1 + num2)}`)

// concatenar string e fazer ao mesmo tempo contas matematicas

console.clear()

// criar uma variavel que vai receber o seguinte texto IOS fez uma excursão na TOTVS com três cabritinhos(alunos)

var text1 = "IOS fez uma excursão na TOTVS com três cabritinhos(alunos)"

//   I O S - T O T V S
//   0 1 2 4 6 7 8 9 10

console.log(text1.charAt(0))
console.log(text1.charAt(1))
console.log(text1.charAt(2))

console.log(text1[0])
console.log(text1[1])
console.log(text1[2])

// tamanho string 
var texto1 = "IOS"
var texto2 = "Está chovendo hamburguer"

console.log(`na variavel texto1 tem ${texto1.length} caracteres}`)

console.log(`na variavel text2 tem ${texto2.length} caracteres`)

var nume = "juao"
console.log(`o nome juao tem ${nume.length} caracteres` )

console.clear()

const s = 'Hello world'

// Maiusculo e minúsculo
console.log(s.toUpperCase())
console.log(s.toLowerCase())

// substring 
const str = 'Gorilla'

console.log(str.substring(1, 4))
// saída esperada: ori 1 primeira letra 4 ultimas 

// substituir string 
console.clear()

let mensagem = 'venham para a microsoft!'
console.log(mensagem)

let novaMensagem = mensagem.replace('Microsoft', 'IOS')
console.log(novaMensagem)

// remover espaços

console.clear()


var text8 = '/      Olá alunos do IOS!       /'

console.log(text8)
console.log(text8.trim())



