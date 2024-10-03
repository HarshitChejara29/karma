import mongoose, { Schema } from "mongoose";
const inquirySchema = new Schema({

    email: {
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    message: {
        type: String,
        required: [true, "Message is required."]
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Inquiry = mongoose.models.Inquiry || mongoose.model("Inquiry", inquirySchema);

export default Inquiry;