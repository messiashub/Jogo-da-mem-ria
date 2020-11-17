let game ={
    techs : [
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
    cards : null,

    
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

    createIdWithTech:function(tech) {  // FUNÇÃO PARA CRIAR ID RANDÔMICO
        return tech + parseInt(Math.random() * 1000);

    },
    embaralharCards: function(cards){ //FUNÇÃO PARA EMBARALHAR AS CARTAS
        let indiceAtual = this.cards.length;
        let randomIndice = 0;
    
        while(indiceAtual !== 0){
    
            randomIndice = Math.floor(Math.random() * indiceAtual);
            indiceAtual--;
    
            [this.cards[randomIndice], this.cards[indiceAtual]] =  [this.cards[indiceAtual], this.cards[randomIndice]];
        }
    
    }
}