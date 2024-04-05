import React from 'react'
import './shop.css'
import products from '../../product/product.json'
import Card from '../../components/Card'
const Shop = () => {
  return (
    <>
    <div className='bg-shop'>
          <h2>Products</h2>
    </div>
    <div className='products'>
    {
        products.map((product)=>{
            return(
                <>
                <Card className='product-card' key={product.id}
                   {...product} />
                </>
            )
        })
    }
    </div>
    </>
  )
}

export default Shop