import React, { useMemo, useState } from 'react';
import MenuItem from '../components/MenuItem';
import Cart from '../components/Cart';
import '../styles/Menu.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BackImage3 from "../images/img35.jpeg";
import BackImage4 from "../images/img35.jpeg";
import BackImage6 from "../images/img10.jpeg";


function Menu() {
  const menuItems = [
    { image: BackImage3, label: 'Menu Item 1', label1: 'Ksh300.00' },
    { image: BackImage4, label: 'Menu Item 2', label1: 'Ksh270.00' },
    { image: BackImage3, label: 'Menu Item 3', label1: 'Ksh480.00' },
    { image: BackImage4, label: 'Menu Item 4', label1: 'Ksh160.00' },
    { image: BackImage3, label: 'Menu Item 5', label1: 'Ksh270.00' },
    { image: BackImage4, label: 'Menu Item 6', label1: 'Ksh250.00' },
    { image: BackImage3, label: 'Menu Item 7', label1: 'Ksh350.00' },
    { image: BackImage3, label: 'Menu Item 5', label1: 'Ksh270.00' },
    { image: BackImage4, label: 'Menu Item 6', label1: 'Ksh250.00' },
    // { image: BackImage3, label: 'Menu Item 7', label1: 'Ksh350.00' },
  ];

  const productCategories = useMemo(() => [
    {
      id: 'category1',
      name: 'category 1',
      items: [
        { id: 'item1', label: 'item 1', label1: 'Ksh180.00', image: BackImage3 },
        { id: 'item1', label: 'item 1', label1: 'Ksh230.00', image: BackImage6 },
        { id: 'item1', label: 'item 1', label1: 'Ksh260.00', image: BackImage3 }
      ],
    },
    {
      id: 'category2',
      name: 'Category 2',
      items: [
        { id: 'item2', label: 'item 2', label1: 'Ksh1200.00', image: BackImage3 },
        { id: 'item2', label: 'item 2', label1: 'Ksh1000.00', image: BackImage6 },
        { id: 'item2', label: 'item 2', label1: 'Ksh1400.00', image: BackImage3 }
      ],
    },
    {
      id: 'category3',
      name: 'Category 3',
      items: [
        { id: 'item3', label: 'item 3', label1: 'Ksh100.00', image: BackImage3 },
        { id: 'item3', label: 'item 3', label1: 'Ksh300.00', image: BackImage6 },
        { id: 'item3', label: 'item 3', label1: 'Ksh200.00', image: BackImage3 }
      ],
    },
    {
      id: 'category4',
      name: 'Category 4',
      items: [
        { id: 'item4', label: 'item 4', label1: 'Ksh420.00', image: BackImage3 },
        { id: 'item4', label: 'item 4', label1: 'Ksh150.00', image: BackImage6 },
        { id: 'item4', label: 'item 4', label1: 'Ksh270.00', image: BackImage3 }
      ],
    },
    {
      id: 'category5',
      name: 'Category 5',
      items: [
        { id: 'item5', label: 'item 5', label1: 'Ksh350.00', image: BackImage3 },
        { id: 'item5', label: 'item 5', label1: 'Ksh400.00', image: BackImage6 },
        { id: 'item5', label: 'item 5', label1: 'Ksh700.00', image: BackImage3 }
      ],
    },
  ], []);

  const topRatedProducts = [
    { id: 'product1', label: 'Product 1', label1: 'Ksh850.00', image: BackImage3 },
    { id: 'product2', label: 'Product 2', label1: 'Ksh750.00', image: BackImage3 },
    { id: 'product3', label: 'Product 3', label1: 'Ksh150.00', image: BackImage3 },
    { id: 'product4', label: 'Product 4', label1: 'Ksh250.00', image: BackImage3 },
    { id: 'product5', label: 'Product 5', label1: 'Ksh150.00', image: BackImage3 },
    { id: 'product6', label: 'Product 6', label1: 'Ksh300.00', image: BackImage3 },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalItems(totalItems + 1);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
    setTotalItems(totalItems - 1);
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
    setTotalItems(totalItems - 1);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  // useEffect(() => {
    // setSelectedCategoryItems([]);
  // }, [selectedCategory]);

  const selectedCategoryItems = useMemo(() => {
    const category = productCategories.find((cat) => cat.id === selectedCategory);
    return category ? category.items : [];
  }, [selectedCategory, productCategories]);

  return (
    <div className='menu'>
   
      <div className='menu-left'>
        <div className='product-categories'>
          <h2>PRODUCT CATEGORIES</h2>
          <select onChange={(e) => handleCategoryClick(e.target.value)} value={selectedCategory || ''}>
            <option value=''>Select Category</option>
            {productCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className='selected-category'>
            <h2>{productCategories.find((category) => category.id === selectedCategory)?.name}</h2>
            <ul>
              {selectedCategoryItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={`${item.label} - ${item.label1}`} />
                  <p>{item.label}</p>
                  <p>{item.label1}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

<div className='product-tags'>
          <h2>PRODUCT TAGS</h2>
          <div className='tag-box'>
            <button>BEEF</button>
            <button>PILAU</button>
            <button>CHICKEN</button>
          </div>
        </div>

        <div className='search-products'>
          <h2>SEARCH PRODUCTS</h2>
          <div className='search-box'>
            <input type='text' placeholder='Search...' />
            <button>
              <span>🔍</span>
            </button>
          </div>
        </div>

        <div className='top-rated-products'>
          <h2>TOP RATED PRODUCTS</h2>
          <ul>
            {topRatedProducts.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={`${product.label} - ${product.label1}`} />
                <div>
                <p className='label'>{product.label}</p>
                <p className='label1'>{product.label1}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      
      </div>

      <Cart cartItems={cartItems} />

<div className='menu-right'>
  {menuItems.map((item, index) => (
    <MenuItem
      key={index}
      item={item}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      setCartItems={setCartItems} // Pass setCartItems function to MenuItem
      handleRemoveFromCart={handleRemoveFromCart} 
      closeCart={closeCart}
    />
  ))}
</div>

{isCartOpen && <Cart cartItems={cartItems} closeCart={closeCart} />}

<div className='cart-icon' onClick={openCart}>

  <p className='cart-content'>
    < AddShoppingCartIcon /> <span className='total-items'>{totalItems}</span>
  </p>
</div>
</div>
);
}

export default Menu;