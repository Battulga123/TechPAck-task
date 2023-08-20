import { MongoClient } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const url = process.env.MONGODB_URL;

const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!process.env.MONGODB_URL) {
  throw new Error("add connecttion string");
}

client = new MongoClient(url!, options);
clientPromise = client.connect();

clientPromise.then(() => console.log("connected Mongo"));

export default clientPromise;
