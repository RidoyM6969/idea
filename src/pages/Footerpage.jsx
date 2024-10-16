import React from 'react'
import Container from '../components/extracomp/Container'
import Flex from '../components/extracomp/Flex'
import { BsSearch } from "react-icons/bs";

const Footerpage = () => {
  return (
    <div className='bg-[#EEEFFB] py-[100px] '>
          <Container>
              <Flex>
                  <div className="w-[40%]">
                  <h2 className="text-[42px] capitalize font-bold text-[#1A0B5B] pb-[42px]">Hekto</h2>
                      <div className="w-[377px] h-11 flex items-center justify-center bg-[#FFFFFF]  ">
                          <input className='w-full h-full bg-[#FFFFFF] p-2 ' type="search" name="search" id="" placeholder='Enter Email Address ' />
                          <div className="w-[135px] h-[39px] flex items-center justify-center bg-[#FB2E86] rounded-[3px] "> 
                          <h6 className='text-[16px] font-[500] text-white'>Sign Up</h6>
                          </div>
                      </div>
                      <div className="pt-[24px]">                         
                      <h6 className='text-[#8A8FB9] text-[16px] font-normal'>Contact Info</h6>
                      <p className='text-[#8A8FB9] text-[16px] font-normal pt-[10px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                      </div>
                  </div>
                  <div className="w-[60%] flex items-center justify-between">
                      <div className="">
                          <h4 className='text-[22px] pb-[42px]'>Catagories</h4>
                          <ul>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                          </ul>
                      </div>
                      <div className="">
                          <h4 className='text-[22px] pb-[42px]'>Catagories</h4>
                          <ul>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                          </ul>
                      </div>
                      <div className="">
                          <h4 className='text-[22px] pb-[42px]'>Catagories</h4>
                          <ul>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                              <li className='text-[16px] text-[#8A8FB9] pb-[21px]'>Laptops & Computers</li>
                          </ul>
                      </div>
                  </div>
              </Flex>
      </Container>
    </div>
  )
}

export default Footerpage
