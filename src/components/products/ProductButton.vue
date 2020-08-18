<template>
  <div>
    <button class="button" v-if="isAdding" @click="addToCart(product)">加入购物车</button>
    <button class="button" v-else @click="removeFromCart(product._id)">从购物车删除</button>
  </div>
</template>

<script>
export default {
  name: 'product-button',
  props: ['product'],
  computed: {
    isAdding() {
      let isAdding = true
      this.cart.map(product => {
        if (product._id === this.product._id) {
          isAdding = false
        }
      })
      return isAdding
    },
    cart() {
      return this.$store.state.cart
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', {
        product
      })
    },
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', {
        productId
      })
    }
  }
}
</script>

<style></style>
