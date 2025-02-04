import React, { useEffect, useState } from 'react'
import { addIncomes } from './IncomeService'
import { getAccounts, setAccountsForIncome } from '../Accounts/AccountService';

function IncomeForm({income_link}) {
let[account,setAccount]=useState([]);
let[account_link,setAccount_link]=useState("");
const [showPopup, setShowPopup] = useState(false);



const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold">Income Added Successfully!!</h2>
        
        <button 
          onClick={onClose} 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

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
         placeholder="Enter Balance"  required
                  />


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Select Accounts
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">

{account.map((acc)=>{
  return(
  <li><button class="dropdown-item" type="button" onClick={()=>{handleAccount(acc._links.self.href)}}>{acc.accountType}</button></li>
  )
})}
    
   
  </ul>
</div>

   <button type='Submit'
   onClick={() => setShowPopup(true)} 
   className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Income</button>


</form>
{showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  )
}

export default IncomeForm
