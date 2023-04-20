const Candy = require("../models/candy");

exports.getCandy = async (req, res, next) => {
  try {
    const all = await Candy.findAll();
    res.json(all);
  } catch (err) {
    console.log(err);
  }
};

exports.postCandy = async (req, res, next) => {
  try {
    const candyName = req.body.candyName;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const data = await Candy.create({
      candyName: candyName,
      description: description,
      price: price,
      quantity: quantity,
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

exports.btnOneCandy = async (req, res, next) => {
  try {
    const candyId = req.params.candyId;
    //const candyField = await Candy.findByPk(candyId);
  } catch (err) {
    console.error(err);
  }
};

exports.btnTwoCandy = async (req, res, next) => {
  try {
    const candyId = req.params.candyId;
    //const candyField = await Candy.findByPk(candyId);
  } catch (err) {
    console.error(err);
  }
};

exports.btnThreeCandy = async (req, res, next) => {
  try {
    const candyId = req.params.candyId;
   // const candyField = await Candy.findByPk(candyId);
  } catch (err) {
    console.error(err);
  }
};
