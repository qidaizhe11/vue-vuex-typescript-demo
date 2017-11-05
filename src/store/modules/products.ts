import shop from '../../api/shop'
import * as types from '../mutation-types'
import { ActionContextBasic, Product, AddToCartPayload } from '../index'

export interface ProductsPayload {
  products: Product[]
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
      const payload: ProductsPayload = {
        products
      }
      context.commit(types.RECEIVE_PRODUCTS, payload)
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state: State, payload: ProductsPayload) {
    state.all = payload.products
  },

  [types.ADD_TO_CART] (state: State, payload: AddToCartPayload) {
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
