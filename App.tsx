import React, { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { OrderSidebar } from './components/OrderSidebar';
import { InfoSection } from './components/InfoSection';
import { AboutSection } from './components/AboutSection';
import { PRODUCTS } from './constants';
import { ProductCategory, type OrderItem } from './types';
import { FilterInput } from './components/FilterInput';
import { CollapsibleSection } from './components/CollapsibleSection';
import { Footer } from './components/Footer';

const PEGUE_MONTE_FILTERS = [
    { label: 'Todos', value: 'ALL' },
    { label: 'Infantil Menino', value: ProductCategory.PEGUE_MONTE_MENINO },
    { label: 'Infantil Menina', value: ProductCategory.PEGUE_MONTE_MENINA },
    { label: 'Adulto Feminino', value: ProductCategory.PEGUE_MONTE_ADULTO_FEMININO },
    { label: 'Adulto Masculino', value: ProductCategory.PEGUE_MONTE_ADULTO_MASCULINO },
    { label: 'Chá de Bebê', value: ProductCategory.PEGUE_MONTE_CHA_BEBE },
    { label: 'Outros', value: ProductCategory.PEGUE_MONTE_OUTROS },
];

const App: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Estado inicial vazio para que todas as seções (inclusive Doces) comecem fechadas
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [filterTerm, setFilterTerm] = useState('');
  const [pegueMonteFilter, setPegueMonteFilter] = useState<string>('ALL');

  const handleToggleSection = (sectionId: string) => {
    setOpenSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handleNavigateToSection = (sectionId: string) => {
    // Garante que a seção alvo esteja aberta para a rolagem
    setOpenSections(prev => ({ ...prev, [sectionId]: true }));
  };

  const handleAddToCart = useCallback((item: Omit<OrderItem, 'id'>) => {
    setOrderItems((prevItems) => {
        const hasCustomizations = item.customizations && Object.keys(item.customizations).length > 0;
        const hasObservation = item.observation && item.observation.trim() !== '';

        if (hasCustomizations || hasObservation) {
            return [...prevItems, { ...item, id: Date.now().toString() }];
        }

        const existingItemIndex = prevItems.findIndex(
            (i) => i.name === item.name &&
            (!i.customizations || Object.keys(i.customizations).length === 0) &&
            (!i.observation || i.observation.trim() === '')
        );

        if (existingItemIndex > -1) {
            const newItems = [...prevItems];
            newItems[existingItemIndex].quantity += item.quantity;
            return newItems;
        } else {
            return [...prevItems, { ...item, id: Date.now().toString() }];
        }
    });
  }, []);

  const handleUpdateQuantity = useCallback((itemId: string, newQuantity: number) => {
    setOrderItems((prevItems) => {
      if (newQuantity <= 0) {
        return prevItems.filter((item) => item.id !== itemId);
      }
      return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  }, []);
  
  const handleClearOrder = useCallback(() => {
    setOrderItems([]);
  }, []);

  const totalItems = useMemo(() => {
    return orderItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [orderItems]);

  const CATALOG_SECTIONS = useMemo(() => [
    { 
        id: 'doces', 
        title: 'Doces 🍬', 
        categories: [ProductCategory.BRIGADEIRO_TRADICIONAL, ProductCategory.BRIGADEIRO_GOURMET] 
    },
    { 
        id: 'bolos', 
        title: 'Bolos e Tortas 🎂', 
        categories: [ProductCategory.BOLO_DECORADO_REDONDO, ProductCategory.BOLO_DECORADO_RETANGULAR, ProductCategory.BENTO_CAKE, ProductCategory.ROCAMBOLE, ProductCategory.BOLO_CASEIRO] 
    },
    { 
        id: 'salgados', 
        title: 'Salgados 🥟', 
        categories: [ProductCategory.SALGADO_FRITO, ProductCategory.SALGADO_ASSADO, ProductCategory.SALGADO_ESPECIAL] 
    },
    { 
        id: 'pegue-e-monte', 
        title: 'Pegue e Monte 🎈', 
        categories: [ProductCategory.PEGUE_MONTE_MENINO, ProductCategory.PEGUE_MONTE_MENINA, ProductCategory.PEGUE_MONTE_ADULTO_FEMININO, ProductCategory.PEGUE_MONTE_ADULTO_MASCULINO, ProductCategory.PEGUE_MONTE_CHA_BEBE, ProductCategory.PEGUE_MONTE_OUTROS]
    },
  ], []);

  const filteredProducts = useMemo(() => {
      if (!filterTerm) return PRODUCTS;
      return PRODUCTS.filter(p => p.name.toLowerCase().includes(filterTerm.toLowerCase()));
  }, [filterTerm]);

  const productsBySection = useMemo(() => {
      return CATALOG_SECTIONS.reduce((acc, section) => {
        acc[section.id] = {
          ...section,
          products: filteredProducts.filter(p => section.categories.includes(p.category)),
        };
        return acc;
      }, {} as Record<string, { id: string; title: string; categories: ProductCategory[]; products: typeof PRODUCTS }>);
  }, [filteredProducts, CATALOG_SECTIONS]);


  return (
    <div className="min-h-screen bg-white text-[#5A3A15] flex flex-col">
      <Header 
        sections={CATALOG_SECTIONS} 
        onNavigate={handleNavigateToSection} 
        cartItemCount={totalItems}
        onCartClick={() => setIsSidebarOpen(true)}
      />
      <main className="container mx-auto px-4 py-8 pt-24 md:pt-32 animate-fade-in flex-grow">
        <Hero />
        <AboutSection />
        <InfoSection />
        <div id="catalog" className="pt-16 animate-fade-in-up delay-500">
          <FilterInput value={filterTerm} onChange={setFilterTerm} />
          
          <div className="space-y-8">
            {CATALOG_SECTIONS.map((section) => {
              const sectionData = productsBySection[section.id];
              
              if (sectionData.products.length === 0) return null;

              // Lógica de filtro específica para Pegue e Monte
              let displayedProducts = sectionData.products;
              if (section.id === 'pegue-e-monte' && pegueMonteFilter !== 'ALL') {
                  displayedProducts = displayedProducts.filter(p => p.category === pegueMonteFilter);
              }
              
              if (displayedProducts.length === 0 && section.id === 'pegue-e-monte') {
                  // Se filtramos tudo no pegue e monte, mostramos mensagem ou nada?
                  // Vamos mostrar uma mensagem simples dentro da seção
              } else if (displayedProducts.length === 0) {
                  return null;
              }

              return (
                <CollapsibleSection
                  key={section.id}
                  title={section.title}
                  id={section.id}
                  isOpen={!!openSections[section.id]}
                  onToggle={() => handleToggleSection(section.id)}
                >
                  {/* Filtros para Pegue e Monte */}
                  {section.id === 'pegue-e-monte' && (
                      <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                          {PEGUE_MONTE_FILTERS.map(filter => (
                              <button
                                  key={filter.value}
                                  onClick={() => setPegueMonteFilter(filter.value)}
                                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                      pegueMonteFilter === filter.value
                                          ? 'bg-[#EAA95A] text-white shadow-md transform scale-105'
                                          : 'bg-white border border-[#EAA95A] text-[#6E4B1F] hover:bg-[#EAA95A]/10'
                                  }`}
                              >
                                  {filter.label}
                              </button>
                          ))}
                      </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product) => (
                        <ProductCard
                            key={product.name}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                        ))
                    ) : (
                        <p className="text-[#5A3A15] col-span-full text-center py-4">Nenhum item encontrado nesta categoria.</p>
                    )}
                  </div>
                </CollapsibleSection>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <OrderSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        items={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearOrder={handleClearOrder}
      />
    </div>
  );
};

export default App;