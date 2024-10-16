import React, { useEffect, useState } from "react";
import Container from "./extracomp/Container";
import fetur from "../assets/feturs.png";
import { FaMinus } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";
import axios from 'axios';

const Fetursproduct = () => {

  let [productApi, setProductApi] = useState([])
  
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProductApi(response.data.products);
        
      })
  }
  
  useEffect(() => {
    getData()
  },[])
console.log(productApi);


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="py-[100px]">
      <Container>
        <h2 className="text-[42px] capitalize font-bold text-[#1A0B5B] text-center ">
          Featured Products
        </h2>
        <div className="text-center  py-[50px]">
          <Slider {...settings}>
            {productApi.map((item) => (
              <div>
              <div className="h-[363px] w-[270px] border group relative ">
                <div className="flex items-center gap-x-[16px] absolute top-2 left-2 opacity-0 group-hover:opacity-100">
                  <IoCartOutline className="text-[23px] cursor-pointer" />
                  <CiHeart className="text-[23px] cursor-pointer" />
                  <FaSearchPlus className="text-[23px] cursor-pointer" />
                </div>
                <div className=" bg-[#F6F7FB] pl-[40px] pt-[46px] pr-[52px] pb-[12px] ">
                  <img className="bg-cover bg-center " src={item.thumbnail} alt="" />
                </div>
                <div className=" absolute bottom-[40%] left-[32%] opacity-0 group-hover:opacity-100  ">
                  <h4 className="text-[12px] py-[8px] px-[13px] bg-[#08D15F] text-white inline">
                    View Details
                  </h4>
                </div>
                <div className="text-center pt-[22px] pb-[20px] group-hover:bg-[#2F1AC4] group-hover:text-white">
                  <h3 className="text-[18px] text-[#FB2E86] group-hover:text-white">
                    Cantilever chair
                  </h3>
                  <div className="flex justify-center ">
                    <FaMinus className="text-[#05E6B7]" />
                    <FaMinus className="text-[#F701A8]" />
                    <FaMinus className="text-[#00009D] group-hover:text-[#FFEAC1]" />
                  </div>
                  <h6 className="text-[14px]">Code - Y523201</h6>
                  <p className="text-[14px]">$42.00</p>
                </div>
                </div>
                </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Fetursproduct;
