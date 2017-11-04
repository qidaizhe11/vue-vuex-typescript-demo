import { Commit } from 'vuex'
import shop, { Product } from '../../api/shop'
import * as types from '../mutation-types'
import { AddToCartPayload } from '../actions'

interface Shape {
  id: number
  quantity: number
}

interface CheckoutFailurePayload {
  savedCartItems: Shape[]
}

export interface State {
  added: Shape[]
  checkoutStatus: 'successful' | 'failed' | null
}

// initial state
// shape: [{ id, quantity }]
const state: State = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: (state: State) => state.checkoutStatus
}

// actions
const actions = {
  checkout (context: { commit: Commit, state: State }, products: Product[]) {
    const failurePayload: CheckoutFailurePayload = {
      savedCartItems: [...context.state.added]
    }
    context.commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => context.commit(types.CHECKOUT_SUCCESS),
      () => context.commit(types.CHECKOUT_FAILURE, failurePayload)
    )
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state: State, payload: AddToCartPayload) {
    state.checkoutStatus = null
    const record = state.added.find(p => p.id === payload.id)
    if (!record) {
      state.added.push({
        id: payload.id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [types.CHECKOUT_REQUEST] (state: State) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS] (state: State) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state: State, payload: CheckoutFailurePayload) {
    // rollback to the cart saved before sending the request
    state.added = payload.savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
