'v client';

import { Product } from '@/types';
import { Plus, Eye } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onSelectProduct }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
      
      {/* Imagen del producto */}
      <div 
        className="relative h-56 bg-slate-100 overflow-hidden cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg uppercase tracking-wider">
          {product.category}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-semibold text-slate-800 text-base line-clamp-2 hover:text-emerald-600 cursor-pointer transition-colors"
          >
            {product.name}
          </h3>
          <p className="text-slate-500 text-sm mt-1.5 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Precio</span>
            <span className="text-lg font-bold text-emerald-700">${product.price} <span className="text-xs font-normal text-slate-500">MXN</span></span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onSelectProduct(product)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
              title="Ver detalles"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all active:scale-95 flex items-center gap-1.5 px-3.5 text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              <span>Agregar</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}