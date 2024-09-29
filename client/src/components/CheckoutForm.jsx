// // CheckoutForm.jsx
// import React from 'react';

// export default function CheckoutForm() {
//   return (
//     <form className="px-4 pb-36 pt-16 sm:px-6 lg:px-0 lg:pb-16">
//       <div className="mx-auto max-w-lg lg:max-w-none">
//         {/* Contact Information Section */}
//         <section aria-labelledby="contact-info-heading">
//           <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
//             Contact information
//           </h2>
//           <div className="mt-6">
//             <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <div className="mt-1">
//               <input
//                 type="email"
//                 id="email-address"
//                 name="email-address"
//                 autoComplete="email"
//                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Payment Details Section */}
//         <section aria-labelledby="payment-heading" className="mt-10">
//           <h2 id="payment-heading" className="text-lg font-medium text-gray-900">
//             Payment details
//           </h2>
//           <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
//             <div className="col-span-3 sm:col-span-4">
//               <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
//                 Name on card
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="name-on-card"
//                   name="name-on-card"
//                   autoComplete="cc-name"
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div className="col-span-3 sm:col-span-4">
//               <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
//                 Card number
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="card-number"
//                   name="card-number"
//                   autoComplete="cc-number"
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div className="col-span-2 sm:col-span-3">
//               <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
//                 Expiration date (MM/YY)
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   name="expiration-date"
//                   id="expiration-date"
//                   autoComplete="cc-exp"
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
//                 CVC
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   name="cvc"
//                   id="cvc"
//                   autoComplete="csc"
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Shipping Address Section */}
//         <section aria-labelledby="shipping-heading" className="mt-10">
//           <h2 id="shipping-heading" className="text-lg font-medium text-gray-900">
//             Shipping address
//           </h2>
//           <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
//             <div className="sm:col-span-3">
//               <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//                 Address
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                 City
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="city"
//                   name="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
//                 Postal code
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="postal-code"
//                   name="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Submit Button */}
//         <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
//           <button
//             type="submit"
//             className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
//           >
//             Continue
//           </button>
//           <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
//             You won't be charged until the next step.
//           </p>
//         </div>
//       </div>
//     </form>
//   );
// }
