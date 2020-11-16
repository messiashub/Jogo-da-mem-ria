
const FRONT = "card_front";
const BACK = "card-back";

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];
creatCardsFromTechs(techs);

function creatCardsFromTechs(techs) {  // FUNÇÃO PARA CRIAR CARTAS

    let cards = [];

    for (let tech of techs) {
        cards.push(createPairFromTech(tech));
    }

    return cards.flatMap(pair => pair);
}

function createPairFromTech(tech) {  // FUNÇÃO PARA CRIAR  PARES DE CARTAS

    return [{
        id: createIdWithTech(tech), //ID RANDÔMICO
        icon: tech,
        flipped: false,
    }, {
        id: createIdWithTech(tech), //ID RANDÔMICO
        icon: tech,
        flipped: false,
    }]
}

function createIdWithTech(tech) {  // FUNÇÃO PARA CRIAR ID RANDÔMICO
    return tech + parseInt(Math.random() * 1000);

}