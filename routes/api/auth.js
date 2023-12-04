const express = require("express");

const authCtrl = require("../../controllers/authDecor");
const { validateBody, authent } = require("../../middlewares");
const { schemas } = require("../../models/user");


const router = express.Router();

// sign up
router.post("/register", validateBody(schemas.registerSchema), authCtrl.register);

// sign in
router.post("/login", validateBody(schemas.loginSchema), authCtrl.login);


router.get("/current", authent, authCtrl.getCurrent)


router.post("/logout", authent, authCtrl.logout);


module.exports = router;