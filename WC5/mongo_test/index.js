const {
    MongoClient
} = require('mongodb');
const uri = "uri";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err => {
    const collection = client.db('session5').collection("boardgames");
    // perform actions on the collection object
    client.close();
});