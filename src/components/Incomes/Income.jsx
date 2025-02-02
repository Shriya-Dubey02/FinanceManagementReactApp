import React, { useEffect, useState } from 'react'
import IncomeForm from './IncomeForm';
import { getCardIncome, getCashIncome, getIncome, getIncomes, getSavingsIncome } from './IncomeService';
import IncomeItem from './IncomeItem';

function Income() {

    let[income,setIncome]=useState([])

    let[showForm,setShowForm]=useState(false);

    let[cardIncome,setCardIncome]=useState([]);
    let[cartTotal,setCardTotal]=useState(0)

    let[cashIncome,setCashIncome]=useState([]);
    let[savingsIncome,setSavingsIncome]=useState([]);

useEffect(()=>{
    getCashIncome().then(data=>{
        setCashIncome(data);
        console.log(income)
    })

    getSavingsIncome().then(data=>{
      setSavingsIncome(data);
    })

    getCardIncome().then(data=>{
      setCardIncome(data);

    })


},[showForm])

    const handleClick=()=>{
        setShowForm((prev)=>!prev)
    }


    const refereshIncomes=()=>{
      getCashIncome().then(data=>{
        console.log(data);
        setCashIncome(data);
      })
    }

    const refereshSIncomes=()=>{
      getSavingsIncome().then(data=>{
        setSavingsIncome(data);
      })
    }

    const refereshCardIncomes=()=>{
      getCardIncome().then(data=>{
        setCardIncome(data);
      })
    }
    // Calculate total cash income separately
  const totalCashIncome = cashIncome.reduce(
    (sum, item) => sum + (item.initialBalance || 0),
    0
  );
    // Calculate total card income separately
    const totalCardIncome = cardIncome.reduce(
      (sum, item) => sum + (item.initialBalance || 0),
      0
    );
      // Calculate total saving income separately
  const totalSavingIncome = savingsIncome.reduce(
    (sum, item) => sum + (item.initialBalance || 0),
    0
  );

   
  return (
    <div>
      <button className='btn btn-dark' onClick={handleClick}>Add Incomes</button>
      {showForm?<IncomeForm 
      />:<></>}
    

    {/* Displaying Incomes */}
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">AccountType</th>
            <th scope="col">Balance</th>
            <th scope="col">abc</th>
        
          </tr>
        </thead>
        <tbody>
          {cashIncome.map((s) => {
            return (
              <IncomeItem
                initialBalance={s.initialBalance}
                accountType={s.account}
                cashLink={s._links.self.href}
                OnDelete={refereshIncomes}
                // OnDelete={refereshIncomes}
              />
            );

          })}

<h1>Total: {totalCashIncome}</h1>
          
          <hr class="hr1" />



          {savingsIncome.map((r)=>{
            return(
              <IncomeItem
              initialBalance={r.initialBalance}
              accountType={r.account}
              savingLink={r._links.self.href}
                OnDelete={refereshSIncomes}
              
              />
            )

          })}
          <h1>Total: {totalSavingIncome}</h1>

          <hr class="hr1"/>

          {cardIncome.map((t)=>{
            return(
              
              <IncomeItem
              initialBalance={t.initialBalance}
              accountType={t.account}
              cardLink={t._links.self.href}
                OnDelete={refereshCardIncomes}
              
              />
            )

          })}
          <h1>Total: {totalCardIncome}</h1>

         
        </tbody>
      </table>
      </div>
      {/* Displaying Incomes: End */}
    </div>
  )
}

export default Income
