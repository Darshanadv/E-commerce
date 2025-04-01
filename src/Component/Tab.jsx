import React, { useEffect, useState } from "react";
import axios from "axios";
import useEcomStore from "../../store/useEcomStore";


export function Tabs({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }


  function tabValidator(tab) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="flex gap-2 justify-center bg-blue-500 p-2">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item, i) => {
          return (
            <div className={` ${i === activeTab ? "visible" : "hidden"}`}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {

  const{fetchproductData, productData} = useEcomStore();

   useEffect(()=>{
      fetchproductData();
    },[])

  const[categoryList, setCategoryList] = useState([])
  const matchedCategoryItems = productData.filter((item) => children === item.category);
  
  const electronics = "electronics"
  const defaultCategoryItems = matchedCategoryItems.filter((item)=>item.category === electronics)
  console.log(defaultCategoryItems);
  

  const categoryItem = () => {
    setActiveTab(currentTab);
    console.log(productData);
    console.log(children);          // category select detail : category name
    console.log(currentTab);        // order of selected category
    console.log(matchedCategoryItems);
    setCategoryList(matchedCategoryItems);
  };

  
  return (
    <>

      <div
        className={`px-5 py-3 rounded cursor-pointer
      ${activeTab === currentTab ? "bg-white" : "bg-blue-400 text-white"}`}
        onClick={() => categoryItem()}
      >
        {children} 
      </div>

      <ul>
  {categoryList?.length > 0 ? (
    categoryList.map((item, id) => <li key={id}>{item.title}</li>)
  ) : (
    <li>{defaultCategoryItems?.map((item,id)=>( <li key={id}>{item.title}</li>
      ))}</li>
  )}
  </ul>
    </>
  );

}

Tab.displayName = "Tab";