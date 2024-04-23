import mongoose from "mongoose";

const salarySchema = mongoose.Schema({
    staffId: {
        type: String,
        required: true
    },

    workingHours: {
        type: Number,
        required: true
    },

    OTHours: {
        type: Number,
        required: true
    },

    workingSalary: {
        type: Number,
        required: true
    },

    OTSalary: {
        type: Number,
        required: true
    },

    totalSalary: {
        type: Number,
        required: true
    },

    month: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    }
);

salarySchema.index({ _id: 1, month: 1 }, { unique: true });

export const Salary = mongoose.model('salary', salarySchema)