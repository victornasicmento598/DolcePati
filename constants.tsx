import { type Product, ProductCategory } from './types';

export const WHATSAPP_NUMBER = "5551981385900";
export const INSTAGRAM_URL = "https://www.instagram.com/dolcepati_";

const BOLO_DECORADO_CUSTOMIZATIONS = {
    MASSA: {
        id: 'massa', name: '1. Escolha a Massa', type: 'radio' as 'radio', minChoices: 1,
        options: [
            { name: 'Branca', price: 0 },
            { name: 'Chocolate', pricePercentage: 0.10 }, // 10%
        ]
    },
    RECHEIO: {
        id: 'recheio', name: '2. Escolha o Recheio', type: 'checkbox' as 'checkbox', minChoices: 1, maxChoices: 2,
        description: 'Escolha até 2 sabores.',
        options: [
            { name: 'Brigadeiro branco' }, { name: 'Brigadeiro de chocolate' }, { name: 'Brigadeiro branco com coco' },
            { name: 'Brigadeiro branco com amendoim' }, { name: 'Brigadeiro preto com amendoim' },
            { name: 'Brigadeiro preto com coco' }, { name: 'Mousse de ninho' }, { name: 'Mousse de chocolate meio amargo' },
            { name: 'Mousse de doce de leite' }, { name: 'Mousse de doce de leite com amendoim' },
            { name: 'Mousse de doce de leite com coco' }, { name: 'Creme de nata' }, { name: 'Creme de nata de chocolate' },
            { name: '4 Leites' }
        ]
    },
    ADICIONAIS_RECHEIO: {
        id: 'adicionais_recheio', name: '3. Adicionais (Recheio)', type: 'checkbox' as 'checkbox',
        options: [
            { name: 'Morango (250g)', price: 20 },
            { name: 'Abacaxi (250g)', price: 10 },
            { name: 'Bombom (100g)', price: 15 },
            { name: 'Choc. Meio Amargo (100g)', price: 15 },
            { name: 'Choc. Branco (100g)', price: 15 },
            { name: 'Nozes (100g)', price: 15 },
            { name: 'Nutella (100g)', price: 15 },
        ]
    },
    PERSONALIZACAO: {
        id: 'personalizacao', name: '4. Adicionais (Personalização)', type: 'checkbox' as 'checkbox',
        options: [
            { name: 'Topo em papel glossy', price: 10 },
            { name: 'Pó brilho', price: 15 },
            { name: 'Base para bolo de andar', price: 30 },
            { name: 'Aluguel de tabuleiro 6mm', price: 40 },
        ]
    }
};

const BRIGADEIRO_TRADICIONAL_FLAVORS = [
    { name: 'Branco' }, { name: 'Chocolate' }, { name: 'Paçoca' },
    { name: 'Coco' }, { name: 'Morango' }, { name: 'Doce de Leite' },
    { name: 'Sensação' }, { name: 'Prestígio' }, { name: 'Casadinho' },
    { name: 'Café' }, { name: 'Cajuzinho' },
].map(o => ({...o}));

const BRIGADEIRO_GOURMET_FLAVORS = [
    { name: 'Ninho com Nutella' }, { name: 'Morango com Nutella' }, { name: 'Stikadinho' },
    { name: 'Churros com doce de leite' }, { name: 'Mms' }, { name: 'Olho de sogra' },
    { name: 'Kinder' }, { name: 'Nozes' }, { name: 'Ferrero' },
    { name: 'Oreo' }, { name: 'Chocolate branco' }, { name: 'Meio amargo' },
    { name: 'Charge' }, { name: 'Pistache' },
].map(o => ({...o}));

const SALGADOS_FRITOS_FLAVORS = [
    { name: 'Coxinha' }, { name: 'Risoles de frango' }, { name: 'Risoles de carne' },
    { name: 'Risoles de presunto e queijo' }, { name: 'Croquete de carne' }, { name: 'Bolinha de calabresa' },
    { name: 'Pastel de carne e ovo' }, { name: 'Enroladinho de salsicha' }, { name: 'Bolinha de queijo' },
    { name: 'Churros de doce de leite' }
].map(o => ({...o}));

