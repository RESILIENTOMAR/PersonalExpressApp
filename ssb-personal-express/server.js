const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8005
app.set('view engine', 'ejs');


//app.use(cors())

/*=======================OUTFITS===========================*/

// select the radio buttons

const character = {
    'mario': {
        'name': 'Mario',
        'origin': 'Donkey Kong',
        'homeWorld': 'Mushroom Kingdom',
        'pic': 'marioOutfit1.jpeg',
        'outfit3': 'marioOutfit2.jpeg',
        'outfit2': 'marioOutfit3.jpeg'
    },
    'luigi': {
        'name': 'Luigi',
        'origin': 'Mario Bros.',
        'homeWorld': 'Mushroom Kingdom',
        'pic': 'luigi.jpeg',
        'outfit3': 'luigi-mansion.jpeg',
        'outfit2': 'baby-luigi.jpeg'
    },
    'donkey kong': {
        'name': 'Donkey Kong',
        'origin': 'Donkey Kong Arcade Game ',
        'homeWorld': 'Donkey Kong Island',
        'pic': 'donkeykong.jpeg',
        'outfit3': 'pinkDK.jpeg',
        'outfit2': 'grayDK.jpeg'
    },
    'link': {
        'name': 'Link',
        'origin': 'The Legend of Zelda',
        'homeWorld': 'Hyrule',
        'pic': 'link1.jpeg',
        'outfit2': 'toonLink.jpeg',
        'outfit3': 'link2.jpeg'
    },
    'samus': {
        'name': 'Samus',
        'origin': 'Metroid',
        'homeWorld': 'Earth colony K-2L',
        'pic': 'samus.jpeg',
        'outfit3': 'zeroSuit.jpeg',
        'outfit2': 'lightSamus.jpeg'
    },
    'captain falcon': {
        'name': 'Captain Falcon',
        'origin': 'F-Zero',
        'homeWorld': 'Port Town',
        'pic': 'captainfalcon.jpeg',
        'outfit3': 'pinkFalcon.jpeg',
        'outfit2': 'goldFalcon.jpeg'
    },
    'yoshi': {
        'name': 'Yoshi',
        'origin': 'Super Mario World',
        'homeWorld': "Yoshi's Island",
        'pic': 'yoshi.jpeg',
        'outfit3': 'Black_Yoshi.jpeg',
        'outfit2': 'Red_Yoshi.jpeg'

    },
    'ness': {
        'name': 'Ness',
        'origin': 'EarthBound',
        'homeWorld': 'Onett in Eagleland',
        'pic': 'ness.jpeg',
        'outfit3': 'Ness_Palette_06.jpeg',
        'outfit2': 'Ness_Palette_08.jpeg'
    },
    'kirby': {
        'name': 'Kirby',
        'origin': "Kirby's Dream Land",
        'homeWorld': 'Dream Land',
        'pic': 'kirby.jpeg',
        'outfit3': 'kirby-fir.jpeg',
        'outfit2': 'icekirby.jpeg'
    },
    'fox': {
        'name': 'Fox',
        'origin': 'Star Fox 64 ',
        'homeWorld': 'Final Destination',
        'pic': 'fox.jpeg',
        'outfit3': 'pinkFox.jpeg',
        'outfit2': 'purpleFox.jpeg'
    },
    'pikachu': {
        'name': 'Pikachu',
        'origin': 'Pokémon Red and Green',
        'homeWorld': 'Pokemon World',
        'pic': 'pika1.jpeg',
        'outfit3': 'pikaLibre.jpeg',
        'outfit2': 'detectivePika.jpeg'
    },
    'jigglypuff': {
        'name': 'Jigglypuff',
        'origin': 'Pokémon Red and Blue',
        'homeWorld': 'Kanto ',
        'pic': 'jiggly.jpeg',
        'outfit3': 'jigglyFlower.jpeg',
        'outfit2': 'jigglyHat.jpeg'
    },
    'leon': {
        'name': 'Leon Noel',
        'origin': 'South Philly',
        'homeWorld': 'Earth',
        'pic': 'leon.jpeg',
        'outfit2': 'leonflex.jpeg'
    },

    'unknown': {
        'name': 'NOT AN OG',
        'origin': 'You tell me',
        'homeWorld': 'Who knows',
        'pic': 'locked.jpeg'
    }
}
app.get('/', (request, response) => {
    response.render(__dirname + '/index.ejs')
})

app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js')
})

app.get('/css/style.css', (request, response) => {
    response.sendFile(__dirname + '/css/style.css')
})
app.get('/css/n64.jpeg', (request, response) => {
    response.sendFile(__dirname + '/css/n64.jpeg')
})

app.use(express.static(__dirname + '/css/pic'))

app.use(express.static(__dirname + '/css/outfits'))


app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase()

    if (character[characterName]) {
        response.json(character[characterName])
    } else {
        response.json(character['unknown'])
    }

})

app.put('/api/:characterName', (req, res) => {
    const characterName = req.params.characterName;
    const newCharacterData = req.body;

    res.json({ message: `Updated character data for ${characterName}` });
});



app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

