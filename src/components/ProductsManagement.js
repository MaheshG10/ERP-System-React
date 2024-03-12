import React, { useState } from 'react';
import '../App.css'; 
import { Link } from 'react-router-dom';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Category 1', price: 200.99, stockQuantity: 50 },
    { id: 2, name: 'Product B', category: 'Category 2', price: 340.99, stockQuantity: 30 },
    { id: 3, name: 'Product C', category: 'Category 3', price: 150.99, stockQuantity: 75 },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

const handleAddProduct = () => {
    const newProduct = {
        id: null, 
        name: '',
        category: '',
        price: 0,
        stockQuantity: 0,
    };
    setEditedProduct(newProduct);
    setIsAdding(true);
};

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditedProduct(productToEdit);
    setIsEditing(true);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    setIsEditing(false);
    setEditedProduct(null);
  };

  const handleSave = () => {
    if (isAdding) {
      const newProduct = {
        id: products.length + 1,
        name: editedProduct.name,
        category: editedProduct.category,
        price: editedProduct.price,
        stockQuantity: editedProduct.stockQuantity,
      };
      setProducts([...products, newProduct]);
    } else if (isEditing && editedProduct) {
      const updatedProducts = products.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      );
      setProducts(updatedProducts);
    }
    setIsAdding(false);
    setIsEditing(false);
    setEditedProduct(null);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setEditedProduct(null);
  };

  const handleViewProductDetails = (productId) => {
    const productToView = products.find((product) => product.id === productId);
    setEditedProduct(productToView);
    setIsEditing(false); 
  };

  return (
    <div className="container">
      <table  align='center' style={{backgroundColor:'wheat',borderRadius:10}}>

      <h2 align='center'>Products Management</h2>
      </table>
      <h3 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Link to="/">Home</Link></h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button style={{ backgroundColor: '#4CAF50', color: 'black' ,borderRadius:100}} onClick={handleAddProduct} >Add Product</button>
          </div>     

      {isAdding || isEditing ? (
        <div>
          <h3>{isAdding ? 'Add Product' : 'Edit Product'}</h3>
          <label>Name: </label>
          <input
            type="text"
            value={editedProduct?.name || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          />
          <label>Category: </label>
          <input
            type="text"
            value={editedProduct?.category || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
          />
          <label>Price: </label>
          <input
            type="number"
            value={editedProduct?.price || 0}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: parseFloat(e.target.value) })}
          />
          <label>Stock Quantity: </label>
          <input
            type="number"
            value={editedProduct?.stockQuantity || 0}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, stockQuantity: parseInt(e.target.value) })
            }
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <table className="product-list-table" border={2}>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>Rs {product.price.toFixed(2)}</td>
                  <td>{product.stockQuantity}</td>
                  <td>
                    <button onClick={() => handleViewProductDetails(product.id)}className='view'>View Details</button>
                    <button onClick={() => handleEditProduct(product.id)} style={{backgroundColor: '#ded91a'}}>Edit</button>
                    <button onClick={() => handleDeleteProduct(product.id)} style ={{ backgroundColor: '#FF0000', color: 'white', marginTop: '10px' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

{editedProduct && (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h3>{isEditing ? 'Edit Product Details' : 'Product Details'}</h3>
    <p>ID: {editedProduct.id}</p>
    <p>Name: {editedProduct.name}</p>
    <p>Category: {editedProduct.category}</p>
    <p>Price: Rs {editedProduct.price.toFixed(2)}</p>
    <p>Stock Quantity: {editedProduct.stockQuantity}</p>
  </div>
      )}
    </div>
  );
};

export default ProductsManagement;
