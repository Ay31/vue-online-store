<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
</template>

<script>
import ProductForm from '@/components/products/ProductForm.vue'

export default {
  name: 'new',
  components: {
    'product-form': ProductForm
  },
  data() {
    return {
      model: {
        manufacturer: { name: '', _id: '' }
      }
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers
    }
  },
  methods: {
    addProduct(product) {
      this.$store.dispatch('addProduct', {
        product
      })
    }
  },
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers')
    }
  }
}
</script>

<style></style>
