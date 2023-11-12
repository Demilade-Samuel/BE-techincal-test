const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 5000;


// connection string
const mongoURI = 'mongodb+srv://thevinelove:6nYndEQa8HTc9wIt@cluster0.tvzp2ns.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'acronymDB';

app.use(bodyParser.json());

// adds acronym to the db
app.post('/acronym', async (req, res) => {

  const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('acronyms');

    const newAcronym = req.body;
    const result = await collection.insertOne(newAcronym);
    res.json(result);
  } finally {
    await client.close();
  }
 

});


//returns a list of acronyms
app.get('/acronym', async (req, res) => {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      await client.connect();
      const database = client.db(dbName);
      const collection = database.collection('acronyms');
  
      const result = await collection.find({}).toArray();
      res.json(result);
    } finally {
      await client.close();
    }
  });

  //updates the acronym for :acronymID
  app.patch('/acronym/:acronymID', async (req, res) => {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      await client.connect();
      const database = client.db(dbName);
      const collection = database.collection('acronyms');
  
      const { acronymID } = req.params;
      const updatedAcronym = req.body;
  
      const result = await collection.findOneAndUpdate(
        { _id: acronymID },
        { $set: updatedAcronym },
        { returnDocument: 'after' }
      );
  
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Acronym not found' });
      }
    } finally {
      await client.close();
    }
  });

  //deletes the acronym for :acronymID
  app.delete('/acronym/:acronymID', async (req, res) => {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      await client.connect();
      const database = client.db(dbName);
      const collection = database.collection('acronyms');
  
      const { acronymID } = req.params;
  
      const result = await collection.findOneAndDelete({ _id: acronymID });
  
      console.log (result)
  
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Acronym not found' });
      }
    } finally {
      await client.close();
    }
  
  });
  



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
