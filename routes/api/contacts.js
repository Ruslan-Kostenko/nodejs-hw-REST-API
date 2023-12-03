const express = require("express");
const ctrl = require("../../controllers/contactsDecor");
const { validateBody, isValidId, authent } = require("../../middlewares");
const {schemas} = require("../../models/contact");

const router = express.Router();
// const parseJSON = express.json();

router.get("/", authent, ctrl.getAll);

router.get("/:contactId", authent, isValidId, ctrl.getById);

router.post("/", authent, validateBody(schemas.addSchema), ctrl.postCont);

router.delete("/:contactId", authent, isValidId, ctrl.deleteCont);

router.put("/:contactId", authent, isValidId, validateBody(schemas.addSchema), ctrl.putCont);

router.patch("/:contactId/favorite", authent, isValidId, validateBody(schemas.favoriteSchema), ctrl.patchCont);

module.exports = router;
