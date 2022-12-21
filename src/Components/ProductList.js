import React from 'react'
import '../App.css';
function ProductList({product, addToCart}) {
  return (
    <div className='product-container'>
        {product.map((item, index) =>{
            return(
                <div className='card' key={index}>
                    <div>
                        <img src={item.otherImages[0]} alt="" img width={'200px'}/>
                    </div>
                    <h4>{item.name}</h4>
                    <div><i>{item.description}</i></div>
                    <div>{(item.finalPrice ? ('Rs.' + item.finalPrice) : (" ")) + " "}<strike><div>{item.strickPrice}</div></strike>
                    <i style={{ color: 'red' }}>{item.discount ? item.discount + "% OFF" : " "}</i></div>
                    <button className='add-btn' onClick={() =>addToCart(item)}>Add</button>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList
