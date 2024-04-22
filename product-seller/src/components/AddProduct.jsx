import React, { useRef, useState, useEffect } from 'react';
import Product from './Product';

function AddProduct() {
  const [products, setProducts] = useState([]);
  const [totalSellingPrice, setTotalSellingPrice] = useState(0);

  const productIdElement = useRef();
  const sellingPriceElement = useRef();
  const productNameElement = useRef();

  useEffect(() => {
    // Load products from localStorage when component mounts
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }

    // Calculate total selling price whenever products array changes
    calculateTotalSellingPrice();
  }, []);

  useEffect(() => {
    // Save products to localStorage whenever products array changes
    localStorage.setItem('products', JSON.stringify(products));

    // Calculate total selling price whenever products array changes
    calculateTotalSellingPrice();
  }, [products]);

  const calculateTotalSellingPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += parseFloat(product.price);
    });
    setTotalSellingPrice(total);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    const productId = productIdElement.current.value;
    const sellingPrice = sellingPriceElement.current.value;
    const productName = productNameElement.current.value;

    const newProduct = {
      id: productId,
      name: productName,
      price: sellingPrice,
    };

    setProducts([...products, newProduct]);

    // Clear input fields after adding product
    productIdElement.current.value = '';
    sellingPriceElement.current.value = '';
    productNameElement.current.value = '';
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    // Remove the product from localStorage
    localStorage.removeItem(`product_${productId}`);
  };

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <label htmlFor="product-id">Product ID</label>
        <input type="number" id="product-id" ref={productIdElement} />

        <label htmlFor="price">Selling Price</label>
        <input type="text" id="price" ref={sellingPriceElement} />

        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" ref={productNameElement} />

        <button>Add Product</button>
      </form>
      
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            onDelete={handleDeleteProduct}
          />
        ))}
      </ul>
      <h3>Total value worth of products: Rs {totalSellingPrice.toFixed(2)}</h3>
    </div>
  );
}

export default AddProduct;
