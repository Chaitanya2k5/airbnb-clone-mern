const express = require("express");
const router = express.Router();

const {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  getMyProperties,
} = require("../controllers/propertyController");

const { protect } = require("../middleware/authMiddleware");

// Get all properties & create property
router
  .route("/")
  .get(getProperties)
  .post(protect, createProperty);

// Get logged-in user's properties
router.get(
  "/my-properties",
  protect,
  getMyProperties
);

// Get single property, update property, delete property
router
  .route("/:id")
  .get(getPropertyById)
  .put(protect, updateProperty)
  .delete(protect, deleteProperty);

module.exports = router;