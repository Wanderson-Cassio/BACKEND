// 9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync') ();

console.log("Exercício 09")

const numero1 = Number(prompt("Digite o primeiro número: "))
const numero2 = Number(prompt("Digite o segundo número: "))

const resultado = (numero1 + numero2) * numero1

console.log("Resultado é de:",resultado)