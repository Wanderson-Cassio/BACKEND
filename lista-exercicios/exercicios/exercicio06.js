// 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

const prompt = require('prompt-sync') ();

console.log("Exercício 6")

let salarioF = Number(prompt('Digite o salário fixo por mês R$: '))
let nCarrosV = Number(prompt('Digite o número de carros vendidos '))
const comissaoFixa = 0.02
const comisTotalVendas = 0.05
const vCarro = 32000 // Valor do carro para o consumidor final


let valorTotalVendas = vCarro * nCarrosV;
let comissaoTotal =(comissaoFixa + comisTotalVendas )
let salarioFinal = salarioF + (valorTotalVendas * comissaoTotal)

console.log(`O salário final do vendedor é R$ ${salarioFinal.toFixed(2)}`)