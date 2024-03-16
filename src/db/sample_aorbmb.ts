import { MongoClient } from "mongodb";

async function createListing(client: MongoClient, newListing: any) {
  const result = await client
    .db("sample_airbnb")
    .collection("ListingsAndReviews")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}
