
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { type OrderItem, type Product, type CustomizationGroup, type CustomizationOption } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: Omit<OrderItem, 'id'>) => void;
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity] = useState(1);
  const [customizations, setCustomizations] = useState<Record<string, any>>({});
  const [observation, setObservation] = useState('');
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let basePrice = product.price;
    let finalPrice = basePrice;
    let percentageIncrease = 0;

    Object.keys(customizations).forEach(groupId => {
        const group = product.customizationGroups?.find(g => g.id === groupId);
        if (!group) return;

        const selected = customizations[groupId];
        
        const processOption = (optionName: string) => {
            const option = group.options.find(o => o.name === optionName);
            if (!option) return;
            if (option.price) finalPrice += option.price;
            if (option.pricePercentage) percentageIncrease += option.pricePercentage;
        };

        if (Array.isArray(selected)) { // Checkbox
            selected.forEach(processOption);
        } else if (selected) { // Radio or Select
            processOption(selected);
        }
    });
    
    // Apply percentage-based price changes to the final price after all flat additions
    if (percentageIncrease > 0) {
        finalPrice += finalPrice * percentageIncrease;
    }

    setTotalPrice(finalPrice);
  }, [customizations, product]);

  const handleCustomizationChange = (group: CustomizationGroup, option: CustomizationOption, checked?: boolean) => {
    setError(null);
    setCustomizations(prev => {
        const newCustomizations = { ...prev };
        const currentSelection = newCustomizations[group.id];

        if (group.type === 'radio' || group.type === 'select') {
            newCustomizations[group.id] = option.name;
        } else { // checkbox
            const selectionSet = new Set(currentSelection || []);
            if (checked) {
                if (group.maxChoices && selectionSet.size >= group.maxChoices) {
                    setError(`Você pode escolher no máximo ${group.maxChoices} opções.`);
                    return prev;
                }
                selectionSet.add(option.name);
            } else {
                selectionSet.delete(option.name);
            }
            newCustomizations[group.id] = Array.from(selectionSet);
        }
        return newCustomizations;
    });
  };

  const handleAddToCartClick = useCallback(() => {
    if (product.customizationGroups) {
        for (const group of product.customizationGroups) {
            const selection = customizations[group.id];
            
            if (group.minChoices && group.minChoices > 0) {
                if (!selection || (Array.isArray(selection) && selection.length < group.minChoices)) {
                    setError(`Escolha pelo menos ${group.minChoices} opção(ões) para "${group.name.replace(/ *\([^)]*\) */g, "")}".`);
                    return;
                }
            }
        }
    }

    setError(null);
    onAddToCart({
      name: product.name,
      image: product.image,
      quantity,
      unit: product.unit,
      totalPrice,
      customizations,
      observation,
    });
  }, [product, quantity, totalPrice, customizations, observation, onAddToCart]);


  const priceLabel = useMemo(() => formatCurrency(totalPrice), [totalPrice]);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-[1.02] hover:shadow-xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-2xl font-bold text-[#6E4B1F]">{product.name}</h3>
        <p className="text-sm text-[#5A3A15] mt-2 flex-grow">{product.description}</p>
        
        <div className="mt-4">
            <span className="text-2xl font-bold text-[#6E4B1F]">{priceLabel}</span>
            <span className="text-sm text-[#5A3A15] ml-1">/ {product.unit}</span>
        </div>

        <div className="space-y-4 mt-4">
            {product.customizationGroups?.map(group => (
                <div key={group.id}>
                    <label className="block text-md font-semibold text-[#6E4B1F] mb-2">{group.name}</label>
                     {group.description && <p className="text-xs text-gray-500 mb-2">{group.description}</p>}
                    <div className="space-y-2">
                        {group.options.map(option => (
                            <div key={option.name} className="flex items-center">
                                <input 
                                    type={group.type} 
                                    id={`${product.name}-${group.id}-${option.name}`} 
                                    name={`${product.name}-${group.id}`}
                                    checked={
                                        group.type === 'checkbox' 
                                        ? customizations[group.id]?.includes(option.name)
                                        : customizations[group.id] === option.name
                                    }
                                    onChange={(e) => handleCustomizationChange(group, option, e.target.checked)}
                                    className="h-4 w-4 text-[#EAA95A] focus:ring-[#EAA95A] border-gray-300"
                                />
                                <label htmlFor={`${product.name}-${group.id}-${option.name}`} className="ml-3 block text-sm text-[#5A3A15]">
                                    {option.name} 
                                    {option.price ? ` (+ ${formatCurrency(option.price)})` : ''}
                                    {option.pricePercentage ? ` (+ ${option.pricePercentage * 100}%)` : ''}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {product.observationLabel && (
                 <div>
                    <label htmlFor={`observation-input-${product.name}`} className="block text-md font-semibold text-[#6E4B1F] mb-1">
                        {product.observationLabel}
                    </label>
                    <textarea
                        id={`observation-input-${product.name}`}
                        value={observation}
                        onChange={(e) => setObservation(e.target.value)}
                        rows={3}
                        className="w-full bg-white border border-[#EAA95A]/50 rounded-md py-2 px-3 text-[#5A3A15] focus:outline-none focus:ring-2 focus:ring-[#EAA95A]"
                        placeholder="Ex: Tema da festa, cores, etc..."
                    />
                </div>
            )}
        </div>
        
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        
        <button
          onClick={handleAddToCartClick}
          className="mt-6 w-full bg-[#EAA95A] text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-80 transition-transform transform hover:scale-105 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Adicionar ao Kit
        </button>
      </div>
    </div>
  );
};
