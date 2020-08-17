<template>
  <div class="product-detail">
    <div class="product-detail-image">
      <img class="image" :src="product.image" />
    </div>
    <div class="product-detail-info">
      <div class="product-detail-dsc">
        <small>{{product.manufacturer.name}}</small>
        <h3>{{product.name}}</h3>
        <p>{{product.description}}</p>
      </div>
    </div>
    <div class="product-detail-price-cart">
      <p>{{product.price}}</p>
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton'

export default {
  name: 'product-detail',
  props: ['product'],
  components: {
    'product-button': ProductButton
  }
}
</script>

<style>
.product-detail-image .image {
  width: 100px;
  height: 100px;
}
</style>