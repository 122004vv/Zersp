import React, { useContext } from 'react';
import myContext from '../../../context/data/myContext';

function AddProduct() {
    const context = useContext(myContext);
    const { newProducts, setNewProducts, addProduct } = context;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProducts(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        addProduct(newProducts);
    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input
                            type="text"
                            name='title'
                            value={newProducts.title}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='price'
                            value={newProducts.price}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='imageUrl'
                            value={newProducts.imageUrl}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='category'
                            value={newProducts.category}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea
                           cols="30" 
                           rows="10"
                           name='description'
                           value={newProducts.description}
                           onChange={handleChange}
                           className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                           placeholder='Product description'>
                       </textarea>
                    </div>
                    <div className='flex justify-center mb-3'>
                        <button
                            onClick={handleSubmit}
                            className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
