const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('shopDB');
    const products = database.collection('products');
    const cursor = products.find({});
    const allValues = await cursor.toArray();
    console.log(allValues);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);