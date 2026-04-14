import React from 'react'
import { useEffect, useState } from "react";
import Products from "../Component/Products.jsx";
import axios from "axios";

function Kurti() {
  const tableName="womenkurtas"
 const [kurtiDetails,setKurtiDetails]=useState([]);
  useEffect( ()=>{
     const handleProductDetails= async()=>{
    try {
    const respone= await axios.get(`${import.meta.env.VITE_URL}/women/womenkurtas`);
    if(respone.status==200){
      setKurtiDetails(respone.data)

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

     <Products detail={kurtiDetails} tableName={tableName} setDetails={setKurtiDetails}/>
   </div>
  );
}

export default Kurti;
