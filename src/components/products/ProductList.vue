<template>
  <div>
    <div class="products">
      <div class="container">This is ProductList</div>
      <product-item v-for="product in products" :key="product._id" :product="product"></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  name: 'product-list',
  components: {
    'product-item': ProductItem
  },
  data() {
    return {
      // products: []
    }
  },
  computed: {
    // a computed getter
    products() {
      return this.$store.getters.allProducts
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addProduct', {
        product
      })
    }
  },
  created() {
    if (!this.products.length) {
      this.$store.dispatch('allProducts')
    }
  }
}
</script>

<style>
.product {
  border-bottom: 1px solid black;
}

.product-image {
  width: 100px;
  height: 100px;
}
</style>
