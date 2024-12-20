interface ProductTranslations {
  [key: string]: {
    [key: string]: {
      title: string;
      description: string;
      category: string;
    };
  };
}

export const productTranslations: ProductTranslations = {
  '1': {
    en: {
      title: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
      category: 'Electronics'
    },
    es: {
      title: 'Auriculares Inalámbricos Premium',
      description: 'Auriculares inalámbricos de alta calidad con cancelación de ruido y sonido premium.',
      category: 'Electrónicos'
    }
  },
  '2': {
    en: {
      title: 'Smart Watch Series 5',
      description: 'Advanced smartwatch with health tracking, GPS, and cellular connectivity.',
      category: 'Electronics'
    },
    es: {
      title: 'Reloj Inteligente Serie 5',
      description: 'Reloj inteligente avanzado con seguimiento de salud, GPS y conectividad celular.',
      category: 'Electrónicos'
    }
  },
  '3': {
    en: {
      title: 'Professional Camera Kit',
      description: 'Professional-grade camera with multiple lenses and accessories.',
      category: 'Electronics'
    },
    es: {
      title: 'Kit de Cámara Profesional',
      description: 'Cámara de nivel profesional con múltiples lentes y accesorios.',
      category: 'Electrónicos'
    }
  },
  '4': {
    en: {
      title: 'Laptop Pro 16"',
      description: 'Powerful laptop with high-performance processor and dedicated graphics.',
      category: 'Electronics'
    },
    es: {
      title: 'Portátil Pro 16"',
      description: 'Portátil potente con procesador de alto rendimiento y gráficos dedicados.',
      category: 'Electrónicos'
    }
  },
  '5': {
    en: {
      title: 'Wireless Gaming Mouse',
      description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
      category: 'Electronics'
    },
    es: {
      title: 'Ratón Gaming Inalámbrico',
      description: 'Ratón gaming ergonómico con botones personalizables e iluminación RGB.',
      category: 'Electrónicos'
    }
  },
  '6': {
    en: {
      title: 'Ultra-Wide Monitor',
      description: '34-inch curved ultra-wide monitor perfect for productivity and gaming.',
      category: 'Electronics'
    },
    es: {
      title: 'Monitor Ultra Panorámico',
      description: 'Monitor curvo ultra panorámico de 34 pulgadas perfecto para productividad y gaming.',
      category: 'Electrónicos'
    }
  }
};