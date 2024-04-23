import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    staffName: {
        type: String,
        required: true
    },

    NIC: {
        type: String,
        required: true
    },

    birthday: {
        type: String,  // todo - change
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