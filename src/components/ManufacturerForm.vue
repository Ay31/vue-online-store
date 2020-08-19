<template>
  <div class="productInfo">
    <h1 class="title">This is Admin/Edit</h1>
    <el-form class="form" ref="form" :model="model" label-width="180px">
      <el-form-item label="Name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit">Update Manufacturer</el-button>
        <el-button v-else @click="onSubmit">Add Manufacturer</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'manufacturer-form',
  props: ['model', 'isEditing'],
  methods: {
    onSubmit() {
      this.$emit('save-manufacturer', this.model)
    }
  }
}
</script>

<style>
.productInfo {
  /* padding-top: 10px; */
}

.form {
  margin: 0 auto;
  width: 500px;
}

.el-input__inner {
  height: 60px;
}
</style>
