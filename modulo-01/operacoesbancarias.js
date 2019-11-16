const user = {
  nome: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction({ type: newType, value: newValue }) {
  const newTransaction = {
    type: newType,
    value: newValue
  };

  user.transactions.push(newTransaction);

  if (newType == "credit") {
    user.balance += newValue;
  } else if (newType == "debit") {
    user.balance -= newValue;
  } else {
    console.log("Ops! Tipo de transação não reconhecida.");
  }
}

function getHigherTrasactionByType(typeOfTransaction) {
  const arrTransactions = [];
  let maxTransaction = 0;

  for (transaction of user.transactions) {
    if (transaction.type === typeOfTransaction) {
      arrTransactions.push(transaction.value);
    }
  }
  maxTransaction = Math.max.apply(null, arrTransactions);
  console.log(maxTransaction);
}

function getAverageTransactionValue() {
  let media = 0;
  let result;

  for (let i = 0; i < user.transactions.length; i++) {
    media += user.transactions[i].value;
  }
  result = media / user.transactions.length;
  console.log(`A média de transações é ${result}`);
}

function getTransactionCount() {
  let cred = 0;
  let deb = 0;

  for (let transaction of user.transactions) {
    if (transaction.type === "credit") {
      cred += 1;
    } else if (transaction.type === "debit") {
      deb += 1;
    } else {
      console.log("Ops! Tipo de transação não reconhecida.");
    }
  }

  console.log(`{ credit: ${cred}, debit: ${deb}}`);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

getHigherTrasactionByType("credit");
getHigherTrasactionByType("debit");

getAverageTransactionValue();

getTransactionCount();
