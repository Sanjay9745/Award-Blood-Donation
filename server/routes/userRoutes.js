const express = require('express');
const router = express.Router();
const User = require('../models/Users');


router.post("/register", async (req, res) => {
    try {
       const {name, place, blood_group, phone_number, district} = req.body;
      // validate data not empty
         if(!name || !place || !blood_group || !phone_number || !district){
              return res.status(400).json({msg: "Please fill all the fields"});
         }
       //find user with phone number if already exist then throw error
       const user = await User.findOne({phone_number});
         if(user){
              return res.status(400).json({msg: "User already exist with this phone number"});
         }
         //create new user
            const newUser = new User({name, place, blood_group, phone_number, district});
            await newUser.save();

            res.status(200).json({msg: "User created successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
})
router.get("/users", async (req, res) => {
    try {
        const {district,blood_group} = req.query;
        console.log(district,blood_group);
        const users = await User.find();
        //find users with district and blood group
        const filteredUsers = users.filter(user => user.district === district && user.blood_group === blood_group);
        res.status(200).json(filteredUsers);

    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/single-user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
})
router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json(error);
    }
})
router.get("/users/:district/:blood_group", async (req, res) => {
    try {
        const {district,blood_group} = req.params;
       
        const users = await User.find({district,blood_group});
        //find users with district and blood group
        
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json(error);
    }
});
router.get("/users/search/:district/:blood_group", async (req, res) => {
    try {
        const { search, selected } = req.query;
        const {district,blood_group} = req.params;
    
        let users;
        if (selected === "name") {
            users = await User.find({ name: { $regex: search, $options: "i" }, district, blood_group });
        } else if (selected === "place") {
            users = await User.find({ place: { $regex: search, $options: "i" }, district, blood_group });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;