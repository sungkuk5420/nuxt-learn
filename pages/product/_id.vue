<template>
  <div>
          <img class="product-image" :src="product.imageUrl" alt="" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
  </div>
</template>

<script>
import {fetchProductById} from '@/api/index'
export default {
  async asyncData({params}){
    const response = await fetchProductById(`${params.id}`);
    console.log(response)
    const product = response.data
    return {product}
  },
  created(){
    console.log(this.$route)
  }
}
</script>

<style>

</style>