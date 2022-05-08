//criando variavel com a tratativa de captura de argumentos
const argumento = process.argv.slice(2)

//declarando variáveis que receberão as posições [i] dos argumentos de calculos
const argA = Number(argumento[1])
const argB = Number(argumento[2])

//variável de resultado que recebe uma função de calculo
const resultdo = mult(argA, argB)

//função de calculo que retorn dois argumentos a serem inseridos no terminal
function mult(n1, n2) {
    return n1 * n2
}

//console do resultado inserindo os numeros no terminal referente as posições [i]
console.log(resultdo)

