//paquete importado
require('colors');

// referencia el modulo math a traves de la constante math
const math = require('./modules/math.js')

console.clear();
console.log(math);

const main = async() => {
    console.log('*****************************'.green);
    console.log('*   '.green, 'Funciones Mateticas'.bgGreen,    '   *'.green);
    console.log('*****************************\n'.green);
    console.log('*************'.cyan);
    console.log('*           *'.cyan);

    console.log(math.add(5, 3));
    console.log(math.substract(2, 8));
    console.log(math.multiply(2, 8));
    console.log(math.divide(2, 0.9));
}

main();