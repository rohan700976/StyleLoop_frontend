import React, { useEffect, useState } from 'react'
import Products from '../Component/Products'
import axios from 'axios'

function KidsTshirt() {
    const tableName="kidsboystshirt";
    const [kidsTshirtDetails,setKidsTshirtDetails]=useState([]);
    useEffect(()=>{
        const handleProductDetails=async()=>{
            try {
                const response= await axios.get(`${import.meta.env.VITE_URL}/kids/kidsboystshirt`);
                console.log(response);
                if(response.status==200){
                    setKidsTshirtDetails(response.data);

                }
                
            } catch (error) {
                console.log(error)
                
            }

        }
        handleProductDetails();
    },[])

    // useEffect(()=>{
    //     console.log(kidsTshirtDetails);
    // },[kidsTshirtDetails]);
    

  return (
    <div className='mt-15'>
        <Products detail={kidsTshirtDetails} tableName={tableName} setDetails={setKidsTshirtDetails}/>
    </div>
  )
}

export default KidsTshirt