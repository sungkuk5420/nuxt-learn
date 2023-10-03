import { fetchCartItems } from "~/api";

export const  FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

// store/index.js
export const state = () => ({
  carts: []
})

export const mutations = {
  addCartItem(state,cartItem){
    state.carts.push(cartItem)
  },
  setCartItems(state,cartItems){
    state.carts = cartItems;
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({commit}){
    const {data} = await fetchCartItems();
    console.log(data)
    commit("setCartItems",data)
  },
  async nuxtServerInit({commit,dispatch},{req,res}){
    await dispatch(FETCH_CART_ITEMS);
  }
}
 