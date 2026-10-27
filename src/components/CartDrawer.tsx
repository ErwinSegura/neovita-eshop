'client';

import { CartItem } from '@/types';
import { X, Trash2, Send, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const [nombreCliente, setNombreCliente] = useState('');
  const [direccionCliente, setDireccionCliente] = useState('');

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const enviarPedidoWhatsApp = () => {
    const telefonoMamá = "5215500000000"; // Reemplaza aquí con el número de WhatsApp de tu mamá

    let mensaje = `¡Hola! Me gustaría realizar el siguiente pedido:\n\n🛒 *Resumen del Pedido:*\n`;

    cart.forEach((item) => {
      mensaje += `• ${item.quantity}x ${item.name} ($${item.price * item.quantity} MXN)\n`;
    });

    mensaje += `\n💰 *Total estimado:* $${total} MXN\n\n`;
    mensaje += `👤 *Datos de entrega:*\n`;
    mensaje += `• Nombre: ${nombreCliente || 'No especificado'}\n`;
    mensaje += `• Dirección / Notas: ${direccionCliente || 'No especificado'}\n\n`;
    mensaje += `¿Me confirman disponibilidad y datos para el pago?`;

    const mensajeEncoded = encodeURIComponent(mensaje);
    const url = `https://wa.me/${telefonoMamá}?text=${mensajeEncoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-600" />
              <h2 className="font-bold text-slate-800 text-lg">Tu Carrito de Pedido</h2>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista de productos en carrito */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-slate-600 font-medium">Tu carrito está vacío</p>
                <p className="text-slate-400 text-xs mt-1">Agrega productos para armar tu pedido</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 items-center">
                  <div className="relative w-16 h-16 rounded-xl bg-slate-200 overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-slate-800 truncate">{item.name}</h4>
                    <p className="text-emerald-700 font-bold text-sm mt-0.5">${item.price * item.quantity} <span className="text-xs font-normal text-slate-500">MXN</span></p>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 font-bold">-</button>
                        <span className="px-3 text-xs font-bold text-slate-700">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 font-bold">+</button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} className="text-rose-500 hover:text-rose-700 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Formulario y Footer de confirmación */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  value={nombreCliente}
                  onChange={(e) => setNombreCliente(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                />
                <input
                  type="text"
                  placeholder="Ciudad o referencias para entrega"
                  value={direccionCliente}
                  onChange={(e) => setDireccionCliente(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-medium text-slate-500">Total Estimado:</span>
                <span className="text-xl font-bold text-emerald-700">${total} <span className="text-xs font-normal text-slate-500">MXN</span></span>
              </div>

              <button
                onClick={enviarPedidoWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Pedido por WhatsApp</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}