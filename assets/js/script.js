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
/**
 * /This shuffles the array randomly by seeing if the value is smaller than 0.5 or larger than 0.5
 * The cardPicked array is a const as we are only pushing things into it
 */
cardArray.sort(() => 0.5 - Math.random())

const gameareaDisplay = document.querySelector('.game-area')
const cardPicked = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/images/blank.png')
        card.setAttribute('date-type', i)
        card.addEventListener('click', flipCard)
        gameareaDisplay.append(card)
    }
}

createBoard () 

/**
 * This function will flip the cards
 * the "this" keyword is allowing interaction with the elements we click 
 * and storing the cardID
 */
function flipCard () {
    const cardId = this.getAttribute('date-type')
    cardPicked.push(cardArray[cardId].name)
    console.log('clicked', cardId)
    console.log(cardPicked)
}