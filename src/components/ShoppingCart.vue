<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
import Vue from 'vue'
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'
export default Vue.extend({
  components: { ProductList, Cart }
})
</script>
