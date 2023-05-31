const Expense = require("../model/expense");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description } = req.body;

  try {
    const expense = await Expense.create(req.body);
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
      data: expense,
    });
  } catch (error) {
    return console.log(error);
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expense = await Expense.find();

    res.status(201).json({
      success: true,
      count:expense.length,
      data: expense,
    });
  } catch (error) {
    return console.log(error);
  }
};

exports.deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);
  
      res.status(201).json({
        success: true,
        massege: 'income deleted successfully',
        data: expense,
      });
    } catch (error) {
      return console.log(error);
    }
  };
