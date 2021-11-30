const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(300).redirect('/info.html');
})

app.get('/api/boardgames', (req, res) => {
    let exampleData = {
        name: 'britt',
        age: 19,
        cats: ['twaila', 'lowie']
    }
    res.send(exampleData);
})

app.get('/text', (req, res) => {
    res.send('Hello, hope you have a nice day!');
})

app.post('/saveData',(req, res) => {
    console.log(req.body);
    res.send(`Data recieved with id: ${req.body.id}`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
