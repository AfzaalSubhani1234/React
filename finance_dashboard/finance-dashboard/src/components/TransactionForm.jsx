import { useState } from "react";
import "../components/TransactionForm";


function TransactionForm({ addTransaction }) {


    const [title, setTitle] = useState("");

    const [amount, setAmount] = useState("");

    const [type, setType] = useState("Income");



    function handleSubmit(event) {

        event.preventDefault();


        const transaction = {

            title: title,

            amount: Number(amount),

            type: type

        };


        addTransaction(transaction);


        // Clear form after submit

        setTitle("");

        setAmount("");

        setType("Income");

    }



    return (

        <div className="transaction-form">


            <h2>
                Add New Transaction
            </h2>


            <form onSubmit={handleSubmit}>


                <label>
                    Transaction Name
                </label>


                <input

                    type="text"

                    placeholder="Enter transaction name"

                    value={title}

                    onChange={(event) =>
                        setTitle(event.target.value)
                    }

                />



                <label>
                    Amount
                </label>


                <input

                    type="number"

                    placeholder="Enter amount"

                    value={amount}

                    onChange={(event) =>
                        setAmount(event.target.value)
                    }

                />



                <label>
                    Type
                </label>


                <select

                    value={type}

                    onChange={(event) =>
                        setType(event.target.value)
                    }

                >

                    <option>
                        Income
                    </option>


                    <option>
                        Expense
                    </option>


                </select>



                <button type="submit">

                    Add Transaction

                </button>


            </form>


        </div>

    );

}


export default TransactionForm;