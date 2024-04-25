import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    staffName: {
        type: String,
        required: true
    },

    NIC: {
        type: Number,
        required: true
    },

    birthday: {
        type: Date,
        required: true
    },

    experience: {
        type: Number,
        required: true
    },
},
    {
        timestamps: true,
    }
);

export const Staff = mongoose.model('staff', staffSchema)