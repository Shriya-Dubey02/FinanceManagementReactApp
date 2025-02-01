import React, { useEffect, useState } from 'react'
import IncomeForm from './IncomeForm';
import { getIncomes } from './IncomeService';

function Income() {

    let[income,setIncome]=useState([])
    let[showForm,setShowForm]=useState(false);

useEffect(()=>{
    getIncomes().then(data=>{
        setIncome(data);
    })
},[showForm])

    const handleClick=()=>{
        setShowForm((prev)=>!prev)
    }

   
  return (
    <div>
      <button className='btn btn-dark' onClick={handleClick}>Add Incomes</button>
      {showForm?<IncomeForm 
      />:<></>}
    </div>
  )
}

export default Income
