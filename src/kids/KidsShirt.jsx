import React from 'react'
import { useEffect, useState } from "react";
import Products from "../Component/Products.jsx";
import axios from "axios";

function KidsShirt() {
  const tableName="kidsboyskurta";
   const [kidsShirtDetails,setKidsShirtDetails]=useState([]);
  useEffect( ()=>{
     const handleProductDetails= async()=>{
    try {
    const respone= await axios.get(`${import.meta.env.VITE_URL}/kids/kidsboyskurta`);
    if(respone.status==200){
     setKidsShirtDetails(respone.data)

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

     <Products detail={kidsShirtDetails} tableName={tableName} setDetails={setKidsShirtDetails}/>
   </div>
  );
}

export default KidsShirt