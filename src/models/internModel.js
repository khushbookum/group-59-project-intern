const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true


        
    },
    mobile: {
        type: Number,
        match: /^[6-9]\d{9} /,
        required: true,
        unique: true,
    },
    collegeId: {
        type: ObjectId,
        ref: "collegedetails"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
},
    { timestamps: true })
module.exports = mongoose.model("intern details", internSchema)
