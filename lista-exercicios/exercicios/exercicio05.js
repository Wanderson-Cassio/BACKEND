/*5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a 
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
Escreva um script para ler o custo de fábrica de um carro, a porcentagem do 
distribuidor e o imposto, e calcular e escrever o custo final ao consumidor*/

const prompt = require('prompt-sync') ();

console.log("Exercício 05")

let fabrica = Number(prompt('Digite o valor de fábrica R$: '))
let distribuidor = Number(prompt('Digite a porcentagem do distribuidor: '))
let impostos = Number(prompt('Digite a porcentagem dos impostos: '))

let porcentagem = distribuidor + impostos
let valortotal = ((fabrica * porcentagem) / 100) + fabrica

console.log(`O custo final ao consumidor é R$ ${valortotal}`)
