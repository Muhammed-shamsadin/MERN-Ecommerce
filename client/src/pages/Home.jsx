import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
// import { fetchProducts } from '../store/slices/productSlice';

const Home = () => {
    // const dispatch = useDispatch();
    // i need to know more about redux and (react -> maybe)
    // const { products, loading, error } = useSelector(state => state.products); 

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    
    return (
        <div>
            <Navbar />
            <HeroSection />
            {/* <div className="container mx-auto my-8">
                <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <ProductGrid products={products} />
            </div> */}
            <Footer />
        </div>
    );
};

export default Home;