<template>
  <div style="padding: 50px;">
      <img class="product-image" :src="product.img" alt="" />
      <p>{{ product.title }}</p>
      <span>{{ product.discountPrice }}</span>
      <div class="cart-wrapper">
        <button class="btn" @click="addToCart">add to cart</button>
      </div>

  </div>
</template>

<script>
import {createCartItem, fetchProductById} from '@/api/index'
export default {
  async asyncData({params}){
    const response = await fetchProductById(`${params.id}`);
    console.log(response)
    const product = response.data
    return {product}
  },
  created(){
    console.log(this.$route)
  },
  methods:{
    async addToCart(){
      const response = await createCartItem(this.product)
      console.log(response)
      this.$store.commit('addCartItem',this.product)
      this.$router.push('/cart')
    },
  }
}
</script>

<style>

</style>