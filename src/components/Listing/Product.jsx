import React from 'react'

export const Product = (props) => {
    const {listing_id, url, MainImage, title, currency_code, price, quantity} = props.item
    let newtitle = title;
    if (title.length > 50) {
        newtitle = title.substr(0, 50) + '...'
    }
    
    let sign;
    if (currency_code === 'USD') {
        sign = '$';
    }
    if (currency_code === 'EUR') {
        sign = '€';
    }

    let count;
    if(quantity < 11) {
        count = 'low';
    }
    if(quantity > 10 && quantity < 21) {
        count = 'medium';
    }
    if(quantity > 20) {
        count = 'high';
    }

  return (
    <>
        <div className='item-image'>
            <a href={url}>
                <img src={MainImage.url_570xN} alt={`${MainImage.url_570xN} avatar`} />
            </a>
        </div>
        <div className='item-details'>
            <p className='item-title'>{newtitle}</p>
            <p className='item-price'>{currency_code === 'USD' || currency_code === 'EUR' ? `${sign}${price}` : `${price} ${currency_code}`}</p>
            <p className={`item-quantity level-${count}`}>{quantity}</p>
        </div>
    </>
  )
}
