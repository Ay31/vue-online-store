<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <product-item class="product" v-for="product in cart" :key="product._id" :product="product"></product-item>
  </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem'

export default {
  name: 'cart',
  components: {
    'product-item': ProductItem
  },
  data() {
    return {
      msg: 'welcome to the Cart Page'
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    }
  },
  methods: {
    removeFormCart(productId) {
      this.$store.commit('removeProduct', {
        productId
      })
    }
  }
}
</script>

<style></style>
