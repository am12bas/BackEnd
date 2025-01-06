const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const {connectDB} = require('./config/db')

const app = express();
app.use(bodyParser.json());
app.use(cors());

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//mongodb

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.DB_URI

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

connectDB();

//ignorable
app.get('/',(req,res)=>{
  res.send('server is running. welcome BOSS!')
})


//bqzhuqbs

const surveyRoutes = require('./routes/surveyRoutes');
app.use('/api/surveys', surveyRoutes);

module.export = app;


