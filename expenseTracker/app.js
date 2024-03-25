const balance = document.getElementById('balance');
const expenseForm = document.getElementById('expense-form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const expensesList = document.getElementById('expenses');

let totalBalance = 0;


//to display balance
function updateBalance() {
    balance.textContent = totalBalance.toFixed(2);
}


//to add new expense
function addExpense(description, amount) {
    const expense = document.createElement('div');
    expense.classList.add('expense');
    expense.innerHTML = `
    <div class="description">${description}</div>
    <div class="amount">$${amount.toFixed(2)}</div> 
    <button class="delete-btn">Delete</button>
    `;
    expensesList.appendChild(expense);
    totalBalance += amount;
    updateBalance();

    //delete 
    const deleteBtn = expense.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        removeExpense(expense, amount);
    });
}

//for expense form submission 
expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const description = textInput.value.trim();
    const amount = parseFloat(amountInput.value);
    if (description !== '' && !isNaN(amount) && amount >0) {
        addExpense(description, amount);
        textInput.value = '';
        amountInput.value = '';
    } else {
        alert('Please enter a valid description and amount.')
    }
});


