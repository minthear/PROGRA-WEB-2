// Operación de suma
function suma(a, b) {
    return a + b;
}

// Operación de resta
function resta(a, b) {
    return a - b;
}

// Operación de multiplicación
function multiplicacion(a, b) {
    return a * b;
}

// Operación de división
function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No es posible dividir por cero.";
    }
}

// Ejemplo de uso:
const numero1 = 10;
const numero2 = 10;

console.log(`Suma: ${numero1} + ${numero2} = ${suma(numero1, numero2)}`);
console.log(`Resta: ${numero1} - ${numero2} = ${resta(numero1, numero2)}`);
console.log(`Multiplicación: ${numero1} * ${numero2} = ${multiplicacion(numero1, numero2)}`);
console.log(`División: ${numero1} / ${numero2} = ${division(numero1, numero2)}`);