import shop, { Product } from '../../api/shop'
import * as types from '../mutation-types'

export interface State {
  all: Product[]
}

export interface ProductsPayload {
  products: Product[]
}

export interface AddProductPayload {
  id: number
}

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: (state: State) => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts((products: Product[]) => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state: State, payload: ProductsPayload) {
    state.all = payload.products
  },

  [types.ADD_TO_CART] (state: State, payload: AddProductPayload) {
    state.all.find((p: Product) => p.id === payload.id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
