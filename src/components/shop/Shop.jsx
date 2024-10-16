import React, { useContext, useEffect, useState } from 'react'
import Container from '../extracomp/Container'
import Flex from '../extracomp/Flex'
import { SiWindows } from "react-icons/si";
import { FaListUl } from "react-icons/fa6";
import { MdArrowDropUp , MdArrowDropDown } from "react-icons/md";
import { productApi } from '../ContextApi';
import ShopReuseable from './ShopReuseable';

const Shop = () => {
    
    let data = useContext(productApi)    

    let [product, setProduct] = useState()
    let [discount, setDiscount] = useState()
    let [rating, setRating] = useState()
    let [catagory, setCatagory] = useState()
    let [price, setPrice] = useState()
    let [color, setColor] = useState()
    
    let handelProduct = () => {
        setProduct(!product);
    }
    let handelDiscount = () => {
        setDiscount(!discount)
    }
    let handelRating = () => {
        setRating(!rating)
    }
    let handelCatagory = () => {
        setCatagory(!catagory)
    }
    let handelPrice = () => {
        setPrice(!price)
    }
    let handelColor = () => {
        setColor(!color)
    }

    /* filter section*/
    let [catagoryitem, setCatagoryItem] = useState([])
    let [brandItem, setBrandItem] = useState([])
    let [catagoryShow, setCatagoryShow] = useState([])
    
    useEffect(() => {
        setCatagoryItem([...new Set(data.map((item)=>item.category))])
        setBrandItem([...new Set(data.map((item)=>item.brand))])
    }, [data])
    
    let handelCatagoryShow = (citems) => {
        let catagoryPic = data.filter((item) => item.category == citems)
        setCatagoryShow(catagoryPic)
    }


    let [listitem, setlistitem] = useState("")
    let handelList = () => {
        setlistitem("Active")        
    }

    /* filter section*/



  return (
    <div className='py-[120px]'>
          <Container>
              <Flex>
                  <div className="w-[50%]">
                      <h3 className='text-[23px] text-[#151875]'>Ecommerce Acceories & Fashion item </h3>
                      <p className='text-[12px] text-[#8A8FB9] pt-[8px]'>About 9,620 results (0.62 seconds)</p>
                  </div>
                  <div className="w-[50%] flex items-center justify-end gap-x-9">
                      <div className="flex items-center gap-x-3">
                          <h4 className='text-[16px] font-[400] text-[#3F509E] capitalize'>short by :</h4>
                          <select name="" className='h-[28px] w-[96px] text-center text-[12px] text-[#8A8FB9]'>
                              <option value="Best Match">Best Match</option>
                              <option value="8">8</option>
                              <option value="8">8</option>
                              <option value="8">8</option>
                          </select>
                      </div>
                      <div className="flex items-center gap-x-3">
                          <h4 className='text-[16px] font-[400] text-[#3F509E] capitalize'>View :</h4>
                          <SiWindows onClick={()=>setlistitem("")} className='text-[22px] ml-[15px]'/>
                          <FaListUl onClick={handelList} className='text-[22px] ml-[15px]'/>
                      </div>
                  </div>
              </Flex>

              <Flex>
                  <div className="w-[15%] py-[100px]">
                      <div className="py-[15px]">
                          <div onClick={handelProduct} className="flex items-center justify-between">                            
                              <h3 className='text-[#151875] text-[20px]  '>Product Brand</h3>
                              {product == true? <MdArrowDropDown/> : <MdArrowDropUp/>}
                              
                          </div>
                          {product &&                          
                              <ul className='text-[16px] text-[#7E81A2] pt-[13px]'>
                                  {brandItem.map((item) => (  
                                    <li className='pb-[8px]'>{item}</li>
                                  ))}
                          </ul>
                          }
                      </div>
                      <div className="py-[15px]">
                          <div onClick={handelDiscount} className="flex items-center justify-between">                            
                              <h3 className='text-[#151875] text-[20px]  '>Discount Offer</h3>
                              {discount == true? <MdArrowDropDown/>:<MdArrowDropUp/>}
                              
                          </div>
                          {discount &&
                          <ul className='text-[16px] text-[#7E81A2] pt-[13px]'>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                          </ul>                       
                          }
                      </div>
                      <div className="py-[15px]">
                          <div onClick={handelRating} className="flex items-center justify-between">                            
                              <h3 className='text-[#151875] text-[20px]  '>Rating Item</h3>
                              {rating == true? <MdArrowDropDown/>:<MdArrowDropUp/>}
                          </div>
                          {rating &&                          
                          <ul className='text-[16px] text-[#7E81A2] pt-[13px]'>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                          </ul>
                          }
                      </div>
                      <div className="py-[15px]">
                          <div onClick={handelCatagory} className="flex items-center justify-between">                            
                              <h3 className='text-[#151875] text-[20px]  '>Categories</h3>
                              {catagory == true? <MdArrowDropDown/>:<MdArrowDropUp/>}
                          </div>
                          {catagory &&                          
                              <ul className='text-[16px] text-[#7E81A2] pt-[13px]'>   
                                {catagoryitem.map((item) => (                               
                                <li onClick={()=>handelCatagoryShow(item)} className='pb-[8px]'>{item}</li>
                              ))}    
                          </ul>
                          }
                      </div>
                      <div className="py-[15px]">
                          <div onClick={handelPrice} className="flex items-center justify-between">                            
                              <h3 className='text-[#151875] text-[20px]  '>Price Filter</h3>
                              {price == true? <MdArrowDropDown/>:<MdArrowDropUp/>}
                          </div>
                          {price &&                          
                          <ul className='text-[16px] text-[#7E81A2] pt-[13px]'>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                          </ul>
                          }
                      </div>
                      <div className="py-[15px]">
                          <div onClick={handelColor} className="flex items-center justify-between">                            
                              <h3 className='text-[#151875] text-[20px]  '>Filter By Color</h3>
                              {color == true? <MdArrowDropDown/>:<MdArrowDropUp/>}
                          </div>
                          {color &&                          
                          <ul className='text-[16px] text-[#7E81A2] pt-[13px]'>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                              <li className='pb-[8px]'>Coaster Furniture</li>
                          </ul>
                          }
                      </div>
                  </div>
                  <div className="w-[85%]  py-[100px] ml-[60px] flex flex-wrap justify-between ">
                      <ShopReuseable data={data} catagoryShow={catagoryShow} listitem={listitem} />
                  </div>
              </Flex>
      </Container>
    </div>
  )
}

export default Shop
