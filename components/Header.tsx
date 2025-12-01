import React, { useState } from 'react';
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../constants';
import { InstagramIcon, WhatsAppIcon, MenuIcon, XIcon, ShoppingBagIcon } from './icons';

interface HeaderProps {
  sections: { id: string; title: string; }[];
  onNavigate: (sectionId: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
}


export const Header: React.FC<HeaderProps> = ({ sections, onNavigate, cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault(); // Impede o salto brusco do link
    if (sectionId === 'quem-sou-eu') {
       const element = document.getElementById(sectionId);
       if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
       }
    } else {
        onNavigate(sectionId); // Expande a seção (se for do catálogo)
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para a seção
    }
    setIsMenuOpen(false); // Fecha o menu móvel ao clicar
  };

  const navLinks = [
    <a
      key="quem-sou-eu"
      href="#quem-sou-eu"
      onClick={(e) => handleNavLinkClick(e, 'quem-sou-eu')}
      className="text-[#6E4B1F] hover:text-[#EAA95A] transition-colors py-2 text-center"
    >
      Quem Sou Eu
    </a>,
    ...sections.map(section => (
        <a
        key={section.id}
        href={`#${section.id}`}
        onClick={(e) => handleNavLinkClick(e, section.id)}
        className="text-[#6E4B1F] hover:text-[#EAA95A] transition-colors py-2 text-center"
        >
        {section.title.replace(/\s*\S+$/, '')} {/* Remove emoji para um link mais limpo */}
        </a>
    ))
  ];

  const whatsappMessage = encodeURIComponent("Olá DolcePati! Vim pelo site e gostaria de tirar uma dúvida.");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm animate-fade-in-down">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-display text-3xl font-bold text-[#6E4B1F]">
          DolcePati
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 font-semibold">
          {navLinks}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onCartClick}
            className="relative text-[#6E4B1F] hover:text-[#EAA95A] transition-colors"
            aria-label="Ver carrinho"
          >
            <ShoppingBagIcon className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span 
                className="absolute -top-2 -right-2 bg-[#6E4B1F] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white"
                aria-label={`${cartItemCount} itens no carrinho`}
              >
                {cartItemCount}
              </span>
            )}
          </button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E4B1F] hover:text-[#EAA95A] transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E4B1F] hover:text-[#25D366] transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
          
          {/* Botão do Menu Móvel */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#6E4B1F]">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Móvel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg absolute top-20 left-0 right-0 shadow-md">
            <nav className="flex flex-col items-center space-y-4 p-6 font-semibold">
                {navLinks}
            </nav>
        </div>
      )}
    </header>
  );
};