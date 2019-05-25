import React, { useContext } from "react"
import { MyContext } from "./context-provider"

const Shop = () => {
  const { products, count, add } = useContext(MyContext)

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product}>
            {product}
            <button onClick={() => add(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
      {count > 0 && (
        <div>
          <h2>Cart</h2>
          <p>{count} items in cart.</p>
        </div>
      )}
    </div>
  )
}

export default Shop
