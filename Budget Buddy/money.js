document.addEventListener('DOMContentLoaded', function () {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const transactionType = document.getElementById('transaction-type');
    const addTransactionButton = document.getElementById('add-transaction');
    const transactionList = document.getElementById('transaction-list');
    const totalIncome = document.getElementById('total-income');
    const totalExpenses = document.getElementById('total-expenses');
    const budgetDisplay = document.getElementById('budget');

    const transactions = [];
    let budget = 0;

    addTransactionButton.addEventListener('click', addTransaction);

    function addTransaction() {
        const description = descriptionInput.value;
        const amount = parseFloat(amountInput.value);
        const type = transactionType.value;

        if (description && amount) {
            const transaction = { description, amount, type };
            transactions.push(transaction);

            updateTransactionList();
            updateSummary();
        }

        descriptionInput.value = '';
        amountInput.value = '';
    }

    function updateTransactionList() {
        transactionList.innerHTML = '';
        transactions.forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.textContent = `${transaction.description} - $${transaction.amount} (${transaction.type})`;
            transactionList.appendChild(listItem);
        });
    }

    function updateSummary() {
        let income = 0;
        let expenses = 0;

        transactions.forEach(transaction => {
            if (transaction.type === 'income') {
                income += transaction.amount;
            } else {
                expenses += transaction.amount;
            }
        });

        totalIncome.textContent = income;
        totalExpenses.textContent = expenses;
        budget = income - expenses;
        budgetDisplay.textContent = budget;
    }
});
