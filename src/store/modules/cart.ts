import shop from '../../api/shop'
import * as types from '../mutation-types'

interface Shape {
  id: number
  quantity: number
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
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state: State, { id }) {
    state.checkoutStatus = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
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

  [types.CHECKOUT_FAILURE] (state: State, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
