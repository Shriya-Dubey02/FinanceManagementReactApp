import React, { useEffect, useState } from 'react'
import CategoryItem from './components/Categories/CategoryItem'
import { getBudget } from './components/services/BudgetService'

function NavbarHome() {
  let[budget,showBudget]=useState([])
  useEffect(()=>{
    getBudget().then(data=>{
      showBudget(data);
    })
  })
  return (
    <div>
        <nav class="navbarBackground">
    <div class="container-fluid">

      <ul>
        <li class="listyle">Expense <br/>₹ 2000</li>
        <li class="listyle">Income <br/>{budget.map((b)=>{
          <CategoryItem 
          IncomeSoFar={b.limitAmount}
          />
        })}</li>
        <li class="listyle">Total <br/>₹ 18000</li>
      </ul>
      
    </div>
    
  </nav>
    </div>
  )
}

export default NavbarHome
