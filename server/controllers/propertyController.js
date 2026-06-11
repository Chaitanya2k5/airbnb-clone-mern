const Property = require("../models/Property");

// CREATE PROPERTY
const createProperty = async (req, res) => {
  try {
    const { title, description, price, location, image } = req.body;

    const property = await Property.create({
      title,
      description,
      price,
      location,
      image,
      owner: req.user._id,
    });

    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET ALL PROPERTIES
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find()
      .populate("owner", "name email");

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET SINGLE PROPERTY
const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
      .populate("owner", "name email");

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE PROPERTY
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    if (property.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE PROPERTY
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    if (property.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    await property.deleteOne();

    res.json({
      message: "Property Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
};