// Condições
// if else

// if(condicao) {
//     acao
// }

// if (condicao) {
//     acao
// } else {
//     acao
// }

// if(condicao) {
//     acao
// } if (condicao) {
//     acao
// } else {
//     acao
// }


let nomeAluno = "Wanderson"
let idade = 20
let curso = 'ADS'
/*
if(idade >= 18) {
    console.log("Aluno é maior de idade")
} else {
    onsole.log("Aluno é menor de idade")
}*/

if(idade >= 18 || curso == 'ADS') {
    console.log("Aluno válido")
}

if (nomeAluno == "Wanderson") {
    console.log("O nome é Wanderson")
} if(idade >= 18) {
    console.log("Aluno é maior de idade")
} if (curso = "ADS") {
    console.log("O curso do aluno é ADS")
}

// Repetições LOOP

// Laço for
// for(inicialicação; condicao; incrimento)

//}

for(let contador = 1; contador <= 10; contador = contador + 1) {
    console.log("Contador:", contador)
    console.log("Loop")
    console.log("Teste")
    console.log("Testando")
}

for(let i = 1; i <= 10; i = i +1) {
    console.log(i)
}
