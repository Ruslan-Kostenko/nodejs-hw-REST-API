const express = require("express");

const authCtrl = require("../../controllers/authDecor");
const { validateBody, authent, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");


const router = express.Router();

// sign up
router.post("/register", validateBody(schemas.registerSchema), authCtrl.register);

router.get("/verify/:verificationToken", authCtrl.verifyEmail);

router.post("/verify", validateBody(schemas.emailSchema), authCtrl.recendVerifyEmail);

// sign in
router.post("/login", validateBody(schemas.loginSchema), authCtrl.login);

router.get("/current", authent, authCtrl.getCurrent);

router.post("/logout", authent, authCtrl.logout);

router.patch("/avatars", authent, upload.single("avatar"), authCtrl.updateAvatar);


module.exports = router;