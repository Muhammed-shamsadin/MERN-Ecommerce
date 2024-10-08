import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import { useNavigate } from 'react-router-dom';
import { createOrder, removeFromCart, updateCartQuantity } from '../store/slices/orderSlice'; // Ensure updateCartQuantity is imported

const CartPage = () => {
    const dispatch = useDispatch();
    const { cartItems, loading, error } = useSelector((state) => state.order);

    // Calculate subtotal from cart items
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);

    const navigate = useNavigate(); // Initialize useNavigate
    

    const handleCheckout = (e) => {
        e.preventDefault();

        // Prepare order data based on the cart
        const orderData = {
            orderItems: cartItems.map(item => ({
                name: item.name,
                qty: item.qty,
                price: item.price,
                product: item.product,
            })),
            shippingAddress: { 
                address: 'Sample Address', 
                city: 'Sample City', 
                postalCode: '12345', 
                country: 'Country' 
            },
            paymentMethod: 'Credit Card',
            itemsPrice: subtotal,
            taxPrice: (subtotal * 0.1).toFixed(2), // Example tax calculation (10%)
            shippingPrice: (5.00).toFixed(2), // Example shipping cost
            totalPrice: (parseFloat(subtotal) + (subtotal * 0.1) + 5.00).toFixed(2), // Total calculation
        };

        dispatch(createOrder(orderData)); // Send order to backend

        navigate('/checkout');

    };

    // Handle removing an item from the cart
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id)); // Call the removeFromCart action with the product ID
    };

    // Handle quantity change
    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateCartQuantity({ id, quantity: newQuantity })); // Dispatch action to update quantity
    };

    useEffect(() => {
        if (error) {
            alert('Error creating order: ' + error);
        }
    }, [error]);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto my-8 px-4">
                <h1 className="text-3xl font-bold text-center">Shopping Cart</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <form className="mt-12 max-w-lg mx-auto" onSubmit={handleCheckout}>
                        <section aria-labelledby="cart-heading">
                            <Cart 
                                cartItems={cartItems} 
                                onRemoveItem={handleRemoveItem} // Pass the function here
                                onQuantityChange={handleQuantityChange} // Pass the quantity change handler
                            />
                        </section>

                        <section aria-labelledby="summary-heading" className="mt-16 bg-gray-50 p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-medium text-center">Order Summary</h2>
                            <dl className="mt-6 space-y-4">
                                <div className="flex justify-between border-b pb-2">
                                    <dt>Subtotal</dt>
                                    <dd>${subtotal}</dd>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <dt>Tax (10%)</dt>
                                    <dd>${(subtotal * 0.1).toFixed(2)}</dd>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <dt>Shipping</dt>
                                    <dd>$5.00</dd>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <dt>Total</dt>
                                    <dd>${(parseFloat(subtotal) + (subtotal * 0.1) + 5.00).toFixed(2)}</dd>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 py-3 text-white hover:bg-indigo-700 rounded-lg shadow"
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </dl>
                        </section>
                    </form>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
