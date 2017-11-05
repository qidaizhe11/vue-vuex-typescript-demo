<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products" :key="p.id">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { CartProduct, CheckoutStatus } from '../store'
import { dispatchCheckout } from '../store/dispatches'

export default Vue.extend({
  computed: {
    // ...mapGetters({
    //   products: 'cartProducts',
    //   checkoutStatus: 'checkoutStatus'
    // }),
    products (): CartProduct[] {
      return this.$store.getters.cartProducts
    },
    checkoutStatus (): CheckoutStatus {
      return this.$store.getters.checkoutStatus
    },
    total (): number {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products: CartProduct[]) {
      // this.$store.dispatch('checkout', products)
      dispatchCheckout(products)
    }
  }
})
</script>
