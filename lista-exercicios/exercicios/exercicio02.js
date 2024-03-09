/*2. Escreva um script para ler o número total de eleitores de um município, o 
número de votos brancos, nulos e válidos. Calcular e escrever o percentual que 
cada um representa em relação ao total de eleitores.*/

let prompt = require('prompt-sync') ();

// let votosvalidos = Number(prompt("Digite os votos validos: "))
// let votosbrancos = Number(prompt("Digite os votos brancos: "))
// let votosnulos = Number(prompt("Digite os votos nulos: "))

let votosvalidos = 53050
let votosbrancos = 5600
let votosnulos = 1350

let eleitores = votosvalidos + votosbrancos + votosnulos
console.log(`A eleição municipal ocorreu com ${eleitores} eleitores`)

let percvalidos = (votosvalidos / eleitores) *100
let percbrancos = (votosbrancos / eleitores) *100
let percnulos = (votosnulos / eleitores) *100

console.log(`O percentual de votos válidos é ${percvalidos.toFixed(2)}%`)
console.log(`O percentual de votos brancos é ${percbrancos.toFixed(2)}%`)
console.log(`O percentual de votos nulos é ${percnulos.toFixed(2)}%`)
