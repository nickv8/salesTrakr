// connect to our local database
import { MongoClient } from "mongodb";
let customerDb;
async function connectToDb(cb) {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  customerDb = client.db("customers");
  cb();
}
export { customerDb, connectToDb };