import React from "react";
import Container from "../extracomp/Container";
import tab from "../../assets/tab.png"
import Flex from "../extracomp/Flex";

const LetestproReuseable = (props) => {
  return (
    <div className="py-[100px]">
      <Container>
        <Flex className=" flex-wrap gap-x-[150px] justify-center ">
          <div className=" group ">
        <div className="w-[360px] h-[269px] border bg-[#F7F7F7]">
        <div className=" pl-[73px] pt-[33px] pr-[64px] pb-[7px] ">
        <img className="w-[245px]" src={props.img} alt="" />
          </div>
          <div className="flex items-center justify-between pt-[16px]">
            <h4 className="text-[16px]">{props.title}</h4>
          <p className="text-[14px]">${props.price} <span><del className="text-red-500 text-[12px]">$65.00</del></span></p>
          </div>
        </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default LetestproReuseable;
