<template>
  <div>
    <header>
      <h1>{{ $route.name }}페이지</h1>
      <nuxt-link to="/">홈페이지</nuxt-link>
      <nuxt-link to="/main">main</nuxt-link>
      <nuxt-link to="/product">product</nuxt-link>
    </header>
    <Nuxt/>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>