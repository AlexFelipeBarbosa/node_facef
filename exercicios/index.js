const {checaIdade} = require('./utils');

async function main () {
    try {
        await checaIdade(15);
        console.log ("Maior que 18 anos.");
    } catch (error) {
        console.log ("Menor que 18 anos.");
    }
}

main ();