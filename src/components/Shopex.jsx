import React from 'react'
import Container from './extracomp/Container'
import Flex from './extracomp/Flex'
import track from "../assets/track.png"
import coin from "../assets/coin.png"
import batch from "../assets/batch.png"
import clock from "../assets/clock.png"
import shofa from "../assets/shofa.png"
import dicound from "../assets/discount sofa.png"
import subs from "../assets/subs.png"


const Shopex = () => {
  return (
    <div className='py-[100px]'>
          <Container>
              <div className="">
              <h2 className="text-[42px] py-[56px] capitalize font-bold text-[#1A0B5B] text-center ">
              What Shopex Offer!
        </h2>
              </div>
              <Flex className=" justify-between">
                  <div className="h-[320px] w-[270px] border px-[26px] pt-[56px] pb-[45px] flex items-center justify-center bg-gray-100">                 
                  <div className="text-center ">
                      <img className='w-[56px] text-center mx-auto' src={track} alt="" />
                          <h2 className='text-[22px] font-bold pt-[27px] pb-[20px]' >24/7 Support</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                  </div>
                  </div>
                  <div className="h-[320px] w-[270px] border px-[26px] pt-[56px] pb-[45px] flex items-center justify-center bg-gray-100">                 
                  <div className="text-center ">
                      <img className='w-[56px] text-center mx-auto' src={coin} alt="" />
                          <h2 className='text-[22px] font-bold pt-[27px] pb-[20px]' >24/7 Support</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                  </div>
                  </div>
                  <div className="h-[320px] w-[270px] border px-[26px] pt-[56px] pb-[45px] flex items-center justify-center bg-gray-100">                 
                  <div className="text-center ">
                      <img className='w-[56px] text-center mx-auto' src={batch} alt="" />
                          <h2 className='text-[22px] font-bold pt-[27px] pb-[20px]' >24/7 Support</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                  </div>
                  </div>
                  <div className="h-[320px] w-[270px] border px-[26px] pt-[56px] pb-[45px] flex items-center justify-center bg-gray-100">                 
                  <div className="text-center ">
                      <img className='w-[56px] text-center mx-auto' src={clock} alt="" />
                          <h2 className='text-[22px] font-bold pt-[27px] pb-[20px]' >24/7 Support</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                  </div>
                  </div>
                  
              </Flex>
          </Container>
          <div className="py-[100px]">   
              <h2 className="text-[42px] py-[56px] capitalize font-bold text-[#1A0B5B] text-center ">
              Discount Item
            </h2>
              <div className=" bg-[#F1F0FF]">
              <Container>
                      <a href="">
                      <img src={shofa} alt="" />
                  </a>
              </Container>
           </div>
          </div>
          <div className="py-[100px]">   
          <div className="">
              <Container>
                      <a href="">
                      <img src={dicound} alt="" />
                  </a>
              </Container>
           </div>
          <div className="py-[100px]">
              <Container>
                      <a href="">
                      <img src={subs} alt="" />
                  </a>
              </Container>
           </div>
          </div>
    </div>
  )
}

export default Shopex
