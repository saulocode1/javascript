let num = [2, 3, 5, 7]
num[3] = 6 // adiciona numero 6 na posição [3]
num.push(7) // adiciona numero 7 na [ultima] posição
num.length // comprimento da array
num.sort // ordena os elementos em ordem crescente
num.indexOf(3) // posição que o numero 3 se encontra; -1 (num não existe)


console.log(num)
console.log(`O primeiro valor é ${num[0]}.`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O número 3 está na posição ${num.indexOf(3)}`)

