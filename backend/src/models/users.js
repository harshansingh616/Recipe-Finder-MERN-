const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const usersSchema = new mongoose.Schema({
    name:{ 
        type: String, 
        required: [true, "Please enter your anme"]
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        trim : true,
        unique : true
    },
    password:{
        type:String,
        required: [true, "Please add a password"],
        select: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
},
{timestamps: true}
)

usersSchema.pre("save", async function(next) {
    if(!this.isModified('password'))
    {
        return next();
    }

    this.password = await bcrypt.hash(this.password,10);
    next();
});


module.exports= mongoose.model('User', usersSchema);