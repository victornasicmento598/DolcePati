
import React from 'react';
import { ChevronDownIcon } from './icons';

interface CollapsibleSectionProps {
  title: string;
  id?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, id, isOpen, onToggle, children }) => {
  return (
    <div id={id} className="mb-8 border border-gray-200 rounded-3xl overflow-hidden shadow-sm transition-shadow hover:shadow-md bg-white">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#6E4B1F] text-left">{title}</h2>
        <ChevronDownIcon
          className={`w-8 h-8 text-[#EAA95A] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="p-6 bg-gray-50/50 border-t border-gray-100">
                 {children}
            </div>
        </div>
      </div>
    </div>
  );
};
