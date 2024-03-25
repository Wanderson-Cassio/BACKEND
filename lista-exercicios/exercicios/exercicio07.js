// 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require('prompt-sync') ();

console.log("Exercício 07")

let nota1 = Number(prompt("Digite sua primeira nota: "))
let nota2 = Number(prompt("Digite sua segunda nota: "))

const peso1 = 4
const peso2 = 6

let nota1Peso1 = (nota1 * peso1)
let nota2Peso2 = (nota2 * peso2)

let mediaFinal = (nota1Peso1 + nota2Peso2) / 10
console.log(`A média final é ${mediaFinal} `)