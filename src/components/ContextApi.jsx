import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

const productApi = createContext();

const ContextApi = ({children}) => {

    let [information, setInformation] = useState([])
    
    let getData = () => {
        axios.get("https://dummyjson.com/products").then((response) => {
            setInformation(response.data.products);
        })
    }

    useEffect(() => {
       getData() 
    },[])

  return (
      <div className="">
          <productApi.Provider value={information}>
              {children}
          </productApi.Provider>
     </div>
  )
}

export {ContextApi, productApi}
