import { Product } from '../types/product';
import { productTranslations } from './productTranslations';

export const getProducts = (language: string): Product[] => [
  {
    id: '1',
    ...productTranslations['1'][language],
    price: 199.99,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  },
  {
    id: '2',
    ...productTranslations['2'][language],
    price: 299.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
  },
  {
    id: '3',
    ...productTranslations['3'][language],
    price: 1299.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
  },
  {
    id: '4',
    ...productTranslations['4'][language],
    price: 1999.99,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
  },
  {
    id: '5',
    ...productTranslations['5'][language],
    price: 79.99,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
  },
  {
    id: '6',
    ...productTranslations['6'][language],
    price: 699.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
  }
];