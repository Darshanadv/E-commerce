import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Tabs, Tab } from "./Tab";
import axios from "axios";
import useEcomStore from '../../store/useEcomStore';


const Category = () => {

  const[category, setCategory] = useState([])

  const{fetchproductData, productData} = useEcomStore();

  useEffect(()=>{
    fetchproductData();
  },[])

  

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/categories")
    .then((res)=>{
    setCategory(res.data)
    // console.log(res.data);
    
  }).catch((error)=>{
    console.log(error)
  })
  }, []) 
  
  
  return (
    
    <div>
        <Header />


        <Tabs>
          {category.map((item, id) => (
            <Tab key={id} >
              {item}
            </Tab>
            ))}
        </Tabs>
        
        </div>
  )
}

export default Category