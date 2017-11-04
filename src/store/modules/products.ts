import shop, { Product } from '../../api/shop'
import * as types from '../mutation-types'
import { ActionContextBasic } from '../index'

export interface ProductsPayload {
  products: Product[]
}

export interface AddProductPayload {
  id: number
}

export interface State {
  all: Product[]
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
  getAllProducts (context: ActionContextBasic) {
    shop.getProducts((products: Product[]) => {
      context.commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state: State, payload: ProductsPayload) {
    state.all = payload.products
  },

  [types.ADD_TO_CART] (state: State, payload: AddProductPayload) {
    const product = state.all.find(p => p.id === payload.id)
    if (product) {
      product.inventory--
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
