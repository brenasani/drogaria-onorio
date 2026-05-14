const categories = [
  {
    id: "all",
    label: "Top ofertas",
    icon: "discount",
    tone: "deal",
    art: "offer",
    image: "assets/category-top-offers-illustration.svg",
    products: ["assets/products/benegrip.webp", "assets/products/nivea.jpg"],
    badge: "%",
    photoOnly: true,
    query: "oferta",
    routeKey: "top-ofertas",
  },
  {
    id: "Medicamentos",
    label: "Medicamentos",
    icon: "pill",
    tone: "medicine",
    art: "cold",
    image: "assets/category-medicines-illustration.svg",
    products: ["assets/products/dorflex.webp", "assets/products/tylenol-2.jpg"],
    photoOnly: true,
    routeKey: "medicamentos",
  },
  {
    id: "Suplementos",
    label: "Vida saudável",
    icon: "bottle",
    tone: "wellness",
    art: "wellness",
    image: "assets/category-wellness-real.jpg",
    photoOnly: true,
    routeKey: "vida-saudavel",
  },
  {
    id: "Mamãe e bebê",
    label: "Mamãe e bebê",
    icon: "baby",
    tone: "baby",
    art: "baby",
    image: "assets/category-mom-baby-real.jpg",
    photoOnly: true,
    routeKey: "mamae-bebe",
  },
  {
    id: "Cosméticos",
    label: "Beleza",
    icon: "tube",
    tone: "beauty",
    art: "beauty",
    image: "assets/category-beauty.jpg",
    products: ["assets/products/nivea.jpg", "assets/products/protetor-solar.jpg"],
    photoOnly: true,
    routeKey: "beleza",
  },
  {
    id: "Perfumaria",
    label: "Cabelo",
    icon: "shampoo",
    tone: "hair",
    art: "hair",
    image: "assets/category-hair-real.jpg",
    photoOnly: true,
    routeKey: "cabelo",
  },
  {
    id: "Conveniência",
    label: "Higiene pessoal",
    icon: "sparkle",
    tone: "hygiene",
    art: "oral",
    image: "assets/category-hygiene-v2.jpg",
    photoOnly: true,
    routeKey: "higiene-pessoal",
  },
  {
    id: "Pet",
    label: "Pet",
    icon: "heart",
    tone: "pet",
    art: "pet",
    image: "assets/category-pet-v2.jpg",
    sceneIcon: "heart",
    photoOnly: true,
    routeKey: "pet",
  },
  {
    id: "all",
    label: "Serviços",
    icon: "vaccine",
    tone: "services",
    art: "services",
    image: "assets/category-services-real.jpg",
    photoOnly: true,
    scrollTarget: "health-title",
    routeKey: "servicos",
  },
];

const products = [
  {
    id: "dorflex",
    name: "Dorflex",
    detail: "36 comprimidos",
    category: "Medicamentos",
    price: 24.9,
    color: "#dceff8",
    ink: "#0b7eaa",
    round: false,
    image: "assets/products/dorflex.webp",
    tag: "Oferta",
    description: "Analgésico e relaxante muscular para compra rápida no balcão digital.",
    caution: "Medicamentos devem ser usados com orientação responsável. A venda pode depender de disponibilidade e análise da farmácia.",
    stock: "Disponível hoje",
  },
  {
    id: "tylenol",
    name: "Tylenol",
    detail: "500mg c/ 20",
    category: "Medicamentos",
    price: 19.9,
    color: "#d83a28",
    ink: "#ffffff",
    round: false,
    image: "assets/products/tylenol-2.jpg",
    tag: "Mais vendido",
    description: "Opção conhecida para dor e febre, exibida aqui como item demonstrativo do catálogo.",
    caution: "Confira contraindicações e orientação farmacêutica antes de usar qualquer medicamento.",
    stock: "Disponível hoje",
  },
  {
    id: "benegrip",
    name: "Benegrip",
    detail: "20 comprimidos",
    category: "Medicamentos",
    price: 16.9,
    color: "#ff8f1c",
    ink: "#194f38",
    round: false,
    image: "assets/products/benegrip.webp",
    tag: "Oferta",
    description: "Produto de cuidado para sintomas gripais, com retirada ou entrega conforme disponibilidade.",
    caution: "A indicação correta depende do cliente e do histórico de saúde. A farmácia confirma antes de finalizar.",
    stock: "Poucas unidades",
  },
  {
    id: "nivea",
    name: "Nivea Creme",
    detail: "Lata 56g",
    category: "Cosméticos",
    price: 15.9,
    color: "#183f95",
    ink: "#ffffff",
    round: true,
    image: "assets/products/nivea.jpg",
    tag: "Cuidado diário",
    description: "Creme para cuidado diário da pele, prático para levar na bolsa ou deixar em casa.",
    caution: "Produto sujeito à disponibilidade de estoque e variação de apresentação.",
    stock: "Disponível hoje",
  },
  {
    id: "vitamina-c",
    name: "Vitamina C",
    detail: "60 cápsulas",
    category: "Suplementos",
    price: 29.9,
    color: "#39896a",
    ink: "#ffffff",
    round: false,
    image: "assets/products/vitamina-c.webp",
    tag: "Bem-estar",
    description: "Suplemento para rotina de bem-estar, com atendimento para orientar a melhor escolha.",
    caution: "Suplementos não substituem alimentação equilibrada nem orientação profissional quando necessária.",
    stock: "Disponível hoje",
  },
  {
    id: "agua",
    name: "Água Crystal",
    detail: "500ml",
    category: "Conveniência",
    price: 3.5,
    color: "#cfe9f7",
    ink: "#237499",
    round: false,
    image: "assets/products/agua-crystal-500ml.jpg",
    tag: "Prático",
    description: "Água Crystal 500ml sem gás, linha da Coca-Cola, para completar o pedido junto com medicamentos e cuidados pessoais.",
    caution: "Preço e disponibilidade podem variar por unidade.",
    stock: "Disponível hoje",
  },
  {
    id: "protetor",
    name: "Protetor solar",
    detail: "FPS 50",
    category: "Cosméticos",
    price: 42.9,
    color: "#ffe4b8",
    ink: "#9d5515",
    round: false,
    image: "assets/products/protetor-solar.jpg",
    tag: "Essencial",
    description: "Proteção solar FPS 50 para rotina de cuidado diário. As cores disponíveis pertencem ao mesmo modelo e mesmo fator.",
    caution: "Confira tipo de pele, modo de uso e disponibilidade antes de concluir.",
    stock: "Disponível hoje",
    variantKind: "Cor",
    variantHeading: "Escolha a cor",
    variantSummaryLabel: "Cores",
    variantActionLabel: "Escolher cor",
    variantDescription: "Todas as opções abaixo são do mesmo modelo e FPS 50; muda apenas a cor escolhida.",
    variants: [
      {
        id: "protetor-sem-cor",
        label: "Sem cor",
        detail: "Gel Cream Wet Skin FPS 50 250ml",
        price: 42.9,
        stock: "Disponível hoje",
        swatch: "#f6dcc0",
      },
      {
        id: "protetor-clara",
        label: "Clara",
        detail: "Gel Cream Color FPS 50 250ml",
        price: 44.9,
        stock: "Disponível hoje",
        swatch: "#edc19c",
      },
      {
        id: "protetor-media",
        label: "Média",
        detail: "Gel Cream Color FPS 50 250ml",
        price: 44.9,
        stock: "Disponível hoje",
        swatch: "#c98b5d",
      },
      {
        id: "protetor-morena",
        label: "Morena",
        detail: "Gel Cream Color FPS 50 250ml",
        price: 44.9,
        stock: "Sob consulta",
        swatch: "#8f5735",
      },
    ],
  },
  {
    id: "colonia",
    name: "Colônia Lavanda",
    detail: "100ml",
    category: "Perfumaria",
    price: 39.9,
    color: "#e6dbfb",
    ink: "#6649a8",
    round: false,
    image: "assets/products/colonia.webp",
    tag: "Presente",
    description: "Fragrância leve para uso diário ou presente de última hora.",
    caution: "Produto sujeito à disponibilidade de estoque e preferência de fragrância.",
    stock: "Disponível hoje",
  },
  {
    id: "buscopan",
    name: "Buscopan Composto",
    detail: "20 comprimidos",
    category: "Medicamentos",
    price: 23.9,
    color: "#fff3d8",
    ink: "#75530b",
    round: false,
    image: "assets/products/buscopan-composto.webp",
    tag: "Farmacia",
    description: "Medicamento demonstrativo para completar a vitrine da categoria.",
    caution: "Venda e orientacao devem seguir a avaliacao da farmacia.",
    stock: "Disponivel hoje",
  },
  {
    id: "neosaldina",
    name: "Neosaldina",
    detail: "Drageas c/ 20",
    category: "Medicamentos",
    price: 28.9,
    color: "#f2f7ff",
    ink: "#16477a",
    round: false,
    image: "assets/products/neosaldina-20-drageas.png",
    tag: "Dor e febre",
    description: "Item demonstrativo para busca e navegacao no catalogo.",
    caution: "Confira contraindicacoes e orientacao farmaceutica.",
    stock: "Sob consulta",
  },
  {
    id: "ninho-fases",
    name: "Ninho Fases",
    detail: "Fases 3+ 800g",
    category: "Mamãe e bebê",
    price: 69.9,
    color: "#ffe16b",
    ink: "#7f5214",
    round: false,
    image: "assets/products/ninho-fases-3-800g.webp",
    tag: "Nutricao infantil",
    description: "Produto infantil exibido para simular a vitrine de mamae e bebe.",
    caution: "Consulte orientacao profissional para escolha adequada.",
    stock: "Disponivel hoje",
  },
  {
    id: "fralda-babysec",
    name: "Fralda Babysec",
    detail: "Escolha o tamanho na página",
    category: "Mamãe e bebê",
    price: 36.9,
    color: "#f8f0ff",
    ink: "#73509b",
    round: false,
    image: "assets/products/fralda-babysec-premium-g.webp",
    tag: "Mamãe e bebê",
    description: "Fralda infantil Babysec com opções de tamanho para escolher antes de adicionar ao pedido.",
    caution: "Tamanho e disponibilidade podem variar por unidade.",
    stock: "Disponível hoje",
    variantKind: "Tamanho",
    variantHeading: "Escolha o tamanho",
    variantSummaryLabel: "Tamanhos",
    variantActionLabel: "Escolher tamanho",
    variantDescription: "Cada tamanho entra na cesta com seu próprio valor.",
    variants: [
      {
        id: "fralda-babysec-p",
        label: "P",
        detail: "Premium P c/ 30",
        price: 36.9,
        stock: "Disponível hoje",
      },
      {
        id: "fralda-babysec-m",
        label: "M",
        detail: "Premium M c/ 28",
        price: 39.9,
        stock: "Disponível hoje",
      },
      {
        id: "fralda-babysec-g",
        label: "G",
        detail: "Premium G c/ 26",
        price: 42.9,
        stock: "Disponível hoje",
      },
      {
        id: "fralda-babysec-xg",
        label: "XG",
        detail: "Premium XG c/ 24",
        price: 46.9,
        stock: "Disponível hoje",
      },
      {
        id: "fralda-babysec-xxg",
        label: "XXG",
        detail: "Premium XXG c/ 22",
        price: 49.9,
        stock: "Sob consulta",
      },
    ],
  },
  {
    id: "pantene",
    name: "Pantene Restaura",
    detail: "Shampoo 400ml",
    category: "Perfumaria",
    price: 24.9,
    color: "#f5df9b",
    ink: "#6f531b",
    round: false,
    image: "assets/products/pantene-restauracao-400ml.webp",
    tag: "Cabelo",
    description: "Item de cabelo para vitrine demonstrativa.",
    caution: "Imagem e versao podem variar conforme estoque real.",
    stock: "Disponivel hoje",
  },
  {
    id: "colgate",
    name: "Colgate Total 12",
    detail: "Creme dental 90g",
    category: "Conveniência",
    price: 8.9,
    color: "#eaf6ff",
    ink: "#0f5f8f",
    round: false,
    image: "assets/products/colgate-total-12-90g.webp",
    tag: "Higiene pessoal",
    description: "Produto de higiene para simular navegacao e compra por categoria.",
    caution: "Produto sujeito a disponibilidade por loja.",
    stock: "Disponivel hoje",
  },
  {
    id: "rexona",
    name: "Rexona Clinical",
    detail: "Aerosol 150ml",
    category: "Conveniência",
    price: 18.9,
    color: "#e8f3ec",
    ink: "#14593a",
    round: false,
    image: "assets/products/rexona-clinical-150ml.jpg",
    tag: "Higiene pessoal",
    description: "Item demonstrativo de perfumaria e higiene.",
    caution: "Fragrancia e estoque variam por unidade.",
    stock: "Disponivel hoje",
  },
  {
    id: "isdin",
    name: "ISDIN Fusion Water",
    detail: "FPS 60 50ml",
    category: "Cosméticos",
    price: 89.9,
    color: "#f4fbff",
    ink: "#156c8a",
    round: false,
    image: "assets/products/isdin-fusion-water-fps60.webp",
    tag: "Dermo",
    description: "Dermocosmetico demonstrativo para a vitrine de beleza.",
    caution: "Consulte disponibilidade e versao antes de finalizar.",
    stock: "Sob consulta",
  },
  {
    id: "shampoo-pet",
    name: "Beeps Neutro",
    detail: "Shampoo pet 500ml",
    category: "Pet",
    price: 31.9,
    color: "#fff1df",
    ink: "#7a4214",
    round: false,
    image: "assets/products/shampoo-pet-beeps-500ml.jpg",
    tag: "Pet",
    description: "Produto pet demonstrativo para simular a categoria.",
    caution: "Consulte orientacao para uso conforme o animal.",
    stock: "Sob consulta",
  },
  {
    id: "novalgina-1g",
    name: "Novalgina",
    detail: "1g c/ 10 comprimidos",
    category: "Medicamentos",
    price: 22.36,
    oldPrice: 25.76,
    color: "#f7f2ff",
    ink: "#4b2b81",
    round: false,
    image: "assets/products/novalgina-1g-10.jpg",
    tag: "Oferta",
    promo: "-13%",
    description: "Analgésico e antitérmico de referência para vitrine de medicamentos, com compra sujeita à orientação farmacêutica.",
    caution: "Confira contraindicações, composição e orientação antes de usar qualquer medicamento.",
    stock: "Disponível hoje",
  },
  {
    id: "allegra-120",
    name: "Allegra",
    detail: "120mg c/ 10 comprimidos",
    category: "Medicamentos",
    price: 58.59,
    oldPrice: 59.9,
    color: "#ffe8c7",
    ink: "#9b4d00",
    round: false,
    image: "assets/products/allegra-120mg-10.jpg",
    tag: "Alergia",
    promo: "PBM",
    description: "Antialérgico para simular campanhas de laboratório e descontos por programas parceiros.",
    caution: "Medicamento sujeito à avaliação, disponibilidade e orientação do farmacêutico.",
    stock: "Disponível hoje",
  },
  {
    id: "luftal-gel",
    name: "Luftal Gel Caps",
    detail: "125mg c/ 10 cápsulas",
    category: "Medicamentos",
    price: 23.49,
    color: "#eaf4ff",
    ink: "#145a8f",
    round: false,
    image: "assets/products/luftal-125mg-10.jpg",
    tag: "Farmacinha",
    promo: "Mais buscado",
    description: "Item de farmacinha para gases e desconfortos, usado aqui como exemplo de busca rápida por sintoma.",
    caution: "Use conforme bula e orientação profissional quando necessário.",
    stock: "Disponível hoje",
  },
  {
    id: "cimegripe",
    name: "Cimegripe",
    detail: "20 cápsulas",
    category: "Medicamentos",
    price: 12.19,
    oldPrice: 15.9,
    color: "#fff0d8",
    ink: "#8a4b00",
    round: false,
    image: "assets/products/cimegripe-20.jpg",
    tag: "Oferta",
    promo: "-23%",
    description: "Produto para vitrine de gripe e resfriado, ideal para demonstrar campanhas sazonais.",
    caution: "A venda depende da disponibilidade e das regras de uso responsável.",
    stock: "Poucas unidades",
  },
  {
    id: "eno-laranja",
    name: "Sal de Fruta Eno",
    detail: "Laranja 100g",
    category: "Medicamentos",
    price: 18.9,
    color: "#fff1df",
    ink: "#8c4b00",
    round: false,
    image: "assets/products/eno-100g.jpg",
    tag: "Digestivo",
    promo: "Leve 3 pague 2",
    description: "Produto de alta lembrança para campanhas de conveniência e combos promocionais.",
    caution: "Leia a embalagem e procure orientação em caso de dúvidas.",
    stock: "Disponível hoje",
  },
  {
    id: "cerave-creme",
    name: "CeraVe Creme",
    detail: "Hidratante 453g",
    category: "Cosméticos",
    price: 96.9,
    oldPrice: 119.9,
    color: "#edf6ff",
    ink: "#145a8f",
    round: false,
    image: "assets/products/cerave-creme-453g.png",
    tag: "Dermo",
    promo: "-19%",
    description: "Creme hidratante corporal e facial para pele seca a extra seca, exemplo forte para a área de dermocosméticos.",
    caution: "Verifique indicação de pele e disponibilidade por loja.",
    stock: "Disponível hoje",
  },
  {
    id: "principia-niacinamida",
    name: "Principia NC-10",
    detail: "Niacinamida 30ml",
    category: "Cosméticos",
    price: 54.9,
    color: "#f3f1ff",
    ink: "#4f3d9a",
    round: false,
    image: "assets/products/principia-niacinamida-30ml.jpg",
    tag: "Skincare",
    promo: "Queridinho",
    description: "Sérum facial para vitrine de skincare, ótimo para navegação por marca e rotina de cuidado.",
    caution: "Oriente o cliente a conferir modo de uso e compatibilidade com a pele.",
    stock: "Disponível hoje",
  },
  {
    id: "neutrogena-hydro",
    name: "Neutrogena Hydro Boost",
    detail: "Water Gel 50g",
    category: "Cosméticos",
    price: 59.9,
    oldPrice: 79.9,
    color: "#e8f9ff",
    ink: "#08779a",
    round: false,
    image: "assets/products/neutrogena-hydro-boost-50g.jpg",
    tag: "Oferta",
    promo: "-25%",
    description: "Hidratante facial em gel para destacar promoções de beleza e cuidados diários.",
    caution: "Confira disponibilidade e apresentação antes de finalizar.",
    stock: "Disponível hoje",
  },
  {
    id: "la-roche-anthelios",
    name: "La Roche Anthelios",
    detail: "Airlicium FPS 70 40g",
    category: "Cosméticos",
    price: 89.9,
    oldPrice: 109.9,
    color: "#ffe9d6",
    ink: "#9a4d21",
    round: false,
    image: "assets/products/la-roche-anthelios-airlicium.jpg",
    tag: "Proteção solar",
    promo: "-18%",
    description: "Protetor facial de dermocosmético para enriquecer a navegação por proteção solar.",
    caution: "Verifique cor, textura, FPS e estoque por unidade.",
    stock: "Disponível hoje",
  },
  {
    id: "avene-agua-termal",
    name: "Avène Água Termal",
    detail: "Spray 300ml",
    category: "Cosméticos",
    price: 79.9,
    color: "#f5fbff",
    ink: "#266681",
    round: false,
    image: "assets/products/avene-agua-termal-300ml.jpg",
    tag: "Dermo",
    promo: "Cuidados com a pele",
    description: "Produto de cuidado facial para vitrines de pele sensível e dermocosméticos.",
    caution: "Imagem e disponibilidade podem variar conforme estoque.",
    stock: "Sob consulta",
  },
  {
    id: "bioderma-sensibio",
    name: "Bioderma Sensibio H2O",
    detail: "Água micelar 250ml",
    category: "Cosméticos",
    price: 74.9,
    oldPrice: 92.9,
    color: "#fff1f7",
    ink: "#9b3d6c",
    round: false,
    image: "assets/products/bioderma-sensibio-250ml.jpg",
    tag: "Skincare",
    promo: "-19%",
    description: "Água micelar para rotina de limpeza facial, útil para demonstrar filtros de beleza e marca.",
    caution: "Confira indicação para tipo de pele.",
    stock: "Disponível hoje",
  },
  {
    id: "cetaphil-kit",
    name: "Cetaphil Kit Hidratação",
    detail: "Loção 473ml + limpeza 100ml",
    category: "Cosméticos",
    price: 89.9,
    oldPrice: 119.9,
    color: "#eef7ff",
    ink: "#345b7a",
    round: false,
    image: "assets/products/cetaphil-kit-hidratacao.png",
    tag: "Kit",
    promo: "Economize no kit",
    description: "Kit de hidratação corporal para mostrar combos e ofertas agrupadas.",
    caution: "Itens do kit podem mudar conforme campanha e estoque.",
    stock: "Disponível hoje",
  },
  {
    id: "huggies-supreme",
    name: "Huggies Supreme Care",
    detail: "Fralda M c/ 24",
    category: "Mamãe e bebê",
    price: 49.9,
    oldPrice: 59.9,
    color: "#fff3e8",
    ink: "#8a3f00",
    round: false,
    image: "assets/products/huggies-supreme-care-m.jpg",
    tag: "Mamãe e bebê",
    promo: "Leve mais, pague menos",
    description: "Fralda infantil para complementar a vitrine de bebê com outra marca conhecida.",
    caution: "Tamanho e estoque variam por unidade.",
    stock: "Disponível hoje",
  },
  {
    id: "johnsons-shampoo",
    name: "Johnson's Baby",
    detail: "Shampoo 400ml",
    category: "Mamãe e bebê",
    price: 24.9,
    color: "#fff8df",
    ink: "#8a6a00",
    round: false,
    image: "assets/products/johnsons-baby-shampoo-400ml.jpg",
    tag: "Bebê",
    promo: "Mais vendido",
    description: "Shampoo infantil para enriquecer navegação por mamãe e bebê.",
    caution: "Confira apresentação e disponibilidade da loja.",
    stock: "Disponível hoje",
  },
  {
    id: "ensure-baunilha",
    name: "Ensure Baunilha",
    detail: "Complemento 850g",
    category: "Suplementos",
    price: 104.9,
    oldPrice: 129.9,
    color: "#eef6ff",
    ink: "#315d86",
    round: false,
    image: "assets/products/ensure-baunilha-850g.jpg",
    tag: "Nutrição",
    promo: "-19%",
    description: "Complemento nutricional para vitrine de cuidados com adultos e idosos.",
    caution: "Suplementos devem ser usados conforme orientação profissional quando necessário.",
    stock: "Disponível hoje",
  },
  {
    id: "centrum-az",
    name: "Centrum A-Z",
    detail: "30 comprimidos",
    category: "Suplementos",
    price: 77.99,
    color: "#fff8d8",
    ink: "#7a5b00",
    round: false,
    image: "assets/products/centrum-az-30.jpg",
    tag: "Vitaminas",
    promo: "Cliente ON",
    description: "Multivitamínico para criar navegação por vitaminas, bem-estar e marcas.",
    caution: "Não substitui alimentação equilibrada.",
    stock: "Disponível hoje",
  },
  {
    id: "omega3-catarinense",
    name: "Ômega 3 Catarinense",
    detail: "1000mg c/ 60 cápsulas",
    category: "Suplementos",
    price: 34.9,
    oldPrice: 44.9,
    color: "#edf7ff",
    ink: "#1e5d7a",
    round: false,
    image: "assets/products/omega3-catarinense-60.png",
    tag: "Bem-estar",
    promo: "-22%",
    description: "Suplemento para enriquecer a área de vida saudável e cesta recorrente.",
    caution: "Verifique orientação profissional em caso de uso contínuo.",
    stock: "Disponível hoje",
  },
  {
    id: "lavitan-az",
    name: "Lavitan A-Z",
    detail: "60 drágeas",
    category: "Suplementos",
    price: 28.9,
    color: "#fff2df",
    ink: "#9a5200",
    round: false,
    image: "assets/products/lavitan-a-z-60.jpg",
    tag: "Vitaminas",
    promo: "Oferta do dia",
    description: "Vitamina de boa saída para demonstrar ofertas e navegação por vida saudável.",
    caution: "Consulte composição e modo de uso.",
    stock: "Disponível hoje",
  },
  {
    id: "seda-ceramidas",
    name: "Seda Ceramidas",
    detail: "Shampoo 325ml",
    category: "Perfumaria",
    price: 12.9,
    oldPrice: 16.9,
    color: "#fff0df",
    ink: "#8a3f00",
    round: false,
    image: "assets/products/seda-ceramidas-325ml.jpg",
    tag: "Cabelo",
    promo: "-24%",
    description: "Produto popular de cabelo para preencher a categoria com item acessível.",
    caution: "Fragrância e embalagem podem variar conforme estoque.",
    stock: "Disponível hoje",
  },
  {
    id: "dove-oleo-nutricao",
    name: "Dove Óleo Nutrição",
    detail: "Kit shampoo + condicionador",
    category: "Perfumaria",
    price: 29.9,
    oldPrice: 39.9,
    color: "#fff8de",
    ink: "#755a10",
    round: false,
    image: "assets/products/dove-oleo-nutricao-kit.jpg",
    tag: "Kit cabelo",
    promo: "Preço especial",
    description: "Kit de cabelo para demonstrar combos e campanha de perfumaria.",
    caution: "Kit e preço podem variar por campanha.",
    stock: "Disponível hoje",
  },
  {
    id: "dove-sabonete",
    name: "Dove Original",
    detail: "Sabonete 90g",
    category: "Conveniência",
    price: 4.9,
    color: "#f7fbff",
    ink: "#245a77",
    round: false,
    image: "assets/products/dove-sabonete-90g.jpg",
    tag: "Higiene pessoal",
    promo: "Leve 6 pague 5",
    description: "Item de higiene de alta recorrência para simular ofertas de cesta básica de cuidado.",
    caution: "Disponibilidade por loja pode variar.",
    stock: "Disponível hoje",
  },
  {
    id: "always-noturno",
    name: "Always Noturno",
    detail: "Cobertura seca c/ 8",
    category: "Conveniência",
    price: 9.9,
    oldPrice: 12.9,
    color: "#f7f1ff",
    ink: "#5b368a",
    round: false,
    image: "assets/products/always-noturno-8.jpg",
    tag: "Higiene pessoal",
    promo: "-23%",
    description: "Absorvente para ampliar a categoria de higiene pessoal com item recorrente.",
    caution: "Confira tamanho e cobertura antes da compra.",
    stock: "Disponível hoje",
  },
  {
    id: "oralb-power",
    name: "Oral-B Pro Saúde",
    detail: "Escova elétrica",
    category: "Conveniência",
    price: 49.9,
    oldPrice: 69.9,
    color: "#eaf6ff",
    ink: "#0f5f8f",
    round: false,
    image: "assets/products/oralb-pro-saude-power.jpg",
    tag: "Saúde bucal",
    promo: "-29%",
    description: "Escova elétrica para mostrar produtos de maior ticket dentro de higiene pessoal.",
    caution: "Confira voltagem, pilhas e informações da embalagem.",
    stock: "Sob consulta",
  },
  {
    id: "gillette-fusion",
    name: "Gillette Fusion ProShield",
    detail: "Carga c/ 2 unidades",
    category: "Conveniência",
    price: 47.9,
    oldPrice: 59.9,
    color: "#edf5ff",
    ink: "#164d85",
    round: false,
    image: "assets/products/gillette-fusion-proshield-2.jpg",
    tag: "Barbear",
    promo: "-20%",
    description: "Carga de barbear para navegação de higiene masculina e ofertas de marcas.",
    caution: "Produto sujeito à disponibilidade por unidade.",
    stock: "Disponível hoje",
  },
];

