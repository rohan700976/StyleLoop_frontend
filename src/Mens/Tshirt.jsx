import React, { useEffect, useState } from 'react'
import Products from '../Component/Products';
import axios from 'axios'
import FilterSidebar from '../Component/FilterSidebar';


function Tshirt() {
  
  const [details,setDetails]=useState([]);
  const tableName = "menstshirt";
  // setDetails(tableName);

  useEffect(()=>{
  const  handleProductDetails= async ()=>{
    try {
      const response= await axios.get(`${import.meta.env.VITE_URL}/menstshirt/tshirt`);
     // console.log(response.data);
      if(response.status==200){
        setDetails(response.data)
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  handleProductDetails();
  },[])

  // useEffect(()=>{
  //   //console.log(details);
  // },[details]);

  
  
  return (
  <div className="mt-15 ">
    {/* <div className="w-full max-w-xs hidden sm:block">
      <FilterSidebar tableName = {tableName}  setDetails={setDetails}/>
    </div>
     */}
     <Products detail={details} tableName={tableName} setDetails={setDetails}/>
   </div>
  )
}

export default Tshirt