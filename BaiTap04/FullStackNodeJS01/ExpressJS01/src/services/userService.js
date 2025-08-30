
require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
const jwt = require('jsonwebtoken');

const createUserService = async (name, email, password) => {
    try {
        const user = await User.findOne({ email: email });
        if(user) {
            console.log('User already exists');
            return { error: 'User already exists' };
        }
        
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        let result = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            role: 'user'
        })
        return result;  

    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

const loginService = async (email, password) => {
    try {
        const user = await User.findOne({ email: email });
        if(user) {
            const isMatchPassword = await bcrypt.compare(password, user.password);
            if(!isMatchPassword) {
                return {
                    EC: 2,
                    EM : 'Email or password is incorrect',
                }
            } else {
                const payload = {
                    email: user.email,
                    role: user.role
                }

                const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
                return {
                    EC: 0,
                    EM : 'Login successful',
                    DT: {
                        accessToken
                    }
                }
            };
        } else {
            return {
                EC: 1,
                EM : 'User not found',
            } 
        }
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

const getUserService = async () => {
    try{
        let result = await User.find({}).select('-password');
        return result;
    } catch(error){
        console.log(error);
        return null;
    }
}

module.exports = { 
    createUserService, loginService, getUserService
}