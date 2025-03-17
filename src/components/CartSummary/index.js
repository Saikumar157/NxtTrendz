// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      const totalOrder = cartList.reduce(
        (total, item) => total + item.quantity * item.price,
        0,
      )
      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total:{' '}
            <span className="span-total-orders">Rs {totalOrder}/-</span>
          </h1>
          <p className="no-of-items">{cartLength} items in cart</p>
          <button type="button" className="chechout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
