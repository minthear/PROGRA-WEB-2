function anosADias(anos) {
    // Año promedio considerando años bisiestos
    const diasEnUnAno = 365.25;
    return anos * diasEnUnAno;
}

// Ejemplo de uso:
const anos = 2;
const dias = anosADias(anos);
console.log(`${anos} años son aproximadamente ${dias} días.`);