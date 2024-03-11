// 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

let prompt = require('prompt-sync') ();

let salarioF = 3000 //Number(prompt('Digite o salário fixo por mês R$: '))
let nCarrosV = 3 //Number(prompt('Digite o número de carros vendidos '))
let comissaoF = 0.02
let comissaoV = 0.05
let vCarro = 32000

let vTotalV = vCarro * nCarrosV;

let comissaoTotal =(comissaoF + comissaoV )

let salarioFinal = salarioF + (vTotalV * comissaoTotal)

console.log(`O salário final do vendedor é R$ ${salarioFinal.toFixed(2)}`)