<template>
  <ul>
    <li v-for="p in products" :key="p.id">
      {{ p.title }} - {{ p.price | currency }}
      <br>
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Product } from '../store'
import { actionAddToCart } from '../store/actions'

export default Vue.extend({
  computed: {
    // ...mapGetters({
    //   products: 'allProducts'
    // })
    products (): Product[] {
      return this.$store.getters.allProducts
    }
  },
  methods: {
    // ...mapActions([
    //   'addToCart'
    // ])
    addToCart (p: Product) {
      actionAddToCart(p)
    }
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
})
</script>
