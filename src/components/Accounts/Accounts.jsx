import React, { useEffect, useState } from 'react'
import AccountItem from './AccountItem'
import { getAccounts } from './AccountService'
import Income from '../Incomes/Income'
import totalCashIncome from '../Incomes/Income'
import { getCardIncome } from '../Incomes/IncomeService'

function Accounts() {

    let[account,setAccount]=useState([])

    let[cardIncome,setCardIncome]=useState([]);
    let[cardTotal,setCardTotal]=useState(0);


      // Calculate total card income separately
      const totalCardIncome = cardIncome.reduce(
        (sum, item) => sum + (item.initialBalance || 0),
        0
      );

    const fetchAccounts=()=>{
        getAccounts().then(data=>{
            setAccount(data)
        })
    }
    useEffect(()=>{

        fetchAccounts();

          getCardIncome().then(data=>{
              setCardIncome(data);
        
            })
      
    },[])

      
      

   return(

    account.map(account=>{
        return(
            <AccountItem
            accountType={account.accountType} 
            account_link={account._links.self.href}
/>
        

        )
    })

     );
    
}


export default Accounts
