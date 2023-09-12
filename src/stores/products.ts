import { createStore } from 'vuex'

import { API_URL } from '@/config/const'
import { API_ENDPOINTS } from '@/config/const'

import type Product from '@/types/product'

interface StateProduct {
  products: Product[]
  product: Product
}

const productsStore = createStore({
  state: {
    products: [] as Product[],
    product: {} as Product
  },
  mutations: {
    SET_PRODUCTS(state: StateProduct, products: Product[]) {
      state.products = products
    },
    SET_PRODUCT(state: StateProduct, product: Product) {
        state.product = product
    }

  },
  actions: {
    async fetchProducts({ commit }: any, query: string) {
      let url = `${API_URL}${API_ENDPOINTS.PRODUCTS}`

      url = url + `?title_like=${query}`

      const products = await fetch(url).then((res) => res.json())

      console.log(products)
      commit('SET_PRODUCTS', products)
    },
    async fetchProduct({ commit }: any, id: number) {
        const product = await fetch(`${API_URL}${API_ENDPOINTS.PRODUCTS}/${id}`).then((res) => res.json())
    
        commit('SET_PRODUCT', product)
    }
  },
  getters: {
    products: (state: StateProduct) => state.products,
    product: (state: StateProduct) => state.product
    
  }
})

export default productsStore
