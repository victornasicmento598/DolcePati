import * as React from 'react';
import { PixIcon, CreditCardIcon, BanknoteIcon, SmartphoneIcon, CopyIcon } from './icons';

const InfoItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white/50 rounded-xl p-5 border border-[#EAA95A]/20">
        <h4 className="text-xl font-bold text-[#6E4B1F] mb-3 flex items-center gap-2">
            {title}
        </h4>
        <div className="space-y-2 text-[#5A3A15] text-sm leading-relaxed">{children}</div>
    </div>
);

const PaymentMethodCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; highlight?: boolean }> = ({ icon, title, children, highlight }) => (
    <div className={`p-4 rounded-xl border ${highlight ? 'border-[#EAA95A] bg-[#EAA95A]/5' : 'border-gray-100 bg-gray-50'} flex items-start gap-4 transition-all hover:shadow-md`}>
        <div className={`p-2 rounded-lg ${highlight ? 'bg-[#EAA95A] text-white' : 'bg-white text-[#6E4B1F] shadow-sm'}`}>
            {icon}
        </div>
        <div className="flex-1">
            <h5 className="font-bold text-[#6E4B1F] mb-1">{title}</h5>
            <div className="text-sm text-[#5A3A15]">{children}</div>
        </div>
    </div>
);

const StepCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center p-4 relative z-10">
        <div className="w-12 h-12 rounded-full bg-[#EAA95A] text-white flex items-center justify-center text-xl font-bold shadow-lg mb-4">
            {number}
        </div>
        <h4 className="font-bold text-[#6E4B1F] text-lg mb-2">{title}</h4>
        <p className="text-sm text-[#5A3A15]">{description}</p>
    </div>
);

export const InfoSection: React.FC = () => {
    
    const handleCopyPix = () => {
        const pixKey = "35437226000139";
        navigator.clipboard.writeText(pixKey).then(() => {
            alert("Chave Pix copiada!");
        });
    };

  return (
    <div className="my-16 p-8 bg-white border border-gray-100 rounded-3xl shadow-lg relative overflow-hidden animate-fade-in-up delay-500">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAA95A]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <h2 className="font-display text-4xl font-bold text-[#6E4B1F] mb-12 text-center relative z-10">
        Informações Gerais e Políticas
      </h2>

      {/* Como Fazer o Pedido - Passo a Passo */}
      <div className="mb-16 relative">
          <h3 className="text-center font-display text-2xl font-bold text-[#6E4B1F] mb-8">
              Como fazer seu pedido?
          </h3>
          
          {/* Linha conectora (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-[#EAA95A]/30 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StepCard 
                  number="1" 
                  title="Escolha seus Itens" 
                  description="Navegue pelo nosso catálogo de bolos, doces, salgados e kits de festa." 
              />
              <StepCard 
                  number="2" 
                  title="Personalize" 
                  description="Selecione os sabores, recheios e quantidades desejadas." 
              />
              <StepCard 
                  number="3" 
                  title="Revise o Kit" 
                  description="Vá até o carrinho, confira seu pedido e preencha seus dados." 
              />
              <StepCard 
                  number="4" 
                  title="Envie e Pague" 
                  description="O pedido vai direto para o WhatsApp. Combine o pagamento e aguarde a confirmação!" 
              />
          </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 relative z-10 mb-8 border-t border-gray-100 pt-8">
        <InfoItem title="📋 Sobre Pedidos e Pagamentos">
            <p><strong className="text-[#6E4B1F]">Prazo:</strong> Todos os pedidos devem ser feitos com no mínimo 5 dias de antecedência.</p>
            <p><strong className="text-[#6E4B1F]">Pagamento:</strong> Deve ser realizado o valor total no ato do pedido. Caso não seja feito a tempo, o pedido não será produzido.</p>
            <p><strong className="text-[#6E4B1F]">Produção:</strong> Inicia-se 2 dias antes da data de entrega, após envio do comprovante.</p>
            <p><strong className="text-[#6E4B1F]">Taxas:</strong> Pagamentos via link ou cartão (débito/crédito) incluem juros da máquina. A taxa varia conforme o parcelamento.</p>
            <p><strong className="text-[#6E4B1F]">Cancelamento:</strong> Em caso de cancelamento neste período, somente 50% do valor pago será restituído.</p>
        </InfoItem>

        <InfoItem title="🚚 Sobre Retiradas e Entrega">
            <p>📍 Somente retiradas com data e horário combinado.</p>
            <p>🛵 O cliente pode solicitar Uber Flash para entrega.</p>
            <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-200 rounded-r-md">
                <p className="text-xs text-red-800"><strong>Atenção:</strong> É de suma importância o cuidado no transporte. Não nos responsabilizamos por danos ocorridos após a retirada do ateliê.</p>
            </div>
        </InfoItem>
      </div>

      {/* Seção de Pagamentos Reestruturada */}
      <div className="relative z-10">
        <h3 className="font-display text-2xl font-bold text-[#6E4B1F] mb-6 text-center border-t border-gray-100 pt-8">
            Formas de Pagamento
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PIX */}
            <div className="md:col-span-2">
                <PaymentMethodCard 
                    icon={<PixIcon className="w-6 h-6" />} 
                    title="Pix (Transferência Instantânea)" 
                    highlight={true}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <code className="bg-white px-3 py-1 rounded border border-[#EAA95A]/30 text-[#6E4B1F] font-mono select-all">
                            35437226000139
                        </code>
                        <button 
                            onClick={handleCopyPix}
                            className="text-xs flex items-center gap-1 text-[#EAA95A] hover:text-[#6E4B1F] font-semibold transition-colors"
                        >
                            <CopyIcon className="w-4 h-4" /> Copiar
                        </button>
                    </div>
                    <p className="mt-1 text-xs text-[#5A3A15]/80">Nubank - Patricia Oliveira</p>
                </PaymentMethodCard>
            </div>

            {/* PicPay */}
            <PaymentMethodCard 
                icon={<SmartphoneIcon className="w-6 h-6" />} 
                title="PicPay"
            >
                <p className="font-medium">@dolcepati</p>
            </PaymentMethodCard>

            {/* Cartão */}
            <PaymentMethodCard 
                icon={<CreditCardIcon className="w-6 h-6" />} 
                title="Cartão de Crédito"
            >
                <p>Link enviado para pagamento.</p>
                <p className="text-xs text-gray-500 mt-1">*Sujeito a taxas da máquina</p>
            </PaymentMethodCard>

            {/* Dinheiro */}
            <PaymentMethodCard 
                icon={<BanknoteIcon className="w-6 h-6" />} 
                title="Dinheiro"
            >
                <p>Pagamento em espécie na retirada.</p>
            </PaymentMethodCard>
        </div>
      </div>
    </div>
  );
};