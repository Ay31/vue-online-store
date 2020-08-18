import axios from 'axios'

const API_BASE = 'http://localhost:3000/api/v1'

export const productActions = {
  allProducts({ commit }) {
    commit('allProducts')
    axios.get(`${API_BASE}/products`).then((response) => {
      commit('allProductsSuc', {
        products: response.data
      })
    })
  },
  productById({ commit }, payload) {
    const { productId } = payload
    commit('getProductById')
    axios.get(`${API_BASE}/products/${productId}`).then((response) => {
      commit('getProductByIdSuc', {
        product: response.data
      })
    })
  },
  removeProduct({ commit }, payload) {
    commit('removeProduct')
    const { productId } = payload
    axios.delete(`${API_BASE}/products/${productId}`).then(() => {
      // 返回 productId，用于删除本地对应的商品
      commit('removeProductSuc', {
        productId
      })
    })
  },
  updateProduct({ commit }, payload) {
    commit('updateProduct')
    const { product } = payload
    axios.put(`${API_BASE}/products/${product._id}`, product).then(() => {
      commit('updateProductSuc', {
        product
      })
    })
  },
  addProduct({ commit }, payload) {
    commit('addProduct')
    const { product } = payload
    axios.post(`${API_BASE}/products`, product).then((response) => {
      commit('addProductSuc', {
        product: response.data
      })
    })
  }
}

export const manufacturerActions = {
  allManufacturers({ commit }) {
    commit('allManufacturers')
    axios.get(`${API_BASE}/manufacturers`).then((response) => {
      console.log(response.data)
      commit('allManufacturersSuc', {
        manufacturers: response.data
      })
    })
  },
  removeManufacturer({ commit }, payload) {
    commit('removeManufacturers')
    const { manufacturerId } = payload
    axios.delete(`${API_BASE}/manufacturers/${manufacturerId}`).then(() => {
      // 返回 manufacturerId，用于删除本地对应的制造商
      commit('removeManufacturersSuc', {
        manufacturerId
      })
    })
  }
}
