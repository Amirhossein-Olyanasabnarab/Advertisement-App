const mongoose = require('mongoose');

const OTPSchema = mongoose.Schema({
    code: {type: String, required: false, default: undefined},
    expiresIn: {type: Number, required: false, default: 0}
});

const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: false},
    mobile: {type: String, required: true, unique: true},
    otp: {type: OTPSchema},
    verifyMobile: {type: Boolean, default: false, required: true}
}, {timestamps: true});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel; 