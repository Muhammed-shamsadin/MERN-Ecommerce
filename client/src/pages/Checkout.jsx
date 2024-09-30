// // Checkout.jsx
// import React from 'react';
// import CheckoutForm from '../components/CheckoutForm';

// const products = [
//   {
//     id: 1,
//     name: 'Micro Backpack',
//     price: '$70.00',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
//   },
//   // More products...
// ];

// export default function Checkout() {
//   return (
//     <div className="bg-white">
//       {/* Background color split screen for large screens */}
//       <div className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true" />
//       <div className="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block" aria-hidden="true" />

//       <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
//         <h1 className="sr-only">Order information</h1>

//         {/* Order Summary Section */}
//         <section aria-labelledby="summary-heading" className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16">
//           <div className="mx-auto max-w-lg lg:max-w-none">
//             <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>
//             <ul role="list" className="divide-y divide-gray-200 text-sm font-medium text-gray-900">
//               {products.map((product) => (
//                 <li key={product.id} className="flex items-start space-x-4 py-6">
//                   <img src={product.imageSrc} alt={product.name} className="h-20 w-20 flex-none rounded-md object-cover object-center" />
//                   <div className="flex-auto space-y-1">
//                     <h3>{product.name}</h3>
//                     <p className="text-gray-500">{product.price}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* Checkout Form Section */}
//         <CheckoutForm />
//       </div>
//     </div>
//   );
// }
