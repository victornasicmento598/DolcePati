
import * as React from 'react';

export const Hero: React.FC = () => {
  
  const scrollToCatalog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-[500px] bg-[#FDFBF7] overflow-hidden rounded-3xl mt-4 border border-gray-100/50 shadow-sm animate-fade-in-up flex items-center justify-center">
        {/* Marca d'água "DolcePati" - Posicionamento Absoluto atrás do texto */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-display text-[5rem] md:text-[9rem] font-bold text-[#EAA95A]/10 select-none pointer-events-none leading-none z-0 whitespace-nowrap">
            DolcePati
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16">
            
            {/* Coluna de Texto (Centralizada) */}
            <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
                
                {/* Linha decorativa e Bem-vindo */}
                <div className="flex items-center gap-4 mb-6 animate-fade-in-up delay-100">
                    <div className="w-12 h-[1px] bg-[#6E4B1F]"></div>
                    <span className="text-[#EAA95A] tracking-[0.2em] text-xs font-bold uppercase">Bem-vindo à DolcePati</span>
                    <div className="w-12 h-[1px] bg-[#6E4B1F]"></div>
                </div>

                <h1 className="font-display text-5xl md:text-7xl font-bold text-[#6E4B1F] leading-tight mb-8 animate-fade-in-up delay-200">
                    Sua Festa,<br />
                    Nosso Sabor
                </h1>

                <p className="text-[#5A3A15] text-lg leading-relaxed max-w-2xl mb-10 animate-fade-in-up delay-300">
                    Delícias artesanais feitas com amor para tornar seus momentos inesquecíveis. 
                    Bolos, doces e salgados com o toque especial que você merece.
                </p>

                <a
                    href="#catalog"
                    onClick={scrollToCatalog}
                    className="group flex items-center gap-2 bg-[#C69C6D] text-white px-10 py-4 rounded-full font-bold shadow-md hover:bg-[#B58B5C] transition-all transform hover:scale-105 animate-fade-in-up delay-500"
                >
                    <span>Ver Catálogo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </div>

        </div>
    </div>
  );
};
