const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs/promises')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(bodyParser.json());


//root route
app.get('/', (req, res) => {
    res.status(300).redirect('/info.html');
})

//return all boardgames
app.get('/boardgames', async (req, res) => {
    try {
        //read file
        let data = await fs.readFile('data/boardgames.json')
        //send back file
        res.status(200).send(JSON.parse(data));
    } catch (error) {
        res.status(500).send('file could not be read');
    }

})
//return one boardgame
app.get('/boardgame', async (req, res) => {
    try {
        //read file
        let boardgames = await fs.readFile('data/boardgames.json');
        boardgames = JSON.parse(boardgames);
        // try and find board game with id
        let bg = boardgames[req.query.id];
        if (bg) {
            //send back file
            res.status(200).send(bg);
            return;
        } else {
            res.status(400).send('boardgame could not be found with id:' + req.query.id);
        }

    } catch (error) {
        res.status(500).send('file could not be read');
    }
})

//save boardgame
app.post('/saveBoardgame', async (req, res) => {
    if (!req.body.id || !req.body.name || !req.body.genre || !req.body.mechanisms || !req.body.description) {
        res.status(400).send('bad result, missing id, name, genre, mechanisms or description');
        return;
    }
    try {
        //read file
        let boardgames = await fs.readFile('data/boardgames.json');
        boardgames = JSON.parse(boardgames);

        //save the boardgame
        boardgames[req.body.id] = {
            name: req.body.name,
            genre: req.body.genre,
            mechanisms: req.body.mechanisms,
            description: req.body.description
        }
        //save the file
        await fs.writeFile('data/boardgames.json', JSON.stringify(boardgames));
        //send back succes message
        res.status(201).send('boardgame successfully saved with id:' + req.body.id);
        return;
    } catch (error) {
        res.status(500).send('an error has occured');
    }

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})