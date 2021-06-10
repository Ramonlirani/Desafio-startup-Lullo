
const axios = require('axios');

/**
 * Desafio Node.JS
 * 
 * Considere a função a seguir.
 * São feitos 3 requests GET. Imagine que cada um deles leve cerca de 1 segundos para ser executado.
 * Indique um possível problema com esta função e como ela pode ser melhorada.
 * A sua avaliação não será feita pelo resultado da execução do código, mas sim sua linha de raciocínio e seu conhecimento sobre Node.
 * A sua resposta pode ser redigida em forma de código ou até mesmo texto.
 */
function getData(){
    const start = Date.now();

    const res1 = axios.get('http://www.exampleurl.com').then((err1, data1) => {
        if(err1) {
            console.error(err1);
            return new Error(err1);
        }
        const res2 = axios.get('http://www.exampleurl.com').then((err2, data2) => {
            if(err1) {
                console.error(err2);
                return new Error(err2);
            }
            const res3 = axios.get('http://www.exampleurl.com').then((err3, data3) => {
                if(err1) {
                    console.error(err3);
                    return new Error(err3);
                }
                return { res1, res2, res3 }
            });
        });
    });
};

getData();