import React from 'react'
import { FaPlus , FaMinus } from 'react-icons/fa'
import "../styles/CartAmountToggle.css"

function CartAmountToggle({amount , setIncrease , setDecrease}) {
  return (
    <div className='flex1'>
      <button onClick={()=>setDecrease()} className='i-d'><FaMinus/></button>
      <div className="amount">{amount}</div>
      <button onClick={()=>setIncrease()} className='i-d'><FaPlus/></button>
    </div>
  )
}

export default CartAmountToggle
