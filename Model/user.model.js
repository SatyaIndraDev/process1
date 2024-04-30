const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullName : String,
userName : String,
email : String,
password : String,
avatar: String,
  },{
    versionKey: false
});


const UserModel = mongoose.model("User", UserSchema);


module.exports = {
    UserModel
}


// fullName : string
// userName : string
// email : string
// password : string
// avatar: string