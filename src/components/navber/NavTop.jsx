import React, { useEffect, useRef, useState } from 'react'
import Container from '../extracomp/Container'
import Flex from '../extracomp/Flex'
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../slice/productSlice';
import { Link } from 'react-router-dom';

const NavTop = () => {

    let dispatch = useDispatch()
    let cartInfo = useSelector((state) => state.product.cartProducts)
    
  

    let [accoutShow, setaccountShow] = useState(false)
    let [cartShow, setCartShow] = useState(false)
    let accountClick = useRef();
    let cartclick = useRef();
    let cartLock = useRef();

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (accountClick.current.contains(e.target) == true) {
              setaccountShow(!accoutShow);
            } else {
              setaccountShow(false);
            }
            if (cartclick.current.contains(e.target) == true) {
              setCartShow(!cartShow);
            } else {
              setCartShow(false);
            }
            if (cartLock.current.contains(e.target)) {
              setCartShow(true);
            } 
        })
        
    },[accountClick,cartclick,cartLock])

  return (
    <div className=" bg-[#7E33E0] py-[22px]">
      <Container>
        <Flex>
          <div className="w-[50%] flex gap-x-12 items-center text-white">
            <div className="flex gap-x-3 items-center ">
              <p>
                <MdOutlineEmail />
              </p>
              <h5>mhhasanul@gmail.com</h5>
            </div>
            <div className="flex gap-x-3 items-center ">
              <p>
                <BiPhoneCall />
              </p>
              <h5>(12345)67890</h5>
            </div>
          </div>
          <div className="w-[50%] gap-x-8 flex item-center justify-end text-white text-[16px] font-semibold">
            <div className="flex gap-x-1 items-center ">
              <h5>English</h5>
              <p>
                <FaChevronDown />
              </p>
            </div>
            <div className="flex gap-x-1 items-center ">
              <h5>USD</h5>
              <p>
                <FaChevronDown />
              </p>
            </div>
            <button
              ref={accountClick}
              className="flex  gap-x-1 items-center relative "
            >
              <h5>Login</h5>
              <p>
                <MdOutlineAccountCircle />
              </p>
              {accoutShow && (
                <div className="text-center absolute top-[52px] left-[-46px] z-[999] bg-[#6e2bc4]  w-[150px]">
                  <h4 className="capitalize text-[16px] hover:bg-[black] py-[10px] ">
                    create Account
                  </h4>
                  <h4 className="capitalize text-[16px] hover:bg-[black] py-[10px]">
                    Login
                  </h4>
                </div>
              )}
            </button>
            <div className="flex  gap-x-1 items-center ">
              <h5>Wishlist</h5>
              <p>
                <CiHeart />
              </p>
            </div>
            <div className="relative">
              <div ref={cartclick} className="text-[30px] ">
                <p>
                  <IoCartOutline />
                </p>
                </div>
                          
                <div ref={cartLock} >
                  {cartShow && (
                    <div className="bg-[#d0d0d0] text-black absolute top-[53px] right-0 z-[999] py-[15px] px-3 w-[360px]  ">
                      {cartInfo.map((item, i) => (
                        <div className="">
                          <div className="flex items-center gap-x-4 justify-between p-[20px]">
                            <img
                              className="w-[45px] bg-[#F7F7F7]"
                              src={item.thumbnail}
                              alt=""
                            />
                            <h6>{item.title}</h6>
                            <RxCross2
                              onClick={() => dispatch(removeProduct(i))}
                            />
                          </div>
                        </div>
                      ))}
                    <div className="pt-[15px] flex items-center justify-between">
                      <Link to="/cart">                
                            <button className="py-[16px] px-[41px] border capitalize text-[14px] bg-[black] text-white rounded-md ">
                              view cart
                            </button>
                      </Link>
                      <Link to="/checkout">
                            <button className="py-[16px] px-[41px] border capitalize text-[14px] bg-[black] text-white rounded-md ">
                              chekout
                            </button>
                      </Link>
                          </div>
                    </div>
                  )}
                    </div>
                          
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default NavTop
