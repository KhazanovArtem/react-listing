import React from 'react'
import  data  from '../data/etsy.json'
import { Product } from './Product';

export const Listing = () => {

const products = data;
console.log(products);

  return (
    <div className='item-list'>
      {products.map(item =>
      item.state === 'removed' ? null : (
      <div className='item' key={item.listing_id}>
        <Product item={item}/>
      </div>
      ))}
    </div>
  )
}
