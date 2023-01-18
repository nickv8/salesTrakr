// connect to our local database
import { MongoClient } from "mongodb";
let customerDb;
const uri = "mongodb+srv://salestrakr:salestrakr@salestrakr.w4xwomt.mongodb.net/?retryWrites=true&w=majority"
async function connectToDb(cb) {
  const client = new MongoClient(uri);
  await client.connect();

  customerDb = client.db("customers");
  cb();
}
export { customerDb, connectToDb };