import React from 'react'
import Container from '../components/extracomp/Container'
import Flex from '../components/extracomp/Flex'
import shopImg from "../assets/shop.png"
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import reducer, { productDcrement, productIncrement, removeAllproduct, removeProduct } from '../components/slice/productSlice';

const CartPage = () => {
    let dispatch = useDispatch()
    let cartInfo = useSelector((state) => state.product.cartProducts)   

    let { totalPrice, totalQuantity } = cartInfo.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totalQuantity += item.qun
        return acc
    },{totalPrice:0 , totalQuantity:0})
    
    return (
        <>
            <div className="py-[100px] bg-[#F6F5FF]">
                <Container>

                    <h2 className='text-[34px] font-bold'>Product Details</h2>
                    <div className="flex items-center gap-x-3">
                        <Link to="/">
                        <h5>Home</h5>
                        </Link>
                        &#62;
                        <h5>cart</h5>
                    </div>
                </Container>
            </div>
    <div className='py-[100px]'>
          <Container>
              <Flex className="items-center justify-between">
                  <div className="w-[70%] ">
                      <div className="flex ">
                          <div className="w-[40%]">
                              <h4 className='text-[#1D3178] text-[20px] font-bold'>Product</h4>
                          </div>
                          <div className="w-[20%] text-center">
                              <h4 className='text-[#1D3178] text-[20px] font-bold'>Price</h4>
                          </div>
                          <div className="w-[20%] text-center">
                              <h4 className='text-[#1D3178] text-[20px] font-bold'>Quantity</h4>
                          </div>
                          <div className="w-[20%] text-center">
                              <h4 className='text-[#1D3178] text-[20px] font-bold'>Total</h4>
                          </div>
                      </div>


                      {cartInfo.map((item,i) => (
                        
                      <div className="flex  py-12 border-b-2">
                          <div className="w-[40%] flex items-center relative">
                              <button onClick={()=>dispatch(removeProduct(i))} className="h-[20px] w-[20px] border flex items-center justify-center rounded-[50%] absolute top-[-5px]  left-0 bg-black text-white "><RxCross2/></button>
                              <img className='w-[83px] h-[87px] bg-[#F5F5F5]' src={item.thumbnail} alt="" />
                              <div className="pl-[12px]">
                                  <h6 className='text-[14px]'>{item.title}</h6>
                                  <p className='text-[#A1A8C1] text-[12px]'>color: <span>brown</span></p>
                                  <p className='text-[#A1A8C1] text-[12px]'>size: <span>brown</span></p>
                              </div>
                          </div>
                          <div className="w-[20%] text-center">
                              <h4 className='text-[#15245E] text-[14px] font-normal'>${item.price}</h4>
                          </div>
                          <div className="w-[20%] ">
                              <h4 className='#1D3178 text-[14px] font-normal flex items-center gap-x-2 justify-center'>
                              <button onClick={()=>dispatch(productDcrement(i))} className='h-[15px] w-[15px] bg-black text-white flex items-center justify-center'>-</button>
                                      <span>{ item.qun}</span>
                              <button onClick={()=>dispatch(productIncrement(i))} className='h-[15px] w-[15px] bg-black text-white flex items-center justify-center'>+</button>
                              </h4>
                          </div>
                          <div className="w-[20%] text-center">
                              <h4 className='#1D3178 text-[14px] font-normal'>${(item.price * item.qun).toFixed(2)}</h4>
                          </div>
                      </div>
                      ))}
                            <div className="pt-[49px] flex items-center justify-between">
                                <button className='px-[30px] py-[6px] bg-[#FB2E86] text-white text-base rounded-sm'>Update Curt</button>
                                <button className='px-[30px] py-[6px] bg-[#FB2E86] text-white text-base rounded-sm'>Clear Curt</button>
                            </div>
                  </div>
                        <div className="w-[20%]">
                            <div className="">
                            <h3 className='text-center capitalize font-bold pb-[42px]'>cart totals</h3>
                            <div className="w-[371px] h-[284px] bg-[#F4F4FC] p-[23px]">
                                <div className="flex items-center justify-between py-[20px] border-b-2">
                                    <h4>Subtotals:</h4>
                                    <h4>{totalQuantity}</h4>
                                    </div>
                                <div className="flex items-center justify-between py-[20px] border-b-2">
                                    <h4>Subtotals:</h4>
                                    <h4>${(totalPrice).toFixed(2)}</h4>
                                    </div>
                                    <Link to="/checkout">
                                <div className="border w-[320px] h-[40px] mt-[50px]">
                                    <button className='w-full h-full text-[14px] text-white bg-[#19D16F]'>Proceed To Checkout</button>
                                </div>
                                    </Link>
                            </div>
                            </div>
                            <div className="pt-[78px]">
                            <h3 className='text-center pb-[26px] font-bold capitalize'>Calculate Shopping</h3>
                            <div className="w-[371px] h-[284px] bg-[#F4F4FC] p-[23px]">
                                <div className=" border-b-2">
                                    <h4 className='text-[#C5CBE3] text-[14px] py-[13px] border-b'>Bangladesh</h4>
                                    <h4 className='text-[#C5CBE3] text-[14px] py-[13px] border-b'>Mirpur Dhaka - 1200</h4>
                                    <h4 className='text-[#C5CBE3] text-[14px] py-[13px] border-b'>Postal Code</h4>
                                    </div>
                                <div className="border w-[179px] h-[41px] mt-[50px]">
                                    <button className='w-full h-full text-[14px] text-white bg-[#FB2E86]'>Proceed To Checkout</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Flex>
      </Container>
    </div>
      </>
  )
}

export default CartPage
