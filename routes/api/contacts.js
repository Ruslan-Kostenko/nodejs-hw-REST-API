const express = require("express");
const ctrl = require("../../controllers/contactsDecor");
const { validateBody, isValidId, authent, isOwner } = require("../../middlewares");
const {schemas} = require("../../models/contact");

const router = express.Router();
// const parseJSON = express.json();

router.get("/", authent, ctrl.getAll);

router.get("/:contactId", authent, isValidId, isOwner, ctrl.getById);

router.post("/", authent, validateBody(schemas.addSchema), ctrl.postCont);

router.delete("/:contactId", authent, isValidId, isOwner, ctrl.deleteCont);

router.put("/:contactId", authent, isValidId, isOwner, validateBody(schemas.addSchema), ctrl.putCont);

router.patch("/:contactId/favorite", authent, isValidId, isOwner, validateBody(schemas.favoriteSchema), ctrl.patchCont);

module.exports = router;
