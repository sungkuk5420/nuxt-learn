<template>
<div class="main_wrap">
    <div class="main_content">
      <div class="grid_area">
        <h2 class="title">weekly best</h2>
        <p class="desc">
          Follow the most popular trends and get<br />exclusive items from hongo
          shop
        </p>
        <div class="tab_area">
          <ul class="tab_list">
            <li class="active" @click="tabList">skin care</li>
            <li @click="tabList">caleansing</li>
            <li @click="tabList">makeup</li>
            <li @click="tabList">samples</li>
            <li @click="tabList">body &amp; hair</li>
          </ul>
          <select class="m_tab_list">
            <option value="0">skin care</option>
            <option value="1">caleansing</option>
            <option value="2">makeup</option>
            <option value="3">samples</option>
            <option value="4">body &amp; hair</option>
          </select>
        </div>
      </div>
      <SearchInput :searchKeyword="searchKeyword" @input="updateSearchKeyword" @search="searchProduct"></SearchInput>

      <ItemList :products="products"/>

<div class="cart-wrapper">
  <button class="btn" @click="addToCart">add to cart</button>
</div>
      <div class="btn_area">
        <button type="button" class="lead_more">
          Lead More
          <img src="~assets/img_leadmore_arrow.png" alt="" />
        </button>
      </div>
      <div class="main_bottom_ad">
        <ul class="grid_container">
          <li class="grid_item item_5">
            <nuxt-link to="/shop/shop">
              <img src="~assets/img_men_sport.jpg" alt="" />
            </nuxt-link>
          </li>
          <li class="grid_item item_5">
            <nuxt-link to="/shop/shop">
              <img src="~assets/img_find_your.jpg" alt="" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";
import {fetchProducts,fetchProductsByKeyword} from '@/api/index'
import SearchInput from "@/components/SearchInput.vue";

export default {
  async asyncData(){
    const response = await fetchProducts();
    console.log(response)
    const products = response.data
    return {products}
  },
  components: {
    ItemList,
    SearchInput
  },
  data() {
    return {
      slide: 1,
    };
  },

  methods: {
    addToCart(){
      this.$router.push('/cart')
    },
    async searchProduct(){
      const response = await fetchProductsByKeyword(this.searchKeyword)
      this.products = response.data
    },
    updateSearchKeyword(value){
      this.searchKeyword = value;
    },
    tabList(e) {
      let target = e.target;

      target.parentNode.childNodes.forEach((item) => {
        item.classList.remove("active");
      });
      target.classList.toggle("active");
    },
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


<style lang="scss" scoped>
/* main start */
.main_content {
  grid-area: main;
  padding: 44px 44px 0;
  .main_banner {
    margin: -44px -44px 40px -44px;
    > div {
      min-height: 200px;
    }
    .q-carousel {
      //padding-top:47.83%;
    }
    .q-carousel__navigation--bottom {
      display: none;
    }
  }
  .main_top_ad {
    .type_eight {
      .grid_container {
        grid-gap: 39px;
        img {
          width: 100%;
        }
      }
    }
  }
  .btn_area {
    text-align: center;
  }
  .grid_area {
    &.type_bor {
      border-top: 1px solid #cfd6d8;
    }
  }
}
.main_bottom_ad {
  margin: 0 -44px -100px;
  .grid_container {
    grid-gap: 0;
  }
}
.q-panel > div {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .main_content {
    padding: 20px;
    .main_top_ad {
      .type_eight {
        .grid_container {
          grid-gap: 16px;
          .grid_item {
            &.item_2 {
              grid-column: span 6;
            }
          }
        }
      }
    }
  }
  .main_content .main_banner {
    margin: -20px -20px 20px -20px;
  }
  .main_content .main_ad .grid_item.item_2,
  .main_content .main_ad .grid_item.item_4 {
    grid-column: span 6;
  }
  .main_bottom_ad {
    margin: 0 -20px -60px;
  }
}
/* main end */
</style>