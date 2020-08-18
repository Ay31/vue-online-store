<template>
  <div class="productInfo">
    <el-form class="form" ref="form" :model="model" label-width="180px">
      <el-form-item label="Name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="Manufacturer ">
        <el-select v-model="model.manufacturer.name" clearable placeholder="请选择制造商">
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Image ">
        <el-input v-model="model.image"></el-input>
      </el-form-item>
      <el-form-item label="Description ">
        <el-input type="textarea" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit">Update Product</el-button>
        <el-button v-else @click="onSubmit">Add Product</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  props: ['model', 'manufacturers', 'isEditing'],
  data() {
    return {}
  },
  methods: {
    onSubmit() {
      this.$emit('save-product', this.model)
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
