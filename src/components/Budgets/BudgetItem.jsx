import React, { useState } from 'react'
import BudgetForm from './BudgetForm'
import { deleteBudgets } from './BudgetService';

function BudgetItem({limitAmount,spent,remaining,subcategory,budgetLink,onDelete}) {


    const [showPopup, setShowPopup] = useState(false);

    // Function to delete budget

    const onSelectDelete=(budget_id_link)=>{
      deleteBudgets(budget_id_link)
      onDelete();
      

    }



    // ====================================
  return ( 
    <div>
        <tr className="table table-secondary table-striped">
      <td>{subcategory}</td>
       <td>{"₹"+limitAmount}</td>
       <td>{"₹"+spent}</td>
        <td>{"₹"+remaining}</td>
        {/* <td> <button className="btn btn-success" id='budgetButton'>Add Expense</button>
       </td> */}
      <td> <button
      onClick={() => setShowPopup(true)}
      className="btn btn-success" id='budgetButton'
    > Add Expense
      
    </button></td>

    
       <td><button className="btn btn-danger" id='budgetButton' 
       onClick={()=>{onSelectDelete(budgetLink)}}>
           Delete Budget
               </button></td>
    

    
    </tr>

    

    <div className="flex flex-col items-center justify-center h-screen">
    

    {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Popup Title</h2>
          <p>This is a simple popup content.</p>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    )}



  </div>
  </div>

  
);





    // Popup

  


  
}

export default BudgetItem
