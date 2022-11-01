import React from 'react'
import Navbar from '../Navbar/Navbar'
import CartList from '../CartList/CartList'

function Cart() {
  return (
    <div>
        <Navbar />
        {/* <center> */}
          <CartList />
        {/* </center> */}
    </div>
  )
}

export default Cart