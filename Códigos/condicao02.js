// Esse código compara 2 números

function compararNumeros(num1, num2) {
    if (num1 < num2) {
        return "Número 2 é maior"
    } else if (num1 == num2) {
        return "Os números são iguais"
    }
    else {
        return "Número 1 é maior"
    }
}

console.log(compararNumeros(20, 20))