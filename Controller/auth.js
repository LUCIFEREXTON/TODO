const User = require('../Models/User')
const List = require('../Models/List')
const Todo = require('../Models/Todo')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

exports.signup = async(req, res) => {

    const { email, password, name } = req.body;
    if (email && password) {
        try {
            const preUser = await User.findOne({ email });

            if (preUser) {
                return res.json({
                    error: 'User with this email already exist'
                })
            }

            const newPassword = await bcrypt.hash(password, 8);

            const newList = new List({
                name: 'Default List'
            });
            newList._id instanceof mongoose.Types.ObjectId;
            const newUser = new User({
                name,
                email,
                password: newPassword,
                defaultListid: newList._id
            });
            newUser._id instanceof mongoose.Types.ObjectId;

            newList.userId = newUser._id;

            const savedList = await newList.save();

            const savedUser = await newUser.save();
            const token = jwt.sign({...savedUser, password: '' }, 'shhhhh');
            return res.json({
                token,
                error: null
            })
        } catch (err) {
            console.log('System Crashed');
            console.log('Error: ');
            console.log(err);
            return res.json({
                error: 'Something went wrong on Server side'
            })
        }
    }

    return res.json({
        error: 'Fill all details'
    })
}
exports.login = async(req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            const founduser = await User.findOne({ email });

            if (founduser) {
                const match = await bcrypt.compare(password, founduser.password);

                if (match) {
                    const token = jwt.sign({...founduser, password: '' }, 'shhhhh');
                    return res.json({
                        token,
                        error: null
                    })
                }
            }
            return res.json({
                error: 'User with this email and password combination not exist'
            })


        } catch (err) {
            console.log('System Crashed');
            console.log('Error: ');
            console.log(err);
            return res.json({
                error: 'Something went wrong on Server side'
            })
        }
    }

    return res.json({
        error: 'Fill all details'
    })
}

exports.getuser = (req, res) => {

}