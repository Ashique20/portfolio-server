const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hc9vrhc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri)

async function run(){
    try{
        await client.connect();
        console.log('dda')
    }
    catch(err){
    console.error('dwd',err)
    }
}


run()

const portCollection = client.db('portfolio').collection('portCollection')


app.post('/message', async(req,res)=>{
     const data = req.body;
     console.log(data)
     const result = await portCollection.insertOne(data);

     res.send(result)
  
})


  


app.get('/', (req, res) => {
    res.send('running')
});



app.listen(port, () => {
    console.log('shuntesi', port)
})


