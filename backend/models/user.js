import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.methods.comparePassword = async function (password) {
    try {
        const isMatch = await bcrypt.compare(password, this.password)
        return !!isMatch
    } catch (error) {
        throw new Error(error)
    }
};


export default mongoose.model('User', UserSchema);
