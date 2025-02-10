import { createStore } from 'vuex'
import axios from 'axios' // Import axios

export default createStore({
  state: {
    products: []
  },
  getters: {
    allProducts: (state) => state.products,
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('http://localhost:3000/product');
      commit('setProducts', response.data);
    },
    async addProduct({ commit }, product) {
      const response = await axios.post('http://localhost:3000/product', product);
      commit('newProduct', response.data)
    },
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
    newProduct: (state, product) => {
      state.products.push(product)
    }
  }
})
