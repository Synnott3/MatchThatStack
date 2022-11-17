const cardArray = [
    {
        name: 'beaver',
        img: 'assets/images/beaver.png',
    },

    {
        name: 'donkey',
        img: 'assets/images/donkey.png',
    },
    
    {
        name: 'duck',
        img: 'assets/images/duck.png',
    },

    {
        name: 'koala',
        img: 'assets/images/koala.png',
    },

    {
        name: 'parrot',
        img: 'assets/images/parrot.png',
    },

    {
        name: 'roo',
        img: 'assets/images/roo.png',
    },

    {
        name: 'beaver',
        img: 'assets/images/beaver.png',
    },

    {
        name: 'donkey',
        img: 'assets/images/donkey.png',
    },
    
    {
        name: 'duck',
        img: 'assets/images/duck.png',
    },

    {
        name: 'koala',
        img: 'assets/images/koala.png',
    },

    {
        name: 'parrot',
        img: 'assets/images/parrot.png',
    },

    {
        name: 'roo',
        img: 'assets/images/roo.png',
    }
]

//This shuffles the array randomly by seeing if the value is smaller than 0.5 or larger than 0.5
cardArray.sort(() => 0.5 - Math.random())

const gameareaDisplay = document.querySelector('.game-area')

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/images/blank.png')
        card.setAttribute('date-type', i)
        gameareaDisplay.append(card)
    }
}

createBoard () 