
import React from 'react'
import { useEffect, useState } from "react";
import Products from "../Component/Products.jsx";
import axios from "axios";

function KidsJeans() {
  const tableName="kidsboysjeans";
  const [kidsJeansDetails,setKidsJeansDetails]=useState([]);

  useEffect( ()=>{
     const handleProductDetails= async()=>{
    try {
    const respone= await axios.get(`${import.meta.env.VITE_URL}/kids/kidsboysjeans`);
    if(respone.status==200){
     setKidsJeansDetails(respone.data);

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

     <Products detail={kidsJeansDetails} tableName={tableName} setDetails={setKidsJeansDetails}/>
   </div>
  );
}


export default KidsJeans;