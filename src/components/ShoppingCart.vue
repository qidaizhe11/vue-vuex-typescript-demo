<template>
  <div class="page">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'
export default Vue.extend({
  components: { ProductList, Cart },
})
</script>

<style lang="scss" scoped>
.page {
  padding: 0 0 40px 0;
}
</style>

