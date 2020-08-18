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
    state.products = state.products.filter(product => product._id !== productId)
  },
  updateProduct(state) {
    state.showLoader = true
  },
  updateProductSuc(state, payload) {
    state.showLoader = false
    const { product: newProduct } = payload
    state.products = state.products.map(product => {
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
  },
  removeFromCart(state, payload) {
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
    console.log(manufacturers)
    state.showLoader = false
    state.manufacturers = manufacturers
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
  }
}
