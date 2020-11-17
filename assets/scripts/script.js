
const FRONT = "card_front";
const BACK = "card_back";
const CARD = 'card';
const ICON = "icon";

/* let techs = [
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
]; */
/* let cards = null; */
startGame();

function startGame(){    // FUNÇÃO PARA COMEÇAR O JOGO
    /* cards = game.createCardsFromTechs(); */
    /* embaralharCards(cards); */
    inicializarCards(game.createCardsFromTechs());
    /* console.log(cards); */
}

function inicializarCards(cards){ // FUNÇÃO PARA PEGAR OS MODELOS DAS CARTAS E TRANSFORMAR EM  VISUAL
    let gameBoard = document.getElementById('gameBoard');

    game.cards.forEach(card =>{
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    })
    
}

function createCardContent(card, cardElement){   

    creatCardFace(FRONT, card, cardElement);
    creatCardFace(BACK, card, cardElement);

}

function creatCardFace(face, card, element){    // FUNÇÃO PARA CRIAR ELEMENTOS HTML

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face===FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/imagens/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}



/* function embaralharCards(techs){ //FUNÇÃO PARA EMBARALHAR AS CARTAS
    let indiceAtual = cards.length;
    let randomIndice = 0;

    while(indiceAtual !== 0){

        randomIndice = Math.floor(Math.random() * indiceAtual);
        indiceAtual--;

        [cards[randomIndice], cards[indiceAtual]] =  [cards[indiceAtual], cards[randomIndice]];
    }

} */
/* 
creatCardsFromTechs(techs); 

function creatCardsFromTechs(techs) {  // FUNÇÃO PARA CRIAR CARTAS

    let cards = [];

    techs.forEach((tech) => {
        cards.push(createPairFromTech(tech));
    }) 
        
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

} */

function flipCard(){
    this.classList.add("flip");

}