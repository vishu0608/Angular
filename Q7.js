//create a Node.js application to get data from collection and display using GET HTTP method

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URL 
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'movie'; // database name

// Create a route to retrieve data from the collection
app.get('/data', async (req, res) => {
  try {
    // Connect to the MongoDB server
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();

    // Access the database
    const db = client.db(dbName);

    // Access the collection (replace 'yourcollection' with your actual collection name)
    const collection = db.collection('actor');

    // Retrieve data from the collection (e.g., find all documents)
    const data = await collection.find({}).toArray();

    // Close the MongoDB connection
    client.close();

    // Send the data as a JSON response
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





//Server is running on port 3000
// http://localhost:3000/data
// [
//     {
//         "_id": "65045d2837f3a08f52690063",
//         "name": "akash",
//         "per": 200
//     }
// ]