
import { State, CartProduct } from './index'

export const cartProducts = (state: State) => {
  return state.cart.added.map(shape => {
    const product = state.products.all.find(p => p.id === shape.id)
    if (product) {
      const cartProduct: CartProduct = {
        title: product.title,
        price: product.price,
        quantity: shape.quantity
      }
      return cartProduct
    }
  })
}
