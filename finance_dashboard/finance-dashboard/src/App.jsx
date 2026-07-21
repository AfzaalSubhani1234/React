import { useState } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [income, setIncome] = useState(5000);
  const [expense, setExpense] = useState(2100);

  // Calculate automatically
  const balance = income - expense;


  // Receive data from TransactionForm
  function addTransaction(transaction) {

    if (transaction.type === "Income") {

      setIncome(income + transaction.amount);

    } else {

      setExpense(expense + transaction.amount);

    }

  }


  return (
    <>
      <Navbar />

      <div className="layout">

        <Sidebar />


        <main className="main-content">

          <h1>Welcome to Your Finance Dashboard</h1>

          <p>
            Manage your income and expenses easily.
          </p>


          <div className="cards">

            <SummaryCard
              icon="💵"
              title="Total Income"
              amount={`$${income}`}
            />


            <SummaryCard
              icon="💸"
              title="Total Expenses"
              amount={`$${expense}`}
            />


            <SummaryCard
              icon="💰"
              title="Current Balance"
              amount={`$${balance}`}
            />

          </div>


          <TransactionForm
            addTransaction={addTransaction}
          />


        </main>

      </div>
    </>
  );
}

export default App;