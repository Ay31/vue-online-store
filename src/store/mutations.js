import { Message } from 'element-ui'

export const productMutations = {
  allProducts(state) {
    state.showLoader = true
  },
  allProductsSuc(state, payload) {
    const { products } = payload
    state.showLoader = false
    state.products = products
  },
  getProductById(state) {
    state.showLoader = true
  },
  getProductByIdSuc(state, payload) {
    state.showLoader = false
    const { product } = payload
    state.product = product
  },
  removeProduct(state) {
    state.showLoader = true
  },
  removeProductSuc(state, payload) {
    state.showLoader = false
    const { productId } = payload
    state.products = state.products.filter((product) => product._id !== productId)
  },
  updateProduct(state) {
    state.showLoader = true
  },
  updateProductSuc(state, payload) {
    state.showLoader = false
    const { product: newProduct } = payload
    state.products = state.products.map((product) => {
      if (product._id === newProduct._id) {
        return newProduct
      }
      return product
    })
  },
  addProduct(state) {
    state.showLoader = true
  },
  addProductSuc(state, payload) {
    state.showLoader = false
    const { product } = payload
    state.products = state.products.concat(product)
  }
}

export const cartMutations = {
  addToCart(state, payload) {
    const { product } = payload
    state.cart.push(product)
    Message({
      message: '恭喜你，成功加入购物车！',
      type: 'success'
    })
  },
  removeFromCart(state, payload) {
    const { productId } = payload
    state.cart = state.cart.filter((product) => product._id !== productId)
    Message({
      message: '恭喜你，成功移除购物车！',
      type: 'success'
    })
  }
}

export const manufacturerMutations = {
  allManufacturers(state) {
    state.showLoader = true
  },
  allManufacturersSuc(state, payload) {
    const { manufacturers } = payload
    state.showLoader = false
    state.manufacturers = manufacturers
  },
  getManufacturerId(state) {
    state.showLoader = true
  },
  getManufacturerIdSuc(state, payload) {
    state.showLoader = false
    const { manufacturer } = payload
    state.manufacturer = manufacturer
  },
  removeManufacturers(state) {
    state.showLoader = true
  },
  removeManufacturersSuc(state, payload) {
    const { manufacturerId } = payload
    state.showLoader = false
    state.manufacturers = state.manufacturers.filter(
      (manufacturer) => manufacturer._id !== manufacturerId
    )
  },
  updateManufacturer(state) {
    state.showLoader = true
  },
  updateManufacturerSuc(state, payload) {
    state.showLoader = false
    const { manufacturer: newManufacturer } = payload
    state.manufacturers = state.manufacturers.map((manufacturer) => {
      if (manufacturer._id === newManufacturer._id) {
        return newManufacturer
      }
      return manufacturer
    })
    state.manufacturer = newManufacturer
  },
  addManufacturer(state) {
    state.showLoader = true
  },
  addManufacturerSuc(state, payload) {
    state.showLoader = false
    const { manufacturer } = payload
    state.manufacturers = state.manufacturers.concat(manufacturer)
  }
}
