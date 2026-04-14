import React from 'react'
import { useEffect, useState } from "react";
import Products from "../Component/Products.jsx";
import axios from "axios"

function KidsGirlTop() {
  const tableName="kidsgirlstop";

 const [girlTopDetails,setGirlTopDetails]=useState([]);
  useEffect( ()=>{
     const handleProductDetails= async()=>{
    try {
    const respone= await axios.get(`${import.meta.env.VITE_URL}/kids/kidsgirlstop`);
    if(respone.status==200){
     setGirlTopDetails(respone.data)

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

     <Products detail={girlTopDetails} tableName={tableName} setDetails={setGirlTopDetails}/>
   </div>
  );
}

export default KidsGirlTop