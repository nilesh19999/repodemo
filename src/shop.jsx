import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "./state/index"

function Shop() {
  const dispatch = useDispatch()
  const action= bindActionCreators(actionCreators,dispatch)
  return (
    <>
    <div>
       <center>
        <h2>Deposit/Withdraw Money</h2>
       <button className=" btn btn-success mx-4 my-2 " onClick={()=>{ action.depositMoney(100)}}>+</button>
       <span><h4>Update Balance</h4></span>
        <button className=" btn btn-danger mx-4 my-2" onClick={()=>{action.withdrawMoney(1)}}>-</button>


     
 
        </center>
           </div>
       
    </>  
  )
}

export default Shop
