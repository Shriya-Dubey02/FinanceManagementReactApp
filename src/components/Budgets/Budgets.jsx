import React, { useEffect, useState } from "react";
import BudgetItem from "./BudgetItem";
import { getBudgets } from "./BudgetService";
import { data } from "react-router-dom";

function Budgets() {
  let [budget, setBudget] = useState([]);
  

  const fetchBudget=()=>{
    getBudgets().then((data) => {
      setBudget(data);
    });
  }

  useEffect(() => {
    fetchBudget();
  },[]);

  const refreshBudgets=()=>{
    getBudgets().then(data=>{
      setBudget(data);
    })
  }

  return (
    <div>
      {/* Navbar Start*/}
      <nav class="navbarBackground">
        <div class="container-fluid">
          <ul>
            <li class="listyle">
              Expense so far <br />₹ 2000
            </li>
            <li class="listyle">
              Income so far <br />₹ 20000
            </li>
          </ul>
        </div>
      </nav>
      {/* ============================================= */}
      {/* Displaying Budgets */}
      <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">SubCategoryName</th>
            <th scope="col">Limit</th>
            <th scope="col">Spent</th>
            <th scope="col">Remaining</th>
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          {budget.map((s) => {
            return (
              <BudgetItem
                limitAmount={s.limitAmount}
                spent={s.spent}
                remaining={s.remaining}
                subcategory={s.subcategory}
                budgetLink={s._links.self.href}
                onDelete={refreshBudgets}
              />
            );
          })}
        </tbody>
      </table>
      </div>
      {/* Displaying Budgets: End */}
    </div>
  );
}

export default Budgets;
