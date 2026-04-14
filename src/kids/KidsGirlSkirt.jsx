
import React from 'react'
import { useEffect, useState } from "react";
import Products from "../Component/Products.jsx";
import axios from "axios";

function KidsGirlSkirt() {
  const tableName="kidsgirlsskirts";
  const [GirlSkirtDetails,setGirlSkirtDetails]=useState([]);
  useEffect( ()=>{
     const handleProductDetails= async()=>{
    try {
    const respone= await axios.get(`${import.meta.env.VITE_URL}/kids/kidsgirlsskirts`);
    if(respone.status==200){
      setGirlSkirtDetails(respone.data)

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

     <Products detail={GirlSkirtDetails} tableName={tableName} setDetails={setGirlSkirtDetails}/>
   </div>
  );
}

export default KidsGirlSkirt