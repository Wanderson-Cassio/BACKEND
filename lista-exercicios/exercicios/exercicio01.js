// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.

const prompt = require('prompt-sync') ();

console.log("Exercício 1")
console.log("Calcular média")

let nota1 = Number(prompt("Digite a nota 1: "))
let nota2 = Number(prompt("Digite a nota 2: "))
let nota3 = Number(prompt("Digite a nota 3: "))
let nota4 = Number(prompt("Digite a nota 4: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("Sua média é: " + media)

if(media >= 7) {
    console.log("Você foi aprovado!")
} else {
    console.log("Você foi reprovado!")
}