var express = require("express");
var router = express.Router();
var survey = require('../models/survey');


/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});
/*Route for Projects. */
router.get("/aboutus", function(req, res, next) {
	res.render("aboutus", { title: "About us" });
});
/*Route for About ME */
router.get("/results", function(req, res, next) {
	res.render("results", { title: "Results" });
});
/*Route for Surveys */
router.get("/surveys", function(req, res, next) {
	res.render("surveys", { title: "Surveys" });
});
/*Route for Contact us */
router.get("/contactus", function(req, res, next) {
	res.render("contactus", { title: "Contact us" });
});

/*Route for true/false question builder */
router.get("/truefalse", function(req, res, next) {
	res.render("truefalse", { title: "Contact us" });
});

/*Route for multi choice question builder */
router.get("/multichoice", function(req, res, next) {
	res.render("multichoice", { title: "Contact us" });
});

/*Route for multi choice question builder */
router.get("/textarea", function(req, res, next) {
	res.render("textarea", { title: "Contact us" });
});

// Route for login page
router.get("/login", function(req, res, next) {
	res.render("login", { title: "Login" });
});

// Route for registration page
router.get("/register", function(req, res, next) {
	res.render("register", { title: "Register" });
});

module.exports = router;
