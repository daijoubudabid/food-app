import fs from "fs";
import foodModel from "../models/foodModel.js";

// add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};

// add all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    fs.unlink(`uploads/${food.image}`, (err) => {});

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
};

export { addFood, listFood, removeFood };
