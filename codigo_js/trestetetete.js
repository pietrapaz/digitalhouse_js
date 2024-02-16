function misteriosa (arrayDeNumeros, n) {
    var arrayResultado = [];
    for (var i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] > n) {
            arrayResultado.push(arrayDeNumeros[i]);
        }
    }
    return arrayResultado;
}
console.log(arrayResultado)