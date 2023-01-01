const router = require('express').Router()
const { models: { User }} = require('../db')
const nodemailer = require("nodemailer");
const emailGuest= require("../../script/emailGuest");

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GUSER,
    pass: process.env.GPASS
  }
})

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post("/contact", async (req, res, next) => {
  try {
    // const { name, email, message } = req.body;
    
    // let emailGuestHTML = emailGuest({ name, email, message });
    // transporter.sendMail({
    //   from: process.env.GUSER,
    //   to: 'andstatik@gmail.com',
    //   subject: `${name} messaged you from your personal website!`,
    //   html: emailGuestHTML
    // })

    res.send("Thank you! I will get back to you asap! 🙂")
  } catch (error) {
    console.log(error)
    next(error)
  }
})