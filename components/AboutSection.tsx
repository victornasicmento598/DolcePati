import * as React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="quem-sou-eu" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#EAA95A]/10 rounded-3xl my-8 overflow-hidden relative animate-fade-in-up delay-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Imagem */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Elementos decorativos */}
              <div className="absolute inset-0 bg-[#EAA95A] rounded-full opacity-20 blur-2xl transform translate-x-4 translate-y-4"></div>
              <div className="absolute -inset-4 border-2 border-[#EAA95A]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              
              <img 
                src="https://images.pexels.com/photos/7525131/pexels-photo-7525131.jpeg" 
                alt="Patrícia Oliveira Confeiteira" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[#EAA95A] font-bold text-sm tracking-widest uppercase mb-2 block">
              Quem Sou Eu
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#6E4B1F] mb-6">
              Olá, sou Patrícia Oliveira
            </h2>
            <div className="space-y-4 text-[#5A3A15] text-lg leading-relaxed">
              <p>
                Bem-vindo à <strong className="text-[#6E4B1F]">DolcePati</strong>! Sou uma confeiteira apaixonada por transformar açúcar e afeto em memórias inesquecíveis.
              </p>
              <p>
                Com anos de experiência na arte da confeitaria artesanal, dedico-me a criar bolos, doces e salgados que não apenas encantam pelo visual, mas conquistam pelo sabor caseiro e autêntico.
              </p>
              <p>
                Cada pedido é preparado com ingredientes selecionados e muito carinho, seja para uma grande festa ou para aquele café da tarde especial. Aqui, a sua celebração é a nossa inspiração.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <div className="flex items-center gap-2 text-[#6E4B1F] font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[#EAA95A]"></div>
                  <span>Confeitaria Artesanal</span>
               </div>
               <div className="flex items-center gap-2 text-[#6E4B1F] font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[#EAA95A]"></div>
                  <span>Ingredientes Selecionados</span>
               </div>
               <div className="flex items-center gap-2 text-[#6E4B1F] font-semibold">
                  <div className="w-2 h-2 rounded-full bg-[#EAA95A]"></div>
                  <span>Feito com Amor</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};