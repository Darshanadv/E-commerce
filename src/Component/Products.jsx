import React, { useEffect, useState } from 'react'
import useEcomStore from '../../store/useEcomStore'
import Header from './Header';

const Products = () => {

  const{fetchproductData,productData} = useEcomStore();

  const [productItem, setProductItem] = useState({});
  const clickedItem = localStorage.getItem("Clicked Item");

   useEffect(() => {
      fetchproductData();
    }, []);
  
    // console.log(clickedItem);
    // console.log(productData[1]);
    // console.log(productData[productItem]);
    // console.log(productItem);
    
    
 useEffect(()=>{
    if(productData.length>0){
    
      if(clickedItem){
        const matchProduct = productData.find((user)=> user.id==clickedItem)
        if(matchProduct){                 //verify data as an object
          console.log(matchProduct);     
          setProductItem(matchProduct);  //setting the object's id
          // setProductItem(matchProduct);
        }else{
          console.log("no match product");   
        }
      }
    }
  }, [productData])


  // useEffect(()=>{
  //         if(storedEmail&&storedPassword){
  //           // return;
  //           navigate("/products")
  //         }else{
  //           navigate("/")
  //         }
  //       },[])


  return (
   <>
    <Header />
       <main className="p-5">
      
        
       <div 
      
       className="container mx-auto">
         <div className="grid gap-6 grid-cols-5">
           <div className="col-span-3">
             <div className="aspect-square flex items-center">
             
               <img src={productItem.image}alt="product image" className="h-96"/>  {/* product image fetched*/}
               
             </div>
             
           </div>
           <div className="col-span-2">
             <h1 className="text-3xl pb-5 font-semibold">
                  {productItem.title}
             </h1>
             
             {/* <div className="text-xl font-bold mb-6">{productItem.title}</div> */}
             <div className="flex items-center mb-6 justify-between">
               <div className="flex items-center text-orange-400">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-6 w-6"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                 >
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-6 w-6"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                 >
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-6 w-6"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                 >
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-6 w-6"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                 >
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   strokeWidth={2}
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                   />
                 </svg>
                 <h3 className="text-2xl font-semibold">
                {productItem.rating?.rate}
                </h3>
               </div>

               <div>
                
                </div>

                <div>
                <h3 className="text-xl font-semibold">
                  {`Price: ${productItem.price}£` }
                </h3>
                </div>
                </div>
               <a
                 href="#"
                 className="ml-3 font-normal text-purple-600 hover:text-purple-500"
               >
                 {/* {(fetchproductData[userId]).rating.count} */}
               </a>
             
             <div className="flex items-center justify-between mb-10 p-3 rounded-xl bg-gray-200">
               <label htmlFor="quantity" className="block font-bold mr-4 text-lg">
                 Quantity
               </label>
               <input
                 type="number"
                 name="quantity"
                 defaultValue={1}
                 className="w-32 h-10 focus:border-purple-500 focus:outline-none rounded text-lg bg-white px-5"
               />
             </div>
             <div className="flex justify-center">
             <button className="btn-primary py-4 text-lg flex justify-center min-w-0 w-48 rounded-xl mb-6 scale-125 bg-green-400">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-6 w-6 mr-2"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 strokeWidth={2}
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                 />
               </svg>
               Add to Cart
             </button>
             </div>
             
             <div className="text-gray-500 mb-6 wysiwyg-content">
               <table>
                 {/* <tbody>
                   <tr>
                     <td>Connectivity Technology</td>
                     <td>USB</td>
                   </tr>
                   <tr>
                     <td>Recommended Uses For Product</td>
                     <td>Gaming</td>
                   </tr>
                   <tr>
                     <td>Brand</td>
                     <td>Logitech G</td>
                   </tr>
                   <tr>
                     <td>Compatible Devices</td>
                     <td>Personal Computer</td>
                   </tr>
                   <tr>
                     <td>Series</td>
                     <td>Logitech G502 HERO High Performance Gaming Mouse</td>
                   </tr>
                 </tbody> */}
               </table>
               <p className="block font-bold mr-4">Description : </p>
               <p className="">
                {productItem.description}
               </p>
             </div>
           </div>
         </div>
       </div>
     
   
  

  </main></>
  )
}

export default Products