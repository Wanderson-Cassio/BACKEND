// comentário de uma linha 

/*
comentário em bloco consigo passar varias linhas
de informção
*/

// Impressão de informação no terminal
console.log('Testando impressão de informação no terminal')
console.error("testando console erro")
console.warn("testando console warn")

// criando variaveis com var
var nome;
nome = "Wanderson Cássio"
//nome = "Carlos Andrade"
console.log("Imprimindo a variavel nome: ")
console.log(nome)

//let e const

// const (constante)
// criar uma variável que não vai poder ser alterada
const primeiroNome = "Wanderson";
// primeiroNome = "Carlos" // não posso reatribuir variaveis constantes

console.log(primeiroNome)

//let
//criar variável que podem ser alteradas
let idade
idade = 20
idade = 30
idade = "Trinta"

console.log("imprimindo o valor da variável idade ( com let)")
console.log(idade)

// Tipoos de dados
// string
let nomeCompleto = "Wanderon Cássio"
nomeCompleto = 'Wanderson Cássio'

// let textoOla = "Olá", + nomeCompleto + ", tudo bem e você?" + "sahsahs" + idade + "sahshahs";
// console.log(textoOla)

let textoOlaComTemplateString = `Olá ${nomeCompleto}, tudo bem com você?` // template string

console.log(textoOlaComTemplateString)

let nomeUsuario = "Wanderson "
let idadeUsuario = 30
let cursoUsuario = "Análise e Desenvolvimento de Sistemas"

// template string


let pessoaComTemplateString = `Olá ${nomeUsuario},
Sua idade é ${idadeUsuario}, 
Seu curso é ${cursoUsuario}. 
IESB `

console.log(pessoaComTemplateString)

//verificar o tipo de uma variável

console.log("Verificando o tipo de variável pessoaComTemplatString")
console.log(typeof pessoaComTemplateString)

// Tipo number
let numeroInteiro = 2000
let numeroNegativo = -60
let numeroFlutuante = 25.90

// Tipo array
//let listaCheia = ("Wolkswagem", "Fiat", "Honda")
//let listaCheiaMisturada = [1, 2, "Nome", null] 
lista = []

console.log(lista)

lista.push("PrimeiroItem")

console.log(lista)

lista.pop()

console.log(lista)

//Boolean
true
false

// Tipo object (Tipo objeto)
let pessoa = {
    nome: "Wanderson",
    idade: 20,
    curso: "ADS",
    semestre: "1/2024"
}

console.log("Imprimindo objeto pessoa")
console.log(pessoa)
console.log(typeof pessoa)
console.log(`Olá ${pessoa.nome}`)

//Tipos null
let telefone = null // ausência de valor

// Tipo undefined e NaN
let teste = 10 / "Olá"
console.log(teste)

// Tratamento de dados (String)
let texto = "Wanderson"
// .length // quantidade de caracteres do texto
console.log(texto.length)
// texto em caixa alto
console.log(texto.toUpperCase())
//  texto em caixa baixa
console.log(texto.toLowerCase())
// replace substituição
let valor = "10,50,"
console.log(valor)
valor = valor.replace(",", ".")
console.log(valor)


// Tratamento de dados (number)
let numero = 10.7777777
// fixar o numero de casas do numero flutuante
console.log(numero.toFixed(2))

// transformando flot para inteiro
console.log(Number.parseInt(numero))

let numeroIntero = 10

// transformando  inteiro para flot
console.log(Number.parseFloat(numeroIntero).toFixed(2))

let valorEmDolar = 10.54

//console.log(valorEmDolar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

//console.log(valorEmDolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}))

let idadeUser = "20"
console.log(Number(idadeUser))

console.log(Math.PI)


