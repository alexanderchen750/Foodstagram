const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const validator = require('validator')


const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: String,
    favoritedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    directMessages: [{
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        message: String,
        createdAt: { type: Date, default: Date.now }
    }]
  });
  
//const User = mongoose.model('User', userSchema);
userSchema.statics.signup = async function(username, email, password){
    if(!email || !password || !username){
        throw Error("All Fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Invalid Email")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password Must be 8+ Letter Combo of Lowercase, Uppercase, Numbers, and Symbols")
    }
    const emailExists = await this.findOne({email})
    if(emailExists){
      throw Error("email already in use")
    }
    const usernameExists = await this.findOne({username})
    if(usernameExists){
      throw Error("username already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({username, email, password: hash})

    return user
}

userSchema.statics.login = async function(email, password){
    if(!password || !email){
        throw Error("All Fields must be filled")
    }
    const  emailExists = await this.findOne({email})
    if(!emailExists){
      throw Error("Email Does Not Exist")
    }

    const match = await bcrypt.compare(password, emailExists.password)
    if(!match){
        throw Error("Incorrect Password or Email")
    }
    return emailExists
}



  module.exports = mongoose.model('userPosts', userSchema)