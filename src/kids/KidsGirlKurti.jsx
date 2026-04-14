
import React from 'react'
import { useEffect, useState } from "react";
import Products from "../Component/Products.jsx";
import axios from "axios";

function KidsGirlKurti() {
  const tableName="kidsgirlskurta";
  
 const [kidskurtiDetails,setKidsKurtiDetails]=useState([]);
  useEffect( ()=>{
     const handleProductDetails= async()=>{
    try {
    const respone= await axios.get(`${import.meta.env.VITE_URL}/kids/kidsgirlskurta`);
    if(respone.status==200){
      setKidsKurtiDetails(respone.data)

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

     <Products detail={kidskurtiDetails} tableName={tableName} setDetails={setKidsKurtiDetails}/>
   </div>
  );
}


export default KidsGirlKurti;