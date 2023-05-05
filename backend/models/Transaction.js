import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    packageId:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        //86400 = 24 hours 
        expires: 30 * 86400 // 30 days
    },
})

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;