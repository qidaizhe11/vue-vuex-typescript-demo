import { Commit, Action, ActionTree } from 'vuex'
import * as types from './mutation-types'
import store, { State, Product, CartProduct } from './index'

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

// 建议mapActions官方支持类型推导前，暂不使用以上标准写法，改用如下形式类型安全的action函数

export const actionAddToCart = (product: Product) => {
  if (product.inventory > 0) {
    const payload: AddToCartPayload = {
      id: product.id
    }
    store.commit(types.ADD_TO_CART, payload)
  }
}

// 建议dispatch/commit调用，均采用如下形式包裹一层，以启用类型推导

export const dispatchCheckout = (products: CartProduct[]) => {
  store.dispatch('checkout', products)
}
