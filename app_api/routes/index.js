const express = require('express');
const router = express.Router();

const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication"); 
const jwt = require("jsonwebtoken");

function authenticateJWT(req, res, next) {

    const authHeader = req.headers.authorization;

    if (authHeader == null) {
        console.log('Auth Header required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' '); // Authorization
    if (headers.length < 1) {
        console.log('Not enough tokens in Auth Header : ' + headers.length);
        return res.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];

    if (token == null) {
        console.log('Null bearer token found!');
        return res.sendStatus(401);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403).json({ message: 'Token not valid' });
        }
        req.auth = verified;
    });
    next();
}

//router.route("/trips").get(tripsController.tripsList);

//router.route("/register").post(authController.register);
//router.route("/login").post(authController.login);

//GET method routes tripsFindByCode
router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(authenticateJWT, tripsController.tripsAddTrip); // POST method adds trip


router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;