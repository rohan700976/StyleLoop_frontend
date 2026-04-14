import React, { useEffect, useState } from "react";
import Products from "../Component/Products.jsx";
import axios from "axios";

function Shirt() {
  const tableName="menshirt"
  const [shirt,setShirt]=useState([]);
  useEffect( ()=>{
     const handleProductDetails= async()=>{
    try {
    const respone= await axios.get(`${import.meta.env.VITE_URL}/menshirt/shirt`);
    if(respone.status==200){
      setShirt(respone.data)

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

     <Products detail={shirt} tableName={tableName} setDetails={setShirt}/>
   </div>
  );
}

export default Shirt;
