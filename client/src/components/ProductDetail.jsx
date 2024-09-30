import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';

const ProductDetail = ({ product }) => {
  const [selectedCount, setSelectedCount] = useState(1); // Add to handle quantity
  const reviews = { href: '#', average: 4, totalCount: 117 }; // Example, replace with actual data if available

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-4 max-w-2xl sm:px-3 lg:max-w-2xl lg:px-5">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover object-center" // Adjust height here
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
          <p className="text-3xl tracking-tight text-gray-900">
            ${product.price?.toFixed(2)}
          </p>
          <p className="mt-4 text-gray-600">{product.description}</p>
          
          {/* Stock info */}
          <p className="mt-2 text-sm text-gray-500">
            {product.countInStock > 0 ? `${product.countInStock} in stock` : 'Out of stock'}
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <a
                href={reviews.href}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          <form className="mt-10">
            {/* Quantity Selection */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <input
                type="number"
                min="1"
                value={selectedCount}
                onChange={(e) => setSelectedCount(e.target.value)}
                className="mt-2 w-32 rounded-md border border-gray-300 p-2" // Set fixed width for input
              />
            </div>

            {/* Button Container */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
