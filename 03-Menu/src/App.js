import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const category = items.map((item) => item.category);

const uniqueCategories = ['all', ...new Set(category)];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories
          key={items.id}
          filterItems={filterItems}
          categories={categories}
        />
        <div className='section-center'>
          {menuItems.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
