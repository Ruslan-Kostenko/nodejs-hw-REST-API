const {Contact} = require("../models/contact");
const { HttpError, CtrlWrapper } = require("../helpers");


const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 2, limit = 2 } = req.query;
  const skip = (page - 1) * limit;
  
  const contact = await Contact.find({owner},"-createAt -updateAt", {skip, limit}).populate("owner", "name email");
  res.json(contact);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

const postCont = async (req, res) => {
  const { _id: owner } = req.user;
  const contact = await Contact.create({ ...req.body, owner });
  res.status(201).json(contact);
};

const deleteCont = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Contact deleted",
  });
};

const putCont = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

const patchCont = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!contact) {
    throw HttpError(404, "Not found");
  }
  res.json(contact);
};

module.exports = {
  getAll: CtrlWrapper(getAll),
  getById: CtrlWrapper(getById),
  postCont: CtrlWrapper(postCont),
  deleteCont: CtrlWrapper(deleteCont),
  putCont: CtrlWrapper(putCont),
  patchCont: CtrlWrapper(patchCont),
};
