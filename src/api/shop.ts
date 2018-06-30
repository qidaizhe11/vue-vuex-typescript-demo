/**
 * Mocking client-server processing
 */

import { CartProduct } from '../store'

const initProducts = [
  { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
]

export default {
  getProducts(cb: (products: any[]) => void) {
    setTimeout(() => cb(initProducts), 100)
  },

  buyProducts(products: CartProduct[], cb: () => void, errorCb: () => void) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1
        ? cb()
        : errorCb()
    }, 100)
  },
}
