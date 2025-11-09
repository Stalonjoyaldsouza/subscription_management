import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'user name is required'],
        trim:true,
        minLength: 2, 
        maxLength: 10,
    },
    email:{
        type: String,
        required:[true,'user email is required'],
        unique:true,
        trim: true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/, 'please fill the emaill address'],
    },
    password:{
        type:String,
        required:(true,'password is required '),
        trim: true,
        minLength : 7,
        maxLength: 20,
    }

},{timestamps:true});
const User = new mongoose.model('User',userSchema);
export default User;
