import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import SearchBar from './SearchBar';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';

export default function Header() {
  const { state } = useCart();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <Menu className="h-6 w-6 cursor-pointer md:hidden" />
            <Logo />
            <span 
              onClick={() => navigate('/')}
              className="text-2xl font-bold cursor-pointer"
            >
              RGE SHOP
            </span>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <SearchBar className="w-full" />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            <LanguageToggle />
            
            <div className="hidden md:flex flex-col">
              <span className="text-sm">{t('welcome')}</span>
              <span className="font-bold">{t('account')}</span>
            </div>

            <div className="hidden md:flex flex-col">
              <span className="text-sm">{t('your')}</span>
              <span className="font-bold">{t('orders')}</span>
            </div>

            <div 
              onClick={() => navigate('/checkout')}
              className="relative cursor-pointer"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-yellow-400 text-black rounded-full flex items-center justify-center text-xs font-bold">
                {state.items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}