import React from 'react'
import Container from '../components/extracomp/Container'
import Shop from '../components/shop/Shop'

const Shoppage = () => {
  return (
    <>
        <div className="py-[100px] bg-[#F6F5FF]">
              <Container>
                  <h2 className='text-[42px] font-bold capitalize'>shop</h2>
              </Container>  
          </div>
          <Shop/>
    </>
  )
}

export default Shoppage
