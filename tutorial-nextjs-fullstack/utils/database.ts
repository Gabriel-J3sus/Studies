import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connect() {
  if (!client.isConnected()) {
    await client.connect();
  }

  const db = client.db("fullstack-course");
  return { db, client }
}
