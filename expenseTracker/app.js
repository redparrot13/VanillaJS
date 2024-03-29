const balance = document.getElementById('balance');
const expenseForm = document.getElementById('expense-form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expensesList = document.getElementById('expenses');
const resetButton = document.getElementById('reset-btn');

let totalBalance = 0;

//to update the display balance
function updateBalance() {
    balance.textContent = totalBalance.toFixed(2);
    //console.log('Balance updated:', totalBalance.toFixed(2));
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
    console.log('Expense added:', {description, amount, category});

    //delete 
    const deleteBtn = expense.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        removeExpense(expense, amount);
    });

   
} 


// function to remove expense item
function removeExpense(expenseItem, amount) {
    expenseItem.remove();
    totalBalance -= amount;
    updateBalance();
    /* console.log('Expense removed:', { description: expenseItem.querySelector('.description').textContent, amount: amount, category: expenseItem.querySelector('.category').textContent }); */
}

//function to reset the tracker
function resetExpenses() {
    totalBalance = 0;
    expensesList.innerHTML = '';
    updateBalance();
    //console.log('Tracker reset')
}


// EVENT LISTENERS: 

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

// for key press on category 
categoryInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        expenseForm.dispatchEvent(new Event('submit'));
    }
});

//to reset tracker
resetButton.addEventListener('click' , function () {
    resetExpenses();
    //console.log('Reset button clicked');
});



