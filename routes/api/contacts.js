const express = require("express");
const ctrl = require("../../controllers/contactsDecor");
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contactsValid");

const router = express.Router();


router.get("/", ctrl.getAll);

router.get("/:contactId",isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.postCont);

router.delete("/:contactId", isValidId, ctrl.deleteCont);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), ctrl.putCont);

module.exports = router;
