import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Tabs, Tab } from "./Tab";
import axios from "axios";

const Category = () => {

  const[category, setCategory] = useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/categories")
    .then((res)=>{
    setCategory(res.data)
    console.log(res.data);
    
  }).catch((error)=>{
    console.log(error)
  })
  }, []) 

  // console.log(category);


  return (
    
    <div>
        <Header />

      {category.map((item,id)=>(
           
           <Tabs key={id}>
        <Tab component={item}></Tab>
        </Tabs> 

      ))}
        </div>
  )
}

export default Category