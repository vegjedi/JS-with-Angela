// # MongoDB Driver

// const { MongoClient } = require("mongodb");
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db('shopDB');
//     const products = database.collection('products');
//     const cursor = products.find({});
//     const allValues = await cursor.toArray();
//     console.log(allValues);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "check your data entry, name needed"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Durian",
//     rating: 9,
//     review: "Queen of Fruits"
//     }
// );
// fruit.save();

Fruit.find(function(err, fruits){
    if (err){
     console.log(err)   
    }
    else {
    mongoose.connection.close();
    fruits.forEach(function(fruitName){
        console.log(fruitName.name)
    });
    }
});

