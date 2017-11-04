import { Commit, Action, ActionTree } from 'vuex'
import * as types from './mutation-types'
import { Product } from '../api/shop'
import store, { State } from './index'

export interface AddToCartPayload {
  id: number
}

const addToCart: Action<State, any> = (context: { commit: Commit }, product: Product) => {
  if (product.inventory > 0) {
    const payload: AddToCartPayload = {
      id: product.id
    }
    context.commit(types.ADD_TO_CART, payload)
  }
}

const actions: ActionTree<State, any> = {
  addToCart
}

export default actions

// export const addToCart = (product: Product) => {
//   if (product.inventory > 0) {
//     const payload: AddToCartPayload = {
//       id: product.id
//     }
//     store.commit(types.ADD_TO_CART, payload)
//   }
// }
