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

//This shuffles the array randomly by seeing it the value is smaller than 0.5 or larger than 0.5
cardArray.sort(() => 0.5 - Math.random())

console.log(cardArray);