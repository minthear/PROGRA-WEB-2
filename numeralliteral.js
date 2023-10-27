function numeroALetra(numero) {
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];

    if (numero < 0 || numero > 99) {
        return "Número fuera de rango";
    }

    if (numero < 10) {
        return unidades[numero];
    } else if (numero < 20) {
        return especiales[numero - 10];
    } else {
        const unidad = numero % 10;
        const decena = Math.floor(numero / 10);
        if (unidad === 0) {
            return decenas[decena];
        } else {
            return decenas[decena] + ' y ' + unidades[unidad];
        }
    }
}

// Ejemplo de uso:
const numero = 77;
const representacionLiteral = numeroALetra(numero);
console.log(`El número ${numero} en representación literal es: ${representacionLiteral}`);