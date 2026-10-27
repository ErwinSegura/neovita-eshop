'client';

import { Product } from '@/types';
import { X, CheckCircle, Plus } from 'lucide-react';
import Image from 'next/image';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl overflow-hidden relative flex flex-col md:flex-row">
        
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Imagen */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Información */}
        <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-lg">
              {product.category}
            </span>
            <h2 className="text-xl font-bold text-slate-800 mt-3">{product.name}</h2>
            <p className="text-slate-600 text-sm mt-2">{product.description}</p>

            <div className="mt-5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Especificaciones:</h4>
              <ul className="space-y-1.5">
                {product.specs.map((spec, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Precio</span>
              <span className="text-xl font-bold text-emerald-700">${product.price} <span className="text-xs font-normal text-slate-500">MXN</span></span>
            </div>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Agregar al carrito</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}