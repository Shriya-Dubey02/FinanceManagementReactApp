import React, { useEffect, useState } from 'react'
import { addIncomes } from './IncomeService'
import { getAccounts, setAccountsForIncome } from '../Accounts/AccountService';

function IncomeForm({income_link}) {
let[account,setAccount]=useState([]);
let[account_link,setAccount_link]=useState("");



const fetchAccounts=async()=>{
  setAccount(await getAccounts())
}

useEffect(()=>{
  fetchAccounts()
  
},[])
// Add incomes
const submithandler=(e)=>{

  e.preventDefault();
  

  addIncomes({
    initialBalance: e.target.initialBalance.value
  }).then(data=>{

    console.log(account_link,data._links.account.href)
    setAccountsForIncome(account_link,data._links.account.href)
         
  })

}

const handleAccount=(account_link)=>{
  setAccount_link(account_link);

}

  return (
    <div className='maincategory'>
      <form id='myForm' onSubmit={submithandler}>
  <h1 class="categoryHead">Income Form</h1>

 <label for="balance">
        Enter Initial Balance: 
  </label>
  <input type="number"
         id="initialAmount" 
         name="initialBalance"
         placeholder="Enter Balance"  
                  />


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">

{account.map((acc)=>{
  return(
  <li><button class="dropdown-item" type="button" onClick={()=>{handleAccount(acc._links.self.href)}}>{acc.accountType}</button></li>
  )
})}
    
   
  </ul>
</div>

   <button type='Submit'>Add Income</button>

</form>
    </div>
  )
}

export default IncomeForm
