let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0];
        console.log(card);

        if (card.flipped || this.lockMode) {
            return false;
        }

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }

    },

    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
    },
    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },
    unflipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver(){
        return this.cards.filter(card => !card.flipped).length == 0;
    },

    techs: [
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
    ],
    cards: null,


    /*  createCardsFromTechs(techs);  */

    createCardsFromTechs: function () {  // FUNÇÃO PARA CRIAR CARTAS

        this.cards = [];

        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        })

        this.cards = this.cards.flatMap(pair => pair);
        this.embaralharCards();
        return this.cards;
    },

    createPairFromTech(tech) {  // FUNÇÃO PARA CRIAR  PARES DE CARTAS

        return [{
            id: this.createIdWithTech(tech), //ID RANDÔMICO
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWithTech(tech), //ID RANDÔMICO
            icon: tech,
            flipped: false,
        }]
    },

    createIdWithTech: function (tech) {  // FUNÇÃO PARA CRIAR ID RANDÔMICO
        return tech + parseInt(Math.random() * 1000);

    },
    embaralharCards: function (cards) { //FUNÇÃO PARA EMBARALHAR AS CARTAS
        let indiceAtual = this.cards.length;
        let randomIndice = 0;

        while (indiceAtual !== 0) {

            randomIndice = Math.floor(Math.random() * indiceAtual);
            indiceAtual--;

            [this.cards[randomIndice], this.cards[indiceAtual]] = [this.cards[indiceAtual], this.cards[randomIndice]];
        }

    }
}