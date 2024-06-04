// Loop Do While

let array = [1, 5, 6, 8, 6, 10, 20, 35, 500, 150]
let x = 0

do {
    console.log("Número de X é: " + x)
    console.log("-------------------------------------")
    console.log("O valor da posição é: " + array[x])
    console.log("-------------------------------------")

    x = x + 1
} while (x < array.length)