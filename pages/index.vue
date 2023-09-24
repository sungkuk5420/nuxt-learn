<template>
  <div class="app">
    <main>
      <div>
        <input type="text"/>
      </div>
      <ul>
        <li
          v-for="item in products"
          :key="item.id"
          class="item flex"
          @click="routeToDetailPage(item.id)"
        >
          <img class="product-image" :src="item.imageUrl" alt="" />
          <p>{{ item.name }}</p>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import {fetchProducts} from '@/api/index'

export default {
  async asyncData(){
    const response = await fetchProducts();
    console.log(response)
    const products = response.data
    return {products}
  },
  data(){
    return {
    }
  },

  methods: {
    routeToDetailPage(id) {
      this.$router.push(`/product/${id}`)
    },
    routeToCartPage() {
      this.$router.push('/cart')
    },
  },
  async created(){
  }

}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>