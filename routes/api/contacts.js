const express = require("express");
const ctrl = require("../../controllers/contactsDecor");
const { validateBody, isValidId } = require("../../middlewares");
const {schemas} = require("../../models/contact");

const router = express.Router();
// const parseJSON = express.json();

router.get("/", ctrl.getAll);

router.get("/:contactId",isValidId, ctrl.getById);

router.post("/", ctrl.postCont);

router.delete("/:contactId", isValidId, ctrl.deleteCont);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), ctrl.putCont);

router.patch("/:contactId/favorite", isValidId, validateBody(schemas.favoriteSchema), ctrl.patchCont);

module.exports = router;
