const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  authenticate,
  upload,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

router.get("/", authenticate, ctrl.getListContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  upload.single("avatar"),
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.updateSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContactById);

module.exports = router;
