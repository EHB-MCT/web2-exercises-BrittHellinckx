const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(300).redirect('/info.html');
})

app.get('/data', (req, res) => {
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})