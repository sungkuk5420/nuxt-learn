<template>
  <div class="grid_area">
    <div class="grid_container_wrap">
      <ul class="grid_container">
        <li
          class="grid_item item_2"
          v-for="(item, index) in products"
          :key="index"
        >
          <div class="item_img">
            <a  @click="routeToDetailPage(item.id)">
              <img :src="item.img" alt="샘플 리스트"/>
            </a>

            <ul class="left_top">
              <li class="type_dark">{{ item.best }}</li>
              <li class="type_orange">
                <em>{{ item.discountPercent }}</em
                >% OFF
              </li>
            </ul>
            <a  @click="routeToDetailPage(item.id)" class="basket">
              <img src="~assets/ico_shopping_basket.png" alt="장바구니" />
            </a>
          </div>
          <div class="item_desc">
            <a  @click="routeToDetailPage(item.id)">
              <h3 class="item_title">
                {{ item.title }}
              </h3>
              <p>
                {{ item.desc }}
              </p>
              <div class="star_area">
                <span class="star_parent_wrap">
                  <span class="star_parent">
                    <span :style="item.star"></span>
                  </span>
                </span>
                <span class="result_star">
                  {{ item.resultStar }}
                </span>
                <span class="total_user">
                  (<em>{{ item.totalUser }}</em
                  >)
                </span>
              </div>
              <div class="price_area">
                <span class="before_price"
                  >$ <em>{{ item.beforePrice }}</em></span
                >
                <span class="discount_price"
                  >$ <em>{{ item.discountPrice }}</em></span
                >
              </div>
            </a>
            <button class="heart_area">
              <img src="~assets/ico_heart.png" alt="좋아요" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:["products"],
  data() {
    return {
    };
  },
  
  methods: {
    routeToDetailPage(id) {
      this.$router.push(`/product/${id}`)
    },
  },
};
</script>

<style>
</style>