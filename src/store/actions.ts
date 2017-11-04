import { Commit } from 'vuex'
import * as types from './mutation-types'
import { Product } from '../api/shop'
import store from './index'

export interface AddToCartPayload {
  id: number
}

export const addToCart = (product: Product) => {
  if (product.inventory > 0) {
    const payload: AddToCartPayload = {
      id: product.id
    }
    store.commit(types.ADD_TO_CART, payload)
  }
}
