import React, { useState } from "react";
import Container from "../components/extracomp/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { removeProduct } from "../components/slice/productSlice";

const CheckOutPage = () => {
    let dispatch = useDispatch()
  let cartInfo = useSelector((state) => state.product.cartProducts);

  let { totalPrice, totalQuantity } = cartInfo.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * item.qun;
      acc.totalQuantity += item.qun;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );

  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <Container>
          <div className="py-[100px]">
            <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
            <div className="flex ">
              <h3>Home</h3>
              &gt;
              <h3>Chekout</h3>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="container mx-auto py-[50px]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section: Billing and Shipping */}
            <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
              {/* Shipping Details */}
              <h3 className="text-xl font-semibold mt-8 mb-4">
                Shipping Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Shipping Address Line 1"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Shipping Address Line 2"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full border p-2 rounded"
                />
              </div>
                      </div>
                      
                      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
                          {cartInfo.map((item,i) => (   
                          <div className="">
                          <div className="flex justify-between  py-5 border-b-2">
                          <div className="w-[60%] flex items-center relative">
                              <button onClick={()=>dispatch(removeProduct(i))}  className="h-[20px] w-[20px] border flex items-center justify-center rounded-[50%] absolute top-[-5px]  left-0 bg-black text-white "><RxCross2/></button>
                              <img className='w-[83px] bg-[#F5F5F5]' src={item.thumbnail} alt="" />
                              <div className="pl-[12px]">
                                  <h6 className='text-[12px]'>{item.title}</h6>
                                  <p className='text-[#A1A8C1] text-[10px]'>color: <span>brown</span></p>
                                  <p className='text-[#A1A8C1] text-[10px]'>size: <span>brown</span></p>
                              </div>
                          </div>
                          <div className="w-[20%] text-center">
                              <h4 className='text-[#15245E] text-[14px] font-normal'>${item.price*item.qun}</h4>
                          </div>
                      </div>
                    </div>
                          ))}
              <div className="pt-[50px]">
                <div className="w-[371px] h-[284px] bg-[#F4F4FC] p-[23px]">
                  <div className="flex items-center justify-between py-[20px] border-b-2">
                    <h4>Subtotals:</h4>
                    <h4>{totalQuantity}</h4>
                  </div>
                  <div className="flex items-center justify-between py-[20px] border-b-2">
                    <h4>Subtotals:</h4>
                    <h4>${totalPrice}</h4>
                  </div>
                  <div className="border w-[320px] h-[40px] mt-[50px]">
                    <button className="w-full h-full text-[14px] text-white bg-[#19D16F]">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 hover:bg-[#19D16F] text-white py-2 rounded-lg bg-gray-800 transition duration-300">
                Place Order
              </button>
              <Link to="/cart">
                <button className="w-full mt-6 hover:bg-[#19D16F] text-white py-2 rounded-lg bg-gray-800 transition duration-300">
                  back to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckOutPage;
