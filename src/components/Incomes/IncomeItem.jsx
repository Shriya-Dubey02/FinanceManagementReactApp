import React from 'react'
import { deleteAccounts } from './IncomeService';

function IncomeItem({initialBalance,accountType,cashLink,OnDelete,savingLink,cardLink}) {

    const onSelectDelete=(c_link)=>{

        deleteAccounts(c_link).then(data=>{
            OnDelete();

        })
    }



  return (
       <tr className="table table-secondary table-striped">
        <td>{accountType}</td>
       <td>{initialBalance}</td>
       <td><button
                        className="btn btn-danger"
                        id="DeleteButton" 
                        onClick={()=> {onSelectDelete(cashLink);onSelectDelete(savingLink);onSelectDelete(cardLink)}}
                    >
                        Delete Income
                    </button></td>
       </tr>
  )
}

export default IncomeItem
