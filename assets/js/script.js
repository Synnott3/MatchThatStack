document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [
        {
            name: 'beaver',
            img: 'assets/images/Cards/beaver.png',
        },

        {
            name: 'donkey',
            img: 'assets/images/Cards/donkey.png',
        },
        
        {
            name: 'duck',
            img: 'assets/images/Cards/duck.png',
        },

        {
            name: 'koala',
            img: 'assets/images/Cards/koala.png',
        },

        {
            name: 'parrot',
            img: 'assets/images/Cards/parrot.png',
        },

        {
            name: 'roo',
            img: 'assets/images/Cards/roo.png',
        },

        {
            name: 'beaver',
            img: 'assets/images/Cards/beaver.png',
        },

        {
            name: 'donkey',
            img: 'assets/images/Cards/donkey.png',
        },
        
        {
            name: 'duck',
            img: 'assets/images/Cards/duck.png',
        },

        {
            name: 'koala',
            img: 'assets/images/Cards/koala.png',
        },

        {
            name: 'parrot',
            img: 'assets/images/Cards/parrot.png',
        },

        {
            name: 'roo',
            img: 'assets/images/Cards/roo.png',
        }
    ]
    /**
     * /This shuffles the array randomly by seeing if the value is smaller than 0.5 or larger than 0.5
     * The cardPicked array is a const as we are only pushing things into it
     */
     cardArray.sort(() => 0.5 - Math.random())

    const gameareaDisplay = document.querySelector('.game-area')
    const scoreDisplay = document.querySelector('#score')
    let cardPicked = []
    let cardPickedId = []
    let cardsWon = []

    function createBoard () {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'assets/images/Cards/blank.png')
            card.setAttribute('data-type', i)
            card.addEventListener('click', flipCard)
            gameareaDisplay.append(card)
        }
    }

    

    function checkMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardPickedId[0]
        const optionTwoId = cardPickedId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src','assets/images/Cards/blank.png')
            cards[optionTwoId].setAttribute('src','assets/images/Cards/blank.png')
            alert('That is the same animal')
        }

        
        else if (cardPicked[0]  == cardPicked[1]) {
            alert('It is a match!')
            cards[optionOneId].setAttribute('src', 'assets/images/Cards//white.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/Cards//white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardPicked)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/Cards/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/Cards/blank.png')
            alert('That was not it champ try again')
        }
        
        
        cardPicked = []
        cardPickedId = []
        scoreDisplay.textContent = cardsWon.length
            if (cardsWon.length === cardArray.length/2) {
                scoreDisplay.textContent = "Hey you won!"
        }
    }

    /**
     * This function will flip the cards
     * the "this" keyword is allowing interaction with the elements we click 
     * and storing the cardID
     *Push items into the cardPicked Array 
    */

    function flipCard () {
        let cardId = this.getAttribute('data-type')
        cardPicked.push(cardArray[cardId].name)
        cardPickedId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardPicked.length ===2) {
            setTimeout(checkMatch, 300)
        }
    }

    createBoard () 
})