const medicineCatalog = {
  dorflex: {
    active: "Dipirona sódica, citrato de orfenadrina e cafeína",
    manufacturer: "Sanofi",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "DOR-36",
    purpose: "Medicamento analgésico e relaxante muscular. A indicação, restrições e modo de uso devem seguir a bula e a orientação farmacêutica.",
    composition: "Composição conforme bula oficial do fabricante. Antes de publicar, validar concentração e apresentação no cadastro da loja.",
    howToUse: "Utilizar somente conforme orientação da bula, do médico ou do farmacêutico.",
    safety: "Não substitui consulta médica. Não usar em caso de alergia conhecida aos componentes ou contraindicação informada em bula.",
    highlights: ["Opções de quantidade disponíveis", "Compra com retirada ou entrega", "Orientação farmacêutica no atendimento"],
    presentations: [
      ["36 comprimidos", "36 comprimidos", 24.9, "Disponível hoje", "DOR-36"],
      ["10 comprimidos", "10 comprimidos", 11.9, "Disponível hoje", "DOR-10"],
      ["24 comprimidos", "24 comprimidos", 19.9, "Sob consulta", "DOR-24"],
      ["50 comprimidos", "50 comprimidos", 31.9, "Sob consulta", "DOR-50"],
    ],
  },
  tylenol: {
    active: "Paracetamol",
    manufacturer: "Johnson & Johnson",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "TYL-500-20",
    purpose: "Analgésico e antitérmico. Conferir idade, dose, contraindicações e interações na bula antes da venda.",
    composition: "Paracetamol conforme apresentação selecionada. Validar concentração no cadastro real da loja.",
    howToUse: "Seguir a posologia da bula ou orientação profissional.",
    safety: "Atenção ao uso simultâneo com outros produtos que contenham paracetamol.",
    highlights: ["Alívio de dor e febre conforme bula", "Apresentações por quantidade", "Conferência farmacêutica no pedido"],
    gallery: ["assets/products/tylenol.jpg", "assets/products/tylenol-3.jpg", "assets/products/tylenol-4.jpg"],
    presentations: [
      ["20 comprimidos", "500mg c/ 20", 19.9, "Disponível hoje", "TYL-20"],
      ["10 comprimidos", "500mg c/ 10", 12.9, "Disponível hoje", "TYL-10"],
      ["24 comprimidos", "750mg c/ 24", 29.9, "Sob consulta", "TYL-24"],
    ],
  },
  benegrip: {
    active: "Associação medicamentosa conforme bula",
    manufacturer: "Hypera",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "BEN-20",
    purpose: "Medicamento para sintomas gripais conforme indicação da bula. A farmácia deve confirmar restrições antes da entrega.",
    composition: "Composição e concentrações devem ser conferidas na bula oficial da apresentação vendida.",
    howToUse: "Usar conforme bula e orientação profissional.",
    safety: "Evitar automedicação, especialmente em pessoas com doenças crônicas, gestantes ou uso de outros medicamentos.",
    highlights: ["Campanhas de inverno", "Consulta de disponibilidade", "Orientação no balcão digital"],
    presentations: [
      ["20 comprimidos", "20 comprimidos", 16.9, "Poucas unidades", "BEN-20"],
      ["12 comprimidos", "12 comprimidos", 12.9, "Disponível hoje", "BEN-12"],
      ["6 comprimidos", "6 comprimidos", 8.9, "Sob consulta", "BEN-6"],
    ],
  },
  buscopan: {
    active: "Butilbrometo de escopolamina + dipirona",
    manufacturer: "Hypera",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "BUSC-20",
    purpose: "Medicamento para cólicas e dores abdominais conforme bula. Venda sujeita à orientação e disponibilidade.",
    composition: "Composição conforme bula oficial do produto Buscopan Composto.",
    howToUse: "Seguir orientação da bula, médico ou farmacêutico.",
    safety: "Atenção a contraindicações, alergias e uso conjunto com outros medicamentos.",
    highlights: ["Farmacinha", "Opções por quantidade", "Conferência no atendimento"],
    presentations: [
      ["20 comprimidos", "20 comprimidos", 23.9, "Disponível hoje", "BUSC-20"],
      ["10 comprimidos", "10 comprimidos", 15.9, "Sob consulta", "BUSC-10"],
    ],
  },
  neosaldina: {
    active: "Dipirona, mucato de isometepteno e cafeína",
    manufacturer: "Hypera",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Drágea",
    code: "NEO-20",
    purpose: "Medicamento analgésico. O uso deve respeitar a bula e a avaliação profissional quando necessária.",
    composition: "Composição conforme bula oficial da apresentação selecionada.",
    howToUse: "Seguir a bula e orientação farmacêutica.",
    safety: "Evitar uso em caso de contraindicação aos componentes ou alerta em bula.",
    highlights: ["Dor e febre", "Apresentação em drágeas", "Venda com orientação"],
    gallery: ["assets/products/neosaldina.png"],
    presentations: [
      ["20 drágeas", "Drágeas c/ 20", 28.9, "Sob consulta", "NEO-20"],
      ["10 drágeas", "Drágeas c/ 10", 17.9, "Sob consulta", "NEO-10"],
    ],
  },
  "novalgina-1g": {
    active: "Dipirona monoidratada",
    manufacturer: "Sanofi",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "NOV-1G-10",
    purpose: "Analgésico e antitérmico conforme bula. Conferir contraindicações e orientação profissional.",
    composition: "Dipirona monoidratada conforme apresentação selecionada.",
    howToUse: "Utilizar conforme bula oficial e orientação de profissional habilitado.",
    safety: "Atenção a histórico de alergia, reações anteriores e uso em grupos que exigem cuidado especial.",
    highlights: ["Oferta demonstrativa", "Apresentações por concentração", "Consulta ao Bulário Anvisa"],
    presentations: [
      ["10 comprimidos", "1g c/ 10 comprimidos", 22.36, "Disponível hoje", "NOV-1G-10"],
      ["20 comprimidos", "500mg c/ 20 comprimidos", 24.9, "Sob consulta", "NOV-500-20"],
      ["Gotas 20ml", "Gotas 20ml", 18.9, "Sob consulta", "NOV-GOTAS"],
    ],
  },
  "allegra-120": {
    active: "Cloridrato de fexofenadina",
    manufacturer: "Sanofi",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "ALG-120-10",
    purpose: "Antialérgico conforme bula. Conferir apresentação, idade e orientação antes da venda.",
    composition: "Fexofenadina conforme concentração da apresentação selecionada.",
    howToUse: "Seguir a bula ou orientação profissional.",
    safety: "Atenção a contraindicações e uso com outros medicamentos.",
    highlights: ["PBM/Laboratório", "Alergia", "Preço sujeito a campanha"],
    presentations: [
      ["10 comprimidos", "120mg c/ 10 comprimidos", 58.59, "Disponível hoje", "ALG-120-10"],
      ["30 comprimidos", "120mg c/ 30 comprimidos", 129.9, "Sob consulta", "ALG-120-30"],
      ["180mg c/ 10", "180mg c/ 10 comprimidos", 69.9, "Sob consulta", "ALG-180-10"],
    ],
  },
  "luftal-gel": {
    active: "Simeticona",
    manufacturer: "Reckitt",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Cápsula gelatinosa",
    code: "LUF-125-10",
    purpose: "Medicamento para gases e desconforto abdominal conforme bula.",
    composition: "Simeticona conforme apresentação selecionada.",
    howToUse: "Seguir a bula e orientação farmacêutica.",
    safety: "Em caso de dor persistente, procurar atendimento profissional.",
    highlights: ["Farmacinha", "Cápsulas gel", "Compra rápida"],
    presentations: [
      ["10 cápsulas", "125mg c/ 10 cápsulas", 23.49, "Disponível hoje", "LUF-10"],
      ["30 cápsulas", "125mg c/ 30 cápsulas", 49.9, "Sob consulta", "LUF-30"],
    ],
  },
  cimegripe: {
    active: "Associação medicamentosa conforme bula",
    manufacturer: "Cimed",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Cápsula",
    code: "CIM-20",
    purpose: "Produto para sintomas de gripes e resfriados conforme orientação da bula.",
    composition: "Composição e concentrações devem ser validadas na bula da apresentação escolhida.",
    howToUse: "Usar conforme bula e orientação profissional.",
    safety: "Evitar automedicação e conferir contraindicações antes da venda.",
    highlights: ["Ofertas de inverno", "Leve mais pague menos", "Disponibilidade por loja"],
    presentations: [
      ["20 cápsulas", "20 cápsulas", 12.19, "Poucas unidades", "CIM-20"],
      ["10 cápsulas", "10 cápsulas", 8.9, "Sob consulta", "CIM-10"],
    ],
  },
  "eno-laranja": {
    active: "Sais antiácidos conforme embalagem",
    manufacturer: "Haleon",
    msRegister: "Consultar regularização aplicável",
    dosage: "Pó efervescente",
    code: "ENO-100",
    purpose: "Antiácido efervescente conforme informações da embalagem.",
    composition: "Composição conforme embalagem oficial do produto selecionado.",
    howToUse: "Preparar e utilizar conforme instruções da embalagem.",
    safety: "Atenção a restrições de sódio e condições de saúde que exigem orientação profissional.",
    highlights: ["Digestivo", "Leve 3 pague 2", "Bom para combos"],
    presentations: [
      ["Pote 100g", "Laranja 100g", 18.9, "Disponível hoje", "ENO-100"],
      ["Sachê unidade", "Sachê laranja", 3.9, "Sob consulta", "ENO-SACHE"],
    ],
  },
};

products.forEach((product) => {
  const profile = medicineCatalog[product.id];
  if (!profile) return;

  const presentations = profile.presentations || [];
  product.medicine = profile;
  product.variantKind = "Quantidade";
  product.variantHeading = "Escolha a apresentação";
  product.variantSummaryLabel = "Apresentações";
  product.variantActionLabel = "Escolher apresentação";
  product.variantDescription = "Escolha a quantidade ou apresentação disponível. Na integração real, o sistema confirma o saldo por loja antes de finalizar.";
  product.gallery = [product.image, ...(profile.gallery || [])].filter(Boolean);
  product.variants = presentations.map(([label, detail, price, stock, code], index) => ({
    id: `${product.id}-${index + 1}`,
    label,
    detail,
    price,
    stock,
    code,
    image: product.image,
  }));
});

const icons = {
  grid: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />',
  discount: '<path d="M7 7h.01M17 17h.01" /><path d="m7 17 10-10" /><path d="M12 2 14.6 5.2l4.1.4.4 4.1L22 12l-2.9 2.3-.4 4.1-4.1.4L12 22l-2.6-3.2-4.1-.4-.4-4.1L2 12l2.9-2.3.4-4.1 4.1-.4Z" />',
  pill: '<path d="M10 21 3 14a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7Z" /><path d="m8.5 8.5 7 7" /><path d="M14 4a7 7 0 0 1 7 7" />',
  basket: '<path d="M5 9h14l-1.2 11H6.2z" /><path d="M9 9a3 3 0 0 1 6 0" /><path d="M9 13v3M15 13v3" />',
  bottle: '<path d="M9 2h6v4l1.5 2.5V21h-9V8.5L9 6z" /><path d="M8 11h8" />',
  baby: '<path d="M9 3h6v5l2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9l2-2Z" /><path d="M9 8h6M9 13h6" /><path d="M10 17h4" />',
  tube: '<path d="M8 2h8l-1 15H9z" /><path d="M9 17h6v4H9zM8.5 6h7" />',
  perfume: '<path d="M10 2h4v4h-4zM8 9h8l2 3v9H6v-9z" /><path d="M9 13h6" />',
  shampoo: '<path d="M10 2h5v4h-5z" /><path d="M8 8h9l-1 13H9z" /><path d="M10 13h5" /><path d="M17 6h2a2 2 0 0 1 2 2v1" />',
  sparkle: '<path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2Z" /><path d="M19 4v4M21 6h-4M5 16v3M6.5 17.5h-3" />',
  vaccine: '<path d="m18 2 4 4" /><path d="m17 7 2-2" /><path d="m12 7 5 5-7 7H5v-5Z" /><path d="m9 10 5 5" /><path d="M4 20 2 22" />',
  cart: '<path d="M6 6h15l-2 8H7L5.5 3H3" /><path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />',
  heart: '<path d="M20.8 4.6a5.3 5.3 0 0 0-7.5 0L12 5.9l-1.3-1.3a5.3 5.3 0 1 0-7.5 7.5L12 21l8.8-8.9a5.3 5.3 0 0 0 0-7.5Z" />',
  close: '<path d="M18 6 6 18M6 6l12 12" />',
  trash: '<path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="m6 6 1 15h10l1-15" /><path d="M10 11v6M14 11v6" />',
  truck: '<path d="M3 13h13v6H3zM16 16h2.5l2-3H16zM6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />',
  headset: '<path d="M4 13v-2a8 8 0 1 1 16 0v2" /><path d="M4 13h3v6H4zM17 13h3v6h-3z" /><path d="M20 18c0 2-2 3-5 3h-2" />',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" />',
  ticket: '<path d="M4 7h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4Z" /><path d="M9 7v12" />',
  user: '<path d="M20 21a8 8 0 1 0-16 0" /><path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />',
  payment: '<path d="M3 6h18v12H3z" /><path d="M3 10h18" /><path d="M7 15h4" />',
  location: '<path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" /><path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />',
};

const state = {
  category: "all",
  query: "",
  cart: new Map([
    ["dorflex", 1],
    ["tylenol", 1],
    ["nivea", 1],
  ]),
  favorites: new Set(),
  delivery: "pickup",
  selectedStore: "loja-portugal",
  cep: "",
  deliveryQuote: null,
  shippingStatus: "idle",
  shippingError: "",
  coupon: "",
  loggedIn: false,
  usePoints: false,
  currentOrder: null,
  customer: {
    name: "Brena Sani",
    fullName: "Brena Corrêa Sani",
    cpf: "***.***.***-**",
    cep: "14090-370",
    points: 320,
    email: "brenasani29@gmail.com",
    phone: "(16) 98133-2167",
    address: "",
    addressNumber: "",
    addressComplement: "",
    receiverName: "",
    note: "",
    payment: "",
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
    billingCep: "",
  },
};

const formatCurrency = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const DELIVERY_FEE_CLOSE = 6.9;
const DELIVERY_FEE_FAR = 8.9;
const DELIVERY_DISTANCE_LIMIT_KM = 10;
const CEP_API_BASE_URL = "https://cep.awesomeapi.com.br/json/";
const CORREIOS_PRICE_URL = "https://www.correios.com.br/estrutura-da-pagina/precos-e-prazos";
const LOCAL_DELIVERY_CITY = "ribeirao preto";
const PIX_DISCOUNT_RATE = 0.05;
const LOYALTY_PROGRAM_NAME = "Cliente ON";
const LOYALTY_POINTS_PER_REAL = 1;
const LOYALTY_EXAMPLE_BALANCE = 320;
const LOYALTY_POINTS_PER_REAL_DISCOUNT = 100;
const STORE_WHATSAPP_NUMBER = "5516997997878";
const PIX_CNPJ_KEY = "58757644000109";
const PIX_MERCHANT_NAME = "DROGARIA ONORIO";
const PIX_MERCHANT_CITY = "RIBEIRAO PRETO";
const roundMoney = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

function getCustomerHeaderName() {
  return state.customer.name || state.customer.fullName || "Cliente Onório";
}

function updateAccountHeader() {
  const accountButtons = document.querySelectorAll("#login-top, [data-account-link]");
  const accountTitles = document.querySelectorAll("#account-title, [data-account-title]");
  const accountSubtitles = document.querySelectorAll("#account-subtitle, [data-account-subtitle]");

  if (!accountTitles.length || !accountSubtitles.length) {
    return;
  }

  if (state.loggedIn) {
    const customerName = getCustomerHeaderName();
    accountTitles.forEach((item) => {
      item.textContent = customerName;
    });
    accountSubtitles.forEach((item) => {
      item.textContent = "Minha conta";
    });
    accountButtons.forEach((button) => {
      button.setAttribute("aria-label", `Minha conta de ${customerName}`);
    });
    return;
  }

  accountTitles.forEach((item) => {
    item.textContent = "Cliente Onório";
  });
  accountSubtitles.forEach((item) => {
    item.textContent = "Entrar ou cadastrar";
  });
  accountButtons.forEach((button) => {
    button.setAttribute("aria-label", "Entrar ou cadastrar na Drogaria Onório");
  });
}

const pickupStores = [
  {
    id: "loja-arnaldo",
    name: "Loja 1 - Av. Arnaldo Victaliano",
    address: "Iguatemi - Ribeirão Preto/SP",
    time: "Retirada grátis em até 60 minutos",
    fullAddress: "Av. Arnaldo Victaliano, 1191 - Iguatemi - Ribeirão Preto/SP",
    phone: "(16) 3618-0883",
    phoneHref: "+551636180883",
    whatsapp: "(16) 3618-0883",
    whatsappHref: "551636180883",
    email: "drogariaciasaude@yahoo.com.br",
    lat: -21.1957848,
    lng: -47.7804726,
  },
  {
    id: "loja-portugal",
    name: "Loja 2 - Av. Portugal",
    address: "Jardim Botânico - Ribeirão Preto/SP",
    time: "Retirada grátis em até 60 minutos",
    fullAddress: "Av. Portugal, 2777 - Jardim Botânico - Ribeirão Preto/SP",
    phone: "(16) 3442-2440",
    phoneHref: "+551634422440",
    whatsapp: "(16) 3442-2440",
    whatsappHref: "551634422440",
    email: "onoriodrogaria@gmail.com",
    lat: -21.2099552,
    lng: -47.7908571,
  },
];