const SALGADOS_ASSADOS_FLAVORS = [
    { name: 'Empada de frango c/ requeijão' }, { name: 'Empada de calabresa c/ cheddar' },
    { name: 'Pastel assado de carne' }, { name: 'Pastel assado de frango' },
    { name: 'Cachorrinho de salsicha' }, { name: 'Folhado de salsicha' }, { name: 'Folhado de goiabada' },
    { name: 'Folhado de frango' }, { name: 'Folhado de chocolate' }, { name: 'Quiche de palmito' },
    { name: 'Quiche de 4 queijos' }, { name: 'Quiche de tomate seco e rúcula' },
    { name: 'Quiche de bacon' }, { name: 'Quiche de brócolis' }, { name: 'Quiche de alho poró' }
].map(o => ({...o}));

const SALGADOS_ESPECIAIS_FLAVORS = [
    { name: 'Panelinha doce de ovos com presunto e fios de ovos' },
    { name: 'Mini pizza de frango' }, { name: 'Mini pizza de calabresa' }, { name: 'Mini pizza de 4 queijos' }
].map(o => ({...o}));

const SALGADOS_ADICIONAIS = {
    id: 'adicionais_salgados', name: 'Adicionais', type: 'checkbox' as 'checkbox',
    options: [{ name: 'Embalagem com papelzinhos', price: 10 }]
};

