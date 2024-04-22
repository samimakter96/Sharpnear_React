import React from 'react';

function Product({ id, name, price, onDelete }) {
  const handleDelete = () => {
    onDelete(id); // Call onDelete function with product ID
  };

  return (
    <li>
      {price}-{name}
      <button onClick={handleDelete}>Delete Product</button>{' '}
    </li>
  );
}

export default Product;
