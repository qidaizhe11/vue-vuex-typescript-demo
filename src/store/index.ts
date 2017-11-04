import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import actions from './actions'
import getters from './getters'
import cart, { State as CardState } from './modules/cart'
import products, { State as ProductsState } from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}

export interface State {
  cart: CardState,
  products: ProductsState
}

export interface CartProduct {
  title: string,
  price: number,
  quantity: number
}

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
