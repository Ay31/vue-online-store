<template>
  <form @submit.prevent="saveManufacturer">
    <div class="form-group">
      <label for>Name</label>
      <input class="form-control" type="text" placeholder="Name" v-model="model.name" name="name" />
    </div>
    <div class="form-group new-button">
      <button class="button">
        <i class="fa fa-pencil"></i>
        <span v-if="isEditing">Update Manufacturer</span>
        <span v-else>Add Manufacturer</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'manufacturer-form',
  props: ['model', 'isEditing'],
  methods: {
    saveManufacturer() {
      this.$emit('save-manufacturer', this.model)
    }
  }
}
</script>

<style>
</style>
