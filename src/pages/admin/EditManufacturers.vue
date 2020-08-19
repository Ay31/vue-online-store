<template>
  <manufacturer-form @save-manufacturer="updateManufacturer" :model="model" :isEditing="true"></manufacturer-form>
</template>

<script>
import ManufacturerForm from '@/components//ManufacturerForm'

export default {
  name: 'edit-manufacturers',
  components: {
    'manufacturer-form': ManufacturerForm
  },
  data() {
    return {
      model: {}
    }
  },
  computed: {
    // model() {
    //   const manufacturer = this.$store.getters.manufacturerById(this.$route.params['id'])
    //   return { ...manufacturer }
    // }
  },
  methods: {
    updateManufacturer(model) {
      this.$store.dispatch('updateManufacturer', {
        manufacturer: model
      })
    }
  },
  created() {
    this.$store.dispatch('manufacturerById', {
      manufacturerId: this.$route.params['id']
    })
    const manufacturer = this.$store.getters.manufacturerById(this.$route.params['id'])
    this.model = { ...manufacturer }
  }
}
</script>

<style>
</style>
