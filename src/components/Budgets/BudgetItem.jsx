import React, { useState } from 'react';
import { deleteBudgets, getBudgets, getBudgetsById, updateSpentAmount } from './BudgetService';

function BudgetItem({ limitAmount, spent, remaining, subcategory, budgetLink, onDelete,onUpdateSpent }) {
    const [showPopup, setShowPopup] = useState(false);
    const [expense, setExpense] = useState("");

    // Function to delete budget
    const onSelectDelete = (budget_id_link) => {
        deleteBudgets(budget_id_link).then(data=>{
          onDelete();

        })
    };
// Function to update spent amount

const onSelectUpdate=async (link_for_budget,s)=>{
  console.log(s,link_for_budget);
  let getBudgets=await getBudgetsById(link_for_budget)
  getBudgets={...getBudgets,["spent"]:expense}
 console.log(getBudgets)
 updateSpentAmount(budgetLink,getBudgets).then(()=>{
  onUpdateSpent();
 })


 
 
  
}
    return (
        <>
            <tr className="table table-secondary table-striped">
                <td>{subcategory}</td>
                <td>{"₹" + limitAmount}</td>
                <td>{"₹" + spent}</td>
                <td>₹{limitAmount-spent}</td>
                <td>
                    <button
                        className="btn btn-success"
                        id="budgetButton"
                        onClick={() => setShowPopup(true)}
                    >
                        Add Expense
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        id="budgetButton"
                        onClick={() => onSelectDelete(budgetLink)}
                    >
                        Delete
                    </button>
                </td>
            </tr>

            {/* Expense Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h5>Enter Expense:</h5>
                        <input
                            type="number"
                            value={expense}
                            onChange={(e) => setExpense(e.target.value)}
                            className="form-control"
                            placeholder="Enter amount"
                            name='spent' required 
                        />
                        <div className="popup-buttons">
                            <button
                                onClick={() => setShowPopup(false)

                                    
                                }
                                className="btn btn-danger" 

                            >
                                Close
                            </button>
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                    console.log("Expense saved:", expense);
                                    setShowPopup(false)
                                    onSelectUpdate(budgetLink,expense);
                                        
                                }} 
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

           
        </>
    );
}

export default BudgetItem;
