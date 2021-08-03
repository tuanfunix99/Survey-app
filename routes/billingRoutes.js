
//Dependencies
const express = require("express");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const isLoggedIn = require("../middlewares/requireLogin");

//Instantiate router
const router = express.Router();

//handle token stripe
router.post("/api/stripe", isLoggedIn, async (req, res) => {
    const token = req.body.token;
    const charge = await stripe.charges.create({
        amount: 100,
        currency: 'usd',
        source: token.id,
        description: '1$ for 10 emails',
      });
     const user = await req.user.addCredit(req.user._id);
     res.status(201).send(user);
});

//export the module
module.exports = router;
