<template>
  <div>
    <el-button v-if="isAdding" @click="addToCart" type="text" size="small">加入购物车</el-button>
    <el-button v-else @click="removeFromCart(id)" type="text" size="small">从购物车移除</el-button>
  </div>
</template>

<script>
export default {
  name: 'product-button',
  props: ['id'],
  computed: {
    isAdding() {
      let isAdding = true
      this.cart.map((product) => {
        if (product._id === this.product._id) {
          isAdding = false
        }
      })
      return isAdding
    },
    cart() {
      return this.$store.state.cart
    },
    product() {
      let product = this.$store.getters.allProducts.find((product) => product._id === this.id)
      return product
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', {
        product: this.product
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
