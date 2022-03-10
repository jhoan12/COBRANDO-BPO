// usare un ciclo for para obtener los numeros del 1 al 100 y mostrar aquellos que son primos 
for (let i = 1; i <= 100; i++) {
    i % 2 !== 0 && console.log(`${i}: es primo`)
}

// ejecutar: node .\03-primos.js