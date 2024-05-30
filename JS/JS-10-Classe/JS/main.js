// class
// Objetos são compostos por duas coisas, Propriedades = Caracteristicas e Metodos = Funcionalidade
class carro {
    constructor(nome, ano){ // molde de objeto
        this.name = nome;
        this.year = ano;
    }
   
  // Funcionalidade para saber quantos anos o carro tem; ano atual - ano da criaçao
  // metodos
    anoCarro(anoAtual) {
        return anoAtual - this.ano;
  }
}

// new
// criar nova copia de classe = 
let carro1 = new carro("Kwid", "2012");
let carro2 = new carro("mobi", "2015");
let carro3 = new carro("HB20", "2020");

console.log(carro1)
console.log(carro2)
console.log(carro3)
console.clear()

let anoAtual = new Date() // 2024 - 2012 = 12  // 2026 - 2012 = 14
let recebeAno = anoAtual.getFullYear();

console.log(carro1)
console.log(anoAtual)
console.log(recebeAno)
console.log(carro1.anoCarro(recebeAno));

