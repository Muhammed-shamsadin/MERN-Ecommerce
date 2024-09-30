import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Uncomment this
import { fetchProducts } from '../store/slices/productSlice'; // Ensure this path is correct
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid'; // Uncomment this
import Footer from '../components/Footer';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product); // Updated to 'product' to match the slice name

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto my-8">
                <h1 className="text-3xl font-bold mb-4">All Products</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <ProductGrid products={products} />
            </div>
            <Footer />
        </div>
    );
};

export default ProductList;
