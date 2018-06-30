import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import actions from './actions'
import getters from './getters'
import cart, { State as CardState } from './modules/cart'
import products, { State as ProductsState } from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products,
  },
})

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}

export interface State {
  cart: CardState,
  products: ProductsState
}

export type CheckoutStatus = 'successful' | 'failed' | null

export interface Product {
  id: number,
  title: string,
  price: number,
  inventory: number
}

export interface CartProduct {
  title: string,
  price: number,
  quantity: number
}

export interface AddToCartPayload {
  id: number
}