const infoPages = {
  atendimento: {
    eyebrow: "Ajuda",
    title: "Central de atendimento",
    text: "Canais para tirar duvidas, falar com a equipe e acompanhar orientacoes do pedido.",
    cards: [
      ["Telefone Loja 1", "(16) 3618-0883"],
      ["Telefone Loja 2", "(16) 3442-2440"],
      ["E-mail", "onoriodrogaria@gmail.com"],
    ],
    primary: ["Falar no WhatsApp", "whatsapp"],
  },
  aplicativo: {
    eyebrow: "App Onorio",
    title: "Aplicativo em preparacao",
    text: "Esta tela reserva o espaco para o aplicativo instalavel. No proximo passo podemos transformar o site em PWA para abrir como app no celular.",
    cards: [
      ["Atalho no celular", "Adicionar a tela inicial"],
      ["Conta", "Login, pedidos e Cliente ON"],
      ["Compras", "Compre e retire ou receba em casa"],
    ],
    primary: ["Voltar para a loja", "home"],
  },
  pedidos: {
    eyebrow: "Cliente",
    title: "Meus pedidos",
    text: "Quando o sistema da loja for integrado, esta pagina mostrara status, historico e detalhes dos pedidos do cliente.",
    cards: [
      ["Pedido demonstrativo", "Aguardando pagamento"],
      ["Retirada", "Loja selecionada no checkout"],
      ["Entrega", "Taxa por CEP: R$ 6,90 ate 10 km e R$ 8,90 acima"],
    ],
    primary: ["Continuar comprando", "home"],
  },
  cep: {
    eyebrow: "Entrega",
    title: "Consultar CEP",
    text: "Pagina para o cliente informar o CEP, ver o endereco encontrado e calcular a distancia ate a loja mais proxima.",
    cards: [
      ["Ate 10 km", "Entrega domicilio por R$ 6,90"],
      ["Acima de 10 km", "Entrega domicilio por R$ 8,90"],
      ["Retirada", "Gratis em ate 60 minutos"],
    ],
    primary: ["Ir para entrega", "entrega"],
  },
  clienteon: {
    eyebrow: "Programa de pontos",
    title: "Cliente ON",
    text: "A cada R$ 1,00 em compras, o cliente acumula 1 ponto. A cada 100 pontos, abate R$ 1,00 no final da compra.",
    cards: [
      ["Saldo exemplo", `${LOYALTY_EXAMPLE_BALANCE} pontos`],
      ["Valor para abater", formatCurrency(pointsToDiscount())],
      ["Pergunta no checkout", "Sempre perguntar antes de usar"],
    ],
    primary: ["Ver pagamento", "pagamento"],
  },
  pagamentos: {
    eyebrow: "Pagamento",
    title: "Formas de pagamento",
    text: "Pix com 5% de desconto, Mercado Pago, PicPay, boleto e cartao de credito em ate 3x sem juros em compras acima de R$ 100,00, ou ate 6x sem juros acima de R$ 1.000,00.",
    cards: [
      ["Pix", "5% de desconto"],
      ["Cartao", "Ate 3x sem juros em compras acima de R$ 100,00 e ate 6x acima de R$ 1.000,00"],
      ["Mercado Pago", "Disponivel no checkout"],
      ["PicPay e boleto", "Disponiveis no checkout"],
    ],
    primary: ["Ir para pagamento", "pagamento"],
  },
  servicos: {
    eyebrow: "Saude",
    title: "Servicos da Drogaria Onorio",
    text: "Area para aplicacao de injetaveis, glicemia, afericao de pressao, orientacao farmaceutica e atendimento da loja.",
    cards: [
      ["Aplicacao de injetaveis", "Conforme prescricao e disponibilidade"],
      ["Glicemia", "Consulta de disponibilidade na unidade"],
      ["Servicos farmaceuticos", "Orientacao e acompanhamento"],
    ],
    primary: ["Falar com atendimento", "atendimento"],
  },
  vacinas: {
    eyebrow: "Servicos",
    title: "Servicos de saude",
    text: "Tela para consultar disponibilidade de afericao de pressao, glicemia e aplicacao de injetaveis.",
    cards: [
      ["Pressao", "Consultar unidade"],
      ["Atendimento", "Equipe da farmacia confirma horarios"],
      ["Cadastro", "Cliente recebe confirmacao"],
    ],
    primary: ["Falar no WhatsApp", "whatsapp"],
  },
  testes: {
    eyebrow: "Servicos",
    title: "Testes rapidos",
    text: "Fluxo demonstrativo para agendar testes e receber orientacoes da equipe.",
    cards: [
      ["Agendamento", "Escolha de loja e horario"],
      ["Resultado", "Conforme servico contratado"],
      ["Orientacao", "Atendimento farmaceutico"],
    ],
    primary: ["Falar no WhatsApp", "whatsapp"],
  },
  pbm: {
    eyebrow: "Descontos",
    title: "PBM Laboratorios",
    text: "Area para programas de beneficios dos laboratorios. O cliente consulta medicamentos participantes, informa CPF e ativa o desconto quando a loja integrar os programas parceiros.",
    cards: [
      ["Medicamentos participantes", "Descontos conforme regra de cada laboratorio"],
      ["Cadastro por CPF", "Ativacao vinculada ao cliente no momento da compra"],
      ["Proximo passo", "Conectar PBMs reais e estoque da drogaria"],
    ],
    primary: ["Ver ofertas", "top-ofertas"],
  },
  cupons: {
    eyebrow: "Cupons",
    title: "Cupons Onorio",
    text: "Espaco para cupons proprios da Drogaria Onorio em campanhas online, retirada na loja e ofertas por categoria.",
    cards: [
      ["Cupom na cesta", "Cliente digita o codigo no resumo do pedido"],
      ["Campanhas proprias", "Exemplos: PRIMEIRACOMPRA, RETIRADAON e BELEZAON"],
      ["Controle futuro", "Validacao por periodo, loja, estoque e valor minimo"],
    ],
    primary: ["Ver ofertas", "top-ofertas"],
  },
  descontos: {
    eyebrow: "Beneficios",
    title: "Todos os descontos",
    text: "Central de descontos da Drogaria Onorio com PBM Laboratorios, cupons proprios, genericos com descontos de ate 95% e ofertas leve 3 pague 2.",
    cards: [
      ["PBM Laboratorios", "Programas de beneficios para medicamentos participantes"],
      ["Cupons Onorio", "Aplicar no resumo do pedido"],
      ["Genericos", "Descontos de ate 95% em itens participantes"],
      ["Leve 3 pague 2", "Campanhas combinadas em produtos selecionados"],
      ["Cliente ON", "Pontos para abater no valor da compra"],
    ],
    primary: ["Ver ofertas", "top-ofertas"],
  },
  cookies: {
    eyebrow: "Privacidade",
    title: "Preferencias de cookies",
    text: "No prototipo, esta tela representa as configuracoes de privacidade que serao detalhadas na versao final.",
    cards: [
      ["Essenciais", "Necessarios para compra"],
      ["Analise", "Melhoria de experiencia"],
      ["Marketing", "Ofertas personalizadas"],
    ],
    primary: ["Voltar para a loja", "home"],
  },
  conta: {
    eyebrow: "Perfil",
    title: "Minha conta",
    text: "Espaco do cliente para login, cadastro, enderecos, pedidos e saldo Cliente ON.",
    cards: [
      ["Login", "Entrar ou cadastrar"],
      ["Enderecos", "Editar dados de entrega"],
      ["Cliente ON", "Pontos e desconto"],
    ],
    primary: ["Entrar", "login"],
  },
};

Object.assign(infoPages, {
  historia: {
    eyebrow: "Institucional",
    title: "Nossa história",
    text: "A Drogaria Onório existe há mais de 25 anos cuidando de famílias em Ribeirão Preto, com atendimento próximo, humano e acessível.",
    cards: [
      ["Mais de 25 anos", "Uma trajetória construída com confiança, cuidado e presença no bairro."],
      ["Conexão que cuida", "Slogan do brandbook: conexão que cuida, qualidade que inspira."],
      ["Atendimento acolhedor", "Cuidado personalizado, rápido e acessível, colocando o cliente no centro."],
    ],
    sections: [
      {
        eyebrow: "Essência Onório",
        title: "Uma farmácia feita de proximidade",
        text: "O brandbook posiciona a Onório como uma farmácia que se destaca pela conexão humana, modernidade e funcionalidade, equilibrando simplicidade com sofisticação.",
        items: ["Proximidade humanizada", "Praticidade detalhada", "Motivação inspiradora", "Acessibilidade sofisticada"],
      },
      {
        eyebrow: "Propósito",
        title: "Cuidar de forma simples, bonita e eficiente",
        text: "A marca busca traduzir cuidado com qualidade, empatia e soluções práticas para a rotina de saúde dos clientes.",
        items: ["Cuidado que acolhe", "Serviço que resolve", "Qualidade que inspira confiança"],
      },
    ],
    primary: ["Conhecer nossas farmácias", "farmacias"],
  },
  farmacias: {
    eyebrow: "Lojas",
    title: "Nossas farmácias",
    text: "Escolha a unidade mais próxima e abra a rota direto no Google Maps ou no Waze pelo celular.",
    cards: [
      ["Loja 1", "Av. Arnaldo Victaliano, 1191 - Iguatemi - Ribeirão Preto/SP"],
      ["Loja 2", "Av. Portugal, 2777 - Jardim Botânico - Ribeirão Preto/SP"],
      ["Retirada", "Compre online e retire grátis em até 60 minutos após confirmação da loja."],
    ],
    stores: true,
    primary: ["Compre e retire", "compre-retire"],
  },
  trabalhe: {
    eyebrow: "Carreira",
    title: "Trabalhe conosco",
    text: "Quer fazer parte da Drogaria Onório? Esta área reunirá vagas, contato e orientações para envio de currículo.",
    cards: [
      ["Vagas abertas", "No momento não temos vagas abertas."],
      ["Banco de talentos", "Em breve poderemos receber currículos por área de interesse."],
      ["Perfil Onório", "Valorizamos atendimento acolhedor, responsabilidade e cuidado com detalhes."],
    ],
    primary: ["Falar com atendimento", "atendimento"],
  },
  "compre-retire": {
    eyebrow: "Serviços",
    title: "Compre e retire",
    text: "Compre pelo site, escolha a unidade Onório e retire na loja sem pagar frete, com praticidade para o dia a dia.",
    cards: [
      ["1. Escolha os produtos", "Monte sua cesta normalmente no site."],
      ["2. Selecione a loja", "Escolha Loja 1 ou Loja 2 para retirada."],
      ["3. Aguarde o aviso", "Você recebe atualização por SMS e e-mail quando estiver em separação e pronto para retirar."],
    ],
    sections: [
      {
        title: "Como funciona",
        text: "O pedido entra para separação na loja escolhida. Quando estiver pronto, o cliente apresenta o código de retirada gerado na finalização.",
        items: ["Retirada grátis", "Tempo estimado de até 60 minutos", "Código de retirada no pedido finalizado", "Contato direto com a loja para alterar ou cancelar"],
      },
    ],
    primary: ["Ver farmácias", "farmacias"],
  },
  manipulacao: {
    eyebrow: "Serviços",
    title: "Manipulação",
    text: "A Drogaria Onório trabalha com manipulação em parceria com a Biomagistral. Envie sua receita e solicite orçamento pelo WhatsApp.",
    cards: [
      ["Parceria", "Manipulação em parceria com a Biomagistral."],
      ["Orçamento", "O cliente envia fórmula, quantidade e receita para análise."],
      ["Retorno da equipe", "A loja confirma prazo, valor e próximos passos pelo WhatsApp."],
    ],
    requestForm: "manipulacao",
    primary: ["Enviar orçamento", "whatsapp"],
  },
  "servicos-saude": {
    eyebrow: "Serviços de saúde",
    title: "Cuidado farmacêutico Onório",
    text: "Serviços de apoio à rotina de saúde, realizados com acolhimento e orientação da equipe da drogaria.",
    cards: [
      ["Aferição de pressão", "Acompanhamento rápido para controle e orientação inicial."],
      ["Glicemia capilar", "Medição de glicemia para apoiar o cuidado diário."],
      ["Aplicação de injetáveis", "Aplicação conforme prescrição e disponibilidade da unidade."],
    ],
    sections: [
      {
        title: "Atendimento humanizado",
        text: "O cliente pode consultar disponibilidade, unidade e horário pelo atendimento da loja antes de ir.",
        items: ["Orientação farmacêutica", "Registro de atendimento", "Encaminhamento para avaliação médica quando necessário"],
      },
    ],
    primary: ["Falar no WhatsApp", "whatsapp"],
  },
  prescricao: {
    eyebrow: "Prescrição digital",
    title: "Envie sua receita",
    text: "Envie a prescrição pelo site e a equipe da Onório confere disponibilidade, regras de venda e orientação para retirada ou entrega.",
    cards: [
      ["Receita digital", "Envie imagem ou PDF para análise da equipe."],
      ["Conferência", "Medicamentos sujeitos à prescrição seguem a legislação vigente."],
      ["Retorno", "A loja responde pelo WhatsApp com disponibilidade e próximos passos."],
    ],
    requestForm: "prescricao",
    primary: ["Falar no WhatsApp", "whatsapp"],
  },
  clienteon: {
    eyebrow: "Programa de pontos",
    title: "Cliente ON",
    text: "Compre na Onório, acumule pontos e use o saldo para abater no valor da próxima compra.",
    cards: [
      ["R$ 1,00 = 1 ponto", "Cada real em compras gera 1 ponto Cliente ON."],
      ["100 pontos = R$ 1,00", "A cada 100 pontos, o cliente pode abater R$ 1,00 no total."],
      ["Uso opcional", "No final da compra o site sempre pergunta se deseja usar os pontos."],
    ],
    sections: [
      {
        title: "Benefícios",
        text: "O programa ajuda o cliente a economizar sem trocar produto: os pontos viram desconto direto no carrinho.",
        items: ["Saldo visível no checkout", "Desconto aplicado só com confirmação", "Novos pontos acumulados aparecem no pedido finalizado"],
      },
    ],
    primary: ["Ver pagamento", "pagamento"],
  },
  pbm: {
    eyebrow: "Descontos",
    title: "Programa de descontos",
    text: "Central para PBMs e benefícios de laboratórios em medicamentos participantes, com ativação por CPF conforme regra de cada programa.",
    cards: [
      ["PBM Laboratórios", "Programas de benefícios para medicamentos selecionados."],
      ["Genéricos", "Campanhas com descontos de até 95% quando disponíveis."],
      ["Leve 3 pague 2", "Ofertas promocionais em itens participantes."],
    ],
    sections: [
      {
        title: "PBMs em implantação",
        text: "Na versão integrada, esta página poderá exibir programas ativos por laboratório, CPF, EAN, estoque por loja e regra de desconto.",
        items: ["Neo Química, Medley, EMS e similares a confirmar com a loja", "Cadastro por CPF", "Validação no fechamento da compra"],
      },
    ],
    primary: ["Ver descontos", "descontos"],
  },
  conta: {
    eyebrow: "Perfil",
    title: "Minha conta",
    text: "Área para o cliente entrar, acompanhar pedidos, editar dados e consultar saldo Cliente ON.",
    cards: [
      ["Criar nova conta", "Cadastro com nome, CPF, telefone, e-mail e CEP."],
      ["Dados pessoais", "Alteração de cadastro para manter contato e entregas atualizados."],
      ["Cliente ON", "Consulta de pontos e regras de uso no checkout."],
    ],
    actions: [
      { label: "Criar nova conta", route: "#login", text: "Entrar ou cadastrar" },
      { label: "Alterar dados pessoais", page: "dados", text: "Atualizar cadastro" },
      { label: "Acompanhar pedido", page: "pedidos", text: "Ver status" },
      { label: "Editar endereços", page: "enderecos", text: "Gerenciar entrega" },
    ],
    primary: ["Entrar", "login"],
  },
  dados: {
    eyebrow: "Perfil",
    title: "Alterar dados pessoais",
    text: "Espaço reservado para o cliente atualizar nome, CPF, telefone, e-mail e preferências de contato.",
    cards: [
      ["Cadastro", "Nome completo, CPF e data de nascimento."],
      ["Contato", "Telefone, SMS e e-mail para movimentação do pedido."],
      ["Privacidade", "Dados tratados com segurança conforme a política da loja."],
    ],
    primary: ["Ir para login", "login"],
  },
  enderecos: {
    eyebrow: "Perfil",
    title: "Editar endereços",
    text: "Área para cadastrar CEPs, calcular entrega e salvar endereços favoritos para próximas compras.",
    cards: [
      ["CEP", "Busca automática do endereço."],
      ["Entrega", "Taxa conforme distância da loja mais próxima."],
      ["Retirada", "Cliente também pode retirar grátis na unidade escolhida."],
    ],
    primary: ["Consultar CEP", "entrega"],
  },
  atendimento: {
    eyebrow: "Ajuda",
    title: "Central de atendimento",
    text: "Canais oficiais para dúvidas, pedidos, trocas, cancelamentos e acompanhamento de compra.",
    cards: [
      ["Loja 1", "(16) 3618-0883"],
      ["Loja 2", "(16) 3442-2440"],
      ["WhatsApp", "(16) 99799-7878"],
      ["E-mail", "onoriodrogaria@gmail.com"],
    ],
    actions: [
      { label: "Falar no WhatsApp", href: whatsappUrl("Olá, Drogaria Onório! Preciso de atendimento pelo site."), text: "(16) 99799-7878" },
      { label: "Formas de pagamento", page: "pagamentos", text: "Pix, cartão, Mercado Pago, PicPay e boleto" },
      { label: "Troca ou devolução", page: "trocas", text: "Orientações do pedido" },
    ],
    primary: ["Falar no WhatsApp", "whatsapp"],
  },
  trocas: {
    eyebrow: "Atendimento",
    title: "Troca ou devolução",
    text: "Página de orientação para pedidos online, com análise pela equipe conforme produto, nota, prazo e legislação aplicável.",
    cards: [
      ["Fale com a loja", "Informe número do pedido, CPF e produto."],
      ["Análise", "A equipe confere condição do item e regra de troca."],
      ["Medicamentos", "Itens de saúde seguem normas específicas de segurança."],
    ],
    primary: ["Falar no WhatsApp", "whatsapp"],
  },
  seguranca: {
    eyebrow: "Segurança e privacidade",
    title: "Ambiente 100% seguro",
    text: "A Onório preza pela privacidade e segurança dos dados dos clientes nos canais digitais.",
    cards: [
      ["Dados protegidos", "Uso de informações apenas para compra, atendimento e melhoria da experiência."],
      ["Pagamento", "Meios de pagamento protegidos e integração futura com provedores oficiais."],
      ["Privacidade", "Preferências de cookies e comunicação podem ser revisadas."],
    ],
    actions: [
      { label: "Preferências de cookies", page: "cookies", text: "Configurar privacidade" },
      { label: "Central de atendimento", page: "atendimento", text: "Tirar dúvidas" },
    ],
    primary: ["Preferências de cookies", "cookies"],
  },
});

infoPages.servicos = infoPages["servicos-saude"];
infoPages.vacinas = infoPages["servicos-saude"];

function hasProductVariants(product) {
  return Boolean(product?.variants?.length);
}

function productVariantOptions(product) {
  return product?.variants || [];
}

function productBasePrice(product) {
  const variants = productVariantOptions(product);
  return variants.length ? Math.min(...variants.map((variant) => variant.price)) : product.price;
}

function getVariantProduct(id) {
  for (const product of products) {
    const variant = productVariantOptions(product).find((item) => item.id === id);

    if (variant) {
      return {
        ...product,
        ...variant,
        parentId: product.id,
        name: `${product.name} ${variant.label}`,
        image: variant.image || product.image,
        category: product.category,
        tag: product.tag,
        description: product.description,
        caution: product.caution,
        variants: undefined,
      };
    }
  }

  return null;
}

const getProduct = (id) => products.find((product) => product.id === id) || getVariantProduct(id);
const ANVISA_BULARIO_URL = "https://www.gov.br/anvisa/pt-br/sistemas/bulario-eletronico";

const svg = (name) => `<svg aria-hidden="true" viewBox="0 0 24 24">${icons[name]}</svg>`;

const productArt = {
  offer: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <path d="M35 17h27l8 58-22-11-22 11Z" fill="#2e86de" />
      <path d="M35 17h27l4 28H30Z" fill="#67b7ff" />
      <circle cx="48" cy="42" r="23" fill="#73bdff" />
      <path d="M38 53 58 32" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" />
      <circle cx="39" cy="35" r="5" fill="#ffffff" />
      <circle cx="57" cy="51" r="5" fill="#ffffff" />
    </svg>
  `,
  cold: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <g transform="rotate(9 48 48)">
        <rect x="24" y="28" width="50" height="36" rx="7" fill="#1eb980" />
        <path d="M24 45h50v19H24Z" fill="#6f49c7" />
        <path d="M30 34h24" stroke="#ffffff" stroke-width="5" stroke-linecap="round" />
        <path d="M31 53h32" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity=".9" />
      </g>
      <ellipse cx="28" cy="72" rx="13" ry="5" fill="#d7f6ee" />
    </svg>
  `,
  wellness: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <rect x="38" y="18" width="21" height="8" rx="3" fill="#0d6f4b" />
      <rect x="32" y="25" width="33" height="50" rx="8" fill="#2ba36f" />
      <rect x="35" y="39" width="27" height="20" rx="5" fill="#ffffff" opacity=".9" />
      <path d="M45 48h8M49 44v8" stroke="#2ba36f" stroke-width="4" stroke-linecap="round" />
      <g transform="rotate(-18 30 72)">
        <rect x="18" y="67" width="23" height="9" rx="4.5" fill="#ffb14a" />
        <rect x="29" y="67" width="12" height="9" rx="4.5" fill="#ffffff" opacity=".9" />
      </g>
    </svg>
  `,
  baby: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <g transform="rotate(-9 48 48)">
        <rect x="29" y="20" width="38" height="55" rx="9" fill="#ffd43b" />
        <path d="M30 27h36v12H30Z" fill="#ef3b2d" />
        <path d="M30 61h36v14H30Z" fill="#ef3b2d" />
        <circle cx="48" cy="49" r="11" fill="#fff6bf" />
        <path d="M39 49h18" stroke="#f2b705" stroke-width="4" stroke-linecap="round" />
      </g>
    </svg>
  `,
  beauty: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <g transform="rotate(7 48 48)">
        <rect x="36" y="21" width="25" height="55" rx="8" fill="#d65aa0" />
        <rect x="39" y="15" width="19" height="9" rx="3" fill="#7a3869" />
        <rect x="40" y="39" width="17" height="18" rx="5" fill="#ffffff" opacity=".86" />
      </g>
      <circle cx="65" cy="30" r="7" fill="#ffd4e9" opacity=".9" />
    </svg>
  `,
  hair: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <g transform="rotate(-10 38 48)">
        <rect x="27" y="20" width="21" height="55" rx="8" fill="#d8a84a" />
        <rect x="30" y="14" width="15" height="9" rx="3" fill="#946b23" />
        <path d="M31 43h14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
      </g>
      <g transform="rotate(13 58 50)">
        <rect x="52" y="23" width="20" height="50" rx="8" fill="#6eaf70" />
        <rect x="55" y="17" width="14" height="8" rx="3" fill="#2c7b48" />
        <path d="M56 47h12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
      </g>
    </svg>
  `,
  oral: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <g transform="rotate(-10 48 48)">
        <rect x="22" y="38" width="50" height="22" rx="6" fill="#ffffff" stroke="#cfe5ef" stroke-width="3" />
        <path d="M25 41h44v8H25Z" fill="#1976d2" />
        <path d="M26 52h28" stroke="#ef4444" stroke-width="5" stroke-linecap="round" />
      </g>
      <rect x="61" y="22" width="8" height="48" rx="4" fill="#0f6fbd" transform="rotate(22 65 46)" />
      <path d="M66 21h14" stroke="#2dd4bf" stroke-width="6" stroke-linecap="round" />
    </svg>
  `,
  pet: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <g transform="rotate(9 48 48)">
        <path d="M32 24h30l8 15v34H24V39Z" fill="#ff9f45" />
        <path d="M32 24h30l5 10H27Z" fill="#ffcf7a" />
        <circle cx="47" cy="53" r="13" fill="#ffffff" opacity=".9" />
        <circle cx="41" cy="49" r="3" fill="#ff9f45" />
        <circle cx="53" cy="49" r="3" fill="#ff9f45" />
        <circle cx="47" cy="57" r="4" fill="#ff9f45" />
      </g>
    </svg>
  `,
  services: `
    <svg class="product-art" aria-hidden="true" viewBox="0 0 96 96">
      <path d="M30 24v21a16 16 0 0 0 32 0V24" fill="none" stroke="#4d5872" stroke-width="6" stroke-linecap="round" />
      <circle cx="30" cy="24" r="5" fill="#4d5872" />
      <circle cx="62" cy="24" r="5" fill="#4d5872" />
      <path d="M46 61c0 14 24 14 24-1" fill="none" stroke="#4d5872" stroke-width="6" stroke-linecap="round" />
      <circle cx="72" cy="59" r="9" fill="#d9f1ff" stroke="#4d5872" stroke-width="5" />
      <path d="m24 73 18-18" stroke="#2f80ed" stroke-width="6" stroke-linecap="round" />
      <path d="m23 58 16 16" stroke="#2f80ed" stroke-width="6" stroke-linecap="round" />
    </svg>
  `,
};

