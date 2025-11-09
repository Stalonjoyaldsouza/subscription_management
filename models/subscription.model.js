import mongoose from 'mongoose';
// makin a object of schema which  defines the structure of the model
const subSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'subscription name is required'],
        trim:true,
        minLength:2,
        maxLength:20,
    },

    price:{
        type:Number,
        required:[true,'subscriptiion  price is required'],
        min:[0,'price must be greater than 0'],
        max:[1000,'maximum price is 1000'],
    },

    currency:{
        type:String,
        enum:['USD','INR'],
        defualt:'INR',
    },

    frequency:{
        type:String,
        enum:['daily','weekly','monthly','yearly'],
    },

    catogory:{
        type:String,
        enum:['sports', 'new','entertainment','lifestyle','finance','poltics','other'],
        required:true,
    
    },
    paymentMethod:{
        type:String,
        required:true,
        trim:true,
        
    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
        default : 'active',

    },
    startDate:{
        type: Date,
        validate:{
            validator:(value)=>value <=new Date(),
            message:'start date must be in the past', 
        }

    },
  renewalDate:{
        type: Date,
        required:true,
        validate:{
            validator:function (value){
                return value >new Date()},
            message:'renewal date must be after the start date', 
        }
    },
    user:{
        type:mongoose.Schema.Types.ObjectsId,
        ref:'User' ,
        required:true,
        index:true,

    }


},{timestamp:true});
subSchema.pre('save',function(next){
    if(!this.renewalDate){
        const renewalPeriod = {
            daily:1,
            weekly:7,
            montly:30,
            yearly:365,
        };
    
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency])
    }
    if(this.renewalDate < new Date){
        this.status = 'expired';
    }
    next();
})

export default subSchema;