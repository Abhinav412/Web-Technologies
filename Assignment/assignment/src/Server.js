const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const Url = "mongodb://127.0.0.1:27017";
const dbname = "Bangalore_city";
let db;

const client = new MongoClient(Url);

client.connect()
.then(client => {
    db = client.db(dbname);
    createDatabase(client);
})
.catch(error => {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
});

async function createDatabase(client){
    try{
        const adminDB = client.db("admin");
        const databases = await adminDB.admin().listDatabases();
        if(!databases.databases.some(dbInfo=>dbInfo.name===dbname)){
            await adminDB.admin().command({create:dbname});
        }
    }
    catch(error){
        console.log("Error creating database:",error.message);
        process.exit(1);
    }
}

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept');
    next();
    });
    app.post('/restaurants', async (req, res) => {
        const newRestaurant = req.body;
      
        try {
          const result = await db.collection('restaurants').insertOne(newRestaurant);
          res.json(result);
        } catch (error) {
          console.error('Error creating a new restaurant:', error);
          res.status(500).json({ error: 'An error occurred while creating the restaurant' });
        }
      });
    app.get('/restaurants', async (req, res) => {
    try {
    const restaurants = await
    db.collection('restaurants').find().toArray();
    res.json(restaurants);
    } catch (error) {
    console.error('Error reading all restaurants:',
    error.message);
    res.status(500).json({ error: 'Internal Server Error'});}
});
app.put('/restaurants/:rest_id', async (req, res) => {
try {
const { rest_id } = req.params;
const { rest_reviews } = req.body;
const result = await
db.collection('restaurants').findOneAndUpdate(
{ rest_id },
{ $set: { rest_reviews } },
{ returnDocument: 'after' }
);
res.json(result.value);
} catch (error) {
console.error('Error updating a restaurant\'s grade:',
error.message);
res.status(500).json({ error: 'Internal Server Error' });
}
});
/*app.get('/', (req, res) => {
res.send('Welcome to the Bangalore City Restaurants API');
});*/
app.listen(3000,() => {
console.log(`Server is running on http://localhost:3000`);
});