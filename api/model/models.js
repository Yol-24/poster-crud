const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var uniqueValidator = require('mongoose-unique-validator');

var photoSchema = new Schema({
    image: { type: String },
    imageName: { type: String, required: true },
    caption: { type: String, required: true },
    priority: { type: Boolean, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
}, { collection: "posts" });

var profileSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    contact: { type: String, required: true },
    joined: { type: String, required: true }
})

var userSchema = new Schema({
    account: profileSchema,
    posts: { type: [mongoose.Types.ObjectId], ref: 'Post' }
},
{
    collection: "users"
});

var adminSchema = new Schema({
    account: profileSchema,
    posts: { type: [mongoose.Types.ObjectId], ref: 'Post' },
    role : {type: String, required: true}
},
{
    collection: "admin"
});





userSchema.plugin(uniqueValidator, { message: 'User must be unique' });
adminSchema.plugin(uniqueValidator, { message: 'Admin must be unique' });

const Post = mongoose.model("Posts", photoSchema);
const User = mongoose.model("Users", userSchema);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Post, User, Admin };