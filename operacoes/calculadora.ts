import { somar, subtrair, dividir, multiplicar, aluno } from "./calculos";
import read = require('readline-sync');

let resultadoDivisao: number | null;

let entrada1: number = read.questionInt("Entre com o primeiro valor: ");
let entrada2: number = read.questionInt("Entre com o segundo valor: ");

console.log(`A soma entre ${entrada1} e ${entrada2} é igual ${somar(entrada1, entrada2)}`)
console.log(`A multiplicacao entre ${entrada1} e ${entrada2} é igual ${multiplicar(entrada1, entrada2)}`)
console.log(`A Subtracao entre ${entrada1} e ${entrada2} é igual ${subtrair(entrada1, entrada2)}`)
resultadoDivisao = dividir(entrada1, entrada2)

if(resultadoDivisao != null){
    console.log(`A divisao entre ${entrada1} e ${entrada2} é igual ${dividir(entrada1, entrada2)}`)
} else {
    console.log("Nao existe divisao por zero")
};

aluno();