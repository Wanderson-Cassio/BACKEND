const express = require('express')
const app = express()

// middlewares -> intermediários
app.use(express.json())

// logica -> contrato com os exercicios

// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
// PATH PARAM
app.get('/exercicio1/:qtdMinima/:qtdMaxima', (req, res) => {
    const quantidadeMinima = Number(req.params.qtdMinima)
    const quantidadeMaxima = Number(req.params.qtdMaxima)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})

// QUERY PARAM
app.get('/exercicio1', (req, res) => {
    const quantidadeMinima = Number(req.query.qtdMinima)
    const quantidadeMaxima = Number(req.query.qtdMaxima)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})

// BODY
app.post('/exercicio1', (req, res) => {
    const quantidadeMinima = req.body.qtdMinima
    const quantidadeMaxima = req.body.qtdMaxima

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})

/* 2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.
 */
app.post('/exercicio2', (req, res) => {
    const salario = req.body.salario
    
   if(salario < 1000){
        const reajuste = (salario * 30) / 100
        const novoSalario = reajuste + salario
        res.json (`O novo salario é de R$ ${novoSalario}`)
    }else{
        res.json ("O funcionário nâo tem direito ao reajuste")
    }
})


/* 3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.
*/
app.post('/exercicio3', (req, res ) => {

    const nome =  req.body.nome
    const salario =req.body.salario
    const vendas =req.body.vendas
    const porcentagem =req.body.porcentagem
    
    const porcenVendas =  (vendas * porcentagem) /100
    const salarioFinal = salario + porcenVendas
    
    res.json(`Vendedor ${nome} seu salário total foi de R$ ${salarioFinal}`)
})

/* 4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
 */
app.post('/exercicio4', (req, res) => {
    const nome = req.body.nome
    const distancia = req.body.distancia
    const tempo = req.body.tempo

    const velocidadeMedia = distancia / tempo

    res.json(`A velocidade média do ${nome} foi ${velocidadeMedia}Km/h`)
 })

/* 5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
*/
app.post('/exercicio5', (req, res) => {
    const salario = req.body.salario

    if(salario <= 2000) {
        const reajuste1 = salario + (salario * 50) /100
        res.json(`O salário reajustado é de R$ ${reajuste1}`)
    }if( salario > 2000) {
        const reajuste2 = salario + (salario * 30) /100
        res.send(`O salário reajustado é de R$ ${reajuste2}`)
    }
})

/* 6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
*/
app.post('/exercicio6', (req, res) => {
    const altura = req.body.altura
    const sexo = req.body.sexo

    if (sexo === 'homem') {
        const calcularPesoH = (72.7 * altura) - 58;
        res.json(`O peso ideal é ${calcularPesoH.toFixed(2)} kg.`);
    } 
    if (sexo === 'mulher') {
        const calcularPesoM = (62.1 * altura) - 58;
        res.json(`O peso ideal é ${calcularPesoM.toFixed(2)} kg.`);
    } 
    
})

/* 
 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.

    ex. de corpo da requisição:

[
    {
        "nome": "Porcelanato",
        "codigo": 1,
        "preco": 20.36
    },
    {
        "nome": "Cimento",
        "codigo": 2,
        "preco": 40.76
    },
        {
        "nome": "Argamassa",
        "codigo": 3,
        "preco": 50.76
    },
    ...
]
 */
app.post("/exercicio7", (req, res) => {
    const corpo = req.body
    let listaProdutos = []
    
    corpo.forEach(produto => {
        listaProdutos.push(produto)
    });

    let soma = 0
    listaProdutos.forEach(produto => {
        soma = soma + produto.preco
    })

    const media = soma / listaProdutos.length

    // calcular o maiorPreco
    let maiorPreco = 0
    // logica
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPreco){
            maiorPreco = produto.preco
        }
    })

    const resultado = {
        precoMedio: media.toFixed(2),
        maiorPreco: maiorPreco
    }
    res.json(resultado)
})

/* 8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%
*/

/* 9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.
*/


app.listen(3000, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})