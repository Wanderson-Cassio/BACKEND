// 8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
// OBS: V = PI * Raio^2 * Altura

const prompt = require('prompt-sync') ();

console.log("Exercício 8")

const raio = Number(prompt('Digite o raio caixa d’água cilíndrica: '))
const altura = Number(prompt('Digite a altura da caixa d’água cilíndrica: '))

const Volume = Math.PI * (raio ** 2) * altura;

console.log(`O volume de uma caixa d’água cilíndrica é de: ${Volume.toFixed(2)}`)