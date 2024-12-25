import React from 'react'
import { useFilterContext } from '../Productcontext/FilterContext'
import "../styles/ProductsList.css"
import GridView from "../components/GridView"
import ListView from "../components/ListView"

function ProductsList() {
  const {filter_products , grid_view} = useFilterContext()

  if(grid_view === true){
   return <GridView products={filter_products}/>
  }

  if(grid_view === false){
  return  <ListView products={filter_products}/>
  }
  // return (
  //   <>
    
  //   </> 
  // )
}

export default ProductsList
