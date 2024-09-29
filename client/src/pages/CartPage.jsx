// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Cart from '../components/Cart';
// import { fetchCartItems } from '../store/slices/cartSlice';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { cartItems, subtotal, loading } = useSelector((state) => state.cart);

//   useEffect(() => {
//     dispatch(fetchCartItems());
//   }, [dispatch]);

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto my-8">
//         <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
//             {/* Cart Items */}
//             <section aria-labelledby="cart-heading" className="lg:col-span-7">
//               <Cart cartItems={cartItems} />
//             </section>

//             {/* Order summary */}
//             <section
//               aria-labelledby="summary-heading"
//               className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
//             >
//               <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
//                 Order summary
//               </h2>
//               <dl className="mt-6 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <dt className="text-sm text-gray-600">Subtotal</dt>
//                   <dd className="text-sm font-medium text-gray-900">{subtotal}</dd>
//                 </div>
//                 {/* Add shipping, tax, and total logic */}
//               </dl>
//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                 >
//                   Checkout
//                 </button>
//               </div>
//             </section>
//           </form>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CartPage;
