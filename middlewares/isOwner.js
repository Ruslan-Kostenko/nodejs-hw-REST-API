const Contact = require("../models/contact");
const { HttpError } = require("../helpers");

const isOwner = async (req, res, next) => {
  try {
    const { contactid } = req.params;
    const { _id } = req.user;
    const contact = await Contact.findById(contactid);

    if (contact.owner.toString() !== _id.toString()) {
      throw HttpError(404, "Not found");
    }
    next();
  } catch {
    next(HttpError(404, "Not found"));
  }
};

module.exports = isOwner;