const productArtwork = (name) => productArt[name] || svg(name);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function productMedia(product, variant = "card") {
  const isDetail = variant === "detail";
  const mediaClass = isDetail ? "product-photo-frame detail-photo-frame" : "product-photo-frame";
  const image = product.image || "assets/products/prescription-box.svg";

  return `
    <div class="${mediaClass}">
      <img class="product-photo" src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
    </div>
  `;
}

function productGalleryMarkup(product) {
  const images = [...new Set(product.gallery?.length ? product.gallery : [product.image])].filter(Boolean);
  const visibleImages = images.length ? images : ["assets/products/prescription-box.svg"];
  const profile = product.medicine;
  const thumbImages = visibleImages.slice(0, 4);

  return `
    <div class="product-gallery">
      <div class="product-gallery-main">
        ${productMedia(product, "detail")}
      </div>
      ${profile ? `
        <div class="product-gallery-banner">
          <span>Compra segura</span>
          <strong>Confira apresentação, bula e estoque antes de finalizar.</strong>
        </div>
      ` : ""}
      <div class="product-gallery-thumbs" aria-label="Galeria do produto">
        ${thumbImages
          .map(
            (image, index) => `
              <span class="gallery-thumb ${index === 0 ? "is-active" : ""}">
                <img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)} ${index + 1}" loading="lazy" />
              </span>
            `,
          )
          .join("")}
        ${profile ? `
          <span class="gallery-thumb gallery-thumb-info">Bula</span>
          <span class="gallery-thumb gallery-thumb-info">Estoque</span>
        ` : ""}
      </div>
    </div>
  `;
}

