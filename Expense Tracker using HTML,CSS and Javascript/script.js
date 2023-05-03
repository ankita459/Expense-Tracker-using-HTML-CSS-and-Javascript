let expenses = [];
let totalExpense = 0;

function addExpense() {
	const expenseInput = document.getElementById('expense');
	const amountInput = document.getElementById('amount');

	const expense = expenseInput.value;
	const amount = parseFloat(amountInput.value);

	if (expense && amount) {
		expenses.push({ expense, amount });
		updateTable();
		updateTotalExpense();
		expenseInput.value = '';
		amountInput.value = '';
	}
}

function updateTable() {
	const tableBody = document.querySelector('#expenseTable tbody');
	tableBody.innerHTML = '';

	expenses.forEach((expense) => {
		const row = document.createElement('tr');
		const expenseCell = document.createElement('td');
		const amountCell = document.createElement('td');

		expenseCell.innerText = expense.expense;
		amountCell.innerText = `$${expense.amount.toFixed(2)}`;

		row.appendChild

row.appendChild(expenseCell);
row.appendChild(amountCell);
tableBody.appendChild(row);
});
}

function updateTotalExpense() {
const totalExpenseElement = document.getElementById('totalExpense');
totalExpense = expenses.reduce((total, expense) => {
return total + expense.amount;
}, 0);
totalExpenseElement.innerText = `Total Expense: $${totalExpense.toFixed(2)}`;
}