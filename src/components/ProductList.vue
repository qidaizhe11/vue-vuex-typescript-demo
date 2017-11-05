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
import { dispatchAddToCart } from '../store/dispatches'

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
      dispatchAddToCart(p)
    }
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
})

// import Component from 'vue-class-component'
// import { Getter, Action } from 'vuex-class'

// @Component
// export default class ProductList extends Vue {
//   @Getter('allProducts') products: Product[]
//   @Action('addToCart') actionAddToCart: any
//   @Action('getAllProducts') getAllProducts: any

//   addToCart (p: Product) {
//     this.actionAddToCart(p)
//   }

//   created () {
//     this.getAllProducts()
//   }
// }

</script>
