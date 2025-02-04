import React, { useEffect, useState } from "react";
import BudgetItem from "./BudgetItem";
import { getBalanceFromAccount, getBudgets, getIncomeForBudgets, getSpent } from "./BudgetService";
import { getIncome, getIncomes } from "../Incomes/IncomeService";
import { getAccounts } from "../Accounts/AccountService";

function Budgets() {
  let [budget, setBudget] = useState([]);
  let [selectedBudget, setSelectedBudget] = useState(null);
  let [spent, setSpent] = useState(0);
  let[income,setIncome]=useState([]);

  // Fetch budget items from the service
  const fetchBudget = async () => {
    try {
      const data = await getBudgets();
      setBudget(data);
    } catch (error) {
      console.error("Error fetching budget data:", error);
    }
  };

  const fetchAccount = async () => {
    try {
      const data = await getIncome();
      setIncome(data);
    } catch (error) {
      console.error("Error fetching budget data:", error);
    }
  };

  // const fetchTotalIncome=async (budgetLink)=>{
  //   let incomes=await getIncomeForBudgets(budgetLink)
  //   console.log(incomes);

  //   setIncomeTotal(incomes.reduce(
  //     (sum,item) => sum+(item.initialBalance || 0),
  //     0
  //   ));

  // }

  // useEffect(()=>{
  //   getBalanceFromAccount().then(data=>{
  //     setIncomeTotal(data);
  //   })
  // },[])

 
  useEffect(() => {
    fetchBudget();
    fetchAccount();
    // fetchTotalIncome(budgetLink);
  }, []);

  const refreshBudgets = async () => {
    try {
      const data = await getBudgets();
      setBudget(data);
    } catch (error) {
      console.error("Error refreshing budgets:", error);
    }
  };

  const totalExpense = budget.reduce(
    (sum, item) => sum + (parseInt(item.spent) || 0),
    0
  );


  const totalIncomes=income.reduce(
    (sum, item) => sum + (parseInt(item.initialBalance) || 0),
    0
  );



  // const totalIncome= budget.reduce(
  //   (sum,item)=> sum + (item.initialBalance || 0),
  //   0
  // );

  return (
    <div>
      {/* Navbar Start*/}
      <nav className="navbarBackground">
        <div className="container-fluid">
          <ul>
            <li className="listyle">
              Expense so far <br /> ₹{totalExpense}
            </li>
            <li className="listyle">
              Income so far <br /> ₹{totalIncomes}
            </li>
          </ul>
        </div>
      </nav>
      {/* Displaying Budgets */}
      <div className="container">
        <table className="table">
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
            {budget.map((s) => (
              <BudgetItem
                key={s.subcategory}  // Added a unique key for each item
                limitAmount={s.limitAmount}
                spent={s.spent}
                remaining={s.remaining}
                subcategory={s.subcategory}
                budgetLink={s._links.self.href}
                onDelete={refreshBudgets}
                onUpdateSpent={refreshBudgets}
              />
            ))}

           
          </tbody>
        </table>
      </div>
      {/* Displaying Budgets: End */}
    </div>
  );
}

export default Budgets;
