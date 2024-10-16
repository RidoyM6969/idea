import React from 'react'
import getIddata from '../../../lib/getIddata.js'
import productimg2 from '../../../public/Rectangle 137.png'
import productimg3 from '../../../public/Rectangle 136.png'
import productimg4 from '../../../public/Rectangle 134.png'
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";

import Image from 'next/image.js'
import Addtocartbutton from '@/app/Componnents/Addtocartbutton.jsx'
import Description from '@/app/Componnents/Description.jsx'
import Relatedcard from '@/app/Componnents/Relatedcard.jsx'


const Ditailspage = async ({ params }) => {
  const { id } = params;
  const product = await getIddata(id);
  
  return (
    <>
    <section className='mt-[80px]'>
    <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row p-0 space-y-4 md:space-y-0 md:space-x-8">
          
          {/* Left Image Section */}
          <div className="flex-shrink-0 md:w-1/3 w-full">
            <div className="grid grid-cols-3 gap-2">
              <Image className="w-full h-[100px] md:h-[150px] row-span-1 object-cover rounded" src={productimg2} alt="Image 1" />
              <Image className="w-full col-span-2 row-span-10 object-cover rounded" src={product.thumbnail} alt="Image 2" width={100} height={100}/>
              <Image className="w-full h-[100px] md:h-[150px] object-cover rounded" src={productimg3} alt="Image 3" />
            </div>
          </div>

          {/* Right Details Section */}
          <div className="flex-1">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">{product.title}</h1>

            {/* Rating and Reviews */}
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-sm text-gray-600">(22)</span>
            </div>

            {/* Price Section */}
            <div className="mt-4">
              <span className="text-xl font-bold text-gray-900">$32.00</span>
              <span className="ml-2 text-lg line-through text-red-500">$39.00</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
            </p>

            {/* Add To Cart Button */}
            <div className="mt-6">
              <Addtocartbutton />
            </div>

            {/* Categories and Tags */}
            <div className="mt-6">
              <div className="text-gray-600">Categories:</div>
              <div className="text-gray-900 font-medium">Furniture</div>
            </div>

            <div className="mt-2">
              <div className="text-gray-600">Tags:</div>
              <div className="text-gray-900 font-medium">Chair, Modern</div>
            </div>

            {/* Social Sharing */}
            <div className="mt-6 flex items-center space-x-4">
              <h4 className="text-[16px] leading-[29px] text-[#151875] font-bold">Share</h4>
              <ul className="flex items-center gap-x-4">
                <li className="w-[25px] h-[25px] rounded-full bg-[black] text-[white] flex items-center justify-center duration-700 ease-in-out hover:bg-[#FB2E86] hover:text-[white] cursor-pointer">
                  <TiSocialFacebook />
                </li>
                <li className="w-[25px] h-[25px] rounded-full bg-[black] text-[white] flex items-center justify-center duration-700 ease-in-out hover:bg-[#FB2E86] hover:text-[white] cursor-pointer">
                  <FaInstagram />
                </li>
                <li className="w-[25px] h-[25px] rounded-full bg-[black] text-[white] flex items-center justify-center duration-700 ease-in-out hover:bg-[#FB2E86] hover:text-[white] cursor-pointer">
                  <TiSocialTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=' py-[100px] bg-[#F9F8FE]'>
        <Description/>
      </div>
      <div className='py-[90px]'>
        <Relatedcard/>
      </div>
    </section>
   
    </>
  )
}

export default Ditailspage;

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});