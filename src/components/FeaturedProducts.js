import React from 'react'
import { useProductContext } from '../Productcontext/ProductContext'
import Product from './Product'
import "../styles/FeatureProducts.css"

function FeaturedProducts() {
    const {isLoading , featureProducts}=useProductContext()

    if(isLoading){
        return <h1>...Loading</h1>
    }
  return (
    <>
    <div className="flex">
    {
        featureProducts.map((curElem)=>{
            return <Product key={curElem.id} curElem={curElem}/>
        })
      }
    </div>
     
    </>
  )
}

export default FeaturedProducts
