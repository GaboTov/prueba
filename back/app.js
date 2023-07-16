const express = require('express');
const { MongoClient,ObjectId } = require('mongodb');
const cors = require('cors')
const app = express();
app.use(express.json());
var corsOptions = {
  origin: 'http://localhost:4200', 
  optionsSuccessStatus: 200, 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
}
app.use(cors(corsOptions));
const uri = 'mongodb+srv://gabo:<password>@cluster0.lznklne.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

app.get('/api/users', async (req, res) => {
  const collection = client.db('test').collection('users');
  const users = await collection.find({}).toArray();
  res.send(users);
  if (req.statusCode == 200){
    console.log('good get')
  }
});

app.post('/api/users', async (req, res) => {
  const collection = client.db('test').collection('users');
  const result = await collection.insertOne(req.body);
  res.send(result);
});



app.put('/api/users/:id', async (req, res) => {
    try {
        const collection = client.db('test').collection('users');
        const result = await collection.findOneAndUpdate(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body },
            { returnDocument: 'after' }
        );
        res.send(result.value);
        if (res.statusCode === 200){
            console.log('good put')
        }else{
            console.log('bad put')
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});




app.delete('/api/users/:id', async (req, res) => {
  try {
    const collection = client.db('test').collection('users');
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});


client.connect().then(() => {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
}).catch(console.error);
