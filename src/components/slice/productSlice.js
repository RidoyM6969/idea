import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'counter',
  initialState: {
    cartProducts: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  },
  
  reducers: {
    addToCartpage: (state , action) => {
      let foundProduct = state.cartProducts.findIndex((item) => item.id == action.payload.id)
      
      if (foundProduct !== -1) {
        state.cartProducts[foundProduct].qun += 1
        localStorage.setItem("cart" , JSON.stringify(state.cartProducts))
      } else {
        state.cartProducts = [...state.cartProducts, action.payload]
        localStorage.setItem("cart" , JSON.stringify(state.cartProducts))
      }
    },
    productIncrement: (state, action) => {
      state.cartProducts[action.payload].qun += 1
      localStorage.setItem("cart", JSON.stringify(state.cartProducts))
    },

    productDcrement: (state , action) => {
      if (state.cartProducts[action.payload].qun > 1) {
        state.cartProducts[action.payload].qun -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartProducts))
      }
    },

    removeProduct: (state, action) => {
      state.cartProducts.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartProducts))
    },

    removeAllproduct: (state, action) => {
      state.cartProducts.splice(action.payload, "")
      localStorage.setItem("cart",JSON.stringify(state.cartProducts))
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCartpage,productIncrement,productDcrement,removeProduct,removeAllproduct } = productSlice.actions

export default productSlice.reducer