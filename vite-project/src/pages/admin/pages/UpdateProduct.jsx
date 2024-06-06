import React, { useState, useContext } from 'react';
import MyContext from '../../../context/data/myContext';
import { useNavigate } from 'react-router-dom';

function UpdateProduct({ productId }) {
  const navigate = useNavigate();
  const { allProducts, updateProduct } = useContext(MyContext);
  const [updatedProduct, setUpdatedProduct] = useState({});

  // Find the product to be updated
  const product = allProducts.find((p) => p.id === productId);

  // Update product details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(productId, updatedProduct);
      navigate('/dashboard'); // Redirect to dashboard after update
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='mt-50'>
      <div className='flex justify-center items-center min-h-screen '>
        <div className='bg-gray-800 px-6 py-6 rounded-lg w-full max-w-md '>
            <div className="flex flex-col  items-center space-y-4">
                <div className='text-center text-white text-xl mb-2 font-bold '>
                <h1>UPDATE PRODUCT</h1>
                </div>
                <div>
                <p className='text-center text-white '>NOTE :</p>
                </div>
                <div>
                <p className='text-center text-white mb-2'> Product's previous details are given as placeholders for reference.</p>
                </div>
            </div>
            <div className=''>
                <label className='text-white'>Title <span className='text-red-500'>*</span> : </label>
            <input
            required
            type="text" 
            name='title'
            value={updatedProduct.title || ''}
            onChange={handleChange}
            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder={product.title+'-Current Title'}
          />
            </div>
            <div>
            <label className='text-white'>Price<span className='text-red-500'>*</span> : </label>
            <input
            required
            type="text"
            name='price'
            value={updatedProduct.price || ''}
            onChange={handleChange}
            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder={product.price +'-Current Price'}
          />
            </div>
          <div className='flex flex-col'>
          <label className='text-white'>Image URL <span className='text-red-500'>*</span>  : </label>
          <textarea
            cols="5"
            rows="10"
            name='imageUrl'
            value={updatedProduct.imageUrl || ''}
            onChange={handleChange}
            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder={product.imageUrl +'-Current ImageUrl'}
          />
          </div>
          <div>
          <label className='text-white'>Category <span className='text-red-500'>*</span> : </label>
          <input
            type="text"
            name='category'
            value={updatedProduct.category || ''}
            onChange={handleChange}
            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder={product.category +'-Current Category'}
          />
          </div>
          <div className='flex flex-col'>
          <label className='text-white'>Description <span className='text-red-500'>*</span> : </label>
          <textarea
            cols="30"
            rows="10"
            name='description'
            value={updatedProduct.description || ''}
            onChange={handleChange}
            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder={product.description +'-Current Description'}
          />
          </div>
          <div className='flex justify-center mb-3'>
          <button
            onClick={handleSubmit}
            className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'>
            Update Product
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
