<template>
  <div>
    <div class="title">
      <h1>This is Admin/Edit/{{ $route.params.id }}</h1>
    </div>
    <product-form
      @save-product="updateProduct"
      :model="model"
      :manufacturers="manufacturers"
      :isEditing="true"
    ></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/products/ProductForm'

export default {
  naem: 'edit',
  components: {
    'product-form': ProductForm
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers
    },
    model() {
      const product = this.$store.getters.productById(this.$route.params['id'])
      return { ...product, manufacturer: { ...product.manufacturer } }
    }
  },
  methods: {
    updateProduct(product) {
      this.$store.dispatch('updateProduct', {
        product
      })
    }
  },
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers')
    }
    if (!this.model.name) {
      this.$store.dispatch('productById', {
        productId: this.$route.params['id']
      })
    }
  }
}
</script>

<style></style>
