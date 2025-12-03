const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

const createUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
    //   const existingUser = await User.findOne({ email });
    //   if (existingUser) {
    //     return res.status(400).send('User already exists');
    //   }
 
      const user = new User({ email, password });
      await user.save();

      const token = jwt.sign({ _id: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(201).json({ token });
      
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user');
    }
  };

const verifyUser = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    return user;
}

module.exports = {createUser, verifyUser}