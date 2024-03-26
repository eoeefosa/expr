import mongoose, { Document, Schema } from "mongoose";

// check for banking app with express
const FintechUser: Schema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  MiddleName: String,
  Balance: { type: Number, required: true },
  TransactionHistory: { type: Array },
  //   How should i process transactionshistory should i create a subdocument
});
