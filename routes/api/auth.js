const express = require("express");

const authCtrl = require("../../controllers/authDecor");
const validateBody = require("../../middlewares/validateBody");
const { schemas } = require("../../models/user");


const router = express.Router();

// sign up
router.post("/register", validateBody(schemas.registerSchema), authCtrl.register);

// sign in
router.post("/login", validateBody(schemas.loginSchema), authCtrl.login);


module.exports = router;