function productHighlightsMarkup(product) {
  const highlights = product.medicine?.highlights || [
    product.stock || "Consultar estoque",
    "Retirada na loja ou entrega",
    "Cliente ON acumula pontos",
  ];

  return `
    <ul class="product-page-highlights">
      ${highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function medicineDetailsMarkup(product) {
  const profile = product.medicine;
  if (!profile) return "";

  const rows = [
    ["Marca", product.name],
    ["Quantidade", product.detail],
    ["Princípio ativo", profile.active],
    ["Código do produto", profile.code],
    ["Fabricante", profile.manufacturer],
    ["Registro MS", profile.msRegister],
    ["Dosagem", profile.dosage],
  ];
  const presentations = productVariantOptions(product);

  return `
    <section class="medicine-detail-section" aria-label="Dados completos do medicamento">
      <article class="medicine-description-card">
        <span>Descrição completa</span>
        <h2>Descrição do produto</h2>

        <h3>Para que serve?</h3>
        <p>${escapeHtml(profile.purpose)}</p>

        <h3>Composição</h3>
        <p>${escapeHtml(profile.composition)}</p>

        <h3>Como usar</h3>
        <p>${escapeHtml(profile.howToUse)}</p>

        <h3>Orientação de segurança</h3>
        <p>${escapeHtml(profile.safety)}</p>

        <div class="medicine-warning-box">
          <strong>Uso responsável</strong>
          <span>As informações deste protótipo não substituem orientação médica ou farmacêutica. Antes de publicar, valide bula, registro, estoque e restrições de venda no cadastro oficial da loja.</span>
        </div>
      </article>

      <aside class="medicine-data-panel">
        <article class="medicine-data-card">
          <h3>Dados do medicamento</h3>
          ${rows
            .map(
              ([label, value]) => `
                <div>
                  <span>${escapeHtml(label)}</span>
                  <strong>${escapeHtml(value || "A confirmar")}</strong>
                </div>
              `,
            )
            .join("")}
        </article>

        <article class="medicine-data-card">
          <h3>Apresentações na loja</h3>
          ${presentations
            .map(
              (item) => `
                <div>
                  <span>${escapeHtml(item.detail)}</span>
                  <strong>${formatCurrency(item.price)} · ${escapeHtml(item.stock || "Consultar estoque")}</strong>
                </div>
              `,
            )
            .join("")}
        </article>

        <a class="checkout-outline product-external-link" href="${ANVISA_BULARIO_URL}" target="_blank" rel="noopener">Consultar Bulário Anvisa</a>
      </aside>
    </section>
  `;
}

function miniProductImage(productId, label) {
  const product = getProduct(productId);
  const image = product?.image || "assets/products/prescription-box.svg";
  const alt = label || product?.name || "Produto";

  return `<img class="mini-photo" src="${escapeHtml(image)}" alt="${escapeHtml(alt)}" loading="lazy" />`;
}

function categoryScene(category) {
  const productImages = category.products || [];
  const productsMarkup = productImages
    .slice(0, 2)
    .map(
      (image, index) =>
        `<img class="scene-pack scene-pack-${index + 1}" src="${escapeHtml(image)}" alt="" loading="lazy" aria-hidden="true" />`,
    )
    .join("");
  const iconMarkup = category.sceneIcon ? `<span class="scene-icon">${svg(category.sceneIcon)}</span>` : "";
  const badgeMarkup = category.badge ? `<span class="scene-badge">${escapeHtml(category.badge)}</span>` : "";

  return `
    <span class="scene-bg" aria-hidden="true"></span>
    <span class="scene-glass" aria-hidden="true"></span>
    ${productsMarkup}
    ${iconMarkup}
    ${badgeMarkup}
  `;
}

function getCartItemCount(items = calculateCart().items) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

function getSelectedStore() {
  return pickupStores.find((store) => store.id === state.selectedStore) || pickupStores[0];
}

function normalizeCep(value = "") {
  return String(value).replace(/\D/g, "").slice(0, 8);
}

function formatCep(value = "") {
  const cep = normalizeCep(value);
  return cep.length === 8 ? `${cep.slice(0, 5)}-${cep.slice(5)}` : value;
}

function formatDistance(km = 0) {
  return `${km.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} km`;
}

function formatAddressFromCep(data) {
  const district = data.district || data.neighborhood;
  return [
    data.address,
    district,
    data.city && data.state ? `${data.city}/${data.state}` : data.city || data.state,
  ]
    .filter(Boolean)
    .join(" - ");
}

function haversineDistanceKm(a, b) {
  const earthRadiusKm = 6371;
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function nearestStoreFromPoint(point) {
  return pickupStores
    .map((store) => ({
      ...store,
      distanceKm: haversineDistanceKm(point, { lat: store.lat, lng: store.lng }),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)[0];
}

function getCustomerLocationPoint() {
  const quote = state.deliveryQuote;
  const quoteCep = normalizeCep(quote?.cep || quote?.formattedCep || "");
  const activeCep = normalizeCep(state.cep || state.customer.cep || quoteCep);

  if (
    quote &&
    (!activeCep || quoteCep === activeCep) &&
    Number.isFinite(Number(quote.lat)) &&
    Number.isFinite(Number(quote.lng))
  ) {
    return {
      lat: Number(quote.lat),
      lng: Number(quote.lng),
      cep: quote.formattedCep || formatCep(quoteCep),
    };
  }

  return null;
}

function pickupStoreDistanceMarkup(store) {
  const point = getCustomerLocationPoint();

  if (point) {
    const distanceKm = roundMoney(
      haversineDistanceKm(point, { lat: store.lat, lng: store.lng }),
    );

    return `<span class="store-distance">${svg("location")} ${formatDistance(distanceKm)} do CEP ${escapeHtml(point.cep)}</span>`;
  }

  const cep = formatCep(state.cep || state.customer.cep || "");
  const message =
    state.shippingStatus === "loading"
      ? `Calculando distância do CEP ${cep || "informado"}...`
      : cep
        ? `Calcule para ver a distância do CEP ${cep}`
        : "Informe o CEP para ver a distância";

  return `<span class="store-distance is-pending">${svg("location")} ${escapeHtml(message)}</span>`;
}

function getDeliveryFeeFromDistance(distanceKm) {
  return distanceKm > DELIVERY_DISTANCE_LIMIT_KM ? DELIVERY_FEE_FAR : DELIVERY_FEE_CLOSE;
}

function currentDeliveryFee() {
  return state.deliveryQuote?.fee || 0;
}

function isLocalDeliveryCity(city = "") {
  return normalizeText(city) === LOCAL_DELIVERY_CITY;
}

function estimateSedexQuote({ state = "", distanceKm = 0 }) {
  const uf = String(state || "").toUpperCase();
  let fee = 39.9;
  let days = "3 a 5 dias úteis";

  if (uf === "SP") {
    fee = distanceKm <= 180 ? 24.9 : 32.9;
    days = distanceKm <= 180 ? "1 a 2 dias úteis" : "2 a 3 dias úteis";
  } else if (["MG", "RJ", "PR", "MS"].includes(uf)) {
    fee = 44.9;
    days = "2 a 4 dias úteis";
  } else if (["SC", "RS", "ES", "GO", "DF"].includes(uf)) {
    fee = 54.9;
    days = "3 a 5 dias úteis";
  } else {
    fee = 69.9;
    days = "4 a 7 dias úteis";
  }

  return {
    fee,
    days,
    service: "SEDEX",
    officialUrl: CORREIOS_PRICE_URL,
    note: "Estimativa demonstrativa. O preço final deve ser integrado à API/contrato dos Correios.",
  };
}

async function fetchCepData(cep) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch(`${CEP_API_BASE_URL}${cep}`, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(response.status === 404 ? "CEP não encontrado." : "Não foi possível consultar esse CEP.");
    }
    return response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

async function quoteDeliveryByCep(rawCep) {
  const cep = normalizeCep(rawCep);

  if (cep.length !== 8) {
    throw new Error("Digite um CEP com 8 números.");
  }

  const data = await fetchCepData(cep);
  const lat = Number(data.lat);
  const lng = Number(data.lng);

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    throw new Error("Encontramos o endereço, mas não recebemos coordenadas para calcular a distância.");
  }

  const nearestStore = nearestStoreFromPoint({ lat, lng });
  const distanceKm = roundMoney(nearestStore.distanceKm);
  const isLocal = isLocalDeliveryCity(data.city);
  const sedexQuote = isLocal ? null : estimateSedexQuote({ state: data.state, distanceKm });

  return {
    cep,
    formattedCep: formatCep(cep),
    street: data.address || "",
    address: formatAddressFromCep(data),
    district: data.district || data.neighborhood || "",
    city: data.city || "",
    state: data.state || "",
    lat,
    lng,
    nearestStoreId: nearestStore.id,
    nearestStoreName: nearestStore.name,
    nearestStoreAddress: nearestStore.fullAddress || nearestStore.address,
    distanceKm,
    deliveryMode: isLocal ? "local" : "sedex",
    serviceLabel: isLocal ? "Entrega local" : "SEDEX",
    fee: isLocal ? getDeliveryFeeFromDistance(distanceKm) : sedexQuote.fee,
    deliveryDays: isLocal ? "Entrega local conforme disponibilidade da loja" : sedexQuote.days,
    sedex: sedexQuote,
  };
}

async function ensurePickupDistanceQuote() {
  const cep = normalizeCep(state.cep || state.customer.cep || "");
  const quoteCep = normalizeCep(state.deliveryQuote?.cep || state.deliveryQuote?.formattedCep || "");

  if (cep.length !== 8) {
    return false;
  }

  if (
    quoteCep === cep &&
    Number.isFinite(Number(state.deliveryQuote?.lat)) &&
    Number.isFinite(Number(state.deliveryQuote?.lng))
  ) {
    return false;
  }

  state.shippingStatus = "loading";
  state.shippingError = "";
  renderCart();

  try {
    const quote = await quoteDeliveryByCep(cep);
    state.deliveryQuote = quote;
    state.customer.cep = quote.formattedCep;
    state.customer.address ||= quote.address;
    state.cep = quote.formattedCep;
    state.shippingStatus = "done";
    state.shippingError = "";
    return true;
  } catch (error) {
    state.shippingStatus = "error";
    state.shippingError = error.message || "Não foi possível calcular a distância pelo CEP.";
    showToast(state.shippingError);
    return false;
  }
}

function deliveryAddressFieldsMarkup() {
  if (!state.deliveryQuote) return "";

  const receiverName = state.customer.receiverName || state.customer.fullName || state.customer.name || "";

  return `
    <div class="delivery-address-fields">
      <label class="checkout-field">
        <span>Número*</span>
        <input data-checkout-customer="addressNumber" type="text" inputmode="numeric" autocomplete="address-line2" placeholder="Ex.: 2777" value="${escapeHtml(state.customer.addressNumber)}" />
      </label>
      <label class="checkout-field">
        <span>Complemento</span>
        <input data-checkout-customer="addressComplement" type="text" autocomplete="address-line3" placeholder="Apto, bloco, sala..." value="${escapeHtml(state.customer.addressComplement)}" />
      </label>
      <label class="checkout-field delivery-receiver-field">
        <span>Nome de quem vai receber*</span>
        <input data-checkout-customer="receiverName" type="text" autocomplete="name" placeholder="Nome completo" value="${escapeHtml(receiverName)}" />
      </label>
    </div>
  `;
}

function validateHomeDeliveryDetails() {
  if (state.delivery !== "home") return true;
  if (!state.deliveryQuote) {
    showToast("Calcule o CEP antes de seguir para pagamento.");
    return false;
  }
  if (!state.customer.addressNumber.trim()) {
    showToast("Informe o número do endereço para entrega.");
    return false;
  }
  if (!(state.customer.receiverName || state.customer.fullName || state.customer.name).trim()) {
    showToast("Informe o nome de quem vai receber.");
    return false;
  }
  return true;
}

function customerAddressSummary() {
  const quote = state.deliveryQuote;
  const cityState = quote?.city && quote?.state ? `${quote.city}/${quote.state}` : "";
  const quoteAddress = quote
    ? [quote.street, quote.district].filter(Boolean).join(" - ") || quote.address
    : "";
  const baseAddress = quoteAddress || state.customer.address || "";
  const number = state.customer.addressNumber ? `nº ${state.customer.addressNumber}` : "";
  const complement = state.customer.addressComplement || "";
  const fullAddress = [baseAddress, number, complement, cityState].filter(Boolean).join(" - ");

  return {
    fullAddress,
    cityState,
    serviceLabel: quote?.serviceLabel || "",
    fee: quote?.fee,
  };
}

function shippingQuoteMarkup() {
  if (state.shippingStatus === "loading") {
    return `
      <div class="shipping-result is-loading">
        <strong>Consultando CEP...</strong>
        <span>Estamos buscando o endereço e calculando a distância até a loja mais próxima.</span>
      </div>
    `;
  }

  if (state.shippingError) {
    return `
      <div class="shipping-result is-error">
        <strong>Não foi possível calcular o frete</strong>
        <span>${escapeHtml(state.shippingError)}</span>
      </div>
    `;
  }

  if (!state.deliveryQuote) {
    return `
      <div class="shipping-hint">
        <span>Digite o CEP para ver o endereço, a loja mais próxima e a taxa de entrega.</span>
      </div>
    `;
  }

  const quote = state.deliveryQuote;
  const isSedex = quote.deliveryMode === "sedex";
  return `
    <div class="shipping-result ${isSedex ? "is-sedex" : ""}">
      <div>
        <strong>${escapeHtml(quote.address || `CEP ${quote.formattedCep}`)}</strong>
        ${isSedex ? `<span>Fora de Ribeirão Preto: envio por ${escapeHtml(quote.serviceLabel)} · prazo estimado ${escapeHtml(quote.deliveryDays)}</span>` : ""}
        <span>Loja mais próxima: ${escapeHtml(quote.nearestStoreName)} · ${formatDistance(quote.distanceKm)}</span>
        ${isSedex ? `<small>${escapeHtml(quote.sedex?.note || "Valor sujeito à confirmação dos Correios.")}</small>` : ""}
      </div>
      <div>
        <small>${isSedex ? "Frete SEDEX" : "Taxa de entrega"}</small>
        <strong>${formatCurrency(quote.fee)}</strong>
        ${isSedex ? `<a href="${CORREIOS_PRICE_URL}" target="_blank" rel="noopener">Conferir Correios</a>` : ""}
      </div>
    </div>
    ${deliveryAddressFieldsMarkup()}
  `;
}

function pointsToDiscount(points = LOYALTY_EXAMPLE_BALANCE) {
  return roundMoney(points / LOYALTY_POINTS_PER_REAL_DISCOUNT);
}

function getCustomerPointsBalance() {
  return state.customer.points ?? LOYALTY_EXAMPLE_BALANCE;
}

function availablePointsDiscountForCart(subtotal = 0, pixDiscount = 0) {
  const availableDiscount = pointsToDiscount(getCustomerPointsBalance());
  const maxDiscount = Math.max(0, subtotal - pixDiscount);
  return roundMoney(Math.min(availableDiscount, maxDiscount));
}

function maxCardInstallments(total) {
  if (total >= 1000) return 6;
  if (total >= 100) return 3;
  return 1;
}

function cardInstallmentText(total) {
  const installments = maxCardInstallments(total);
  if (installments === 1) {
    return `Pagamento à vista de ${formatCurrency(total)}`;
  }
  return `${installments}x s/ juros de ${formatCurrency(roundMoney(total / installments))}`;
}

function cardInstallmentOptions(total) {
  const installments = maxCardInstallments(total);
  return Array.from({ length: installments }, (_, index) => {
    const quantity = index + 1;
    const label = quantity === 1
      ? `Pagamento à vista - ${formatCurrency(total)}`
      : `${quantity}x sem juros - ${formatCurrency(roundMoney(total / quantity))}`;

    return `<option>${label}</option>`;
  }).join("");
}

function getCatalogConfig(routeKey = "todos") {
  if (routeKey === "todos") {
    return {
      routeKey,
      title: "Todos os produtos",
      categoryId: "all",
      query: "",
      description: "Vitrine geral com produtos demonstrativos. Quando integrar com o sistema da loja, esta tela recebera saldo, preco e disponibilidade reais.",
    };
  }

  if (routeKey === "busca") {
    return {
      routeKey,
      title: "Resultado da busca",
      categoryId: "all",
      query: state.query,
      description: "Resultado filtrado pelo termo digitado na busca.",
    };
  }

  const category = categories.find((item) => item.routeKey === routeKey);
  if (!category) return getCatalogConfig("todos");

  return {
    routeKey,
    title: category.label,
    categoryId: category.id,
    query: category.query || "",
    description: category.query
      ? "Produtos em destaque para ofertas e campanhas do dia."
      : "Produtos demonstrativos desta categoria. A integracao futura deve substituir esta lista pelo saldo real da loja.",
  };
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function filterProductsBy(categoryId = "all", queryValue = "") {
  const query = normalizeText(queryValue);

  return products.filter((product) => {
    const inCategory = categoryId === "all" || product.category === categoryId;
    const variantText = productVariantOptions(product)
      .map((variant) => `${variant.label} ${variant.detail}`)
      .join(" ");
    const haystack = normalizeText(`${product.name} ${product.detail} ${product.category} ${product.tag} ${product.promo || ""} ${product.description || ""} ${variantText}`);
    return inCategory && (!query || haystack.includes(query));
  });
}

function productCatalogRoute(product) {
  const routeMap = {
    Medicamentos: "medicamentos",
    Suplementos: "vida-saudavel",
    "Mamãe e bebê": "mamae-bebe",
    Cosméticos: "beleza",
    Perfumaria: "cabelo",
    Conveniência: "higiene-pessoal",
    Pet: "pet",
  };

  return routeMap[product?.category] || "todos";
}

function productSummaryFacts(product) {
  const isMedicine = product.category === "Medicamentos";
  const profile = product.medicine;
  const facts = profile
    ? [
        ["Laboratório", profile.manufacturer],
        ["Princípio ativo", profile.active],
        ["Registro", profile.msRegister],
        ["Apresentações", productVariantOptions(product).map((variant) => variant.label).join(", ")],
      ]
    : [
    ["Marca / linha", product.name],
    ["Apresentação", product.detail],
    ["Categoria", product.category],
    ["Disponibilidade", product.stock || "Consultar estoque"],
      ];

  if (hasProductVariants(product) && !profile) {
    facts[1] = [product.variantSummaryLabel || "Opções", productVariantOptions(product).map((variant) => variant.label).join(", ")];
    facts.push(["Preço inicial", formatCurrency(productBasePrice(product))]);
  } else if (hasProductVariants(product)) {
    facts.push(["Preço inicial", formatCurrency(productBasePrice(product))]);
  }

  if (isMedicine) {
    facts.push(["Uso responsável", "Consultar bula e farmacêutico"]);
  } else {
    facts.push(["Compra", "Retirada na loja ou entrega"]);
  }

  return facts;
}

function itemImage(item, className = "checkout-product-img") {
  return `<img class="${className}" src="${escapeHtml(item.image || "assets/products/prescription-box.svg")}" alt="${escapeHtml(item.name)}" loading="lazy" />`;
}

const paymentLogos = {
  visa: ["Visa", "assets/payments/visa.svg"],
  mastercard: ["Mastercard", "assets/payments/mastercard.svg"],
  amex: ["American Express", "assets/payments/amex.svg"],
  elo: ["Elo", "assets/payments/elo.svg"],
  mercadoPago: ["Mercado Pago", "assets/payments/mercado-pago.svg"],
  picpay: ["PicPay", "assets/payments/picpay.svg"],
  boleto: ["Boleto bancário", "assets/payments/boleto.svg"],
  pix: ["Pix", "assets/payments/pix.svg"],
};

function paymentLogo(key, className = "mini-flag") {
  const [label, src] = paymentLogos[key];
  const wideClass = ["mercadoPago", "boleto", "picpay"].includes(key) ? " is-wide" : "";
  return `<span class="${className}${wideClass}" aria-label="${escapeHtml(label)}"><img src="${escapeHtml(src)}" alt="${escapeHtml(label)}" loading="lazy" /></span>`;
}

function cardFlags() {
  return `
    ${paymentLogo("visa")}
    ${paymentLogo("mastercard")}
    ${paymentLogo("amex")}
    ${paymentLogo("elo")}
  `;
}

function digitalPaymentFlags() {
  return `
    ${paymentLogo("mercadoPago")}
    ${paymentLogo("picpay")}
    ${paymentLogo("boleto")}
    ${paymentLogo("pix")}
  `;
}

function checkoutHeader() {
  const { items, total } = calculateCart();
  const itemCount = getCartItemCount(items);
  const cartItemLabel = `${itemCount} ${itemCount === 1 ? "item" : "itens"}`;
  const customerTitle = state.loggedIn ? getCustomerHeaderName() : "Cliente Onório";
  const customerSubtitle = state.loggedIn ? "Minha conta" : "Entrar ou cadastrar";

  return `
    <header class="checkout-market-header" aria-label="Barra da Drogaria Onório">
      <div class="market-header-main checkout-market-main">
        <a class="market-brand" href="#" data-route="#home" aria-label="Voltar para a Drogaria Onório">
          <img src="assets/onorio-logo.png" alt="Drogaria Onório" class="market-brand-logo" />
        </a>

        <form class="market-search" data-checkout-search-form role="search">
          <input
            data-checkout-search-input
            type="search"
            placeholder="O que deseja encontrar?"
            autocomplete="off"
            value="${escapeHtml(state.query || "")}"
          />
          <button type="submit" aria-label="Buscar">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
            </svg>
          </button>
        </form>

        <nav class="market-actions" aria-label="Ações da conta e cesta">
          <div class="app-download">
            <button type="button" class="app-download-button" data-app-download-toggle aria-expanded="false">
              Baixe o app
            </button>
            <div class="app-download-panel" role="dialog" aria-label="Baixe o app da Drogaria Onório" hidden>
              <img class="app-qr-code" alt="QR Code para abrir o app da Drogaria Onório" />
              <strong>Tenha a Onório no celular</strong>
              <span>Siga os passos e aproveite a experiência em formato de app.</span>
              <ol>
                <li>Abra a câmera do celular</li>
                <li>Aponte para este QR code</li>
                <li>Abra o site e adicione à tela inicial</li>
              </ol>
              <small>Em breve, app nas lojas oficiais.</small>
            </div>
          </div>
          <button type="button" class="account-link" data-account-link data-route="#login" aria-label="${escapeHtml(state.loggedIn ? `Minha conta de ${customerTitle}` : "Entrar ou cadastrar na Drogaria Onório")}">
            ${svg("user")}
            <span>
              <strong data-account-title>${escapeHtml(customerTitle)}</strong>
              <small data-account-subtitle>${escapeHtml(customerSubtitle)}</small>
            </span>
          </button>
          <button type="button" class="orders-link" data-info-page="pedidos">
            ${svg("basket")}
            <span>
              <strong>Meus</strong>
              <small>pedidos</small>
            </span>
          </button>
          <button type="button" class="cart-pill" data-open-cart aria-label="${escapeHtml(`${cartItemLabel} na cesta. Total ${formatCurrency(total)}.`)}">
            <span data-cart-count>${escapeHtml(cartItemLabel)}</span>
            <strong data-cart-total>${formatCurrency(total)}</strong>
          </button>
        </nav>
      </div>
    </header>
  `;
}

function checkoutBreadcrumb(current) {
  return `
    <nav class="checkout-breadcrumb" aria-label="Caminho do checkout">
      <a href="#" data-route="#home">Página inicial</a>
      <span>›</span>
      <span>${current}</span>
    </nav>
  `;
}

function checkoutShell(title, body, aside = "") {
  return `
    ${checkoutHeader()}
    <main class="checkout-page">
      ${checkoutBreadcrumb(title)}
      <div class="checkout-page-grid ${aside ? "" : "is-centered"}">
        <section class="checkout-main-card">
          ${body}
        </section>
        ${aside}
      </div>
    </main>
  `;
}

function checkoutItemsList(items, variant = "wide") {
  if (!items.length) {
    return `
      <div class="checkout-empty">
        <strong>Sua cesta está vazia</strong>
        <span>Volte para a loja e adicione produtos para continuar.</span>
        <button type="button" class="checkout-link-button" data-route="#home">Voltar para a loja</button>
      </div>
    `;
  }

  return items
    .map(
      (item) => `
      <article class="checkout-product-row ${variant === "compact" ? "is-compact" : ""}">
        ${itemImage(item)}
        <div class="checkout-product-copy">
          <strong>${escapeHtml(item.name)}</strong>
          <span>${escapeHtml(item.detail)}</span>
          <small>${escapeHtml(item.tag || item.category)}</small>
        </div>
        <div class="checkout-qty">
          <button type="button" data-decrease="${item.id}" aria-label="Diminuir ${escapeHtml(item.name)}">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-increase="${item.id}" aria-label="Aumentar ${escapeHtml(item.name)}">+</button>
        </div>
        <button type="button" class="checkout-remove" data-remove="${item.id}" aria-label="Remover ${escapeHtml(item.name)}">
          ${svg("trash")}
        </button>
        <strong class="checkout-row-total">${formatCurrency(item.price * item.quantity)}</strong>
      </article>
    `,
    )
    .join("");
}

function orderSummaryCard(buttonLabel = "Prosseguir", route = "#login", options = {}) {
  const { subtotal, pixDiscount, pointsDiscount, availablePointsDiscount, shipping, total, items, pointsEarned } = calculateCart();
  const count = getCartItemCount(items);
  const showButton = options.showButton !== false;
  const showPixDiscountLine = options.showPixDiscountLine === true && state.customer.payment === "Pix";
  const showPix = state.customer.payment === "Pix";
  const showDeliveryLine = state.delivery === "home";
  const showPointsDiscountLine = state.usePoints && pointsDiscount > 0;
  const summaryHint = state.customer.payment === "Cartão" ? cardInstallmentText(total) : "";
  const paymentSummaryHint = normalizeText(state.customer.payment) === "cartao" ? cardInstallmentText(total) : "";
  const deliverySummaryLabel = state.deliveryQuote?.deliveryMode === "sedex"
    ? `${state.deliveryQuote.serviceLabel}${state.deliveryQuote.deliveryDays ? ` (${state.deliveryQuote.deliveryDays})` : ""}`
    : `Entrega domicílio${state.deliveryQuote ? ` (${formatDistance(state.deliveryQuote.distanceKm)})` : ""}`;
  const pointsSummary = state.usePoints
    ? `- ${formatCurrency(pointsDiscount)}`
    : availablePointsDiscount
      ? `até - ${formatCurrency(availablePointsDiscount)}`
      : "sem pontos";

  return `
    <aside class="checkout-summary-card">
      <h2>Resumo do pedido</h2>
      <div class="summary-line">
        <span>Subtotal (${count})</span>
        <strong>${formatCurrency(subtotal)}</strong>
      </div>
      ${showPixDiscountLine ? `<div class="summary-line discount-line">
        <span>${showPix ? "Desconto Pix 5%" : "Desconto Pix disponível"}</span>
        <strong>${showPix ? `- ${formatCurrency(pixDiscount)}` : "aplique no pagamento"}</strong>
      </div>` : ""}
      ${showDeliveryLine ? `<div class="summary-line">
        <span>${deliverySummaryLabel}</span>
        <strong>${state.deliveryQuote ? formatCurrency(shipping) : "calcule o CEP"}</strong>
      </div>` : ""}
      ${showPointsDiscountLine ? `<div class="summary-line points-discount-line">
        <span>Pontos Cliente ON</span>
        <strong>- ${formatCurrency(pointsDiscount)}</strong>
      </div>` : ""}
      <div class="summary-line total">
        <span>Total</span>
        <strong>${formatCurrency(total)}</strong>
      </div>
      ${paymentSummaryHint ? `<small>${paymentSummaryHint}</small>` : ""}
      ${showButton ? `<button type="button" class="checkout-primary" data-route="${route}">${buttonLabel}</button>` : ""}
      <button type="button" class="checkout-secondary-text" data-route="#home">Continuar comprando</button>
    </aside>
  `;
}

function renderCartCheckoutPage() {
  const { items } = calculateCart();
  const body = `
    <h1>Cesta de compras</h1>
    <div class="checkout-delivery-label">
      <strong>Entrega 1</strong>
      <span>Vendido e entregue por Drogaria Onório</span>
    </div>
    <div class="checkout-list">
      ${checkoutItemsList(items)}
    </div>
  `;

  return checkoutShell("Cesta de compras", body, orderSummaryCard("Prosseguir", "#login"));
}

function renderLoginPage() {
  return `
    ${checkoutHeader()}
    <main class="login-page">
      <form class="login-card" autocomplete="on">
        <label>
          <span>E-mail ou CPF</span>
          <input data-checkout-customer="email" type="text" value="${escapeHtml(state.customer.email)}" />
        </label>
        <label>
          <span>Senha</span>
          <div class="password-field">
            <input type="password" value="" />
            <button type="button" aria-label="Mostrar senha">${svg("eye")}</button>
          </div>
        </label>
        <button type="button" class="checkout-primary" data-checkout-login>Entrar</button>
        <a href="#" data-social-login>Esqueci a senha</a>
        <div class="login-divider"><span>Outros métodos de entrada</span></div>
        <div class="social-login-row">
          <button type="button" data-social-login aria-label="Entrar com Google"><span class="google-g">G</span></button>
          <button type="button" data-social-login aria-label="Entrar com Facebook"><span class="facebook-f">f</span></button>
          <button type="button" data-social-login aria-label="Entrar com iCloud"><span class="apple-a">●</span></button>
        </div>
        <button type="button" class="passwordless-button" data-social-login>Entrar sem senha</button>
        <p>Não tem conta? <a href="#" data-social-login>Cadastre-se</a></p>
      </form>
    </main>
  `;
}

function customerReviewCard(pointsEarned = 0) {
  const fullName = state.customer.fullName || state.customer.name || "Cliente Onório";
  const firstName = fullName.split(" ")[0] || "cliente";
  const customerCep = state.deliveryQuote?.formattedCep || formatCep(state.cep || state.customer.cep || "");
  const availablePoints = state.customer.points ?? LOYALTY_EXAMPLE_BALANCE;
  const addressSummary = customerAddressSummary();
  const receiverName = state.customer.receiverName || fullName;

  return `
    <div class="checkout-card customer-review-card">
      <div class="customer-welcome-copy">
        <div>
          <span>Cadastro do cliente</span>
          <h1>Olá, ${escapeHtml(firstName)}. Obrigado pela confiança.</h1>
          <p>Confira e edite seus dados antes de seguir com a compra na Drogaria Onório.</p>
        </div>
        <div class="customer-card-actions">
          <button type="button" class="checkout-outline compact-action" data-save-customer-data>Atualizar dados</button>
          <button type="button" class="checkout-outline compact-action" data-add-address>Adicionar novo endereço</button>
        </div>
      </div>
      <div class="customer-data-grid">
        <label class="customer-data-field">
          <span>Nome completo</span>
          <input data-checkout-customer="fullName" type="text" autocomplete="name" value="${escapeHtml(fullName)}" />
        </label>
        <label class="customer-data-field">
          <span>CPF</span>
          <input data-checkout-customer="cpf" type="text" inputmode="numeric" autocomplete="off" value="${escapeHtml(state.customer.cpf || "")}" placeholder="Informe o CPF" />
        </label>
        <label class="customer-data-field">
          <span>CEP cadastrado</span>
          <input data-checkout-state="cep" data-customer-cep-card type="text" inputmode="numeric" autocomplete="postal-code" maxlength="9" value="${escapeHtml(customerCep)}" placeholder="00000-000" />
        </label>
        <div class="customer-points-box">
          <span>Pontos disponíveis</span>
          <strong>${availablePoints} pontos</strong>
          <small>Valem ${formatCurrency(pointsToDiscount(availablePoints))} de desconto. Nesta compra: +${pointsEarned} pontos.</small>
        </div>
        <div class="customer-address-box">
          <span>Endereço cadastrado</span>
          <strong>${escapeHtml(addressSummary.fullAddress || "Calcule o CEP para carregar rua, bairro, cidade e estado.")}</strong>
          <small>
            ${addressSummary.cityState ? `Cidade/UF: ${escapeHtml(addressSummary.cityState)}` : "Cidade e estado aparecem depois do CEP calculado."}
            ${addressSummary.serviceLabel ? ` · ${escapeHtml(addressSummary.serviceLabel)} ${formatCurrency(addressSummary.fee)}` : ""}
          </small>
          <div class="customer-address-mini-grid">
            <label>
              <span>Número*</span>
              <input data-checkout-customer="addressNumber" type="text" inputmode="numeric" autocomplete="address-line2" placeholder="Ex.: 2777" value="${escapeHtml(state.customer.addressNumber)}" />
            </label>
            <label>
              <span>Complemento</span>
              <input data-checkout-customer="addressComplement" type="text" autocomplete="address-line3" placeholder="Apto, bloco, casa..." value="${escapeHtml(state.customer.addressComplement)}" />
            </label>
            <label>
              <span>Quem recebe*</span>
              <input data-checkout-customer="receiverName" type="text" autocomplete="name" placeholder="Nome completo" value="${escapeHtml(receiverName)}" />
            </label>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderReviewPage() {
  const { items, subtotal, shipping, total, pointsEarned } = calculateCart();
  const body = `
    <button type="button" class="checkout-back" data-route="#home">‹ Voltar para a loja</button>
    <div class="review-grid">
      <section class="review-stack">
        ${customerReviewCard(pointsEarned)}
        <div class="checkout-card">
          <h1>${svg("cart")} Carrinho</h1>
          <div class="checkout-list">
            ${checkoutItemsList(items, "compact")}
          </div>
        </div>
        <div class="checkout-card freight-card">
          <h2>${svg("truck")} Calcular Frete</h2>
          <div class="inline-form shipping-form" data-shipping-form>
            <input id="cep-input" data-checkout-state="cep" type="text" inputmode="numeric" autocomplete="postal-code" maxlength="9" placeholder="Insira seu CEP" value="${escapeHtml(formatCep(state.cep || state.customer.cep || ""))}" />
            <button type="button" data-calc-shipping ${state.shippingStatus === "loading" ? "disabled" : ""}>${state.shippingStatus === "loading" ? "Calculando..." : "Calcular"}</button>
          </div>
          ${shippingQuoteMarkup()}
        </div>
      </section>
      <aside class="checkout-summary-card review-summary">
        <h2>${svg("ticket")} Cupom de desconto</h2>
        <span>Digite seu cupom de desconto:</span>
        <div class="inline-form">
          <input id="coupon-input" type="text" placeholder="Insira seu cupom" value="${escapeHtml(state.coupon)}" />
          <button type="button" data-apply-coupon>Adicionar</button>
        </div>
        <div class="summary-line"><span>Subtotal</span><strong>${formatCurrency(subtotal)}</strong></div>
        <div class="summary-line"><span>Frete</span><strong>${state.delivery === "home" ? (state.deliveryQuote ? formatCurrency(shipping) : "Calcule o CEP") : "Retirada grátis"}</strong></div>
        <div class="summary-line total"><span>Total</span><strong>${formatCurrency(total)}</strong></div>
        <button type="button" class="checkout-primary" data-route="#entrega">Avançar</button>
      </aside>
    </div>
  `;

  return `${checkoutHeader()}<main class="checkout-page review-page">${body}</main>`;
}

function renderDeliveryPage() {
  const { total, items, shipping } = calculateCart();
  const selectedStore = getSelectedStore();
  const storeModal = state.storeModalOpen
    ? `
      <div class="store-modal-backdrop">
        <section class="store-modal" role="dialog" aria-modal="true" aria-labelledby="store-modal-title">
          <button type="button" class="store-modal-close" data-close-store-modal aria-label="Fechar">${svg("close")}</button>
          <h2 id="store-modal-title">Onde deseja retirar seu pedido?</h2>
          <div class="store-search-row">
            <input type="text" value="Ribeirão Preto - SP" aria-label="Cidade" />
            <input type="text" placeholder="Busque por endereço ou número da filial" aria-label="Buscar filial" />
          </div>
          <div class="store-list">
            ${pickupStores
              .map(
                (store) => `
                <label class="store-option">
                  <input type="radio" name="pickup-store" value="${store.id}" ${store.id === state.selectedStore ? "checked" : ""} />
                  <span class="store-pin">${svg("location")}</span>
                  <span>
                    <strong>${escapeHtml(store.name)}</strong>
                    <small>${escapeHtml(store.address)}</small>
                    ${pickupStoreDistanceMarkup(store)}
                    <em>${escapeHtml(store.time)}</em>
                  </span>
                </label>
              `,
              )
              .join("")}
          </div>
          <button type="button" class="checkout-primary" data-select-store>Selecionar filial</button>
        </section>
      </div>
    `
    : "";

  return `
    ${checkoutHeader()}
    <main class="checkout-page delivery-page">
      <button type="button" class="checkout-back" data-route="#revisao">‹ Voltar para a cesta</button>
      <div class="checkout-page-grid">
        <section class="delivery-stack">
          <div class="checkout-card personal-card">
            <h1>${svg("user")} Dados pessoais</h1>
            <p>${escapeHtml(state.customer.email || "cliente@email.com")} - <a href="#" data-route="#login">Não é você? Sair</a></p>
            <p>Nome: ${escapeHtml(state.customer.name || "Cliente Onório")}</p>
            <p>Telefone: ${escapeHtml(state.customer.phone || "(16) 00000-0000")}</p>
            <button type="button" class="checkout-outline">Alterar meus dados</button>
          </div>
          <div class="checkout-card delivery-card">
            <h2>${svg("truck")} Entrega</h2>
            <div class="delivery-tabs">
              <button type="button" class="${state.delivery === "home" ? "is-active" : ""}" data-delivery-tab="home">Receber</button>
              <button type="button" class="${state.delivery === "pickup" ? "is-active" : ""}" data-delivery-tab="pickup">Retirar</button>
            </div>
            ${
              state.delivery === "home"
                ? `
                  <label class="checkout-field">
                    <span>CEP</span>
                    <div class="inline-form shipping-form" data-shipping-form>
                      <input data-checkout-state="cep" type="text" inputmode="numeric" autocomplete="postal-code" maxlength="9" placeholder="Insira seu CEP" value="${escapeHtml(formatCep(state.cep || state.customer.cep || ""))}" />
                      <button type="button" data-calc-shipping ${state.shippingStatus === "loading" ? "disabled" : ""}>${state.shippingStatus === "loading" ? "Calculando..." : "Calcular"}</button>
                    </div>
                  </label>
                  ${shippingQuoteMarkup()}
                  <a href="#">Não sei meu CEP</a>
                  <button type="button" class="checkout-primary inline-next" data-route="#pagamento">Continuar para pagamento</button>
                `
                : `
                  <div class="selected-store-card">
                    <strong>${escapeHtml(selectedStore.name)}</strong>
                    <span>${escapeHtml(selectedStore.address)}</span>
                    <small>${escapeHtml(selectedStore.time)}</small>
                  </div>
                  <button type="button" class="checkout-primary inline-next" data-open-store-modal>Escolher loja de retirada</button>
                `
            }
          </div>
          <div class="checkout-card payment-collapsed">
            <h2>${svg("payment")} Pagamento</h2>
          </div>
        </section>
        <aside class="checkout-summary-card sticky-summary">
          <h2>${svg("basket")} Resumo do pedido</h2>
          <div class="summary-mini-list">
            ${items
              .map(
                (item) => `
                <div>
                  <span>${item.quantity}</span>
                  ${itemImage(item, "summary-item-img")}
                  <p>${escapeHtml(item.name)} ${escapeHtml(item.detail)}</p>
                </div>
              `,
              )
              .join("")}
          </div>
          <div class="summary-line"><span>${state.delivery === "home" ? "Frete" : "Retirada"}</span><strong>${state.delivery === "home" ? (state.deliveryQuote ? formatCurrency(shipping) : "Calcule o CEP") : "Grátis"}</strong></div>
          <div class="summary-line total"><span>Total</span><strong>${formatCurrency(total)}</strong></div>
          <button type="button" class="checkout-primary" data-route="${state.delivery === "pickup" ? "#pagamento" : "#pagamento"}">Avançar</button>
        </aside>
      </div>
      ${storeModal}
    </main>
  `;
}

function pixField(id, value) {
  return `${id}${String(value.length).padStart(2, "0")}${value}`;
}

function pixText(value, maxLength) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9 ]/g, "")
    .toUpperCase()
    .slice(0, maxLength);
}

