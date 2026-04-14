import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../Component/Products';
function GirlShirt() {
    const tableName="womanshirt";
    const [girlShirtDetails,setGirlShirtDetails]=useState([]);
    useEffect(()=>{
        const handleProductDetails= async()=>{
            try {
                const response= await axios.get(`${import.meta.env.VITE_URL}/women/womanshirt`);
                // console.log(response);
                if(response.status==200){
                    setGirlShirtDetails(response.data);
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
        <Products detail={girlShirtDetails} tableName={tableName} setDetails={setGirlShirtDetails}/>
    </div>
  )
}

export default GirlShirt;