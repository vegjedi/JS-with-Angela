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
    name: String,
    rating: Number,
    review: String,
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);

//   const fruit = new Fruit({
//         name: "Orange",
//         rating: 5,
//         review: "so so friend"
//     }
//   );
//   fruit.save();

Fruit.find(function (err, fruits){
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