function crc16(payload) {
  let crc = 0xffff;
  for (let index = 0; index < payload.length; index += 1) {
    crc ^= payload.charCodeAt(index) << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function buildPixPayload(amount) {
  const merchantAccount = pixField("00", "BR.GOV.BCB.PIX") + pixField("01", PIX_CNPJ_KEY);
  const additionalData = pixField("05", "ONORIO");
  const payload =
    pixField("00", "01") +
    pixField("26", merchantAccount) +
    pixField("52", "0000") +
    pixField("53", "986") +
    pixField("54", amount.toFixed(2)) +
    pixField("58", "BR") +
    pixField("59", pixText(PIX_MERCHANT_NAME, 25)) +
    pixField("60", pixText(PIX_MERCHANT_CITY, 15)) +
    pixField("62", additionalData) +
    "6304";

  return `${payload}${crc16(payload)}`;
}

function renderPaymentPage() {
  const { total, pixDiscount, pointsDiscount, availablePointsDiscount } = calculateCart();
  const pixPayload = buildPixPayload(total);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&margin=8&data=${encodeURIComponent(pixPayload)}`;
  const pointsBalance = getCustomerPointsBalance();

  return `
    ${checkoutHeader()}
    <main class="checkout-page payment-page">
      <button type="button" class="checkout-back" data-route="#entrega">‹ Voltar para entrega</button>
      <div class="checkout-page-grid">
        <section class="checkout-main-card payment-main">
          <h1>${svg("payment")} Pagamento</h1>
          <section class="points-redeem-card" aria-label="Usar pontos Cliente ON">
            <div>
              <span>Cliente ON</span>
              <strong>Deseja utilizar seus pontos para abater no valor da compra?</strong>
              <small>Saldo disponível: ${pointsBalance} pontos = ${formatCurrency(availablePointsDiscount)} para abater neste pedido. A cada 100 pontos, abate R$ 1,00.</small>
            </div>
            <div class="points-choice-row">
              <button type="button" class="${state.usePoints ? "is-active" : ""}" data-use-points="true">Sim, usar pontos</button>
              <button type="button" class="${!state.usePoints ? "is-active" : ""}" data-use-points="false">Não usar agora</button>
            </div>
            ${state.usePoints ? `<em>Desconto Cliente ON aplicado: - ${formatCurrency(pointsDiscount)}</em>` : `<em>Os pontos só entram no total se o cliente confirmar aqui.</em>`}
          </section>
          <label class="payment-choice ${state.customer.payment === "Pix" ? "is-selected" : ""}">
            <input type="radio" name="checkout-payment" value="Pix" ${state.customer.payment === "Pix" ? "checked" : ""} data-payment-select="Pix" />
            <span class="radio-mark"></span>
            <strong>Pix</strong>
            <small>5% de desconto aplicado na cesta</small>
          </label>
          ${state.customer.payment === "Pix" ? `
            <div class="pix-payment-box">
              <div>
                <strong>Total com Pix: ${formatCurrency(total)}</strong>
                <span>Desconto aplicado: - ${formatCurrency(pixDiscount)}</span>
                <small>Chave CNPJ: ${PIX_CNPJ_KEY}</small>
              </div>
              <img src="${qrUrl}" alt="QR Code Pix Drogaria Onório" />
              <textarea readonly id="pix-code">${pixPayload}</textarea>
              <button type="button" class="checkout-outline" data-copy-pix>Copiar código Pix</button>
            </div>
          ` : ""}
          <label class="payment-choice ${state.customer.payment === "PicPay" ? "is-selected" : ""}">
            <input type="radio" name="checkout-payment" value="PicPay" ${state.customer.payment === "PicPay" ? "checked" : ""} data-payment-select="PicPay" />
            <span class="radio-mark"></span>
            <strong>PicPay</strong>
            <span class="payment-flags-inline">${paymentLogo("picpay")}</span>
            <small>Pagamento digital pelo app PicPay</small>
          </label>
          ${state.customer.payment === "PicPay" ? `
            <div class="digital-payment-box">
              <strong>Pagamento via PicPay</strong>
              <span>Ao finalizar, o cliente recebe a orientação para pagar pelo aplicativo PicPay.</span>
              <small>Total: ${formatCurrency(total)}</small>
            </div>
          ` : ""}
          <label class="payment-choice ${state.customer.payment === "Mercado Pago" ? "is-selected" : ""}">
            <input type="radio" name="checkout-payment" value="Mercado Pago" ${state.customer.payment === "Mercado Pago" ? "checked" : ""} data-payment-select="Mercado Pago" />
            <span class="radio-mark"></span>
            <strong>Mercado Pago</strong>
            <span class="payment-flags-inline">${paymentLogo("mercadoPago")}</span>
            <small>Cartão, Pix ou saldo pelo checkout Mercado Pago</small>
          </label>
          ${state.customer.payment === "Mercado Pago" ? `
            <div class="digital-payment-box mercado-pago-box">
              <strong>Checkout Mercado Pago</strong>
              <span>No protótipo, esta opção reserva o fluxo. Na versão real, conectamos a conta Mercado Pago da loja para gerar o link/checkout de pagamento.</span>
              <small>Total: ${formatCurrency(total)}</small>
            </div>
          ` : ""}
          <label class="payment-choice ${state.customer.payment === "Boleto" ? "is-selected" : ""}">
            <input type="radio" name="checkout-payment" value="Boleto" ${state.customer.payment === "Boleto" ? "checked" : ""} data-payment-select="Boleto" />
            <span class="radio-mark"></span>
            <strong>Boleto</strong>
            <span class="payment-flags-inline">${paymentLogo("boleto")}</span>
            <small>Geração de boleto para pagamento</small>
          </label>
          ${state.customer.payment === "Boleto" ? `
            <div class="digital-payment-box boleto-box">
              <strong>Boleto bancário</strong>
              <span>O boleto é gerado na finalização do pedido no protótipo.</span>
              <small>Valor do boleto: ${formatCurrency(total)}</small>
            </div>
          ` : ""}
          <label class="payment-choice ${state.customer.payment === "Cartão" ? "is-selected" : ""}">
            <input type="radio" name="checkout-payment" value="Cartão" ${state.customer.payment === "Cartão" ? "checked" : ""} data-payment-select="Cartão" />
            <span class="radio-mark"></span>
            <strong>Cartão de crédito</strong>
            <span class="payment-flags-inline">${cardFlags()}</span>
          </label>
          ${state.customer.payment === "Cartão" ? `
            <div class="credit-card-form">
              <label>
                <span>Número do cartão</span>
                <input data-checkout-customer="cardNumber" inputmode="numeric" value="${escapeHtml(state.customer.cardNumber)}" />
              </label>
              <label>
                <span>Parcelamentos disponíveis:</span>
                <select>
                  ${cardInstallmentOptions(total)}
                </select>
                <small>${total >= 1000 ? "Compra acima de R$ 1.000,00: até 6x sem juros." : total >= 100 ? "Compra acima de R$ 100,00: até 3x sem juros. Acima de R$ 1.000,00: até 6x sem juros." : "Parcelamento disponível em compras acima de R$ 100,00. Acima de R$ 1.000,00: até 6x sem juros."}</small>
              </label>
              <label>
                <span>Nome impresso no cartão</span>
                <input data-checkout-customer="cardName" value="${escapeHtml(state.customer.cardName)}" />
              </label>
              <div class="card-date-row">
                <label>
                  <span>Validade</span>
                  <select data-checkout-customer="cardMonth">
                    <option value="">Mês</option>
                    ${Array.from({ length: 12 }, (_, index) => {
                      const month = String(index + 1).padStart(2, "0");
                      return `<option value="${month}" ${state.customer.cardMonth === month ? "selected" : ""}>${month}</option>`;
                    }).join("")}
                  </select>
                </label>
                <label>
                  <span>&nbsp;</span>
                  <select data-checkout-customer="cardYear">
                    <option value="">Ano</option>
                    ${["2026", "2027", "2028", "2029", "2030", "2031"]
                      .map((year) => `<option value="${year}" ${state.customer.cardYear === year ? "selected" : ""}>${year}</option>`)
                      .join("")}
                  </select>
                </label>
                <label>
                  <span>Código de segurança (CVV)</span>
                  <input data-checkout-customer="cardCvv" inputmode="numeric" value="${escapeHtml(state.customer.cardCvv)}" />
                </label>
              </div>
              <h2>Endereço de cobrança</h2>
              <label>
                <span>CEP*</span>
                <input data-checkout-customer="billingCep" value="${escapeHtml(state.customer.billingCep)}" />
              </label>
              <a href="#">Não sei meu código postal</a>
            </div>
          ` : ""}
        </section>
        ${orderSummaryCard("Finalizar", "#finalizado", { showButton: true, showPixDiscountLine: true })}
      </div>
    </main>
  `;
}

function generateOrderNumber() {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  const time = [
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0"),
  ].join("");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ON-${date}-${time}-${random}`;
}

function buildOrderSnapshot() {
  const cart = calculateCart();
  const store = getSelectedStore();
  const now = new Date();
  const savings = roundMoney(cart.pixDiscount + cart.pointsDiscount);

  return {
    number: generateOrderNumber(),
    pickupCode: `RET-${String(Math.floor(100000 + Math.random() * 900000))}`,
    createdAt: now.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }),
    customerName: state.customer.fullName || state.customer.name || "Cliente Onório",
    customerCpf: state.customer.cpf || "CPF cadastrado",
    customerCep: state.deliveryQuote?.formattedCep || formatCep(state.cep || state.customer.cep || ""),
    receiverName: state.customer.receiverName || state.customer.fullName || state.customer.name || "Cliente Onório",
    deliveryAddress: state.deliveryQuote
      ? [
          state.deliveryQuote.address,
          state.customer.addressNumber ? `nº ${state.customer.addressNumber}` : "",
          state.customer.addressComplement,
        ].filter(Boolean).join(" - ")
      : state.customer.address || "",
    customerEmail: state.customer.email || "e-mail cadastrado",
    customerPhone: state.customer.phone || "telefone cadastrado",
    delivery: state.delivery,
    payment: state.customer.payment || "A combinar",
    store: { ...store },
    items: cart.items.map((item) => ({
      id: item.id,
      name: item.name,
      detail: item.detail,
      tag: item.tag || item.category,
      image: item.image,
      quantity: item.quantity,
      price: item.price,
      lineTotal: roundMoney(item.price * item.quantity),
    })),
    subtotal: cart.subtotal,
    pixDiscount: cart.pixDiscount,
    pointsDiscount: cart.pointsDiscount,
    shipping: cart.shipping,
    total: cart.total,
    savings,
    pointsEarned: cart.pointsEarned,
  };
}

function finalizeCurrentOrder() {
  state.currentOrder = buildOrderSnapshot();
  return state.currentOrder;
}

function getCurrentOrder() {
  return state.currentOrder || finalizeCurrentOrder();
}

function renderFinishedPage() {
  const order = getCurrentOrder();
  const isPickup = order.delivery === "pickup";
  const itemCount = getCartItemCount(order.items);
  const storePhoneHref = order.store.phoneHref || STORE_WHATSAPP_NUMBER;
  const movementTarget = `${escapeHtml(order.customerPhone)} e ${escapeHtml(order.customerEmail)}`;
  const pickupText = isPickup ? "acompanhar a retirada" : "acompanhar a entrega";

  return `
    ${checkoutHeader()}
    <main class="checkout-page finish-page order-complete-page">
      <section class="order-complete-hero">
        <img src="assets/onorio-avatar-transparent.png" alt="" />
        <span>Pedido finalizado</span>
        <h1>Obrigado pela confiança, ${escapeHtml(order.customerName.split(" ")[0] || "cliente")}.</h1>
        <p>Seu pedido foi recebido pela Drogaria Onório e seguirá para separação. Guarde os dados abaixo para ${pickupText}.</p>
        <div class="order-number-card">
          <div>
            <small>Número do pedido</small>
            <strong>${escapeHtml(order.number)}</strong>
          </div>
          <div>
            <small>${isPickup ? "Código de retirada" : "Código do pedido"}</small>
            <em>${escapeHtml(order.pickupCode)}</em>
          </div>
        </div>
      </section>

      <section class="order-complete-grid">
        <article class="order-detail-card order-items-card">
          <h2>Produtos comprados</h2>
          <span>${itemCount} ${itemCount === 1 ? "item" : "itens"} no pedido</span>
          <div class="order-items-list">
            ${order.items
              .map(
                (item) => `
                <div class="order-item-row">
                  ${itemImage(item, "summary-item-img")}
                  <div>
                    <strong>${escapeHtml(item.name)}</strong>
                    <small>${escapeHtml(item.detail)} · ${escapeHtml(item.tag)}</small>
                  </div>
                  <span>${item.quantity}x</span>
                  <b>${formatCurrency(item.lineTotal)}</b>
                </div>
              `,
              )
              .join("")}
          </div>
        </article>

        <aside class="order-detail-card order-totals-card">
          <h2>Resumo financeiro</h2>
          <div><span>Subtotal</span><strong>${formatCurrency(order.subtotal)}</strong></div>
          ${order.pixDiscount ? `<div><span>Economia no Pix</span><strong>- ${formatCurrency(order.pixDiscount)}</strong></div>` : ""}
          ${order.pointsDiscount ? `<div><span>Cliente ON utilizado</span><strong>- ${formatCurrency(order.pointsDiscount)}</strong></div>` : ""}
          ${order.shipping ? `<div><span>Entrega</span><strong>${formatCurrency(order.shipping)}</strong></div>` : ""}
          <div class="order-total-line"><span>Total gasto</span><strong>${formatCurrency(order.total)}</strong></div>
          <div class="order-saving-line"><span>Economia total</span><strong>${formatCurrency(order.savings)}</strong></div>
          <div class="order-points-line"><span>Pontos acumulados</span><strong>+${order.pointsEarned}</strong></div>
        </aside>

        <article class="order-detail-card order-customer-card">
          <h2>Dados do cliente</h2>
          <strong>${escapeHtml(order.customerName)}</strong>
          <span>CPF: ${escapeHtml(order.customerCpf)}</span>
          <span>CEP: ${escapeHtml(order.customerCep || "CEP cadastrado")}</span>
          ${!isPickup && order.receiverName ? `<span>Recebedor: ${escapeHtml(order.receiverName)}</span>` : ""}
          <small>${movementTarget}</small>
        </article>

        <article class="order-detail-card order-pickup-card">
          <h2>${isPickup ? "Retirada na loja" : "Entrega em domicílio"}</h2>
          <strong>${escapeHtml(order.store.name)}</strong>
          <span>${escapeHtml(isPickup ? order.store.fullAddress || order.store.address : order.deliveryAddress || order.customerCep)}</span>
          <small>${isPickup ? escapeHtml(order.store.time) : "Entrega calculada conforme CEP informado."}</small>
          <p>Para alterar ou cancelar este pedido, fale diretamente com a loja responsável.</p>
          <div class="order-contact-row">
            <a href="tel:${storePhoneHref}">${escapeHtml(order.store.phone || "Ligar para a loja")}</a>
            <a href="mailto:${escapeHtml(order.store.email || "onoriodrogaria@gmail.com")}">Enviar e-mail</a>
          </div>
        </article>

        <article class="order-detail-card order-status-card">
          <h2>Movimentação do pedido</h2>
          <p>Você receberá atualizações por SMS e e-mail em ${movementTarget}.</p>
          <ol>
            <li><strong>Pedido recebido</strong><span>Número gerado em ${escapeHtml(order.createdAt)}.</span></li>
            <li><strong>Em separação</strong><span>A equipe da loja começa a conferir os produtos.</span></li>
            <li><strong>${isPickup ? "Pronto para retirar" : "Saiu para entrega"}</strong><span>${isPickup ? "Avisaremos assim que estiver liberado no balcão." : "Avisaremos quando o pedido sair para o endereço informado."}</span></li>
          </ol>
        </article>
      </section>

      <div class="order-finish-actions">
        <button type="button" class="checkout-primary" data-route="#home">Voltar para a loja</button>
      </div>
    </main>
  `;
}

function renderCatalogPage(routeKey = "todos") {
  const config = getCatalogConfig(routeKey);
  state.category = config.categoryId;
  state.query = config.query;
  const visibleProducts = filterProductsBy(config.categoryId, config.query);
  const categoryLinks = categories
    .map(
      (category) => `
        <button type="button" class="${category.routeKey === routeKey ? "is-active" : ""}" data-catalog-route="${category.routeKey}">
          ${escapeHtml(category.label)}
        </button>
      `,
    )
    .join("");

  return `
    ${checkoutHeader()}
    <main class="checkout-page catalog-page">
      <button type="button" class="checkout-back" data-route="#home">‹ Voltar para a pagina inicial</button>
      <section class="catalog-hero">
        <span>Catalogo da loja</span>
        <h1>${escapeHtml(config.title)}</h1>
        <p>${escapeHtml(config.description)}</p>
        <div class="catalog-meta">
          <strong>${visibleProducts.length} itens no prototipo</strong>
          <small>Pronto para receber saldo real por loja quando integrar com o sistema.</small>
        </div>
      </section>
      <nav class="catalog-tabs" aria-label="Categorias do catalogo">
        <button type="button" class="${routeKey === "todos" ? "is-active" : ""}" data-catalog-route="todos">Todos</button>
        ${categoryLinks}
      </nav>
      <section class="integration-note">
        <strong>Proximo passo de integracao</strong>
        <span>Trocar a lista demonstrativa por uma API do sistema da drogaria retornando codigo do produto, preco, saldo por loja, imagem, desconto e restricoes de venda.</span>
      </section>
      <div class="product-grid catalog-product-grid">
        ${
          visibleProducts.length
            ? visibleProducts.map((product) => productCardMarkup(product, "catalog-product-card")).join("")
            : `
              <div class="cart-empty" style="grid-column: 1 / -1;">
                <img src="assets/onorio-avatar.png" alt="" />
                <strong>Nenhum item demonstrativo nesta area</strong>
                <span>Quando o estoque real for conectado, esta vitrine sera preenchida automaticamente.</span>
              </div>
            `
        }
      </div>
    </main>
  `;
}

function renderProductPage(productId) {
  const product = getProduct(productId);

  if (!product) {
    return `
      ${checkoutHeader()}
      <main class="checkout-page product-page">
        ${checkoutBreadcrumb("Produto")}
        <section class="product-not-found">
          <img src="assets/onorio-avatar.png" alt="" />
          <h1>Produto não encontrado</h1>
          <p>Esse item ainda não está disponível no catálogo demonstrativo da Drogaria Onório.</p>
          <button type="button" class="checkout-primary" data-catalog-route="todos">Ver todos os produtos</button>
        </section>
      </main>
    `;
  }

  const catalogRoute = productCatalogRoute(product);
  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);
  const productFacts = productSummaryFacts(product)
    .map(
      ([label, value]) => `
        <article>
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </article>
      `,
    )
    .join("");
  const isMedicine = product.category === "Medicamentos";
  const bularioAction = isMedicine
    ? `<a class="checkout-outline product-external-link" href="${ANVISA_BULARIO_URL}" target="_blank" rel="noopener">Consultar Bulário Anvisa</a>`
    : "";
  const variants = productVariantOptions(product);
  const hasVariants = variants.length > 0;
  const displayPrice = productBasePrice(product);
  const variantKind = product.variantKind || "Opção";
  const variantHeading = product.variantHeading || "Escolha a opção";
  const variantDescription = product.variantDescription || "Cada opção entra na cesta com seu próprio valor.";
  const variantPriceNote = variantKind === "Cor"
    ? "O valor muda conforme a cor escolhida."
    : variantKind === "Quantidade"
      ? "O valor muda conforme a apresentação escolhida."
      : "O valor muda conforme a opção escolhida.";
  const variantChooser = hasVariants
    ? `
      <section class="product-variant-panel" aria-label="${escapeHtml(variantHeading)}">
        <div class="product-variant-heading">
          <span>Opções disponíveis</span>
          <h2>${escapeHtml(variantHeading)}</h2>
          <p>${escapeHtml(variantDescription)}</p>
        </div>
        <div class="product-variant-grid">
          ${variants
            .map(
              (variant) => `
                <article class="product-variant-card">
                  <div>
                    <div class="product-variant-title">
                      ${variant.swatch ? `<span class="variant-swatch" style="--swatch: ${escapeHtml(variant.swatch)}"></span>` : ""}
                      <span class="option-label">${escapeHtml(variantKind)} ${escapeHtml(variant.label)}</span>
                    </div>
                    <strong>${escapeHtml(variant.detail)}</strong>
                    <small>${escapeHtml(variant.stock || product.stock || "Consultar estoque")}</small>
                    ${variant.code ? `<small class="variant-code">Cód. ${escapeHtml(variant.code)}</small>` : ""}
                  </div>
                  <div>
                    <b>${formatCurrency(variant.price)}</b>
                    <button type="button" class="checkout-primary" data-add="${escapeHtml(variant.id)}">Adicionar</button>
                    <button type="button" class="checkout-outline" data-buy-now="${escapeHtml(variant.id)}">Comprar agora</button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `
    : "";
  const productActions = hasVariants
    ? `
      <div class="product-page-actions product-page-actions-note">
        <span>Selecione uma das opções acima para adicionar à cesta.</span>
        ${bularioAction}
      </div>
    `
    : `
      <div class="product-page-actions">
        <button type="button" class="checkout-primary" data-add="${escapeHtml(product.id)}">
          Adicionar à cesta
          ${svg("cart")}
        </button>
        <button type="button" class="checkout-outline" data-buy-now="${escapeHtml(product.id)}">Comprar agora</button>
        ${bularioAction}
      </div>
    `;

  return `
    ${checkoutHeader()}
    <main class="checkout-page product-page">
      <nav class="checkout-breadcrumb" aria-label="Caminho do produto">
        <a href="#" data-route="#home">Página inicial</a>
        <span>›</span>
        <a href="#" data-catalog-route="${escapeHtml(catalogRoute)}">${escapeHtml(product.category)}</a>
        <span>›</span>
        <span>${escapeHtml(product.name)}</span>
      </nav>

      <button type="button" class="checkout-back" data-catalog-route="${escapeHtml(catalogRoute)}">‹ Voltar para ${escapeHtml(product.category)}</button>

      <section class="product-page-hero">
        <div class="product-page-media">
          ${productGalleryMarkup(product)}
          <span class="stock-chip">${escapeHtml(product.stock || "Consultar estoque")}</span>
        </div>

        <div class="product-page-copy">
          <span class="detail-category">${escapeHtml(product.category)}</span>
          <h1>${escapeHtml(product.name)}</h1>
          <p class="product-page-subtitle">${escapeHtml(product.detail)}</p>
          ${productHighlightsMarkup(product)}
          <div class="product-page-rating" aria-label="Produto selecionado para compra rápida">
            <span>★★★★★</span>
            <small>Produto selecionado para compra rápida</small>
          </div>

          <div class="product-page-price">
            <span>${hasVariants ? "A partir de" : "Preço Onório"}</span>
            ${product.oldPrice && product.oldPrice > displayPrice ? `<del class="product-page-old-price">${formatCurrency(product.oldPrice)}</del>` : ""}
            <strong>${formatCurrency(displayPrice)}</strong>
            ${product.promo ? `<em>${escapeHtml(product.promo)}</em>` : ""}
            <small>${hasVariants ? variantPriceNote : (cardInstallmentText(product.price) || "Retire na loja ou receba em casa")}</small>
          </div>

          ${variantChooser}
          ${productActions}

          <div class="product-page-benefits">
            <span>${svg("truck")} Entrega calculada pelo CEP</span>
            <span>${svg("location")} Retirada nas lojas Onório</span>
            <span>${svg("ticket")} Cliente ON acumula pontos</span>
          </div>
        </div>
      </section>

      <section class="product-info-grid" aria-label="Informações do produto">
        ${productFacts}
      </section>

      <section class="product-page-section">
        <div>
          <span>Descrição</span>
          <h2>Sobre o produto</h2>
          <p>${escapeHtml(product.description)}</p>
        </div>
        <div>
          <span>Orientação</span>
          <h2>Compra segura</h2>
          <p>${escapeHtml(product.caution)}</p>
          ${isMedicine ? `<p class="care-note">As informações do site não substituem orientação médica ou farmacêutica. Consulte a bula oficial quando necessário.</p>` : ""}
        </div>
      </section>

      <section class="product-page-section">
        <div>
          <span>Recebimento</span>
          <h2>Escolha como receber</h2>
          <p>Você pode retirar na loja escolhida ou calcular entrega em domicílio no checkout. Para entrega, a taxa muda conforme a distância calculada pelo CEP.</p>
        </div>
        <div>
          <span>Integração futura</span>
          <h2>Estoque da loja</h2>
          <p>Quando o sistema da drogaria for conectado, esta página poderá puxar saldo real, preço por filial, substitutos e restrições de venda automaticamente.</p>
        </div>
      </section>

      ${medicineDetailsMarkup(product)}

      ${
        relatedProducts.length
          ? `<section class="product-related">
              <div class="section-heading">
                <div>
                  <h2>Produtos relacionados</h2>
                  <p>Outras opções da mesma categoria.</p>
                </div>
                <button type="button" data-catalog-route="${escapeHtml(catalogRoute)}">Ver todos</button>
              </div>
              <div class="product-grid catalog-product-grid">
                ${relatedProducts.map((item) => productCardMarkup(item, "catalog-product-card")).join("")}
              </div>
            </section>`
          : ""
      }
    </main>
  `;
}

function infoPrimaryAction(page) {
  const [label, action] = page.primary || ["Voltar para a loja", "home"];

  if (action === "whatsapp") {
    return `<a class="checkout-primary info-action-link" href="${whatsappUrl("Olá, Drogaria Onório! Preciso de atendimento pelo site.")}" target="_blank" rel="noopener">${label}</a>`;
  }

  if (["top-ofertas", "todos"].includes(action)) {
    return `<button type="button" class="checkout-primary" data-catalog-route="${action}">${label}</button>`;
  }

  const routes = {
    home: "#home",
    login: "#login",
    entrega: "#entrega",
    pagamento: "#pagamento",
  };

  if (routes[action]) {
    return `<button type="button" class="checkout-primary" data-route="${routes[action]}">${label}</button>`;
  }

  return `<button type="button" class="checkout-primary" data-info-page="${action}">${label}</button>`;
}

function whatsappUrl(message) {
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function storeWhatsappUrl(store, message) {
  const number = store?.whatsappHref || store?.phoneHref?.replace(/\D/g, "") || STORE_WHATSAPP_NUMBER;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function mapUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function wazeUrl(address) {
  return `https://waze.com/ul?q=${encodeURIComponent(address)}&navigate=yes`;
}

