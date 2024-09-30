import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/slices/productSlice';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-8">
        {loading && <p>Loading product details...</p>}
        {error && <p>Error: {error}</p>}
        {product ? <ProductDetail product={product} /> : <p>No product found</p>}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
