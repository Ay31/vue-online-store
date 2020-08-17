<template>
  <div>
    <product-detail :product="product"></product-detail>
  </div>
</template>

<script>
import ProductDetail from '@/components/products/ProductDetail'

export default {
  name: 'detail',
  props: ['product'],
  components: {
    'product-detail': ProductDetail
  },
  computed: {
    product() {
      return this.$store.getters.productById(this.$route.params['id'])
    }
  },
  created() {
    const { name } = this.product
    if (!name) {
      this.$store.dispatch('productById', {
        productId: this.$route.params['id']
      })
    }
  }
}
</script>

<style>
</style>