function renderInfoSections(page) {
  if (!page.sections?.length) {
    return "";
  }

  return `
    <section class="info-section-list">
      ${page.sections
        .map(
          (section) => `
            <article>
              <div>
                <span>${escapeHtml(section.eyebrow || page.eyebrow)}</span>
                <h2>${escapeHtml(section.title)}</h2>
                ${section.text ? `<p>${escapeHtml(section.text)}</p>` : ""}
              </div>
              ${section.items?.length ? `
                <ul>
                  ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ul>
              ` : ""}
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderInfoStores() {
  return `
    <section class="store-info-grid" aria-label="Farmácias Drogaria Onório">
      ${pickupStores
        .map(
          (store) => `
            <article>
              <span>${escapeHtml(store.name)}</span>
              <h2>${escapeHtml(store.fullAddress)}</h2>
              <p>${escapeHtml(store.time)}. Atendimento pelo telefone ${escapeHtml(store.phone)}.</p>
              <div>
                <a href="${mapUrl(store.fullAddress)}" target="_blank" rel="noopener">Abrir no Google Maps</a>
                <a href="${wazeUrl(store.fullAddress)}" target="_blank" rel="noopener">Abrir no Waze</a>
              </div>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderInfoRequestForm(type) {
  const isPrescription = type === "prescricao";
  return `
    <section class="info-request-card">
      <div>
        <span>${isPrescription ? "Prescrição digital" : "Manipulação"}</span>
        <h2>${isPrescription ? "Envie sua receita pelo site" : "Solicite orçamento de manipulação"}</h2>
        <p>${isPrescription
          ? "Preencha os dados, anexe a receita e envie para o WhatsApp da Drogaria Onório. A equipe confere disponibilidade e orienta os próximos passos."
          : "Trabalhamos com manipulação em parceria com a Biomagistral. Envie seus dados, descreva a fórmula e anexe a receita para orçamento."}</p>
      </div>
      <form class="info-request-form" data-request-form="${type}">
        <label>
          <span>Nome completo</span>
          <input name="name" placeholder="Nome do cliente" autocomplete="name" />
        </label>
        <label>
          <span>Telefone</span>
          <input name="phone" placeholder="(16) 00000-0000" autocomplete="tel" />
        </label>
        <label class="wide">
          <span>${isPrescription ? "Observação do pedido" : "Descrição da fórmula ou medicamento"}</span>
          <textarea name="details" rows="4" placeholder="${isPrescription ? "Ex.: medicamento, dosagem, loja de preferência" : "Ex.: cápsulas, creme, quantidade, concentração"}"></textarea>
        </label>
        <label class="wide file-field">
          <span>Anexar receita</span>
          <input name="file" type="file" accept="image/*,.pdf" />
          <small>O WhatsApp será aberto com a mensagem pronta. Depois, anexe o arquivo na conversa para a equipe conferir.</small>
        </label>
        <button type="button" class="checkout-primary wide" data-whatsapp-form="${type}">Enviar pelo WhatsApp</button>
      </form>
    </section>
  `;
}

function renderInfoActions(page) {
  if (!page.actions?.length) {
    return "";
  }

  return `
    <div class="info-link-grid">
      ${page.actions
        .map((action) => {
          if (action.href) {
            return `<a href="${escapeHtml(action.href)}" target="_blank" rel="noopener">${escapeHtml(action.label)}<span>${escapeHtml(action.text || "Abrir link")}</span></a>`;
          }
          if (action.route) {
            return `<button type="button" data-route="${escapeHtml(action.route)}">${escapeHtml(action.label)}<span>${escapeHtml(action.text || "Acessar")}</span></button>`;
          }
          return `<button type="button" data-info-page="${escapeHtml(action.page)}">${escapeHtml(action.label)}<span>${escapeHtml(action.text || "Acessar")}</span></button>`;
        })
        .join("")}
    </div>
  `;
}

function renderInfoExtras(pageKey, page) {
  return `
    ${page.stores ? renderInfoStores() : ""}
    ${page.requestForm ? renderInfoRequestForm(page.requestForm) : ""}
    ${renderInfoSections(page)}
    ${renderInfoActions(page)}
  `;
}

function renderInfoPage(pageKey = "atendimento") {
  const page = infoPages[pageKey] || infoPages.atendimento;
  return `
    ${checkoutHeader()}
    <main class="checkout-page info-page">
      <button type="button" class="checkout-back" data-route="#home">‹ Voltar para a loja</button>
      <section class="info-hero">
        <span>${escapeHtml(page.eyebrow)}</span>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.text)}</p>
      </section>
      <div class="info-card-grid">
        ${page.cards
          .map(
            ([title, text]) => `
              <article>
                <strong>${escapeHtml(title)}</strong>
                <span>${escapeHtml(text)}</span>
              </article>
            `,
          )
          .join("")}
      </div>
      ${renderInfoExtras(pageKey, page)}
      <div class="info-actions">
        ${infoPrimaryAction(page)}
        <button type="button" class="checkout-outline" data-route="#home">Continuar navegando</button>
      </div>
    </main>
  `;
}

function renderCheckoutFlow() {
  const checkoutFlow = document.querySelector("#checkout-flow");
  const appShell = document.querySelector(".app-shell");
  const route = window.location.hash || "#home";
  const isCatalog = route.startsWith("#catalogo/");
  const isInfo = route.startsWith("#pagina/");
  const isProduct = route.startsWith("#produto/");
  const isCheckout =
    ["#cesta", "#login", "#revisao", "#entrega", "#pagamento", "#finalizado"].includes(route) ||
    isCatalog ||
    isInfo ||
    isProduct;

  appShell.hidden = isCheckout;
  checkoutFlow.hidden = !isCheckout;
  document.body.classList.toggle("checkout-active", isCheckout);

  if (!isCheckout) {
    checkoutFlow.innerHTML = "";
    return;
  }

  const renderers = {
    "#cesta": renderCartCheckoutPage,
    "#login": renderLoginPage,
    "#revisao": renderReviewPage,
    "#entrega": renderDeliveryPage,
    "#pagamento": renderPaymentPage,
    "#finalizado": renderFinishedPage,
  };

  if (isCatalog) {
    checkoutFlow.innerHTML = renderCatalogPage(decodeURIComponent(route.replace("#catalogo/", "")) || "todos");
  } else if (isProduct) {
    checkoutFlow.innerHTML = renderProductPage(decodeURIComponent(route.replace("#produto/", "")) || "");
  } else if (isInfo) {
    checkoutFlow.innerHTML = renderInfoPage(decodeURIComponent(route.replace("#pagina/", "")) || "atendimento");
  } else {
    checkoutFlow.innerHTML = renderers[route]();
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

function navigateTo(route) {
  state.storeModalOpen = false;
  closeAppDownload();
  closeCartDrawer();
  closeModal();

  if (route === "#finalizado") {
    finalizeCurrentOrder();
  }

  if (route === "#home") {
    state.category = "all";
    state.query = "";
    window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
    document.querySelector("#search-input") && (document.querySelector("#search-input").value = "");
    renderCategories();
    renderProducts();
    renderCart();
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  if (window.location.hash === route) {
    renderCart();
    return;
  }

  window.location.hash = route;
}

function navigateToCatalog(routeKey = "todos") {
  const config = getCatalogConfig(routeKey);
  state.category = config.categoryId;
  state.query = config.query;
  closeCartDrawer();
  closeModal();
  window.location.hash = `#catalogo/${encodeURIComponent(routeKey)}`;
  renderCart();
}

function navigateToProduct(productId) {
  const product = getProduct(productId);
  if (!product) return;

  closeCartDrawer();
  closeModal();
  window.location.hash = `#produto/${encodeURIComponent(product.id)}`;
  renderCart();
}

function renderCategories() {
  const categoryStrip = document.querySelector("#category-strip");
  categoryStrip.innerHTML = categories
    .map(
      (category) => {
        const categoryQuery = category.query || "";
        const hasArt = Boolean(category.art);
        const hasPhotoOnly = Boolean(category.photoOnly && category.image);
        const hasScene = !hasPhotoOnly && Boolean(category.image || category.products?.length || category.sceneIcon || category.badge);
        const categoryImage = (hasScene || hasPhotoOnly) && category.image
          ? ` style="--category-image: url('${escapeHtml(category.image)}')"`
          : "";
        const visualClass = `category-visual ${hasPhotoOnly ? "has-photo" : hasScene ? "has-category-scene" : hasArt ? "has-product-art" : category.image ? "has-photo" : ""}`;
        const visualContent = hasPhotoOnly ? "" : hasScene ? categoryScene(category) : hasArt ? productArtwork(category.art) : svg(category.icon);
        const isActive =
          category.id === state.category &&
          state.query === categoryQuery &&
          !category.scrollTarget;

        return `
      <button
        type="button"
        class="category-button category-${category.tone || "default"} ${isActive ? "is-active" : ""}"
        data-category="${escapeHtml(category.id)}"
        data-route-key="${escapeHtml(category.routeKey || "todos")}"
        ${categoryQuery ? `data-query="${escapeHtml(categoryQuery)}"` : ""}
        ${category.scrollTarget ? `data-scroll-target="${escapeHtml(category.scrollTarget)}"` : ""}
      >
        <span class="${visualClass}"${categoryImage}>${visualContent}</span>
        <span class="category-label">${category.label}</span>
      </button>
    `;
      },
    )
    .join("");
}

function filteredProducts() {
  return filterProductsBy(state.category, state.query);
}

function productCardMarkup(product, extraClass = "") {
  const hasVariants = hasProductVariants(product);
  const actionLabel = hasVariants ? (product.variantActionLabel || "Escolher opção") : "Adicionar";
  const actionAttribute = hasVariants ? `data-product-page="${product.id}"` : `data-add="${product.id}"`;
  const price = productBasePrice(product);
  const hasSalePrice = product.oldPrice && product.oldPrice > price;

  return `
    <article class="product-card ${extraClass}">
      <button
        type="button"
        class="favorite-button ${state.favorites.has(product.id) ? "is-active" : ""}"
        data-favorite="${product.id}"
        aria-label="Favoritar ${product.name}"
      >
        ${svg("heart")}
      </button>
      <button type="button" class="product-art product-card-link" data-product-page="${product.id}" aria-label="Ver detalhes de ${escapeHtml(product.name)}">
        ${productMedia(product)}
      </button>
      <div class="product-copy">
        <button type="button" class="product-title-link" data-product-page="${product.id}">
          <h3>${product.name}</h3>
        </button>
        <p>${product.detail}</p>
        <div class="product-chip-row">
          <small class="stock-chip">${escapeHtml(product.stock || "Consultar estoque")}</small>
          ${product.promo ? `<small class="promo-chip">${escapeHtml(product.promo)}</small>` : ""}
        </div>
        <button type="button" class="detail-button" data-product-page="${product.id}">
          Ver detalhes
        </button>
        <div class="product-price ${hasVariants ? "is-from" : ""}">
          ${hasVariants ? "<span>A partir de</span>" : ""}
          ${hasSalePrice ? `<del class="product-old-price">${formatCurrency(product.oldPrice)}</del>` : ""}
          ${formatCurrency(price)}
        </div>
        <button type="button" class="add-button" ${actionAttribute}>
          ${actionLabel}
          ${svg("cart")}
        </button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const grid = document.querySelector("#product-grid");
  const heading = document.querySelector("#product-heading");
  const subheading = document.querySelector("#product-subheading");
  const visibleProducts = filteredProducts();
  const productsToRender =
    state.category === "all" && !state.query ? visibleProducts.slice(0, 6) : visibleProducts;

  heading.textContent = state.category === "all" ? "Mais comprados" : state.category;
  subheading.textContent = state.query
    ? `Resultado para "${state.query}"`
    : "Produtos selecionados para compra rápida.";

  if (!productsToRender.length) {
    grid.innerHTML = `
      <div class="cart-empty" style="grid-column: 1 / -1;">
        <img src="assets/onorio-avatar.png" alt="" />
        <strong>Nenhum produto encontrado</strong>
        <span>Tente outro termo ou veja todas as categorias.</span>
      </div>
    `;
    return;
  }

  grid.innerHTML = productsToRender.map((product) => productCardMarkup(product)).join("");
}

function calculateCart() {
  const items = [...state.cart.entries()].map(([id, quantity]) => ({
    ...getProduct(id),
    quantity,
  }));
  const subtotal = roundMoney(items.reduce((sum, item) => sum + item.price * item.quantity, 0));
  const pointsEarned = Math.floor(subtotal * LOYALTY_POINTS_PER_REAL);
  const pixDiscount = state.customer.payment === "Pix" ? roundMoney(subtotal * PIX_DISCOUNT_RATE) : 0;
  const availablePointsDiscount = availablePointsDiscountForCart(subtotal, pixDiscount);
  const pointsDiscount = state.usePoints && subtotal > 0
    ? availablePointsDiscount
    : 0;
  const shipping = state.delivery === "home" && subtotal > 0 ? currentDeliveryFee() : 0;
  return {
    items,
    subtotal,
    pointsEarned,
    pixDiscount,
    availablePointsDiscount,
    pointsDiscount,
    shipping,
    total: roundMoney(Math.max(0, subtotal - pixDiscount - pointsDiscount + shipping)),
  };
}

function renderCart() {
  updateAccountHeader();

  const cartItems = document.querySelector("#cart-items");
  const cartPills = document.querySelectorAll("#cart-pill, [data-open-cart]");
  const cartCounts = document.querySelectorAll("#cart-count, [data-cart-count]");
  const cartCaption = document.querySelector("#cart-caption");
  const cartTotalPills = document.querySelectorAll("#cart-total-pill, [data-cart-total]");
  const subtotalEl = document.querySelector("#subtotal");
  const pixDiscountEl = document.querySelector("#pix-discount");
  const pointsDiscountEl = document.querySelector("#points-discount");
  const shippingEl = document.querySelector("#shipping");
  const pointsEarnedEl = document.querySelector("#points-earned");
  const loyaltyPreviewPointsEl = document.querySelector("#loyalty-preview-points");
  const loyaltyProgressFillEl = document.querySelector("#loyalty-progress-fill");
  const totalEl = document.querySelector("#total");
  const checkoutButton = document.querySelector("#checkout-button");
  const { items, subtotal, pointsEarned, pixDiscount, pointsDiscount, availablePointsDiscount, shipping, total } = calculateCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartItemLabel = `${itemCount} ${itemCount === 1 ? "item" : "itens"}`;

  cartCounts.forEach((item) => {
    item.textContent = cartItemLabel;
  });
  cartTotalPills.forEach((item) => {
    item.textContent = formatCurrency(total);
  });
  cartPills.forEach((pill) => {
    pill.setAttribute("aria-label", `${cartItemLabel} na cesta. Total ${formatCurrency(total)}.`);
  });
  if (cartCaption) {
    cartCaption.textContent =
      itemCount === 0 ? "Nenhum item ainda" : `${itemCount} ${itemCount === 1 ? "item" : "itens"}`;
  }
  subtotalEl.textContent = formatCurrency(subtotal);
  if (pixDiscountEl) {
    pixDiscountEl.textContent = pixDiscount ? `- ${formatCurrency(pixDiscount)}` : "R$ 0,00";
  }
  if (pointsDiscountEl) {
    pointsDiscountEl.textContent = state.usePoints
      ? `- ${formatCurrency(pointsDiscount)}`
      : availablePointsDiscount
        ? `até - ${formatCurrency(availablePointsDiscount)}`
        : "Sem pontos";
  }
  shippingEl.textContent = shipping ? formatCurrency(shipping) : "R$ 0,00";
  pointsEarnedEl.textContent = `+${pointsEarned} ${pointsEarned === 1 ? "ponto" : "pontos"}`;
  if (loyaltyPreviewPointsEl) {
    loyaltyPreviewPointsEl.textContent = `Nesta cesta: +${pointsEarned} ${pointsEarned === 1 ? "ponto" : "pontos"}`;
  }
  if (loyaltyProgressFillEl) {
    loyaltyProgressFillEl.style.width = `${Math.min(100, ((LOYALTY_EXAMPLE_BALANCE + pointsEarned) / 500) * 100)}%`;
  }
  totalEl.textContent = formatCurrency(total);
  checkoutButton.disabled = itemCount === 0;

  document.querySelectorAll('input[name="delivery"]').forEach((input) => {
    input.checked = input.value === state.delivery;
  });
  document.querySelectorAll('input[name="payment"]').forEach((input) => {
    input.checked = input.value === state.customer.payment;
  });

  if (!items.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <img src="assets/onorio-avatar.png" alt="" />
        <strong>Seu carrinho está vazio</strong>
        <span>Adicione produtos para montar o pedido.</span>
      </div>
    `;
    renderCheckoutFlow();
    return;
  }

  cartItems.innerHTML = items
    .map(
      (item) => `
      <article class="cart-item">
        ${itemImage(item, "cart-thumb")}
        <div>
          <h3>${item.name}</h3>
          <p>${item.detail}</p>
          <div class="quantity-control" aria-label="Quantidade de ${item.name}">
            <button type="button" data-decrease="${item.id}" aria-label="Diminuir">-</button>
            <span>${item.quantity}</span>
            <button type="button" data-increase="${item.id}" aria-label="Aumentar">+</button>
          </div>
        </div>
        <div>
          <button type="button" class="remove-item" data-remove="${item.id}" aria-label="Remover">
            ${svg("close")}
          </button>
          <div class="cart-price">${formatCurrency(item.price * item.quantity)}</div>
        </div>
      </article>
    `,
    )
    .join("");
  renderCheckoutFlow();
}

function addToCart(id) {
  state.cart.set(id, (state.cart.get(id) || 0) + 1);
  renderCart();
  showToast(`${getProduct(id).name} adicionado ao carrinho.`);
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `${svg("cart")}<span>${message}</span>`;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 2300);
}

function modalContent() {
  return document.querySelector("#modal-content");
}

function openProductModal(id) {
  const product = getProduct(id);
  if (!product) return;

  modalContent().innerHTML = `
    <div class="product-detail">
      ${productMedia(product, "detail")}
      <div class="detail-copy">
        <span class="detail-category">${product.category}</span>
        <h2 id="modal-title">${product.name}</h2>
        <p>${product.detail}</p>
        <strong>${formatCurrency(product.price)}</strong>
      </div>
    </div>
    <div class="detail-info">
      <div>
        <small>Status</small>
        <strong>${product.stock}</strong>
      </div>
      <div>
        <small>Recebimento</small>
        <strong>Retirada ou entrega</strong>
      </div>
    </div>
    <p class="modal-note">${product.description}</p>
    <p class="care-note">${product.caution}</p>
    <div class="modal-actions">
      <button type="button" class="secondary-button" data-modal-close>Continuar olhando</button>
      <button type="button" class="checkout-button" data-modal-add="${product.id}">
        Adicionar
        ${svg("cart")}
      </button>
    </div>
  `;
  document.querySelector("#modal-card").classList.remove("is-checkout");
  document.querySelector("#modal-backdrop").hidden = false;
}

function collectCustomerFromForm() {
  document.querySelectorAll("[data-customer]").forEach((field) => {
    state.customer[field.dataset.customer] = field.value.trim();
  });
}

function buildOrderMessage() {
  collectCustomerFromForm();
  const { items, subtotal, pointsEarned, pixDiscount, pointsDiscount, shipping, total } = calculateCart();
  const deliveryLabel = state.delivery === "pickup" ? "Retirar na loja" : "Receber em casa";
  const itemLines = items
    .map(
      (item) =>
        `- ${item.quantity}x ${item.name} (${item.detail}) - ${formatCurrency(item.price * item.quantity)}`,
    )
    .join("\n");

  return [
    "Olá, Drogaria Onório! Quero finalizar este pedido:",
    "",
    itemLines,
    "",
    `Subtotal: ${formatCurrency(subtotal)}`,
    `Desconto Pix: ${pixDiscount ? `- ${formatCurrency(pixDiscount)}` : formatCurrency(0)}`,
    `Desconto Cliente ON: ${pointsDiscount ? `- ${formatCurrency(pointsDiscount)}` : "não utilizado"}`,
    `Entrega: ${formatCurrency(shipping)}`,
    `Total: ${formatCurrency(total)}`,
    `${LOYALTY_PROGRAM_NAME}: +${pointsEarned} ${pointsEarned === 1 ? "ponto" : "pontos"} estimados nesta compra`,
    "",
    `Recebimento: ${deliveryLabel}`,
    `Pagamento: ${state.customer.payment || "A combinar"}`,
    `Nome: ${state.customer.name || "Não informado"}`,
    `Telefone: ${state.customer.phone || "Não informado"}`,
    `Endereço: ${state.deliveryQuote?.address || state.customer.address || "Não informado"}`,
    `Número: ${state.customer.addressNumber || "Não informado"}`,
    `Complemento: ${state.customer.addressComplement || "Sem complemento"}`,
    `Recebedor: ${state.customer.receiverName || state.customer.fullName || state.customer.name || "Não informado"}`,
    `Observações: ${state.customer.note || "Sem observações"}`,
  ].join("\n");
}

async function copyOrderMessage() {
  const message = buildOrderMessage();

  try {
    await navigator.clipboard.writeText(message);
    showToast("Mensagem do pedido copiada.");
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = message;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    showToast("Mensagem copiada para colar no WhatsApp.");
  }
}

function openWhatsAppMessage() {
  const message = buildOrderMessage();
  window.open(
    `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener",
  );
}

function openCheckoutModal() {
  const { items, subtotal, pointsEarned, pixDiscount, pointsDiscount, shipping, total } = calculateCart();
  if (!items.length) {
    showToast("Adicione um produto antes de finalizar.");
    return;
  }

  const deliveryLabel = state.delivery === "pickup" ? "Retirar na loja" : "Receber em casa";

  modalContent().innerHTML = `
    <img src="assets/onorio-avatar.png" alt="" />
    <h2 id="modal-title">Finalizar pedido</h2>
    <p id="modal-copy">
      Revise os dados abaixo. O app monta uma mensagem para você conferir antes de enviar pelo WhatsApp.
    </p>
    <form class="checkout-form">
      <label>
        <span>Nome</span>
        <input data-customer="name" type="text" placeholder="Seu nome" value="${escapeHtml(state.customer.name)}" />
      </label>
      <label>
        <span>Telefone</span>
        <input data-customer="phone" type="tel" placeholder="(00) 00000-0000" value="${escapeHtml(state.customer.phone)}" />
      </label>
      <label class="full-field">
        <span>${state.delivery === "pickup" ? "Bairro ou referência" : "Endereço para entrega"}</span>
        <input data-customer="address" type="text" placeholder="Ex.: Centro, Rua..." value="${escapeHtml(state.customer.address)}" />
      </label>
      <label>
        <span>Pagamento</span>
        <select data-customer="payment">
          ${["Pix", "Cartão", "Mercado Pago", "PicPay", "Boleto", "A combinar"]
            .map((option) => `<option ${state.customer.payment === option ? "selected" : ""}>${option}</option>`)
            .join("")}
        </select>
      </label>
      <label>
        <span>Observações</span>
        <input data-customer="note" type="text" placeholder="Troco, horário, dúvidas..." value="${escapeHtml(state.customer.note)}" />
      </label>
    </form>
    <div class="modal-summary">
      <strong>${items.length} ${items.length === 1 ? "produto" : "produtos"} - ${formatCurrency(total)}</strong>
      <span>${deliveryLabel}</span>
      <span>Subtotal: ${formatCurrency(subtotal)}</span>
      <span>Desconto Pix: ${pixDiscount ? `- ${formatCurrency(pixDiscount)}` : formatCurrency(0)}</span>
      <span>Desconto Cliente ON: ${pointsDiscount ? `- ${formatCurrency(pointsDiscount)}` : "não utilizado"}</span>
      <span>Entrega: ${formatCurrency(shipping)}</span>
      <span>${LOYALTY_PROGRAM_NAME}: +${pointsEarned} ${pointsEarned === 1 ? "ponto" : "pontos"}</span>
      <span>${items.map((item) => `${item.quantity}x ${item.name}`).join(", ")}</span>
    </div>
    <p class="care-note">
      A farmácia confirma disponibilidade, valores finais e regras de venda antes de concluir o atendimento.
    </p>
    <div class="modal-actions">
      <button type="button" class="secondary-button" data-copy-order>Copiar mensagem</button>
      <button type="button" class="checkout-button" data-open-whatsapp>Abrir WhatsApp</button>
    </div>
  `;
  document.querySelector("#modal-card").classList.add("is-checkout");
  document.querySelector("#modal-backdrop").hidden = false;
}

function closeModal() {
  document.querySelector("#modal-backdrop").hidden = true;
}

function openCartDrawer() {
  document.querySelector("#cart-panel").classList.add("is-open");
  document.body.classList.add("cart-open");
}

function closeCartDrawer() {
  document.querySelector("#cart-panel").classList.remove("is-open");
  document.body.classList.remove("cart-open");
}

function setAppQrCode() {
  const qrCodes = document.querySelectorAll("#app-qr-code, .app-qr-code");
  if (!qrCodes.length) return;

  const appUrl = new URL(window.location.href);
  appUrl.hash = "";
  const qrData = encodeURIComponent(appUrl.href);
  qrCodes.forEach((qrCode) => {
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${qrData}`;
  });
}

function closeAppDownload() {
  document.querySelectorAll("#app-download-panel, .app-download-panel").forEach((panel) => {
    panel.hidden = true;
  });
  document.querySelectorAll("#app-download-button, [data-app-download-toggle]").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function toggleAppDownload(button = document.querySelector("#app-download-button")) {
  const appDownload = button?.closest(".app-download") || document.querySelector("#app-download");
  const panel = appDownload?.querySelector("#app-download-panel, .app-download-panel");
  if (!panel || !button) return;

  const willOpen = panel.hidden;
  if (willOpen) {
    setAppQrCode();
  }
  closeAppDownload();
  panel.hidden = !willOpen;
  button.setAttribute("aria-expanded", String(willOpen));
}

function initCampaignCarousel() {
  const carousel = document.querySelector("#campaign-carousel");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll("[data-campaign-slide]")];
  const dots = [...carousel.querySelectorAll("[data-campaign-dot]")];
  const prev = carousel.querySelector("[data-campaign-prev]");
  const next = carousel.querySelector("[data-campaign-next]");
  let activeIndex = 0;
  let timerId;

  if (!slides.length) return;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
    });
  };

  const schedule = () => {
    window.clearInterval(timerId);
    timerId = window.setInterval(() => showSlide(activeIndex + 1), 4300);
  };

  prev?.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    schedule();
  });

  next?.addEventListener("click", () => {
    showSlide(activeIndex + 1);
    schedule();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.campaignDot));
      schedule();
    });
  });

  carousel.addEventListener("mouseenter", () => window.clearInterval(timerId));
  carousel.addEventListener("mouseleave", schedule);
  schedule();
}

