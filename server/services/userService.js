const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

const createUser = async ({email, password}) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({email, password: hashedPassword})
    await user.save()
    return user
}

const verifyUser = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    console.log("With hashed password:", user.password);
    return user;
}

module.exports = {createUser, verifyUser}