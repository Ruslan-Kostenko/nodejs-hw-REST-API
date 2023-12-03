const {Contact} = require("../models/contact");
const { HttpError, CtrlWrapper } = require("../helpers");


const getAll = async (req, res) => {
  const contact = await Contact.find();
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
  const contact = await Contact.create(req.body);
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
