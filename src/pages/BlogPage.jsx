import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/extracomp/Container'
import Flex from '../components/extracomp/Flex'
import woman from "../assets/woman.png"
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import recten from "../assets/ractengel.png"
import offer from "../assets/offer.png"

const BlogPage = () => {
  return (
    <>
      <div className='py-[100px] bg-[#F6F5FF]'>
      <Container>
      <h2 className="text-[42px] capitalize font-bold text-[#1A0B5B] ">
      Blog 
          </h2>
          <div className="flex items-center gap-x-3 pt-[12px]">
            <Link to="/">
              Home</Link>
            &#62;
            <h4>Blog</h4>
          </div>
      </Container>
      </div>
      <div className="py-[100px]">
        <Container>
          <div className="flex justify-between">
            <div className="w-[75%]">
              <div className="">
              <img className='w-[870px]' src={woman} alt="" />
              <div className="py-[27px] flex items-center gap-x-[28px]">
                <div className="flex items-center gap-[8px]">
                  <FaPenNib />
                  <h4 className='text-[14px] font-normal py-[5px] px-[43px] bg-[#FFE7F9] hover:bg-[#FFECE2]  cursor-pointer'>Surf Auxion</h4>
                  </div>
                <div className="flex items-center gap-[8px]">
                  <FaRegCalendarAlt />
                  <h4 className='text-[14px] font-normal py-[5px] px-[43px] bg-[#FFE7F9] hover:bg-[#FFECE2] cursor-pointer'>Aug 09 2020</h4>
                  </div>
              </div>
              <div className="py-[28px]">
                <h3 className='text-[#151875] text-[34px] font-bold '>Mauris at orci non vulputate diam tincidunt nec.</h3>
                <p className='text-[#8A8FB9] text-[16px] pt-[23px] w-[852px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              </div>
              </div>
              <div className="">
              <img className='w-[870px]' src={woman} alt="" />
              <div className="py-[27px] flex items-center gap-x-[28px]">
                <div className="flex items-center gap-[8px]">
                  <FaPenNib />
                  <h4 className='text-[14px] font-normal py-[5px] px-[43px] bg-[#FFE7F9] hover:bg-[#FFECE2]  cursor-pointer'>Surf Auxion</h4>
                  </div>
                <div className="flex items-center gap-[8px]">
                  <FaRegCalendarAlt />
                  <h4 className='text-[14px] font-normal py-[5px] px-[43px] bg-[#FFE7F9] hover:bg-[#FFECE2] cursor-pointer'>Aug 09 2020</h4>
                  </div>
              </div>
              <div className="py-[28px]">
                <h3 className='text-[#151875] text-[34px] font-bold '>Mauris at orci non vulputate diam tincidunt nec.</h3>
                <p className='text-[#8A8FB9] text-[16px] pt-[23px] w-[852px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              </div>
              </div>
              <div className="">
              <img className='w-[870px]' src={woman} alt="" />
              <div className="py-[27px] flex items-center gap-x-[28px]">
                <div className="flex items-center gap-[8px]">
                  <FaPenNib />
                  <h4 className='text-[14px] font-normal py-[5px] px-[43px] bg-[#FFE7F9] hover:bg-[#FFECE2]  cursor-pointer'>Surf Auxion</h4>
                  </div>
                <div className="flex items-center gap-[8px]">
                  <FaRegCalendarAlt />
                  <h4 className='text-[14px] font-normal py-[5px] px-[43px] bg-[#FFE7F9] hover:bg-[#FFECE2] cursor-pointer'>Aug 09 2020</h4>
                  </div>
              </div>
              <div className="py-[28px]">
                <h3 className='text-[#151875] text-[34px] font-bold '>Mauris at orci non vulputate diam tincidunt nec.</h3>
                <p className='text-[#8A8FB9] text-[16px] pt-[23px] w-[852px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              </div>
              </div>
            </div>
            <div className="w-[20%]">
              <h4 className='text-[#151875] text-[24px]'>search</h4>
              <div className="h-[40px] w-[270px] bg-pink-300 relative cursor-pointer">
                <input className='w-full h-full border p-[6px] cursor-pointer' type="search" placeholder='Search For Posts' name="search" id="" />
                  <IoIosSearch className='absolute top-[12px] right-[10px] '/>
              </div>
              <div className="">
                <h4 className='text-[#151875] text-[22px] py-[20px]'>Categories</h4>
                <div className="flex items-center gap-x-6">
                  <div className="">
                    <h6 className='px-[15px] py-[10px] text-[#3F509E] hover:bg-[#F939BF] rounded-[4px]'>Hobbies <span>{ `(02)`}</span></h6>
                    <h6 className='px-[15px] py-[10px] text-[#3F509E] hover:bg-[#F939BF] rounded-[4px]'>Hobbies <span>{ `(02)`}</span></h6>
                    <h6 className='px-[15px] py-[10px] text-[#3F509E] hover:bg-[#F939BF] rounded-[4px]'>Hobbies <span>{ `(02)`}</span></h6>
                  </div>
                  <div className="">
                    <h6 className='px-[15px] py-[10px] text-[#3F509E] hover:bg-[#F939BF] rounded-[4px]'>Hobbies <span>{ `(02)`}</span></h6>
                    <h6 className='px-[15px] py-[10px] text-[#3F509E] hover:bg-[#F939BF] rounded-[4px]'>Hobbies <span>{ `(02)`}</span></h6>
                    <h6 className='px-[15px] py-[10px] text-[#3F509E] hover:bg-[#F939BF] rounded-[4px]'>Hobbies <span>{ `(02)`}</span></h6>
                  </div>
                </div>
              </div>
              <div className="">
                <h5 className='text-[22px] text-[#151875] py-[37px]'>Recent Post</h5>
                <div className="">
                <div className="flex items-center gap-x-4">
                <img className='w-[70px]' src={recten} alt="" />
                <div className="py-[22px]">
                  <h6 className='text-[14px] text-[#3F509E]'>It is a long established fact</h6>
                  <p className='text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
                </div>
                </div>
                <div className="flex items-center gap-x-4">
                <img className='w-[70px]' src={recten} alt="" />
                <div className="py-[22px]">
                  <h6 className='text-[14px] text-[#3F509E]'>It is a long established fact</h6>
                  <p className='text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
                </div>
                </div>
                <div className="flex items-center gap-x-4">
                <img className='w-[70px]' src={recten} alt="" />
                <div className="py-[22px]">
                  <h6 className='text-[14px] text-[#3F509E]'>It is a long established fact</h6>
                  <p className='text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
                </div>
                </div>
                <div className="flex items-center gap-x-4">
                <img className='w-[70px]' src={recten} alt="" />
                <div className="py-[22px]">
                  <h6 className='text-[14px] text-[#3F509E]'>It is a long established fact</h6>
                  <p className='text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
                </div>
                </div>
                </div>
              </div>
              <div className="">
                <h5 className='text-[22px] text-[#151875] py-[37px]'>Recent Post</h5>
                <div className="">
                <div className="flex items-center gap-x-4">
                <img className='w-[70px]' src={recten} alt="" />
                <div className="py-[22px]">
                  <h6 className='text-[14px] text-[#3F509E]'>It is a long established fact</h6>
                  <p className='text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
                </div>
                </div>
                <div className="flex items-center gap-x-4">
                <img className='w-[70px]' src={recten} alt="" />
                <div className="py-[22px]">
                  <h6 className='text-[14px] text-[#3F509E]'>It is a long established fact</h6>
                  <p className='text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
                </div>
                </div>
                <div className="flex items-center gap-x-4">
                <img className='w-[70px]' src={recten} alt="" />
                <div className="py-[22px]">
                  <h6 className='text-[14px] text-[#3F509E]'>It is a long established fact</h6>
                  <p className='text-[11px] text-[#8A8FB9]'>Aug 09 2020</p>
                </div>
                </div>
                </div>
              </div>
              <div className="">
                <h5 className='text-[22px] text-[#151875] py-[37px]'>Recent Post</h5>
                <div className="">
                <div className="flex items-center gap-x-4">
                <img className='w-[276px]' src={offer} alt="" />
                </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      </div>
    </>
  )
}

export default BlogPage
