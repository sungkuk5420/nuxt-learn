<template>
  <div>
    <h1>메인페이지</h1>
    <product-list :products="products"></product-list>
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from '~/components/ProductList.vue';

export default {
  components: { ProductList },
  async asyncData(){
    const response = await axios.get('http://localhost:3000/products');
    console.log(response)
    const products = response.data
    return {products}
  },
  data(){
    return {
    }
  },

  async created(){
  }

}
</script>

<style>

</style>