import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

function Cart() {
    const [products, setProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const shippingCost = 5.0;
    const taxRate = 0.1;
   
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
    </div>
  )
}

export default Cart