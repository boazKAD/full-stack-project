const Income = require("../model/incomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    const income = await Income.create(req.body);
    //validations
    if (!title || !category || !description) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }

    res.status(201).json({
      success: true,
      data: income,
    });
  } catch (error) {
    return console.log(error);
  }
};

exports.getIncome = async (req, res) => {
  try {
    const income = await Income.find();

    res.status(201).json({
      success: true,
      count:income.length,
      data: income,
    });
  } catch (error) {
    return console.log(error);
  }
};

exports.deleteIncome = async (req, res) => {
    try {
        const income = await Income.findByIdAndDelete(req.params.id);
  
      res.status(201).json({
        success: true,
        massege: 'income deleted successfully',
        data: income,
      });
    } catch (error) {
      return console.log(error);
    }
  };
