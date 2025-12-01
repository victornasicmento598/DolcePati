import React from 'react';
import { InstagramIcon } from './icons';
import { INSTAGRAM_URL } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#5A3A15] text-[#FDFBF7] pt-16 pb-8 mt-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    
                    {/* Coluna 1: Marca e Slogan */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                             {/* Logo simulada ou texto com estilo */}
                            <h3 className="font-display text-3xl font-bold text-[#EAA95A]">DolcePati</h3>
                        </div>
                        <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                            Adoçando vidas com amor e qualidade artesanal. Faça seu pedido e experimente o verdadeiro sabor da felicidade.
                        </p>
                    </div>

                    {/* Coluna 2: Contato */}
                    <div className="space-y-4">
                        <h4 className="font-display text-xl font-bold text-[#EAA95A]">Contato</h4>
                        <ul className="space-y-3 text-sm opacity-90">
                            <li className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5 text-[#EAA95A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Av. Família Gonçalves Carneiro, 441<br/>Porto Alegre, RS - 91920-250</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#EAA95A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>(51) 98138-5900</span>
                            </li>
                            <li className="flex items-center gap-2">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#EAA95A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>contato@dolcepati.com.br</span>
                            </li>
                        </ul>
                    </div>

                     {/* Coluna 3: Redes Sociais */}
                     <div className="space-y-4">
                        <h4 className="font-display text-xl font-bold text-[#EAA95A]">Siga-nos</h4>
                        <div className="flex gap-4">
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-[#6E4B1F] p-3 rounded-full hover:bg-[#EAA95A] hover:text-[#5A3A15] transition-all duration-300">
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-[#EAA95A]/20 pt-8 text-center text-xs opacity-60">
                    <p>&copy; {new Date().getFullYear()} DolcePati Confeitaria Artesanal. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};