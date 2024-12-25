import React from 'react'
import Product from "../components/Product"


function GridView({products}) {
  return (
    <>
     {
      products.map((curElem)=>{
        return(
          <Product curElem={curElem} key={curElem.id}/>
        )
      })
     } 
    </>
  )
}

export default GridView
