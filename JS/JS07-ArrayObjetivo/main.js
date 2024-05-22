//Objetos

let pericles = {
    nome: "pericles",
    peso: 100000,
    tipo: "asiatico", 
    hobbie:['cantar', 'comer'],

    // criar outro objeto
   endereço: {
       rua: "Rua da comida",
       numero: 400,
       cidade: 'são picanha',
       estado: 'SP',
    }
}




console.log(pericles)
console.log(pericles.peso) // retorno
console.log(pericles.hobbie) // retornar todos os hobbies
console.log(pericles.hobbie[1]) // retornar apenas um hobbie
console.log(pericles.endereço) // retornar todo o endereço
console.log(pericles.endereço.rua) // retornar apenas uma informação


console.clear()

let tarefa = [
     {
        id: 1,
        IsPronta: true,
        NomeTarefa: "Pular",
     },

     tarefa2 = {
        id: 2,
        IsPronta: false,
        NomeTarefa: "voar",
     },

    tarefa3 = {
       id: 3,
       IsPronta: true,
       NomeTarefa: "correr",
     }
]

console.log(tarefa3)

 /// crie mais 2 objetos com duas tarefas diferentes, uma dessas tarefas terá a propriedade IsPronta com o valor false

 console.clear()

 
 let recebeJAINSON = JSON.stringify(pericles)
 
 console.log(pericles)
 console.log(recebeJAINSON)
 
 console.clear()
 
 var JSONITO = '{"CorDosOlhos":"Catanhos","Altura":1.81,"corCabelo":"Castanho Escuro","nome":"Leandro","sobrenome":"Luiz","hobbie":["Jogar","Musicas","League Of Legends"],"endereco":{"rua":"Santana","numero":81,"cidade":"são paulo","estado":"SP"}}'
 
 console.log(JSONITO)
 console.log(JSON.parse(JSONITO))