// store/index.js
export const state = () => ({
  cartItems: []
})

export const mutations = {
  addCartItem(state,cartItem){
    state.cartItems.push(cartItem)
  }
}

export const actions = {
}
 