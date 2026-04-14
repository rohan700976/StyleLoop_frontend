import React from 'react'
import { useEffect, useState } from "react";
import Products from "../Component/Products.jsx";
import axios from "axios";


function Lehnga() {
  const tableName="womanlehenga"
  const [lehngaDetails,setLehngaDetails]=useState([]);
  useEffect( ()=>{
     const handleProductDetails= async()=>{
    try {
    const respone= await axios.get(`${import.meta.env.VITE_URL}/women/womanlehenga`);
    if(respone.status==200){
      setLehngaDetails(respone.data)

    }
    
  console.log(respone.data);
  } catch (error) {
    console.log(error);
    
  }

  }
  handleProductDetails();
  },[])

  //   useEffect(()=>{
  //   console.log(shirt);
  // },[shirt]);


  return (
   <div className="mt-15 ">

     <Products detail={lehngaDetails} tableName={tableName} setDetails={setLehngaDetails}/>
   </div>
  );
}

export default Lehnga;
