import React from 'react';
 import Products from '../Component/Products';
 import { useState,useEffect } from 'react';
import axios from 'axios';
function GirlJeans() {
  const tableName="womanjeans";
  const [girljeansDetails,setGirlJeansDetails]=useState([]);
    useEffect(()=>{
        const handleProductDetails= async()=>{
            try {
                const response= await axios.get(`${import.meta.env.VITE_URL}/women/womanjeans`);
                //  console.log(response);
                if(response.status==200){
                    setGirlJeansDetails(response.data);
                }
                
            } catch (error) {
                console
                
            }
        }
        handleProductDetails();
    },[])

    //   useEffect(()=>{
    //     console.log(girljeansDetails);
    //   },[girljeansDetails])


  return (
   <div className="mt-15 ">

     <Products detail={girljeansDetails} tableName={tableName} setDetails={setGirlJeansDetails}/>
   </div>
  );
}

export default GirlJeans;
