import mongoose from 'mongoose';

const { Schema } = mongoose;

const schemaUser = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be 5 characters or more'],
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be 8 characters or more'],
    },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
})

//write some encryption here

const User = mongoose.model('User', schemaUser);
export default User;