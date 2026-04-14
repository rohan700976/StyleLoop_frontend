import React, { useEffect,useState } from 'react'
import Header from './Header'
import About from './About'
import Card from '../Card/Card'
import Brand from "./Brand"
import Choose from './Choose'
import Products from '../Component/Products'


import Hero from "./Hero";
import ProductCard from '../Card/ProductCard'
import Footer from './Footer';
import FilterSidebar from '../Component/FilterSidebar'
import Banner from './Banner'
import LandingPageBanner from "../Component/Banners/LandingPageBanner";
import BannerImg from '../assets/BannerImage/BannerImg.png'
import BannerImg2 from '../assets/BannerImage/BannerImg2.png'
import JacketImg from '../assets/BannerImage/JacketImg.png'
import ModelGirlImg from '../assets/BannerImage/ModelGirlImg.png'
import ModelBoyImg from '../assets/BannerImage/ModelBoyImg.png'
import CoupleImg from '../assets/BannerImage/CoupleImg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import axios from 'axios'

function Home() {
    const [details, setDetails] = useState([]);

  useEffect(()=>{
    const handleProductDetails= async ()=>{
    try {
      const response=await axios.get(`${import.meta.env.VITE_URL}/menshirt/shirt`);
      const res=await axios.get(`${import.meta.env.VITE_URL}/women/womanshirt`);
        // console.log(res);
        // console.log(response);
        if(response.status == 200 ){
           setDetails( response.data);
        }
        if(res.status== 200){
          const data = ([...response.data, ...res.data]);
          setDetails(data.sort(() => Math.random() - 0.5));
        }

      
    } catch (error) {
      console.log(error);
      
    }

  }
   handleProductDetails();
  },[]);

  // useEffect(()=>{
  // console.log(details)
  // },[details]);
  
  return (
    <div>

      <Hero />

      <Brand />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className=" px-6"
      >

        <SwiperSlide>

          <LandingPageBanner img={ModelGirlImg} bgcolor=" bg-[linear-gradient(287deg,_rgba(98,193,245,1)_0%,_rgba(242,251,252,1)_0%,_rgba(182,172,250,1)_0%,_rgba(204,240,192,1)_28%,_rgba(15,245,229,1)_47%,_rgba(15,245,229,1)_49%,_rgba(182,172,250,1)_100%)]" />
        </SwiperSlide>
        <SwiperSlide>

          <LandingPageBanner img={BannerImg} bgcolor='bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(61,171,235,1)_100%)] ' />
        </SwiperSlide>
        <SwiperSlide>

          <LandingPageBanner img={JacketImg} bgcolor=" bg-[linear-gradient(287deg,_rgba(12,160,240,1)_0%,_rgba(67,181,235,1)_13%,_rgba(131,205,230,1)_28%,_rgba(169,217,213,1)_49%,_rgba(56,217,211,1)_100%,_rgba(242,251,252,1)_0%)]" />
        </SwiperSlide>
        <SwiperSlide>

          <LandingPageBanner img={ModelBoyImg} bgcolor='bg-[linear-gradient(287deg,_rgba(12,160,240,1)_0%,_rgba(242,251,252,1)_0%,_rgba(192,243,242,1)_0%,_rgba(235,248,252,1)_28%,_rgba(145,242,234,1)_49%,_rgba(250,231,157,1)_100%)] ' />
        </SwiperSlide>
        <SwiperSlide>

          <LandingPageBanner img={CoupleImg} bgcolor="bg-[linear-gradient(287deg,_rgba(98,193,245,1)_0%,_rgba(242,251,252,1)_0%,_rgba(182,172,250,1)_0%,_rgba(235,248,252,1)_28%,_rgba(83,237,224,1)_47%,_rgba(83,237,224,1)_49%,_rgba(182,172,250,1)_100%)]" />
        </SwiperSlide>
        
      </Swiper>

      <Products details = {details}/>
      {/* <Banner /> */}
      <Choose/>

      {/* <About /> */}
    </div>
  )
}
export default Home;
