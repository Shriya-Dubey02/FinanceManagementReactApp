import React, { useEffect, useState } from 'react'
import AccountItem from './AccountItem'
import { getAccounts } from './AccountService'


function Accounts() {

    let[account,setAccount]=useState([])

    useEffect(()=>{
        getAccounts().then(data=>{
            setAccount(data)
        })
    },[])

      
      
{account.map((p)=>{

   return(
   <AccountItem
   
   />
 )
})}
    
}


export default Accounts
