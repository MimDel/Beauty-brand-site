const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const saltRounds = 10

//crerate schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})

// Hash password before saving it to the database
userSchema.pre('save', function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();

    // Auto-generate a salt and hash the password
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

const User = mongoose.model('User', userSchema);

module.exports = User;