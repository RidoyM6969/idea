import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/extracomp/Container'
import Flex from '../components/extracomp/Flex'
import shopIngm from "../assets/shop.png"
import { IoMdStarOutline, IoMdStarHalf, IoMdStar, IoMdHeartEmpty } from "react-icons/io";
import { FaInstagram,FaTwitter,FaFacebookF } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addToCartpage } from '../components/slice/productSlice'

const ProducDtails = () => {
    let productId = useParams()
    let dispatch = useDispatch()
    let [proDtailsShow, setProDtailsShow] = useState([])
    
    let getId = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setProDtailsShow(response.data);   
        })
    }

    useEffect(() => {
        getId()
    }, [])

    let handelCartAdd = (item) => {
        dispatch(addToCartpage({...item, qun:1}))     
    }

    
  return (
    <>
      <div className="bg-[#F6F5FF] py-[100px]">
        <Container>
          <h2 className="text-[36px] font-bold">Product Details</h2>
        </Container>
      </div>
      <div className="py-[150px]">
        <Container>
          <Flex className="items-center justify-center">
            <div className="w-[1170px] h-[509px] border flex items-center ">
              <div className="w-[20%] flex flex-wrap gap-y-2  justify-center  ">
                <div className="">
                  {proDtailsShow?.images?.map((item) => (
                    <img
                      className="border bg-[#F6F7FB] w-[151px] h-[155px]"
                      src={item}
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <div className="W-[30%] border ">
                <div className="w-[375px] h-[487px] ">
                      <div className="overflow-y-hidden">
                        <img className="h-full w-full" src={shopIngm} alt="" />
                      </div>
                </div>
              </div>
              <div className="W-[40%] pl-[50px] ">
                <h3 className="text-[36px] font-bold py-2">
                  Playwood arm chair
                </h3>
                <div className="flex items-center">
                  <p className="text-[gold]">
                    <IoMdStar />
                  </p>
                  <p className="text-[gold]">
                    <IoMdStarHalf />
                  </p>
                  <p className="text-[gold]">
                    <IoMdStarOutline />
                  </p>
                  <span className="pl-2">{`(02)`}</span>
                </div>
                <div className="text-[16px]">
                  <p className=" py-2">
                    $22.00{" "}
                    <del className="text-[#FB2E86] pl-[18px]">$24.00</del>
                  </p>
                  <h6 className="capitalize text-[#151875] py-2">color</h6>
                  <div className="flex items-center justify-center gap-x-5 ">
                    <Link to="/cart">
                      <button
                        onClick={() => handelCartAdd(proDtailsShow)}
                        className="capitalize text-[#151875] py-2"
                      >
                        add to cart{" "}
                      </button>
                    </Link>
                    <span className="capitalize text-[#151875]">
                      <IoMdHeartEmpty />
                    </span>
                  </div>
                  <h5 className="capitalize py-2">catagory :</h5>
                  <p className="capitalize py-2">tags</p>
                  <div className="flex item-center gap-x-4 py-2">
                    <h6 className="capitalize ">share </h6>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default ProducDtails
