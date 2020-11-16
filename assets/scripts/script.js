
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
let cards = null;
startGame();

function startGame(){    // FUNÇÃO PARA COMEÇAR O JOGO
    cards = creatCardsFromTechs(techs);
    embaralharCards(cards);
    console.log(cards);
}

function embaralharCards(techs){ //FUNÇÃO PÁRA EMBARALHAR AS CARTAS
    let indiceAtual = cards.length;
    let randomIndice = 0;

    while(indiceAtual !== 0){

        randomIndice = Math.floor(Math.random() * indiceAtual);
        indiceAtual--;

        [cards[randomIndice], cards[indiceAtual]] =  [cards[indiceAtual], cards[randomIndice]];
    }

}

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