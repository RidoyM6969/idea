import React, { useEffect, useState } from 'react'
import shop from "../../assets/shop.png"
import { GoDotFill } from "react-icons/go";
import { FaSearchPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Flex from '../extracomp/Flex';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const ShopReuseable = ({ data, catagoryShow, listitem }) => {

  let dispatch = useDispatch()
  let [cartProduct, setCardProduct] = useState([])



  
  let handelCartadd = () => {
  console.log("ok");
  
    
  }
  
  return (
    <>
      {catagoryShow.length > 0 ?
        (
          <>
            <div className={`${listitem == "Active"?"" :"flex flex-wrap justify-between "}`}>
        {catagoryShow.map((item) => (   
            <Flex>
            <div className='h-[363px] w-[270px] my-[25px]  group relative'>
              <Link to={`/shop/${item.id}`}>
            <div className="pl-[28px] pt-[50px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] pr-[41px]">
            <img className='bg-center' src={item.thumbnail} alt="" />
            </div>
              </Link>
            <div className="absolute left-3 top-[30%] text-[18px] opacity-0 group-hover:opacity-100 ">
              <div  className="h-[30px] w-[30px] bg-transparent hover:bg-white flex items-center justify-center rounded-[50%] ">
              <IoCartOutline onClick={handelCartadd} />
              </div>
              <div className="h-[30px] w-[30px] bg-transparent hover:bg-white flex items-center justify-center rounded-[50%] mt-[10px]">
              <FaSearchPlus/>
              </div>
              <div className="h-[30px] w-[30px] bg-transparent hover:bg-white flex items-center justify-center rounded-[50%] mt-[10px]">
              <CiHeart/>
              </div>
            </div>
            <div className="text-center">
            <h3 className='text-[18px] text-[#151875] font-bold pt-[18px] '>Vel elit euismod</h3>
            <div className="flex justify-center items-center pt-[8px] text-[10px]">
              <GoDotFill className='text-[#DE9034]'/>
              <GoDotFill className='text-[#EC42A2]'/>
              <GoDotFill className='text-[#8568FF]'/>
            </div>
            <p className='pt-[15px] pr-[5px] text-[14px]'>$26.00 <del className='text-red-500 pl-[5px]'>$42.00</del></p>
            </div>
            
          </div>
            </Flex>
        ))}
          </div>
        </>
      )

      :
    
        <div  className={`${listitem == "Active" ? "": "flex flex-wrap justify-between "}`}>
          {data.map((item) => (   
            <Flex>
              <div className='h-[363px] w-[270px] my-[25px]  group relative'>
              <Link to={`/shop/${item.id}`}>

            <div className="pl-[28px] pt-[50px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] pr-[41px]">
            <img className='bg-center' src={item.thumbnail} alt="" />
            </div>
              </Link>
            <div className="absolute left-3 top-[30%] text-[18px] opacity-0 group-hover:opacity-100 ">
              <div className="h-[30px] w-[30px] bg-transparent hover:bg-white flex items-center justify-center rounded-[50%] ">
                    <IoCartOutline onClick={handelCartadd} className=''/>
              </div>
              <div className="h-[30px] w-[30px] bg-transparent hover:bg-white flex items-center justify-center rounded-[50%] mt-[10px]">
              <FaSearchPlus className=''/>
              </div>
              <div className="h-[30px] w-[30px] bg-transparent hover:bg-white flex items-center justify-center rounded-[50%] mt-[10px]">
              <CiHeart className=''/>
              </div>
            </div>
            <div className="text-center">
            <h3 className='text-[18px] text-[#151875] font-bold pt-[18px] '>Vel elit euismod</h3>
            <div className="flex justify-center items-center pt-[8px] text-[10px]">
              <GoDotFill className='text-[#DE9034]'/>
              <GoDotFill className='text-[#EC42A2]'/>
              <GoDotFill className='text-[#8568FF]'/>
            </div>
            <p className='pt-[15px] pr-[5px] text-[14px]'>$26.00 <del className='text-red-500 pl-[5px]'>$42.00</del></p>
            </div>
            
          </div>
            </Flex>
          ))}  
      </div>    
        }
    </>
  )
}

export default ShopReuseable
