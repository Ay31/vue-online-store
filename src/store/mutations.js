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
  }
}

export const cartMutations = {
  addProduct(state, payload) {
    const { product } = payload
    state.cart.push(product)
  },
  removeProduct(state, payload) {
    const { productId } = payload
    state.cart = state.cart.filter((product) => product._id !== productId)
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
  removeManufacturers(state) {
    state.showLoader = true
  },
  removeManufacturersSuc(state, payload) {
    const { manufacturerId  } = payload
    state.showLoader = false
    state.manufacturers = state.manufacturers.filter(
      (manufacturer) => manufacturer._id !== manufacturerId
    )
  }
}
