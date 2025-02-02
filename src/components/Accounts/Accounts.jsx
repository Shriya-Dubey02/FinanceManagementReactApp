import React, { useEffect, useState } from 'react'
import AccountItem from './AccountItem'
import { getAccounts } from './AccountService'
import Income from '../Incomes/Income'


function Accounts() {

    let[account,setAccount]=useState([])


    const fetchAccounts=()=>{
        getAccounts().then(data=>{
            setAccount(data)
        })
    }
    useEffect(()=>{

        fetchAccounts();
      
    },[])

      
      

   return(

    account.map(account=>{
        return(
            <AccountItem
            accountType={account.accountType} />

        )
    })

     );

    
}


export default Accounts
