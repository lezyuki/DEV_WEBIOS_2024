class contaBancaria{
    constructor (nome, idade, salario, sexo, agencia, conta, numeroConta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }
    contaPoupanca(){
        const taxaMensal = 0.015; 
        const desconto = this.salario * taxaMensal; 
        const novoSalario = this.salario - desconto; 
        return {
            dados: this, 
            novoSalario: novoSalario 
        }
    }
    contaCorrente(){
        const taxaMensal = 0.036;
        const desconto = this.salario * taxaMensal;
        const novoSalario = this.salario - desconto;
        return {
            dados: this,
            novoSalario: novoSalario
        }
    }
    contaEstudante(){
        const taxaMensal = 0.012;
        const desconto = this.salario * taxaMensal;
        const novoSalario = this.salario - desconto;
        return {
            dados: this,
            novoSalario: novoSalario
        }
    }
}

let clientePoupanca = new contaBancaria("João", 50, 8000, "Masculino", 1222, "Poupança", 517843258)
let clienteCorrente = new contaBancaria("Cleber", 25, 5500, "Masculino", 8978, "Corrente", 912355645)
let clienteEstudante = new contaBancaria("Julia", 18, 1400, "Feminino", 7623, "Estudante", 532758121)

console.log("Conta Poupança:", clientePoupanca.contaPoupanca());
console.log("Conta Corrente:", clienteCorrente.contaCorrente());
console.log("Conta Estudante:", clienteEstudante.contaEstudante());