function initCollapsingCategoryBar() {
  document.querySelector(".market-header")?.classList.remove("is-compact");
}

function bindEvents() {
  document.addEventListener("click", async (event) => {
    const addButton = event.target.closest("[data-add]");
    const categoryButton = event.target.closest("[data-category]");
    const favoriteButton = event.target.closest("[data-favorite]");
    const increaseButton = event.target.closest("[data-increase]");
    const decreaseButton = event.target.closest("[data-decrease]");
    const removeButton = event.target.closest("[data-remove]");
    const detailButton = event.target.closest("[data-detail]");
    const productPageButton = event.target.closest("[data-product-page]");
    const miniProductCard = event.target.closest(".mini-product-card");
    const buyNowButton = event.target.closest("[data-buy-now]");
    const modalAddButton = event.target.closest("[data-modal-add]");
    const closeModalButton = event.target.closest("[data-modal-close]");
    const copyOrderButton = event.target.closest("[data-copy-order]");
    const openWhatsAppButton = event.target.closest("[data-open-whatsapp]");
    const cookieButton = event.target.closest("[data-cookie-close]");
    const campaignActionButton = event.target.closest("[data-campaign-action]");
    const routeButton = event.target.closest("[data-route]");
    const catalogRouteButton = event.target.closest("[data-catalog-route]");
    const infoPageButton = event.target.closest("[data-info-page]");
    const appDownloadButton = event.target.closest("#app-download-button, [data-app-download-toggle]");
    const cartPillButton = event.target.closest("[data-open-cart]");
    const shelfScrollButton = event.target.closest(".shelf-heading button");
    const loginButton = event.target.closest("[data-checkout-login]");
    const socialLoginButton = event.target.closest("[data-social-login]");
    const calculateShippingButton = event.target.closest("[data-calc-shipping]");
    const applyCouponButton = event.target.closest("[data-apply-coupon]");
    const deliveryTab = event.target.closest("[data-delivery-tab]");
    const openStoreButton = event.target.closest("[data-open-store-modal]");
    const closeStoreButton = event.target.closest("[data-close-store-modal]");
    const selectStoreButton = event.target.closest("[data-select-store]");
    const paymentSelect = event.target.closest("[data-payment-select]");
    const copyPixButton = event.target.closest("[data-copy-pix]");
    const usePointsButton = event.target.closest("[data-use-points]");
    const whatsappFormButton = event.target.closest("[data-whatsapp-form]");
    const addAddressButton = event.target.closest("[data-add-address]");
    const saveCustomerDataButton = event.target.closest("[data-save-customer-data]");

    if (appDownloadButton) {
      event.preventDefault();
      toggleAppDownload(appDownloadButton);
      return;
    }

    if (cartPillButton) {
      event.preventDefault();
      if (document.querySelector("#checkout-flow")?.hidden === false) {
        navigateTo("#cesta");
      } else {
        openCartDrawer();
      }
      return;
    }

    if (routeButton) {
      event.preventDefault();
      if (routeButton.dataset.route === "#pagamento" && !validateHomeDeliveryDetails()) {
        return;
      }
      navigateTo(routeButton.dataset.route);
      return;
    }

    if (catalogRouteButton) {
      event.preventDefault();
      navigateToCatalog(catalogRouteButton.dataset.catalogRoute);
      return;
    }

    if (infoPageButton) {
      event.preventDefault();
      closeAppDownload();
      navigateTo(`#pagina/${encodeURIComponent(infoPageButton.dataset.infoPage)}`);
      return;
    }

    if (productPageButton) {
      event.preventDefault();
      navigateToProduct(productPageButton.dataset.productPage);
      return;
    }

    if (miniProductCard && !addButton) {
      const productId = miniProductCard.querySelector("[data-add]")?.dataset.add;
      if (productId) {
        event.preventDefault();
        navigateToProduct(productId);
        return;
      }
    }

    if (!event.target.closest("#app-download, .app-download")) {
      closeAppDownload();
    }

    if (addAddressButton) {
      event.preventDefault();
      state.delivery = "home";
      state.cep = "";
      state.customer.cep = "";
      state.customer.address = "";
      state.customer.addressNumber = "";
      state.customer.addressComplement = "";
      state.customer.receiverName = state.customer.fullName || state.customer.name || "";
      state.deliveryQuote = null;
      state.shippingStatus = "idle";
      state.shippingError = "";
      renderCart();
      window.requestAnimationFrame(() => {
        document.querySelector("[data-customer-cep-card]")?.focus();
      });
      showToast("Digite o novo CEP e complete os dados de entrega.");
      return;
    }

    if (saveCustomerDataButton) {
      event.preventDefault();
      const cep = formatCep(state.cep || state.customer.cep || "");
      state.cep = cep;
      state.customer.cep = cep;
      if (state.customer.fullName.trim()) {
        state.customer.name = state.customer.fullName.trim().split(/\s+/).slice(0, 2).join(" ");
      }
      renderCart();
      showToast("Dados atualizados no protótipo.");
      return;
    }

    if (loginButton || socialLoginButton) {
      event.preventDefault();
      state.loggedIn = true;
      state.customer.email = document.querySelector("[data-checkout-customer='email']")?.value.trim() || state.customer.email;
      updateAccountHeader();
      showToast("Login confirmado para o protótipo.");
      navigateTo("#revisao");
      return;
    }

    if (calculateShippingButton) {
      const form = calculateShippingButton.closest("[data-shipping-form]");
      const cepInput = form?.querySelector("input") || document.querySelector("#cep-input");
      const cep = normalizeCep(state.cep || state.customer.cep || cepInput?.value);

      state.cep = formatCep(cep);
      state.delivery = "home";
      state.shippingStatus = "loading";
      state.shippingError = "";
      renderCart();

      try {
        const quote = await quoteDeliveryByCep(cep);
        state.deliveryQuote = quote;
        state.customer.address = quote.address;
        state.customer.cep = quote.formattedCep;
        state.customer.receiverName ||= state.customer.fullName || state.customer.name || "";
        state.selectedStore = quote.nearestStoreId;
        state.shippingStatus = "done";
        state.shippingError = "";
        showToast(`${quote.serviceLabel} calculado: ${formatCurrency(quote.fee)}.`);
      } catch (error) {
        state.deliveryQuote = null;
        state.shippingStatus = "error";
        state.shippingError = error.message || "Não foi possível calcular o frete.";
        showToast(state.shippingError);
      }

      renderCart();
      return;
    }

    if (applyCouponButton) {
      state.coupon = document.querySelector("#coupon-input")?.value.trim() || "";
      showToast(state.coupon ? `Cupom ${state.coupon} adicionado ao protótipo.` : "Digite um cupom para aplicar.");
      renderCart();
      return;
    }

    if (deliveryTab) {
      state.delivery = deliveryTab.dataset.deliveryTab;
      state.storeModalOpen = state.delivery === "pickup";
      renderCart();
      if (state.storeModalOpen) {
        await ensurePickupDistanceQuote();
        renderCart();
      }
      return;
    }

    if (openStoreButton) {
      state.storeModalOpen = true;
      renderCart();
      await ensurePickupDistanceQuote();
      renderCart();
      return;
    }

    if (closeStoreButton) {
      state.storeModalOpen = false;
      renderCart();
      return;
    }

    if (selectStoreButton) {
      const selectedStore = document.querySelector('input[name="pickup-store"]:checked')?.value;
      state.selectedStore = selectedStore || state.selectedStore;
      state.delivery = "pickup";
      state.storeModalOpen = false;
      navigateTo("#pagamento");
      return;
    }

    if (paymentSelect) {
      state.customer.payment = paymentSelect.dataset.paymentSelect;
      renderCart();
      return;
    }

    if (usePointsButton) {
      state.usePoints = usePointsButton.dataset.usePoints === "true";
      showToast(state.usePoints ? "Desconto Cliente ON aplicado." : "Pontos guardados para a próxima compra.");
      renderCart();
      return;
    }

    if (copyPixButton) {
      const pixCode = document.querySelector("#pix-code")?.value || "";
      navigator.clipboard?.writeText(pixCode);
      showToast("Código Pix copiado.");
      return;
    }

    if (whatsappFormButton) {
      event.preventDefault();
      const form = whatsappFormButton.closest("[data-request-form]");
      const type = whatsappFormButton.dataset.whatsappForm;
      const name = form?.elements.name?.value.trim() || state.customer.fullName || state.customer.name || "Cliente";
      const phone = form?.elements.phone?.value.trim() || state.customer.phone || "não informado";
      const details = form?.elements.details?.value.trim() || "não informado";
      const fileName = form?.elements.file?.files?.[0]?.name || "arquivo ainda não anexado";
      const title = type === "prescricao" ? "prescrição digital" : "orçamento de manipulação";
      const message = [
        `Olá, Drogaria Onório! Quero solicitar ${title}.`,
        `Nome: ${name}`,
        `Telefone: ${phone}`,
        `Detalhes: ${details}`,
        `Receita/anexo: ${fileName}`,
        "Vou anexar a receita nesta conversa para conferência.",
      ].join("\n");
      window.open(whatsappUrl(message), "_blank", "noopener");
      showToast("Abrindo WhatsApp com a solicitação.");
      return;
    }

    if (
      document.body.classList.contains("cart-open") &&
      !event.target.closest("#cart-panel") &&
      !event.target.closest("#cart-pill, [data-open-cart]")
    ) {
      closeCartDrawer();
    }

    if (addButton) {
      addToCart(addButton.dataset.add);
    }

    if (buyNowButton) {
      addToCart(buyNowButton.dataset.buyNow);
      navigateTo("#cesta");
      return;
    }

    if (detailButton) {
      navigateToProduct(detailButton.dataset.detail);
    }

    if (categoryButton) {
      navigateToCatalog(categoryButton.dataset.routeKey || "todos");
      return;
    }

    if (favoriteButton) {
      const id = favoriteButton.dataset.favorite;
      state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
      window.location.hash.startsWith("#catalogo/") ? renderCart() : renderProducts();
    }

    if (increaseButton) {
      const id = increaseButton.dataset.increase;
      state.cart.set(id, (state.cart.get(id) || 0) + 1);
      renderCart();
    }

    if (decreaseButton) {
      const id = decreaseButton.dataset.decrease;
      const quantity = (state.cart.get(id) || 0) - 1;
      quantity > 0 ? state.cart.set(id, quantity) : state.cart.delete(id);
      renderCart();
    }

    if (removeButton) {
      state.cart.delete(removeButton.dataset.remove);
      renderCart();
    }

    if (modalAddButton) {
      addToCart(modalAddButton.dataset.modalAdd);
      closeModal();
    }

    if (closeModalButton) {
      closeModal();
    }

    if (copyOrderButton) {
      copyOrderMessage();
    }

    if (openWhatsAppButton) {
      openWhatsAppMessage();
    }

    if (cookieButton) {
      document.querySelector("#cookie-bar")?.classList.add("is-hidden");
    }

    if (shelfScrollButton) {
      const section = shelfScrollButton.closest("section");
      const targetRow = section?.querySelector(".mini-product-row, .care-grid, .service-card-row");
      const direction = normalizeText(shelfScrollButton.getAttribute("aria-label")).includes("voltar") ? -1 : 1;
      targetRow?.scrollBy({ left: direction * 360, behavior: "smooth" });
      return;
    }

    if (campaignActionButton) {
      const action = campaignActionButton.dataset.campaignAction;
      if (action === "health-services") {
        navigateTo("#pagina/servicos-saude");
      }
      if (action === "discount") {
        navigateToCatalog("top-ofertas");
      }
      if (action === "loyalty") {
        navigateTo("#pagina/clienteon");
      }
      if (action === "payment") {
        navigateTo("#pagina/pagamentos");
        return;
      }
      if (action === "payment") {
        showToast("Pix ganha 5% de desconto; cartão em até 3x sem juros em compras acima de R$ 100,00, ou até 6x acima de R$ 1.000,00.");
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const keyboardTarget = event.target.closest("[data-info-page], [data-catalog-route]");
    if (!keyboardTarget) return;
    event.preventDefault();
    keyboardTarget.click();
  });

  document.addEventListener("submit", (event) => {
    const checkoutSearchForm = event.target.closest("[data-checkout-search-form]");
    if (!checkoutSearchForm) return;

    event.preventDefault();
    const searchValue = checkoutSearchForm.querySelector("[data-checkout-search-input]")?.value.trim() || "";
    state.query = searchValue;
    navigateToCatalog(searchValue ? "busca" : "todos");
  });

  document.querySelector("#search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProducts();
  });

  document.querySelector("#search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = document.querySelector("#search-input").value.trim();
    navigateToCatalog(state.query ? "busca" : "todos");
  });

  document.querySelector("#clear-filters").addEventListener("click", () => {
    navigateToCatalog("todos");
  });

  document.querySelector("#see-offers").addEventListener("click", () => {
    navigateToCatalog("top-ofertas");
  });

  document.querySelector("#empty-cart").addEventListener("click", () => {
    state.cart.clear();
    renderCart();
  });

  document.querySelectorAll('input[name="delivery"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      state.delivery = event.target.value;
      renderCart();
    });
  });

  document.querySelectorAll('input[name="payment"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      state.customer.payment = event.target.value;
      renderCart();
    });
  });

  document.addEventListener("input", (event) => {
    const customerField = event.target.closest("[data-checkout-customer]");
    const stateField = event.target.closest("[data-checkout-state]");

    if (customerField) {
      state.customer[customerField.dataset.checkoutCustomer] = customerField.value;
      if (customerField.dataset.checkoutCustomer === "fullName") {
        state.customer.name = customerField.value.trim().split(/\s+/).slice(0, 2).join(" ");
      }
    }

    if (stateField) {
      state[stateField.dataset.checkoutState] = stateField.value;
      if (stateField.dataset.checkoutState === "cep" && normalizeCep(state.deliveryQuote?.cep) !== normalizeCep(stateField.value)) {
        state.customer.cep = formatCep(stateField.value);
        state.deliveryQuote = null;
        state.shippingStatus = "idle";
        state.shippingError = "";
      }
    }
  });

  document.addEventListener("change", (event) => {
    const paymentField = event.target.closest("[data-payment-select]");
    const storeField = event.target.closest('input[name="pickup-store"]');

    if (paymentField) {
      state.customer.payment = paymentField.dataset.paymentSelect;
      renderCart();
    }

    if (storeField) {
      state.selectedStore = storeField.value;
    }
  });

  document.querySelector("#checkout-button").addEventListener("click", () => navigateTo("#cesta"));
  document.querySelector("#modal-close").addEventListener("click", closeModal);
  document.querySelector("#modal-backdrop").addEventListener("click", (event) => {
    if (event.target.id === "modal-backdrop") {
      closeModal();
    }
  });

  document.querySelector("#cart-pill").addEventListener("click", openCartDrawer);
  document.querySelector("#close-cart-panel").addEventListener("click", closeCartDrawer);

  document.querySelector("#delivery-shortcut")?.addEventListener("click", () => {
    state.delivery = "home";
    navigateTo("#entrega");
    showToast("Digite o CEP para calcular a entrega.");
  });

  document.querySelector("#login-top")?.addEventListener("click", () => {
    navigateTo("#login");
  });

  document.querySelector("#orders-top")?.addEventListener("click", () => {
    navigateTo("#pagina/pedidos");
    showToast("Área de pedidos entra na próxima etapa do MVP.");
  });

  document.querySelector("#search-nav").addEventListener("click", () => {
    document.querySelector("#search-input").focus();
  });

  document.querySelector("#categories-nav").addEventListener("click", () => {
    navigateToCatalog("todos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelector("#orders-nav").addEventListener("click", () => {
    navigateTo("#pagina/pedidos");
    showToast("Área de pedidos entra na próxima etapa do MVP.");
  });
  document.querySelector("#home-nav")?.addEventListener("click", () => {
    navigateTo("#home");
  });

  document.querySelector("#account-nav")?.addEventListener("click", () => {
    navigateTo("#login");
  });
}

renderCategories();
renderProducts();
renderCart();
setAppQrCode();
initCampaignCarousel();
initCollapsingCategoryBar();
bindEvents();
window.addEventListener("hashchange", renderCart);
