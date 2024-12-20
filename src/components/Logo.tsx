import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="/logo circular rge.png" 
        alt="RGE Shop Logo" 
        className="h-12 w-12 object-contain"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '';
          // Show fallback icon if image fails to load
          e.currentTarget.parentElement?.appendChild(
            Object.assign(document.createElement('div'), {
              className: 'h-8 w-8 text-yellow-400',
              innerHTML: ShoppingBag().outerHTML
            })
          );
        }}
      />
    </div>
  );
}