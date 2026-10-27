import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Agujas de Acupuntura estériles (Caja con 100)',
    category: 'acupuntura',
    price: 180,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    description: 'Agujas de acero quirúrgico con mango de plata/cobre, grado médico y guía individual.',
    specs: ['Calibre: 0.25 x 25mm', 'Estériles por óxido de etileno', 'Blíster individual']
  },
  {
    id: '2',
    name: 'Modelo de Oreja Anatómica para Acupuntura',
    category: 'auriculoterapia',
    price: 250,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    description: 'Modelo de silicón flexible con puntos auriculares marcados e instructivo detallado.',
    specs: ['Material: Silicón suave', 'Tamaño real (aprox. 15cm)', 'Ideal para enseñanza y clínica']
  },
  {
    id: '3',
    name: 'Kit de Parches de Vaccaria (Auriculoterapia)',
    category: 'auriculoterapia',
    price: 120,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    description: 'Parches adhesivos color carnation con semilla de Vaccaria natural.',
    specs: ['Contiene 600 piezas', 'Adhesivo hipoalergénico', 'Alta durabilidad en piel']
  },
  {
    id: '4',
    name: 'Banda Elástica de Resistencia Media (Fisioterapia)',
    category: 'rehabilitacion',
    price: 150,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
    description: 'Banda de látex ideal para ejercicios de fortalecimiento muscular y recuperación articular.',
    specs: ['Resistencia Media', 'Largo: 1.5 metros', 'Flexible y antideslizante']
  },
  {
    id: '5',
    name: 'Set de Ventosas de Vidrio con Bomba de Succión',
    category: 'ventosas',
    price: 650,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    description: 'Juego profesional para terapia de vacío y liberación miofascial.',
    specs: ['12 copas de diferentes tamaños', 'Pistola de vacío ergonómica', 'Válvula de seguridad']
  }
];