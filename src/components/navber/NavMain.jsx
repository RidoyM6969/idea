import React, { useContext, useState } from 'react'
import Container from '../extracomp/Container'
import Flex from '../extracomp/Flex'
import { BsSearch } from "react-icons/bs";
import { Link, useSearchParams } from 'react-router-dom';
import { productApi } from '../ContextApi';

const NavMain = () => {

    let data = useContext(productApi)
    

    let [search, setSearch] = useState("")
    let [searchFilter, setSearchFilter]= useState([])
    let handelSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value == "") {
            setSearchFilter([]);
          } else {
            let searchOne = data.filter((item) =>
              item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSearchFilter(searchOne);
          }
        
    }
    console.log(search);
    console.log(searchFilter);
    
  return (
    <div className='py-[15px]'>
          <Container>
              <Flex className="items-center">
                  <div className="w-[70%] flex items-center gap-x-[88px] ">
                      <h2 className='text-[34px] font-bold '>Hekto</h2>
                      <div className="">
                          <ul className='flex items-center text-[16px] gap-x-6 font-normal '>
                              <Link to="/" className='hover:text-[#FB2E86] cursor-pointer'>Home</Link>
                              <Link to="/products" className='hover:text-[#FB2E86] cursor-pointer'>Products</Link>
                              <Link to="/blog" className='hover:text-[#FB2E86] cursor-pointer'>Blog</Link>
                              <Link to="/shop" className='hover:text-[#FB2E86] cursor-pointer'>Shop</Link>
                              <Link to="/contact" className='hover:text-[#FB2E86] cursor-pointer'>Contact</Link>
                          </ul>
                      </div>
                  </div>
                  <div className="w-[30%]">
                      <div className="w-[317px] h-10 flex items-center justify-center">
                          <input onChange={handelSearch} className='w-full h-full bg-[#D9D9D9] ' type="search" name="search" id="" />
                          <div className="w-[51px] h-full flex items-center justify-center bg-[#FB2E86] "> 
                          <BsSearch/>
                          </div>
                      </div>
                  </div>
              </Flex>
      </Container>
    </div>
  )
}

export default NavMain
