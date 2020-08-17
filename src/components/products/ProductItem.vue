<template>
  <div class="product">
    <router-link :to="'/detail/'+product._id" class="product-link">
      <p class="product-name">产品名称：{{product.name}}</p>
      <p class="product-description">介绍：{{product.description}}</p>
      <p class="product-price">价格：{{product.price}}</p>
      <p class="product-manufacturer">生产厂商：{{product.manufacturer.name}}</p>
      <img class="product-image" :src="product.image" />
      <product-button :product="product"></product-button>
    </router-link>
  </div>
</template>

<script>
import ProductButton from './ProductButton'

export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton
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
