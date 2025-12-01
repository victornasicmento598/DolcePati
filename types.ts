
export enum ProductCategory {
  BRIGADEIRO_TRADICIONAL = 'BRIGADEIRO_TRADICIONAL',
  BRIGADEIRO_GOURMET = 'BRIGADEIRO_GOURMET',
  BOLO_DECORADO_REDONDO = 'BOLO_DECORADO_REDONDO',
  BOLO_DECORADO_RETANGULAR = 'BOLO_DECORADO_RETANGULAR',
  BENTO_CAKE = 'BENTO_CAKE',
  ROCAMBOLE = 'ROCAMBOLE',
  BOLO_CASEIRO = 'BOLO_CASEIRO',
  SALGADO_FRITO = 'SALGADO_FRITO',
  SALGADO_ASSADO = 'SALGADO_ASSADO',
  SALGADO_ESPECIAL = 'SALGADO_ESPECIAL',
  PEGUE_MONTE_MENINO = 'PEGUE_MONTE_MENINO',
  PEGUE_MONTE_MENINA = 'PEGUE_MONTE_MENINA',
  PEGUE_MONTE_ADULTO_FEMININO = 'PEGUE_MONTE_ADULTO_FEMININO',
  PEGUE_MONTE_ADULTO_MASCULINO = 'PEGUE_MONTE_ADULTO_MASCULINO',
  PEGUE_MONTE_CHA_BEBE = 'PEGUE_MONTE_CHA_BEBE',
  PEGUE_MONTE_OUTROS = 'PEGUE_MONTE_OUTROS',
}

export interface Flavor {
  id: string;
  name: string;
}

export interface CustomizationOption {
  name: string;
  price?: number;
  pricePercentage?: number;
}

export interface CustomizationGroup {
  id: string;
  name: string;
  type: 'radio' | 'checkbox' | 'select';
  options: CustomizationOption[];
  minChoices?: number;
  maxChoices?: number;
  description?: string;
}

export interface Product {
  name: string;
  description: string;
  price: number;
  unit: string;
  category: ProductCategory;
  image: string;
  customizationGroups?: CustomizationGroup[];
  observationLabel?: string;
}

export interface OrderItem {
  id: string; // Unique ID for this cart item instance
  name: string;
  image: string;
  quantity: number;
  unit: string;
  totalPrice: number; // Final price for one unit of this item with customizations
  customizations?: Record<string, any>; // Store selected options, e.g., { Massa: 'Chocolate', Adicionais: ['Morango'] }
  observation?: string; // Store text input for observations
}