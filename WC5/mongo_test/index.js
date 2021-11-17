const {
    MongoClient
} = require('mongodb');
const uri = "mongodb+srv://Britt:Twaila@cluster0.zwnr8.mongodb.net/session5?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err => {
    const collection = client.db('session5').collection("boardgames");
    // perform actions on the collection object
    client.close();
});