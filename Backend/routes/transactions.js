const {addIncome , getIncome , deleteIncome} = require('../controller/income');
const {addExpense, getExpense, deleteExpense} = require('../controller/expense');
const router = require('express').Router();

router
.post('/add-income', addIncome)
.get('/get-all', getIncome)
.delete('/delete-income/:id', deleteIncome)

router
.post('/add-expense', addExpense)
.get('/get-all-expense', getExpense)
.delete('/delete-expense/:id', deleteExpense)



module.exports = router 