const balance = document.getElementById('balance');
const expenseForm = document.getElementById('expense-form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expensesList = document.getElementById('expenses');

let totalBalance = 0;


//to display balance
function updateBalance() {
    balance.textContent = totalBalance.toFixed(2);
}


//to add new expense
function addExpense(description, amount, category) {
    if (category === 'uncategorized') {
        category = 'Uncategorized'
    }
    const expense = document.createElement('div');
    expense.classList.add('expense');
    expense.innerHTML = `
    <div class="description">${description}</div>
    <div class="amount">$${amount.toFixed(2)}</div> 
    <div class="category">${category}</div>
    <button class="delete-btn">Delete</button>
    `;
    expensesList.appendChild(expense);
    totalBalance += amount;
    updateBalance();

    //delete 
    const deleteBtn = expense.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        removeExpense(expense, amount);
    });
}

//for expense form submission 
expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const description = textInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value; 
    if (description !== '' && !isNaN(amount) && amount > 0) {
        addExpense(description, amount, category);
        textInput.value = '';
        amountInput.value = '';
        categoryInput.value = 'uncategorized';
    } else {
        alert('Please enter a valid description and amount.')
    }
});

// remove function
function removeExpense(expenseItem, amount) {
    expenseItem.remove();
    totalBalance -= amount;
    updateBalance();
}


