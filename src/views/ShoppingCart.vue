<template>
  <div class="home">
    <img src="../assets/logo.png">
    <ShoppingCart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShoppingCart from '@/components/ShoppingCart.vue'; // @ is an alias to /src

@Component({
  components: {
    ShoppingCart,
  },
})
export default class Home extends Vue {}
</script>