const PEGUE_MONTE_PRODUCTS: Product[] = [
    // INFANTIL MENINO
    { name: 'Homem Aranha', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Safári', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Minecraft', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Poderoso Chefinho', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Fazendinha', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Vingadores', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Rainbow Friends', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Patrulha Canina', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Jurassic Park', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Super Mário', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Sonic', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Dinossauro Baby', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Bany Finn', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Futebol', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Hot Wheels', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    { name: 'Bluey e Bingo', category: ProductCategory.PEGUE_MONTE_MENINO, price: 100 },
    // INFANTIL MENINA
    { name: 'Stitch e Angel', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'Barbie', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'Ladybug', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'Mundo Doce', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'Moana', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'Jardim Encantado', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'Mulher Maravilha (Infantil)', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'Masha e o Urso', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'A Princesa e o Sapo', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    { name: 'Stitch', category: ProductCategory.PEGUE_MONTE_MENINA, price: 100 },
    // ADULTO FEMININO
    { name: 'Glitter Rosa', category: ProductCategory.PEGUE_MONTE_ADULTO_FEMININO, price: 100 },
    { name: 'Floral', category: ProductCategory.PEGUE_MONTE_ADULTO_FEMININO, price: 100 },
    { name: 'Boteco Feminino', category: ProductCategory.PEGUE_MONTE_ADULTO_FEMININO, price: 100 },
    { name: 'Mulher Maravilha (Adulto)', category: ProductCategory.PEGUE_MONTE_ADULTO_FEMININO, price: 100 },
    { name: 'Neutro Marrom', category: ProductCategory.PEGUE_MONTE_ADULTO_FEMININO, price: 100 },
    { name: 'Tardezinha', category: ProductCategory.PEGUE_MONTE_ADULTO_FEMININO, price: 100 },
    // ADULTO MASCULINO
    { name: 'Grêmio', category: ProductCategory.PEGUE_MONTE_ADULTO_MASCULINO, price: 100 },
    { name: 'Inter', category: ProductCategory.PEGUE_MONTE_ADULTO_MASCULINO, price: 100 },
    { name: 'Neutro Preto', category: ProductCategory.PEGUE_MONTE_ADULTO_MASCULINO, price: 100 },
    { name: 'Boteco', category: ProductCategory.PEGUE_MONTE_ADULTO_MASCULINO, price: 100 },
    // CHÁ DE BEBÊ & REVELAÇÃO
    { name: 'Chá Revelação', category: ProductCategory.PEGUE_MONTE_CHA_BEBE, price: 100 },
    { name: 'Revelação Urso', category: ProductCategory.PEGUE_MONTE_CHA_BEBE, price: 100 },
    { name: 'Revelação Elefantinho', category: ProductCategory.PEGUE_MONTE_CHA_BEBE, price: 100 },
    { name: 'Chá de Bebê Branco', category: ProductCategory.PEGUE_MONTE_CHA_BEBE, price: 100 },
    { name: 'Chá de Bebê', category: ProductCategory.PEGUE_MONTE_CHA_BEBE, price: 100 },
    { name: 'Elefantinho', category: ProductCategory.PEGUE_MONTE_CHA_BEBE, price: 100 },
    // OUTROS EVENTOS
    { name: '15 Anos', category: ProductCategory.PEGUE_MONTE_OUTROS, price: 100 },
    { name: 'Tema 15 Anos', category: ProductCategory.PEGUE_MONTE_OUTROS, price: 100 },
    { name: 'Chá de Casa Nova', category: ProductCategory.PEGUE_MONTE_OUTROS, price: 100 },
].map((item) => ({
    ...item,
    description: `Decoração prática para sua festa! Aluguel do tema ${item.name}.`,
    unit: 'kit',
    image: `https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400&auto=format&fit=crop`,
}));

export const PRODUCTS: Product[] = [
    // Brigadeiros
    {
        name: 'Brigadeiros Tradicionais (50un)',
        description: 'Escolha os sabores do seu pacote.',
        price: 65.00,
        unit: 'pacote',
        category: ProductCategory.BRIGADEIRO_TRADICIONAL,
        image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{
            id: 'sabores_tradicionais', name: 'Escolha os Sabores', type: 'checkbox',
            minChoices: 1, maxChoices: 2, options: BRIGADEIRO_TRADICIONAL_FLAVORS,
            description: 'Escolha até 2 sabores.'
        }],
        observationLabel: 'Alguma observação?'
    },
    {
        name: 'Brigadeiros Tradicionais (100un)',
        description: 'Escolha os sabores do seu pacote.',
        price: 120.00,
        unit: 'pacote',
        category: ProductCategory.BRIGADEIRO_TRADICIONAL,
        image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{
            id: 'sabores_tradicionais', name: 'Escolha os Sabores', type: 'checkbox',
            minChoices: 1, maxChoices: 4, options: BRIGADEIRO_TRADICIONAL_FLAVORS,
            description: 'Escolha até 4 sabores.'
        }],
        observationLabel: 'Alguma observação?'
    },
    {
        name: 'Brigadeiros Gourmet (50un)',
        description: 'Escolha os sabores do seu pacote.',
        price: 90.00,
        unit: 'pacote',
        category: ProductCategory.BRIGADEIRO_GOURMET,
        image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{
            id: 'sabores_gourmet', name: 'Escolha os Sabores', type: 'checkbox',
            minChoices: 1, maxChoices: 2, options: BRIGADEIRO_GOURMET_FLAVORS,
            description: 'Escolha até 2 sabores.'
        }],
        observationLabel: 'Alguma observação?'
    },
    {
        name: 'Brigadeiros Gourmet (100un)',
        description: 'Escolha os sabores do seu pacote.',
        price: 170.00,
        unit: 'pacote',
        category: ProductCategory.BRIGADEIRO_GOURMET,
        image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{
            id: 'sabores_gourmet', name: 'Escolha os Sabores', type: 'checkbox',
            minChoices: 1, maxChoices: 4, options: BRIGADEIRO_GOURMET_FLAVORS,
            description: 'Escolha até 4 sabores.'
        }],
        observationLabel: 'Alguma observação?'
    },
    // Bolos Redondos
    ...[
        { name: 'Bolo Redondo 5 fatias (10cm)', price: 50 },
        { name: 'Bolo Redondo 12 fatias (16cm)', price: 95 },
        { name: 'Bolo Redondo 20 fatias (21cm)', price: 140 },
        { name: 'Bolo Redondo 30 fatias (26cm)', price: 180 },
        { name: 'Bolo Redondo 40 fatias (30cm)', price: 220 },
        { name: 'Bolo Redondo 60 fatias (38cm)', price: 290 },
    ].map(bolo => ({
        ...bolo,
        description: 'Bolo decorado personalizado. Escolha massa, recheios e adicionais.',
        unit: 'unidade',
        category: ProductCategory.BOLO_DECORADO_REDONDO,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [BOLO_DECORADO_CUSTOMIZATIONS.MASSA, BOLO_DECORADO_CUSTOMIZATIONS.RECHEIO, BOLO_DECORADO_CUSTOMIZATIONS.ADICIONAIS_RECHEIO, BOLO_DECORADO_CUSTOMIZATIONS.PERSONALIZACAO],
        observationLabel: 'Tema da festa, cores, etc (opcional):'
    })),
    // Bolos Retangulares
    ...[
        { name: 'Bolo Retangular 40 fatias (30x23cm)', price: 240 },
        { name: 'Bolo Retangular 60 fatias (38x28cm)', price: 310 },
        { name: 'Bolo Retangular 70 fatias (42x32cm)', price: 340, note: 'Sem personalização, somente decorado' },
        { name: 'Bolo Retangular 80 fatias (46x32cm)', price: 360, note: 'Sem personalização, somente decorado' },
        { name: 'Bolo Retangular 100 fatias (50x35cm)', price: 460, note: 'Sem personalização, somente decorado' },
    ].map(bolo => ({
        ...bolo,
        description: `Bolo decorado personalizado. ${bolo.note || 'Escolha massa, recheios e adicionais.'}`,
        unit: 'unidade',
        category: ProductCategory.BOLO_DECORADO_RETANGULAR,
        image: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: bolo.note ? [BOLO_DECORADO_CUSTOMIZATIONS.MASSA, BOLO_DECORADO_CUSTOMIZATIONS.RECHEIO, BOLO_DECORADO_CUSTOMIZATIONS.ADICIONAIS_RECHEIO] : [BOLO_DECORADO_CUSTOMIZATIONS.MASSA, BOLO_DECORADO_CUSTOMIZATIONS.RECHEIO, BOLO_DECORADO_CUSTOMIZATIONS.ADICIONAIS_RECHEIO, BOLO_DECORADO_CUSTOMIZATIONS.PERSONALIZACAO],
        observationLabel: 'Tema da festa, cores, etc (opcional):'
    })),
     // Bentô Cake
    {
        name: 'Bentô Cake',
        description: 'Serve até 2 pessoas. Personalize sua massa e recheio.',
        price: 40.00,
        unit: 'unidade',
        category: ProductCategory.BENTO_CAKE,
        image: 'https://images.unsplash.com/photo-1563729768640-381d77b8314e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [
            { id: 'massa_bento', name: 'Massa', type: 'radio', minChoices: 1, options: [{ name: 'Branca' }, { name: 'Chocolate' }] },
            { id: 'recheio_bento', name: 'Recheio', type: 'radio', minChoices: 1, options: [{ name: 'Brigadeiro branco' }, { name: 'Brigadeiro de chocolate' }, { name: 'Doce de leite' }] }
        ],
        observationLabel: 'Desenho/frase no topo (opcional):'
    },
    // Rocamboles
    {
        name: 'Rocambole',
        description: 'Serve entre 8 e 12 fatias. Escolha seu sabor favorito.',
        price: 100.00,
        unit: 'unidade',
        category: ProductCategory.ROCAMBOLE,
        image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{
            id: 'sabor_rocambole', name: 'Sabor', type: 'radio', minChoices: 1,
            options: [
                { name: 'Chocolate' }, { name: 'Morango' }, { name: 'Abacaxi' }, 
                { name: 'Bombom' }, { name: 'Pêssego' }, { name: 'Prestígio' }
            ]
        }],
        observationLabel: 'Alguma observação?'
    },
    // Bolos Caseiros
    {
        name: 'Bolo Caseiro',
        description: 'Serve entre 6 a 8 pessoas. Escolha o sabor e adicione uma cobertura se desejar.',
        price: 25.00,
        unit: 'unidade',
        category: ProductCategory.BOLO_CASEIRO,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [
            {
                id: 'sabor_caseiro', name: 'Escolha o Sabor', type: 'radio', minChoices: 1,
                options: [
                    { name: 'Ninho' }, { name: 'Cenoura' }, { name: 'Laranja' }, { name: 'Churros' }, 
                    { name: 'Fubá com erva doce' }, { name: 'Milho' }, { name: 'Maracujá' }, { name: 'Chocolate' }, 
                    { name: 'Paçoca' }, { name: 'Limão' }, { name: 'Coco' }, { name: 'Banana' }, 
                    { name: 'Maçã com canela' }, { name: 'Ameixa' }
                ]
            },
            {
                id: 'cobertura_caseiro', name: 'Adicionar Cobertura?', type: 'checkbox',
                options: [
                    { name: 'Brigadeiro de Ninho', price: 10 }, { name: 'Brigadeiro Branco', price: 10 },
                    { name: 'Brigadeiro de Chocolate', price: 10 }, { name: 'Goiabada', price: 10 },
                    { name: 'Doce de Leite', price: 10 }, { name: 'Nutella', price: 20 },
                ]
            }
        ],
        observationLabel: 'Alguma observação?'
    },
    // Salgados
    {
        name: 'Salgados Fritos (50un)',
        description: 'Pedido mínimo: 20 unidades por sabor.',
        price: 50.00,
        unit: 'pacote',
        category: ProductCategory.SALGADO_FRITO,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{ id: 'sabores_fritos', name: 'Escolha os Sabores', type: 'checkbox', maxChoices: 2, options: SALGADOS_FRITOS_FLAVORS, description: 'Escolha até 2 sabores.' }, SALGADOS_ADICIONAIS],
        observationLabel: 'Alguma observação?'
    },
    {
        name: 'Salgados Fritos (100un)',
        description: 'Pedido mínimo: 20 unidades por sabor.',
        price: 100.00,
        unit: 'pacote',
        category: ProductCategory.SALGADO_FRITO,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{ id: 'sabores_fritos', name: 'Escolha os Sabores', type: 'checkbox', maxChoices: 5, options: SALGADOS_FRITOS_FLAVORS, description: 'Escolha até 5 sabores.' }, SALGADOS_ADICIONAIS],
        observationLabel: 'Alguma observação?'
    },
    {
        name: 'Salgados Assados (50un)',
        description: 'Pedido mínimo: 20 unidades por sabor.',
        price: 65.00,
        unit: 'pacote',
        category: ProductCategory.SALGADO_ASSADO,
        image: 'https://images.unsplash.com/photo-1619860226372-466d62892973?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{ id: 'sabores_assados', name: 'Escolha os Sabores', type: 'checkbox', maxChoices: 2, options: SALGADOS_ASSADOS_FLAVORS, description: 'Escolha até 2 sabores.' }, SALGADOS_ADICIONAIS],
        observationLabel: 'Alguma observação?'
    },
     {
        name: 'Salgados Assados (100un)',
        description: 'Pedido mínimo: 20 unidades por sabor.',
        price: 120.00,
        unit: 'pacote',
        category: ProductCategory.SALGADO_ASSADO,
        image: 'https://images.unsplash.com/photo-1619860226372-466d62892973?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{ id: 'sabores_assados', name: 'Escolha os Sabores', type: 'checkbox', maxChoices: 5, options: SALGADOS_ASSADOS_FLAVORS, description: 'Escolha até 5 sabores.' }, SALGADOS_ADICIONAIS],
        observationLabel: 'Alguma observação?'
    },
    {
        name: 'Salgados Especiais (50un)',
        description: 'Pedido mínimo: 20 unidades por sabor.',
        price: 80.00,
        unit: 'pacote',
        category: ProductCategory.SALGADO_ESPECIAL,
        image: 'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{ id: 'sabores_especiais', name: 'Escolha os Sabores', type: 'checkbox', maxChoices: 2, options: SALGADOS_ESPECIAIS_FLAVORS, description: 'Escolha até 2 sabores.' }, SALGADOS_ADICIONAIS],
        observationLabel: 'Alguma observação?'
    },
    {
        name: 'Salgados Especiais (100un)',
        description: 'Pedido mínimo: 20 unidades por sabor.',
        price: 150.00,
        unit: 'pacote',
        category: ProductCategory.SALGADO_ESPECIAL,
        image: 'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3',
        customizationGroups: [{ id: 'sabores_especiais', name: 'Escolha os Sabores', type: 'checkbox', maxChoices: 5, options: SALGADOS_ESPECIAIS_FLAVORS, description: 'Escolha até 5 sabores.' }, SALGADOS_ADICIONAIS],
        observationLabel: 'Alguma observação?'
    },
    ...PEGUE_MONTE_PRODUCTS,
];