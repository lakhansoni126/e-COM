const mongoose= require('mongoose');

const userSchema= new mongoose.Scheme({
    name:string,
    email:string,
    password:string,
});