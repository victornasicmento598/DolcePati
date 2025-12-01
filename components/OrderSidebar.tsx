import React, { useMemo, useState, useCallback } from 'react';
import { type OrderItem } from '../types';
import { XIcon, MinusIcon, PlusIcon, WhatsAppIcon, ShoppingCartIcon } from './icons';
import { WHATSAPP_NUMBER, PRODUCTS } from '../constants';

interface OrderSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onClearOrder: () => void;
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
};

// Define os passos do checkout
type CheckoutStep = 'cart' | 'details' | 'summary';

export const OrderSidebar: React.FC<OrderSidebarProps> = ({ isOpen, onClose, items, onUpdateQuantity, onClearOrder }) => {
  const [userName, setUserName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [step, setStep] = useState<CheckoutStep>('cart');

  const minDate = useMemo(() => {
    const today = new Date();
    today.setDate(today.getDate() + 5);
    return today.toISOString().split('T')[0];
  }, []);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0);
  }, [items]);

  const generateWhatsAppMessage = useCallback(() => {
    let message = `Olá DolcePati! Gostaria de fazer um pedido:\n\n`;
    if(userName) message += `*Nome:* ${userName}\n`;
    if(eventDate) {
        const formattedDate = new Date(eventDate + 'T00:00:00').toLocaleDateString('pt-BR', {timeZone: 'UTC'});
        message += `*Data do Evento:* ${formattedDate}\n`;
    }
    message += `\n*Meu Pedido:*\n`;

    items.forEach(item => {
        message += `\n- *${item.quantity}x ${item.name}* - ${formatCurrency(item.totalPrice * item.quantity)}\n`;
        const product = PRODUCTS.find(p => p.name === item.name);
        if (item.customizations) {
            Object.keys(item.customizations).forEach(groupId => {
                const value = item.customizations![groupId];
                const group = product?.customizationGroups?.find(g => g.id === groupId);
                const groupName = group ? group.name.replace(/ *\([^)]*\) */g, "").replace(/^[0-9]+\. /, '') : groupId;
                
                let displayValue = '';
                if(Array.isArray(value) && value.length > 0) {
                    displayValue = value.join(', ');
                } else if (!Array.isArray(value) && value) {
                    displayValue = value;
                }

                if (displayValue) {
                    message += `  - ${groupName}: ${displayValue}\n`;
                }
            });
        }
        if (item.observation) {
            message += `  - Observação: ${item.observation}\n`;
        }
    });
    message += `\n----------------------------------\n`;
    message += `*Total do Pedido:* ${formatCurrency(subtotal)}\n\n`;
    message += `Aguardo sua confirmação!`;
    return encodeURIComponent(message);
  }, [items, userName, eventDate, subtotal]);

  const handleSendOrder = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${message}`, '_blank');
    // Reset state after sending
    resetAndClose();
    onClearOrder();
  };

  const resetAndClose = () => {
    onClose();
    setStep('cart');
    setUserName('');
    setEventDate('');
  };

  const handleQuantityChange = (item: OrderItem, amount: number) => {
    onUpdateQuantity(item.id, item.quantity + amount);
  }

  const goToDetails = () => {
      setStep('details');
  }

  const goToSummary = () => {
      if (!userName) {
        alert("Por favor, preencha seu nome.");
        return;
      }
      if (!eventDate) {
        alert("Por favor, selecione a data do evento.");
        return;
      }
      setStep('summary');
  }

  const goBack = () => {
      if (step === 'summary') setStep('details');
      else if (step === 'details') setStep('cart');
  }

  // Componente auxiliar para renderizar a lista de customizações de um item
  const renderItemCustomizations = (item: OrderItem) => (
    <div className="text-sm text-[#5A3A15] mt-1 space-y-0.5">
        {item.customizations && Object.entries(item.customizations).map(([groupId, value]) => {
            const product = PRODUCTS.find(p => p.name === item.name);
            const group = product?.customizationGroups?.find(g => g.id === groupId);

            let displayValue: string | null = null;
            if (Array.isArray(value) && value.length > 0) {
                displayValue = value.join(', ');
            } else if (typeof value === 'string' && value) {
                displayValue = value;
            }

            if (!displayValue || !group) return null;

            const groupNameClean = group.name.replace(/ *\([^)]*\) */g, "").replace(/^[0-9]+\. /, '');

            return (
                <div key={groupId}>
                    <span className="font-semibold">{groupNameClean}: </span>
                    <span>{displayValue}</span>
                </div>
            );
        })}
        {item.observation && (
            <div className="flex mt-1">
                <span className="font-semibold mr-1">Obs:</span>
                <span className="flex-1 text-xs italic">{item.observation}</span>
            </div>
        )}
    </div>
  );

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={resetAndClose}
      ></div>

      {/* Sidebar Content */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-gray-200 shadow-2xl z-50 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-[#FDFBF7]">
            <h2 className="font-display text-3xl font-bold text-[#6E4B1F]">
                {step === 'cart' && 'Meu Kit'}
                {step === 'details' && 'Seus Dados'}
                {step === 'summary' && 'Revisar Pedido'}
            </h2>
            <button onClick={resetAndClose} className="p-2 rounded-full hover:bg-black/10 transition-colors">
              <XIcon className="w-6 h-6 text-[#6E4B1F]" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <ShoppingCartIcon className="w-24 h-24 text-[#EAA95A]/50 mb-4" />
              <h3 className="text-xl font-bold text-[#6E4B1F]">Seu kit está vazio</h3>
              <p className="text-[#5A3A15] mt-2">Adicione produtos do nosso catálogo para começar.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              
              {/* STEP 1: CART LIST */}
              {step === 'cart' && (
                items.map(item => (
                  <div key={item.id} className="flex items-start space-x-4 border-b border-gray-100 pb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-grow">
                      <p className="font-bold text-[#6E4B1F]">{item.name}</p>
                      
                      {renderItemCustomizations(item)}

                       <div className="flex items-center mt-2">
                            <button onClick={() => handleQuantityChange(item, -1)} disabled={item.unit !== 'unidade'} className="p-1 rounded-full bg-[#EAA95A]/30 text-[#6E4B1F] hover:bg-[#EAA95A]/50 transition disabled:opacity-50 disabled:cursor-not-allowed"><MinusIcon className="w-3 h-3"/></button>
                            <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item, 1)} disabled={item.unit !== 'unidade'} className="p-1 rounded-full bg-[#EAA95A]/30 text-[#6E4B1F] hover:bg-[#EAA95A]/50 transition disabled:opacity-50 disabled:cursor-not-allowed"><PlusIcon className="w-3 h-3" /></button>
                             <button onClick={() => onUpdateQuantity(item.id, 0)} className="ml-4 text-xs text-red-500 hover:underline">Remover</button>
                        </div>
                    </div>
                    <p className="font-bold text-[#5A3A15]">{formatCurrency(item.totalPrice * item.quantity)}</p>
                  </div>
                ))
              )}

              {/* STEP 2: DETAILS FORM */}
              {step === 'details' && (
                <div className="space-y-6 animate-fade-in">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <p className="text-sm text-blue-800">
                            Preencha seus dados para que possamos identificar seu pedido e agendar a produção.
                        </p>
                    </div>
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium text-[#6E4B1F]">Seu Nome (Obrigatório)</label>
                        <input 
                            type="text" 
                            id="userName" 
                            value={userName} 
                            onChange={e => setUserName(e.target.value)} 
                            placeholder="Ex: Maria da Silva" 
                            required 
                            className="mt-1 block w-full bg-white border border-[#EAA95A]/50 rounded-md py-3 px-4 text-[#5A3A15] focus:outline-none focus:ring-2 focus:ring-[#EAA95A]" 
                        />
                    </div>
                    <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-[#6E4B1F]">Data do Evento (Obrigatório)</label>
                        <input 
                            type="date" 
                            id="eventDate" 
                            value={eventDate} 
                            onChange={e => setEventDate(e.target.value)}
                            min={minDate}
                            required 
                            className="mt-1 block w-full bg-white border border-[#EAA95A]/50 rounded-md py-3 px-4 text-[#5A3A15] focus:outline-none focus:ring-2 focus:ring-[#EAA95A]" 
                        />
                         <p className="text-xs text-gray-500 mt-1">Pedimos 5 dias de antecedência.</p>
                    </div>
                </div>
              )}

              {/* STEP 3: SUMMARY */}
              {step === 'summary' && (
                  <div className="space-y-6 animate-fade-in">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <h4 className="text-[#6E4B1F] font-bold mb-2 uppercase text-xs tracking-wider">Dados do Cliente</h4>
                          <p className="text-[#5A3A15]"><span className="font-semibold">Nome:</span> {userName}</p>
                          <p className="text-[#5A3A15]"><span className="font-semibold">Data do Evento:</span> {new Date(eventDate + 'T00:00:00').toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</p>
                      </div>

                      <div>
                          <h4 className="text-[#6E4B1F] font-bold mb-2 uppercase text-xs tracking-wider">Itens do Pedido</h4>
                          <div className="space-y-4">
                              {items.map((item, idx) => (
                                  <div key={`${item.id}-${idx}`} className="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                      <div className="flex-1 pr-2">
                                          <p className="font-bold text-[#6E4B1F]">{item.quantity}x {item.name}</p>
                                          {renderItemCustomizations(item)}
                                      </div>
                                      <p className="font-bold text-[#5A3A15] whitespace-nowrap">{formatCurrency(item.totalPrice * item.quantity)}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                      
                      <div className="bg-[#EAA95A]/10 p-4 rounded-xl text-center">
                          <p className="text-sm text-[#5A3A15]">Total a Pagar</p>
                          <p className="text-2xl font-bold text-[#6E4B1F]">{formatCurrency(subtotal)}</p>
                      </div>

                      <div className="text-xs text-center text-gray-500">
                          Ao clicar em enviar, você será redirecionado para o WhatsApp para combinar o pagamento.
                      </div>
                  </div>
              )}

            </div>
          )}

          {items.length > 0 && (
            <div className="p-6 border-t border-gray-200 mt-auto bg-gray-50 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
              {step !== 'summary' && (
                  <div className="flex justify-between items-center text-xl font-bold mb-4">
                    <span className="text-[#5A3A15]">Total Estimado</span>
                    <span className="text-[#6E4B1F]">{formatCurrency(subtotal)}</span>
                  </div>
              )}

              <div className="flex gap-3">
                  {/* Botão de Voltar (Não aparece no primeiro passo) */}
                  {step !== 'cart' && (
                      <button 
                        onClick={goBack} 
                        className="flex-1 bg-white border border-gray-300 text-[#5A3A15] font-bold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                          Voltar
                      </button>
                  )}

                  {/* Botões de Ação Principal */}
                  {step === 'cart' && (
                    <button onClick={goToDetails} className="flex-[2] bg-[#EAA95A] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#D69245] transition-transform transform hover:scale-[1.02] shadow-md">
                        Continuar
                    </button>
                  )}

                  {step === 'details' && (
                    <button onClick={goToSummary} className="flex-[2] bg-[#EAA95A] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#D69245] transition-transform transform hover:scale-[1.02] shadow-md">
                        Revisar Pedido
                    </button>
                  )}

                  {step === 'summary' && (
                    <button onClick={handleSendOrder} className="flex-[2] bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-md">
                        <WhatsAppIcon className="w-5 h-5" /> Enviar Pedido
                    </button>
                  )}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};