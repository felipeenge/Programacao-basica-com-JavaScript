// Essa condição verifica se o número é negativo ou positivo

function numberCheck(numero) {
    if (numero > 0) {
        return "O número é positivo"
    } else if (numero < 0) {
        return "O número é negativo"
    } else {
        return "Número Zero"
    }
}

console.log(numberCheck(0))