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
  manufacturerById({ commit }, payload) {
    commit('getManufacturerId')
    const { manufacturerId } = payload
    axios.get(`${API_BASE}/manufacturers/${manufacturerId}`).then((response) => {
      commit('getManufacturerIdSuc', {
        manufacturer: response.data
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
  },
  updateManufacturer({ commit }, payload) {
    commit('updateManufacturer')
    const { manufacturer } = payload
    axios
      .put(`${API_BASE}/manufacturers/${manufacturer._id}`, manufacturer)
      .then((response) => {
        commit('updateManufacturerSuc', {
          manufacturer: manufacturer
        })
        Message({
          message: '恭喜你，制造商更新成功！',
          type: 'success'
        })
      })
      .catch(() => {
        Message.error('不好意思，制造商更新失败！')
      })
  },
  addManufacturer({ commit, state }, payload) {
    commit('addManufacturer')
    const { manufacturer } = payload
    const _id = state.user._id

    axios
      .post(`${API_BASE}/manufacturers`, { ...manufacturer, user: _id })
      .then((response) => {
        commit('addManufacturerSuc', {
          manufacturer: response.data
        })
        Message({
          message: '恭喜你，制造商添加成功！',
          type: 'success'
        })
      })
      .catch(() => {
        Message.error('不好意思，制造商添加失败！')
      })
  }
}
