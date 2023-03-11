const config = require('config');
const Router = require('express');
const router = new Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/login',
    async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({username});

            const isPassValid = bcrypt.compareSync(password, user.password);
            
            if (!isPassValid) {
                return res.json({message: 'Invalid password or username'});
            };
            
            const token = jwt.sign(
                {id: user._id},
                config.get("secretKey"),
                {expiresIn: '1h'}
            );

            return res.json({token: token});
        } catch (error) {
            res.send({message: 'Server error'});
        };
});

router.post('/register',
    async (req, res) => {
        try {
            const hashPassword = await bcrypt.hash(req.body.password, 8);
            req.body.password = hashPassword;
            const user = new User(req.body);
            await user.save();
            return res.json({message: 'User was created'});
        } catch (error) {
            res.send({message: 'Server error'});
        };
});

module.exports = router;