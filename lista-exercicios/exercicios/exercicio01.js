// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.

let prompt = require('prompt-sync') ();


let notaP1 = prompt("Digite sua 1ª nota:")
let notaP2 = prompt("Digite sua 2ª nota:")
let notaP3 = prompt("Digite sua 3ª nota:")
let notaP4 = prompt("Digite sua 4ª nota:")

let nota1 = Number(notaP1)
let nota2 = Number(notaP2)
let nota3 = Number(notaP3)
let nota4 = Number(notaP4)

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("MEDIA: ", media)

if(media >= 7) {
    console.log("APROVADO!")
} else {
    console.log("REPROVADO!")
}