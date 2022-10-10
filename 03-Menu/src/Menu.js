import React from 'react';

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <>
      <section className='menu-item'>
        <img src={img} alt={title} className='photo' />
        <div>
          <div className='product-title'>
            <h4>{title}</h4>
            <h4 className='price'>${price}</h4>
          </div>
          <hr />
          <p className='item-text'>{desc}</p>
        </div>
      </section>
    </>
  );
};

export default Menu;
