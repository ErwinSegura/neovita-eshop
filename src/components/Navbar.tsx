'use client';

import { ShoppingBag, MessageCircle, Stethoscope } from 'lucide-react';
import { CartItem } from '@/types';

interface NavbarProps {
  cart: CartItem[];
  setIsCartOpen: (isOpen: boolean) => void;
}

export default function Navbar({ cart, setIsCartOpen }: NavbarProps) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const whatsappNumber = "5215545848936"; // Reemplaza luego con el número real

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logotipo / Nombre */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-800 tracking-tight">NeoVita</h1>
            <p className="text-xs text-emerald-600 font-medium">Insumos Profesionales</p>
          </div>
        </div>

        {/* Acciones (Carrito y WhatsApp directo) */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola,%20tengo%20una%20duda%20sobre%20los%20productos%20de%20rehabilitación.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-200 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100/60 font-medium text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Dudas por WhatsApp</span>
          </a>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}