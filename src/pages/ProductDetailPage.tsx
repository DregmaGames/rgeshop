import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { useLanguage } from '../context/LanguageContext';
import { getProducts } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const products = getProducts(language);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">{t('productNotFound')}</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          {t('backToProducts')}
        </button>
      </div>
    );
  }

  return <ProductDetail product={product} onBack={() => navigate('/')} />;
}