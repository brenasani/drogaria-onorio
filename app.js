const categories = [
  {
    id: "all",
    label: "Top ofertas",
    showInMenu: false,
    icon: "discount",
    tone: "deal",
    art: "offer",
    image: "assets/category-offers-v2.jpg",
    products: ["assets/products/benegrip.webp", "assets/products/nivea.jpg"],
    badge: "%",
    photoOnly: true,
    query: "oferta",
    routeKey: "top-ofertas",
    description: "Ofertas do dia, genéricos com desconto, leve 3 pague 2 e campanhas especiais da Drogaria Onório.",
    subcategories: ["Genéricos até 95%", "Leve 3 pague 2", "Ofertas do dia", "PBM laboratórios", "Cliente ON"],
  },
  {
    id: "Medicamentos",
    label: "Medicamentos",
    icon: "medicineBox",
    tone: "medicine",
    art: "cold",
    image: "assets/category-medicine-real-v2.png",
    products: ["assets/products/dorflex.webp", "assets/products/tylenol-2.jpg"],
    photoOnly: true,
    routeKey: "medicamentos",
    productCategories: ["Medicamentos"],
    description: "Medicamentos de referência, genéricos, similares e produtos isentos de prescrição, sempre com orientação responsável.",
    subcategories: ["Medicamentos de referência", "Genéricos", "Similares", "OTC / MIPs sem receita", "Controlados", "Antibióticos", "Injetáveis"],
  },
  {
    id: "Higiene pessoal",
    label: "Higiene pessoal",
    icon: "hygiene",
    tone: "hygiene",
    art: "oral",
    image: "assets/category-hygiene-real.jpg",
    products: ["assets/products/colgate-total-12-90g.webp", "assets/products/rexona-clinical-150ml.jpg"],
    sceneIcon: "sparkle",
    routeKey: "higiene-pessoal",
    productIds: ["colgate", "rexona", "dove-sabonete", "always-noturno", "oralb-power", "gillette-fusion", "listerine-cool-mint", "fio-dental-oralb", "escova-colgate-macia", "clareador-colgate", "nivea-men-barba"],
    description: "Tudo para higiene diária, saúde bucal, cuidado masculino e itens de uso recorrente.",
    subcategories: ["Sabonetes", "Desodorantes", "Creme dental", "Escovas", "Enxaguante bucal", "Fio dental", "Clareadores", "Masculino completo"],
  },
  {
    id: "Cosméticos",
    label: "Beleza",
    icon: "beauty",
    tone: "beauty",
    art: "beauty",
    image: "assets/category-beauty.jpg",
    products: ["assets/products/neutrogena-hydro-boost-50g.jpg", "assets/products/protetor-solar.jpg"],
    sceneIcon: "sparkle",
    routeKey: "beleza",
    productCategories: ["Cosméticos", "Perfumaria"],
    description: "Beleza, dermocosméticos, cabelo, proteção solar, maquiagem, perfumes e rotina de skincare.",
    subcategories: ["Shampoo", "Condicionador", "Skincare", "Protetor solar", "Maquiagem", "Perfumes", "Dermocosméticos"],
  },
  {
    id: "Mamãe e bebê",
    label: "Mamãe e bebê",
    icon: "family",
    tone: "baby",
    art: "baby",
    image: "assets/category-mom-baby-client.jpg",
    products: ["assets/products/fralda-babysec-premium-g.webp", "assets/products/johnsons-baby-shampoo-400ml.jpg"],
    sceneIcon: "baby",
    routeKey: "mamae-bebe",
    productCategories: ["Mamãe e bebê"],
    description: "Produtos para bebê, maternidade, gestante, pós-parto e cuidados da família.",
    subcategories: ["Fraldas infantil", "Lenços umedecidos", "Mamadeiras", "Chupetas", "Fórmulas infantis", "Gestante e pós-parto"],
  },
  {
    id: "Suplementos",
    label: "Bem-estar e saúde",
    icon: "wellness",
    tone: "wellness",
    art: "wellness",
    image: "assets/category-wellness-real.jpg",
    products: ["assets/products/centrum-az-30.jpg", "assets/products/omega3-catarinense-60.png"],
    sceneIcon: "bottle",
    routeKey: "bem-estar-saude",
    productIds: ["ensure-baunilha", "centrum-az", "omega3-catarinense", "lavitan-az", "vitamina-c", "barrinha-proteina", "snack-fit-castanhas"],
    productCategories: ["Suplementos"],
    description: "Vitaminas, suplementos, imunidade, produtos naturais e itens para rotina de saúde.",
    subcategories: ["Vitaminas", "Suplementos", "Ômega 3", "Imunidade", "Fitness", "Produtos naturais"],
  },
  {
    id: "Primeiros socorros",
    label: "Primeiros socorros",
    icon: "firstAid",
    tone: "first-aid",
    image: "assets/category-first-aid-kit.svg",
    products: ["assets/products/prescription-box.svg", "assets/products/tylenol-2.jpg"],
    sceneIcon: "shield",
    routeKey: "primeiros-socorros",
    productIds: ["curativo-band-aid", "agua-oxigenada", "micropore", "gaze-esteril", "termometro-digital", "bolsa-termica", "soro-fisiologico"],
    description: "Itens essenciais para pequenos cuidados do dia a dia e suporte em casa.",
    subcategories: ["Curativos", "Gaze", "Esparadrapo", "Termômetros", "Bolsas térmicas"],
  },
  {
    id: "Equipamentos e acessórios",
    label: "Equipamentos",
    icon: "equipment",
    tone: "equipment",
    image: "assets/category-equipment-real.webp",
    sceneIcon: "vaccine",
    routeKey: "equipamentos-acessorios",
    productIds: ["aparelho-pressao-gtech", "glicosimetro-gtech", "nebulizador-inalador", "mascaras-tripla", "muleta-aluminio"],
    description: "Acessórios e equipamentos para monitoramento e cuidado de saúde.",
    subcategories: ["Aparelho de pressão", "Glicemia", "Nebulizador", "Muletas", "Máscaras"],
  },
  {
    id: "Cuidados especiais",
    label: "Cuidados especiais",
    icon: "specialCare",
    tone: "special-care",
    image: "assets/category-special-care-elderly.jpg",
    products: ["assets/products/ensure-baunilha-850g.jpg", "assets/products/centrum-az-30.jpg"],
    sceneIcon: "heart",
    routeKey: "cuidados-especiais",
    productIds: ["ensure-baunilha", "centrum-az", "fralda-geriatrica-bigfral", "glucerna-baunilha", "fitas-glicemia", "seringa-insulina", "creme-preventivo-assaduras"],
    description: "Produtos para cuidados contínuos, idosos, diabetes e necessidades específicas.",
    subcategories: ["Geriátricos", "Incontinência", "Diabetes", "Ostomia"],
  },
  {
    id: "Conveniência rápida",
    label: "Conveniência",
    icon: "convenience",
    tone: "convenience",
    image: "assets/category-convenience-drinks.svg",
    products: ["assets/products/agua-crystal-500ml.jpg", "assets/products/ensure-baunilha-850g.jpg"],
    sceneIcon: "basket",
    routeKey: "conveniencia",
    productIds: ["agua", "coca-cola-lata", "monster-energy", "barrinha-proteina", "pilha-duracell", "snack-fit-castanhas"],
    description: "Itens rápidos para completar a compra: bebidas, snacks, utilidades e conveniência.",
    subcategories: ["Snacks fit", "Água", "Refrigerante", "Energético", "Barrinhas", "Pilhas", "Utilidades"],
  },
  {
    id: "Pet",
    label: "Linha pet",
    icon: "paw",
    tone: "pet",
    art: "pet",
    image: "assets/category-line-pet.jpg",
    sceneIcon: "heart",
    photoOnly: true,
    routeKey: "pet",
    productCategories: ["Pet"],
    productIds: ["shampoo-pet", "tapete-higienico-pet", "antipulgas-pet", "biscoito-pet"],
    description: "Cuidados básicos para cães e gatos, com produtos pet de higiene e rotina.",
    subcategories: ["Cachorros", "Gatos", "Shampoo pet", "Higiene pet", "Cuidados diários"],
  },
  {
    id: "Serviços",
    label: "Serviços",
    icon: "pharmacyService",
    tone: "services",
    art: "services",
    image: "assets/category-services-real.jpg",
    photoOnly: true,
    scrollTarget: "health-title",
    routeKey: "servicos",
    description: "Serviços farmacêuticos disponíveis na Drogaria Onório, com atendimento humanizado.",
    subcategories: ["Aferição de pressão", "Teste de glicemia", "Aplicação GLP-1", "Colocação de brincos", "Curativos", "Oximetria"],
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

const expandedCatalogProducts = [
  {
    id: "listerine-cool-mint",
    name: "Listerine Cool Mint",
    detail: "Enxaguante bucal 500ml",
    category: "Conveniência",
    subcategory: "Enxaguante bucal",
    keywords: "higiene pessoal saude bucal boca enxaguatorio",
    price: 21.9,
    oldPrice: 26.9,
    color: "#dff7f7",
    ink: "#006a75",
    round: false,
    image: "assets/products/hygiene-care-kit.svg",
    tag: "Higiene pessoal",
    promo: "-19%",
    description: "Enxaguante bucal para completar a rotina de higiene oral e complementar a compra de creme dental e escova.",
    caution: "Confira modo de uso e idade recomendada na embalagem.",
    stock: "Disponível hoje",
  },
  {
    id: "fio-dental-oralb",
    name: "Oral-B Essential Floss",
    detail: "Fio dental 50m",
    category: "Conveniência",
    subcategory: "Fio dental",
    keywords: "higiene pessoal saude bucal fio dental dental",
    price: 13.9,
    color: "#f2fbff",
    ink: "#0d5d8a",
    round: false,
    image: "assets/products/hygiene-care-kit.svg",
    tag: "Saúde bucal",
    description: "Fio dental para rotina diária de higiene bucal, indicado para compra recorrente.",
    caution: "Produto sujeito a variação de marca e apresentação por estoque.",
    stock: "Disponível hoje",
  },
  {
    id: "escova-colgate-macia",
    name: "Escova Colgate",
    detail: "Maciez média",
    category: "Conveniência",
    subcategory: "Escovas",
    keywords: "higiene pessoal escova dental saude bucal",
    price: 7.9,
    color: "#eff8ff",
    ink: "#0f6090",
    round: false,
    image: "assets/products/hygiene-care-kit.svg",
    tag: "Saúde bucal",
    promo: "Leve 3 pague 2",
    description: "Escova dental de uso diário para compor combos com creme dental, fio dental e enxaguante.",
    caution: "Confira modelo e maciez antes de finalizar.",
    stock: "Disponível hoje",
  },
  {
    id: "clareador-colgate",
    name: "Colgate Luminous White",
    detail: "Creme dental clareador 70g",
    category: "Conveniência",
    subcategory: "Clareadores",
    keywords: "higiene pessoal creme dental pasta clareador clareamento",
    price: 14.9,
    oldPrice: 18.9,
    color: "#fff6e4",
    ink: "#8c4d0c",
    round: false,
    image: "assets/products/hygiene-care-kit.svg",
    tag: "Clareador",
    promo: "-21%",
    description: "Creme dental clareador para destacar opções premium dentro de saúde bucal.",
    caution: "Confira indicação de uso e sensibilidade dental.",
    stock: "Disponível hoje",
  },
  {
    id: "nivea-men-barba",
    name: "Nivea Men",
    detail: "Espuma de barbear 200ml",
    category: "Conveniência",
    subcategory: "Masculino completo",
    keywords: "higiene pessoal masculino barba barbear homem",
    price: 24.9,
    color: "#eaf2ff",
    ink: "#123f7a",
    round: false,
    image: "assets/products/hygiene-care-kit.svg",
    tag: "Masculino",
    description: "Espuma de barbear para compor a área masculina com lâminas, cargas e cuidados pós-barba.",
    caution: "Confira fragrância e apresentação disponível.",
    stock: "Disponível hoje",
  },
  {
    id: "curativo-band-aid",
    name: "Curativo adesivo",
    detail: "Caixa c/ 35 unidades",
    category: "Primeiros socorros",
    subcategory: "Curativos",
    keywords: "band-aid bandaid machucado ferimento primeiro socorro",
    price: 12.9,
    color: "#ffe7d7",
    ink: "#8a3f15",
    round: false,
    image: "assets/products/first-aid-products.svg",
    tag: "Primeiros socorros",
    description: "Curativos adesivos para pequenos cortes e cuidados rápidos em casa, bolsa ou trabalho.",
    caution: "Limpe a pele antes de aplicar e troque conforme necessidade.",
    stock: "Disponível hoje",
  },
  {
    id: "agua-oxigenada",
    name: "Água oxigenada Farmax",
    detail: "10 volumes 100ml",
    category: "Primeiros socorros",
    subcategory: "Curativos",
    keywords: "agua oxigenada antisseptico primeiros socorros limpeza",
    price: 5.9,
    color: "#eef9ff",
    ink: "#176886",
    round: false,
    image: "assets/products/first-aid-products.svg",
    tag: "Curativos",
    description: "Item básico para cuidados domésticos, higienização e primeiros socorros conforme orientação.",
    caution: "Uso externo. Consulte orientação para feridas profundas ou sinais de infecção.",
    stock: "Disponível hoje",
  },
  {
    id: "micropore",
    name: "Micropore",
    detail: "Fita hipoalergênica 25mm",
    category: "Primeiros socorros",
    subcategory: "Esparadrapo",
    keywords: "micropore esparadrapo fita curativo gaze",
    price: 8.9,
    color: "#f6f2ec",
    ink: "#6d5a48",
    round: false,
    image: "assets/products/first-aid-products.svg",
    tag: "Curativos",
    description: "Fita para fixação de curativos e gaze, ideal para montar uma farmacinha completa.",
    caution: "Evite uso em pele irritada ou sensível sem orientação.",
    stock: "Disponível hoje",
  },
  {
    id: "gaze-esteril",
    name: "Gaze estéril",
    detail: "Pacote c/ 10",
    category: "Primeiros socorros",
    subcategory: "Gaze",
    keywords: "gaze curativo ferida primeiros socorros",
    price: 6.9,
    color: "#f8fbff",
    ink: "#375a70",
    round: false,
    image: "assets/products/first-aid-products.svg",
    tag: "Curativos",
    description: "Gaze estéril para pequenos curativos e apoio em procedimentos simples.",
    caution: "Mantenha a embalagem fechada até o uso.",
    stock: "Disponível hoje",
  },
  {
    id: "termometro-digital",
    name: "Termômetro digital",
    detail: "Ponta flexível",
    category: "Primeiros socorros",
    subcategory: "Termômetros",
    keywords: "termometro febre temperatura primeiros socorros",
    price: 19.9,
    color: "#eef7ff",
    ink: "#1c5c7d",
    round: false,
    image: "assets/products/first-aid-products.svg",
    tag: "Febre",
    description: "Termômetro digital para acompanhamento de temperatura corporal em casa.",
    caution: "Confira instruções de medição e higienização.",
    stock: "Disponível hoje",
  },
  {
    id: "bolsa-termica",
    name: "Bolsa térmica",
    detail: "Gel quente/frio",
    category: "Primeiros socorros",
    subcategory: "Bolsas térmicas",
    keywords: "bolsa termica gelo quente frio dor muscular",
    price: 32.9,
    color: "#f0fbff",
    ink: "#235a7a",
    round: false,
    image: "assets/products/first-aid-products.svg",
    tag: "Cuidados",
    description: "Bolsa térmica reutilizável para compressa quente ou fria conforme orientação.",
    caution: "Siga o tempo de aquecimento/resfriamento indicado na embalagem.",
    stock: "Sob consulta",
  },
  {
    id: "soro-fisiologico",
    name: "Soro fisiológico",
    detail: "0,9% 500ml",
    category: "Primeiros socorros",
    subcategory: "Curativos",
    keywords: "soro fisiologico limpeza nasal ferida primeiros socorros",
    price: 8.5,
    color: "#eaf9ff",
    ink: "#12647d",
    round: false,
    image: "assets/products/first-aid-products.svg",
    tag: "Farmacinha",
    description: "Solução fisiológica para limpeza e cuidados básicos conforme orientação de uso.",
    caution: "Confira tipo de embalagem, validade e modo de uso.",
    stock: "Disponível hoje",
  },
  {
    id: "aparelho-pressao-gtech",
    name: "Aparelho de pressão G-Tech",
    detail: "Digital de braço",
    category: "Equipamentos e acessórios",
    subcategory: "Aparelho de pressão",
    keywords: "pressao arterial medidor aparelho equipamento",
    price: 129.9,
    oldPrice: 159.9,
    color: "#eef8ff",
    ink: "#245978",
    round: false,
    image: "assets/products/health-equipment-kit.svg",
    tag: "Equipamentos",
    promo: "-19%",
    description: "Aparelho digital para acompanhamento de pressão arterial em casa.",
    caution: "A medição não substitui avaliação médica. Leia o manual antes do uso.",
    stock: "Disponível hoje",
  },
  {
    id: "glicosimetro-gtech",
    name: "Glicosímetro G-Tech",
    detail: "Kit monitor de glicemia",
    category: "Equipamentos e acessórios",
    subcategory: "Glicemia",
    keywords: "glicose diabetes glicosimetro medidor glicemia",
    price: 69.9,
    color: "#f3f8ff",
    ink: "#275b82",
    round: false,
    image: "assets/products/health-equipment-kit.svg",
    tag: "Diabetes",
    description: "Kit demonstrativo para monitoramento de glicemia capilar com acessórios compatíveis.",
    caution: "Verifique compatibilidade das tiras e siga orientação profissional.",
    stock: "Disponível hoje",
  },
  {
    id: "nebulizador-inalador",
    name: "Nebulizador",
    detail: "Inalador compacto",
    category: "Equipamentos e acessórios",
    subcategory: "Nebulizador",
    keywords: "inalador nebulizador respiratorio equipamentos",
    price: 149.9,
    color: "#edfaff",
    ink: "#166176",
    round: false,
    image: "assets/products/health-equipment-kit.svg",
    tag: "Respiratório",
    description: "Nebulizador compacto para cuidados respiratórios conforme prescrição/orientação.",
    caution: "Uso de medicamentos inalatórios deve seguir orientação de profissional habilitado.",
    stock: "Sob consulta",
  },
  {
    id: "mascaras-tripla",
    name: "Máscara descartável",
    detail: "Tripla camada c/ 50",
    category: "Equipamentos e acessórios",
    subcategory: "Máscaras",
    keywords: "mascara descartavel protecao respiratoria",
    price: 19.9,
    color: "#eefbff",
    ink: "#276477",
    round: false,
    image: "assets/products/health-equipment-kit.svg",
    tag: "Proteção",
    description: "Máscaras descartáveis para uso diário e proteção básica.",
    caution: "Produto descartável. Troque conforme necessidade.",
    stock: "Disponível hoje",
  },
  {
    id: "muleta-aluminio",
    name: "Muleta canadense",
    detail: "Alumínio unidade",
    category: "Equipamentos e acessórios",
    subcategory: "Muletas",
    keywords: "muleta apoio mobilidade acessorio",
    price: 79.9,
    color: "#f2f5f4",
    ink: "#31554b",
    round: false,
    image: "assets/products/health-equipment-kit.svg",
    tag: "Mobilidade",
    description: "Apoio de mobilidade para venda sob consulta de tamanho e disponibilidade.",
    caution: "Ajuste a altura e use conforme orientação de profissional.",
    stock: "Sob consulta",
  },
  {
    id: "fralda-geriatrica-bigfral",
    name: "Fralda geriátrica",
    detail: "Bigfral G c/ 8",
    category: "Cuidados especiais",
    subcategory: "Incontinência",
    keywords: "geriatrico idoso incontinencia fralda adulto",
    price: 34.9,
    oldPrice: 42.9,
    color: "#f3f7ff",
    ink: "#34537a",
    round: false,
    image: "assets/products/special-care-products.svg",
    tag: "Cuidados especiais",
    promo: "-19%",
    description: "Fralda adulto para cuidado contínuo e rotina de incontinência.",
    caution: "Confira tamanho, cintura indicada e absorção.",
    stock: "Disponível hoje",
  },
  {
    id: "glucerna-baunilha",
    name: "Glucerna Baunilha",
    detail: "Complemento 400g",
    category: "Cuidados especiais",
    subcategory: "Diabetes",
    keywords: "diabetes nutricao suplemento adulto glicemia",
    price: 74.9,
    color: "#fff5df",
    ink: "#765112",
    round: false,
    image: "assets/products/special-care-products.svg",
    tag: "Nutrição",
    description: "Complemento nutricional demonstrativo para área de diabetes e cuidados especiais.",
    caution: "Use conforme orientação de nutricionista ou profissional de saúde.",
    stock: "Sob consulta",
  },
  {
    id: "fitas-glicemia",
    name: "Tiras de glicemia",
    detail: "Caixa c/ 50",
    category: "Cuidados especiais",
    subcategory: "Diabetes",
    keywords: "fitas tiras glicemia diabetes glicosimetro",
    price: 64.9,
    color: "#edf8ff",
    ink: "#245a78",
    round: false,
    image: "assets/products/special-care-products.svg",
    tag: "Diabetes",
    description: "Tiras reagentes para controle de glicemia, sempre conferindo compatibilidade com o aparelho.",
    caution: "Compatibilidade por marca e lote deve ser confirmada antes da venda.",
    stock: "Disponível hoje",
  },
  {
    id: "seringa-insulina",
    name: "Seringa para insulina",
    detail: "1ml c/ agulha",
    category: "Cuidados especiais",
    subcategory: "Diabetes",
    keywords: "seringa insulina diabetes aplicacao",
    price: 1.9,
    color: "#f4fbff",
    ink: "#1d6378",
    round: false,
    image: "assets/products/special-care-products.svg",
    tag: "Diabetes",
    description: "Seringa para aplicação conforme orientação profissional e prescrição quando aplicável.",
    caution: "Produto perfurocortante. Descarte corretamente após o uso.",
    stock: "Disponível hoje",
  },
  {
    id: "creme-preventivo-assaduras",
    name: "Creme preventivo",
    detail: "Assaduras 60g",
    category: "Cuidados especiais",
    subcategory: "Geriátricos",
    keywords: "geriatrico assadura pele barreira cuidado especial",
    price: 18.9,
    color: "#fff1e6",
    ink: "#8a4d18",
    round: false,
    image: "assets/products/special-care-products.svg",
    tag: "Pele",
    description: "Creme de barreira para cuidados com pele sensível em rotina geriátrica ou infantil.",
    caution: "Confira composição e área de aplicação indicada.",
    stock: "Disponível hoje",
  },
  {
    id: "coca-cola-lata",
    name: "Coca-Cola",
    detail: "Lata 350ml",
    category: "Conveniência",
    subcategory: "Refrigerante",
    keywords: "refrigerante bebida coca cola conveniencia",
    price: 4.9,
    color: "#ffebeb",
    ink: "#b31919",
    round: false,
    image: "assets/products/convenience-products.svg",
    tag: "Bebidas",
    description: "Bebida gelada para compra de conveniência junto com o pedido.",
    caution: "Disponibilidade pode variar por loja.",
    stock: "Disponível hoje",
  },
  {
    id: "monster-energy",
    name: "Monster Energy",
    detail: "Lata 473ml",
    category: "Conveniência",
    subcategory: "Energético",
    keywords: "energetico bebida conveniencia monster",
    price: 9.9,
    color: "#e9f9ea",
    ink: "#0f5d1f",
    round: false,
    image: "assets/products/convenience-products.svg",
    tag: "Bebidas",
    description: "Energético para área de conveniência, com compra rápida no mesmo pedido.",
    caution: "Consumo não recomendado para crianças, gestantes e pessoas sensíveis à cafeína.",
    stock: "Disponível hoje",
  },
  {
    id: "barrinha-proteina",
    name: "Barra de proteína",
    detail: "Sabor chocolate 40g",
    category: "Conveniência",
    subcategory: "Barrinhas",
    keywords: "snack fit barrinha proteina fitness conveniencia",
    price: 7.9,
    color: "#f8efe8",
    ink: "#6b3b1b",
    round: false,
    image: "assets/products/convenience-products.svg",
    tag: "Snack fit",
    description: "Barrinha para compra rápida, ideal para complementar a área de bem-estar e conveniência.",
    caution: "Confira alergênicos e composição na embalagem.",
    stock: "Disponível hoje",
  },
  {
    id: "pilha-duracell",
    name: "Pilha alcalina",
    detail: "AA c/ 2 unidades",
    category: "Conveniência",
    subcategory: "Pilhas",
    keywords: "pilha bateria utilidades conveniencia",
    price: 13.9,
    color: "#fff3df",
    ink: "#8a4d00",
    round: false,
    image: "assets/products/convenience-products.svg",
    tag: "Utilidades",
    description: "Pilha alcalina para itens de conveniência e uso emergencial.",
    caution: "Confira tamanho e descarte corretamente.",
    stock: "Disponível hoje",
  },
  {
    id: "snack-fit-castanhas",
    name: "Mix de castanhas",
    detail: "Sachê 30g",
    category: "Conveniência",
    subcategory: "Snacks fit",
    keywords: "snack fit castanhas conveniencia natural",
    price: 6.9,
    color: "#fff8e8",
    ink: "#75521a",
    round: false,
    image: "assets/products/convenience-products.svg",
    tag: "Snack fit",
    description: "Snack prático para completar a compra com opção de conveniência mais saudável.",
    caution: "Pode conter alergênicos. Confira rótulo.",
    stock: "Disponível hoje",
  },
  {
    id: "tapete-higienico-pet",
    name: "Tapete higiênico pet",
    detail: "Pacote c/ 7",
    category: "Pet",
    subcategory: "Higiene pet",
    keywords: "linha pet cachorro gato tapete higiene",
    price: 29.9,
    color: "#f1fbff",
    ink: "#265d78",
    round: false,
    image: "assets/products/pet-products.svg",
    tag: "Linha pet",
    description: "Tapete higiênico para cães, item recorrente da linha pet.",
    caution: "Confira tamanho e absorção do produto.",
    stock: "Disponível hoje",
  },
  {
    id: "antipulgas-pet",
    name: "Antipulgas pet",
    detail: "Cães 10 a 20kg",
    category: "Pet",
    subcategory: "Cuidados diários",
    keywords: "linha pet cachorro antipulgas carrapatos",
    price: 49.9,
    color: "#fff4e8",
    ink: "#7a4214",
    round: false,
    image: "assets/products/pet-products.svg",
    tag: "Linha pet",
    description: "Produto demonstrativo para prevenção de pulgas e carrapatos na linha pet.",
    caution: "Confira peso do animal, espécie e orientação do fabricante antes do uso.",
    stock: "Sob consulta",
  },
  {
    id: "biscoito-pet",
    name: "Biscoito pet",
    detail: "Sabor carne 100g",
    category: "Pet",
    subcategory: "Cachorros",
    keywords: "linha pet cachorro snack biscoito",
    price: 11.9,
    color: "#fff1df",
    ink: "#7a4214",
    round: false,
    image: "assets/products/pet-products.svg",
    tag: "Linha pet",
    description: "Snack para cães para ampliar a vitrine de linha pet e compra por impulso.",
    caution: "Ofereça conforme porte e orientação da embalagem.",
    stock: "Disponível hoje",
  },
  {
    id: "dipirona-generica",
    name: "Dipirona Sódica",
    detail: "500mg c/ 10 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    keywords: "genericos genericos ate 95 analgesico antitermico dor febre otc mips sem receita",
    price: 6.9,
    oldPrice: 12.9,
    color: "#eaf8ed",
    ink: "#08713f",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Genérico",
    promo: "-47%",
    description: "Medicamento generico demonstrativo para dor e febre, com venda conforme orientacao farmaceutica.",
    caution: "Consulte a bula e evite automedicacao.",
    stock: "Disponivel hoje",
  },
  {
    id: "losartana-generica",
    name: "Losartana Potássica",
    detail: "50mg c/ 30 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    keywords: "genericos genericos ate 95 anti hipertensivo pressao alta prescricao referencia similar",
    price: 13.9,
    oldPrice: 29.9,
    color: "#eff8ef",
    ink: "#0a6c42",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Genérico",
    promo: "-54%",
    description: "Exemplo de medicamento de uso continuo para compor a area de genericos e PBM.",
    caution: "Venda e uso conforme prescricao e orientacao profissional.",
    stock: "Sob consulta",
  },
  {
    id: "amoxicilina-500",
    name: "Amoxicilina",
    detail: "500mg c/ 21 cápsulas",
    category: "Medicamentos",
    subcategory: "Antibióticos",
    keywords: "antibioticos antibiotico prescricao tarja vermelha infeccao",
    price: 28.9,
    color: "#fff1e8",
    ink: "#9b3d13",
    round: false,
    image: "assets/products/prescription-box.svg",
    tag: "Venda sob prescrição",
    description: "Antibiotico demonstrativo para indicar o fluxo de venda com retencao/orientacao conforme legislacao.",
    caution: "Venda sob prescricao medica. Valide receita, estoque e regras vigentes antes de dispensar.",
    stock: "Sob consulta",
  },
  {
    id: "sertralina-50",
    name: "Sertralina",
    detail: "50mg c/ 30 comprimidos",
    category: "Medicamentos",
    subcategory: "Controlados",
    keywords: "controlados tarja vermelha prescricao saude mental receita",
    price: 34.9,
    color: "#f5f0ff",
    ink: "#563887",
    round: false,
    image: "assets/products/prescription-box.svg",
    tag: "Controlado",
    description: "Produto demonstrativo para representar medicamentos com controle de venda e validacao de receita.",
    caution: "Comercializacao conforme legislacao vigente e conferencia farmaceutica.",
    stock: "Sob consulta",
  },
  {
    id: "complexo-b-injetavel",
    name: "Complexo B",
    detail: "Solução injetável 2ml",
    category: "Medicamentos",
    subcategory: "Injetáveis",
    keywords: "injetaveis medicamento injetavel aplicacao prescricao vitamina complexo b",
    price: 9.9,
    color: "#fff7e7",
    ink: "#87530f",
    round: false,
    image: "assets/products/prescription-box.svg",
    tag: "Injetável",
    description: "Exemplo de item injetavel para futura integracao com servico farmaceutico de aplicacao.",
    caution: "Aplicacao somente mediante avaliacao, prescricao quando aplicavel e disponibilidade da loja.",
    stock: "Sob consulta",
  },
  {
    id: "vick-pyrena",
    name: "Vick Pyrena",
    detail: "Sabor mel e limão c/ 5 envelopes",
    category: "Medicamentos",
    subcategory: "OTC / MIPs sem receita",
    keywords: "gripe resfriado antigripal otc mips sem receita leve tambem benegrip",
    price: 19.9,
    color: "#fff4e4",
    ink: "#805012",
    round: false,
    image: "assets/products/prescription-box.svg",
    tag: "Leve também",
    description: "Sugestao de associacao para campanhas de inverno e compra complementar.",
    caution: "Confira composicao, restricoes e bula antes do uso.",
    stock: "Disponivel hoje",
  },
  {
    id: "lenco-umedecido-huggies",
    name: "Lenços umedecidos",
    detail: "Huggies c/ 48 unidades",
    category: "Mamãe e bebê",
    subcategory: "Lenços umedecidos",
    keywords: "mamae bebe lencos umedecidos higiene infantil",
    price: 12.9,
    color: "#eef8ff",
    ink: "#195a7c",
    round: false,
    image: "assets/products/huggies-supreme-care-m.jpg",
    tag: "Bebê",
    description: "Lencos umedecidos para rotina de troca e higiene infantil.",
    caution: "Confira fragrancia, sensibilidade e indicacao da embalagem.",
    stock: "Disponivel hoje",
  },
  {
    id: "mamadeira-lillo",
    name: "Mamadeira",
    detail: "Anticólica 240ml",
    category: "Mamãe e bebê",
    subcategory: "Mamadeiras",
    keywords: "mamae bebe mamadeira anticolica infantil",
    price: 29.9,
    color: "#f3fbff",
    ink: "#245e7a",
    round: false,
    image: "assets/products/johnsons-baby-shampoo-400ml.jpg",
    tag: "Bebê",
    description: "Mamadeira demonstrativa para ampliar a navegacao de mamae e bebe.",
    caution: "Esterilize antes do uso e confira fluxo do bico indicado para a idade.",
    stock: "Sob consulta",
  },
  {
    id: "chupeta-avent",
    name: "Chupeta",
    detail: "0-6 meses unidade",
    category: "Mamãe e bebê",
    subcategory: "Chupetas",
    keywords: "mamae bebe chupeta recem nascido infantil",
    price: 24.9,
    color: "#fff2f7",
    ink: "#8a3156",
    round: false,
    image: "assets/products/johnsons-baby-shampoo-400ml.jpg",
    tag: "Bebê",
    description: "Chupeta demonstrativa para compor o sortimento de primeira infancia.",
    caution: "Confira faixa etaria, material e recomendacao de troca.",
    stock: "Sob consulta",
  },
  {
    id: "absorvente-pos-parto",
    name: "Absorvente pós-parto",
    detail: "Pacote c/ 20",
    category: "Mamãe e bebê",
    subcategory: "Gestante e pós-parto",
    keywords: "mamae bebe gestante pos parto maternidade",
    price: 19.9,
    color: "#fff3f0",
    ink: "#8a3d2d",
    round: false,
    image: "assets/products/always-noturno-8.jpg",
    tag: "Maternidade",
    description: "Item para cuidado no pos-parto e montagem de mala maternidade.",
    caution: "Confira tamanho, absorcao e orientacao do fabricante.",
    stock: "Disponivel hoje",
  },
  {
    id: "bolsa-ostomia",
    name: "Bolsa coletora",
    detail: "Ostomia unidade",
    category: "Cuidados especiais",
    subcategory: "Ostomia",
    keywords: "ostomia bolsa coletora cuidados especiais",
    price: 22.9,
    color: "#f5f8f2",
    ink: "#526d2c",
    round: false,
    image: "assets/products/special-care-products.svg",
    tag: "Ostomia",
    description: "Produto demonstrativo para cuidados especiais e venda sob consulta de modelo.",
    caution: "Confirme tamanho, tipo de sistema e orientacao profissional antes da compra.",
    stock: "Sob consulta",
  },
  {
    id: "base-facial-maybelline",
    name: "Base facial",
    detail: "Efeito matte 30ml",
    category: "Cosméticos",
    subcategory: "Maquiagem",
    keywords: "maquiagem beleza base facial dermocosmeticos",
    price: 49.9,
    color: "#fff0df",
    ink: "#80502d",
    round: false,
    image: "assets/products/protetor-solar.jpg",
    tag: "Maquiagem",
    description: "Exemplo de maquiagem para navegacao por beleza e escolha de tons na integracao futura.",
    caution: "Confira cor, acabamento e disponibilidade por loja.",
    stock: "Sob consulta",
  },
];

const additionalMedicineProducts = [
  {
    id: "ibuprofeno-400",
    name: "Ibuprofeno",
    detail: "400mg c/ 10 comprimidos",
    category: "Medicamentos",
    subcategory: "OTC / MIPs sem receita",
    routeKey: "medicamentos",
    keywords: "ibuprofeno analgesico anti-inflamatorio dor febre otc mips sem receita",
    price: 12.9,
    oldPrice: 18.9,
    color: "#eaf8ed",
    ink: "#08713f",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Dor e febre",
    promo: "-32%",
    description: "Medicamento demonstrativo para dor, febre e processos inflamatórios leves, conforme bula e orientação.",
    caution: "Confirme contraindicações, idade, histórico gástrico e uso de outros medicamentos antes da venda.",
    stock: "Disponível hoje",
  },
  {
    id: "omeprazol-20",
    name: "Omeprazol",
    detail: "20mg c/ 28 cápsulas",
    category: "Medicamentos",
    subcategory: "OTC / MIPs sem receita",
    routeKey: "medicamentos",
    keywords: "omeprazol estomago azia gastrite refluxo otc mips sem receita",
    price: 18.9,
    oldPrice: 29.9,
    color: "#eef8ef",
    ink: "#0a6c42",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Gástrico",
    promo: "-37%",
    description: "Produto para vitrine de cuidados gástricos, refluxo e azia, com uso conforme bula.",
    caution: "Uso prolongado deve ser acompanhado por profissional de saúde.",
    stock: "Disponível hoje",
  },
  {
    id: "loratadina-10",
    name: "Loratadina",
    detail: "10mg c/ 12 comprimidos",
    category: "Medicamentos",
    subcategory: "OTC / MIPs sem receita",
    routeKey: "medicamentos",
    keywords: "loratadina antialergico alergia rinite urticaria otc mips sem receita",
    price: 9.9,
    oldPrice: 16.9,
    color: "#eaf8ed",
    ink: "#08713f",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Alergia",
    promo: "-41%",
    description: "Antialérgico demonstrativo para sintomas de rinite e alergias, conforme bula.",
    caution: "Confira idade indicada, apresentação e orientação farmacêutica.",
    stock: "Disponível hoje",
  },
  {
    id: "cetirizina-10",
    name: "Cetirizina",
    detail: "10mg c/ 12 comprimidos",
    category: "Medicamentos",
    subcategory: "OTC / MIPs sem receita",
    routeKey: "medicamentos",
    keywords: "cetirizina antialergico alergia rinite urticaria otc mips sem receita",
    price: 16.9,
    oldPrice: 22.9,
    color: "#eaf8ed",
    ink: "#08713f",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Alergia",
    promo: "-26%",
    description: "Antialérgico para complementar a navegação por alergia, rinite e urticária.",
    caution: "Pode causar sonolência em algumas pessoas. Validar bula e orientação.",
    stock: "Disponível hoje",
  },
  {
    id: "acetilcisteina-600",
    name: "Acetilcisteína",
    detail: "600mg c/ 16 envelopes",
    category: "Medicamentos",
    subcategory: "OTC / MIPs sem receita",
    routeKey: "medicamentos",
    keywords: "acetilcisteina xarope envelope expectorante tosse catarro respiratorio otc",
    price: 39.9,
    oldPrice: 49.9,
    color: "#eef8ef",
    ink: "#0a6c42",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Respiratório",
    promo: "-20%",
    description: "Produto demonstrativo para secreção/catarro e cuidados respiratórios conforme bula.",
    caution: "Confira apresentação, idade e histórico de saúde antes de orientar o uso.",
    stock: "Sob consulta",
  },
  {
    id: "diclofenaco-50",
    name: "Diclofenaco Potássico",
    detail: "50mg c/ 20 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    routeKey: "medicamentos",
    keywords: "diclofenaco anti-inflamatorio dor inflamacao tarja vermelha prescricao",
    price: 14.9,
    oldPrice: 24.9,
    color: "#fff1e8",
    ink: "#9b3d13",
    round: false,
    image: "assets/products/pbm-generic-box-orange.svg",
    tag: "Venda sob prescrição",
    promo: "-40%",
    description: "Anti-inflamatório demonstrativo para venda com conferência de prescrição quando aplicável.",
    caution: "Venda e uso conforme prescrição, bula e orientação profissional.",
    stock: "Sob consulta",
  },
  {
    id: "nimesulida-100",
    name: "Nimesulida",
    detail: "100mg c/ 12 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    routeKey: "medicamentos",
    keywords: "nimesulida anti-inflamatorio dor inflamacao tarja vermelha prescricao",
    price: 12.9,
    oldPrice: 19.9,
    color: "#fff1e8",
    ink: "#9b3d13",
    round: false,
    image: "assets/products/pbm-generic-box-orange.svg",
    tag: "Venda sob prescrição",
    promo: "-35%",
    description: "Anti-inflamatório demonstrativo para demonstrar fluxo de medicamento sob orientação.",
    caution: "Uso deve seguir prescrição, com atenção a contraindicações e duração do tratamento.",
    stock: "Sob consulta",
  },
  {
    id: "metformina-850",
    name: "Metformina",
    detail: "850mg c/ 30 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    routeKey: "medicamentos",
    keywords: "metformina diabetes glicemia uso continuo generico prescricao",
    price: 11.9,
    oldPrice: 21.9,
    color: "#eff8ef",
    ink: "#0a6c42",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Uso contínuo",
    promo: "-46%",
    description: "Medicamento de uso contínuo para diabetes, cadastrado como exemplo para integração futura.",
    caution: "Venda e uso conforme prescrição, acompanhamento e orientação profissional.",
    stock: "Sob consulta",
  },
  {
    id: "sinvastatina-20",
    name: "Sinvastatina",
    detail: "20mg c/ 30 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    routeKey: "medicamentos",
    keywords: "sinvastatina colesterol estatina uso continuo prescricao generico",
    price: 17.9,
    oldPrice: 31.9,
    color: "#eff8ef",
    ink: "#0a6c42",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Uso contínuo",
    promo: "-44%",
    description: "Medicamento de uso contínuo para colesterol, útil para área de PBM e recorrência.",
    caution: "Venda e uso conforme prescrição e acompanhamento profissional.",
    stock: "Sob consulta",
  },
  {
    id: "enalapril-10",
    name: "Enalapril",
    detail: "10mg c/ 30 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    routeKey: "medicamentos",
    keywords: "enalapril pressao alta hipertensao uso continuo generico prescricao",
    price: 8.9,
    oldPrice: 17.9,
    color: "#eff8ef",
    ink: "#0a6c42",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Uso contínuo",
    promo: "-50%",
    description: "Medicamento de uso contínuo para hipertensão, cadastrado para compra recorrente.",
    caution: "Uso conforme prescrição. Não interromper tratamento sem orientação profissional.",
    stock: "Sob consulta",
  },
  {
    id: "hidroclorotiazida-25",
    name: "Hidroclorotiazida",
    detail: "25mg c/ 30 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    routeKey: "medicamentos",
    keywords: "hidroclorotiazida diuretico hipertensao pressao alta uso continuo generico prescricao",
    price: 6.9,
    oldPrice: 13.9,
    color: "#eff8ef",
    ink: "#0a6c42",
    round: false,
    image: "assets/products/pbm-generic-box-green.svg",
    tag: "Uso contínuo",
    promo: "-50%",
    description: "Diurético demonstrativo para hipertensão e retenção de líquidos conforme prescrição.",
    caution: "Uso conforme prescrição e acompanhamento profissional.",
    stock: "Sob consulta",
  },
  {
    id: "azitromicina-500",
    name: "Azitromicina",
    detail: "500mg c/ 3 comprimidos",
    category: "Medicamentos",
    subcategory: "Antibióticos",
    routeKey: "medicamentos",
    keywords: "azitromicina antibiotico antimicrobiano prescricao retencao receita",
    price: 22.9,
    oldPrice: 34.9,
    color: "#fff1e8",
    ink: "#9b3d13",
    round: false,
    image: "assets/products/prescription-box.svg",
    tag: "Antibiótico",
    promo: "-34%",
    description: "Antibiótico demonstrativo para fluxo de receita, retenção e conferência farmacêutica.",
    caution: "Venda sob prescrição médica, com regras de dispensação de antimicrobianos.",
    stock: "Sob consulta",
  },
  {
    id: "clonazepam-2",
    name: "Clonazepam",
    detail: "2mg c/ 30 comprimidos",
    category: "Medicamentos",
    subcategory: "Controlados",
    routeKey: "medicamentos",
    keywords: "clonazepam controlado tarja preta receita b1 benzodiazepinico",
    price: 9.9,
    color: "#f5f0ff",
    ink: "#563887",
    round: false,
    image: "assets/products/prescription-box.svg",
    tag: "Controlado",
    description: "Medicamento controlado demonstrativo para representar venda com retenção/validação de receita.",
    caution: "Comercialização conforme legislação de controlados e conferência farmacêutica.",
    stock: "Sob consulta",
  },
  {
    id: "salbutamol-aerossol",
    name: "Salbutamol",
    detail: "Aerossol 100mcg",
    category: "Medicamentos",
    subcategory: "Medicamentos de referência",
    routeKey: "medicamentos",
    keywords: "salbutamol broncodilatador bombinha asma respiratorio prescricao",
    price: 29.9,
    oldPrice: 39.9,
    color: "#eef8ff",
    ink: "#145a8f",
    round: false,
    image: "assets/products/prescription-box.svg",
    tag: "Respiratório",
    promo: "-25%",
    description: "Broncodilatador demonstrativo para respiratório, asma e orientação de uso por prescrição.",
    caution: "Uso conforme prescrição e técnica correta de inalação.",
    stock: "Sob consulta",
  },
  {
    id: "prednisona-20",
    name: "Prednisona",
    detail: "20mg c/ 10 comprimidos",
    category: "Medicamentos",
    subcategory: "Genéricos",
    routeKey: "medicamentos",
    keywords: "prednisona corticoide anti-inflamatorio alergia prescricao tarja vermelha",
    price: 10.9,
    oldPrice: 18.9,
    color: "#fff1e8",
    ink: "#9b3d13",
    round: false,
    image: "assets/products/pbm-generic-box-orange.svg",
    tag: "Venda sob prescrição",
    promo: "-42%",
    description: "Corticoide demonstrativo para venda com prescrição e orientação profissional.",
    caution: "Não iniciar, alterar ou interromper sem orientação médica.",
    stock: "Sob consulta",
  },
];

products.push(...expandedCatalogProducts, ...additionalMedicineProducts);

const productCatalogEnhancements = {
  dorflex: {
    routeKey: "medicamentos",
    subcategory: "Medicamentos de referência",
    keywords: "analgesico relaxante muscular referencia otc mips sem receita adulto dor ofertas do dia",
  },
  tylenol: {
    routeKey: "medicamentos",
    subcategory: "Medicamentos de referência",
    keywords: "paracetamol analgesico antitermico referencia otc mips sem receita adulto febre dor",
  },
  benegrip: {
    routeKey: "medicamentos",
    subcategory: "OTC / MIPs sem receita",
    keywords: "antigripal gripe resfriado otc mips sem receita campanha inverno oferta leve tambem vick pyrena",
  },
  buscopan: {
    routeKey: "medicamentos",
    subcategory: "Medicamentos de referência",
    keywords: "colica dor abdominal referencia otc mips sem receita",
  },
  neosaldina: {
    routeKey: "medicamentos",
    subcategory: "Medicamentos de referência",
    keywords: "dor de cabeca analgesico referencia otc mips sem receita",
  },
  "novalgina-1g": {
    routeKey: "medicamentos",
    subcategory: "Medicamentos de referência",
    keywords: "dipirona analgesico antitermico referencia otc mips sem receita",
  },
  "allegra-120": {
    routeKey: "medicamentos",
    subcategory: "Medicamentos de referência",
    keywords: "antialergico alergia rinite referencia otc mips sem receita",
  },
  "luftal-gel": {
    routeKey: "medicamentos",
    subcategory: "Medicamentos de referência",
    keywords: "gases simeticona referencia otc mips sem receita",
  },
  cimegripe: {
    routeKey: "medicamentos",
    subcategory: "Similares",
    keywords: "antigripal gripe similar otc mips sem receita genericos ate 95 oferta ofertas do dia",
  },
  "eno-laranja": {
    routeKey: "medicamentos",
    subcategory: "OTC / MIPs sem receita",
    keywords: "antiacido estomago azia otc mips sem receita",
  },
  "vitamina-c": {
    routeKey: "bem-estar-saude",
    subcategory: "Imunidade",
    keywords: "vitaminas imunidade suplemento bem estar saude oferta",
  },
  "ensure-baunilha": {
    routeKey: "bem-estar-saude",
    subcategory: "Suplementos",
    keywords: "suplemento nutricional vitaminas minerais adulto geriatrico bem estar saude",
  },
  "centrum-az": {
    routeKey: "bem-estar-saude",
    subcategory: "Vitaminas",
    keywords: "vitaminas polivitaminico imunidade suplemento bem estar saude",
  },
  "omega3-catarinense": {
    routeKey: "bem-estar-saude",
    subcategory: "Ômega 3",
    keywords: "omega 3 produtos naturais suplemento bem estar saude",
  },
  "lavitan-az": {
    routeKey: "bem-estar-saude",
    subcategory: "Vitaminas",
    keywords: "vitaminas suplemento imunidade bem estar saude",
  },
  "barrinha-proteina": {
    routeKey: "bem-estar-saude",
    keywords: "fitness proteina bem estar saude",
  },
  "snack-fit-castanhas": {
    routeKey: "bem-estar-saude",
    keywords: "produtos naturais snack fit fitness bem estar saude",
  },
  "ninho-fases": {
    routeKey: "mamae-bebe",
    subcategory: "Fórmulas infantis",
    keywords: "formula infantil nutricao infantil mamae bebe",
  },
  "fralda-babysec": {
    routeKey: "mamae-bebe",
    subcategory: "Fraldas infantil",
    keywords: "fralda infantil bebe mamae bebe tamanhos p m g xg xxg",
  },
  "huggies-supreme": {
    routeKey: "mamae-bebe",
    subcategory: "Fraldas infantil",
    keywords: "fralda infantil bebe mamae bebe leve 3 pague 2",
  },
  "johnsons-shampoo": {
    routeKey: "mamae-bebe",
    subcategory: "Lenços umedecidos",
    keywords: "bebe shampoo infantil banho mamae bebe cuidados diarios",
  },
  nivea: {
    routeKey: "beleza",
    subcategory: "Skincare",
    keywords: "hidratante skincare dermocosmeticos beleza cuidados pele oferta",
  },
  protetor: {
    routeKey: "beleza",
    subcategory: "Protetor solar",
    keywords: "protetor solar fps 50 skincare dermocosmeticos beleza cores",
  },
  colonia: {
    routeKey: "beleza",
    subcategory: "Perfumes",
    keywords: "perfumes colonia beleza perfumaria",
  },
  pantene: {
    routeKey: "beleza",
    subcategory: "Shampoo",
    keywords: "shampoo condicionador cabelo beleza pantene",
  },
  "seda-ceramidas": {
    routeKey: "beleza",
    subcategory: "Shampoo",
    keywords: "shampoo cabelo beleza",
  },
  "dove-oleo-nutricao": {
    routeKey: "beleza",
    subcategory: "Condicionador",
    keywords: "condicionador shampoo cabelo beleza",
  },
  isdin: {
    routeKey: "beleza",
    subcategory: "Protetor solar",
    keywords: "protetor solar dermocosmeticos beleza fps",
  },
  "cerave-creme": {
    routeKey: "beleza",
    subcategory: "Dermocosméticos",
    keywords: "dermocosmeticos skincare hidratante pele beleza",
  },
  "principia-niacinamida": {
    routeKey: "beleza",
    subcategory: "Skincare",
    keywords: "skincare dermocosmeticos serum beleza",
  },
  "neutrogena-hydro": {
    routeKey: "beleza",
    subcategory: "Skincare",
    keywords: "skincare hidratante dermocosmeticos beleza",
  },
  "la-roche-anthelios": {
    routeKey: "beleza",
    subcategory: "Dermocosméticos",
    keywords: "dermocosmeticos protetor solar skincare beleza",
  },
  "avene-agua-termal": {
    routeKey: "beleza",
    subcategory: "Dermocosméticos",
    keywords: "dermocosmeticos skincare pele sensivel beleza",
  },
  "bioderma-sensibio": {
    routeKey: "beleza",
    subcategory: "Dermocosméticos",
    keywords: "dermocosmeticos skincare limpeza facial beleza",
  },
  "cetaphil-kit": {
    routeKey: "beleza",
    subcategory: "Dermocosméticos",
    keywords: "dermocosmeticos hidratacao skincare beleza",
  },
  colgate: {
    routeKey: "higiene-pessoal",
    subcategory: "Creme dental",
    keywords: "pasta creme dental higiene pessoal saude bucal",
  },
  rexona: {
    routeKey: "higiene-pessoal",
    subcategory: "Desodorantes",
    keywords: "desodorante antitranspirante higiene pessoal",
  },
  "dove-sabonete": {
    routeKey: "higiene-pessoal",
    subcategory: "Sabonetes",
    keywords: "sabonete banho higiene pessoal",
  },
  "always-noturno": {
    routeKey: "higiene-pessoal",
    subcategory: "Masculino completo",
    keywords: "absorvente higiene pessoal cuidado intimo",
  },
  "oralb-power": {
    routeKey: "higiene-pessoal",
    subcategory: "Escovas",
    keywords: "escova eletrica dental higiene pessoal saude bucal",
  },
  "gillette-fusion": {
    routeKey: "higiene-pessoal",
    subcategory: "Masculino completo",
    keywords: "barba barbear masculino completo higiene pessoal",
  },
  agua: {
    routeKey: "conveniencia",
    subcategory: "Água",
    keywords: "agua mineral crystal conveniencia bebida",
  },
  "shampoo-pet": {
    routeKey: "pet",
    subcategory: "Shampoo pet",
    keywords: "linha pet cachorro gato gatos shampoo higiene pet",
  },
  "dipirona-generica": {
    routeKey: "medicamentos",
    subcategory: "Genéricos",
    keywords: "genericos genericos ate 95 pbm laboratorios ofertas do dia analgesico antitermico dor febre otc mips sem receita",
  },
  "losartana-generica": {
    routeKey: "medicamentos",
    subcategory: "Genéricos",
    keywords: "genericos genericos ate 95 pbm laboratorios medicamento continuo anti hipertensivo pressao alta prescricao",
  },
  "tapete-higienico-pet": {
    routeKey: "pet",
    keywords: "linha pet cachorro gato gatos tapete higiene pet",
  },
  "antipulgas-pet": {
    routeKey: "pet",
    keywords: "linha pet cachorro gato gatos antipulgas carrapatos cuidados diarios",
  },
  "biscoito-pet": {
    routeKey: "pet",
    keywords: "linha pet cachorro gatos snack biscoito",
  },
};

Object.entries(productCatalogEnhancements).forEach(([id, enhancement]) => {
  const product = products.find((item) => item.id === id);
  if (product) Object.assign(product, enhancement);
});

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
    active: "Dipirona monoidratada 500mg + maleato de clorfeniramina 2mg + cafeína 30mg",
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

Object.assign(medicineCatalog, {
  "dipirona-generica": {
    active: "Dipirona monoidratada",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "DIP-500-10",
    purpose: "Analgésico e antitérmico genérico. Conferir concentração, idade e contraindicações conforme bula.",
    composition: "Dipirona monoidratada conforme apresentação selecionada.",
    howToUse: "Usar conforme bula oficial e orientação farmacêutica.",
    safety: "Atenção a histórico de alergia, queda de pressão e reações anteriores.",
    highlights: ["Genérico com desconto", "Dor e febre", "Conferência farmacêutica"],
    presentations: [
      ["10 comprimidos", "500mg c/ 10 comprimidos", 6.9, "Disponível hoje", "DIP-500-10"],
      ["20 comprimidos", "500mg c/ 20 comprimidos", 11.9, "Sob consulta", "DIP-500-20"],
      ["Gotas 20ml", "Solução oral gotas 20ml", 9.9, "Sob consulta", "DIP-GOTAS"],
    ],
  },
  "losartana-generica": {
    active: "Losartana potássica",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "LOS-50-30",
    purpose: "Medicamento de uso contínuo para hipertensão conforme prescrição e bula.",
    composition: "Losartana potássica conforme apresentação selecionada.",
    howToUse: "Usar todos os dias conforme prescrição médica, sem interromper por conta própria.",
    safety: "Acompanhamento profissional é importante para pressão arterial, rins, potássio e interações.",
    highlights: ["Uso contínuo", "PBM/Genéricos", "Compra recorrente"],
    prescriptionRequired: true,
    presentations: [
      ["30 comprimidos", "50mg c/ 30 comprimidos", 13.9, "Sob consulta", "LOS-50-30"],
      ["60 comprimidos", "50mg c/ 60 comprimidos", 24.9, "Sob consulta", "LOS-50-60"],
      ["100mg c/ 30", "100mg c/ 30 comprimidos", 21.9, "Sob consulta", "LOS-100-30"],
    ],
  },
  "amoxicilina-500": {
    active: "Amoxicilina tri-hidratada",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Cápsula",
    code: "AMOX-500-21",
    purpose: "Antibiótico penicilínico para tratamento conforme prescrição médica.",
    composition: "Amoxicilina conforme apresentação selecionada.",
    howToUse: "Usar exatamente pelo tempo e intervalo prescritos pelo médico.",
    safety: "Antibióticos exigem receita e conferência farmacêutica. Não usar sobras nem interromper antes do prazo prescrito.",
    highlights: ["Antibiótico", "Receita obrigatória", "Conferência no balcão"],
    prescriptionRequired: true,
    presentations: [
      ["21 cápsulas", "500mg c/ 21 cápsulas", 28.9, "Sob consulta", "AMOX-500-21"],
      ["15 cápsulas", "500mg c/ 15 cápsulas", 22.9, "Sob consulta", "AMOX-500-15"],
      ["Suspensão", "250mg/5ml suspensão", 34.9, "Sob consulta", "AMOX-SUSP"],
    ],
  },
  "sertralina-50": {
    active: "Cloridrato de sertralina",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "SERT-50-30",
    purpose: "Medicamento de uso controlado para tratamento conforme prescrição médica.",
    composition: "Sertralina conforme apresentação selecionada.",
    howToUse: "Usar conforme prescrição, sem ajuste ou interrupção por conta própria.",
    safety: "Requer acompanhamento profissional e conferência da receita antes da dispensação.",
    highlights: ["Controlado", "Receita obrigatória", "Uso contínuo"],
    prescriptionRequired: true,
    presentations: [
      ["30 comprimidos", "50mg c/ 30 comprimidos", 34.9, "Sob consulta", "SERT-50-30"],
      ["60 comprimidos", "50mg c/ 60 comprimidos", 59.9, "Sob consulta", "SERT-50-60"],
      ["100mg c/ 30", "100mg c/ 30 comprimidos", 54.9, "Sob consulta", "SERT-100-30"],
    ],
  },
  "complexo-b-injetavel": {
    active: "Vitaminas do complexo B conforme apresentação",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Solução injetável",
    code: "CB-INJ-2ML",
    purpose: "Medicamento injetável demonstrativo para venda e aplicação conforme prescrição/orientação.",
    composition: "Vitaminas do complexo B conforme bula da apresentação escolhida.",
    howToUse: "Aplicação somente por profissional habilitado, conforme prescrição e avaliação.",
    safety: "Confirmar receita quando aplicável, alergias, lote e disponibilidade de aplicação na unidade.",
    highlights: ["Injetável", "Aplicação sob avaliação", "Serviço farmacêutico"],
    prescriptionRequired: true,
    presentations: [
      ["Ampola 2ml", "Solução injetável 2ml", 9.9, "Sob consulta", "CB-2ML"],
      ["Ampola 5ml", "Solução injetável 5ml", 14.9, "Sob consulta", "CB-5ML"],
    ],
  },
  "vick-pyrena": {
    active: "Paracetamol conforme apresentação",
    manufacturer: "Procter & Gamble",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Pó para solução oral",
    code: "VICK-PYR-5",
    purpose: "Produto demonstrativo para sintomas de resfriado, dor e febre conforme bula.",
    composition: "Composição conforme envelope e apresentação selecionada.",
    howToUse: "Preparar e usar conforme instruções da embalagem/bula.",
    safety: "Atenção a uso conjunto com outros medicamentos que contenham paracetamol.",
    highlights: ["Leve também", "Campanha de inverno", "Combina com antigripais conforme orientação"],
    presentations: [
      ["5 envelopes", "Mel e limão c/ 5 envelopes", 19.9, "Disponível hoje", "VICK-5"],
      ["1 envelope", "Envelope unidade", 4.9, "Sob consulta", "VICK-1"],
    ],
  },
  "ibuprofeno-400": {
    active: "Ibuprofeno",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "IBU-400-10",
    purpose: "Analgésico, antitérmico e anti-inflamatório conforme apresentação e bula.",
    composition: "Ibuprofeno conforme apresentação selecionada.",
    howToUse: "Usar pelo menor tempo necessário e conforme bula/orientação profissional.",
    safety: "Atenção a histórico de gastrite, úlcera, doença renal, anticoagulantes, gestação e alergia a anti-inflamatórios.",
    highlights: ["Dor e febre", "Anti-inflamatório", "Validar contraindicações"],
    presentations: [
      ["10 comprimidos", "400mg c/ 10 comprimidos", 12.9, "Disponível hoje", "IBU-400-10"],
      ["20 comprimidos", "400mg c/ 20 comprimidos", 22.9, "Sob consulta", "IBU-400-20"],
      ["Gotas 20ml", "Suspensão/gotas 20ml", 18.9, "Sob consulta", "IBU-GOTAS"],
    ],
  },
  "omeprazol-20": {
    active: "Omeprazol",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Cápsula",
    code: "OME-20-28",
    purpose: "Medicamento para redução da acidez gástrica conforme bula e orientação profissional.",
    composition: "Omeprazol conforme apresentação selecionada.",
    howToUse: "Usar conforme bula ou prescrição, preferencialmente respeitando horário e duração indicados.",
    safety: "Uso prolongado ou sintomas persistentes exigem avaliação médica.",
    highlights: ["Cuidado gástrico", "Azia e refluxo", "Compra recorrente"],
    presentations: [
      ["28 cápsulas", "20mg c/ 28 cápsulas", 18.9, "Disponível hoje", "OME-20-28"],
      ["14 cápsulas", "20mg c/ 14 cápsulas", 11.9, "Disponível hoje", "OME-20-14"],
      ["40mg c/ 28", "40mg c/ 28 cápsulas", 31.9, "Sob consulta", "OME-40-28"],
    ],
  },
  "loratadina-10": {
    active: "Loratadina",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "LOR-10-12",
    purpose: "Antialérgico para sintomas de rinite, alergia e urticária conforme bula.",
    composition: "Loratadina conforme apresentação selecionada.",
    howToUse: "Usar conforme bula e faixa etária indicada.",
    safety: "Consultar orientação em gestação, lactação, doença hepática ou uso de outros medicamentos.",
    highlights: ["Alergia", "Rinite", "Compra rápida"],
    presentations: [
      ["12 comprimidos", "10mg c/ 12 comprimidos", 9.9, "Disponível hoje", "LOR-10-12"],
      ["30 comprimidos", "10mg c/ 30 comprimidos", 22.9, "Sob consulta", "LOR-10-30"],
      ["Xarope 100ml", "Xarope 1mg/ml 100ml", 18.9, "Sob consulta", "LOR-XAR"],
    ],
  },
  "cetirizina-10": {
    active: "Dicloridrato de cetirizina",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "CET-10-12",
    purpose: "Antialérgico para sintomas alérgicos conforme bula.",
    composition: "Cetirizina conforme apresentação selecionada.",
    howToUse: "Usar conforme bula, observando idade e possíveis efeitos de sonolência.",
    safety: "Atenção ao uso com álcool, sedativos e atividades que exigem atenção.",
    highlights: ["Alergia", "Rinite", "Pode causar sonolência"],
    presentations: [
      ["12 comprimidos", "10mg c/ 12 comprimidos", 16.9, "Disponível hoje", "CET-10-12"],
      ["10ml gotas", "Solução oral gotas", 21.9, "Sob consulta", "CET-GOTAS"],
    ],
  },
  "acetilcisteina-600": {
    active: "Acetilcisteína",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Granulado/envelope",
    code: "ACE-600-16",
    purpose: "Mucolítico/expectorante conforme indicação da bula.",
    composition: "Acetilcisteína conforme apresentação selecionada.",
    howToUse: "Dissolver ou administrar conforme apresentação e instruções da bula.",
    safety: "Pessoas com asma, úlcera, gestação ou uso de outros medicamentos devem buscar orientação.",
    highlights: ["Respiratório", "Tosse com secreção", "Envelope ou xarope"],
    presentations: [
      ["16 envelopes", "600mg c/ 16 envelopes", 39.9, "Sob consulta", "ACE-600-16"],
      ["Xarope 120ml", "Xarope 20mg/ml 120ml", 27.9, "Sob consulta", "ACE-XAR"],
    ],
  },
  "diclofenaco-50": {
    active: "Diclofenaco potássico",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "DIC-50-20",
    purpose: "Anti-inflamatório não esteroidal conforme prescrição e bula.",
    composition: "Diclofenaco conforme apresentação selecionada.",
    howToUse: "Usar conforme prescrição e pelo período indicado pelo profissional.",
    safety: "Atenção a risco gástrico, renal, cardiovascular, alergias e interações.",
    highlights: ["Venda sob prescrição", "Anti-inflamatório", "Conferência de receita"],
    prescriptionRequired: true,
    presentations: [
      ["20 comprimidos", "50mg c/ 20 comprimidos", 14.9, "Sob consulta", "DIC-50-20"],
      ["10 comprimidos", "50mg c/ 10 comprimidos", 8.9, "Sob consulta", "DIC-50-10"],
      ["Gel 60g", "Gel tópico 60g", 24.9, "Sob consulta", "DIC-GEL"],
    ],
  },
  "nimesulida-100": {
    active: "Nimesulida",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "NIM-100-12",
    purpose: "Anti-inflamatório conforme prescrição médica e bula.",
    composition: "Nimesulida conforme apresentação selecionada.",
    howToUse: "Usar na dose e duração prescritas. Não prolongar o tratamento sem orientação.",
    safety: "Atenção a restrições hepáticas, gástricas, renais, gestação e interações.",
    highlights: ["Venda sob prescrição", "Anti-inflamatório", "Sob consulta"],
    prescriptionRequired: true,
    presentations: [
      ["12 comprimidos", "100mg c/ 12 comprimidos", 12.9, "Sob consulta", "NIM-100-12"],
      ["15 comprimidos", "100mg c/ 15 comprimidos", 15.9, "Sob consulta", "NIM-100-15"],
      ["Gotas 15ml", "Solução oral gotas", 18.9, "Sob consulta", "NIM-GOTAS"],
    ],
  },
  "metformina-850": {
    active: "Cloridrato de metformina",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "MET-850-30",
    purpose: "Antidiabético oral para uso contínuo conforme prescrição e acompanhamento.",
    composition: "Metformina conforme apresentação selecionada.",
    howToUse: "Usar conforme prescrição, geralmente associado a rotina alimentar e acompanhamento de glicemia.",
    safety: "Atenção a função renal, exames, sintomas gastrointestinais e interações.",
    highlights: ["Uso contínuo", "Diabetes", "Compra recorrente"],
    prescriptionRequired: true,
    presentations: [
      ["30 comprimidos", "850mg c/ 30 comprimidos", 11.9, "Sob consulta", "MET-850-30"],
      ["60 comprimidos", "850mg c/ 60 comprimidos", 21.9, "Sob consulta", "MET-850-60"],
      ["XR 500mg c/ 30", "Liberação prolongada 500mg c/ 30", 29.9, "Sob consulta", "MET-XR-500"],
    ],
  },
  "sinvastatina-20": {
    active: "Sinvastatina",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "SIN-20-30",
    purpose: "Medicamento para controle de colesterol conforme prescrição e acompanhamento.",
    composition: "Sinvastatina conforme apresentação selecionada.",
    howToUse: "Usar conforme prescrição, respeitando horário e orientações de acompanhamento.",
    safety: "Informar dor muscular, fraqueza, doença hepática ou uso de medicamentos que possam interagir.",
    highlights: ["Uso contínuo", "Colesterol", "PBM/Genéricos"],
    prescriptionRequired: true,
    presentations: [
      ["30 comprimidos", "20mg c/ 30 comprimidos", 17.9, "Sob consulta", "SIN-20-30"],
      ["60 comprimidos", "20mg c/ 60 comprimidos", 29.9, "Sob consulta", "SIN-20-60"],
      ["40mg c/ 30", "40mg c/ 30 comprimidos", 24.9, "Sob consulta", "SIN-40-30"],
    ],
  },
  "enalapril-10": {
    active: "Maleato de enalapril",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "ENA-10-30",
    purpose: "Anti-hipertensivo de uso contínuo conforme prescrição.",
    composition: "Enalapril conforme apresentação selecionada.",
    howToUse: "Usar diariamente conforme prescrição. Não interromper por conta própria.",
    safety: "Atenção a pressão, função renal, potássio, tosse persistente e gravidez.",
    highlights: ["Hipertensão", "Uso contínuo", "Compra recorrente"],
    prescriptionRequired: true,
    presentations: [
      ["30 comprimidos", "10mg c/ 30 comprimidos", 8.9, "Sob consulta", "ENA-10-30"],
      ["20mg c/ 30", "20mg c/ 30 comprimidos", 12.9, "Sob consulta", "ENA-20-30"],
      ["5mg c/ 30", "5mg c/ 30 comprimidos", 7.9, "Sob consulta", "ENA-5-30"],
    ],
  },
  "hidroclorotiazida-25": {
    active: "Hidroclorotiazida",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "HCTZ-25-30",
    purpose: "Diurético usado em hipertensão e outras condições conforme prescrição.",
    composition: "Hidroclorotiazida conforme apresentação selecionada.",
    howToUse: "Usar conforme prescrição, com acompanhamento de pressão, eletrólitos e hidratação.",
    safety: "Atenção a tontura, desidratação, alterações de potássio/sódio e interações.",
    highlights: ["Hipertensão", "Diurético", "Uso contínuo"],
    prescriptionRequired: true,
    presentations: [
      ["30 comprimidos", "25mg c/ 30 comprimidos", 6.9, "Sob consulta", "HCTZ-25-30"],
      ["60 comprimidos", "25mg c/ 60 comprimidos", 11.9, "Sob consulta", "HCTZ-25-60"],
    ],
  },
  "azitromicina-500": {
    active: "Azitromicina di-hidratada",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido revestido",
    code: "AZI-500-3",
    purpose: "Antibiótico macrolídeo para uso conforme prescrição médica.",
    composition: "Azitromicina conforme apresentação selecionada.",
    howToUse: "Usar exatamente conforme prescrição, respeitando intervalo e duração do tratamento.",
    safety: "Antimicrobiano exige receita. Conferir alergias, interações e regras de dispensação.",
    highlights: ["Antibiótico", "Receita obrigatória", "Retenção conforme regra"],
    prescriptionRequired: true,
    presentations: [
      ["3 comprimidos", "500mg c/ 3 comprimidos", 22.9, "Sob consulta", "AZI-500-3"],
      ["5 comprimidos", "500mg c/ 5 comprimidos", 34.9, "Sob consulta", "AZI-500-5"],
      ["Suspensão", "Suspensão oral", 39.9, "Sob consulta", "AZI-SUSP"],
    ],
  },
  "clonazepam-2": {
    active: "Clonazepam",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "CLO-2-30",
    purpose: "Medicamento benzodiazepínico controlado, dispensado conforme prescrição e legislação.",
    composition: "Clonazepam conforme apresentação selecionada.",
    howToUse: "Usar somente conforme prescrição. Não alterar dose nem interromper sem orientação médica.",
    safety: "Pode causar sonolência, dependência e interações. Venda sujeita a controle especial.",
    highlights: ["Controlado", "Receita especial", "Tarja preta"],
    prescriptionRequired: true,
    presentations: [
      ["30 comprimidos", "2mg c/ 30 comprimidos", 9.9, "Sob consulta", "CLO-2-30"],
      ["0,5mg c/ 30", "0,5mg c/ 30 comprimidos", 8.9, "Sob consulta", "CLO-05-30"],
      ["Gotas 20ml", "Solução oral gotas 20ml", 18.9, "Sob consulta", "CLO-GOTAS"],
    ],
  },
  "salbutamol-aerossol": {
    active: "Sulfato de salbutamol",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Aerossol dosimetrado",
    code: "SALB-100",
    purpose: "Broncodilatador para uso respiratório conforme prescrição e técnica correta.",
    composition: "Salbutamol conforme apresentação selecionada.",
    howToUse: "Usar conforme prescrição e orientação sobre técnica inalatória.",
    safety: "Procure atendimento se houver falta de ar intensa, piora dos sintomas ou necessidade de uso frequente.",
    highlights: ["Respiratório", "Asma/broncoespasmo", "Conferir técnica de uso"],
    prescriptionRequired: true,
    presentations: [
      ["Aerossol", "100mcg spray dosimetrado", 29.9, "Sob consulta", "SALB-AERO"],
      ["Xarope 120ml", "Xarope 2mg/5ml 120ml", 18.9, "Sob consulta", "SALB-XAR"],
    ],
  },
  "prednisona-20": {
    active: "Prednisona",
    manufacturer: "Diversos laboratórios",
    msRegister: "Consultar Bulário Anvisa",
    dosage: "Comprimido",
    code: "PRED-20-10",
    purpose: "Corticoide sistêmico para uso conforme prescrição médica.",
    composition: "Prednisona conforme apresentação selecionada.",
    howToUse: "Usar conforme prescrição, respeitando dose, horário e orientação sobre redução/interrupção.",
    safety: "Atenção a diabetes, pressão, infecções, estômago, gestação e uso prolongado.",
    highlights: ["Corticoide", "Venda sob prescrição", "Orientação obrigatória"],
    prescriptionRequired: true,
    presentations: [
      ["10 comprimidos", "20mg c/ 10 comprimidos", 10.9, "Sob consulta", "PRED-20-10"],
      ["20 comprimidos", "20mg c/ 20 comprimidos", 18.9, "Sob consulta", "PRED-20-20"],
      ["5mg c/ 20", "5mg c/ 20 comprimidos", 9.9, "Sob consulta", "PRED-5-20"],
    ],
  },
});

function medicineDoseTokenValue(value) {
  const rounded = Math.round((value + Number.EPSILON) * 1000) / 1000;
  return String(rounded).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

function medicineDoseTokens(text = "") {
  const matches = [];
  const normalized = String(text || "").toLowerCase();
  const dosePattern = /(\d+(?:[,.]\d+)?)\s*(mcg|mg|g|ui|u\.i\.|%)(?:\s*\/\s*(?:\d+(?:[,.]\d+)?)?\s*ml)?/gi;
  let match = dosePattern.exec(normalized);

  while (match) {
    const value = Number(String(match[1]).replace(",", "."));
    const unit = match[2].replace(/\./g, "").toLowerCase();
    if (Number.isFinite(value)) {
      if (unit === "g") {
        matches.push(`${medicineDoseTokenValue(value * 1000)}mg`);
      } else if (unit === "mcg") {
        matches.push(`${medicineDoseTokenValue(value / 1000)}mg`);
      } else if (unit === "ui") {
        matches.push(`${medicineDoseTokenValue(value)}ui`);
      } else {
        matches.push(`${medicineDoseTokenValue(value)}${unit}`);
      }
    }
    match = dosePattern.exec(normalized);
  }

  return [...new Set(matches)].sort();
}

function medicineFormToken(text = "") {
  const normalized = normalizeText(text);
  const formChecks = [
    ["comprimido", /\bcomp\b|comprim/],
    ["capsula", /caps|capsula|cápsula/],
    ["dragea", /dragea|drágea/],
    ["gota", /gota/],
    ["xarope", /xarope/],
    ["spray", /spray|aerossol|inala/],
    ["envelope", /envelope/],
    ["ampola", /ampola/],
    ["seringa", /seringa/],
    ["creme", /creme/],
    ["gel", /\bgel\b/],
  ];
  const match = formChecks.find(([, pattern]) => pattern.test(normalized));
  return match?.[0] || "";
}

function sameTokenSet(a, b) {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}

function isCompatibleMedicinePresentation(product, label = "", detail = "") {
  const baseDetail = product.detail || "";
  const optionText = `${label} ${detail}`;
  const baseDoses = medicineDoseTokens(baseDetail);
  const optionDoses = medicineDoseTokens(optionText);
  const baseForm = medicineFormToken(baseDetail);
  const optionForm = medicineFormToken(optionText);

  if (baseDoses.length || optionDoses.length) {
    if (!baseDoses.length || !optionDoses.length || !sameTokenSet(baseDoses, optionDoses)) {
      return false;
    }
  }

  if (baseForm && optionForm && baseForm !== optionForm) {
    return false;
  }

  return true;
}

function compatibleMedicinePresentations(product, presentations) {
  if (product.category !== "Medicamentos" || !presentations.length) {
    return presentations;
  }

  const compatible = presentations.filter(([label, detail]) =>
    isCompatibleMedicinePresentation(product, label, detail),
  );

  return sortMedicinePresentationsByQuantity(compatible.length ? compatible : presentations.slice(0, 1));
}

function medicinePresentationQuantity(label = "", detail = "") {
  const normalized = String(`${label} ${detail}` || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const quantityMatch =
    normalized.match(/(?:c\/|com|contem|contendo)\s*(\d+)\s*(?:cps?|cp|comps?|comprimidos?|capsulas?|caps?|drageas?)?/) ||
    normalized.match(/(\d+)\s*(?:cps?|cp|comps?|comprimidos?|capsulas?|caps?|drageas?)\b/);

  return quantityMatch ? Number(quantityMatch[1]) : Number.POSITIVE_INFINITY;
}

function sortMedicinePresentationsByQuantity(presentations) {
  return presentations
    .map((presentation, index) => ({
      presentation,
      index,
      quantity: medicinePresentationQuantity(presentation[0], presentation[1]),
    }))
    .sort((a, b) => {
      if (a.quantity !== b.quantity) return a.quantity - b.quantity;
      return a.index - b.index;
    })
    .map(({ presentation }) => presentation);
}

products.forEach((product) => {
  const profile = medicineCatalog[product.id];
  if (!profile) return;

  const presentations = compatibleMedicinePresentations(product, profile.presentations || []);
  product.medicine = profile;
  product.variantKind = "Quantidade";
  product.variantHeading = "Escolha a apresentação";
  product.variantSummaryLabel = "Apresentações";
  product.variantActionLabel = "Escolher apresentação";
  product.variantDescription = "Escolha apenas apresentações com o mesmo princípio ativo, mesma concentração e forma farmacêutica.";
  product.gallery = [product.image, ...(profile.gallery || [])].filter(Boolean);
  product.variants = presentations.length > 1
    ? presentations.map(([label, detail, price, stock, code], index) => ({
        id: `${product.id}-${index + 1}`,
        label,
        detail,
        price,
        stock,
        code,
        image: product.image,
      }))
    : [];
});

const icons = {
  grid: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />',
  discount: '<path d="M7 7h.01M17 17h.01" /><path d="m7 17 10-10" /><path d="M12 2 14.6 5.2l4.1.4.4 4.1L22 12l-2.9 2.3-.4 4.1-4.1.4L12 22l-2.6-3.2-4.1-.4-.4-4.1L2 12l2.9-2.3.4-4.1 4.1-.4Z" />',
  pill: '<path d="M10 21 3 14a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7Z" /><path d="m8.5 8.5 7 7" /><path d="M14 4a7 7 0 0 1 7 7" />',
  medicineBox: '<path d="M5 7h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M12 10v7M8.5 13.5h7" />',
  hygiene: '<path d="M4 17c3.7-2.1 7.4-2.1 11 0" /><path d="M6 7h8l4 4-3 3-4-4H6Z" /><path d="M6 7 3 4M12 10l-4 4" />',
  beauty: '<path d="M8 4h8l-1 9H9Z" /><path d="M10 13h4v7h-4Z" /><path d="M17 8h3M18.5 6.5v3M5 18h3" />',
  family: '<path d="M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" /><path d="M3.5 20a6 6 0 0 1 12 0" /><path d="M17 12a2.5 2.5 0 1 0 0-5" /><path d="M16 15.5a4.5 4.5 0 0 1 4.5 4.5" />',
  wellness: '<path d="M20.8 4.6a5.3 5.3 0 0 0-7.5 0L12 5.9l-1.3-1.3a5.3 5.3 0 1 0-7.5 7.5L12 21l8.8-8.9a5.3 5.3 0 0 0 0-7.5Z" /><path d="M7 12h2.5l1-2 2 5 1.4-3H17" />',
  firstAid: '<path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /><path d="M4 7h16v12H4Z" /><path d="M12 10v6M9 13h6" />',
  equipment: '<path d="M4 5h16v10H4Z" /><path d="M8 19h8M12 15v4" /><path d="M7 10h3l1.2-2.5 2.1 5 1.2-2.5H17" />',
  specialCare: '<path d="M4 13c3 0 5.5 1.3 8 4 2.5-2.7 5-4 8-4" /><path d="M7 17h10" /><path d="M15.8 4.8a3 3 0 0 0-4.2 0L12 5.2l.4-.4a3 3 0 1 1 4.2 4.2L12 13.6 7.4 9a3 3 0 1 1 4.2-4.2l.4.4" />',
  convenience: '<path d="M8 3h8l-1 5H9Z" /><path d="M9 8h6l1 13H8Z" /><path d="M10 13h4" /><path d="M18 7h2v8h-2" />',
  paw: '<path d="M12 13c3 0 5 2 5 4.5 0 1.5-1.1 2.5-2.5 2.5-1 0-1.7-.5-2.5-.5s-1.5.5-2.5.5C8.1 20 7 19 7 17.5 7 15 9 13 12 13Z" /><path d="M6.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM13.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />',
  pharmacyService: '<path d="M6 4v7a4 4 0 0 0 8 0V4" /><path d="M4 4h4M12 4h4" /><path d="M14 11a4 4 0 0 0 8 0v-1" /><path d="M20 7v6M17 10h6" />',
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
  storeSelectionConfirmed: false,
  deliveryFulfillmentStoreId: "",
  deliveryFulfillmentNote: "",
  cep: "",
  deliveryQuote: null,
  shippingStatus: "idle",
  shippingError: "",
  coupon: "",
  couponDraft: "",
  couponPanelOpen: false,
  loggedIn: false,
  usePoints: false,
  currentOrder: null,
  prescriptionFileName: "",
  prescriptionSent: false,
  prescriptionStoreId: "",
  selectedVariants: {},
  productPageQuantities: {},
  catalogQueryRoute: "",
  customer: {
    name: "Brena Sani",
    fullName: "Brena Corrêa Sani",
    cpf: "***.***.***-**",
    cep: "14090-370",
    points: 320,
    email: "brenasani29@gmail.com",
    phone: "(16) 98133-2167",
    address: "",
    addressStreet: "",
    addressDistrict: "",
    addressCity: "",
    addressState: "",
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
const LOYALTY_POINTS_PER_REAL = 2;
const LOYALTY_EXAMPLE_BALANCE = 320;
const LOYALTY_POINTS_PER_REAL_DISCOUNT = 100;
const LOYALTY_POINTS_VALIDITY_MONTHS = 6;
const STORE_WHATSAPP_NUMBER = "5516997997878";
const PIX_CNPJ_KEY = "58757644000109";
const PIX_MERCHANT_NAME = "DROGARIA ONORIO";
const PIX_MERCHANT_CITY = "RIBEIRAO PRETO";
const PBM_PORTAL_URL = "https://www.portalpbm.com.br/";
const PBM_PROGRAM_LINKS = [
  { terms: ["logixpharma"], url: PBM_PORTAL_URL, label: "Portal do PBM" },
  { terms: ["portal do pbm"], url: PBM_PORTAL_URL, label: "Portal do PBM" },
  { terms: ["vms", "vale mais saude", "vale mais saúde"], url: "https://www.valemaissaude.com.br/", label: "Vale Mais Saude" },
  { terms: ["cuidados pela vida", "ache", "aché"], url: "https://www.cuidadospelavida.com.br/", label: "Cuidados pela Vida" },
  { terms: ["programa faz bem", "astrazeneca"], url: "https://www.programafazbem.com.br/", label: "Programa FazBem" },
  { terms: ["mantecorp saude", "mantecorp saúde"], url: "https://www.mantecorpsaude.com.br/", label: "Mantecorp Saude" },
  { terms: ["dermaclub"], url: "https://www.dermaclub.com.br/", label: "Dermaclub" },
  { terms: ["bayer para voce", "bayer para você"], url: "https://www.bayerparavoce.com.br/", label: "Bayer Para Voce" },
  { terms: ["ems saude", "ems saúde"], url: "https://www.emssaude.com.br/", label: "EMS Saude" },
  { terms: ["programas comerciais abbvie", "abbvie", "allergan"], url: PBM_PORTAL_URL, label: "Portal do PBM" },
  { terms: ["programa cuidar", "mundipharma"], url: PBM_PORTAL_URL, label: "Portal do PBM" },
];
const roundMoney = (value) => Math.round((value + Number.EPSILON) * 100) / 100;
let cepLookupTimer = null;

const COUPON_CPF_RULE = "1 compra por CPF e cadastro.";
const COUPON_NON_CUMULATIVE_RULE = "Cupom não é cumulativo e não permite usar pontos Cliente ON no mesmo pedido.";
const COUPON_USAGE_STORAGE_KEY = "onorio-coupon-usage-v1";
const CAMPAIGN_MONTH_NAMES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

function campaignValidUntil(monthIndex, referenceDate = new Date()) {
  const year = referenceDate.getFullYear();
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();
  return `${String(lastDay).padStart(2, "0")}/${String(monthIndex + 1).padStart(2, "0")}/${year}`;
}

function campaignRule(monthIndex) {
  return `${COUPON_CPF_RULE} Válido de 01/${String(monthIndex + 1).padStart(2, "0")} até ${campaignValidUntil(monthIndex)}. ${COUPON_NON_CUMULATIVE_RULE}`;
}

function monthlyCampaignCoupon({
  month,
  code,
  title,
  description,
  value = 0.1,
  keywords = [],
  routeKeys = [],
  productCategories = [],
}) {
  return {
    code,
    title,
    description,
    value,
    discountType: "percent",
    scope: "campaign",
    scopeLabel: `Campanha de ${CAMPAIGN_MONTH_NAMES[month]}`,
    activeMonth: month,
    keywords,
    routeKeys,
    productCategories,
    rule: campaignRule(month),
    validUntil: campaignValidUntil(month),
  };
}

function isCouponActive(coupon, referenceDate = new Date()) {
  return coupon.activeMonth === undefined || coupon.activeMonth === referenceDate.getMonth();
}

function readCouponUsageStore() {
  try {
    return JSON.parse(localStorage.getItem(COUPON_USAGE_STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function writeCouponUsageStore(usageStore) {
  try {
    localStorage.setItem(COUPON_USAGE_STORAGE_KEY, JSON.stringify(usageStore));
  } catch (error) {
    // A versão real fará essa trava por CPF no backend; no protótipo guardamos no navegador.
  }
}

function customerCouponKey() {
  const cpfDigits = String(state.customer.cpf || "").replace(/\D/g, "");

  if (cpfDigits.length >= 3 && !String(state.customer.cpf || "").includes("*")) {
    return `cpf:${cpfDigits}`;
  }

  return `cliente:${normalizeText(state.customer.email || state.customer.fullName || state.customer.name || "demo")}`;
}

function couponUsagePeriod(coupon, referenceDate = new Date()) {
  if (coupon?.activeMonth !== undefined) {
    return `${referenceDate.getFullYear()}-${String(coupon.activeMonth + 1).padStart(2, "0")}`;
  }

  return "fixo";
}

function couponUsageKey(coupon) {
  if (!coupon?.code) return "";
  return `${customerCouponKey()}::${coupon.code}::${couponUsagePeriod(coupon)}`;
}

function hasCustomerUsedCoupon(coupon) {
  const key = couponUsageKey(coupon);
  if (!key) return false;
  return Boolean(readCouponUsageStore()[key]);
}

function markCouponUsedForCustomer(coupon, order) {
  const key = couponUsageKey(coupon);
  if (!key) return;

  const usageStore = readCouponUsageStore();
  usageStore[key] = {
    coupon: coupon.code,
    customer: customerCouponKey(),
    period: couponUsagePeriod(coupon),
    order: order?.number || "",
    usedAt: new Date().toISOString(),
  };
  writeCouponUsageStore(usageStore);
}

const baseCoupons = [
  {
    code: "BEMVINDO10",
    title: "R$ 10 na primeira compra",
    description: "Ganhe R$ 10 de desconto na primeira compra online.",
    value: 10,
    discountType: "fixed",
    scope: "all",
    scopeLabel: "Primeira compra",
    rule: `${COUPON_CPF_RULE} Válido somente para primeira compra. ${COUPON_NON_CUMULATIVE_RULE}`,
    validUntil: "31/12/2026",
  },
];

const monthlyCampaignCoupons = [
  monthlyCampaignCoupon({
    month: 0,
    code: "FERIAS10",
    title: "10% em férias e verão",
    description: "Protetor solar, pós-sol, repelentes, hidratantes, travel size e primeiros socorros.",
    keywords: ["protetor solar", "pos-sol", "pós-sol", "repelente", "hidratante", "travel", "curativo", "garrafa", "necessaire", "lenco umedecido", "lenço umedecido"],
    routeKeys: ["beleza", "primeiros-socorros"],
  }),
  monthlyCampaignCoupon({
    month: 1,
    code: "FOLIA10",
    title: "10% em folia e autocuidado",
    description: "Isotônicos, vitaminas, energéticos, preservativos, desodorantes, skincare e maquiagem.",
    keywords: ["isotonico", "isotônico", "vitamina", "energetico", "energético", "preservativo", "lubrificante", "desodorante", "agua micelar", "máscara facial", "mascara facial", "fixador de maquiagem", "skincare"],
    routeKeys: ["bem-estar-saude", "beleza", "higiene-pessoal", "conveniencia"],
  }),
  monthlyCampaignCoupon({
    month: 2,
    code: "MULHER10",
    title: "10% no mês da mulher",
    description: "Dermocosméticos, skincare, maquiagem, perfumaria feminina, séruns e cabelo.",
    keywords: ["dermocosmetico", "dermocosmético", "skincare", "maquiagem", "hidratante", "perfume", "perfumaria", "cabelo", "unha", "intimo feminino", "íntimo feminino", "serum", "sérum", "mascara capilar", "máscara capilar"],
    routeKeys: ["beleza"],
    productCategories: ["Cosméticos", "Perfumaria"],
  }),
  monthlyCampaignCoupon({
    month: 3,
    code: "ANIVERSARIO10",
    title: "10% na campanha de aniversário",
    description: "Combos de higiene, perfumaria, vitaminas, dermocosméticos, conveniência e kits promocionais.",
    keywords: ["combo", "kit", "higiene", "perfumaria", "vitamina", "dermocosmetico", "dermocosmético", "conveniencia", "conveniência", "queridinho"],
    routeKeys: ["higiene-pessoal", "beleza", "bem-estar-saude", "conveniencia"],
  }),
  monthlyCampaignCoupon({
    month: 4,
    code: "MAES10",
    title: "10% em presentes de Dia das Mães",
    description: "Kits de perfumaria, skincare premium, hidratantes, maquiagem, escovas e nécessaires.",
    keywords: ["kit", "perfumaria", "perfume", "skincare", "hidratante", "aromatizador", "escova", "maquiagem", "vela", "necessaire", "presente"],
    routeKeys: ["beleza"],
    productCategories: ["Cosméticos", "Perfumaria"],
  }),
  monthlyCampaignCoupon({
    month: 5,
    code: "INVERNO10",
    title: "10% em inverno e imunidade",
    description: "Vitaminas C e D, própolis, chás, mel, pastilhas, hidratantes labiais e cremes corporais.",
    keywords: ["vitamina c", "vitamina d", "propolis", "própolis", "cha", "chá", "mel", "pastilha", "umidificador", "hidratante labial", "creme corporal", "lenco", "lenço", "oleo corporal", "óleo corporal", "imunidade"],
    routeKeys: ["bem-estar-saude", "beleza", "conveniencia"],
  }),
  monthlyCampaignCoupon({
    month: 6,
    code: "INFANTIL10",
    title: "10% em cuidados infantis",
    description: "Vitaminas infantis, shampoo infantil, lenços, fraldas, mamadeiras, fórmulas e linha baby.",
    keywords: ["infantil", "baby", "fralda", "lenco umedecido", "lenço umedecido", "mamadeira", "chupeta", "formula infantil", "fórmula infantil", "ninho", "shampoo infantil", "mordedor", "lancheira", "protetor solar infantil"],
    routeKeys: ["mamae-bebe"],
    productCategories: ["Mamãe e bebê"],
  }),
  monthlyCampaignCoupon({
    month: 7,
    code: "PAIS10",
    title: "10% em cuidado masculino",
    description: "Perfumes masculinos, barba, desodorantes, fitness, suplementos e higiene masculina.",
    keywords: ["masculino", "homem", "barba", "barbear", "perfume masculino", "desodorante", "fitness", "suplemento", "necessaire masculina", "modelador capilar"],
    routeKeys: ["higiene-pessoal", "beleza", "bem-estar-saude"],
  }),
  monthlyCampaignCoupon({
    month: 8,
    code: "BEMESTAR10",
    title: "10% em saúde, bem-estar e projeto verão",
    description: "Whey protein, creatina, barras proteicas, snacks fit, vitaminas, chás, sono, aromaterapia e colágeno.",
    keywords: ["whey", "whey protein", "creatina", "barra proteica", "barrinha proteina", "barrinha proteína", "snack fit", "vitamina", "coqueteleira", "zero acucar", "zero açúcar", "cha calmante", "chá calmante", "oleo essencial", "óleo essencial", "difusor", "aromaterapia", "sono", "relaxante", "colageno", "colágeno"],
    routeKeys: ["bem-estar-saude", "conveniencia"],
    productCategories: ["Suplementos"],
  }),
  monthlyCampaignCoupon({
    month: 9,
    code: "ROSA10",
    title: "10% em Outubro Rosa",
    description: "Dermocosméticos, íntimos, hidratantes, vitaminas femininas, perfumaria, maquiagem e kits de autocuidado.",
    keywords: ["dermocosmetico", "dermocosmético", "intimo", "íntimo", "hidratante", "vitamina feminina", "perfumaria", "necessaire", "autocuidado", "maquiagem", "serum", "sérum", "rosa"],
    routeKeys: ["beleza", "higiene-pessoal"],
    productCategories: ["Cosméticos", "Perfumaria"],
  }),
  monthlyCampaignCoupon({
    month: 10,
    code: "BLACK15",
    title: "15% em Black Friday Onório",
    description: "Perfumaria, dermocosméticos, vitaminas, higiene pessoal, fitness, infantis, kits e aparelhos de cuidado.",
    value: 0.15,
    keywords: ["perfumaria", "perfume", "dermocosmetico", "dermocosmético", "vitamina", "higiene", "escova eletrica", "escova elétrica", "secador", "modelador", "fitness", "infantil", "kit", "combo", "aparelho"],
    routeKeys: ["beleza", "higiene-pessoal", "bem-estar-saude", "mamae-bebe", "equipamentos-acessorios"],
  }),
  monthlyCampaignCoupon({
    month: 11,
    code: "FESTAS10",
    title: "10% em verão e festas",
    description: "Kits presenteáveis, protetor solar, bronzeadores, pós-sol, perfumaria, maquiagem, glow e viagem.",
    keywords: ["kit", "presente", "protetor solar", "bronzeador", "pos-sol", "pós-sol", "perfumaria", "maquiagem", "skincare glow", "necessaire", "garrafa", "viagem", "chinelo", "verao", "verão", "fixador", "hidratante iluminador"],
    routeKeys: ["beleza", "conveniencia"],
  }),
];

const allCoupons = [...baseCoupons, ...monthlyCampaignCoupons];
const availableCoupons = allCoupons.filter((coupon) => isCouponActive(coupon));
const homeCampaignSlides = [
  {
    eyebrow: "Campanha de janeiro",
    title: "Férias com cuidado do começo ao fim.",
    description: "Use FERIAS10 em protetor solar, pós-sol, repelentes, hidratantes, travel size e primeiros socorros durante janeiro.",
    badge: "FERIAS10",
    note: "10% em verão e viagem",
    photo: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80")',
  },
  {
    eyebrow: "Campanha de fevereiro",
    title: "Folia, energia e autocuidado na mesma cesta.",
    description: "Use FOLIA10 em vitaminas, isotônicos, desodorantes, skincare refrescante e itens de bem-estar durante fevereiro.",
    badge: "FOLIA10",
    note: "10% em folia e cuidado",
    photo: 'url("https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80")',
  },
  {
    eyebrow: "Campanha de março",
    title: "Mês da Mulher com beleza e autocuidado.",
    description: "Use MULHER10 em dermocosméticos, skincare, maquiagem, perfumaria feminina, séruns e cabelo durante março.",
    badge: "MULHER10",
    note: "10% em beleza selecionada",
    photo: 'url("assets/category-beauty.jpg")',
  },
  {
    eyebrow: "Campanha de abril",
    title: "Aniversário Onório com economia na rotina.",
    description: "Use ANIVERSARIO10 em combos de higiene, perfumaria, vitaminas, dermocosméticos, conveniência e kits durante abril.",
    badge: "ANIVERSARIO10",
    note: "10% em kits e combos",
    photo: 'url("assets/category-offers-v2.jpg")',
  },
  {
    eyebrow: "Campanha de maio",
    title: "Mês das Mães: cuidado em forma de presente.",
    description: "Use MAES10 em kits de perfumaria, skincare, hidratantes, maquiagem e nécessaires participantes durante maio.",
    badge: "MAES10",
    note: "10% em presentes selecionados",
    photo: 'url("assets/category-mom-baby-real.jpg")',
    position: "center center",
  },
  {
    eyebrow: "Campanha de junho",
    title: "Inverno e imunidade para cuidar melhor.",
    description: "Use INVERNO10 em vitaminas C e D, própolis, chás, mel, pastilhas e hidratantes durante junho.",
    badge: "INVERNO10",
    note: "10% em imunidade",
    photo: 'url("assets/category-wellness-real.jpg")',
  },
  {
    eyebrow: "Campanha de julho",
    title: "Férias infantis com cuidado de farmácia.",
    description: "Use INFANTIL10 em vitaminas infantis, shampoo, lenços, fraldas, mamadeiras, fórmulas e linha baby durante julho.",
    badge: "INFANTIL10",
    note: "10% em cuidados infantis",
    photo: 'url("assets/category-baby.jpg")',
  },
  {
    eyebrow: "Campanha de agosto",
    title: "Mês dos Pais com cuidado masculino.",
    description: "Use PAIS10 em perfumes masculinos, barba, desodorantes, fitness, suplementos e higiene masculina durante agosto.",
    badge: "PAIS10",
    note: "10% em linha masculina",
    photo: 'url("assets/category-hygiene-real.jpg")',
  },
  {
    eyebrow: "Campanha de setembro",
    title: "Saúde, bem-estar e projeto verão.",
    description: "Use BEMESTAR10 em whey, creatina, barras proteicas, snacks fit, vitaminas, sono, aromaterapia e colágeno durante setembro.",
    badge: "BEMESTAR10",
    note: "10% em bem-estar",
    photo: 'url("assets/category-wellness-real.jpg")',
  },
  {
    eyebrow: "Campanha de outubro",
    title: "Outubro Rosa com cuidado e autoestima.",
    description: "Use ROSA10 em dermocosméticos, íntimos, hidratantes, vitaminas femininas, perfumaria, maquiagem e autocuidado durante outubro.",
    badge: "ROSA10",
    note: "10% em autocuidado",
    photo: 'url("assets/category-beauty.jpg")',
  },
  {
    eyebrow: "Campanha de novembro",
    title: "Black Friday Onório com ofertas de verdade.",
    description: "Use BLACK15 em perfumaria, dermocosméticos, vitaminas, higiene pessoal, fitness, infantis, kits e aparelhos durante novembro.",
    badge: "BLACK15",
    note: "15% em itens selecionados",
    photo: 'url("assets/category-offers-v2.jpg")',
  },
  {
    eyebrow: "Campanha de dezembro",
    title: "Verão e festas com presentes cheios de cuidado.",
    description: "Use FESTAS10 em kits presenteáveis, protetor solar, bronzeadores, perfumaria, maquiagem, glow e viagem durante dezembro.",
    badge: "FESTAS10",
    note: "10% em verão e festas",
    photo: 'url("https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=1200&q=80")',
  },
];

function applyCurrentMonthlyCampaignHero(referenceDate = new Date()) {
  const campaign = homeCampaignSlides[referenceDate.getMonth()];
  const slide = document.querySelector("[data-monthly-campaign-slide]");
  if (!campaign || !slide) return;

  slide.style.setProperty("--campaign-photo", campaign.photo);
  slide.style.setProperty("--campaign-position", campaign.position || "center center");
  slide.querySelector("[data-monthly-campaign-eyebrow]").textContent = campaign.eyebrow;
  slide.querySelector("[data-monthly-campaign-title]").textContent = campaign.title;
  slide.querySelector("[data-monthly-campaign-description]").textContent = campaign.description;
  slide.querySelector("[data-monthly-campaign-cta]").textContent = "Ver campanha";
  slide.querySelector("[data-monthly-campaign-badge]").textContent = campaign.badge;
  slide.querySelector("[data-monthly-campaign-note]").textContent = campaign.note;
}

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
    item.textContent = "Cliente ON";
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
    address: "Av. Arnaldo Victaliano, 1155 - Iguatemi - Ribeirão Preto/SP",
    time: "Retirada grátis em até 60 minutos",
    fullAddress: "Av. Arnaldo Victaliano, 1155 - Iguatemi - Ribeirão Preto/SP",
    phone: "(16) 3618-0883",
    phoneHref: "+551636180883",
    whatsapp: "(16) 99620-7433",
    whatsappHref: "5516996207433",
    email: "drogariaciasaude@yahoo.com.br",
    lat: -21.1957848,
    lng: -47.7804726,
  },
  {
    id: "loja-portugal",
    name: "Loja 2 - Av. Portugal",
    address: "Av. Portugal, 2777 - Jardim Botânico - Ribeirão Preto/SP",
    note: "Dentro do Posto Copercana",
    time: "Retirada grátis em até 60 minutos",
    fullAddress: "Av. Portugal, 2777 - Jardim Botânico - Ribeirão Preto/SP",
    phone: "(16) 3442-2440",
    phoneHref: "+551634422440",
    whatsapp: "(16) 99799-7878",
    whatsappHref: "5516997997878",
    email: "onoriodrogaria@gmail.com",
    lat: -21.2099552,
    lng: -47.7908571,
  },
];

const storeAvailabilityRules = {
  "loja-arnaldo": {
    unavailable: new Set([]),
  },
  "loja-portugal": {
    unavailable: new Set([]),
  },
};

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
  ajuda: {
    eyebrow: "Guia de ajuda",
    title: "Como podemos ajudar?",
    text: "Central com respostas rapidas sobre compra online, retirada, entrega, pagamento, cupons, conta, medicamentos e atendimento da Drogaria Onorio.",
    cards: [
      ["Compra online", "Passo a passo para escolher produtos e finalizar pedido"],
      ["Retirada e entrega", "Regras para retirar na loja, receber em casa ou calcular frete"],
      ["Pagamento e cupons", "Pix, cartao, boleto, Mercado Pago, PicPay e cupons Onorio"],
    ],
    helpGuidePage: true,
    primary: null,
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
    text: "A cada R$ 1,00 em compras, o cliente acumula 2 pontos. Exemplo: R$ 100,00 geram 200 pontos, equivalentes a R$ 2,00 de benefício por até 6 meses.",
    cards: [
      ["Saldo exemplo", `${LOYALTY_EXAMPLE_BALANCE} pontos`],
      ["Valor para abater", formatCurrency(pointsToDiscount())],
      ["Validade", `${LOYALTY_POINTS_VALIDITY_MONTHS} meses para utilizar`],
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
    eyebrow: "Saúde",
    title: "Serviços Farmacêuticos da Drogaria Onório",
    text: "Area para aplicacao de injetaveis, glicemia, afericao de pressao, orientacao farmaceutica e atendimento da loja.",
    cards: [
      ["Aplicacao de injetaveis", "Conforme prescricao e disponibilidade"],
      ["Glicemia", "Consulta de disponibilidade na unidade"],
      ["Serviços Farmacêuticos", "Orientacao e acompanhamento"],
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
    text: "Cupons proprios da Drogaria Onorio liberados conforme o calendario de campanhas de cada mes.",
    cards: [
      ["Cupom na cesta", "Cliente digita o codigo no resumo do pedido"],
      ["Regra por CPF", "Cada cupom pode ser usado uma vez por CPF e cadastro"],
      ["Campanhas mensais", "O site mostra automaticamente os cupons validos do mes vigente"],
    ],
    couponPage: true,
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
    text: "A Drogaria Onório existe há mais de 25 anos cuidando de famílias em Ribeirão Preto, unindo proximidade, inovação e qualidade no atendimento.",
    storyPage: true,
    cards: [
      ["Mais de 25 anos", "Uma trajetória construída com confiança, cuidado e presença no bairro."],
      ["Conexão que cuida", "Qualidade que inspira em cada atendimento, compra e orientação."],
      ["Cliente no centro", "Cuidado personalizado, rápido e acessível para a rotina de toda família."],
    ],
    values: [
      ["Proximidade", "Criar vínculos genuínos e acolhedores com cada cliente, sempre atento às suas necessidades."],
      ["Inovação", "Buscar soluções modernas e práticas para melhorar a experiência e o cuidado em cada atendimento."],
      ["Empatia", "Entender e respeitar cada pessoa com cuidado, escuta e atenção."],
      ["Motivação", "Inspirar clientes e equipe a cuidarem da saúde com confiança e otimismo."],
    ],
    attributes: ["Proximidade humanizada", "Praticidade detalhada", "Motivação inspiradora", "Acessibilidade sofisticada"],
    voice: [
      ["Humano e caloroso", "Estamos aqui para cuidar de você, no seu tempo, do seu jeito."],
      ["Positivo e inspirador", "Cuidar de si é o primeiro passo para conquistar mais saúde e bem-estar."],
      ["Direto e funcional", "A sua saúde, sempre à mão. Confira nossas soluções e fale com a gente."],
    ],
    sections: [
      {
        eyebrow: "Essência Onório",
        title: "Uma farmácia feita de proximidade",
        text: "A Onório se destaca pela conexão humana, modernidade e funcionalidade, equilibrando simplicidade com sofisticação.",
        items: ["Proximidade humanizada", "Praticidade detalhada", "Motivação inspiradora", "Acessibilidade sofisticada"],
      },
      {
        eyebrow: "Missão",
        title: "Cuidar com rapidez, acesso e acolhimento",
        text: "Oferecer cuidados de saúde personalizados, rápidos e acessíveis, com atendimento acolhedor que coloca o cliente no centro.",
        items: ["Atendimento acolhedor", "Cuidado personalizado", "Soluções práticas"],
      },
      {
        eyebrow: "Visão",
        title: "Ser referência em proximidade e qualidade",
        text: "Ser a farmácia referência em proximidade, inovação e qualidade, transformando a experiência de cuidado e inspirando bem-estar em cada cliente.",
        items: ["Inovação com propósito", "Qualidade no cuidado", "Bem-estar em cada contato"],
      },
    ],
    primary: ["Conhecer nossas farmácias", "farmacias"],
  },
  farmacias: {
    eyebrow: "Lojas",
    title: "Nossas farmácias",
    text: "Escolha a unidade mais próxima e abra a rota direto no Google Maps ou no Waze pelo celular.",
    cards: [
      ["Loja 1", "Av. Arnaldo Victaliano, 1155 - Iguatemi - Ribeirão Preto/SP"],
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
    eyebrow: "Serviços Farmacêuticos",
    title: "Serviços Farmacêuticos Onório",
    text: "Cuidados realizados na drogaria com acolhimento, orientação e disponibilidade conforme unidade.",
    cards: [],
    serviceGrid: true,
    heroImage: "assets/servicos-farmaceuticos-onorio-banner.png",
    sections: [],
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
    text: "Compre na Onório, acumule pontos e use o saldo para abater no valor da compra. No protótipo, o retorno é de 2% do valor gasto: R$ 100,00 geram R$ 2,00 em benefício.",
    cards: [
      ["R$ 1,00 = 2 pontos", "Cada real em compras gera 2 pontos Cliente ON."],
      ["100 pontos = R$ 1,00", "A cada 100 pontos, o cliente pode abater R$ 1,00 no total."],
      [`Validade de ${LOYALTY_POINTS_VALIDITY_MONTHS} meses`, "Os pontos ficam acumulados no cadastro e expiram 6 meses após a compra."],
    ],
    sections: [
      {
        title: "Benefícios",
        text: "O programa ajuda o cliente a economizar sem trocar produto: os pontos viram desconto direto no carrinho quando o cliente confirma o uso.",
        items: ["Saldo visível no checkout", "Desconto aplicado só com confirmação", "Novos pontos acumulados aparecem no pedido finalizado", "Prazo de uso sempre informado ao cliente"],
      },
    ],
    primary: ["Ver pagamento", "pagamento"],
  },
  pbm: {
    eyebrow: "Descontos",
    title: "PBM Onório",
    text: "Programa de benefícios em medicamentos participantes, com consulta por CPF e desconto de laboratório conforme regra de cada campanha.",
    cards: [
      ["Medicamentos de referência", "Economia em tratamentos contínuos e produtos selecionados."],
      ["Economia no tratamento", "Descontos validados pelo CPF quando o laboratório participa."],
      ["Cuidado para sua saúde", "A equipe confere regra, disponibilidade e orientação antes da venda."],
      ["Melhor experiência", "Consulta no site, retirada na loja e suporte pelo atendimento Onório."],
    ],
    pbmPage: true,
    sections: [],
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
      ["WhatsApp Loja 1", "(16) 99620-7433"],
      ["WhatsApp Loja 2", "(16) 99799-7878"],
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

const pharmaceuticalServices = [
  {
    title: "Bioimpedância",
    price: "R$ 24,90",
    duration: "15 minutos",
    text: "Avaliação corporal para acompanhar composição, rotina de saúde e evolução de cuidados.",
  },
  {
    title: "Aferição de Pressão",
    price: "R$ 5,00",
    duration: "10 minutos",
    text: "Medição da pressão arterial com orientação inicial da equipe farmacêutica.",
  },
  {
    title: "Teste de Glicemia",
    price: "R$ 5,00",
    duration: "10 minutos",
    text: "Teste capilar para acompanhamento da glicemia, com orientação sobre preparo e resultado.",
  },
  {
    title: "Teste de Oximetria",
    price: "R$ 5,00",
    duration: "5 minutos",
    text: "Procedimento não invasivo para medir oxigenação no sangue e batimentos cardíacos.",
  },
  {
    title: "Colocação de Sensor FS Libre",
    price: "R$ 11,90",
    duration: "15 minutos",
    text: "Instalação do sensor conforme orientação do produto e disponibilidade da unidade.",
  },
  {
    title: "Colocação de Brincos",
    price: "Valor do brinco",
    duration: "15 minutos",
    text: "Perfuração do lóbulo da orelha para colocação de brincos, conforme avaliação da equipe.",
  },
  {
    title: "Aplicação de Medicamentos Injetáveis",
    price: "R$ 9,90",
    duration: "20 minutos",
    text: "Administração de medicamentos injetáveis mediante apresentação e análise da prescrição.",
  },
  {
    title: "Aplicação de Medicamentos GLP-1",
    price: "R$ 9,90",
    duration: "20 minutos",
    text: "Administração de GLP-1 conforme prescrição, apresentação do medicamento e análise da equipe.",
  },
  {
    title: "Curativos",
    price: "R$ 25,90",
    duration: "20 minutos",
    text: "Realização de curativos de pequeno porte em lesões de pele, conforme avaliação local.",
  },
  {
    title: "Temperatura Corporal",
    price: "R$ 2,00",
    duration: "5 minutos",
    text: "Serviço de aferição e controle de temperatura corporal por termômetro.",
  },
];

const companyBundleOfferProductIds = new Set([
  "benegrip",
  "dorflex",
  "tylenol",
  "protetor",
  "vitamina-c",
]);

const pbmSteps = [
  {
    title: "Consulte o medicamento",
    text: "Busque o produto no site ou fale com a equipe para saber se ele participa de algum PBM.",
  },
  {
    title: "Informe o CPF",
    text: "O desconto costuma ser validado pelo CPF do cliente, conforme a regra de cada laboratório.",
  },
  {
    title: "Cadastre-se se precisar",
    text: "Alguns programas pedem um cadastro rápido antes de liberar o benefício.",
  },
  {
    title: "Finalize com orientação",
    text: "A Onório confere disponibilidade, prescrição quando necessária e aplica o desconto elegível.",
  },
];

const pbmCategories = [
  "Anti-hipertensivos",
  "Antialérgicos",
  "Antidiabéticos",
  "Analgésicos",
  "Antiasmáticos",
  "Anti-inflamatórios",
  "Reguladores de colesterol",
  "Antidepressivos",
  "Ansiolíticos",
  "Antiulcerosos",
  "Vitaminas",
  "Oftálmicos",
  "Fitoterápicos",
  "Hormônios",
  "Antivirais",
  "Saúde capilar",
];

const pbmPrograms = [
  "Abbott",
  "AbbVie",
  "Aché",
  "Allergan",
  "Apsen",
  "AstraZeneca",
  "Biolab",
  "Biosintética",
  "Boehringer",
  "Chiesi",
  "Diffucap",
  "Ease Labs",
  "EMS",
  "Eurofarma",
  "GSK",
  "Hypera",
  "Legrand Pharma",
  "Libbs",
  "Medley",
  "Mantecorp Farmasa",
  "Mantecorp Skincare",
  "Mantecorp",
  "MSD",
  "Mundipharma",
  "Neo Química",
  "Novo Nordisk",
  "Novartis",
  "Pfizer",
  "Prati-Donaduzzi",
  "Roche",
  "Sanofi",
  "União Química",
  "United Medical",
  "Viatris",
  "Zion",
];

function parsePbmLines(raw) {
  return raw
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, brand, program, price, oldPrice = ""] = line.split("|").map((part) => part.trim());
      return { name, brand, program, price, oldPrice };
    });
}

const pbmTreatmentGroups = [
  {
    id: "anti-hipertensivos",
    label: "Anti-hipertensivos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Anti-hipertensivos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Tratamentos de pressão, coração e glaucoma que podem ter benefício validado por CPF.",
    items: parsePbmLines(`
Corus Losartana Potássica 25mg 30 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 57,16|R$ 57,74
Diovan Valsartana 160mg 28 Comprimidos|Novartis|VMS|R$ 156,77|R$ 158,35
Micardis Anlo Telmisartana 80mg + Besilato de Anlodipino 5mg 30 Comprimidos|Boehringer|Abraçar a Vida - Boehringer|R$ 155,17|R$ 167,68
Lumigan RC Bimatoprosta 0,1mg/ml 3ml Solução Estéril|Allergan|Programas Comerciais Abbvie|R$ 170,30|R$ 172,52
Diovan Amlo Fix Valsartana 160mg + Besilato de Anlodipino 5mg 28 Comprimidos|Novartis|VMS|R$ 178,15|R$ 179,95
Diovan Valsartana 320mg 28 comprimidos|Novartis|VMS|R$ 156,77|R$ 158,35
Diovan HCT Valsartana 160mg + Hidroclorotiazida 12,5mg 28 Comprimidos revestidos|Novartis|VMS|R$ 162,97|R$ 164,62
Diovan Valsartana 80mg 28 Comprimidos|Novartis|VMS|R$ 156,77|R$ 158,35
Atacand HCT Candesartana Cilexetila 16mg + Hidroclorotiazida 12,5mg 30 Comprimidos|Astrazeneca|LOGIXPHARMA|R$ 178,55|R$ 187,75
Allovita Minoxidil 50mg/ml 50ml Solução Capilar Spray 2 Unidades|Legrand Pharma|LOGIXPHARMA|R$ 89,09|R$ 94,57
Pielus MX Minoxidil 50mg/ml 100ml|Mantecorp Skincare|LOGIXPHARMA|R$ 103,94|R$ 112,55
Press Plus Besilato De Anlodipino 5mg/20mg 60 Cápsulas|Biolab|LOGIXPHARMA|R$ 248,55|R$ 251,06
Press Plus Besilato De Anlodipino 5mg/10mg 60 cápsulas|Biolab|LOGIXPHARMA|R$ 230,04|R$ 232,36
Brasart BCC Valsartana 320mg + Besilato de Anlodipino 10mg 30 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 142,61|R$ 152,53
Corus H Losartana Potássica 50mg + Hidroclorotiazida 12,5mg 30 Comprimidos Revestidos|Biosintética|LOGIXPHARMA|R$ 78,80|R$ 79,60
Micardis Anlo Telmisartana 40mg + Besilato de Anlodipino 5mg 30 Comprimidos|Boehringer|Abraçar a Vida - Boehringer|R$ 120,64|R$ 130,93
Alphagan-Z Tartarato De Brimonidina 1mg/ml 5ml Solução Oftálmica Estéril|Allergan|Programas Comerciais Abbvie|R$ 73,89|R$ 74,85
Diovan HCT Valsartana 320mg + Hidroclorotiazida 25mg 28 Comprimidos revestidos|Novartis|VMS|R$ 187,46|R$ 189,35
Diovan HCT Valsartana 320mg + Hidroclorotiazida 12,5mg 28 Comprimidos Revestidos|Novartis|VMS|R$ 162,97|R$ 164,62
Diovan Amlo Fix Valsartana 320mg + Besilato de Anlodipino 5mg 28 Comprimidos|Novartis|VMS|R$ 178,15|R$ 179,95
Press Plus Besilato de Anlodipino 5mg + Cloridrato de Benazepril 20mg 30 Cápsulas|Biolab|LOGIXPHARMA|R$ 131,57|R$ 132,90
Xalatan Latanoprosta 50mcg/ml 2,5ml Solução Oftálmica|Viatris|LOGIXPHARMA|R$ 248,76|R$ 259,25
Timoptol XE Maleato De Timolol 5mg/ml 5ml Solução Oftálmica Gel|Mundipharma|PROGRAMA CUIDAR - MUNDIPHARMA|R$ 68,99|R$ 84,91
Diovan HCT Valsartana 160mg + Hidroclorotiazida 25mg 28 Comprimidos revestidos|Novartis|VMS|R$ 187,46|R$ 189,35
Xalacom Latanoprosta 50mcg/ml + Maleato de Timolol 5mg/ml 2,5ml Gotas|Viatris|LOGIXPHARMA|R$ 279,50|R$ 291,28
Atacand Candesartana Cilexetila 8mg 30 Comprimidos|Astrazeneca|LOGIXPHARMA|R$ 160,55|R$ 189,81
Atacand Candesartana Cilexetila 16mg 30 Comprimidos|Astrazeneca|LOGIXPHARMA|R$ 179,64|R$ 188,90
Ganfort UD Bimatoprosta 0,3mg/ml + Timolol 5mg/ml 30 Flaconetes de 0,4ml Solução Oftálmica|Allergan|Programas Comerciais Abbvie|R$ 242,68|R$ 245,13
Nebilet Cloridrato De Nebivolol 5mg 60 Comprimidos|Biolab|LOGIXPHARMA|R$ 257,96|R$ 260,57
Colírio Simbrinza Brinzolamida 10mg/ml + Tartarato de Brimonidina 2mg/ml 8ml|Novartis|VMS|R$ 166,54|R$ 168,22
Brasart BCC Valsartana 320mg + Besilato de Anlodipino 5mg 30 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 128,37|R$ 138,05
Brasart BCC Valsartana 160mg + Besilato de Anlodipino 5mg 30 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 120,13|R$ 129,06
Brasart BCC Valsartana 320mg + Besilato de Anlodipino 5mg 60 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 227,67|R$ 248,48
Brasart BCC Valsartana 160mg + Besilato de Anlodipino 5mg 60 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 208,84|R$ 230,98
Corus H Losartana Potássica 100mg + Hidroclorotiazida 25mg 30 Comprimidos revestidos|Aché|LOGIXPHARMA|R$ 158,18|R$ 159,78
Colírio Lumigan RC Bimatoprosta 0,1mg/ml 5ml|Allergan|Programas Comerciais Abbvie|R$ 283,77|R$ 287,46
Micardis Anlo Telmisartana 80mg + Besilato de Anlodipino 10mg 30 Comprimidos|Boehringer|Abraçar a Vida - Boehringer|R$ 155,17|R$ 167,68
Diovan Amlo Fix Valsartana 320mg + Besilato de Anlodipino 10mg 28 Comprimidos Revestidos|Novartis|VMS|R$ 210,33|R$ 212,45
Diovan Amlo Fix Valsartana 80mg + Besilato de Anlodipino 5mg 28 Comprimidos|Novartis|VMS|R$ 178,15|R$ 179,95
Press Plus Besilato de Anlodipino 5mg + Cloridrato de Benazepril 10mg 30 Cápsulas|Biolab|LOGIXPHARMA|R$ 120,51|R$ 121,73
Combigan Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 5ml solução|Allergan|Programas Comerciais Abbvie|R$ 162,14|R$ 164,24
Diovan HTC Valsartana 80mg + Hidroclorotiazida 12,5mg 28 Comprimidos Revestidos|Novartis|VMS|R$ 162,97|R$ 164,62
Atacand HCT Candesartana Cilexetila 8mg + Hidroclorotiazida 12,5mg 30 Comprimidos|Astrazeneca|LOGIXPHARMA|R$ 178,44|R$ 187,63
Olzicar HCT Olmesartana Medoxomila 40mg + Hidroclorotiazida 25mg 30 Comprimidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 76,59|R$ 81,31
Olzicar HCT Olmesartana Medoxomila 20mg + Hidroclorotiazida 12,5mg 30 Comprimidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 67,59|R$ 71,43
Olzicar Anlo Olmesartana Medoxomila 40mg + Anlodipino 5mg 30 Comprimidos Revestidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 63,59|R$ 68,07
Allovita Minoxidil 50mg/mL 1 Frasco Spray com 50 Ml + Extensor|Legrand Pharma|LOGIXPHARMA|R$ 57,21|R$ 63,60
Nebilet Cloridrato De Nebivolol 5mg 30 Comprimidos|Biolab|LOGIXPHARMA|R$ 171,49|R$ 173,22
    
    `),
  },
  {
    id: "antidepressivos",
    label: "Antidepressivos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Antidepressivos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Medicamentos de saúde mental com consulta de benefício e venda conforme prescrição.",
    items: parsePbmLines(`
Donaren Retard Cloridrato De Trazodona 150mg 30 Comprimidos|Apsen|PROGRAMA SOU MAIS VIDA - APSEN|R$ 169,59|R$ 211,13
Vognus Bromidrato de Vortioxetina 10mg 60 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 244,60|R$ 264,19
Wellbutrin XL Cloridrato De Bupropiona 150mg 30 Comprimidos|GSK|LOGIXPHARMA|R$ 209,09|R$ 211,20
Wellbutrin XL Cloridrato De Bupropiona 300mg 30 Comprimidos|GSK|LOGIXPHARMA|R$ 257,71|R$ 260,31
Efexor XR Cloridrato De Venlafaxina 150mg 30 Cápsulas|Viatris|LOGIXPHARMA|R$ 696,17|R$ 703,20
Efexor XR Cloridrato De Venlafaxina 75mg 30 Cápsulas|Viatris|LOGIXPHARMA|R$ 490,79|R$ 495,75
Efexor XR Cloridrato De Venlafaxina 37,5mg 30 Cápsulas|Viatris|LOGIXPHARMA|R$ 193,59|R$ 211,84
Evortia Bromidrato De Vortioxetina 10mg 60 Comprimidos Revestidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 272,53|R$ 275,28
Evortia Bromidrato De Vortioxetina 20mg 60 Comprimidos Revestidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 545,03|R$ 550,54
Vognus Bromidrato de Vortioxetina 5mg 30 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 92,63|R$ 100,21
Vognus Vortioxetina 10mg  30 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 153,01|R$ 165,16
Luvox Maleato De Fluvoxamina 100mg 60 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 630,59|R$ 750,60
Eudok Oxalato De Escitalopram 15mg 30 Cápsulas|União Química|LOGIXPHARMA|R$ 97,74|R$ 98,73
Eudok Oxalato De Escitalopram 10mg 30 Cápsulas|União Química|LOGIXPHARMA|R$ 86,62|R$ 87,49
Paxil CR Cloridrato De Paroxetina 25mg 30 Comprimidos|GSK|LOGIXPHARMA|R$ 257,93|R$ 260,54
Paxil CR Paroxetina 12,5mg 30 Comprimidos|GSK|LOGIXPHARMA|R$ 124,85|R$ 126,11
Evortia Bromidrato De Vortioxetina 15mg 60 Comprimidos Revestidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 463,22|R$ 467,90
Evortia Bromidrato De Vortioxetina 10mg 30 Comprimidos Revestidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 151,40|R$ 152,93
Eudok Oxalato De Escitalopram 20mg 30 Cápsulas|União Química|LOGIXPHARMA|R$ 133,39|R$ 134,74
Evortia Bromidrato De Vortioxetina 5mg 30 Comprimidos Revestidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 91,87|R$ 92,80
Extrato de Cannabis 200mg Zion 10ml|Zion|ENDOGEN - CANN DOC|R$ 133,30|R$ 399,90
    
    `),
  },
  {
    id: "alzheimer",
    label: "Doença de Alzheimer",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Para%20Alzheimer?PS=48&map=c,specificationFilter_143,specificationFilter_177",
    description: "Tratamentos neurológicos de uso contínuo, sempre com prescrição e orientação farmacêutica.",
    items: parsePbmLines(`
Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 20mg 30 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 239,57|R$ 241,99
Extrato de Cannabis Sativa 36,76mg/ml Ease Labs 30ml + Conta Gotas|Ease Labs|LOGIXPHARMA|R$ 430,90|R$ 432,00
Vivencia Patch 5cm² Rivastigmina 9mg 4,6mg/24h 30 Adesivos Transdérmicos|Aché|LOGIXPHARMA|R$ 402,82|R$ 406,87
Alois Duo Cloridrato de Memantina 20mg + Cloridrato de Donepezila 10mg 30 Comprimidos|Apsen|PROGRAMA SOU MAIS VIDA - APSEN|R$ 235,12|R$ 237,48
Exelon Patch 10 Rivastigmina 18mg 9,5mg/24h 30 Adesivos|United Medical|PROGRAMA CAMINHANDO JUNTOS - KNIGHT|R$ 196,87|R$ 590,62
Exelon Patch 5 Rivastigmina 4,6mg/24h 30 Adesivos|United Medical|PROGRAMA CAMINHANDO JUNTOS - KNIGHT|R$ 413,23|R$ 417,40
Vivencia Patch 10cm² Rivastigmina 18mg 9,5mg/24h 30 Adesivos Transdérmicos|Aché|LOGIXPHARMA|R$ 555,25|R$ 560,86
Vivencia Patch 15cm² Rivastigmina 27mg 13,3mg/24h 30 Adesivos Transdérmicos|Aché|LOGIXPHARMA|R$ 555,25|R$ 560,86
Exelon Patch Rivastigmina 27mg 30 Adesivos Transdérmicos|United Medical|PROGRAMA CAMINHANDO JUNTOS - KNIGHT|R$ 203,29|R$ 609,87
Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 10mg 7 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 47,26|R$ 47,74
Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 5mg 7 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 39,32|R$ 39,72
Alois Duo 10mg + 10mg Apsen 7 Comprimidos|Apsen|PROGRAMA SOU MAIS VIDA - APSEN|Sob consulta|
Donila Duo Cloridrato de Donepezila 10mg + Cloridrato de Memantina 15mg 7 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 53,98|R$ 54,53
    
    `),
  },
  {
    id: "antiasmaticos",
    label: "Antiasmáticos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Antiasm%C3%A1ticos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Tratamentos respiratórios com inaladores, sprays e apresentações sob análise de estoque.",
    items: parsePbmLines(`
Alenia Refil Formoterol 12mcg + Budesonida 400mcg 60 Cápsulas para Inalação|Biosintética|LOGIXPHARMA|R$ 161,54|R$ 163,17
Symbicort Spray Fumarato de Formoterol di-hidratado 6mcg + Budesonida 200mcg 120 Doses|Astrazeneca|PROGRAMA FAZBEM|R$ 175,71|R$ 177,48
Alenia Fumarato de Formoterol 6mcg + Budesonida 200mcg 60 Cápsulas Refil|Aché|LOGIXPHARMA|R$ 120,10|R$ 121,29
Flixotide Fluticasona 50mcg/dose 1 Frasco 120 Doses Spray|GSK|LOGIXPHARMA|R$ 170,73|R$ 218,35
Symbicort Spray Fumarato de Formoterol di-hidratado 6mcg + Budesonida 100mcg 120 Doses|Astrazeneca|PROGRAMA FAZBEM|R$ 209,75|R$ 211,87
Fostair Dipropionato De Beclometasona 200mcg + Fumarato De Formoterol 6mcg 120 Doses pó inalatório|Chiesi|PROGRAMA ACESSAR - CHIESI|R$ 257,05|R$ 259,64
Fostair HFA Dipropionato De Beclometasona 100mcg + Fumarato De Formoterol 6mcg 120 Doses spray|Chiesi|PROGRAMA ACESSAR - CHIESI|R$ 213,21|R$ 215,37
Alenia Fumarato de Formoterol Di-Hidratado 12mcg + Budesonida 400mcg 60 Cápsulas + Inalador|Biosintética|LOGIXPHARMA|R$ 203,87|R$ 205,93
    
    `),
  },
];

pbmTreatmentGroups.push(
  {
    id: "analgesicos",
    label: "Analgésicos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Analg%C3%A9sicos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Medicamentos para dor e febre, com validação de benefício conforme apresentação participante.",
    items: parsePbmLines(`
Toragesic SL Trometamol Cetorolaco 10mg 10 Comprimidos Sublinguais|EMS|LOGIXPHARMA|R$ 38,44|R$ 38,83
Traum Retard Cloridrato De Tramadol 100mg 10 Comprimidos|Aché|LOGIXPHARMA|R$ 94,59|R$ 104,18
Restiva Buprenorfina 10mcg/h 4 Adesivos Transdérmicos|Mundipharma|PROGRAMA CUIDAR - MUNDIPHARMA|R$ 385,63|R$ 389,53
Restiva Buprenorfina 5mcg/h 2 Adesivos Transdérmicos|Mundipharma|PROGRAMA CUIDAR - MUNDIPHARMA|R$ 138,58|R$ 159,65
Restiva Buprenorfina 10mcg/h 2 Adesivos Uso Transdérmico|Mundipharma|PROGRAMA CUIDAR - MUNDIPHARMA|R$ 174,56|R$ 203,17
Restiva Buprenorfina 5mcg/h 4 Adesivos Transdérmicos|Mundipharma|PROGRAMA CUIDAR - MUNDIPHARMA|R$ 302,90|R$ 305,96
Betrat Nitrato de Tiamina 100mg + Cloridrato de Piridoxina 100mg + Cianocobalamina 5000mcg 60 Comprimidos|Myralis|LOGIXPHARMA|R$ 150,47|R$ 173,54
    
    `),
  },
  {
    id: "hiperplasia-prostatica",
    label: "Hiperplasia Prostática Benigna",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Para%20Hiperplasia%20Prost%C3%A1tica%20Benigna?PS=48&map=c,specificationFilter_143,specificationFilter_177",
    description: "Tratamentos urológicos de uso contínuo, sempre com prescrição e consulta de benefício.",
    items: parsePbmLines(`
Avodart Dutasterida 0,5mg 90 Cápsulas|GSK|LOGIXPHARMA|R$ 438,31|R$ 442,74
Dutam Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 90 Cápsulas|Zodiac|PROGRAMA VIVER ADIUM|R$ 304,59|R$ 331,54
Combodart Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 90 Cápsulas|GSK|LOGIXPHARMA|R$ 415,08|R$ 419,27
Combodart Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 30 Cápsulas|GSK|LOGIXPHARMA|R$ 128,34|R$ 162,05
Tanduo Dutasterida 0,5mg + Cloridrato de Tansulosina 0,4mg 90 Cápsulas Liberação Prolongada|Apsen|PROGRAMA SOU MAIS VIDA - APSEN|R$ 302,26|R$ 322,97
Tamsulon Cloridrato De Tansulosina 0,4mg 30 Cápsulas|Zodiac|PROGRAMA VIVER ADIUM|R$ 269,59|R$ 303,48
    
    `),
  },
  {
    id: "vitaminas",
    label: "Vitaminas",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Com%20Vitaminas?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Vitaminas e suplementos com campanhas de recorrência, imunidade e bem-estar.",
    items: parsePbmLines(`
Mecobe Mecobalamina 1000mcg 30 Comprimidos sublinguais|Myralis|LOGIXPHARMA|R$ 30,33|R$ 50,06
Mecobe Mecobalamina 1000mcg 90 Comprimidos Sublinguais|Myralis|LOGIXPHARMA|R$ 66,37|R$ 132,74
D Prev Vitamina D 7000UI 4 Comprimidos|Dprev|LOGIXPHARMA|R$ 16,82|R$ 19,36
Dprev Vitamina D 14.000UI 4 Comprimidos Revestidos|Dprev|LOGIXPHARMA|R$ 36,20|R$ 44,90
DPrev Vitamina D 7000UI 30 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 38,88|R$ 75,75
Sany D Vitamina D 14000UI 4 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 32,44|R$ 35,58
D Prev Vitamina D 10.000UI 30 Comprimidos|Dprev|LOGIXPHARMA|R$ 108,49|R$ 137,37
DPrev Vitamina D 50.000UI 4 Cápsulas|Myralis|LOGIXPHARMA|R$ 58,92|R$ 83,07
DPrev Vitamina D 50000UI 4 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 58,92|R$ 77,72
DPrev Vitamina D 10.000UI 4 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 21,49|R$ 29,22
Pantogar 90 Cápsulas|Biolab|LOGIXPHARMA|R$ 350,94|R$ 354,48
Dprev Colecalciferol 4000UI 30 Comprimidos Revestidos|Dprev|LOGIXPHARMA|R$ 48,59|R$ 59,04
Sany D Vitamina D 7.000UI 30 Cápsulas|Aché|LOGIXPHARMA|Sob consulta|
Addera D3 Vitamina D 7000UI 30 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 177,47|R$ 179,26
Addera D3 Vitamina D 5.000UI 30 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 135,00|R$ 136,36
DPrev Vitamina D 2.000UI 60 Comprimidos|Myralis|LOGIXPHARMA|R$ 54,96|R$ 76,81
Addera D3 Vitamina D 10.000UI 10 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 123,63|R$ 124,88
Addera D3 Vitamina D 50.000UI 4 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 71,44|R$ 142,88
DPrev Vitamina D 7000UI 8 Comprimidos Revestidos|Myralis|LOGIXPHARMA|Sob consulta|
DPrev Vitamina D 2000UI 30 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 41,67|R$ 56,31
DPrev Vitamina D 5000UI 30 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 70,62|R$ 90,05
Unizinco Zinco 17,60mg/ml 100ml Solução Oral + Copo Medidor|Myralis|LOGIXPHARMA|R$ 33,25|R$ 35,13
Mecobe Mecobalamina 500mcg 30 Comprimidos Sublinguais|Myralis|LOGIXPHARMA|Sob consulta|
Dodibe Mecobalamina 1000mcg Morango 30 Comprimidos Sublinguais|Aché|LOGIXPHARMA|Sob consulta|
Sany D Vitamina D 10.000UI 4 Cápsulas|Aché|LOGIXPHARMA|R$ 27,49|R$ 27,77
Sany D Vitamina D 50.000UI 4 Cápsulas|Aché|LOGIXPHARMA|R$ 81,33|R$ 82,15
DPrev Vitamina D 5.000UI 30 Cápsulas|Myralis|LOGIXPHARMA|R$ 72,72|R$ 94,35
Sany D Vitamina D 50.000UI 8 Comprimidos|Aché|LOGIXPHARMA|R$ 139,30|R$ 140,71
Sany D Vitamina D 10.000UI 4 Comprimidos|Aché|LOGIXPHARMA|R$ 24,74|R$ 28,61
Dprev Vitamina D 10000UI 8 Cápsulas|Myralis|LOGIXPHARMA|R$ 44,19|R$ 55,80
Dprev Vitamina D 7000UI 12 Cápsulas|Myralis|LOGIXPHARMA|R$ 32,29|R$ 39,76
DPrev Vitamina D 10.000UI 8 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 40,68|R$ 50,73
DPrev Vitamina D 50.000ui 8 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 102,40|R$ 131,27
DPrev Vitamina D 1.000UI 60 Comprimidos|Myralis|LOGIXPHARMA|R$ 46,19|R$ 61,08
Addera D3 Vitamina D 7.000UI 4 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 45,04|R$ 45,49
Sany D Vitamina D 50.000UI 4 Comprimidos|Aché|LOGIXPHARMA|R$ 88,78|R$ 89,68
Addera D3 Vitamina D 50.000UI 4 Comprimidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 141,85|R$ 145,07
Dodibe Mecobalamina 1000mcg Morango 90 Comprimidos Sublinguais|Aché|LOGIXPHARMA|R$ 67,17|R$ 134,35
Sany D Vitamina D 4000UI 30 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 53,05|R$ 58,15
Sany D Vitamina D 5.000UI 30 Cápsulas|Aché|LOGIXPHARMA|R$ 84,64|R$ 87,62
Sany D Vitamina D 7.000UI 8 Cápsulas|Aché|LOGIXPHARMA|R$ 27,15|R$ 27,42
Untral Biotina 2,5mg 90 Cápsulas|Aché|LOGIXPHARMA|R$ 336,76|R$ 340,16
Addera D3 Vitamina D 10.000UI 4 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 70,23|R$ 70,94
Betrat Nitrato de Tiamina 100mg + Cloridrato de Piridoxina 100mg + Cianocobalamina 5000mcg 42 Comprimidos|Myralis|LOGIXPHARMA|R$ 109,87|R$ 120,64
Pantogar 60 Cápsulas|Biolab|LOGIXPHARMA|R$ 233,92|R$ 236,28
Addera D3 Vitamina D 7.000UI 10 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 93,84|R$ 94,79
Sany D Vitamina D 7.000UI 8 Comprimidos|Aché|LOGIXPHARMA|R$ 26,32|R$ 36,69
DPrev Vitamina D 1.000UI 30 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 31,49|R$ 43,85
    
    `),
  },
  {
    id: "antitromboticos-circulacao",
    label: "Antitrombóticos / Circulação",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Para%20Circula%C3%A7%C3%A3o?PS=48&map=c,specificationFilter_143,specificationFilter_177",
    description: "Medicamentos para circulação e prevenção de eventos trombóticos, com venda sob prescrição.",
    items: parsePbmLines(`
Timoptol XE Maleato De Timolol 5mg/ml 5ml Solução Oftálmica Gel|Mundipharma|PROGRAMA CUIDAR - MUNDIPHARMA|R$ 68,99|R$ 84,91
    
    `),
  },
  {
    id: "anticonvulsivantes",
    label: "Anticonvulsivantes",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Anticonvulsivantes?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Tratamentos neurológicos e de controle de crises, com prescrição e acompanhamento.",
    items: parsePbmLines(`
Depakote ER Divalproato De Sódio 500mg 60 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 252,40|R$ 330,80
Vorpro Bromidrato de Vortioxetina 10mg 30 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 124,59|R$ 138,26
Depakote ER Divalproato De Sódio 250mg 60 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 138,30|R$ 164,30
Tegretol CR Carbamazepina 200mg 60 Comprimidos|Novartis|VMS|R$ 101,58|R$ 102,61
Vorpro Bromidrato de Vortioxetina 5mg 30 Comprimidos Revestidos|EMS|LOGIXPHARMA|R$ 72,99|R$ 81,94
Lyrica Pregabalina 75mg 28 Cápsulas|Viatris|LOGIXPHARMA|R$ 218,87|R$ 221,07
Tegretol CR Carbamazepina 400mg 60 Comprimidos Blister|Novartis|VMS|R$ 244,91|R$ 247,38
Trileptal Oxcarbazepina 60mg/ml 100ml Suspensão Oral + 2 Seringas Dosadoras|Novartis|VMS|R$ 99,33|R$ 100,33
Deradop XL Cloridrato de Bupropiona 150mg 30 Comprimidos|EMS|LOGIXPHARMA|Sob consulta|
Deradop XL Cloridrato de Bupropiona 300mg 30 Comprimidos|EMS|LOGIXPHARMA|R$ 61,87|R$ 123,75
Keppra Levetiracetam 250mg 60 Cápsulas|Ucb Biopharma|LOGIXPHARMA|R$ 205,39|R$ 207,46
Keppra Levetiracetam 100 mg/ml 150ml|Ucb Biopharma|LOGIXPHARMA|R$ 177,80|R$ 179,60
Lamictal Lamotrigina 200mg 30 Comprimidos|GSK|LOGIXPHARMA|R$ 387,94|R$ 391,86
Lamictal Lamotrigina 100mg 30 comprimidos dispersíveis|GSK|LOGIXPHARMA|R$ 217,25|R$ 219,44
Depakote Divalproato De Sódio 500mg 30 Comprimidos ER|Abbott|Abbott - Abrace a Vida|R$ 149,99|R$ 165,93
Trileptal Oxcarbazepina 300mg 60 Comprimidos Revestidos|Novartis|VMS|R$ 262,37|R$ 265,02
Trileptal Oxcarbazepina 600mg 60 Comprimidos|Novartis|VMS|R$ 503,40|R$ 508,48
Extrato de Cannabis 160,32mg Greencare 30ml Gotas|GreenCare|LOGIXPHARMA|R$ 483,33|R$ 1.450,00
Keppra XR Levetiracetam 500mg 60 Comprimidos Revestidos|Ucb Biopharma|LOGIXPHARMA|R$ 328,72|R$ 332,04
Keppra Levetiracetam 750mg 60 Cápsulas|Ucb Biopharma|LOGIXPHARMA|R$ 852,52|R$ 861,13
Vimpat Lacosamida 100mg 28 comprimidos revestidos|Ucb Biopharma|LOGIXPHARMA|R$ 381,23|R$ 385,08
Lamictal Lamotrigina 50mg 30 Comprimidos|GSK|LOGIXPHARMA|R$ 133,69|R$ 135,04
Lamictal Lamotrigina 25mg 30 Comprimidos Dispersíveis|GSK|LOGIXPHARMA|R$ 87,43|R$ 88,31
Lyrica Pregabalina 150mg 28 Cápsulas|Viatris|LOGIXPHARMA|R$ 335,63|R$ 339,00
Vimpat Lacosamida 200mg 28 comprimidos revestidos|Ucb Biopharma|LOGIXPHARMA|R$ 744,44|R$ 751,96
Vimpat Lacosamida 50mg 14 comprimidos revestidos|Ucb Biopharma|LOGIXPHARMA|R$ 95,22|R$ 96,18
Keppra XR Levetiracetam 750mg 60 Comprimidos Revestidos|Ucb Biopharma|LOGIXPHARMA|R$ 493,09|R$ 498,07
Keppra Levetiracetam 750mg 30 Comprimidos|Ucb Biopharma|LOGIXPHARMA|R$ 426,29|R$ 430,60
Vimpat Lacosamida 150mg 28 comprimidos revestidos|Ucb Biopharma|LOGIXPHARMA|R$ 571,88|R$ 577,66
Tegretol Carbamazepina 200mg 20 Comprimidos|Novartis|VMS|R$ 34,20|R$ 37,17
Trileptal Oxcarbazepina 600mg 20 Comprimidos|Novartis|VMS|R$ 142,55|R$ 161,72
Trileptal Oxcarbazepina 300mg 20 Comprimidos|Novartis|VMS|R$ 87,19|R$ 88,07
Tegretol CR Carbamazepina 400mg 20 comprimidos|Novartis|VMS|R$ 81,64|R$ 82,46
    
    `),
  },
  {
    id: "descongestionantes",
    label: "Descongestionantes",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Para%20Congest%C3%A3o%20Nasal?PS=48&map=c,specificationFilter_177",
    description: "Itens para congestão nasal e sintomas respiratórios, com orientação de uso responsável.",
    items: parsePbmLines(`
Descongestionante Neosoro Adulto Cloridrato De Nafazolina 30ml Solução Nasal|Neo Química|PBM/Laboratório|Sob consulta|
Narix Cloreto De Benzalcônio 0,5mg/ml 30ml Solução Nasal|Cimed|PBM/Laboratório|R$ 7,99|R$ 10,06
Cloridrato Oximetazolina 5mg/ml Genérico EMS 30ml Gotas|EMS|PBM/Laboratório|R$ 15,28|R$ 17,40
Aturgyl Cloridrato De Oximetazolina 0,5mg/ml 15ml Spray|Mantecorp Farmasa|PBM/Laboratório|R$ 18,21|R$ 19,24
Allegra D Cloridrato de Fexofenadina 60mg + Cloridrato de Pseudoefedrina 120mg 10 Comprimidos Revestidos|Allegra|PBM/Laboratório|Sob consulta|
Sorine Cloridrato De Nafazolina 0,5mg/ml 30ml Solução Nasal|Aché|PBM/Laboratório|R$ 25,59|R$ 27,85
Naridrin Cloridrato de Nafazolina 1mg/ml + Maleato de Mepiramina 0,2mg/ml + Dexpantenol 5mg/ml 15ml Solução Nasal Adulto|EMS|PBM/Laboratório|R$ 19,49|R$ 21,88
Histadin D Loratadina 5mg + Sulfato de Pseudoefedrina 120mg 12 Comprimidos|União Química|PBM/Laboratório|R$ 55,03|R$ 59,20
Loratadina 1mg/ml + Sulfato Pseudoefedina 12mg/ml Genérico Biosintética 60ml Xarope|Biosintética|PBM/Laboratório|R$ 28,15|R$ 34,17
Cloridrato Oximetazolina 0,25mg/ml Genérico EMS 20ml Solução Pediátrica|EMS|PBM/Laboratório|R$ 11,10|R$ 12,11
Winter AP Maleato de Dexbronfeniramina 6mg + Sulfato de Pseudoefedrina 120mg 8 Comprimidos|Diffucap|PBM/Laboratório|R$ 34,59|R$ 38,62
Desalex D12 Desloratadina 2,5mg + Sulfato de Pseudoefedrina 120mg 10 Comprimidos|Supera RX|PBM/Laboratório|R$ 65,80|R$ 66,45
Multisoro Cloridrato De Nafazolina 0,5mg/ml 30ml Gotas|Multilab|PBM/Laboratório|R$ 6,78|R$ 11,83
Sinustrat Cloridrato De Nafazolina 0,5mg/ml 10ml Solução Nasal|Avert|PBM/Laboratório|R$ 19,08|R$ 19,27
Singulair Montelucaste De Sódio 10mg 30 Comprimidos|Organon|PBM/Laboratório|R$ 95,51|R$ 96,47
Histadin D Loratadina 1mg/ml + Sulfato de Pseudoefedrina 12mg/ml 60ml Xarope|União Química|PBM/Laboratório|R$ 60,06|R$ 60,67
Piemonte Montelucaste De Sódio 4mg 30 Comprimidos Mastigáveis|Eurofarma|PBM/Laboratório|R$ 74,24|R$ 78,09
Singulair Montelucaste De Sódio 5mg 30 Comprimidos|Organon|PBM/Laboratório|R$ 95,51|R$ 96,47
Piemonte Montelucaste De Sódio 5mg 30 Comprimidos Mastigáveis|Eurofarma|PBM/Laboratório|R$ 77,31|R$ 78,09
Lur D12 Desloratadina 2,5mg + Sulfato de Pseudoefedrina 120mg 10 Comprimidos|Aché|PBM/Laboratório|R$ 58,87|R$ 65,72
Plurair 50mcg/dose Libbs 120 Doses Spray|Libbs|PBM/Laboratório|R$ 61,99|R$ 72,92
    
    `),
  },
  {
    id: "antialergicos",
    label: "Antialérgicos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Antial%C3%A9rgicos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Medicamentos para alergias, rinite e urticária, com campanhas e regras por CPF.",
    items: parsePbmLines(`
Avamys Furoato De Fluticasona 27,5mcg 120 Doses Spray Nasal|GSK|LOGIXPHARMA|R$ 61,04|R$ 77,07
Dymista Cloridrato de Azelastina 137mcg/dose + Propionato de Fluticasona 50mcg/dose 23g Spray Nasal|Myralis|LOGIXPHARMA|R$ 117,32|R$ 158,12
Patanol S Cloridrato De Olopatadina 2,22 mg/ml 2,5ml Solução Oftalmológica|Novartis|VMS|R$ 83,48|R$ 84,32
Amome Furoato De Mometasona 50mcg 60 Doses Spray Nasal|Mantecorp Farmasa|LOGIXPHARMA|R$ 53,70|R$ 54,24
Amome Furoato De Mometasona 50mcg 120 Doses Spray Nasal|Mantecorp Farmasa|LOGIXPHARMA|R$ 68,99|R$ 75,56
    
    `),
  },
  {
    id: "antivirais",
    label: "Antivirais",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Antivirais?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Tratamentos antivirais sob prescrição, com consulta de benefício e disponibilidade.",
    items: parsePbmLines(`
Herpstal Valaciclovir 500mg 10 Comprimidos Revestidos|Germed|LOGIXPHARMA|R$ 117,28|R$ 118,46
Herpstal Valaciclovir 500mg 42 Comprimidos Revestidos|Natures Plus|LOGIXPHARMA|R$ 410,04|R$ 414,18
Valtrex Valaciclovir 500mg 10 Comprimidos|GSK|LOGIXPHARMA|R$ 174,82|R$ 214,86
Valtrex Cloridrato De Valaciclovir 500mg 42 Comprimidos|GSK|LOGIXPHARMA|R$ 620,43|R$ 810,32
Penvir Fanciclovir 500mg 21 Comprimidos|EMS|LOGIXPHARMA|R$ 736,67|R$ 744,11
    
    `),
  },
  {
    id: "antipsicoticos",
    label: "Antipsicóticos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Antipsic%C3%B3tico?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Medicamentos de saúde mental, com prescrição, controle e validação de programa parceiro.",
    items: parsePbmLines(`
Lutab Cloridrato De Lurasidona 20mg 30 Comprimidos|Aché|LOGIXPHARMA|R$ 211,33|R$ 223,47
Extrato de Cannabis Sativa 36,76mg/ml Ease Labs 30ml + Conta Gotas|Ease Labs|LOGIXPHARMA|R$ 430,90|R$ 432,00
Extrato de Cannabis 79,14mg/mL Mantecorp 30ml|Mantecorp Farmasa|LOGIXPHARMA|R$ 324,30|R$ 972,92
Lutab Cloridrato De Lurasidona 40mg 30 Comprimidos|Aché|LOGIXPHARMA|R$ 414,67|R$ 446,88
Depakote ER Divalproato De Sódio 250mg 30 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 69,69|R$ 82,83
Zyprexa Olanzapina 2,5mg 30 Comprimidos Revestidos|Biopas|LOGIXPHARMA|R$ 205,46|R$ 616,40
Lutab Cloridrato De Lurasidona 80mg 30 Comprimidos|Aché|LOGIXPHARMA|R$ 497,40|R$ 524,61
Zyprexa Olanzapina 10mg 30 Comprimidos Revestidos|Biopas|LOGIXPHARMA|R$ 1.802,94|R$ 1.821,15
Zyprexa Olanzapina 5mg 30 Comprimidos Revestidos|Biopas|LOGIXPHARMA|R$ 758,33|R$ 910,52
    
    `),
  },
  {
    id: "colesterol-triglicerideos",
    label: "Reguladores de Colesterol e Triglicerídeos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Para%20Colesterol?PS=48&map=c,specificationFilter_143,specificationFilter_177",
    description: "Medicamentos para colesterol e triglicerídeos, geralmente de uso contínuo e recorrente.",
    items: parsePbmLines(`
Mecobe Mecobalamina 1000mcg 30 Comprimidos sublinguais|Myralis|LOGIXPHARMA|R$ 30,33|R$ 50,06
Mecobe Mecobalamina 1000mcg 90 Comprimidos Sublinguais|Myralis|LOGIXPHARMA|R$ 66,37|R$ 132,74
Coledue R Ezetimiba 10mg + Rosuvastatina Cálcica 10mg 30 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 78,59|R$ 82,80
Mecobe Mecobalamina 500mcg 30 Comprimidos Sublinguais|Myralis|LOGIXPHARMA|Sob consulta|
Lipless Ciprofibrato 100mg 90 Comprimidos|Biolab|LOGIXPHARMA|R$ 218,37|R$ 220,58
Lipidil Fenofibrato 160mg 30 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 140,24|R$ 165,53
Crestor Rosuvastatina Cálcica 10mg  30 Comprimidos|Astrazeneca|PROGRAMA FAZBEM|R$ 226,59|R$ 253,75
Rusovas Rosuvastatina Cálcica 20mg 90 Comprimidos|Brace Pharma|LOGIXPHARMA|R$ 242,82|R$ 245,27
Rusovas Rosuvastatina Cálcica 10mg 90 Comprimidos|Brace Pharma|LOGIXPHARMA|R$ 144,71|R$ 146,17
Repatha 140mg biolab 2 Canetas com 1ml|Biolab|LOGIXPHARMA|R$ 2.484,24|R$ 2.564,55
Lipidil Fenofibrato 160mg 90 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 340,89|R$ 402,30
Crestor Rosuvastatina Cálcica 5mg 60 comprimidos revestidos|Astrazeneca|PROGRAMA FAZBEM|R$ 207,99|R$ 232,15
Lipitor Atorvastatina Cálcica 20mg 30 Comprimidos Revestidos|Viatris|LOGIXPHARMA|R$ 251,94|R$ 254,48
Lipidil Fenofibrato 160mg 60 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 251,83|R$ 298,00
Rusovas Rosuvastatina Cálcica 5mg 60 Comprimidos Revestidos|Brace Pharma|LOGIXPHARMA|R$ 115,83|R$ 117,00
Rusovas Rosuvastatina Cálcica 10mg 30 Comprimidos Revestidos|Brace Pharma|LOGIXPHARMA|R$ 74,21|R$ 74,96
Rusovas Rosuvastatina Cálcica 20mg 30 Comprimidos Revestidos|Brace Pharma|LOGIXPHARMA|R$ 129,49|R$ 130,80
Crestor Rosuvastatina Cálcica 20mg  30 Comprimidos|Astrazeneca|PROGRAMA FAZBEM|R$ 377,99|R$ 423,31
Lipitor Atorvastatina Cálcica 10mg 30 Comprimidos Revestidos|Viatris|LOGIXPHARMA|R$ 205,45|R$ 207,53
Rusovas Rosuvastatina Cálcica 10mg 60 comprimidos revestidos|Brace Pharma|LOGIXPHARMA|R$ 126,08|R$ 127,35
    
    `),
  },
  {
    id: "ansioliticos",
    label: "Ansiolíticos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Ansiol%C3%ADticos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Medicamentos para ansiedade e sono, com controle de prescrição e dispensação responsável.",
    items: parsePbmLines(`
Efexor XR Cloridrato De Venlafaxina 150mg 30 Cápsulas|Viatris|LOGIXPHARMA|R$ 696,17|R$ 703,20
Efexor XR Cloridrato De Venlafaxina 75mg 30 Cápsulas|Viatris|LOGIXPHARMA|R$ 490,79|R$ 495,75
Efexor XR Cloridrato De Venlafaxina 37,5mg 30 Cápsulas|Viatris|LOGIXPHARMA|R$ 193,59|R$ 211,84
    
    `),
  },
  {
    id: "anti-inflamatorios",
    label: "Anti-inflamatórios",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Anti-inflamat%C3%B3rios?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Anti-inflamatórios e corticoides, com atenção a prescrição, contraindicações e tempo de uso.",
    items: parsePbmLines(`
Alenia Refil Formoterol 12mcg + Budesonida 400mcg 60 Cápsulas para Inalação|Biosintética|LOGIXPHARMA|R$ 161,54|R$ 163,17
Toragesic SL Trometamol Cetorolaco 10mg 10 Comprimidos Sublinguais|EMS|LOGIXPHARMA|R$ 38,44|R$ 38,83
Alenia Fumarato de Formoterol 6mcg + Budesonida 200mcg 60 Cápsulas Refil|Aché|LOGIXPHARMA|R$ 120,10|R$ 121,29
Flixotide Fluticasona 50mcg/dose 1 Frasco 120 Doses Spray|GSK|LOGIXPHARMA|R$ 170,73|R$ 218,35
Flixotide Fluticasona 250mcg/dose 60 Doses Spray|GSK|LOGIXPHARMA|R$ 127,30|R$ 163,74
Artrolive Sulfato de Glicosamina 500mg + Sulfato de Condroitina 400mg 90 Cápsulas|Aché|LOGIXPHARMA|R$ 358,54|R$ 362,16
Alenia Fumarato de Formoterol Di-Hidratado 12mcg + Budesonida 400mcg 60 Cápsulas + Inalador|Biosintética|LOGIXPHARMA|R$ 203,87|R$ 205,93
Psorex Propionato De Clobetasol 0,5mg/g 30g Creme|GSK|LOGIXPHARMA|R$ 49,91|R$ 50,41
Psorex Propionato De Clobetasol 0,5mg/g 50g Loção|GSK|LOGIXPHARMA|R$ 73,76|R$ 74,50
Betnovate Valerato de Betametasona 1mg/g 30g Creme|GSK|LOGIXPHARMA|R$ 56,87|R$ 57,44
Mytro Trometamol Cetorolaco 10mg 10 Comprimidos Sublinguais|Myralis|LOGIXPHARMA|R$ 23,09|R$ 23,32
Pentasa Mesalazina 1000mg 28 Supositórios + 28 Dedeiras|Ferring|LOGIXPHARMA|R$ 895,60|R$ 917,72
Pentasa Mesalazina 2g 30 Sachês|Ferring|LOGIXPHARMA|R$ 1.333,21|R$ 1.346,68
Pentasa Mesalazina 1000mg/g 1g 50 Sachês|Ferring|LOGIXPHARMA|R$ 815,89|R$ 1.111,99
Psorex Propionato De Clobetasol 0,5mg/g 1 Bisnaga 30g Pomada|GSK|LOGIXPHARMA|R$ 51,29|R$ 51,81
Betrat Nitrato de Tiamina 100mg + Cloridrato de Piridoxina 100mg + Cianocobalamina 5000mcg 90 Comprimidos|Myralis|LOGIXPHARMA|R$ 197,00|R$ 232,99
Flutivate Propionato De Fluticasona 0,5mg 30g Creme Dermatológico|GSK|LOGIXPHARMA|R$ 131,14|R$ 132,45
Tacroz Tacrolimo 1,0mg/g 10g Pomada|Glenmark|LOGIXPHARMA|R$ 85,13|R$ 90,61
Pentasa Mesalazina 10mg/ml 7 Frascos com 100ml|Ferring|LOGIXPHARMA|R$ 297,27|R$ 349,73
Pentasa Mesalazina 500mg 50 Comprimidos|Cellera Farma|LOGIXPHARMA|R$ 542,94|R$ 556,35
Betnovate Valerato de Betametasona 1mg/g 30g Pomada|GSK|LOGIXPHARMA|R$ 59,71|R$ 60,31
Mytro Trometamol Cetorolaco 10mg 20 Comprimidos Sublinguais|Myralis|LOGIXPHARMA|R$ 39,73|R$ 40,13
Bioflan Harpagophytum Procumbens 150mg 30 comprimidos|Myralis|LOGIXPHARMA|R$ 105,92|R$ 113,72
    
    `),
  },
  {
    id: "antiulcerosos",
    label: "Antiulcerosos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Antiulcerosos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Tratamentos para refluxo, gastrite e proteção gástrica, com orientação sobre tempo de uso.",
    items: parsePbmLines(`
Nexium Esomeprazol Magnésico 40mg 28 Comprimidos|Astrazeneca|PROGRAMA FAZBEM|R$ 392,99|R$ 437,63
Nexium Esomeprazol Magnésico 20mg 28 Comprimidos|Astrazeneca|PROGRAMA FAZBEM|R$ 186,99|R$ 209,39
    
    `),
  },
  {
    id: "fitoterapicos",
    label: "Fitoterápicos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Fitoter%C3%A1picos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Produtos fitoterápicos e naturais, com consulta de indicação, composição e disponibilidade.",
    items: parsePbmLines(`
Ammy Drospirenona 4mg 24 Comprimidos Revestidos + 4 Comprimidos Placebos|Mantecorp Farmasa|LOGIXPHARMA|R$ 132,71|R$ 134,05
Ajovy 225mg/1,5ml Teva 1,5ml 1 Seringa Preenchida|Teva|PROGRAMA DE DESCONTOS AJOVY|R$ 1.099,90|R$ 3.257,55
Arpadol Harpagophytum Procumbens 400mg 60 Comprimidos Revestidos|Apsen|PROGRAMA SOU MAIS VIDA - APSEN|R$ 216,80|R$ 235,11
Vivencia Patch 5cm² Rivastigmina 9mg 4,6mg/24h 30 Adesivos Transdérmicos|Aché|LOGIXPHARMA|R$ 402,82|R$ 406,87
Canabidiol Greencare 23,75mg 30ml Gotas|GreenCare|LOGIXPHARMA|R$ 158,33|R$ 475,00
Vivencia Patch 10cm² Rivastigmina 18mg 9,5mg/24h 30 Adesivos Transdérmicos|Aché|LOGIXPHARMA|R$ 555,25|R$ 560,86
Vivencia Patch 15cm² Rivastigmina 27mg 13,3mg/24h 30 Adesivos Transdérmicos|Aché|LOGIXPHARMA|R$ 555,25|R$ 560,86
Climatrix Trifolium Pratense L 100mg 30 comprimidos revestidos|Myralis|LOGIXPHARMA|R$ 137,10|R$ 151,20
Extrato de Cannabis Sativa Greencare 79,14mg 10ml Gotas|Nunature|LOGIXPHARMA|R$ 110,00|R$ 330,00
Piascledine Abacate 100mg + Soja 200mg 30 Cápsulas|Abbott|Abbott - Abrace a Vida|R$ 316,53|R$ 357,92
Extrato De Cannabis Sativa 200mg/ml Zion 30ml + Conta-Gotas|Zion|ENDOGEN - CANN DOC|R$ 990,90|R$ 997,00
    
    `),
  },
  {
    id: "calcio-osseo",
    label: "Reguladores de Cálcio Ósseo",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Para%20Os%20Ossos?PS=48&map=c,specificationFilter_143,specificationFilter_179",
    description: "Tratamentos para saúde óssea, cálcio, vitamina D e osteoporose, conforme prescrição.",
    items: parsePbmLines(`
Mecobe Mecobalamina 1000mcg 30 Comprimidos sublinguais|Myralis|LOGIXPHARMA|R$ 30,33|R$ 50,06
Mecobe Mecobalamina 1000mcg 90 Comprimidos Sublinguais|Myralis|LOGIXPHARMA|R$ 66,37|R$ 132,74
D Prev Vitamina D 7000UI 4 Comprimidos|Dprev|LOGIXPHARMA|R$ 16,82|R$ 19,36
Dprev Vitamina D 14.000UI 4 Comprimidos Revestidos|Dprev|LOGIXPHARMA|R$ 36,20|R$ 44,90
DPrev Vitamina D 7000UI 30 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 38,88|R$ 75,75
Sany D Vitamina D 14000UI 4 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 32,44|R$ 35,58
Addera D3 Colecalciferol 14.000UI 4 Cápsulas Moles|Mantecorp Farmasa|LOGIXPHARMA|R$ 79,03|R$ 79,83
D Prev Vitamina D 10.000UI 30 Comprimidos|Dprev|LOGIXPHARMA|R$ 108,49|R$ 137,37
DPrev Vitamina D 50.000UI 4 Cápsulas|Myralis|LOGIXPHARMA|R$ 58,92|R$ 83,07
DPrev Vitamina D 50000UI 4 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 58,92|R$ 77,72
Dprev Colecalciferol 4000UI 30 Comprimidos Revestidos|Dprev|LOGIXPHARMA|R$ 48,59|R$ 59,04
Osteotrat Risedronato Sódico 35mg 12 Comprimidos|Aché|LOGIXPHARMA|R$ 240,04|R$ 242,46
Sany D Vitamina D 7.000UI 30 Cápsulas|Aché|LOGIXPHARMA|Sob consulta|
Addera D3 Vitamina D 7000UI 30 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 177,47|R$ 179,26
Addera D3 Vitamina D 5.000UI 30 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 135,00|R$ 136,36
DPrev Vitamina D 2.000UI 60 Comprimidos|Myralis|LOGIXPHARMA|R$ 54,96|R$ 76,81
Arpadol Harpagophytum Procumbens 400mg 60 Comprimidos Revestidos|Apsen|PROGRAMA SOU MAIS VIDA - APSEN|R$ 216,80|R$ 235,11
Addera D3 Vitamina D 50.000UI 4 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 71,44|R$ 142,88
Prolia Denosumabe 60mg/mL Amgen 1ml|Amgen|LOGIXPHARMA|R$ 384,53|R$ 1.153,59
Mecobe Mecobalamina 500mcg 30 Comprimidos Sublinguais|Myralis|LOGIXPHARMA|Sob consulta|
Sany D Vitamina D 10.000UI 4 Cápsulas|Aché|LOGIXPHARMA|R$ 27,49|R$ 27,77
Sany D Vitamina D 50.000UI 4 Cápsulas|Aché|LOGIXPHARMA|R$ 81,33|R$ 82,15
DPrev Vitamina D 5.000UI 30 Cápsulas|Myralis|LOGIXPHARMA|R$ 72,72|R$ 94,35
Sany D Vitamina D 50.000UI 8 Comprimidos|Aché|LOGIXPHARMA|R$ 139,30|R$ 140,71
Sany D Vitamina D 10.000UI 4 Comprimidos|Aché|LOGIXPHARMA|R$ 24,74|R$ 28,61
Osteoban Ibandronato De Sódio 150mg 3 Comprimidos|Aché|LOGIXPHARMA|R$ 147,59|R$ 162,62
Dprev Vitamina D 10000UI 8 Cápsulas|Myralis|LOGIXPHARMA|R$ 44,19|R$ 55,80
Dprev Vitamina D 7000UI 12 Cápsulas|Myralis|LOGIXPHARMA|R$ 32,29|R$ 39,76
DPrev Vitamina D 10.000UI 8 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 40,68|R$ 50,73
DPrev Vitamina D 50.000ui 8 Comprimidos Revestidos|Myralis|LOGIXPHARMA|R$ 102,40|R$ 131,27
Addera D3 Vitamina D 7.000UI 4 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 45,04|R$ 45,49
Sany D Vitamina D 50.000UI 4 Comprimidos|Aché|LOGIXPHARMA|R$ 88,78|R$ 89,68
Risedross Risedronato Sódico 35mg 12 Comprimidos|EMS|LOGIXPHARMA|R$ 253,15|R$ 255,71
Sany D Vitamina D 4000UI 30 Comprimidos Revestidos|Aché|LOGIXPHARMA|R$ 53,05|R$ 58,15
Sany D Vitamina D 5.000UI 30 Cápsulas|Aché|LOGIXPHARMA|R$ 84,64|R$ 87,62
Sany D Vitamina D 7.000UI 8 Cápsulas|Aché|LOGIXPHARMA|R$ 27,15|R$ 27,42
Sany D Vitamina D 7.000UI 8 Comprimidos|Aché|LOGIXPHARMA|R$ 26,32|R$ 36,69
Osteotrat Risedronato Sódico 35mg 4 Comprimidos|Aché|LOGIXPHARMA|R$ 107,25|R$ 108,33
Denbonli Denosumabe 60mg/ml 1ml Seringa Preenchida Solução Injetável Subcutânea|Sandoz|LOGIXPHARMA|R$ 706,86|R$ 1.070,90
Sany D Vitamina D 50.000UI 8 Cápsulas|Aché|LOGIXPHARMA|R$ 139,30|R$ 140,71
Sany D Vitamina D 2.000UI 60 Comprimidos|Aché|LOGIXPHARMA|R$ 75,17|R$ 75,93
Addera D3 Vitamina D 50.000UI 8 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 238,59|R$ 258,73
Addera D3 Vitamina D 50.000UI 10 Cápsulas|Mantecorp Farmasa|LOGIXPHARMA|R$ 283,14|R$ 309,29
Osteoban Ibandronato De Sódio 150mg 1 Comprimido|Aché|LOGIXPHARMA|R$ 58,59|R$ 62,08
Sany D Vitamina D 7.000UI 12 Cápsulas|Aché|LOGIXPHARMA|Sob consulta|
Sany D Vitamina D 5.000UI 30 Comprimidos|Aché|LOGIXPHARMA|R$ 86,74|R$ 87,62
Sany D Vitamina D 7.000UI 30 Comprimidos|Aché|LOGIXPHARMA|R$ 99,99|R$ 101,00
Addera D3 Vitamina D 50.000UI 8 Comprimidos|Mantecorp Farmasa|LOGIXPHARMA|R$ 238,59|R$ 259,33
    
    `),
  },
  {
    id: "psicoestimulantes",
    label: "Psicoestimulantes",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Psicoestimulantes?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Medicamentos controlados para atenção e cognição, com prescrição e regras específicas.",
    items: parsePbmLines(`
Lyberdia Dimesilato De Lisdexanfetamina 50mg 30 Cápsulas Duras|EMS|LOGIXPHARMA|R$ 446,26|R$ 450,77
Lyberdia Dimesilato De Lisdexanfetamina 30mg 30 Cápsulas Duras|EMS|LOGIXPHARMA|R$ 368,03|R$ 371,75
Ritalina LA Cloridrato De Metilfenidato 10mg 30 Comprimidos|Novartis|VMS|R$ 132,27|R$ 139,23
Lidexor Dimesilato De Lisdexanfetamina 70mg 30 Cápsulas|Brace Pharma|LOGIXPHARMA|R$ 357,58|R$ 361,19
Lidexor Dimesilato De Lisdexanfetamina 50mg 30 Cápsulas|Brace Pharma|LOGIXPHARMA|R$ 357,58|R$ 361,19
Lidexor Dimesilato De Lisdexanfetamina 30mg 30 Cápsulas|Brace Pharma|LOGIXPHARMA|R$ 294,88|R$ 297,86
Lyberdia Dimesilato De Lisdexanfetamina 40mg/ml 50ml Solução Gotas|EMS|LOGIXPHARMA|R$ 568,19|R$ 573,93
Lyberdia Dimesilato De Lisdexanfetamina 70mg 30 Cápsulas|EMS|LOGIXPHARMA|R$ 446,26|R$ 450,77
Lisvenx Dimesilato De Lisdexanfetamina 70mg 30 Cápsulas|Torrent|LOGIXPHARMA|R$ 425,55|R$ 477,61
Ritalina LA Cloridrato De Metilfenidato 20mg  30 Comprimidos|Novartis|VMS|R$ 367,51|R$ 371,22
Lisvenx Dimesilato De Lisdexanfetamina 50mg 30 Cápsulas|Torrent|LOGIXPHARMA|R$ 425,55|R$ 477,61
Ritalina LA Cloridrato De Metilfenidato 40mg  30 Comprimidos|Novartis|VMS|R$ 405,11|R$ 409,20
Ritalina LA Cloridrato De Metilfenidato 30mg  30 Comprimidos|Novartis|VMS|R$ 385,88|R$ 389,78
Lidexor Dimesilato De Lisdexanfetamina 40mg/ml 50ml Gotas|Brace Pharma|LOGIXPHARMA|R$ 568,21|R$ 573,95
    
    `),
  },
  {
    id: "hormonais",
    label: "Hormonais",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Hormonais?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Tratamentos hormonais, tireoide, anticoncepcionais e terapias específicas com prescrição.",
    items: parsePbmLines(`
Synthroid Levotiroxina Sódica 50mcg 30 Cápsulas|Abbott|Abbott - Abrace a Vida|R$ 45,48|R$ 46,98
Synthroid Levotiroxina Sódica 75mcg 30 Cápsulas|Abbott|Abbott - Abrace a Vida|R$ 50,94|R$ 52,63
Synthroid Levotiroxina Sódica 100mcg 30 Cápsulas|Abbott|Abbott - Abrace a Vida|R$ 52,75|R$ 54,49
Synthroid Levotiroxina Sódica 88mcg 30 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 51,86|R$ 53,57
Synthroid Levotiroxina Sódica 25mcg 30 Cápsulas|Abbott|Abbott - Abrace a Vida|R$ 40,10|R$ 41,43
Synthroid Levotiroxina Sódica 150mcg 30 Cápsulas|Abbott|Abbott - Abrace a Vida|R$ 62,36|R$ 64,41
Synthroid Levotiroxina Sódica 112mcg 30 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 55,18|R$ 57,00
Synthroid Levotiroxina Sódica 125mcg 30 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 57,86|R$ 59,77
Synthroid Levotiroxina Sódica 137mg 30 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 60,19|R$ 62,18
Nebido Undecilato De Testosterona 250mg/ml 4ml Solução Intramuscular|Bayer|CONEXAO COM VOCE|R$ 817,59|R$ 882,26
Diost Dienogeste 2mg 30 Comprimidos|Myralis|LOGIXPHARMA|R$ 44,90|R$ 70,67
Synthroid Levotiroxina Sódica 175mcg 30 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 68,57|R$ 70,83
Synthroid Levotiroxina Sódica 200mcg 30 Comprimidos|Abbott|Abbott - Abrace a Vida|R$ 75,50|R$ 77,99
Evenity 90mg/ml Amgen 2 Seringas Preenchidas 1,17ml|Amgen|LOGIXPHARMA|R$ 4.227,59|R$ 5.607,52
Femara 2,5mg Novartis 28 Comprimidos Revestidos|Novartis|VMS|R$ 1.300,90|R$ 1.306,50
    
    `),
  },
  {
    id: "oftalmicos",
    label: "Oftálmicos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Para%20Os%20Olhos?PS=48&map=c,specificationFilter_143,specificationFilter_179",
    description: "Colírios e tratamentos oftálmicos, incluindo glaucoma e lubrificação, conforme prescrição.",
    items: parsePbmLines(`
Patanol S Cloridrato De Olopatadina 2,22 mg/ml 2,5ml Solução Oftalmológica|Novartis|VMS|R$ 83,48|R$ 84,32
Dorzal Cloridrato De Dorzolamida 20mg/ml 5ml|Legrand Pharma|LOGIXPHARMA|R$ 86,45|R$ 87,32
Dorzal MT Cloridrato de Dorzolamida 20mg/ml + Maleato de Timolol 5mg/ml 5ml|Legrand Pharma|LOGIXPHARMA|R$ 123,12|R$ 124,36
Colírio Azorga Brinzolamida 10mg/ml + Maleato de Timolol 5mg/ml 6ml|Novartis|VMS|R$ 136,43|R$ 137,81
Lumigan RC Bimatoprosta 0,1mg/ml 3ml Solução Estéril|Allergan|Programas Comerciais Abbvie|R$ 170,30|R$ 172,52
Colírio Drenatan Latanoprosta 50mcg/ml 2,5ml|Legrand Pharma|LOGIXPHARMA|R$ 184,67|R$ 186,54
Ganfort Bimatoprosta 0,3mg/ml + Timolol 5mg/ml 3ml Solução Oftálmica|Allergan|Programas Comerciais Abbvie|R$ 172,84|R$ 175,08
Alphagan-Z Tartarato De Brimonidina 1mg/ml 5ml Solução Oftálmica Estéril|Allergan|Programas Comerciais Abbvie|R$ 73,89|R$ 74,85
Restasis Ciclosporina 0,5mg/ml 30 Flaconetes 0,4ml Emulsão|Allergan|Programas Comerciais Abbvie|R$ 308,35|R$ 312,38
Xalatan Latanoprosta 50mcg/ml 2,5ml Solução Oftálmica|Viatris|LOGIXPHARMA|R$ 248,76|R$ 259,25
Timoptol XE Maleato De Timolol 5mg/ml 5ml Solução Oftálmica Gel|Mundipharma|PROGRAMA CUIDAR - MUNDIPHARMA|R$ 68,99|R$ 84,91
Xalacom Latanoprosta 50mcg/ml + Maleato de Timolol 5mg/ml 2,5ml Gotas|Viatris|LOGIXPHARMA|R$ 279,50|R$ 291,28
Ganfort UD Bimatoprosta 0,3mg/ml + Timolol 5mg/ml 30 Flaconetes de 0,4ml Solução Oftálmica|Allergan|Programas Comerciais Abbvie|R$ 242,68|R$ 245,13
Colírio Simbrinza Brinzolamida 10mg/ml + Tartarato de Brimonidina 2mg/ml 8ml|Novartis|VMS|R$ 166,54|R$ 168,22
Latonan Latanoprosta 0,05mg/ml + Timolol 5mg/ml 2,5ml Solução Oftálmica|Legrand Pharma|LOGIXPHARMA|R$ 223,67|R$ 225,93
Colírio Ganfort Bimatoprosta 0,3mg/ml + Maleato de Timolol 5mg/ml 5ml|Allergan|Programas Comerciais Abbvie|R$ 288,11|R$ 291,86
Travatan Travoprosta 0,04mg/mL 5ml|Novartis|VMS|R$ 389,95|R$ 393,89
Colírio Lumigan RC Bimatoprosta 0,1mg/ml 5ml|Allergan|Programas Comerciais Abbvie|R$ 283,77|R$ 287,46
Combigan Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 10ml Gotas|Allergan|Programas Comerciais Abbvie|R$ 255,28|R$ 258,61
Combigan Tartarato de Brimonidina 2mg/ml + Maleato de Timolol 5mg/ml 5ml solução|Allergan|Programas Comerciais Abbvie|R$ 162,14|R$ 164,24
Cosopt Dorzolamida 2% + Maleato de Timolol 0,5% 10ml Solução Oftálmica|Mundipharma|PROGRAMA CUIDAR - MUNDIPHARMA|R$ 393,30|R$ 397,27
Alphagan Tartarato De Brimonidina 2mg/ml 5ml Solução Oftálmica|Allergan|Programas Comerciais Abbvie|R$ 141,01|R$ 142,82
Travatan Travoprosta 0,04mg/ml 2,5ml Frasco Conta-Gotas Solução Oftálmica|Novartis|VMS|R$ 195,00|R$ 196,97
Alphagan P Tartarato De Brimonidina 1,5mg/ml 5ml Solução Oftálmica Estéril|Allergan|Programas Comerciais Abbvie|R$ 141,39|R$ 142,82
    
    `),
  },
  {
    id: "antidiabeticos",
    label: "Antidiabéticos",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Antidiab%C3%A9ticos?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Tratamentos para diabetes e controle glicêmico, com validação de CPF, prescrição e estoque.",
    items: parsePbmLines(`
Ozempic Semaglutida 1mg 1 Sistema de Aplicação|Novo Nordisk|Novo Dia|Sob consulta|
Rybelsus Semaglutida 7mg 30 Comprimidos|Novo Nordisk|Novo Dia|Sob consulta|
Jardiance Empagliflozina 25mg 30 Comprimidos|Boehringer|Abraçar a Vida - Boehringer|Sob consulta|
Forxiga Dapagliflozina 10mg 30 Comprimidos|AstraZeneca|Programa FazBem|Sob consulta|
Xigduo XR Dapagliflozina + Metformina 10mg/1000mg 30 Comprimidos|AstraZeneca|Programa FazBem|Sob consulta|
Trayenta Linagliptina 5mg 30 Comprimidos|Boehringer|Abraçar a Vida - Boehringer|Sob consulta|
Galvus Met Vildagliptina + Metformina 50mg/1000mg 56 Comprimidos|Novartis|Vale Mais Saúde|Sob consulta|
Glifage XR Metformina 500mg 30 Comprimidos|Merck|Programa parceiro|Sob consulta|
    `),
  },
  {
    id: "saude-capilar",
    label: "Saúde capilar",
    source: "https://www.drogariasaopaulo.com.br/medicamentos/Desconto%20de%20Laborat%C3%B3rio/Antiqueda%20Capilar?PS=48&map=c,specificationFilter_143,specificationFilter_180",
    description: "Produtos para queda capilar e fortalecimento dos fios, com campanhas de laboratório e recorrência.",
    items: parsePbmLines(`
Allovita Minoxidil 50mg/ml 50ml Solução Capilar Spray|Legrand Pharma|LOGIXPHARMA|R$ 57,21|R$ 63,60
Allovita Minoxidil 50mg/ml 50ml Solução Capilar Spray 2 Unidades|Legrand Pharma|LOGIXPHARMA|R$ 89,09|R$ 94,57
Pielus MX Minoxidil 50mg/ml 100ml|Mantecorp Skincare|LOGIXPHARMA|R$ 103,94|R$ 112,55
Pant 90 Cápsulas|Biolab|Saúde em Evolução|Sob consulta|
Exímia Fortalize Kera D 30 Cápsulas|Mantecorp Farmasa|Mantecorp Saúde|Sob consulta|
Lavitan Cabelos e Unhas 60 Comprimidos|Cimed|Programa parceiro|R$ 29,90|R$ 39,90
    `),
  },
);

function pbmPartnerNames() {
  const partnerNames = [
    ...pbmPrograms,
    ...pbmTreatmentGroups.flatMap((group) =>
      group.items.flatMap((item) => [item.brand, item.program]).filter(Boolean),
    ),
  ];
  const uniquePartners = new Map();
  partnerNames.forEach((name) => {
    const key = normalizeText(name);
    if (!uniquePartners.has(key)) uniquePartners.set(key, name);
  });
  return [...uniquePartners.values()].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

const pbmPartnerPrograms = [
  { lab: "Allergan", program: "Viver +", logo: "Viver+", color: "#164b9b" },
  { lab: "Novo Nordisk", program: "Novo Dia", logo: "NovoDia", color: "#1f5a9a" },
  { lab: "Hypera", program: "Mantecorp Saúde", logo: "Mantecorp saúde", color: "#f27b22" },
  { lab: "L'Oréal", program: "Dermaclub", logo: "DERMACLUB", color: "#f3a4c8" },
  { lab: "Novartis", program: "Vale Mais Saúde", logo: "Vale mais saúde", color: "#f5821f" },
  { lab: "Aché", program: "Cuidados pela Vida", logo: "Cuidados pela vida", color: "#1a7ed0" },
  { lab: "AstraZeneca", program: "Programa Faz Bem", logo: "FazBem", color: "#8f2ca2" },
  { lab: "Biolab", program: "Saúde em Evolução", logo: "Saúde em evolução", color: "#80bd2c" },
  { lab: "GSK", program: "Viver Mais", logo: "Viver Mais", color: "#f27c21" },
  { lab: "Bioderma", program: "My Naos Club", logo: "MyNAOS Club", color: "#432b7d" },
  { lab: "Viatris", program: "Secuda", logo: "SECUIDA", color: "#7f4ba5" },
  { lab: "Boehringer", program: "Abraçar a Vida", logo: "Abraçar a Vida", color: "#00a4a6" },
  { lab: "Knight", program: "Caminhando Juntos", logo: "Caminhando Juntos", color: "#f08422" },
  { lab: "Lilly", program: "Melhor para Você", logo: "Lilly", color: "#e53935" },
  { lab: "EMS", program: "EMS Saúde", logo: "EMS Saúde", color: "#0072bc" },
  { lab: "Chiesi", program: "Programa Acessar", logo: "Acessar", color: "#4b246c" },
  { lab: "MSD", program: "Receita de Vida", logo: "Receita de Vida", color: "#7fbe31" },
  { lab: "União Química", program: "União com Você", logo: "União com Você", color: "#2368a7" },
  { lab: "Abbott", program: "Abrace a Vida", logo: "Abbott", color: "#009cde" },
  { lab: "Mundipharma", program: "Programa Cuidar", logo: "Cuidar", color: "#0f6f4b" },
  { lab: "Diffucap", program: "Diffucare", logo: "Diffucare", color: "#0f6fbd" },
  { lab: "Zion", program: "Endogen - Cann Doc", logo: "Zion", color: "#26362f" },
  { lab: "Sanofi", program: "Programa de Benefícios", logo: "Sanofi", color: "#5a4db2" },
];

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

function selectedVariantForProduct(product) {
  const variants = productVariantOptions(product);
  if (!variants.length) return null;

  const savedId = state.selectedVariants[product.id];
  return (
    variants.find((variant) => variant.id === savedId) ||
    variants.find((variant) => normalizeText(variant.detail) === normalizeText(product.detail)) ||
    variants[0]
  );
}

function productPageQuantityKey(productId, itemId) {
  return `${productId}:${itemId}`;
}

function productPageQuantity(productId, itemId) {
  const key = productPageQuantityKey(productId, itemId);
  return Math.max(1, Math.min(99, Number(state.productPageQuantities[key] || 1)));
}

function variantSelectorLabel(variant) {
  const label = variant.label || variant.detail || "Opcao";
  const comprimidos = String(label).match(/(\d+)\s*comprim/i);
  return comprimidos ? `${comprimidos[1]} Comps` : label;
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
const DEFAULT_MEDICINE_IMAGE = "assets/products/medicine-placeholder.svg";
const LEGACY_PRODUCT_PLACEHOLDERS = new Set([
  "assets/products/prescription-box.svg",
  "assets/products/pbm-generic-box-green.svg",
  "assets/products/pbm-generic-box-orange.svg",
]);

function productImageSrc(image) {
  const source = image || DEFAULT_MEDICINE_IMAGE;
  return LEGACY_PRODUCT_PLACEHOLDERS.has(source) ? DEFAULT_MEDICINE_IMAGE : source;
}

function productImageFallbackAttribute() {
  return `onerror="this.onerror=null;this.src='${DEFAULT_MEDICINE_IMAGE}'"`;
}

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

const PRESCRIPTION_MEDICINE_WARNING =
  "Venda sob prescrição médica. Seu uso pode trazer riscos. Procure um médico ou um farmacêutico. Leia a bula. Medicamentos podem causar efeitos indesejados. Evite a automedicação: informe-se com o farmacêutico.";

const medicineDetailOverrides = {
  dorflex: {
    leafletUrl: "https://www.dorflex.com.br/dam/jcr%3A2bef930c-3ee0-4876-9a42-ac3a13c71699/bula_comprimidos-1.pdf",
    mechanism: "A associação atua no alívio da dor e da tensão muscular conforme ação dos princípios ativos descritos em bula.",
    indication: "Indicado para alívio de dores associadas a contraturas musculares, incluindo dor de cabeça tensional, conforme bula.",
    contraindication: "Não utilizar em caso de alergia aos componentes ou contraindicações descritas na bula. Pessoas com condições de saúde específicas devem consultar médico ou farmacêutico.",
    howToTake: "Uso oral. Tomar o comprimido com água, sem partir ou mastigar, seguindo a posologia da bula da apresentação escolhida ou a orientação do médico/farmacêutico.",
    instructions: "Não associe com outros analgésicos, relaxantes musculares ou bebidas alcoólicas sem orientação. Se a dor persistir, piorar ou vier com outros sintomas, procure atendimento antes de continuar usando.",
    adverseReactions: "Podem ocorrer reações alérgicas, sonolência, tontura, desconfortos gastrointestinais e outros efeitos indesejados descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Analgésico e relaxante muscular",
    lifeStage: "Adultos; uso pediátrico somente conforme bula e orientação profissional",
    bodyPart: "Sistema musculoesquelético / dor",
    conditions: "Dores musculares, contraturas e cefaleia tensional",
    administration: "Uso oral",
    medicineType: "Referência",
    prescriptionRequired: false,
  },
  tylenol: {
    leafletUrl: "https://assets.ctfassets.net/yyofp6qm4inx/7Fli1sanJsElZO0AnxZu6N/fb734517541ff4d2d186f02e387947a8/Bula_Tylenol-500mg-e-750mg.pdf",
    mechanism: "O paracetamol atua principalmente no sistema nervoso central, auxiliando no controle da dor e da febre conforme bula.",
    indication: "Indicado para alívio temporário de dores leves a moderadas e redução da febre, conforme apresentação e bula.",
    contraindication: "Contraindicado para pessoas com alergia ao paracetamol. Em doença hepática, uso de álcool ou uso de outros medicamentos, consultar orientação profissional.",
    howToTake: "Uso oral. Tomar com água, respeitando a concentração escolhida e o intervalo indicado na bula. Crianças devem usar somente apresentação e dose compatíveis com idade/peso.",
    instructions: "Não use junto com outro medicamento que contenha paracetamol sem conferir a composição. Evite álcool durante o uso e procure orientação se febre ou dor persistirem.",
    adverseReactions: "Podem ocorrer reações alérgicas, alterações de pele, desconfortos gastrointestinais e riscos hepáticos em uso inadequado.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Analgésico e antitérmico",
    lifeStage: "Adultos e crianças conforme idade, peso e apresentação",
    bodyPart: "Dor e febre / sistema nervoso central",
    conditions: "Dor e febre",
    administration: "Uso oral",
    medicineType: "Referência",
    prescriptionRequired: false,
  },
  benegrip: {
    leafletUrl: "https://www.benegrip.com.br/bula-benegrip/",
    mechanism: "Combina ativos para auxiliar no controle de sintomas gripais conforme a composição da apresentação escolhida.",
    indication: "Indicado para sintomas de gripes e resfriados conforme bula e avaliação do perfil do cliente.",
    contraindication: "Não utilizar em caso de alergia aos componentes ou contraindicações da bula. Atenção especial para gestantes, lactantes, crianças, hipertensos e pessoas com doenças crônicas.",
    howToTake: "Uso oral. Tomar com água conforme a apresentação selecionada, respeitando o intervalo e a duração de uso orientados na bula ou pelo farmacêutico.",
    instructions: "Não combine com outros antigripais, analgésicos ou medicamentos para gripe sem conferir os princípios ativos. Pode causar sonolência em algumas pessoas; tenha cuidado ao dirigir ou operar máquinas.",
    adverseReactions: "Podem ocorrer sonolência, desconfortos gastrointestinais, reações alérgicas e outros efeitos descritos na bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Antigripal",
    lifeStage: "Adultos; outras idades conforme bula da apresentação",
    bodyPart: "Sistema respiratório",
    conditions: "Sintomas de gripes e resfriados",
    administration: "Uso oral",
    medicineType: "Similar / medicamento de marca",
    prescriptionRequired: false,
  },
  buscopan: {
    mechanism: "Atua no alívio de espasmos e dores abdominais conforme ação dos princípios ativos descritos na bula.",
    indication: "Indicado para cólicas e dores abdominais conforme bula e avaliação do cliente.",
    contraindication: "Contraindicado em alergia aos componentes e nas condições descritas em bula. Em dor persistente, procurar atendimento.",
    howToTake: "Uso oral. Tomar com água, conforme a apresentação e posologia indicadas em bula ou orientação profissional.",
    instructions: "Não use para dor abdominal intensa, dor persistente, febre, vômitos ou suspeita de condição aguda sem avaliação. Informe ao farmacêutico outros medicamentos em uso.",
    adverseReactions: "Podem ocorrer reações alérgicas, boca seca, tontura, desconfortos e outros efeitos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Antiespasmódico e analgésico",
    lifeStage: "Adultos e adolescentes conforme bula",
    bodyPart: "Trato gastrointestinal",
    conditions: "Cólicas e dores abdominais",
    administration: "Uso oral",
    medicineType: "Referência",
    prescriptionRequired: false,
  },
  neosaldina: {
    mechanism: "Associação analgésica que auxilia no alívio da dor conforme ação dos ativos descritos em bula.",
    indication: "Indicada para dores de cabeça e dores leves a moderadas conforme bula.",
    contraindication: "Não usar em alergia aos componentes ou contraindicações descritas em bula. Atenção a uso concomitante com outros analgésicos.",
    howToTake: "Uso oral. Tomar com água, respeitando a posologia da bula e evitando uso contínuo sem orientação.",
    instructions: "Evite associar com outros analgésicos sem conferir composição. Se a dor de cabeça for frequente, muito forte ou diferente do habitual, procure atendimento.",
    adverseReactions: "Podem ocorrer reações alérgicas, tontura, desconfortos gastrointestinais e outros efeitos indesejados.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Analgésico",
    lifeStage: "Adultos; outras idades conforme bula",
    bodyPart: "Dor / sistema nervoso central",
    conditions: "Dor de cabeça e dores em geral",
    administration: "Uso oral",
    medicineType: "Referência",
    prescriptionRequired: false,
  },
  "novalgina-1g": {
    mechanism: "A dipirona atua como analgésico e antitérmico, auxiliando no controle da dor e da febre conforme bula.",
    indication: "Indicada para dor e febre conforme apresentação e orientação de uso.",
    contraindication: "Não usar em alergia à dipirona/pirazolonas ou contraindicações descritas em bula. Atenção a histórico de reações alérgicas.",
    howToTake: "Uso oral. Tomar com água, conforme a apresentação escolhida e a posologia da bula. Em crianças, confirmar dose por peso e idade.",
    instructions: "Não ultrapasse o limite diário da bula. Procure orientação se febre persistir, se houver dor intensa ou se já usa outros analgésicos/antitérmicos.",
    adverseReactions: "Podem ocorrer reações alérgicas, queda de pressão, alterações sanguíneas raras e outros efeitos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Analgésico e antitérmico",
    lifeStage: "Adultos e crianças conforme apresentação e peso",
    bodyPart: "Dor e febre",
    conditions: "Dor e febre",
    administration: "Uso oral",
    medicineType: "Referência",
    prescriptionRequired: false,
  },
  "allegra-120": {
    mechanism: "A fexofenadina é um antialérgico que auxilia no controle de sintomas alérgicos conforme bula.",
    indication: "Indicada para sintomas de rinite alérgica e manifestações alérgicas conforme apresentação.",
    contraindication: "Não utilizar em caso de alergia à fexofenadina ou a componentes da fórmula.",
    howToTake: "Uso oral. Tomar com água, respeitando a apresentação e o intervalo indicados em bula. Evite tomar junto com sucos de fruta se a bula orientar separação.",
    instructions: "Confira a idade mínima da apresentação. Se os sintomas não melhorarem, piorarem ou vierem com falta de ar/inchaço, procure atendimento.",
    adverseReactions: "Podem ocorrer dor de cabeça, sonolência, náusea, tontura e outros efeitos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Antialérgico / anti-histamínico",
    lifeStage: "Adultos e crianças conforme apresentação",
    bodyPart: "Sistema respiratório e pele",
    conditions: "Rinite alérgica, urticária e sintomas alérgicos",
    administration: "Uso oral",
    medicineType: "Referência",
    prescriptionRequired: false,
  },
  "luftal-gel": {
    mechanism: "A simeticona auxilia na redução da tensão superficial de bolhas de gases no trato gastrointestinal, conforme bula.",
    indication: "Indicada para gases e desconforto abdominal associado ao acúmulo de gases.",
    contraindication: "Não usar em alergia à simeticona ou componentes. Dor intensa/persistente exige avaliação profissional.",
    howToTake: "Uso oral. Tomar conforme apresentação escolhida, geralmente após orientação da bula para horário e quantidade.",
    instructions: "Se houver dor abdominal intensa, vômitos, febre, prisão de ventre importante ou sintomas persistentes, não continue apenas com automedicação.",
    adverseReactions: "Efeitos indesejados são incomuns, mas podem ocorrer reações de sensibilidade e outros eventos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Antiflatulento",
    lifeStage: "Adultos e crianças conforme apresentação",
    bodyPart: "Trato gastrointestinal",
    conditions: "Gases e desconforto abdominal",
    administration: "Uso oral",
    medicineType: "Referência",
    prescriptionRequired: false,
  },
  cimegripe: {
    mechanism: "Associação antigripal que auxilia no alívio de sintomas conforme composição da apresentação escolhida.",
    indication: "Indicado para sintomas de gripes e resfriados conforme bula.",
    contraindication: "Não usar em alergia aos componentes ou contraindicações de bula. Atenção a doenças crônicas, gestação e uso de outros medicamentos.",
    howToTake: "Uso oral. Tomar com água, seguindo a posologia da apresentação escolhida e respeitando o tempo máximo de uso da bula.",
    instructions: "Evite associar com outros antigripais, paracetamol, dipirona ou descongestionantes sem conferência da composição. Hipertensos, gestantes e pessoas com doenças crônicas devem consultar a equipe.",
    adverseReactions: "Podem ocorrer sonolência, tontura, desconfortos, reações alérgicas e outros efeitos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Antigripal",
    lifeStage: "Adultos; demais idades conforme bula",
    bodyPart: "Sistema respiratório",
    conditions: "Sintomas gripais e resfriado",
    administration: "Uso oral",
    medicineType: "Similar / medicamento de marca",
    prescriptionRequired: false,
  },
  "eno-laranja": {
    mechanism: "Os sais antiácidos ajudam a neutralizar a acidez gástrica conforme informações da embalagem/bula.",
    indication: "Indicado para azia, má digestão e desconforto associado à acidez, conforme embalagem.",
    contraindication: "Não usar em alergia aos componentes. Pessoas com restrição de sódio, hipertensão, doença renal ou dieta controlada devem buscar orientação.",
    howToTake: "Uso oral após preparo. Dissolver a quantidade indicada em água, aguardar a efervescência e ingerir conforme instruções da embalagem.",
    instructions: "Não use repetidamente por vários dias sem orientação. Pessoas com restrição de sódio, pressão alta, doença renal ou uso de medicamentos contínuos devem consultar a equipe antes.",
    adverseReactions: "Podem ocorrer desconfortos gastrointestinais, reações de sensibilidade e eventos descritos na embalagem/bula.",
    classification: "Produto isento de prescrição - validar regularização",
    drugClass: "Antiácido",
    lifeStage: "Adultos; outras idades conforme embalagem",
    bodyPart: "Estômago / trato gastrointestinal",
    conditions: "Azia e má digestão",
    administration: "Uso oral após diluição em água",
    medicineType: "OTC / MIP",
    prescriptionRequired: false,
  },
};

Object.assign(medicineDetailOverrides, {
  "dipirona-generica": {
    mechanism: "Atua como analgésico e antitérmico, auxiliando no controle de dor e febre conforme bula.",
    indication: "Indicada para dor e febre conforme apresentação, idade e orientação profissional.",
    contraindication: "Não usar em caso de alergia à dipirona/pirazolonas ou contraindicações descritas na bula.",
    howToTake: "Uso oral. Seguir a posologia da apresentação escolhida e evitar associações sem conferência de composição.",
    instructions: "Procure orientação se febre persistir, se houver reação alérgica, queda de pressão ou uso de outros analgésicos.",
    adverseReactions: "Podem ocorrer reações alérgicas, queda de pressão, alterações sanguíneas raras e outros efeitos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Analgésico e antitérmico",
    lifeStage: "Adultos e crianças conforme apresentação, idade e peso",
    bodyPart: "Dor e febre",
    conditions: "Dor, febre e mal-estar",
    administration: "Uso oral",
    medicineType: "Genérico",
    prescriptionRequired: false,
  },
  "losartana-generica": {
    mechanism: "Age no sistema renina-angiotensina, auxiliando no controle da pressão arterial conforme prescrição.",
    indication: "Indicada para hipertensão e outras condições cardiovasculares conforme avaliação médica.",
    contraindication: "Não usar em alergia aos componentes, gestação ou contraindicações descritas em bula.",
    howToTake: "Uso oral contínuo. Tomar conforme prescrição, no horário orientado, sem interromper por conta própria.",
    instructions: "Acompanhar pressão, exames e uso de outros anti-hipertensivos. Informe tontura, mal-estar ou suspeita de gravidez.",
    adverseReactions: "Podem ocorrer tontura, queda de pressão, alterações laboratoriais e outros efeitos descritos em bula.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Anti-hipertensivo / bloqueador do receptor de angiotensina",
    lifeStage: "Adultos; outras idades somente conforme prescrição",
    bodyPart: "Sistema cardiovascular",
    conditions: "Hipertensão arterial e proteção cardiovascular conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico",
    prescriptionRequired: true,
  },
  "amoxicilina-500": {
    mechanism: "Antibiótico penicilínico que atua contra bactérias sensíveis conforme avaliação médica.",
    indication: "Indicada para infecções bacterianas específicas, sempre conforme prescrição.",
    contraindication: "Não usar em alergia a penicilinas, cefalosporinas ou contraindicações da bula.",
    howToTake: "Uso oral. Tomar exatamente nos horários e pelo tempo prescritos, mesmo que os sintomas melhorem.",
    instructions: "Não usar sobras, não compartilhar e não interromper o tratamento antes do prazo prescrito.",
    adverseReactions: "Podem ocorrer náuseas, diarreia, candidíase, reações alérgicas e outros efeitos descritos em bula.",
    classification: "Tarja vermelha - antibiótico com retenção de receita",
    drugClass: "Antibiótico penicilínico",
    lifeStage: "Adultos e crianças conforme apresentação e prescrição",
    bodyPart: "Infecções bacterianas em diferentes sistemas",
    conditions: "Infecções bacterianas sensíveis",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: true,
  },
  "sertralina-50": {
    mechanism: "Inibidor seletivo da recaptação de serotonina, usado conforme avaliação médica.",
    indication: "Indicada para condições de saúde mental conforme diagnóstico e prescrição.",
    contraindication: "Não usar sem prescrição, em alergia aos componentes ou associações contraindicadas em bula.",
    howToTake: "Uso oral contínuo. Tomar conforme prescrição e não interromper abruptamente sem orientação.",
    instructions: "Acompanhar início do tratamento, efeitos de humor, sono e interações. Procure orientação em piora clínica.",
    adverseReactions: "Podem ocorrer náuseas, alterações de sono, tontura, boca seca, alterações sexuais e outros efeitos.",
    classification: "Tarja vermelha - venda sob prescrição com controle conforme regra aplicável",
    drugClass: "Antidepressivo ISRS",
    lifeStage: "Adultos; outras idades somente conforme prescrição",
    bodyPart: "Sistema nervoso central",
    conditions: "Condições de saúde mental conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: true,
  },
  "complexo-b-injetavel": {
    mechanism: "Fornece vitaminas do complexo B conforme composição da ampola e indicação profissional.",
    indication: "Indicado quando houver necessidade clínica ou prescrição/orientação para reposição injetável.",
    contraindication: "Não aplicar em alergia aos componentes ou sem avaliação de indicação e segurança.",
    howToTake: "Uso injetável. Aplicação apenas por profissional habilitado e conforme prescrição/orientação.",
    instructions: "Conferir receita quando aplicável, via de administração, lote, validade e condições do cliente antes da aplicação.",
    adverseReactions: "Podem ocorrer dor local, vermelhidão, reação alérgica e outros efeitos descritos em bula.",
    classification: "Injetável - validar tarja e prescrição da apresentação",
    drugClass: "Vitaminas / reposição injetável",
    lifeStage: "Adultos; outras idades conforme prescrição",
    bodyPart: "Metabolismo e sistema nervoso conforme indicação",
    conditions: "Reposição vitamínica conforme avaliação",
    administration: "Uso intramuscular ou conforme bula/prescrição",
    medicineType: "Similar / genérico conforme laboratório",
    prescriptionRequired: true,
  },
  "vick-pyrena": {
    mechanism: "Auxilia no controle de dor e febre conforme princípio ativo e apresentação escolhida.",
    indication: "Indicado para sintomas leves de resfriado, dor e febre conforme bula.",
    contraindication: "Não usar em alergia aos componentes, doença hepática relevante ou associação indevida com paracetamol.",
    howToTake: "Preparar conforme envelope/embalagem e respeitar intervalo e limite diário da bula.",
    instructions: "Não associar com outros produtos contendo paracetamol sem conferir a composição.",
    adverseReactions: "Podem ocorrer reações alérgicas, desconfortos gastrointestinais e outros efeitos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Analgésico e antitérmico para sintomas de resfriado",
    lifeStage: "Adultos; outras idades conforme bula",
    bodyPart: "Dor, febre e sintomas respiratórios leves",
    conditions: "Sintomas de resfriado conforme bula",
    administration: "Uso oral após preparo",
    medicineType: "Medicamento de marca",
    prescriptionRequired: false,
  },
  "ibuprofeno-400": {
    mechanism: "Anti-inflamatório não esteroidal que auxilia no controle de dor, febre e inflamação conforme bula.",
    indication: "Indicado para dor, febre e processos inflamatórios leves conforme apresentação e orientação.",
    contraindication: "Não usar em alergia a anti-inflamatórios, úlcera ativa, insuficiência renal/hepática grave ou contraindicações de bula.",
    howToTake: "Uso oral. Tomar conforme bula/orientação, preferencialmente com alimento quando indicado.",
    instructions: "Evite associar com outros anti-inflamatórios. Gestantes, idosos e pessoas com doença gástrica, renal ou cardíaca devem consultar a equipe.",
    adverseReactions: "Podem ocorrer desconforto gástrico, náuseas, tontura, reações alérgicas e outros efeitos.",
    classification: "Sem tarja / MIP - validar apresentação e concentração",
    drugClass: "Anti-inflamatório não esteroidal, analgésico e antitérmico",
    lifeStage: "Adultos e adolescentes conforme apresentação; pediátrico por peso/idade conforme bula",
    bodyPart: "Dor, febre e inflamação",
    conditions: "Dores leves a moderadas, febre e inflamações leves",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: false,
  },
  "omeprazol-20": {
    mechanism: "Reduz a produção de ácido no estômago, auxiliando no controle de sintomas gástricos conforme indicação.",
    indication: "Indicado para refluxo, azia e outras condições gástricas conforme bula/prescrição.",
    contraindication: "Não usar em alergia ao omeprazol ou componentes; sintomas persistentes exigem avaliação.",
    howToTake: "Uso oral. Tomar conforme bula ou prescrição, respeitando horário e duração recomendados.",
    instructions: "Procure orientação se houver perda de peso, vômitos persistentes, sangue, dor intensa ou uso prolongado.",
    adverseReactions: "Podem ocorrer dor de cabeça, náuseas, gases, diarreia/constipação e outros efeitos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Inibidor da bomba de prótons",
    lifeStage: "Adultos; outras idades conforme prescrição",
    bodyPart: "Estômago / trato gastrointestinal",
    conditions: "Azia, refluxo e gastrite conforme orientação",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: false,
  },
  "loratadina-10": {
    mechanism: "Anti-histamínico que auxilia no controle de sintomas alérgicos conforme bula.",
    indication: "Indicada para rinite alérgica, urticária e sintomas de alergia conforme apresentação.",
    contraindication: "Não usar em alergia à loratadina ou componentes da fórmula.",
    howToTake: "Uso oral. Tomar conforme bula e respeitar a idade mínima da apresentação.",
    instructions: "Consultar orientação em gestação, lactação, doença hepática ou sintomas persistentes.",
    adverseReactions: "Podem ocorrer sonolência, dor de cabeça, boca seca, náusea e outros efeitos descritos em bula.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Antialérgico / anti-histamínico",
    lifeStage: "Adultos e crianças conforme apresentação",
    bodyPart: "Sistema respiratório e pele",
    conditions: "Rinite alérgica, urticária e sintomas alérgicos",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: false,
  },
  "cetirizina-10": {
    mechanism: "Anti-histamínico que bloqueia efeitos da histamina associados a sintomas alérgicos.",
    indication: "Indicada para rinite, urticária e sintomas alérgicos conforme bula.",
    contraindication: "Não usar em alergia aos componentes ou contraindicações descritas na bula.",
    howToTake: "Uso oral. Tomar conforme bula e observar possíveis efeitos de sonolência.",
    instructions: "Evite álcool e cautela ao dirigir se houver sonolência. Consulte orientação em doença renal ou uso de sedativos.",
    adverseReactions: "Podem ocorrer sonolência, fadiga, boca seca, dor de cabeça e outros efeitos.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Antialérgico / anti-histamínico",
    lifeStage: "Adultos e crianças conforme apresentação",
    bodyPart: "Sistema respiratório e pele",
    conditions: "Rinite alérgica, urticária e alergias",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: false,
  },
  "acetilcisteina-600": {
    mechanism: "Mucolítico que ajuda a fluidificar secreções respiratórias conforme bula.",
    indication: "Indicada para secreção/catarro em condições respiratórias conforme avaliação e bula.",
    contraindication: "Não usar em alergia ao componente. Pessoas com asma ou úlcera devem buscar orientação.",
    howToTake: "Uso oral. Preparar envelope ou tomar xarope conforme bula da apresentação escolhida.",
    instructions: "Procure orientação se houver falta de ar, febre persistente, sangue no escarro ou sintomas prolongados.",
    adverseReactions: "Podem ocorrer náuseas, vômitos, desconforto gástrico, reações alérgicas e outros efeitos.",
    classification: "Sem tarja / MIP - validar apresentação",
    drugClass: "Mucolítico / expectorante",
    lifeStage: "Adultos e crianças conforme apresentação",
    bodyPart: "Sistema respiratório",
    conditions: "Tosse com secreção e fluidificação de muco conforme bula",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: false,
  },
  "diclofenaco-50": {
    mechanism: "Anti-inflamatório não esteroidal que atua no controle de dor e inflamação conforme prescrição.",
    indication: "Indicado para dores e processos inflamatórios conforme avaliação médica.",
    contraindication: "Não usar em alergia a AINEs, úlcera ativa, sangramento, insuficiências graves ou contraindicações de bula.",
    howToTake: "Uso oral ou tópico conforme apresentação. Seguir dose e duração prescritas.",
    instructions: "Evite uso junto com outros anti-inflamatórios. Informe gastrite, pressão alta, doença renal/cardiovascular ou anticoagulantes.",
    adverseReactions: "Podem ocorrer dor gástrica, náusea, tontura, retenção de líquidos, reações alérgicas e outros efeitos.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Anti-inflamatório não esteroidal",
    lifeStage: "Adultos; outras idades conforme prescrição",
    bodyPart: "Dor e inflamação",
    conditions: "Dores inflamatórias conforme prescrição",
    administration: "Uso oral ou tópico conforme apresentação",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: true,
  },
  "nimesulida-100": {
    mechanism: "Anti-inflamatório não esteroidal que auxilia no controle de dor e inflamação conforme prescrição.",
    indication: "Indicada para processos dolorosos e inflamatórios conforme avaliação médica.",
    contraindication: "Não usar em doença hepática, alergia a AINEs, úlcera ativa ou contraindicações descritas em bula.",
    howToTake: "Uso oral. Usar pelo tempo prescrito e não prolongar sem reavaliação.",
    instructions: "Atenção a sintomas hepáticos, dor gástrica e interações. Gestantes e idosos precisam de avaliação específica.",
    adverseReactions: "Podem ocorrer náuseas, desconfortos gástricos, alterações hepáticas, tontura e outros efeitos.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Anti-inflamatório não esteroidal",
    lifeStage: "Adultos; outras idades conforme prescrição",
    bodyPart: "Dor e inflamação",
    conditions: "Dores e inflamações conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: true,
  },
  "metformina-850": {
    mechanism: "Auxilia no controle da glicose, principalmente reduzindo produção hepática de glicose e melhorando sensibilidade à insulina.",
    indication: "Indicada para diabetes tipo 2 e outras situações conforme prescrição e acompanhamento.",
    contraindication: "Não usar sem avaliação em insuficiência renal importante, acidose ou contraindicações da bula.",
    howToTake: "Uso oral contínuo. Tomar conforme prescrição, geralmente junto às refeições quando orientado.",
    instructions: "Acompanhar glicemia, função renal e sintomas gastrointestinais. Não interromper sem orientação.",
    adverseReactions: "Podem ocorrer náuseas, diarreia, desconforto abdominal, alteração de paladar e eventos raros descritos em bula.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Antidiabético oral",
    lifeStage: "Adultos; outras idades conforme prescrição",
    bodyPart: "Metabolismo / glicemia",
    conditions: "Diabetes tipo 2 conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico",
    prescriptionRequired: true,
  },
  "sinvastatina-20": {
    mechanism: "Estatina que reduz a síntese de colesterol no fígado conforme acompanhamento médico.",
    indication: "Indicada para controle de colesterol e redução de risco cardiovascular conforme prescrição.",
    contraindication: "Não usar em doença hepática ativa, gestação, lactação ou contraindicações descritas em bula.",
    howToTake: "Uso oral contínuo. Tomar conforme prescrição, respeitando horário recomendado.",
    instructions: "Informe dor muscular, fraqueza, urina escura ou uso de medicamentos que possam interagir.",
    adverseReactions: "Podem ocorrer dor muscular, alterações hepáticas, desconfortos gastrointestinais e outros efeitos.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Estatina / hipolipemiante",
    lifeStage: "Adultos; outras idades conforme prescrição",
    bodyPart: "Sistema cardiovascular / metabolismo lipídico",
    conditions: "Colesterol alto e prevenção cardiovascular conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico",
    prescriptionRequired: true,
  },
  "enalapril-10": {
    mechanism: "Inibidor da ECA que auxilia no controle da pressão arterial e função cardíaca conforme prescrição.",
    indication: "Indicado para hipertensão e condições cardiovasculares conforme avaliação médica.",
    contraindication: "Não usar em histórico de angioedema, gestação ou contraindicações de bula.",
    howToTake: "Uso oral contínuo. Tomar conforme prescrição e monitorar pressão.",
    instructions: "Informar tosse persistente, tontura, inchaço, alterações renais ou uso de diuréticos/potássio.",
    adverseReactions: "Podem ocorrer tosse seca, tontura, queda de pressão, alterações de potássio e outros efeitos.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Anti-hipertensivo / inibidor da ECA",
    lifeStage: "Adultos; outras idades conforme prescrição",
    bodyPart: "Sistema cardiovascular",
    conditions: "Hipertensão e condições cardíacas conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico",
    prescriptionRequired: true,
  },
  "hidroclorotiazida-25": {
    mechanism: "Diurético tiazídico que aumenta a eliminação de sódio e água, auxiliando no controle da pressão.",
    indication: "Indicada para hipertensão e retenção de líquidos conforme prescrição.",
    contraindication: "Não usar em alergia a sulfonamidas/tiazídicos ou contraindicações descritas em bula.",
    howToTake: "Uso oral contínuo. Tomar conforme prescrição e orientação de horário.",
    instructions: "Acompanhar pressão, hidratação, potássio/sódio e sintomas de tontura ou cãibras.",
    adverseReactions: "Podem ocorrer tontura, aumento da urina, alterações de eletrólitos, sensibilidade à luz e outros efeitos.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Diurético tiazídico / anti-hipertensivo",
    lifeStage: "Adultos; outras idades conforme prescrição",
    bodyPart: "Sistema cardiovascular / renal",
    conditions: "Hipertensão e edema conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico",
    prescriptionRequired: true,
  },
  "azitromicina-500": {
    mechanism: "Antibiótico macrolídeo que atua contra bactérias sensíveis conforme prescrição médica.",
    indication: "Indicada para infecções bacterianas específicas conforme avaliação médica.",
    contraindication: "Não usar em alergia a macrolídeos ou contraindicações de bula.",
    howToTake: "Uso oral. Tomar nos dias e horários prescritos, respeitando duração completa.",
    instructions: "Não usar sem receita, não compartilhar e informar alergias, arritmias, doença hepática ou uso de outros medicamentos.",
    adverseReactions: "Podem ocorrer diarreia, náuseas, dor abdominal, alterações hepáticas, reações alérgicas e outros efeitos.",
    classification: "Tarja vermelha - antibiótico com retenção de receita",
    drugClass: "Antibiótico macrolídeo",
    lifeStage: "Adultos e crianças conforme apresentação/prescrição",
    bodyPart: "Infecções bacterianas em diferentes sistemas",
    conditions: "Infecções bacterianas sensíveis",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: true,
  },
  "clonazepam-2": {
    mechanism: "Benzodiazepínico que atua no sistema nervoso central conforme prescrição especializada.",
    indication: "Indicado para condições neurológicas/psiquiátricas específicas conforme prescrição.",
    contraindication: "Não usar sem receita, em alergia, insuficiência respiratória grave ou contraindicações da bula.",
    howToTake: "Uso oral. Tomar somente conforme prescrição; não interromper abruptamente.",
    instructions: "Evitar álcool, dirigir ou operar máquinas se houver sedação. Pode causar dependência e exige acompanhamento.",
    adverseReactions: "Podem ocorrer sonolência, tontura, alteração de coordenação, memória, dependência e outros efeitos.",
    classification: "Tarja preta - medicamento sujeito a controle especial",
    drugClass: "Benzodiazepínico / anticonvulsivante-ansiolítico",
    lifeStage: "Adultos; outras idades conforme prescrição especializada",
    bodyPart: "Sistema nervoso central",
    conditions: "Condições neurológicas/psiquiátricas conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico / referência conforme laboratório",
    prescriptionRequired: true,
  },
  "salbutamol-aerossol": {
    mechanism: "Broncodilatador beta-2 agonista que ajuda a relaxar a musculatura das vias aéreas.",
    indication: "Indicado para alívio/controle de broncoespasmo conforme prescrição e orientação.",
    contraindication: "Não usar em alergia ao salbutamol ou componentes. Crises intensas exigem atendimento imediato.",
    howToTake: "Uso inalatório. Utilizar conforme prescrição e técnica correta do dispositivo.",
    instructions: "Se precisar usar com muita frequência, se não houver melhora ou se houver falta de ar importante, procurar atendimento.",
    adverseReactions: "Podem ocorrer tremor, taquicardia, palpitações, dor de cabeça, irritação na garganta e outros efeitos.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Broncodilatador",
    lifeStage: "Adultos e crianças conforme apresentação e prescrição",
    bodyPart: "Sistema respiratório",
    conditions: "Asma/broncoespasmo conforme prescrição",
    administration: "Uso inalatório ou oral conforme apresentação",
    medicineType: "Referência / similar conforme laboratório",
    prescriptionRequired: true,
  },
  "prednisona-20": {
    mechanism: "Corticoide com ação anti-inflamatória e imunomoduladora conforme prescrição.",
    indication: "Indicada para condições inflamatórias, alérgicas e outras situações conforme avaliação médica.",
    contraindication: "Não usar em alergia, infecções não controladas ou contraindicações descritas em bula sem avaliação.",
    howToTake: "Uso oral. Tomar conforme prescrição; tratamentos prolongados podem exigir retirada gradual.",
    instructions: "Informe diabetes, pressão alta, infecções, uso de anticoagulantes, vacinas recentes ou gestação.",
    adverseReactions: "Podem ocorrer aumento de apetite, alteração de glicemia/pressão, insônia, irritação gástrica e outros efeitos.",
    classification: "Tarja vermelha - venda sob prescrição",
    drugClass: "Corticoide sistêmico",
    lifeStage: "Adultos e crianças conforme prescrição",
    bodyPart: "Inflamação / sistema imunológico",
    conditions: "Inflamações, alergias e outras condições conforme prescrição",
    administration: "Uso oral",
    medicineType: "Genérico / similar conforme laboratório",
    prescriptionRequired: true,
  },
});

function productMedia(product, variant = "card") {
  const isDetail = variant === "detail";
  const mediaClass = isDetail ? "product-photo-frame detail-photo-frame" : "product-photo-frame";
  const image = productImageSrc(product.image);

  return `
    <div class="${mediaClass}">
      <img class="product-photo" src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" loading="lazy" ${productImageFallbackAttribute()} />
    </div>
  `;
}

function isTarjaOrPrescriptionMedicine(product) {
  if (!product?.medicine) return false;

  const override = medicineDetailOverrides[product.id] || {};
  const profile = product.medicine || {};
  const classificationText = normalizeText(
    [
      override.classification,
      profile.classification,
      product.keywords,
      product.tag,
      product.description,
    ].filter(Boolean).join(" "),
  );
  const markedAsNoTarja =
    classificationText.includes("sem tarja") ||
    classificationText.includes("mip") ||
    classificationText.includes("sem receita");
  const markedAsTarja =
    classificationText.includes("tarja vermelha") ||
    classificationText.includes("tarja preta") ||
    classificationText.includes("controlado") ||
    classificationText.includes("prescricao");
  const usesTarjaPlaceholder = [product.image, ...(product.gallery || [])]
    .filter(Boolean)
    .some((image) => image.includes("pbm-generic-box") || image.includes("prescription-box"));

  return Boolean(override.prescriptionRequired ?? profile.prescriptionRequired) ||
    usesTarjaPlaceholder ||
    (!markedAsNoTarja && markedAsTarja);
}

function productGalleryMarkup(product) {
  const imageCandidates = product.gallery?.length ? product.gallery : [product.image];
  const visibleImages = [...new Set(imageCandidates.map(productImageSrc))].filter(Boolean);
  const profile = product.medicine;
  const mainImage = visibleImages[0];
  const showGalleryInfo = profile && !isTarjaOrPrescriptionMedicine(product);
  const showThumbs = visibleImages.length > 1 || showGalleryInfo;
  const leafletUrl = profile ? medicineLeafletUrl(product, profile) : "";

  return `
    <div class="product-gallery">
      <div class="product-gallery-main">
        <div class="product-photo-frame detail-photo-frame">
          <img
            class="product-photo"
            data-gallery-main
            src="${escapeHtml(mainImage)}"
            alt="${escapeHtml(product.name)}"
            loading="lazy"
            ${productImageFallbackAttribute()}
          />
        </div>
      </div>
      ${showThumbs ? `
        <div class="product-gallery-thumbs" aria-label="Galeria do produto">
          ${visibleImages
            .map(
              (image, index) => `
                <button
                  type="button"
                  class="gallery-thumb ${index === 0 ? "is-active" : ""}"
                  data-gallery-image="${escapeHtml(image)}"
                  data-gallery-alt="${escapeHtml(`${product.name} ${index + 1}`)}"
                  aria-label="Ver foto ${index + 1} de ${escapeHtml(product.name)}"
                >
                  <img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)} ${index + 1}" loading="lazy" ${productImageFallbackAttribute()} />
                </button>
              `,
            )
            .join("")}
          ${showGalleryInfo ? `
            <a class="gallery-thumb gallery-thumb-info" href="${escapeHtml(leafletUrl)}" target="_blank" rel="noopener">Bula</a>
            <span class="gallery-thumb gallery-thumb-info">Estoque</span>
          ` : ""}
        </div>
      ` : ""}
    </div>
  `;
}

function productHighlightsMarkup(product) {
  const availabilityLabel = productAvailabilityLabel(product, product.stock || "Consultar estoque");
  const baseHighlights = product.medicine?.highlights || [
    "Retirada na loja ou entrega",
    "Cliente ON acumula pontos",
  ];
  const highlights = [
    ...(availabilityLabel ? [availabilityLabel] : []),
    ...baseHighlights.filter((item) => !isAvailabilityText(item)),
  ];

  return `
    <ul class="product-page-highlights">
      ${highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function medicineInfoValue(product, profile, key, fallback = "Consultar bula oficial e cadastro da loja.") {
  const override = medicineDetailOverrides[product.id] || {};
  return override[key] || profile[key] || fallback;
}

function medicineLeafletSearchTerm(product, profile = {}) {
  const override = medicineDetailOverrides[product.id] || {};
  return override.leafletSearchTerm || profile.leafletSearchTerm || product.name || profile.active || "";
}

function medicineLeafletUrl(product, profile) {
  const override = medicineDetailOverrides[product.id] || {};
  const directLeafletUrl = profile.leafletUrl || override.leafletUrl;
  if (directLeafletUrl) return directLeafletUrl;

  const searchTerm = medicineLeafletSearchTerm(product, profile);
  return searchTerm
    ? `https://consultas.anvisa.gov.br/#/bulario/q/?nomeProduto=${encodeURIComponent(searchTerm)}`
    : ANVISA_BULARIO_URL;
}

function medicineDetailRows(product, profile, selectedVariant = null) {
  const override = medicineDetailOverrides[product.id] || {};
  const prescriptionRequired = Boolean(profile.prescriptionRequired ?? override.prescriptionRequired);

  return [
    ["Marca", product.name],
    ["Classificação", override.classification || profile.classification || "Validar tarja no cadastro regulatório"],
    ["Classe do medicamento", override.drugClass || profile.drugClass || product.tag || "Medicamento"],
    ["Fases da vida", override.lifeStage || profile.lifeStage || "Validar idade minima conforme bula"],
    ["Parte do corpo", override.bodyPart || profile.bodyPart || "Consultar indicacao da bula"],
    ["Doenças e complicações", override.conditions || profile.conditions || "Consultar indicação da bula"],
    ["Forma de administração", override.administration || profile.administration || "Uso conforme bula"],
    ["Prescrição médica", prescriptionRequired ? "Sim" : "Não"],
    ["Tipo de medicamento", override.medicineType || profile.medicineType || "A confirmar no cadastro real"],
    ["Princípio ativo", profile.active || "Consultar bula oficial"],
    ["Fabricante", profile.manufacturer || "A confirmar"],
    ["Registro MS", profile.msRegister || "Consultar Bulario Anvisa"],
    ["Apresentação escolhida", selectedVariant?.detail || product.detail],
  ];
}

function medicineAccordionItem(title, text) {
  return `
    <details class="medicine-topic-item">
      <summary>
        <span>${escapeHtml(title)}</span>
        <strong aria-hidden="true">⌄</strong>
      </summary>
      <p>${escapeHtml(text)}</p>
    </details>
  `;
}

function medicineDetailsMarkup(product, selectedVariant = null) {
  const profile = product.medicine;
  if (!profile) return "";

  const override = medicineDetailOverrides[product.id] || {};
  const prescriptionRequired = Boolean(profile.prescriptionRequired ?? override.prescriptionRequired);
  const details = [
    ["Para que serve", profile.purpose || product.description],
    ["Qual é o princípio ativo dele", profile.active || "Consultar bula oficial."],
    ["Como age no corpo", medicineInfoValue(product, profile, "mechanism")],
    ["Como tomar o medicamento", medicineInfoValue(product, profile, "howToTake", profile.howToUse || "Tomar conforme a posologia da bula e orientação profissional.")],
    ["Instruções de uso", medicineInfoValue(product, profile, "instructions", profile.howToUse || "Utilizar conforme bula e orientação profissional.")],
    ["Indicação", medicineInfoValue(product, profile, "indication", profile.purpose || product.description)],
    ["Contraindicação", medicineInfoValue(product, profile, "contraindication")],
    ["Reações adversas", medicineInfoValue(product, profile, "adverseReactions")],
    ["Composição", profile.composition || "Consultar composição na bula oficial da apresentação selecionada."],
  ];
  const rows = medicineDetailRows(product, profile, selectedVariant);
  const leafletUrl = medicineLeafletUrl(product, profile);

  return `
    <section class="medicine-detail-section medicine-complete-section" aria-label="Dados completos do medicamento">
      <article class="medicine-description-card medicine-complete-card">
        <div class="medicine-section-head">
          <div>
            <span>Descrição do produto</span>
            <h2>Informações do medicamento</h2>
            <p>Abra os tópicos para consultar uso, cuidados e orientações essenciais antes da compra. As informações devem ser validadas com a bula oficial e a equipe farmacêutica.</p>
          </div>
          <a class="leaflet-download-button" href="${escapeHtml(leafletUrl)}" target="_blank" rel="noopener">
            ${svg("payment")}
            Baixar Bula
          </a>
        </div>

        ${prescriptionRequired ? `<div class="medicine-prescription-warning">${escapeHtml(PRESCRIPTION_MEDICINE_WARNING)}</div>` : ""}

        <div class="medicine-topic-grid medicine-topic-accordion">
          ${details
            .map(([title, text], index) => medicineAccordionItem(title, text, index))
            .join("")}
        </div>

        <div class="medicine-warning-box">
          <strong>Uso responsável</strong>
          <span>As informações deste protótipo não substituem orientação médica ou farmacêutica. Consulte a bula oficial e fale com a equipe da Drogaria Onório quando necessário.</span>
        </div>
      </article>

      <aside class="medicine-data-panel">
        <article class="medicine-data-card medicine-spec-card">
          <h3>Especificações</h3>
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
      </aside>
    </section>
  `;
}

function miniProductImage(productId, label) {
  const product = getProduct(productId);
  const image = productImageSrc(product?.image);
  const alt = label || product?.name || "Produto";

  return `<img class="mini-photo" src="${escapeHtml(image)}" alt="${escapeHtml(alt)}" loading="lazy" ${productImageFallbackAttribute()} />`;
}

function categoryScene(category) {
  const productImages = (category.products || []).map(productImageSrc);
  const productsMarkup = productImages
    .slice(0, 2)
    .map(
      (image, index) =>
        `<img class="scene-pack scene-pack-${index + 1}" src="${escapeHtml(image)}" alt="" loading="lazy" aria-hidden="true" ${productImageFallbackAttribute()} />`,
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
  const storeId =
    state.delivery === "home" && state.deliveryFulfillmentStoreId
      ? state.deliveryFulfillmentStoreId
      : state.selectedStore;
  return pickupStores.find((store) => store.id === storeId) || pickupStores[0];
}

function requiresPrescriptionBeforeCheckout(product) {
  if (!product) return false;

  const parent = product.parentId ? getProduct(product.parentId) : null;
  const profile = product.medicine || parent?.medicine || {};
  const override = medicineDetailOverrides[product.id] || medicineDetailOverrides[product.parentId] || {};
  const text = normalizeText(
    [
      product.name,
      product.detail,
      product.category,
      product.subcategory,
      product.keywords,
      product.tag,
      product.caution,
      product.description,
      profile.classification,
      profile.drugClass,
      override.classification,
      override.drugClass,
      override.conditions,
    ]
      .filter(Boolean)
      .join(" "),
  );

  return [
    "antibiotico",
    "antibioticos",
    "antimicrobiano",
    "controlado",
    "controlados",
    "tarja preta",
    "retencao receita",
    "retencao de receita",
    "benzodiazepinico",
    "psicotropico",
  ].some((term) => text.includes(term));
}

function checkoutPrescriptionItems(items = calculateCart().items) {
  return items.filter((item) => requiresPrescriptionBeforeCheckout(item));
}

function checkoutPrescriptionStore() {
  return getSelectedStore();
}

function prescriptionStatusIsValid(items = calculateCart().items) {
  const requiredItems = checkoutPrescriptionItems(items);
  if (!requiredItems.length) return true;

  const store = checkoutPrescriptionStore();
  return Boolean(
    state.prescriptionFileName &&
      state.prescriptionSent &&
      state.prescriptionStoreId === store.id,
  );
}

function checkoutPrescriptionWhatsappMessage(store, items) {
  const customerName = state.customer.fullName || state.customer.name || "Cliente Onorio";
  const customerCpf = maskCpfForDisplay(state.customer.cpf);
  const itemLines = items
    .map((item) => `- ${item.name} ${item.detail || ""} (${item.quantity} un.)`.trim())
    .join("\n");

  return [
    `Olá, ${store.name}!`,
    "Estou enviando a receita para conferência antes de finalizar meu pedido no site da Drogaria Onório.",
    `Cliente: ${customerName}`,
    `CPF: ${customerCpf}`,
    `Arquivo selecionado: ${state.prescriptionFileName || "receita anexada pelo cliente"}`,
    "Produtos que precisam de receita:",
    itemLines,
    "",
    "Vou anexar a receita nesta conversa para a equipe validar antes da separação.",
  ].join("\n");
}

function prescriptionCheckoutMarkup(items = calculateCart().items) {
  const requiredItems = checkoutPrescriptionItems(items);
  if (!requiredItems.length) return "";

  const store = checkoutPrescriptionStore();
  const hasFile = Boolean(state.prescriptionFileName);
  const sentToCurrentStore = state.prescriptionSent && state.prescriptionStoreId === store.id;
  const statusText = sentToCurrentStore
    ? `Receita enviada para conferência da ${store.name}.`
    : hasFile
      ? `Arquivo pronto para enviar ao WhatsApp da ${store.name}.`
      : "Anexe a receita antes de finalizar.";

  return `
    <section class="checkout-prescription-card ${sentToCurrentStore ? "is-sent" : ""}" data-prescription-panel>
      <div class="prescription-card-head">
        <span>Receita obrigatória</span>
        <h2>Antibióticos e controlados precisam de conferência</h2>
        <p>A equipe da ${escapeHtml(store.name)} precisa receber a receita pelo WhatsApp antes de liberar o pedido.</p>
      </div>
      <div class="prescription-item-list" aria-label="Produtos que exigem receita">
        ${requiredItems
          .map(
            (item) => `
              <div>
                <strong>${escapeHtml(item.name)}</strong>
                <span>${escapeHtml(item.detail)} · ${item.quantity} un.</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="prescription-upload-row">
        <label class="prescription-upload-field">
          <span>${hasFile ? "Trocar receita" : "Anexar receita"}</span>
          <input type="file" accept=".pdf,image/*" data-prescription-file />
        </label>
        <button type="button" class="checkout-primary prescription-whatsapp-button" data-send-prescription>
          Enviar para WhatsApp da loja
        </button>
      </div>
      <div class="prescription-status ${sentToCurrentStore ? "is-ok" : ""}">
        ${svg(sentToCurrentStore ? "shield" : "ticket")}
        <span>${escapeHtml(statusText)}</span>
      </div>
      ${hasFile ? `<small class="prescription-file-name">Arquivo selecionado: ${escapeHtml(state.prescriptionFileName)}</small>` : ""}
      <small>O WhatsApp será aberto com a mensagem pronta. Por segurança do navegador, o cliente anexa o arquivo selecionado dentro da conversa.</small>
    </section>
  `;
}

function highlightPrescriptionPanel() {
  window.requestAnimationFrame(() => {
    const panel = document.querySelector("[data-prescription-panel]");
    if (!panel) return;
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
    panel.classList.add("is-attention");
    window.setTimeout(() => panel.classList.remove("is-attention"), 1400);
  });
}

function validatePrescriptionBeforeFinalize() {
  const items = calculateCart().items;
  const requiredItems = checkoutPrescriptionItems(items);
  if (!requiredItems.length || prescriptionStatusIsValid(items)) {
    return true;
  }

  const store = checkoutPrescriptionStore();
  const missingFileMessage = state.prescriptionFileName
    ? `Envie a receita pelo WhatsApp da ${store.name} antes de finalizar.`
    : "Anexe a receita dos antibióticos/controlados antes de finalizar.";
  showToast(missingFileMessage);
  if (window.location.hash !== "#pagamento") {
    window.location.hash = "#pagamento";
    renderCart();
  }
  highlightPrescriptionPanel();
  return false;
}

function normalizeCep(value = "") {
  return String(value).replace(/\D/g, "").slice(0, 8);
}

function formatCep(value = "") {
  const cep = normalizeCep(value);
  return cep.length === 8 ? `${cep.slice(0, 5)}-${cep.slice(5)}` : value;
}

function maskCpfForDisplay(value = "") {
  const text = String(value || "").trim();
  const digits = text.replace(/\D/g, "");

  if (digits.length >= 5) {
    return `${digits.slice(0, 3)}.***.***-${digits.slice(-2)}`;
  }

  return text && text !== "CPF cadastrado" ? text : "***.***.***-**";
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

function buildManualCustomerAddress() {
  const cityState = state.customer.addressCity && state.customer.addressState
    ? `${state.customer.addressCity}/${state.customer.addressState}`
    : state.customer.addressCity || state.customer.addressState || "";

  state.customer.address = [
    state.customer.addressStreet,
    state.customer.addressDistrict,
    cityState,
  ]
    .filter(Boolean)
    .join(" - ");

  state.customer.cep = formatCep(state.cep || state.customer.cep || "");
}

function applyDeliveryQuoteToCustomer(quote, options = {}) {
  if (!quote) return;

  const shouldSetDelivery = options.setDelivery !== false;
  state.deliveryQuote = quote;
  state.customer.cep = quote.formattedCep;
  state.cep = quote.formattedCep;
  state.customer.addressStreet = quote.street || state.customer.addressStreet || "";
  state.customer.addressDistrict = quote.district || state.customer.addressDistrict || "";
  state.customer.addressCity = quote.city || state.customer.addressCity || "";
  state.customer.addressState = quote.state || state.customer.addressState || "";
  buildManualCustomerAddress();
  state.customer.address ||= quote.address;
  state.customer.receiverName ||= state.customer.fullName || state.customer.name || "";
  state.selectedStore = quote.nearestStoreId || state.selectedStore;

  if (shouldSetDelivery) {
    state.delivery = "home";
    assignDeliveryFulfillmentStore(quote);
  }
}

function updateCustomerDisplayName() {
  if (state.customer.fullName.trim()) {
    state.customer.name = state.customer.fullName.trim().split(/\s+/).slice(0, 2).join(" ");
  }
}

function saveCustomerProfile() {
  updateCustomerDisplayName();
  buildManualCustomerAddress();
  updateAccountHeader();
}

async function autofillAddressFromCep() {
  const cep = normalizeCep(
    state.cep ||
      state.customer.cep ||
      document.querySelector("[data-address-cep]")?.value ||
      "",
  );

  if (cep.length !== 8) {
    showToast("Digite um CEP com 8 números.");
    return false;
  }

  state.cep = formatCep(cep);
  state.customer.cep = formatCep(cep);
  state.shippingStatus = "loading";
  state.shippingError = "";
  renderCart();

  try {
    const quote = await quoteDeliveryByCep(cep);
    applyDeliveryQuoteToCustomer(quote);
    state.shippingStatus = "done";
    state.shippingError = "";
    showToast(`${quote.address || quote.formattedCep} carregado pelo CEP.`);
    renderCart();
    return true;
  } catch (error) {
    state.deliveryQuote = null;
    state.deliveryFulfillmentStoreId = "";
    state.deliveryFulfillmentNote = "";
    state.shippingStatus = "error";
    state.shippingError = error.message || "Não foi possível buscar o CEP.";
    showToast("Não foi possível completar pelo CEP. Você pode preencher o endereço manualmente.");
    renderCart();
    return false;
  }
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
    applyDeliveryQuoteToCustomer(quote, { setDelivery: false });
    state.shippingStatus = "done";
    state.shippingError = "";
    return true;
  } catch (error) {
    state.shippingStatus = "error";
    state.shippingError = error.message || "Não foi possível calcular a distância pelo CEP.";
    if (state.delivery === "home") {
      state.deliveryFulfillmentStoreId = "";
      state.deliveryFulfillmentNote = "";
    }
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
  const city = quote?.city || state.customer.addressCity || "";
  const uf = quote?.state || state.customer.addressState || "";
  const cityState = city && uf ? `${city}/${uf}` : city || uf;
  const quoteAddress = quote
    ? [quote.street, quote.district].filter(Boolean).join(" - ") || quote.address
    : "";
  const manualAddress = [state.customer.addressStreet, state.customer.addressDistrict].filter(Boolean).join(" - ");
  const baseAddress = quoteAddress || manualAddress || state.customer.address || "";
  const number = state.customer.addressNumber ? `nº ${state.customer.addressNumber}` : "";
  const complement = state.customer.addressComplement || "";
  const fullAddress = [baseAddress, number, complement, cityState].filter(Boolean).join(" - ");

  return {
    fullAddress,
    baseAddress,
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
  const fulfillmentStore = getDeliveryFulfillmentStore();
  return `
    <div class="shipping-result ${isSedex ? "is-sedex" : ""}">
      <div>
        <strong>${escapeHtml(quote.address || `CEP ${quote.formattedCep}`)}</strong>
        ${isSedex ? `<span>Fora de Ribeirão Preto: envio por ${escapeHtml(quote.serviceLabel)} · prazo estimado ${escapeHtml(quote.deliveryDays)}</span>` : ""}
        <span>Loja mais próxima: ${escapeHtml(quote.nearestStoreName)} · ${formatDistance(quote.distanceKm)}</span>
        ${fulfillmentStore ? `<span class="shipping-fulfillment-store">Pedido enviado para: ${escapeHtml(fulfillmentStore.name)}. Filial com todos os produtos da cesta.</span>` : ""}
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

function loyaltyPointsFromSubtotal(subtotal = 0) {
  return Math.floor(subtotal * LOYALTY_POINTS_PER_REAL);
}

function loyaltyPointsExpiryDate(baseDate = new Date()) {
  const expiryDate = new Date(baseDate);
  expiryDate.setMonth(expiryDate.getMonth() + LOYALTY_POINTS_VALIDITY_MONTHS);
  return expiryDate;
}

function formatLoyaltyExpiryDate(baseDate = new Date()) {
  return loyaltyPointsExpiryDate(baseDate).toLocaleDateString("pt-BR");
}

function getCustomerPointsBalance() {
  return state.customer.points ?? LOYALTY_EXAMPLE_BALANCE;
}

function cartItemsFromState() {
  return [...state.cart.entries()]
    .map(([id, quantity]) => {
      const product = getProduct(id);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);
}

function productAvailabilityKey(productOrId) {
  if (!productOrId) return "";
  if (typeof productOrId === "string") {
    const product = getProduct(productOrId);
    return product?.parentId || product?.id || productOrId;
  }

  return productOrId.parentId || productOrId.id || "";
}

function storeHasProduct(storeId, productOrId) {
  const productKey = productAvailabilityKey(productOrId);
  if (!storeId || !productKey) return false;
  const rule = storeAvailabilityRules[storeId];
  return !rule?.unavailable?.has(productKey);
}

function storeHasCartItems(storeId, items = cartItemsFromState()) {
  return items.every((item) => storeHasProduct(storeId, item));
}

function orderedStoresForFulfillment(preferredStoreId = "") {
  const preferred = pickupStores.find((store) => store.id === preferredStoreId);
  return [
    ...(preferred ? [preferred] : []),
    ...pickupStores.filter((store) => store.id !== preferredStoreId),
  ];
}

function findFulfillmentStoreForCart(items = cartItemsFromState(), preferredStoreId = "") {
  const orderedStores = orderedStoresForFulfillment(preferredStoreId);
  return orderedStores.find((store) => storeHasCartItems(store.id, items)) || orderedStores[0] || null;
}

function assignDeliveryFulfillmentStore(quote = state.deliveryQuote) {
  if (state.delivery !== "home" || !quote) {
    state.deliveryFulfillmentStoreId = "";
    state.deliveryFulfillmentNote = "";
    return null;
  }

  const items = cartItemsFromState();
  const store = findFulfillmentStoreForCart(items, quote.nearestStoreId || state.selectedStore);
  state.deliveryFulfillmentStoreId = store?.id || "";
  state.deliveryFulfillmentNote = store
    ? `Pedido direcionado para ${store.name}, filial com todos os itens da cesta neste prototipo.`
    : "";
  return store;
}

function getDeliveryFulfillmentStore() {
  return pickupStores.find((store) => store.id === state.deliveryFulfillmentStoreId) || null;
}

function syncDeliveryFulfillmentStore() {
  if (state.delivery === "home" && state.deliveryQuote) {
    assignDeliveryFulfillmentStore(state.deliveryQuote);
    return;
  }

  if (state.delivery !== "home") {
    state.deliveryFulfillmentStoreId = "";
    state.deliveryFulfillmentNote = "";
  }
}

function activeAvailabilityStoreId() {
  if (state.delivery === "home") {
    return state.deliveryFulfillmentStoreId || "";
  }

  return state.storeSelectionConfirmed ? state.selectedStore || "" : "";
}

function isAvailabilityText(value = "") {
  const text = normalizeText(value);
  return text.includes("dispon") || text.includes("estoque") || text.includes("sob consulta");
}

function productAvailabilityLabel(product, fallbackStock = "") {
  const storeId = activeAvailabilityStoreId();
  if (!storeId || !product) return "";

  const stockText = fallbackStock || product.stock || "";
  const normalizedStock = normalizeText(stockText);
  if (!storeHasProduct(storeId, product)) return "Consulte disponibilidade";
  if (normalizedStock.includes("consulta") || normalizedStock.includes("sob consulta")) {
    return "Consulte disponibilidade";
  }

  return stockText || "Disponivel na loja";
}

function productStockChipMarkup(product, fallbackStock = "") {
  const label = productAvailabilityLabel(product, fallbackStock);
  return label ? `<small class="stock-chip">${escapeHtml(label)}</small>` : "";
}

function availablePointsDiscountForCart(subtotal = 0, previousDiscounts = 0) {
  const availableDiscount = pointsToDiscount(getCustomerPointsBalance());
  const maxDiscount = Math.max(0, subtotal - previousDiscounts);
  return roundMoney(Math.min(availableDiscount, maxDiscount));
}

function normalizeCouponCode(code = "") {
  return normalizeText(code).replace(/[^a-z0-9]/g, "").toUpperCase();
}

function findCoupon(code = "") {
  const normalized = normalizeCouponCode(code);
  return allCoupons.find((coupon) => normalizeCouponCode(coupon.code) === normalized) || null;
}

function couponValueLabel(coupon) {
  if (!coupon) return "";

  if (coupon.discountType === "percent") {
    return `${(coupon.value * 100).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`;
  }

  return formatCurrency(coupon.value);
}

function productTextForCoupon(product = {}) {
  return normalizeText([
    product.id,
    product.parentId,
    product.name,
    product.detail,
    product.category,
    product.subcategory,
    product.routeKey,
    product.keywords,
    product.tag,
    product.promo,
    product.description,
  ].filter(Boolean).join(" "));
}

function categoryConfigByRoute(routeKey) {
  return categories.find((category) => category.routeKey === routeKey) || null;
}

function productInCategoryConfig(product, routeKey) {
  const config = categoryConfigByRoute(routeKey);
  if (!config) return false;

  const productIds = new Set(config.productIds || []);
  const productCategories = new Set(config.productCategories || []);
  return (
    productIds.has(product.id) ||
    productIds.has(product.parentId) ||
    productCategories.has(product.category)
  );
}

function campaignCouponItemMatches(coupon, product) {
  const text = productTextForCoupon(product);
  const routeMatch = (coupon.routeKeys || []).some((routeKey) => productInCategoryConfig(product, routeKey));
  const categoryMatch = (coupon.productCategories || []).some((categoryName) => {
    const normalizedCategory = normalizeText(categoryName);
    return (
      normalizeText(product.category).includes(normalizedCategory) ||
      normalizeText(product.subcategory).includes(normalizedCategory)
    );
  });
  const keywordMatch = (coupon.keywords || []).some((keyword) => text.includes(normalizeText(keyword)));

  return routeMatch || categoryMatch || keywordMatch;
}

function couponItemMatches(coupon, product) {
  if (!coupon || !product) return false;
  if (coupon.scope === "all") return true;

  if (coupon.scope === "campaign") {
    return campaignCouponItemMatches(coupon, product);
  }

  const text = productTextForCoupon(product);

  if (coupon.scope === "milk") {
    return (
      text.includes("leite") ||
      text.includes("formula") ||
      text.includes("formulas") ||
      text.includes("nutricao infantil") ||
      text.includes("ninho")
    );
  }

  if (coupon.scope === "dermo") {
    const isExcludedBeautyLine =
      text.includes("perfume") ||
      text.includes("perfumaria") ||
      text.includes("maquiagem") ||
      text.includes("shampoo") ||
      text.includes("condicionador") ||
      text.includes("cabelo");

    return (
      text.includes("dermocosmetico") ||
      text.includes("dermocosmeticos") ||
      text.includes("skincare") ||
      text.includes("protetor solar") ||
      text.includes("hidratante") ||
      text.includes("serum") ||
      text.includes("pele") ||
      (normalizeText(product.category) === "cosmeticos" && !isExcludedBeautyLine)
    );
  }

  if (coupon.scope === "hygiene") {
    return (
      productInCategoryConfig(product, "higiene-pessoal") ||
      text.includes("higiene pessoal") ||
      text.includes("saude bucal") ||
      text.includes("creme dental") ||
      text.includes("sabonete") ||
      text.includes("desodorante") ||
      text.includes("fio dental") ||
      text.includes("escova")
    );
  }

  if (coupon.scope === "men") {
    return (
      text.includes("masculino") ||
      text.includes("linha homem") ||
      text.includes("homem") ||
      text.includes("barba") ||
      text.includes("barbear") ||
      text.includes("gillette") ||
      text.includes("men")
    );
  }

  return false;
}

function couponEligibleSubtotal(coupon, items = cartItemsFromState()) {
  if (!coupon) return 0;

  return roundMoney(
    items
      .filter((item) => couponItemMatches(coupon, item))
      .reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
}

function couponEligibility(coupon, subtotal = 0, items = cartItemsFromState()) {
  if (!coupon) {
    return { eligible: false, reason: "Cupom nao encontrado." };
  }

  if (!isCouponActive(coupon)) {
    return {
      eligible: false,
      reason: `Cupom válido apenas em ${CAMPAIGN_MONTH_NAMES[coupon.activeMonth]}.`,
    };
  }

  if (hasCustomerUsedCoupon(coupon)) {
    return {
      eligible: false,
      reason: "Cupom já utilizado para este CPF.",
    };
  }

  if (subtotal < (coupon.minSubtotal || 0)) {
    return {
      eligible: false,
      reason: `Disponivel em compras acima de ${formatCurrency(coupon.minSubtotal)}.`,
    };
  }

  const eligibleSubtotal = couponEligibleSubtotal(coupon, items);

  if (subtotal > 0 && eligibleSubtotal <= 0) {
    return {
      eligible: false,
      eligibleSubtotal,
      reason: `Valido para ${coupon.scopeLabel.toLowerCase()}.`,
    };
  }

  return { eligible: true, eligibleSubtotal, reason: "Cupom disponivel para esta cesta." };
}

function couponDiscountForCart(subtotal = 0, items = cartItemsFromState()) {
  const coupon = findCoupon(state.coupon);
  const eligibility = couponEligibility(coupon, subtotal, items);

  if (!eligibility.eligible) {
    return {
      coupon,
      eligibility,
      discount: 0,
    };
  }

  const discountBase = coupon.scope === "all"
    ? subtotal
    : Math.min(eligibility.eligibleSubtotal ?? 0, subtotal);
  const discount = coupon.discountType === "percent"
    ? discountBase * coupon.value
    : Math.min(coupon.value, discountBase);

  return {
    coupon,
    eligibility,
    discount: roundMoney(Math.min(discount, subtotal)),
  };
}

function applyCouponCode(couponCode = "") {
  const enteredCode = String(couponCode || "").trim();
  const coupon = findCoupon(enteredCode);
  const { subtotal, items } = calculateCart();
  const eligibility = couponEligibility(coupon, subtotal, items);

  state.couponDraft = enteredCode;

  if (!enteredCode) {
    state.coupon = "";
    state.couponPanelOpen = true;
    return {
      applied: false,
      reason: "Digite ou escolha um cupom para aplicar.",
    };
  }

  if (!coupon) {
    state.coupon = "";
    state.couponPanelOpen = true;
    return {
      applied: false,
      reason: "Cupom nao encontrado.",
    };
  }

  if (!eligibility.eligible) {
    state.coupon = "";
    state.couponPanelOpen = true;
    return {
      applied: false,
      coupon,
      eligibility,
      reason: eligibility.reason,
    };
  }

  state.coupon = coupon.code;
  state.couponDraft = coupon.code;
  state.usePoints = false;
  state.couponPanelOpen = false;

  const result = couponDiscountForCart(subtotal, items);
  return {
    applied: true,
    coupon,
    eligibility,
    discount: result.discount,
  };
}

function couponSuggestionsMarkup(subtotal = 0, items = cartItemsFromState()) {
  if (!state.couponPanelOpen) return "";

  return `
    <div class="coupon-suggestions" role="listbox" aria-label="Cupons disponiveis">
      ${availableCoupons
        .map((coupon) => {
          const eligibility = couponEligibility(coupon, subtotal, items);
          return `
            <article class="coupon-option-card ${eligibility.eligible ? "" : "is-disabled"}">
              <div class="coupon-option-icon">${escapeHtml(couponValueLabel(coupon))}</div>
              <div class="coupon-option-copy">
                <strong>${escapeHtml(coupon.title)}</strong>
                <small>${escapeHtml(coupon.description)}</small>
                <span>${escapeHtml(coupon.rule)}</span>
              </div>
              <div class="coupon-option-actions">
                <button type="button" class="coupon-copy-button" data-copy-coupon="${escapeHtml(coupon.code)}" aria-label="Copiar cupom ${escapeHtml(coupon.code)}">
                  ${escapeHtml(coupon.code)}
                  <span>Copiar</span>
                </button>
                <button type="button" class="coupon-apply-button" data-coupon-code="${escapeHtml(coupon.code)}" ${eligibility.eligible ? "" : "disabled"}>
                  ${eligibility.eligible ? "Aplicar" : escapeHtml(eligibility.reason)}
                </button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
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

function productPageInstallmentText(total) {
  const installments = maxCardInstallments(total);
  return `${installments}x de ${formatCurrency(roundMoney(total / installments))} s/ juros no cartão`;
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
  const routeAliases = {
    "vida-saudavel": "bem-estar-saude",
    cabelo: "beleza",
  };
  routeKey = routeAliases[routeKey] || routeKey;

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
    productIds: category.productIds || [],
    productCategories: category.productCategories || [],
    subcategories: category.subcategories || [],
    description: category.description || (category.query
      ? "Produtos em destaque para ofertas e campanhas do dia."
      : "Produtos demonstrativos desta categoria. A integracao futura deve substituir esta lista pelo saldo real da loja."),
  };
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .toLowerCase()
    .trim();
}

function filterProductsBy(categoryId = "all", queryValue = "", config = {}) {
  const query = normalizeText(queryValue);
  const productIds = new Set(config.productIds || []);
  const productCategories = new Set(config.productCategories || []);

  return products.filter((product) => {
    const matchesConfiguredId = productIds.has(product.id) || productIds.has(product.parentId);
    const matchesConfiguredCategory = productCategories.has(product.category);
    const inCategory = categoryId === "all" || product.category === categoryId || matchesConfiguredId || matchesConfiguredCategory;
    const variantText = productVariantOptions(product)
      .map((variant) => `${variant.label} ${variant.detail}`)
      .join(" ");
    const haystack = normalizeText(
      `${product.name} ${product.detail} ${product.category} ${product.subcategory || ""} ${product.keywords || ""} ${product.tag} ${product.promo || ""} ${product.description || ""} ${variantText}`,
    );
    return inCategory && (!query || haystack.includes(query));
  });
}

function productCatalogRoute(product) {
  if (product?.routeKey) return product.routeKey;

  const routeMap = {
    Medicamentos: "medicamentos",
    Suplementos: "bem-estar-saude",
    "Mamãe e bebê": "mamae-bebe",
    Cosméticos: "beleza",
    Perfumaria: "beleza",
    Conveniência: "conveniencia",
    Pet: "pet",
  };

  return routeMap[product?.category] || "todos";
}

function productSummaryFacts(product, selectedVariant = null) {
  const isMedicine = product.category === "Medicamentos";
  const profile = product.medicine;
  const selectedProduct = selectedVariant ? { ...product, ...selectedVariant, parentId: product.id } : product;
  const availabilityLabel = productAvailabilityLabel(
    selectedProduct,
    selectedVariant?.stock || product.stock || "Consultar estoque",
  );
  const facts = profile
    ? [
        ["Laboratório", profile.manufacturer],
        ["Princípio ativo", profile.active],
        ["Registro", profile.msRegister],
        ["Apresentação escolhida", selectedVariant?.detail || product.detail],
      ]
    : [
    ["Marca / linha", product.name],
    ["Apresentação", product.detail],
    ["Categoria", product.category],
    ...(availabilityLabel ? [["Disponibilidade", availabilityLabel]] : []),
      ];

  if (hasProductVariants(product) && !profile) {
    facts[1] = [product.variantSummaryLabel || "Opções", productVariantOptions(product).map((variant) => variant.label).join(", ")];
    facts.push(["Preço inicial", formatCurrency(productBasePrice(product))]);
  } else if (hasProductVariants(product)) {
    facts.push(["Preço escolhido", formatCurrency(selectedVariant?.price || productBasePrice(product))]);
  }

  if (isMedicine) {
    facts.push(["Uso responsável", "Consultar bula e farmacêutico"]);
  } else {
    facts.push(["Compra", "Retirada na loja ou entrega"]);
  }

  return facts;
}

function productPageTitle(product, selectedVariant = null) {
  const detail = selectedVariant?.detail || product.detail || "";
  const active = product.medicine?.active || "";
  const normalizedActive = normalizeText(active);
  const shouldShowActive =
    product.medicine &&
    active &&
    !normalizedActive.includes("conforme bula") &&
    !normalizedActive.includes("associacao medicamentosa");

  return [product.name, shouldShowActive ? active : "", detail].filter(Boolean).join(" ");
}

function productPageMeta(product, selectedVariant = null) {
  const detail = selectedVariant?.detail || product.detail || "";
  const active = product.medicine?.active || product.tag || "";
  return [product.name, detail, active].filter(Boolean).join(" • ");
}

function productDiscountPercent(product, price = productBasePrice(product)) {
  if (!product.oldPrice || product.oldPrice <= price) return 0;
  return Math.max(1, Math.round((1 - price / product.oldPrice) * 100));
}

function offerDiscountText(product, displayPrice) {
  if (product.oldPrice && product.oldPrice > displayPrice) {
    const discount = Math.round((1 - displayPrice / product.oldPrice) * 100);
    return `↓ ${discount}%`;
  }

  return product.promo || "";
}

function quantityOptionsMarkup(selectedQuantity) {
  return Array.from({ length: 10 }, (_, index) => {
    const quantity = index + 1;
    return `<option value="${quantity}" ${quantity === selectedQuantity ? "selected" : ""}>${quantity}</option>`;
  }).join("");
}

function hasCompanyBundleOffer(product) {
  const productId = product?.parentId || product?.id || "";
  const promoText = normalizeText(`${product?.promo || ""} ${product?.tag || ""}`);
  return (
    product?.companyBundleOffer === true ||
    companyBundleOfferProductIds.has(productId) ||
    promoText.includes("leve")
  );
}

function productBundleOfferMarkup(product, displayPrice) {
  if (!hasCompanyBundleOffer(product)) return "";

  const bundlePrice = roundMoney(displayPrice * 0.94);
  return `
    <article class="product-bundle-card">
      <div>
        <span class="offer-radio-empty"></span>
        <strong>Leve + Pague -</strong>
      </div>
      <p>A partir de 2 unidades, pague</p>
      <b>${formatCurrency(bundlePrice)} cada</b>
      <small>Promoção demonstrativa sujeita ao estoque e regras da loja.</small>
    </article>
  `;
}

function productPaymentPopoverMarkup() {
  return `
    <details class="product-payment-popover">
      <summary>Formas de pagamento</summary>
      <div class="product-payment-balloon" role="group" aria-label="Formas de pagamento aceitas">
        <strong>Formas de pagamento</strong>
        <p>Cartão de crédito, Pix, Mercado Pago, PicPay e boleto.</p>
        <div class="product-payment-flag-row">
          ${cardFlags()}
          ${digitalPaymentFlags()}
        </div>
        <small>Crédito em até 3x sem juros acima de R$ 100,00; até 6x acima de R$ 1.000,00. Pix com desconto aplicado na etapa de pagamento.</small>
      </div>
    </details>
  `;
}

function parseCurrencyValue(value = "") {
  const normalized = String(value)
    .replace(/[^\d,.-]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function pbmComparableText(value = "") {
  const stopwords = new Set([
    "mg",
    "mcg",
    "ml",
    "com",
    "capsulas",
    "capsula",
    "comprimidos",
    "comprimido",
    "revestidos",
    "revestido",
    "solucao",
    "oral",
    "gotas",
    "refil",
    "generico",
    "potassica",
    "sodica",
  ]);

  return normalizeText(value)
    .split(" ")
    .filter((token) => token.length > 2 && !stopwords.has(token))
    .join(" ");
}

function pbmNameTokens(value = "") {
  return pbmComparableText(value)
    .split(" ")
    .filter((token) => token.length > 2);
}

function pbmRequiredPresentationTokens(product, selectedVariant = null) {
  const detailText = normalizeText(`${selectedVariant?.label || ""} ${selectedVariant?.detail || product.detail || ""}`);
  const strengthTokens = detailText.match(/\d+(?:[,.]\d+)?\s*(?:mg|mcg|g|ml|%)/g) || [];
  const quantityTokens = detailText.match(/\d+\s*(?:comprimidos?|capsulas?|capsulas?|drageas?|envelopes?|doses?|adesivos?|flaconetes?|saches?|ml)/g) || [];

  return [...new Set([...strengthTokens, ...quantityTokens].map((token) => token.replace(/\s+/g, " ").trim()))];
}

function pbmPresentationMatches(product, item, selectedVariant = null) {
  const itemText = normalizeText(item.name);
  const requiredTokens = pbmRequiredPresentationTokens(product, selectedVariant);
  if (!requiredTokens.length) return true;

  return requiredTokens.every((token) => itemText.includes(token));
}

function pbmMatchScore(product, item, selectedVariant = null) {
  const productName = pbmComparableText(product.name);
  const itemName = pbmComparableText(item.name);
  const productActive = pbmComparableText(product.medicine?.active || "");
  const itemBrand = pbmComparableText(item.brand || "");
  const productMaker = pbmComparableText(product.medicine?.manufacturer || "");
  const variantText = pbmComparableText(selectedVariant?.detail || product.detail || "");
  const productNameTokens = pbmNameTokens(product.name);
  const hasNameMatch =
    itemName.includes(productName) ||
    productName.includes(itemName) ||
    (productNameTokens.length > 0 && productNameTokens.every((token) => itemName.includes(token)));

  if (!hasNameMatch || !pbmPresentationMatches(product, item, selectedVariant)) {
    return 0;
  }

  let score = 0;
  if (itemName.includes(productName) || productName.includes(itemName)) score += 80;
  productName.split(" ").forEach((token) => {
    if (token && itemName.includes(token)) score += 18;
  });
  productActive.split(" ").forEach((token) => {
    if (token && itemName.includes(token)) score += 7;
  });
  variantText.split(" ").forEach((token) => {
    if (token && itemName.includes(token)) score += 3;
  });
  if (productMaker && itemBrand && (itemBrand.includes(productMaker) || productMaker.includes(itemBrand))) score += 10;

  return score;
}

function productPbmInfo(product, selectedVariant = null) {
  if (!product || product.category !== "Medicamentos") return null;

  let bestMatch = null;
  pbmTreatmentGroups.forEach((group) => {
    group.items.forEach((item) => {
      const score = pbmMatchScore(product, item, selectedVariant);
      if (score >= 70 && (!bestMatch || score > bestMatch.score)) {
        bestMatch = { group, item, score };
      }
    });
  });

  return bestMatch;
}

function pbmProgramRegistrationUrl(pbmInfo) {
  const source = normalizeText(`${pbmInfo?.item?.program || ""} ${pbmInfo?.item?.brand || ""}`);
  const link = PBM_PROGRAM_LINKS.find((candidate) =>
    candidate.terms.some((term) => source.includes(normalizeText(term))),
  );

  return link?.url || PBM_PORTAL_URL;
}

function pbmInitialCpfValue() {
  const cpf = state.customer.cpf || "";
  return cpf.includes("*") ? "" : cpf;
}

function renderProductLabDiscountMarkup(product, pbmInfo, displayPrice) {
  if (!pbmInfo) return "";

  const pbmPrice = parseCurrencyValue(pbmInfo.item.price);
  const priceLabel = pbmPrice ? formatCurrency(pbmPrice) : pbmInfo.item.price;
  const oldPriceLabel = pbmInfo.item.oldPrice || (product.oldPrice ? formatCurrency(product.oldPrice) : "");
  const referencePrice = parseCurrencyValue(oldPriceLabel) || product.oldPrice || displayPrice;
  const savingValue = pbmPrice ? Math.max(0, referencePrice - pbmPrice) : 0;
  const savingLabel = pbmPrice && savingValue > 0
    ? `Economia estimada de ${formatCurrency(savingValue)}`
    : "Preço médio vinculado ao laboratório";

  return `
    <section class="product-lab-discount" aria-label="Desconto de laboratório">
      <div class="product-lab-discount-icon">
        ${svg("ticket")}
      </div>
      <div class="product-lab-discount-copy">
        <span>Desconto laboratório</span>
        <strong>${escapeHtml(pbmInfo.item.program || "Programa parceiro")}</strong>
        <p>Exclusivo para clientes cadastrados no programa parceiro.</p>
        <button type="button" data-info-page="pbm">Saiba mais</button>
      </div>
      <div class="product-lab-discount-price">
        <small>Preço PBM médio</small>
        <span>${oldPriceLabel ? `<del>${escapeHtml(oldPriceLabel)}</del>` : ""}<strong>${escapeHtml(priceLabel)}</strong></span>
        <em>${escapeHtml(savingLabel)}</em>
      </div>
      <button type="button" class="product-lab-discount-action" data-pbm-activate>
        Ativar desconto
      </button>
    </section>
  `;
}

function renderPbmAuthorizationModal(product, pbmInfo) {
  if (!pbmInfo) return "";

  const registrationUrl = pbmProgramRegistrationUrl(pbmInfo);
  const productName = `${product.name} ${pbmInfo.item.name}`.trim();

  return `
    <div class="pbm-auth-backdrop" data-pbm-auth-overlay hidden>
      <section class="pbm-auth-modal" role="dialog" aria-modal="true" aria-labelledby="pbm-auth-title">
        <button type="button" class="pbm-auth-close" data-pbm-auth-close aria-label="Fechar">${svg("close")}</button>
        <div class="pbm-auth-step" data-pbm-cpf-step>
          <span>Consulta de benefício</span>
          <h2 id="pbm-auth-title">Ativar desconto de laboratório</h2>
          <p>Informe o CPF do cliente para validar o benefício ${escapeHtml(pbmInfo.item.program || "PBM")} em ${escapeHtml(product.name)}.</p>
          <label>
            CPF
            <input type="text" inputmode="numeric" maxlength="14" placeholder="000.000.000-00" value="${escapeHtml(pbmInitialCpfValue())}" data-pbm-cpf-input />
          </label>
          <button type="button" class="checkout-primary" data-pbm-cpf-submit>Consultar desconto</button>
          <button type="button" class="checkout-outline" data-pbm-auth-close>Comprar sem desconto</button>
        </div>
        <div class="pbm-auth-step" data-pbm-authorize-step hidden>
          <span>Autorização requerida</span>
          <h2>Cadastro no programa</h2>
          <p>Autorize o uso do CPF para consultar descontos e habilite o cadastro no programa parceiro.</p>
          <div class="pbm-auth-summary">
            <strong>${escapeHtml(pbmInfo.item.program || "Programa parceiro")}</strong>
            <small>${escapeHtml(productName)}</small>
          </div>
          <a class="checkout-primary" href="${escapeHtml(registrationUrl)}" target="_blank" rel="noopener" data-pbm-authorize-link>
            Autorizar / cadastrar
          </a>
          <button type="button" class="checkout-outline" data-pbm-auth-close>Continuar na Onório</button>
        </div>
      </section>
    </div>
  `;
}

function productDeliveryConsultationMarkup() {
  return `
    <section class="product-delivery-consult">
      <h3>Consultar formas de entrega</h3>
      <label for="product-delivery-cep">Insira seu CEP</label>
      <input id="product-delivery-cep" data-checkout-state="cep" type="text" inputmode="numeric" maxlength="9" placeholder="00000-000" value="${escapeHtml(formatCep(state.cep || state.customer.cep || ""))}" />
      <small>Ex.: 00000-000</small>
      <div class="product-store-list" aria-label="Lojas disponíveis para retirada">
        ${pickupStores
          .map(
            (store) => `
              <article>
                <strong>${escapeHtml(store.name.replace("Loja 1 - ", "Loja 1 - ").replace("Loja 2 - ", "Loja 2 - "))}</strong>
                <span>${escapeHtml(store.address)}</span>
                ${store.note ? `<em>${escapeHtml(store.note)}</em>` : ""}
                <small>${escapeHtml(store.time)}</small>
                ${pickupStoreDistanceMarkup(store)}
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function productPurchasePanel(product, selectedItemId, displayPrice, selectedQuantity, selectedVariant = null) {
  const discountText = offerDiscountText(product, displayPrice);
  const pbmInfo = productPbmInfo(product, selectedVariant);

  return `
    <aside class="product-purchase-panel" aria-label="Compra do produto">
      <article class="product-offer-card">
        <div class="product-offer-title">
          <span class="offer-radio-selected"></span>
          <strong>Oferta Onório</strong>
        </div>
        <div class="product-offer-discount">
          ${product.oldPrice && product.oldPrice > displayPrice ? `<del>${formatCurrency(product.oldPrice)}</del>` : ""}
          ${discountText ? `<span>${escapeHtml(discountText)}</span>` : ""}
        </div>
        <strong class="product-offer-price">${formatCurrency(displayPrice)}</strong>
        <small>${productPageInstallmentText(displayPrice)}</small>
        <div class="product-offer-quantity">
          <label for="product-quantity-select">Quantidade</label>
          <select id="product-quantity-select" data-product-quantity-select data-product-id="${escapeHtml(product.parentId || product.id)}" data-item-id="${escapeHtml(selectedItemId)}">
            ${quantityOptionsMarkup(selectedQuantity)}
          </select>
        </div>
        <button type="button" class="checkout-primary" data-buy-now="${escapeHtml(selectedItemId)}" data-buy-quantity="${selectedQuantity}">
          Comprar
          ${svg("cart")}
        </button>
        ${renderProductLabDiscountMarkup(product, pbmInfo, displayPrice)}
      </article>
      ${productBundleOfferMarkup(product, displayPrice)}
      ${productDeliveryConsultationMarkup()}
    </aside>
    ${renderPbmAuthorizationModal(product, pbmInfo)}
  `;
}

function itemImage(item, className = "checkout-product-img") {
  return `<img class="${className}" src="${escapeHtml(productImageSrc(item.image))}" alt="${escapeHtml(item.name)}" loading="lazy" ${productImageFallbackAttribute()} />`;
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
  const customerTitle = state.loggedIn ? getCustomerHeaderName() : "Cliente ON";
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
            ${svg("basket")}
            <span>
              <span data-cart-count>${escapeHtml(cartItemLabel)}</span>
              <strong data-cart-total>${formatCurrency(total)}</strong>
            </span>
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
  const { subtotal, couponDiscount, coupon, pixDiscount, pointsDiscount, availablePointsDiscount, shipping, total, items, pointsEarned } = calculateCart();
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
      ${couponDiscount ? `<div class="summary-line discount-line">
        <span>Cupom ${escapeHtml(coupon?.code || "")}</span>
        <strong>- ${formatCurrency(couponDiscount)}</strong>
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
          <button type="button" class="checkout-outline compact-action" data-route="#dados-cliente">Atualizar dados</button>
          <button type="button" class="checkout-outline compact-action" data-route="#novo-endereco">Adicionar novo endereço</button>
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
          <small>Valem ${formatCurrency(pointsToDiscount(availablePoints))} de desconto. Nesta compra: +${pointsEarned} pontos. Validade: ${LOYALTY_POINTS_VALIDITY_MONTHS} meses.</small>
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
  const { items, subtotal, couponDiscount, coupon, shipping, total, pointsEarned } = calculateCart();
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
        <div class="inline-form coupon-form">
          <input id="coupon-input" data-coupon-input type="text" placeholder="Insira seu cupom" value="${escapeHtml(state.couponDraft || state.coupon)}" autocomplete="off" />
          <button type="button" data-apply-coupon>Adicionar</button>
        </div>
        ${couponSuggestionsMarkup(subtotal, items)}
        <div class="summary-line"><span>Subtotal</span><strong>${formatCurrency(subtotal)}</strong></div>
        ${couponDiscount ? `<div class="summary-line discount-line"><span>Cupom ${escapeHtml(coupon?.code || "")}</span><strong>- ${formatCurrency(couponDiscount)}</strong></div>` : ""}
        <div class="summary-line"><span>Frete</span><strong>${state.delivery === "home" ? (state.deliveryQuote ? formatCurrency(shipping) : "Calcule o CEP") : "Retirada grátis"}</strong></div>
        <div class="summary-line total"><span>Total</span><strong>${formatCurrency(total)}</strong></div>
        <button type="button" class="checkout-primary" data-route="#entrega">Avançar</button>
      </aside>
    </div>
  `;

  return `${checkoutHeader()}<main class="checkout-page review-page">${body}</main>`;
}

function renderCustomerDataPage() {
  const points = state.customer.points ?? LOYALTY_EXAMPLE_BALANCE;
  const addressSummary = customerAddressSummary();

  return `
    ${checkoutHeader()}
    <main class="checkout-page customer-edit-page">
      <button type="button" class="checkout-back" data-route="#revisao">‹ Voltar para revisão</button>
      <section class="checkout-card customer-form-card">
        <div class="customer-form-heading">
          <span>Cadastro do cliente</span>
          <h1>Atualizar meus dados</h1>
          <p>Revise as informações do cadastro. Os dados ficam salvos neste protótipo para seguir com a compra.</p>
        </div>
        <div class="customer-form-grid">
          <label>
            <span>Nome completo</span>
            <input data-checkout-customer="fullName" type="text" autocomplete="name" value="${escapeHtml(state.customer.fullName || "")}" />
          </label>
          <label>
            <span>Nome para exibição</span>
            <input data-checkout-customer="name" type="text" autocomplete="given-name" value="${escapeHtml(state.customer.name || "")}" />
          </label>
          <label>
            <span>CPF</span>
            <input data-checkout-customer="cpf" type="text" inputmode="numeric" autocomplete="off" value="${escapeHtml(state.customer.cpf || "")}" />
          </label>
          <label>
            <span>Telefone</span>
            <input data-checkout-customer="phone" type="tel" autocomplete="tel" value="${escapeHtml(state.customer.phone || "")}" />
          </label>
          <label>
            <span>E-mail</span>
            <input data-checkout-customer="email" type="email" autocomplete="email" value="${escapeHtml(state.customer.email || "")}" />
          </label>
          <label>
            <span>CEP principal</span>
            <input data-checkout-state="cep" data-address-cep type="text" inputmode="numeric" autocomplete="postal-code" maxlength="9" value="${escapeHtml(formatCep(state.cep || state.customer.cep || ""))}" />
          </label>
          <label class="wide">
            <span>Endereço cadastrado</span>
            <input data-checkout-customer="addressStreet" type="text" autocomplete="address-line1" value="${escapeHtml(state.customer.addressStreet || addressSummary.baseAddress || state.customer.address || "")}" placeholder="Rua, avenida, travessa..." />
          </label>
          <label>
            <span>Número</span>
            <input data-checkout-customer="addressNumber" type="text" inputmode="numeric" autocomplete="address-line2" value="${escapeHtml(state.customer.addressNumber || "")}" />
          </label>
          <label>
            <span>Complemento</span>
            <input data-checkout-customer="addressComplement" type="text" autocomplete="address-line3" value="${escapeHtml(state.customer.addressComplement || "")}" />
          </label>
          <label>
            <span>Bairro</span>
            <input data-checkout-customer="addressDistrict" type="text" value="${escapeHtml(state.customer.addressDistrict || state.deliveryQuote?.district || "")}" />
          </label>
          <label>
            <span>Cidade</span>
            <input data-checkout-customer="addressCity" type="text" autocomplete="address-level2" value="${escapeHtml(state.customer.addressCity || state.deliveryQuote?.city || "")}" />
          </label>
          <label>
            <span>Estado</span>
            <input data-checkout-customer="addressState" type="text" autocomplete="address-level1" maxlength="2" value="${escapeHtml(state.customer.addressState || state.deliveryQuote?.state || "")}" />
          </label>
          <label>
            <span>Quem vai receber</span>
            <input data-checkout-customer="receiverName" type="text" autocomplete="name" value="${escapeHtml(state.customer.receiverName || state.customer.fullName || state.customer.name || "")}" />
          </label>
          <div class="customer-form-note">
            <span>Pontos Cliente ON</span>
            <strong>${points} pontos</strong>
            <small>Valem ${formatCurrency(pointsToDiscount(points))} de desconto e vencem em até ${LOYALTY_POINTS_VALIDITY_MONTHS} meses após a compra.</small>
          </div>
        </div>
        <div class="customer-form-actions">
          <button type="button" class="checkout-primary" data-save-customer-profile>Salvar dados</button>
          <button type="button" class="checkout-outline" data-route="#novo-endereco">Adicionar novo endereço</button>
          <button type="button" class="checkout-outline" data-autofill-address>Buscar CEP</button>
        </div>
      </section>
    </main>
  `;
}

function renderAddressEditPage() {
  const addressSummary = customerAddressSummary();

  return `
    ${checkoutHeader()}
    <main class="checkout-page customer-edit-page">
      <button type="button" class="checkout-back" data-route="#revisao">‹ Voltar para revisão</button>
      <section class="checkout-card customer-form-card">
        <div class="customer-form-heading">
          <span>Endereço de entrega</span>
          <h1>Adicionar novo endereço</h1>
          <p>Digite o CEP para preencher automaticamente. Se algum dado vier incompleto, você pode ajustar manualmente.</p>
        </div>
        <div class="address-lookup-row" data-shipping-form>
          <input data-checkout-state="cep" data-address-cep type="text" inputmode="numeric" autocomplete="postal-code" maxlength="9" placeholder="Digite o CEP" value="${escapeHtml(formatCep(state.cep || state.customer.cep || ""))}" />
          <button type="button" data-autofill-address ${state.shippingStatus === "loading" ? "disabled" : ""}>${state.shippingStatus === "loading" ? "Buscando..." : "Buscar CEP"}</button>
        </div>
        ${
          state.shippingStatus === "error"
            ? `<p class="address-helper is-error">${escapeHtml(state.shippingError || "Complete o endereço manualmente.")}</p>`
            : `<p class="address-helper">Endereço atual: ${escapeHtml(addressSummary.fullAddress || "nenhum endereço carregado ainda.")}</p>`
        }
        <div class="customer-form-grid address-form-grid">
          <label class="wide">
            <span>Endereço</span>
            <input data-checkout-customer="addressStreet" type="text" autocomplete="address-line1" placeholder="Rua, avenida, travessa..." value="${escapeHtml(state.customer.addressStreet || state.deliveryQuote?.street || "")}" />
          </label>
          <label>
            <span>Número*</span>
            <input data-checkout-customer="addressNumber" type="text" inputmode="numeric" autocomplete="address-line2" placeholder="Ex.: 431" value="${escapeHtml(state.customer.addressNumber || "")}" />
          </label>
          <label>
            <span>Complemento</span>
            <input data-checkout-customer="addressComplement" type="text" autocomplete="address-line3" placeholder="Apto, bloco, casa..." value="${escapeHtml(state.customer.addressComplement || "")}" />
          </label>
          <label>
            <span>Bairro</span>
            <input data-checkout-customer="addressDistrict" type="text" placeholder="Bairro" value="${escapeHtml(state.customer.addressDistrict || state.deliveryQuote?.district || "")}" />
          </label>
          <label>
            <span>Cidade</span>
            <input data-checkout-customer="addressCity" type="text" autocomplete="address-level2" placeholder="Cidade" value="${escapeHtml(state.customer.addressCity || state.deliveryQuote?.city || "")}" />
          </label>
          <label>
            <span>Estado</span>
            <input data-checkout-customer="addressState" type="text" autocomplete="address-level1" maxlength="2" placeholder="UF" value="${escapeHtml(state.customer.addressState || state.deliveryQuote?.state || "")}" />
          </label>
          <label>
            <span>Nome de quem vai receber*</span>
            <input data-checkout-customer="receiverName" type="text" autocomplete="name" placeholder="Nome completo" value="${escapeHtml(state.customer.receiverName || state.customer.fullName || state.customer.name || "")}" />
          </label>
        </div>
        <div class="customer-form-actions">
          <button type="button" class="checkout-primary" data-save-address-profile>Salvar endereço</button>
          <button type="button" class="checkout-outline" data-route="#revisao">Cancelar</button>
        </div>
      </section>
    </main>
  `;
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
                    ${store.note ? `<small class="store-note">${escapeHtml(store.note)}</small>` : ""}
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
  const { total, pixDiscount, pointsDiscount, availablePointsDiscount, couponDiscount, coupon, items } = calculateCart();
  const pixPayload = buildPixPayload(total);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&margin=8&data=${encodeURIComponent(pixPayload)}`;
  const pointsBalance = getCustomerPointsBalance();
  const pointsBlockedByCoupon = couponDiscount > 0;

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
              <small>${pointsBlockedByCoupon
                ? `Cupom ${escapeHtml(coupon?.code || "")} aplicado. Como o cupom não é cumulativo, os pontos Cliente ON ficam guardados para outra compra.`
                : `Saldo disponível: ${pointsBalance} pontos = ${formatCurrency(availablePointsDiscount)} para abater neste pedido. A cada 100 pontos, abate R$ 1,00. Pontos acumulados valem por ${LOYALTY_POINTS_VALIDITY_MONTHS} meses.`}</small>
            </div>
            <div class="points-choice-row">
              <button type="button" class="${state.usePoints && !pointsBlockedByCoupon ? "is-active" : ""}" data-use-points="true" ${pointsBlockedByCoupon ? "disabled" : ""}>Sim, usar pontos</button>
              <button type="button" class="${!state.usePoints ? "is-active" : ""}" data-use-points="false">Não usar agora</button>
            </div>
            ${pointsBlockedByCoupon
              ? `<em>Cupom aplicado: pontos Cliente ON não entram neste pedido.</em>`
              : (state.usePoints ? `<em>Desconto Cliente ON aplicado: - ${formatCurrency(pointsDiscount)}</em>` : `<em>Os pontos só entram no total se o cliente confirmar aqui.</em>`)}
          </section>
          ${prescriptionCheckoutMarkup(items)}
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
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `ON${date}-${random}`;
}

function currentOrderSignature() {
  const cartSignature = [...state.cart.entries()]
    .sort(([firstId], [secondId]) => firstId.localeCompare(secondId))
    .map(([id, quantity]) => `${id}:${quantity}`)
    .join("|");

  return [
    cartSignature,
    state.delivery,
    state.selectedStore,
    state.customer.payment,
    state.usePoints ? "points" : "no-points",
    state.coupon,
    state.deliveryQuote?.formattedCep || "",
    state.deliveryQuote?.fee || "",
    state.prescriptionFileName || "",
    state.prescriptionSent ? state.prescriptionStoreId : "rx-pending",
  ].join("::");
}

function buildOrderSnapshot() {
  const cart = calculateCart();
  const store = getSelectedStore();
  const now = new Date();
  const pointsExpireAt = formatLoyaltyExpiryDate(now);
  const savings = roundMoney(cart.couponDiscount + cart.pixDiscount + cart.pointsDiscount);
  const cardLastDigits = String(state.customer.cardNumber || "").replace(/\D/g, "").slice(-4);

  return {
    signature: currentOrderSignature(),
    number: generateOrderNumber(),
    pickupCode: `RET-${String(Math.floor(100000 + Math.random() * 900000))}`,
    createdAt: now.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }),
    customerName: state.customer.fullName || state.customer.name || "Cliente Onório",
    customerCpf: state.customer.cpf || "CPF cadastrado",
    customerCpfDisplay: maskCpfForDisplay(state.customer.cpf),
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
    paymentInstallment: state.customer.payment === "Cartão" ? cardInstallmentText(cart.total) : "",
    cardLastDigits,
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
    couponCode: cart.coupon?.code || "",
    couponDiscount: cart.couponDiscount,
    pixDiscount: cart.pixDiscount,
    pointsDiscount: cart.pointsDiscount,
    shipping: cart.shipping,
    total: cart.total,
    savings,
    pointsEarned: cart.pointsEarned,
    pointsExpireAt,
    prescriptionRequiredItems: checkoutPrescriptionItems(cart.items).map((item) => ({
      id: item.id,
      name: item.name,
      detail: item.detail,
      quantity: item.quantity,
    })),
    prescriptionFileName: state.prescriptionFileName,
    prescriptionStoreId: state.prescriptionStoreId,
    prescriptionSent: state.prescriptionSent,
  };
}

function applyLoyaltyBalanceToOrder(order) {
  const balanceBefore = getCustomerPointsBalance();
  const pointsUsed = order.pointsDiscount
    ? Math.min(balanceBefore, Math.round(order.pointsDiscount * LOYALTY_POINTS_PER_REAL_DISCOUNT))
    : 0;
  const balanceAfter = Math.max(0, balanceBefore - pointsUsed) + order.pointsEarned;

  state.customer.points = balanceAfter;
  state.customer.pointsExpireAt = order.pointsExpireAt;
  order.pointsUsed = pointsUsed;
  order.pointsBalanceBefore = balanceBefore;
  order.pointsBalanceAfter = balanceAfter;

  return order;
}

function finalizeCurrentOrder() {
  const signature = currentOrderSignature();
  if (state.currentOrder?.signature === signature) {
    return state.currentOrder;
  }

  state.currentOrder = applyLoyaltyBalanceToOrder(buildOrderSnapshot());
  if (state.currentOrder.couponCode) {
    markCouponUsedForCustomer(state.currentOrder.couponCode ? findCoupon(state.currentOrder.couponCode) : null, state.currentOrder);
  }
  return state.currentOrder;
}

function getCurrentOrder() {
  return state.currentOrder || finalizeCurrentOrder();
}

function orderPaymentDescription(order) {
  if (order.payment === "Cartão") {
    return [
      "Cartão de crédito",
      order.cardLastDigits ? `com final ${order.cardLastDigits}` : "",
      order.paymentInstallment || "",
    ]
      .filter(Boolean)
      .join(" ");
  }

  if (order.payment === "Pix") {
    return `Pix${order.pixDiscount ? ` com 5% de desconto` : ""}`;
  }

  return order.payment || "A combinar";
}

function renderFinishedPage() {
  const order = getCurrentOrder();
  const isPickup = order.delivery === "pickup";
  const itemCount = getCartItemCount(order.items);
  const storePhoneHref = order.store.phoneHref || STORE_WHATSAPP_NUMBER;
  const storeOrderWhatsappUrl = storeWhatsappUrl(order.store, `Olá, Drogaria Onório! Preciso falar sobre o pedido ${order.number}.`);
  const customerCpfDisplay = order.customerCpfDisplay || maskCpfForDisplay(order.customerCpf);
  const movementTarget = `${escapeHtml(order.customerPhone)} e ${escapeHtml(order.customerEmail)}`;
  const pickupText = isPickup ? "acompanhar a retirada" : "acompanhar a entrega";
  const receiptTitle = isPickup ? "Retirar" : "Receber";
  const receiptAddress = isPickup
    ? order.store.fullAddress || order.store.address
    : order.deliveryAddress || order.customerCep || "Endereço cadastrado";
  const paymentDescription = orderPaymentDescription(order);
  const loyaltyBalanceValue = Number.isFinite(order.pointsBalanceAfter)
    ? pointsToDiscount(order.pointsBalanceAfter)
    : 0;

  return `
    ${checkoutHeader()}
    <main class="checkout-page finish-page order-complete-page">
      <section class="order-complete-hero">
        <img src="assets/onorio-avatar-transparent.png" alt="" />
        <span>Pedido finalizado</span>
        <h1>Obrigado pela confiança, ${escapeHtml(order.customerName.split(" ")[0] || "cliente")}.</h1>
        <p>Seu pedido foi recebido pela Drogaria Onório e seguirá para separação. Guarde os dados abaixo para ${pickupText}.</p>
      </section>

      <section class="order-receipt-panel" aria-label="Comprovante do pedido">
        <div class="order-receipt-title">Pedido <strong>#${escapeHtml(order.number)}</strong></div>

        <div class="order-receipt-grid">
          <article class="order-receipt-block">
            <h2>Informações Pessoais</h2>
            <div class="receipt-lines">
              <strong>${escapeHtml(order.customerName)}</strong>
              <span>CPF: ${escapeHtml(customerCpfDisplay)}</span>
              <span>${escapeHtml(order.customerPhone)}</span>
              <span>${escapeHtml(order.customerEmail)}</span>
              ${order.customerCep ? `<span>CEP ${escapeHtml(order.customerCep)}</span>` : ""}
            </div>
          </article>

          <article class="order-receipt-block">
            <h2>Informações De Pagamento</h2>
            <div class="receipt-lines">
              <strong>${escapeHtml(paymentDescription)}</strong>
              <span>Total pago: ${formatCurrency(order.total)}</span>
              ${order.savings ? `<span>Economia na compra: ${formatCurrency(order.savings)}</span>` : ""}
              <span>Pontos Cliente ON: +${order.pointsEarned}</span>
              <span>Validade dos pontos: até ${escapeHtml(order.pointsExpireAt || "")}</span>
              ${Number.isFinite(order.pointsBalanceAfter) ? `<span>Saldo Cliente ON após pedido: ${order.pointsBalanceAfter} pontos</span>` : ""}
              <span>Código de retirada: ${escapeHtml(order.pickupCode)}</span>
              ${order.prescriptionRequiredItems?.length ? `<span>Receita enviada: ${escapeHtml(order.prescriptionFileName || "arquivo informado no WhatsApp")}</span>` : ""}
            </div>
          </article>

          <article class="order-receipt-block">
            <h2>${receiptTitle}</h2>
            <div class="receipt-lines">
              <strong>${escapeHtml(isPickup ? order.store.name : order.receiverName)}</strong>
              <span>${escapeHtml(receiptAddress)}</span>
              <span>${escapeHtml(isPickup ? order.store.time : "Entrega calculada conforme CEP informado.")}</span>
              <span>Pedido gerado em ${escapeHtml(order.createdAt)}</span>
            </div>
          </article>

          <article class="order-receipt-block">
            <h2>Produtos</h2>
            <div class="order-receipt-items">
              ${order.items
                .map(
                  (item) => `
                    <div class="order-receipt-item">
                      ${itemImage(item, "summary-item-img")}
                      <div>
                        <strong>${escapeHtml(item.name)}</strong>
                        <span>${escapeHtml(item.detail)}</span>
                        <small>${item.quantity} un. ${formatCurrency(item.lineTotal)}</small>
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </article>
        </div>

        <div class="order-receipt-summary">
          <div>
            <span>Itens</span>
            <strong>${itemCount}</strong>
          </div>
          <div>
            <span>Total gasto</span>
            <strong>${formatCurrency(order.total)}</strong>
          </div>
          <div>
            <span>Economia</span>
            <strong>${formatCurrency(order.savings)}</strong>
          </div>
          <div>
            <span>Pontos acumulados</span>
            <strong>+${order.pointsEarned}</strong>
          </div>
          <div>
            <span>Validade</span>
            <strong>${escapeHtml(order.pointsExpireAt || "")}</strong>
          </div>
          ${Number.isFinite(order.pointsBalanceAfter) ? `
            <div>
              <span>Saldo Cliente ON</span>
              <strong>${order.pointsBalanceAfter}</strong>
            </div>
            <div class="order-receipt-loyalty-card">
              <span>Próxima compra</span>
              <strong>${formatCurrency(loyaltyBalanceValue)}</strong>
              <small>em pontos Cliente ON para abater, válidos até ${escapeHtml(order.pointsExpireAt || "")}</small>
            </div>
          ` : ""}
        </div>

        <p class="order-receipt-note">As movimentações do pedido serão enviadas por SMS e e-mail para ${movementTarget}. Avisaremos quando estiver em separação e quando estiver pronto para retirada.</p>
      </section>

      <section class="order-complete-grid order-complete-grid-legacy" hidden>
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
          <div><span>Validade dos pontos</span><strong>${escapeHtml(order.pointsExpireAt || "")}</strong></div>
          ${Number.isFinite(order.pointsBalanceAfter) ? `<div><span>Saldo Cliente ON</span><strong>${order.pointsBalanceAfter} pontos</strong></div>` : ""}
        </aside>

        <article class="order-detail-card order-customer-card">
          <h2>Dados do cliente</h2>
          <strong>${escapeHtml(order.customerName)}</strong>
          <span>CPF: ${escapeHtml(customerCpfDisplay)}</span>
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
            <a href="${storeOrderWhatsappUrl}" target="_blank" rel="noopener">WhatsApp ${escapeHtml(order.store.whatsapp || order.store.phone || "")}</a>
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
  const activeQuery = state.catalogQueryRoute === routeKey ? state.query : config.query;
  const visibleProducts = filterProductsBy(config.categoryId, activeQuery, { ...config, query: activeQuery });
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
      ${config.subcategories?.length ? `
        <section class="catalog-subcategories" aria-label="Subcategorias de ${escapeHtml(config.title)}">
          <div>
            <span>O que você encontra aqui</span>
            <h2>${escapeHtml(config.title)}</h2>
          </div>
          <div class="catalog-subcategory-list">
            ${config.subcategories
              .map(
                (item) => `
                  <button
                    type="button"
                    class="${normalizeText(activeQuery) === normalizeText(item) ? "is-active" : ""}"
                    data-subcategory-search="${escapeHtml(item)}"
                    data-subcategory-route="${escapeHtml(config.routeKey)}"
                  >
                    ${escapeHtml(item)}
                  </button>
                `,
              )
              .join("")}
          </div>
        </section>
      ` : ""}
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
  const productFacts = productSummaryFacts(product, selectedVariantForProduct(product))
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
  const variants = productVariantOptions(product);
  const hasVariants = variants.length > 0;
  const selectedVariant = hasVariants ? selectedVariantForProduct(product) : null;
  const selectedItemId = selectedVariant?.id || product.id;
  const selectedDetail = selectedVariant?.detail || product.detail;
  const selectedStock = selectedVariant?.stock || product.stock || "Consultar estoque";
  const selectedAvailabilityProduct = selectedVariant ? { ...product, ...selectedVariant, parentId: product.id } : product;
  const displayPrice = selectedVariant?.price || productBasePrice(product);
  const selectedQuantity = productPageQuantity(product.id, selectedItemId);
  const variantKind = product.variantKind || "Opção";
  const productDisplayTitle = productPageTitle(product, selectedVariant);
  const productMeta = productPageMeta(product, selectedVariant);
  const variantChooser = hasVariants
    ? `
      <div class="product-inline-variants" aria-label="${escapeHtml(product.variantHeading || "Escolha a opção")}">
        <span>${escapeHtml(variantKind)}: <strong>${escapeHtml(variantSelectorLabel(selectedVariant))}</strong></span>
        <div class="presentation-selector" role="listbox" aria-label="${escapeHtml(product.variantHeading || "Escolha a opção")}">
          ${variants
            .map(
              (variant) => {
                const isSelected = selectedVariant?.id === variant.id;
                return `
                <button
                  type="button"
                  class="presentation-option ${isSelected ? "is-selected" : ""}"
                  data-select-variant="${escapeHtml(variant.id)}"
                  data-product-id="${escapeHtml(product.id)}"
                  aria-selected="${isSelected ? "true" : "false"}"
                  role="option"
                >
                  ${variant.swatch ? `<span class="variant-swatch" style="--swatch: ${escapeHtml(variant.swatch)}"></span>` : ""}
                  <span>${escapeHtml(variantSelectorLabel(variant))}</span>
                </button>
              `;
              },
            )
            .join("")}
        </div>
      </div>
    `
    : "";
  const descriptionLinks = isMedicine
    ? `
      <div class="product-description-links">
        <a href="${escapeHtml(medicineLeafletUrl(product, product.medicine || {}))}" target="_blank" rel="noopener">Bula</a>
      </div>
    `
    : "";

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
          ${productStockChipMarkup(selectedAvailabilityProduct, selectedStock)}
        </div>

        <div class="product-page-copy">
          <span class="detail-category">${escapeHtml(product.category)}</span>
          <h1>${escapeHtml(productDisplayTitle)}</h1>
          <p class="product-page-subtitle">${escapeHtml(productMeta)}</p>
          <p class="product-page-seller">Vendido e entregue por <strong>Onório</strong></p>
          ${variantChooser}
          ${productHighlightsMarkup(product)}
          <div class="product-page-rating" aria-label="Produto selecionado para compra rápida">
            <span>★★★★★</span>
            <small>Produto selecionado para compra rápida</small>
          </div>
          ${descriptionLinks}
        </div>

        ${productPurchasePanel(product, selectedItemId, displayPrice, selectedQuantity, selectedVariant)}
      </section>

      ${medicineDetailsMarkup(product, selectedVariant)}

      <section class="product-info-grid product-info-grid-after-details" aria-label="Informações do produto">
        ${productFacts}
      </section>

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
              <p>${store.note ? `${escapeHtml(store.note)}. ` : ""}${escapeHtml(store.time)}. Atendimento pelo telefone ${escapeHtml(store.phone)}.</p>
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

function renderPharmaceuticalServices() {
  return `
    <section class="pharma-service-grid" aria-label="Lista de Serviços Farmacêuticos">
      ${pharmaceuticalServices
        .map(
          (service) => `
            <article class="pharma-service-card">
              <div class="pharma-service-meta">
                <span>${escapeHtml(service.price)}</span>
                <span>${escapeHtml(service.duration)}</span>
              </div>
              <h2>${escapeHtml(service.title)}</h2>
              <p>${escapeHtml(service.text)}</p>
              <div class="pharma-service-actions">
                <a href="${whatsappUrl(`Olá, Drogaria Onório! Quero agendar ${service.title}.`)}" target="_blank" rel="noopener">Agendar</a>
                <button type="button" data-service-more="${escapeHtml(service.title)}">Saiba mais</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function pbmTreatmentCountLabel(group) {
  return `${group.items.length} ${group.items.length === 1 ? "medicamento" : "medicamentos"}`;
}

function pbmMedicineCardMarkup(item) {
  const priceIsConsult = normalizeText(item.price).includes("sob consulta");
  const consultText = `Olá, Drogaria Onório! Quero consultar PBM por CPF para ${item.name}.`;

  return `
    <article class="pbm-medicine-card">
      <div>
        <span class="pbm-medicine-program">${escapeHtml(item.program || "PBM")}</span>
        ${item.treatment ? `<small class="pbm-medicine-treatment">${escapeHtml(item.treatment)}</small>` : ""}
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.brand || "Laboratório participante")}</p>
      </div>
      <div class="pbm-medicine-price">
        ${item.oldPrice ? `<del>${escapeHtml(item.oldPrice)}</del>` : ""}
        <strong class="${priceIsConsult ? "is-consult" : ""}">${escapeHtml(item.price)}</strong>
        <small>${priceIsConsult ? "validar disponibilidade" : "preço de referência"}</small>
      </div>
      <a href="${whatsappUrl(consultText)}" target="_blank" rel="noopener">Consultar na Onório</a>
    </article>
  `;
}

function renderPbmTreatmentGroups() {
  return `
    <section class="pbm-categories-panel" id="pbm-treatment-categories" aria-label="Categorias participantes">
      <div class="pbm-section-title">
        <span>Categorias participantes</span>
        <h2>Exemplos de tratamentos que podem ter PBM</h2>
        <p><strong>Conexão que cuida, qualidade que inspira.</strong> Organizamos as categorias por tratamento para visualizar como ficará a integração com consulta por CPF, PBM ativo, prescrição e estoque da loja.</p>
      </div>
      <div class="pbm-category-list" hidden>
        ${pbmTreatmentGroups
          .map(
            (group) => `
              <button type="button" data-pbm-scroll="${escapeHtml(group.id)}">
                <span>
                  ${escapeHtml(group.label)}
                  <small>${escapeHtml(pbmTreatmentCountLabel(group))}</small>
                </span>
                <span aria-hidden="true">›</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="pbm-treatment-panel" aria-label="Medicamentos participantes por categoria">
      ${pbmTreatmentGroups
        .map(
          (group) => `
            <details class="pbm-treatment-group" id="pbm-treatment-${escapeHtml(group.id)}">
              <summary>
                <span>
                  <strong>${escapeHtml(group.label)}</strong>
                  <small>${escapeHtml(group.description)}</small>
                </span>
                <em>${escapeHtml(pbmTreatmentCountLabel(group))}</em>
              </summary>
              <div class="pbm-treatment-meta">
                <p>Valores demonstrativos usados para montar o protótipo. Na loja real, a Onório valida CPF, PBM ativo, prescrição quando necessário e estoque antes de finalizar.</p>
                <a href="${escapeHtml(group.source)}" target="_blank" rel="noopener">Ver referência pública</a>
              </div>
              <div class="pbm-medicine-grid">
                ${group.items.map(pbmMedicineCardMarkup).join("")}
              </div>
            </details>
          `,
        )
        .join("")}
    </section>
  `;
}

function pbmPartnerCardMarkup(partner, index, options = {}) {
  const duplicateAttributes = options.duplicate
    ? 'aria-hidden="true" data-pbm-partner-duplicate="true"'
    : `data-pbm-partner-card="${index}"`;

  return `
    <article class="pbm-partner-card" ${duplicateAttributes}>
      <div class="pbm-partner-logo" style="--partner-color: ${escapeHtml(partner.color)};">
        ${escapeHtml(partner.logo)}
      </div>
      <strong>${escapeHtml(partner.lab)}</strong>
      <span>${escapeHtml(partner.program)}</span>
    </article>
  `;
}

function renderPbmPartnerProgramCarousel() {
  const partnerCards = pbmPartnerPrograms.map((partner, index) => pbmPartnerCardMarkup(partner, index)).join("");
  const duplicatePartnerCards = pbmPartnerPrograms
    .map((partner, index) => pbmPartnerCardMarkup(partner, index, { duplicate: true }))
    .join("");

  return `
    <section class="pbm-program-panel" data-pbm-partner-carousel aria-label="Programa de Laboratórios Parceiros">
      <div class="pbm-section-title">
        <span>Programas parceiros</span>
        <h2>Programa de Laboratórios Parceiros</h2>
        <p>Carrossel demonstrativo com os laboratórios e programas de benefícios participantes para consulta por CPF e validação na Onório.</p>
      </div>
      <div class="pbm-partner-carousel">
        <button type="button" class="pbm-partner-arrow" data-pbm-partner-dir="-1" aria-label="Ver laboratórios anteriores">‹</button>
        <div class="pbm-partner-viewport" data-pbm-partner-viewport tabindex="0">
          <div class="pbm-partner-track" data-pbm-partner-track>
            ${partnerCards}
            ${duplicatePartnerCards}
          </div>
        </div>
        <button type="button" class="pbm-partner-arrow" data-pbm-partner-dir="1" aria-label="Ver próximos laboratórios">›</button>
      </div>
      <div class="pbm-partner-dots" aria-label="Indicadores do carrossel">
        ${pbmPartnerPrograms
          .map(
            (_, index) => `
              <button type="button" data-pbm-partner-dot="${index}" aria-label="Ir para laboratório ${index + 1}" ${index === 0 ? 'class="is-active"' : ""}></button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPbmHeroBenefits() {
  const benefits = [
    ["pill", "Medicamentos de referência"],
    ["discount", "Economia no tratamento"],
    ["heart", "Cuidado para sua saúde"],
    ["user", "Melhor experiência"],
  ];

  return benefits
    .map(
      ([icon, text]) => `
        <article class="pbm-benefit-card">
          <span>${svg(icon)}</span>
          <strong>${escapeHtml(text)}</strong>
        </article>
      `,
    )
    .join("");
}

function renderPbmProgramPage() {
  const pbmMedicineItems = pbmTreatmentGroups.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      treatment: group.label,
    })),
  );

  return `
    <section class="pbm-hero-panel" aria-label="Programa PBM Drogaria Onório">
      <div class="pbm-hero-copy">
        <div class="pbm-lockup">
          <strong>PBM</strong>
          <span>Programa de benefícios<br />em medicamentos</span>
        </div>
        <h2>Conheça os Programas de Descontos dos Laboratórios</h2>
        <div class="pbm-benefit-grid" aria-label="Benefícios do PBM Onório">
          ${renderPbmHeroBenefits()}
        </div>
        <p class="pbm-intro-text">Bem-vindo ao PBM Onório. Aqui você consulta benefícios oferecidos por laboratórios parceiros, valida seu CPF quando necessário e encontra condições especiais para cuidar da sua saúde com orientação da nossa equipe.</p>
        <div class="pbm-hero-actions">
          <button type="button" class="checkout-primary" data-pbm-scroll="categories">Ver medicamentos com PBM</button>
          <a class="checkout-outline info-action-link" href="${whatsappUrl("Olá, Drogaria Onório! Quero consultar desconto PBM por CPF.")}" target="_blank" rel="noopener">Consultar pelo WhatsApp</a>
        </div>
      </div>
      <div class="pbm-hero-visual" aria-hidden="true">
        <div class="pbm-percent-device">
          <span>%</span>
        </div>
        <div class="pbm-phone-card">
          <strong>CPF</strong>
          <span>consulta de benefícios</span>
          <em>%</em>
        </div>
        <img src="assets/pbm-benefits-woman-phone.svg" alt="" loading="lazy" />
      </div>
    </section>

    <section class="pbm-step-section" aria-label="Como usar os descontos PBM">
      <div class="pbm-section-title">
        <span>Como funciona</span>
        <h2>Como utilizar os descontos PBM</h2>
        <p>O desconto depende do laboratório, do medicamento, do CPF e das regras de cada programa.</p>
      </div>
      <div class="pbm-step-grid">
        ${pbmSteps
          .map(
            (step, index) => `
              <article>
                <span>${index + 1}</span>
                <strong>${escapeHtml(step.title)}</strong>
                <p>${escapeHtml(step.text)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="pbm-routine-panel">
      <div class="pbm-routine-photo">
        <img src="assets/category-wellness-real.jpg" alt="Cliente consultando descontos no celular" loading="lazy" />
      </div>
      <div>
        <span>Na rotina da Onório</span>
        <h2>Desconto com orientação, segurança e conferência da farmácia.</h2>
        <p>A equipe confirma se o produto participa do programa, se o CPF está apto, se existe regra de prescrição e se há estoque na unidade escolhida.</p>
      </div>
    </section>

    ${renderPbmTreatmentGroups()}

    ${renderPbmPartnerProgramCarousel()}

    ${pbmMedicineItems.length ? `
      <section class="pbm-products-panel">
        <div class="pbm-section-title">
          <span>Vitrine demonstrativa</span>
          <h2>Todos os medicamentos cadastrados no fluxo PBM</h2>
          <p>${pbmTreatmentGroups.length} categorias e ${pbmMedicineItems.length} apresentações organizadas para consulta por CPF, validação de benefício e futura integração com estoque da Onório.</p>
        </div>
        <div class="pbm-medicine-grid">
          ${pbmMedicineItems.map(pbmMedicineCardMarkup).join("")}
        </div>
      </section>
    ` : ""}

    <section class="pbm-faq-panel">
      <details open>
        <summary>O que são Programas de Benefícios?</summary>
        <p>Os Programas de Benefícios são iniciativas desenvolvidas pelos laboratórios para oferecer vantagens exclusivas aos pacientes, como descontos e condições especiais na compra de determinados medicamentos.</p>
      </details>
      <details>
        <summary>Todos os medicamentos possuem benefício?</summary>
        <p>Não. Apenas produtos e apresentações participantes fazem parte dos programas, conforme disponibilidade e regras definidas por cada laboratório.</p>
      </details>
      <details>
        <summary>Como posso conseguir os descontos?</summary>
        <p>Para aproveitar os benefícios, basta realizar seu cadastro nos programas participantes. Isso pode ser feito diretamente na loja, pelos canais do laboratório, como site ou telefone, e também através do site da drogaria, quando disponível.</p>
      </details>
      <details>
        <summary>Quais produtos participam dos programas?</summary>
        <p>Diversos medicamentos fazem parte dos programas de benefícios. Em nosso site você pode consultar se o seu produto participa e verificar as condições disponíveis no momento da compra.</p>
      </details>
      <details>
        <summary>Os descontos são fixos?</summary>
        <p>Não. Os percentuais e condições podem variar de acordo com campanhas promocionais e regras vigentes de cada laboratório. Por isso, recomendamos sempre consultar as ofertas atualizadas antes da compra.</p>
      </details>
      <details>
        <summary>Os benefícios são aplicados automaticamente?</summary>
        <p>Nem sempre. Em alguns casos, é necessário validar o CPF do cliente ou confirmar o cadastro ativo no programa do laboratório para liberar o benefício.</p>
      </details>
      <details>
        <summary>É possível combinar benefícios com cupons de desconto?</summary>
        <p>Não. Os benefícios dos programas não são cumulativos com cupons de desconto, promoções ou outras campanhas ativas da drogaria. Em cada compra, será aplicado apenas um tipo de benefício, conforme as regras vigentes.</p>
      </details>
      <div class="pbm-faq-note">
        <strong>Importante:</strong>
        <span>As condições dos programas de benefícios podem sofrer alterações sem aviso prévio, conforme regras estabelecidas pelos laboratórios parceiros.</span>
      </div>
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

function renderHistoryStoryPage(page) {
  const valueCards = (page.values || [])
    .map(([title, text]) => `
      <article>
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(text)}</span>
      </article>
    `)
    .join("");
  const attributeItems = (page.attributes || [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const voiceCards = (page.voice || [])
    .map(([title, text]) => `
      <article>
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(text)}</span>
      </article>
    `)
    .join("");
  const missionCards = (page.sections || [])
    .map((section) => `
      <article>
        <span>${escapeHtml(section.eyebrow || "")}</span>
        <h2>${escapeHtml(section.title)}</h2>
        <p>${escapeHtml(section.text || "")}</p>
      </article>
    `)
    .join("");

  return `
    <section class="history-hero-panel" aria-label="História da Drogaria Onório">
      <div class="history-hero-copy">
        <span>${escapeHtml(page.eyebrow)}</span>
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.text)}</p>
        <strong>Conexão que cuida, qualidade que inspira.</strong>
      </div>
      <div class="history-hero-art" aria-label="Marca Drogaria Onório">
        <img src="assets/onorio-avatar-transparent.png" alt="Rosto da marca Drogaria Onório" />
        <div>
          <strong>Drogaria Onório</strong>
          <span>Mais de 25 anos de cuidado em Ribeirão Preto</span>
        </div>
      </div>
    </section>
    <section class="history-proof-grid" aria-label="Pilares da história Onório">
      ${(page.cards || [])
        .map(([title, text]) => `
          <article>
            <strong>${escapeHtml(title)}</strong>
            <span>${escapeHtml(text)}</span>
          </article>
        `)
        .join("")}
    </section>
    <section class="history-manifest-panel">
      <div class="history-manifest-label">
        <span>Manifesto</span>
        <strong>O cuidado que permanece.</strong>
      </div>
      <div class="history-manifest-copy">
        <p>Há coisas na vida que não acabam: o amor que deixamos, o cuidado que entregamos e o impacto que geramos no coração de quem nos cerca.</p>
        <p>A Onório nasce desse ciclo de dar e receber. É uma homenagem à memória de um avô que ensinou que saúde é mais do que ausência de dor: é carinho, dedicação e presença de quem nos faz bem.</p>
        <p>Acreditamos que cada gesto importa. Que o cuidado vai além do remédio e toca a alma. Que modernidade e tradição podem caminhar juntas para criar experiências que permanecem.</p>
      </div>
    </section>
    <section class="history-split-panel">
      <div>
        <span>Essência Onório</span>
        <h2>Uma farmácia que une proximidade, inovação e simplicidade.</h2>
        <p>A marca valoriza cada cliente como único, com uma experiência simples, humana e confiável. O atendimento nasce no detalhe: entender a necessidade, orientar com clareza e resolver com cuidado.</p>
      </div>
      <ul>
        ${attributeItems}
      </ul>
    </section>
    <section class="history-mission-grid" aria-label="Missão e visão">
      ${missionCards}
    </section>
    <section class="history-values-panel">
      <div class="history-section-heading">
        <span>Valores</span>
        <h2>O jeito Onório de cuidar</h2>
      </div>
      <div class="history-value-grid">
        ${valueCards}
      </div>
    </section>
    <section class="history-voice-panel">
      <div class="history-section-heading">
        <span>Tom de voz</span>
        <h2>Humano, positivo e direto</h2>
      </div>
      <div class="history-voice-grid">
        ${voiceCards}
      </div>
    </section>
  `;
}

function couponPageCardMarkup(coupon) {
  return `
    <article class="active-coupon-card">
      <div class="active-coupon-icon">${escapeHtml(couponValueLabel(coupon))}</div>
      <div class="active-coupon-copy">
        <span>${escapeHtml(coupon.scopeLabel)}</span>
        <h3>${escapeHtml(coupon.title)}</h3>
        <p>${escapeHtml(coupon.description)}</p>
      </div>
      <div class="active-coupon-code">
        <strong>${escapeHtml(coupon.code)}</strong>
        <button type="button" data-copy-coupon="${escapeHtml(coupon.code)}" aria-label="Copiar cupom ${escapeHtml(coupon.code)}">
          Copiar
        </button>
      </div>
      <small>${escapeHtml(coupon.rule)} Válido até ${escapeHtml(coupon.validUntil)}.</small>
      <a href="#" data-route="#revisao">Aplicar na cesta</a>
    </article>
  `;
}

function renderCouponProgramPage() {
  const couponSteps = [
    ["ticket", "Escolha o cupom ideal", "Veja qual cupom combina com os produtos da sua cesta."],
    ["discount", "Copie o codigo", "Clique em Copiar e guarde o nome do cupom para usar no pedido."],
    ["shield", "Confira as regras", "Cada cupom vale para 1 CPF e cadastro, conforme a campanha."],
    ["cart", "Aplique na cesta", "Cole o cupom no resumo da compra e aproveite o desconto."],
  ];

  return `
    <section class="coupon-page-panel" aria-label="Cupons ativos da Drogaria Onorio">
      <div class="coupon-page-heading">
        <span>Cupons ativos</span>
        <h2>Cupons ativos no momento</h2>
        <p>Copie o nome do cupom e aplique no resumo da cesta. O site mostra automaticamente os cupons da campanha do mês vigente.</p>
      </div>
      <div class="coupon-page-grid">
        ${availableCoupons.map(couponPageCardMarkup).join("")}
      </div>
    </section>
    <section class="coupon-howto-panel" aria-label="Como usar os cupons de desconto na Drogaria Onorio">
      <div class="coupon-howto-heading">
        <span>Como usar</span>
        <h2>Como usar os cupons de desconto na Drogaria Onorio?</h2>
      </div>
      <div class="coupon-howto-steps">
        ${couponSteps
          .map(
            ([icon, title, text], index) => `
              <article>
                <div class="coupon-howto-number">${String(index + 1).padStart(2, "0")}</div>
                <div class="coupon-howto-line" aria-hidden="true"></div>
                <div class="coupon-howto-copy">
                  <span>${svg(icon)}</span>
                  <div>
                    <strong>${escapeHtml(title)}</strong>
                    <p>${escapeHtml(text)}</p>
                  </div>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="coupon-rules-panel">
      <h2>Regras gerais dos cupons</h2>
      <div>
        <span>Um cupom por CPF e cadastro.</span>
        <span>O cupom não é cumulativo e não permite usar pontos Cliente ON no mesmo pedido.</span>
        <span>Cupons de campanha valem do primeiro ao último dia do mês vigente.</span>
        <span>O desconto de categoria vale apenas para produtos participantes da cesta.</span>
      </div>
    </section>
  `;
}

function renderHelpGuidePage() {
  const helpTopics = [
    {
      id: "compra",
      icon: "cart",
      title: "Compra online",
      text: "Escolha produtos, veja apresentacoes e acompanhe sua cesta.",
      items: [
        ["Como comprar no site?", "Pesquise pelo produto, abra a pagina do item, escolha a apresentacao quando houver e adicione a cesta. Depois avance para login, entrega, pagamento e finalizacao."],
        ["Posso comprar medicamento com receita?", "No prototipo, medicamentos sob prescricao mostram aviso de uso responsavel. Na versao real, a loja devera validar receita, disponibilidade e regras da legislacao antes de concluir a venda."],
        ["O estoque ja esta ligado ao sistema da loja?", "Ainda nao. O catalogo e demonstrativo. Quando integrarmos ao sistema da drogaria, o saldo, preco por loja e restricoes serao puxados automaticamente."],
      ],
    },
    {
      id: "retirada",
      icon: "location",
      title: "Retirada na loja",
      text: "Veja unidades, distancia do CEP e tempo de separacao.",
      items: [
        ["Como funciona o compre e retire?", "O cliente escolhe retirar na loja, seleciona a filial e finaliza o pedido. A equipe separa os itens e avisa quando estiver pronto para retirada."],
        ["Quanto tempo leva para retirar?", "A proposta do prototipo e retirada gratis em ate 60 minutos, conforme disponibilidade de estoque e confirmacao da farmacia."],
        ["Quais lojas aparecem?", "Loja 1 na Av. Arnaldo Victaliano, 1155 - Iguatemi, e Loja 2 na Av. Portugal, 2777 - Jardim Botanico, dentro do Posto Copercana."],
      ],
    },
    {
      id: "entrega",
      icon: "truck",
      title: "Entrega",
      text: "CEP, taxa por distancia e opcoes fora de Ribeirao Preto.",
      items: [
        ["Como o frete e calculado?", "Em Ribeirao Preto, o prototipo calcula a loja mais proxima pelo CEP. Ate 10 km, a taxa e R$ 6,90; acima disso, R$ 8,90."],
        ["E se o cliente for de outra cidade?", "O prototipo mostra a opcao de SEDEX como estimativa. Na versao real, precisamos integrar com a API/contrato dos Correios para preco e prazo oficiais."],
        ["Posso alterar endereco?", "Sim. No checkout ha fluxo para atualizar dados e adicionar novo endereco com CEP, numero, complemento, bairro, cidade e estado."],
      ],
    },
    {
      id: "pagamento",
      icon: "payment",
      title: "Pagamento",
      text: "Pix, cartao, PicPay, Mercado Pago e boleto.",
      items: [
        ["Quais formas de pagamento existem?", "Pix, cartao de credito, Mercado Pago, PicPay e boleto. Cartao parcela em ate 3x sem juros acima de R$ 100,00 e ate 6x acima de R$ 1.000,00."],
        ["Pix tem desconto?", "Sim. Ao selecionar Pix no pagamento, a cesta aplica 5% de desconto nos produtos, conforme regra definida para o prototipo."],
        ["O QR Code Pix ja recebe pagamento real?", "O QR Code e demonstrativo e usa a chave CNPJ informada. Para producao, sera necessario integrar com banco, PSP ou gateway para confirmar pagamento automaticamente."],
      ],
    },
    {
      id: "cupons",
      icon: "ticket",
      title: "Cupons e descontos",
      text: "Cupons Onorio, PBM e Cliente ON.",
      items: [
        ["Como usar um cupom?", "Abra a pagina de cupons, copie o codigo e cole no resumo da cesta. O site aceita um cupom por compra, CPF e cadastro."],
        ["Os cupons valem para tudo?", "Depende. O cupom de boas-vindas vale para a primeira compra, e os cupons mensais valem somente para produtos ligados a campanha vigente."],
        ["PBM combina com cupom?", "Por regra do prototipo, os beneficios ficam separados. Na versao real, cada PBM, cupom e campanha deve respeitar a regra do laboratorio e da drogaria."],
      ],
    },
    {
      id: "conta",
      icon: "user",
      title: "Conta e pedidos",
      text: "Login, dados do cliente e acompanhamento.",
      items: [
        ["Preciso criar conta para comprar?", "O prototipo mostra login antes da finalizacao para vincular pedido, CPF, telefone, e-mail, endereco e pontos Cliente ON."],
        ["Como acompanho o pedido?", "A area Meus pedidos esta preparada para receber status como pagamento, separacao, pronto para retirada ou saiu para entrega quando houver integracao."],
        ["Posso alterar meus dados?", "Sim. O checkout tem tela para atualizar dados pessoais e adicionar novo endereco antes de finalizar."],
      ],
    },
    {
      id: "trocas",
      icon: "shield",
      title: "Trocas e cancelamento",
      text: "Orientacoes para ajustes depois da compra.",
      items: [
        ["Como cancelar ou alterar pedido?", "Na tela de pedido finalizado, o cliente ve a loja responsavel. O contato deve ser feito pelo WhatsApp ou telefone da filial escolhida."],
        ["Posso trocar produto?", "A troca depende do tipo de produto, integridade, nota, prazo e regras sanitarias. Medicamentos e itens de saude precisam seguir a legislacao aplicavel."],
        ["Recebi produto divergente. O que fazer?", "O cliente deve falar com a loja responsavel, informar numero do pedido e enviar foto do item recebido para conferencia."],
      ],
    },
    {
      id: "atendimento",
      icon: "headset",
      title: "Atendimento",
      text: "Canais para falar com a Onório.",
      items: [
        ["Quais telefones posso usar?", "Loja 1: (16) 3618-0883. Loja 2: (16) 3442-2440."],
        ["Qual e-mail de contato?", "O e-mail principal é onoriodrogaria@gmail.com."],
        ["Qual horário de atendimento?", "Segunda a sábado das 7h às 22h, domingo das 7h às 13h e feriados das 7h às 19h."],
      ],
    },
  ];

  return `
    <section class="help-guide-hero" aria-label="Central de ajuda Drogaria Onório">
      <div>
        <span>Central de ajuda Onório</span>
        <h2>Resolva sua dúvida em poucos cliques.</h2>
        <p>Um guia rápido para o cliente entender como comprar, pagar, retirar, receber em casa e falar com a Drogaria Onório.</p>
      </div>
      <div class="help-guide-search" role="search">
        ${svg("eye")}
        <input type="search" data-help-search placeholder="Busque por entrega, Pix, cupom, retirada..." autocomplete="off" />
      </div>
    </section>

    <section class="help-topic-grid" aria-label="Assuntos de ajuda">
      ${helpTopics
        .map(
          (topic) => `
            <button type="button" class="help-topic-card" data-help-jump="${escapeHtml(topic.id)}">
              <span>${svg(topic.icon)}</span>
              <strong>${escapeHtml(topic.title)}</strong>
              <small>${escapeHtml(topic.text)}</small>
            </button>
          `,
        )
        .join("")}
    </section>

    <section class="help-answer-list" aria-label="Perguntas frequentes">
      ${helpTopics
        .map(
          (topic) => `
            <article class="help-answer-group" id="help-${escapeHtml(topic.id)}" data-help-group>
              <div class="help-answer-title">
                <span>${svg(topic.icon)}</span>
                <div>
                  <h2>${escapeHtml(topic.title)}</h2>
                  <p>${escapeHtml(topic.text)}</p>
                </div>
              </div>
              <div class="help-faq-list">
                ${topic.items
                  .map(
                    ([question, answer], index) => `
                      <details data-help-question ${index === 0 ? "open" : ""}>
                        <summary>${escapeHtml(question)}</summary>
                        <p>${escapeHtml(answer)}</p>
                      </details>
                    `,
                  )
                  .join("")}
              </div>
            </article>
          `,
        )
        .join("")}
    </section>

    <section class="help-contact-panel">
      <div>
        <span>Ainda precisa de ajuda?</span>
        <h2>Fale com a equipe da Drogaria Onório.</h2>
        <p>Se a dúvida envolver pedido, receita, troca, disponibilidade ou cancelamento, a loja confirma pelo atendimento.</p>
      </div>
      <div class="help-whatsapp-group" aria-label="Chamar no WhatsApp">
        <strong>Chamar no WhatsApp</strong>
        <a href="https://wa.me/5516996207433?text=${encodeURIComponent("Olá, Drogaria Onório! Preciso de ajuda pelo site.")}" target="_blank" rel="noopener">Loja 1 - (16) 99620-7433</a>
        <a href="https://wa.me/5516997997878?text=${encodeURIComponent("Olá, Drogaria Onório! Preciso de ajuda pelo site.")}" target="_blank" rel="noopener">Loja 2 - (16) 99799-7878</a>
      </div>
    </section>
  `;
}

function renderInfoExtras(pageKey, page) {
  return `
    ${page.storyPage ? renderHistoryStoryPage(page) : ""}
    ${page.stores ? renderInfoStores() : ""}
    ${page.requestForm ? renderInfoRequestForm(page.requestForm) : ""}
    ${page.serviceGrid ? renderPharmaceuticalServices() : ""}
    ${page.pbmPage ? renderPbmProgramPage() : ""}
    ${page.couponPage ? renderCouponProgramPage() : ""}
    ${page.helpGuidePage ? renderHelpGuidePage() : ""}
    ${page.storyPage ? "" : renderInfoSections(page)}
    ${renderInfoActions(page)}
  `;
}

function renderInfoPage(pageKey = "atendimento") {
  const page = infoPages[pageKey] || infoPages.atendimento;
  const isPbmPage = pageKey === "pbm";
  const isHistoryPage = pageKey === "historia";
  const hasCustomInfoPage = isPbmPage || pageKey === "ajuda" || isHistoryPage;
  const safePageClass = String(pageKey).replace(/[^a-z0-9-]/gi, "");
  return `
    ${checkoutHeader()}
    <main class="checkout-page info-page info-page-${safePageClass} ${isPbmPage ? "info-page-pbm" : ""} ${pageKey === "ajuda" ? "info-page-ajuda" : ""} ${isHistoryPage ? "info-page-historia" : ""}">
      <button type="button" class="checkout-back" data-route="#home">‹ Voltar para a loja</button>
      ${hasCustomInfoPage ? "" : page.heroImage ? `
        <section class="info-hero info-hero-image-only" aria-label="${escapeHtml(page.title)}">
          <img src="${escapeHtml(page.heroImage)}" alt="${escapeHtml(page.title)}" loading="eager" />
        </section>
      ` : `
        <section class="info-hero ${page.heroMascot ? "info-hero-with-mascot" : ""}">
          <span>${escapeHtml(page.eyebrow)}</span>
          <h1>${escapeHtml(page.title)}</h1>
          <p>${escapeHtml(page.text)}</p>
          ${page.heroMascot ? `
            <div class="info-hero-mascot" aria-hidden="true">
              <img src="${escapeHtml(page.heroMascot)}" alt="" loading="lazy" />
            </div>
          ` : ""}
        </section>
      `}
      ${!hasCustomInfoPage && page.cards?.length ? `
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
      ` : ""}
      ${renderInfoExtras(pageKey, page)}
      <div class="info-actions">
        ${pageKey === "ajuda" ? "" : infoPrimaryAction(page)}
        <button type="button" class="checkout-outline" data-route="#home">Continuar navegando</button>
      </div>
    </main>
  `;
}

function globalFooterMarkup() {
  const footer = document.querySelector(".app-shell .site-footer");
  if (!footer) return "";

  return footer.outerHTML
    .replace('id="legal-info"', 'id="legal-info-global"')
    .replace('class="site-footer"', 'class="site-footer site-footer-global"');
}

function renderPageWithGlobalFooter(markup) {
  return `${markup}${globalFooterMarkup()}`;
}

function renderCheckoutFlow() {
  const checkoutFlow = document.querySelector("#checkout-flow");
  const appShell = document.querySelector(".app-shell");
  const route = window.location.hash || "#home";
  const isCatalog = route.startsWith("#catalogo/");
  const isInfo = route.startsWith("#pagina/");
  const isProduct = route.startsWith("#produto/");
  const isCheckout =
    ["#cesta", "#login", "#revisao", "#dados-cliente", "#novo-endereco", "#entrega", "#pagamento", "#finalizado"].includes(route) ||
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
    "#dados-cliente": renderCustomerDataPage,
    "#novo-endereco": renderAddressEditPage,
    "#entrega": renderDeliveryPage,
    "#pagamento": renderPaymentPage,
    "#finalizado": renderFinishedPage,
  };

  let pageMarkup = "";

  if (isCatalog) {
    pageMarkup = renderCatalogPage(decodeURIComponent(route.replace("#catalogo/", "")) || "todos");
  } else if (isProduct) {
    pageMarkup = renderProductPage(decodeURIComponent(route.replace("#produto/", "")) || "");
  } else if (isInfo) {
    pageMarkup = renderInfoPage(decodeURIComponent(route.replace("#pagina/", "")) || "atendimento");
  } else {
    pageMarkup = renderers[route]();
  }

  checkoutFlow.innerHTML = renderPageWithGlobalFooter(pageMarkup);
  initPbmPartnerCarousel();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function navigateTo(route) {
  state.storeModalOpen = false;
  closeAppDownload();
  closeCartDrawer();
  closeModal();
  closePbmAuthDialog();

  if (route === "#finalizado" && !validatePrescriptionBeforeFinalize()) {
    return;
  }

  if (route === "#finalizado") {
    finalizeCurrentOrder();
  }

  if (route === "#home") {
    state.category = "all";
    state.query = "";
    state.catalogQueryRoute = "";
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

function navigateToCatalog(routeKey = "todos", queryOverride = null) {
  const config = getCatalogConfig(routeKey);
  state.category = config.categoryId;
  state.query = queryOverride ?? config.query;
  state.catalogQueryRoute = queryOverride !== null || routeKey === "busca" ? routeKey : "";
  closeCartDrawer();
  closeModal();
  closePbmAuthDialog();
  window.location.hash = `#catalogo/${encodeURIComponent(routeKey)}`;
  renderCart();
}

function navigateToProduct(productId) {
  const product = getProduct(productId);
  if (!product) return;

  closeCartDrawer();
  closeModal();
  closePbmAuthDialog();
  window.location.hash = `#produto/${encodeURIComponent(product.id)}`;
  renderCart();
}

function renderCategories() {
  const categoryStrip = document.querySelector("#category-strip");
  const catalogMatch = window.location.hash.match(/^#catalogo\/(.+)/);
  const activeRouteKey = catalogMatch ? decodeURIComponent(catalogMatch[1]) : "";
  categoryStrip.innerHTML = categories
    .filter((category) => category.showInMenu !== false)
    .map(
      (category) => {
        const categoryQuery = category.query || "";
        const visualClass = "category-visual has-menu-icon";
        const visualContent = svg(category.menuIcon || category.icon || "grid");
        const isActive = activeRouteKey
          ? category.routeKey === activeRouteKey
          : category.id === state.category && state.query === categoryQuery && !category.scrollTarget;

        return `
      <button
        type="button"
        class="category-button category-${category.tone || "default"} ${isActive ? "is-active" : ""}"
        data-category="${escapeHtml(category.id)}"
        data-route-key="${escapeHtml(category.routeKey || "todos")}"
        ${categoryQuery ? `data-query="${escapeHtml(categoryQuery)}"` : ""}
        ${category.scrollTarget ? `data-scroll-target="${escapeHtml(category.scrollTarget)}"` : ""}
      >
        <span class="${visualClass}">${visualContent}</span>
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
  const cardActionLabel = hasVariants ? "Ver apresentações" : "Adicionar";
  const cardActionAttribute = hasVariants
    ? `data-product-page="${escapeHtml(product.id)}"`
    : `data-add="${escapeHtml(product.id)}"`;
  const price = productBasePrice(product);
  const hasSalePrice = product.oldPrice && product.oldPrice > price;
  const salePercent = productDiscountPercent(product, price);
  const stockChip = productStockChipMarkup(product, product.stock || "Consultar estoque");
  const promoChip = product.promo ? `<small class="promo-chip">${escapeHtml(product.promo)}</small>` : "";

  return `
    <article
      class="product-card ${extraClass}"
      data-product-card="${escapeHtml(product.id)}"
      tabindex="0"
      aria-label="Abrir detalhes de ${escapeHtml(product.name)}"
    >
      ${salePercent ? `<span class="discount-badge">-${salePercent}%</span>` : ""}
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
        ${stockChip || promoChip ? `<div class="product-chip-row">${stockChip}${promoChip}</div>` : ""}
        <button type="button" class="detail-button" data-product-page="${product.id}">
          Ver detalhes
        </button>
        <div class="product-price ${hasVariants ? "is-from" : ""}">
          ${hasVariants ? "<span>A partir de</span>" : ""}
          ${hasSalePrice ? `<del class="product-old-price">${formatCurrency(product.oldPrice)}</del>` : ""}
          ${formatCurrency(price)}
        </div>
        <button type="button" class="add-button" ${cardActionAttribute}>
          ${cardActionLabel}
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

function isCardClickTargetInteractive(target) {
  return Boolean(target.closest("button, a, input, select, textarea, label"));
}

function productIdFromCard(card) {
  return (
    card?.dataset.productCard ||
    card?.querySelector("[data-product-page]")?.dataset.productPage ||
    card?.querySelector("[data-add]")?.dataset.add ||
    ""
  );
}

function navigateFromProductCard(card) {
  const productId = productIdFromCard(card);
  if (productId) {
    navigateToProduct(productId);
  }
}

function hydrateStaticProductCards() {
  document.querySelectorAll(".mini-product-card").forEach((card) => {
    const productId = productIdFromCard(card);
    if (!productId) return;

    const product = getProduct(productId);
    card.dataset.productCard = productId;
    card.tabIndex = 0;
    card.setAttribute("aria-label", `Abrir detalhes de ${product?.name || "produto"}`);

    const salePercent = product ? productDiscountPercent(product) : 0;
    let badge = card.querySelector(".discount-badge");
    if (salePercent) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "discount-badge";
        card.prepend(badge);
      }
      badge.textContent = `-${salePercent}%`;
    }

    card.querySelectorAll(".mini-add").forEach((button) => {
      button.removeAttribute("data-add");
      button.removeAttribute("data-product-page");
      button.classList.toggle("mini-select-presentation", hasProductVariants(product));
      button.classList.toggle("mini-cart-action", !hasProductVariants(product));

      if (hasProductVariants(product)) {
        button.dataset.productPage = productId;
        button.setAttribute("aria-label", `Ver apresentações de ${product?.name || "produto"}`);
        button.innerHTML = `Ver apresentações ${svg("cart")}`;
      } else {
        button.dataset.add = productId;
        button.setAttribute("aria-label", `Adicionar ${product?.name || "produto"} à cesta`);
        button.innerHTML = `Adicionar ${svg("cart")}`;
      }
    });
  });
}

function calculateCart() {
  const items = cartItemsFromState();
  const subtotal = roundMoney(items.reduce((sum, item) => sum + item.price * item.quantity, 0));
  const pointsEarned = loyaltyPointsFromSubtotal(subtotal);
  const couponResult = couponDiscountForCart(subtotal, items);
  const couponDiscount = couponResult.discount;
  const pixDiscount = state.customer.payment === "Pix" ? roundMoney(subtotal * PIX_DISCOUNT_RATE) : 0;
  const availablePointsDiscount = availablePointsDiscountForCart(subtotal, pixDiscount + couponDiscount);
  const pointsDiscount = state.usePoints && couponDiscount <= 0 && subtotal > 0
    ? availablePointsDiscount
    : 0;
  const shipping = state.delivery === "home" && subtotal > 0 ? currentDeliveryFee() : 0;
  return {
    items,
    subtotal,
    pointsEarned,
    couponDiscount,
    coupon: couponResult.coupon,
    couponEligibility: couponResult.eligibility,
    pixDiscount,
    availablePointsDiscount,
    pointsDiscount,
    shipping,
    total: roundMoney(Math.max(0, subtotal - couponDiscount - pixDiscount - pointsDiscount + shipping)),
  };
}

function renderCart() {
  syncDeliveryFulfillmentStore();
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

function addToCart(id, quantity = 1) {
  const amount = Math.max(1, Number(quantity) || 1);
  state.cart.set(id, (state.cart.get(id) || 0) + amount);
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
  const { items, subtotal, pointsEarned, couponDiscount, coupon, pixDiscount, pointsDiscount, shipping, total } = calculateCart();
  const pointsExpireAt = formatLoyaltyExpiryDate();
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
    `Cupom: ${couponDiscount ? `${coupon?.code || state.coupon} - ${formatCurrency(couponDiscount)}` : "nao utilizado"}`,
    `Desconto Pix: ${pixDiscount ? `- ${formatCurrency(pixDiscount)}` : formatCurrency(0)}`,
    `Desconto Cliente ON: ${pointsDiscount ? `- ${formatCurrency(pointsDiscount)}` : "não utilizado"}`,
    `Entrega: ${formatCurrency(shipping)}`,
    `Total: ${formatCurrency(total)}`,
    `${LOYALTY_PROGRAM_NAME}: +${pointsEarned} ${pointsEarned === 1 ? "ponto" : "pontos"} estimados nesta compra (válidos até ${pointsExpireAt})`,
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
      <span>Validade dos pontos: ${formatLoyaltyExpiryDate()}</span>
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

function closePbmAuthDialog() {
  document.querySelectorAll("[data-pbm-auth-overlay]").forEach((overlay) => {
    overlay.hidden = true;
    overlay.querySelector("[data-pbm-cpf-step]")?.removeAttribute("hidden");
    overlay.querySelector("[data-pbm-authorize-step]")?.setAttribute("hidden", "");
  });
}

function openPbmAuthDialog(trigger) {
  const overlay = trigger?.closest(".product-page")?.querySelector("[data-pbm-auth-overlay]") || document.querySelector("[data-pbm-auth-overlay]");
  if (!overlay) return;

  closeAppDownload();
  closeCartDrawer();
  overlay.hidden = false;
  overlay.querySelector("[data-pbm-cpf-step]")?.removeAttribute("hidden");
  overlay.querySelector("[data-pbm-authorize-step]")?.setAttribute("hidden", "");
  window.requestAnimationFrame(() => overlay.querySelector("[data-pbm-cpf-input]")?.focus());
}

function showPbmAuthorizationStep(trigger) {
  const overlay = trigger?.closest("[data-pbm-auth-overlay]");
  const cpfInput = overlay?.querySelector("[data-pbm-cpf-input]");
  const digits = String(cpfInput?.value || "").replace(/\D/g, "");

  if (digits.length !== 11) {
    showToast("Informe um CPF com 11 dígitos para consultar o desconto.");
    cpfInput?.focus();
    return;
  }

  state.customer.cpf = cpfInput.value;
  overlay.querySelector("[data-pbm-cpf-step]")?.setAttribute("hidden", "");
  overlay.querySelector("[data-pbm-authorize-step]")?.removeAttribute("hidden");
}

function formatCpfInput(value = "") {
  const digits = String(value).replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
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

  applyCurrentMonthlyCampaignHero();

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

let pbmPartnerCarouselTimer = null;
let pbmPartnerCarouselFrame = null;

function initPbmPartnerCarousel() {
  window.clearInterval(pbmPartnerCarouselTimer);
  window.cancelAnimationFrame(pbmPartnerCarouselFrame);
  const carousel = document.querySelector("[data-pbm-partner-carousel]");
  if (!carousel) return;

  const viewport = carousel.querySelector("[data-pbm-partner-viewport]");
  const track = carousel.querySelector("[data-pbm-partner-track]");
  const cards = [...carousel.querySelectorAll("[data-pbm-partner-card]")];
  const dots = [...carousel.querySelectorAll("[data-pbm-partner-dot]")];
  const prev = carousel.querySelector('[data-pbm-partner-dir="-1"]');
  const next = carousel.querySelector('[data-pbm-partner-dir="1"]');
  if (!viewport || !track || !cards.length) return;

  let isPaused = false;
  let lastFrameTime = 0;
  const speedPxPerMs = 0.035;

  const cardStep = () => {
    const first = cards[0];
    const second = cards[1];
    return second ? second.offsetLeft - first.offsetLeft : first.getBoundingClientRect().width + 12;
  };

  const loopWidth = () => track.scrollWidth / 2;

  const normalizeLoopPosition = () => {
    const width = loopWidth();
    if (!width) return;

    if (viewport.scrollLeft >= width) {
      viewport.scrollLeft -= width;
    } else if (viewport.scrollLeft < 0) {
      viewport.scrollLeft += width;
    }
  };

  const activeIndex = () => {
    const width = loopWidth();
    const safeLeft = width ? viewport.scrollLeft % width : viewport.scrollLeft;
    return Math.max(0, Math.min(cards.length - 1, Math.round(safeLeft / cardStep()) % cards.length));
  };

  const updateDots = () => {
    const current = activeIndex();
    dots.forEach((dot, index) => dot.classList.toggle("is-active", index === current));
  };

  const goTo = (index) => {
    const nextIndex = (index + cards.length) % cards.length;
    viewport.scrollTo({ left: cards[nextIndex].offsetLeft, behavior: "smooth" });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === nextIndex));
  };

  const move = (direction) => {
    isPaused = true;
    viewport.scrollBy({ left: cardStep() * direction, behavior: "smooth" });
    window.setTimeout(() => {
      normalizeLoopPosition();
      updateDots();
      isPaused = false;
      lastFrameTime = 0;
    }, 420);
  };

  const animate = (time) => {
    if (!lastFrameTime) lastFrameTime = time;
    const delta = time - lastFrameTime;
    lastFrameTime = time;

    if (!isPaused && loopWidth() > viewport.clientWidth) {
      viewport.scrollLeft += delta * speedPxPerMs;
      normalizeLoopPosition();
      updateDots();
    }

    pbmPartnerCarouselFrame = window.requestAnimationFrame(animate);
  };

  prev?.addEventListener("click", () => move(-1));
  next?.addEventListener("click", () => move(1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      isPaused = true;
      goTo(Number(dot.dataset.pbmPartnerDot || 0));
      window.setTimeout(() => {
        isPaused = false;
        lastFrameTime = 0;
      }, 900);
    });
  });
  viewport.addEventListener("scroll", updateDots, { passive: true });
  carousel.addEventListener("mouseenter", () => {
    isPaused = true;
  });
  carousel.addEventListener("mouseleave", () => {
    isPaused = false;
    lastFrameTime = 0;
  });
  carousel.addEventListener("focusin", () => {
    isPaused = true;
  });
  carousel.addEventListener("focusout", () => {
    isPaused = false;
    lastFrameTime = 0;
  });

  pbmPartnerCarouselFrame = window.requestAnimationFrame(animate);
  updateDots();
}

function initCollapsingCategoryBar() {
  document.querySelector(".market-header")?.classList.remove("is-compact");
}

function bindEvents() {
  document.addEventListener("click", async (event) => {
    const addButton = event.target.closest("[data-add]");
    const variantSelectButton = event.target.closest("[data-select-variant]");
    const categoryButton = event.target.closest("[data-category]");
    const favoriteButton = event.target.closest("[data-favorite]");
    const productQtyButton = event.target.closest("[data-product-qty]");
    const increaseButton = event.target.closest("[data-increase]");
    const decreaseButton = event.target.closest("[data-decrease]");
    const removeButton = event.target.closest("[data-remove]");
    const detailButton = event.target.closest("[data-detail]");
    const productPageButton = event.target.closest("[data-product-page]");
    const galleryImageButton = event.target.closest("[data-gallery-image]");
    const productCard = event.target.closest(".product-card");
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
    const subcategorySearchButton = event.target.closest("[data-subcategory-search]");
    const pbmScrollButton = event.target.closest("[data-pbm-scroll]");
    const pbmActivateButton = event.target.closest("[data-pbm-activate]");
    const pbmAuthCloseButton = event.target.closest("[data-pbm-auth-close]");
    const pbmCpfSubmitButton = event.target.closest("[data-pbm-cpf-submit]");
    const helpJumpButton = event.target.closest("[data-help-jump]");
    const infoPageButton = event.target.closest("[data-info-page]");
    const appDownloadButton = event.target.closest("#app-download-button, [data-app-download-toggle]");
    const cartPillButton = event.target.closest("[data-open-cart]");
    const shelfScrollButton = event.target.closest(".shelf-heading button");
    const loginButton = event.target.closest("[data-checkout-login]");
    const socialLoginButton = event.target.closest("[data-social-login]");
    const calculateShippingButton = event.target.closest("[data-calc-shipping]");
    const applyCouponButton = event.target.closest("[data-apply-coupon]");
    const couponInput = event.target.closest("[data-coupon-input]");
    const couponOptionButton = event.target.closest("[data-coupon-code]");
    const copyCouponButton = event.target.closest("[data-copy-coupon]");
    const deliveryTab = event.target.closest("[data-delivery-tab]");
    const openStoreButton = event.target.closest("[data-open-store-modal]");
    const closeStoreButton = event.target.closest("[data-close-store-modal]");
    const selectStoreButton = event.target.closest("[data-select-store]");
    const paymentSelect = event.target.closest("[data-payment-select]");
    const copyPixButton = event.target.closest("[data-copy-pix]");
    const usePointsButton = event.target.closest("[data-use-points]");
    const prescriptionSendButton = event.target.closest("[data-send-prescription]");
    const whatsappFormButton = event.target.closest("[data-whatsapp-form]");
    const serviceMoreButton = event.target.closest("[data-service-more]");
    const addAddressButton = event.target.closest("[data-add-address]");
    const saveCustomerDataButton = event.target.closest("[data-save-customer-data]");
    const autofillAddressButton = event.target.closest("[data-autofill-address]");
    const saveCustomerProfileButton = event.target.closest("[data-save-customer-profile]");
    const saveAddressProfileButton = event.target.closest("[data-save-address-profile]");
    const scrollTopButton = event.target.closest("[data-scroll-top]");

    if (event.target.matches("[data-pbm-auth-overlay]")) {
      closePbmAuthDialog();
      return;
    }

    if (scrollTopButton) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (appDownloadButton) {
      event.preventDefault();
      toggleAppDownload(appDownloadButton);
      return;
    }

    if (pbmActivateButton) {
      event.preventDefault();
      openPbmAuthDialog(pbmActivateButton);
      return;
    }

    if (pbmAuthCloseButton) {
      event.preventDefault();
      closePbmAuthDialog();
      return;
    }

    if (pbmCpfSubmitButton) {
      event.preventDefault();
      showPbmAuthorizationStep(pbmCpfSubmitButton);
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

    if (prescriptionSendButton) {
      event.preventDefault();
      const items = calculateCart().items;
      const requiredItems = checkoutPrescriptionItems(items);
      const store = checkoutPrescriptionStore();

      if (!requiredItems.length) {
        showToast("Nenhum item da cesta exige receita agora.");
        return;
      }

      if (!state.prescriptionFileName) {
        showToast("Anexe a receita antes de abrir o WhatsApp da loja.");
        highlightPrescriptionPanel();
        return;
      }

      state.prescriptionSent = true;
      state.prescriptionStoreId = store.id;
      window.open(storeWhatsappUrl(store, checkoutPrescriptionWhatsappMessage(store, requiredItems)), "_blank", "noopener");
      renderCart();
      showToast(`Receita encaminhada para o WhatsApp da ${store.name}.`);
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

    if (subcategorySearchButton) {
      event.preventDefault();
      navigateToCatalog(
        subcategorySearchButton.dataset.subcategoryRoute || "busca",
        subcategorySearchButton.dataset.subcategorySearch || "",
      );
      return;
    }

    if (pbmScrollButton) {
      event.preventDefault();
      const scrollTarget = pbmScrollButton.dataset.pbmScroll;
      const target = document.getElementById(
        scrollTarget === "categories" ? "pbm-treatment-categories" : `pbm-treatment-${scrollTarget}`,
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    if (helpJumpButton) {
      event.preventDefault();
      const target = document.getElementById(`help-${helpJumpButton.dataset.helpJump}`);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      target?.querySelector("details")?.setAttribute("open", "");
      return;
    }

    if (infoPageButton) {
      event.preventDefault();
      closeAppDownload();
      navigateTo(`#pagina/${encodeURIComponent(infoPageButton.dataset.infoPage)}`);
      return;
    }

    if (variantSelectButton) {
      event.preventDefault();
      state.selectedVariants[variantSelectButton.dataset.productId] = variantSelectButton.dataset.selectVariant;
      renderCart();
      return;
    }

    if (productQtyButton) {
      event.preventDefault();
      const productId = productQtyButton.dataset.productId;
      const itemId = productQtyButton.dataset.itemId;
      const key = productPageQuantityKey(productId, itemId);
      const nextQuantity = productPageQuantity(productId, itemId) + Number(productQtyButton.dataset.productQty || 0);
      state.productPageQuantities[key] = Math.max(1, Math.min(99, nextQuantity));
      renderCart();
      return;
    }

    if (productPageButton) {
      event.preventDefault();
      navigateToProduct(productPageButton.dataset.productPage);
      return;
    }

    if (galleryImageButton) {
      event.preventDefault();
      const gallery = galleryImageButton.closest(".product-gallery");
      const mainImage = gallery?.querySelector("[data-gallery-main]");

      if (mainImage) {
        mainImage.src = galleryImageButton.dataset.galleryImage;
        mainImage.alt = galleryImageButton.dataset.galleryAlt || mainImage.alt;
      }

      gallery?.querySelectorAll("[data-gallery-image]").forEach((button) => {
        button.classList.toggle("is-active", button === galleryImageButton);
      });
      return;
    }

    if (productCard && !isCardClickTargetInteractive(event.target)) {
      event.preventDefault();
      navigateFromProductCard(productCard);
      return;
    }

    if (miniProductCard && !isCardClickTargetInteractive(event.target)) {
      event.preventDefault();
      navigateFromProductCard(miniProductCard);
      return;
    }

    if (!event.target.closest("#app-download, .app-download")) {
      closeAppDownload();
    }

    if (autofillAddressButton) {
      event.preventDefault();
      await autofillAddressFromCep();
      return;
    }

    if (saveCustomerProfileButton) {
      event.preventDefault();
      saveCustomerProfile();
      showToast("Dados do cliente atualizados.");
      navigateTo("#revisao");
      return;
    }

    if (saveAddressProfileButton) {
      event.preventDefault();
      state.delivery = "home";
      state.customer.receiverName ||= state.customer.fullName || state.customer.name || "";
      buildManualCustomerAddress();

      if (normalizeCep(state.customer.cep || state.cep).length !== 8) {
        showToast("Informe um CEP com 8 numeros para salvar o endereco.");
        return;
      }

      if (!state.customer.addressStreet.trim()) {
        showToast("Informe a rua ou avenida do endereco.");
        return;
      }

      if (!state.customer.addressNumber.trim()) {
        showToast("Informe o numero do endereco.");
        return;
      }

      if (!state.customer.receiverName.trim()) {
        showToast("Informe o nome de quem vai receber.");
        return;
      }

      showToast("Endereco salvo para entrega.");
      navigateTo("#revisao");
      return;
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
      state.deliveryFulfillmentStoreId = "";
      state.deliveryFulfillmentNote = "";
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
        applyDeliveryQuoteToCustomer(quote);
        state.shippingStatus = "done";
        state.shippingError = "";
        showToast(`${quote.serviceLabel} calculado: ${formatCurrency(quote.fee)}.`);
      } catch (error) {
        state.deliveryQuote = null;
        state.deliveryFulfillmentStoreId = "";
        state.deliveryFulfillmentNote = "";
        state.shippingStatus = "error";
        state.shippingError = error.message || "Não foi possível calcular o frete.";
        showToast(state.shippingError);
      }

      renderCart();
      return;
    }

    if (couponInput) {
      state.couponPanelOpen = true;
      state.couponDraft = state.couponDraft || state.coupon;
      renderCart();
      window.requestAnimationFrame(() => {
        const input = document.querySelector("#coupon-input");
        input?.focus();
        input?.setSelectionRange(input.value.length, input.value.length);
      });
      return;
    }

    if (copyCouponButton) {
      const couponCode = copyCouponButton.dataset.copyCoupon || "";
      try {
        await navigator.clipboard?.writeText(couponCode);
        showToast(`Cupom ${couponCode} copiado.`);
      } catch (error) {
        showToast(`Cupom ${couponCode}: copie o codigo exibido.`);
      }
      return;
    }

    if (couponOptionButton) {
      const couponCode = couponOptionButton.dataset.couponCode || "";
      const result = applyCouponCode(couponCode);
      renderCart();
      showToast(result.applied
        ? `Cupom ${result.coupon.code} aplicado: - ${formatCurrency(result.discount)}.`
        : result.reason);
      return;
    }

    if (applyCouponButton) {
      const enteredCode = document.querySelector("#coupon-input")?.value.trim() || state.couponDraft || "";
      const result = applyCouponCode(enteredCode);
      renderCart();
      showToast(result.applied
        ? `Cupom ${result.coupon.code} aplicado: - ${formatCurrency(result.discount)}.`
        : result.reason);
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
      state.storeSelectionConfirmed = true;
      state.deliveryFulfillmentStoreId = "";
      state.deliveryFulfillmentNote = "";
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
      const wantsPoints = usePointsButton.dataset.usePoints === "true";
      const { couponDiscount } = calculateCart();
      if (wantsPoints && couponDiscount > 0) {
        state.usePoints = false;
        showToast("Cupom não é cumulativo: pontos Cliente ON ficam guardados para outra compra.");
        renderCart();
        return;
      }
      state.usePoints = wantsPoints;
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

    if (serviceMoreButton) {
      event.preventDefault();
      const service = pharmaceuticalServices.find((item) => item.title === serviceMoreButton.dataset.serviceMore);
      showToast(service ? `${service.title}: ${service.text}` : "Consulte a equipe para mais detalhes.");
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
      addToCart(addButton.dataset.add, addButton.dataset.addQuantity);
    }

    if (buyNowButton) {
      addToCart(buyNowButton.dataset.buyNow, buyNowButton.dataset.buyQuantity);
      navigateTo("#cesta");
      return;
    }

    if (detailButton) {
      navigateToProduct(detailButton.dataset.detail);
    }

    if (categoryButton) {
      if (categoryButton.dataset.routeKey === "servicos") {
        navigateTo("#pagina/servicos-saude");
        return;
      }
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
      if (action === "monthly-campaign") {
        navigateTo("#pagina/cupons");
        return;
      }
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
    const cardTarget = event.target.matches(".product-card, .mini-product-card")
      ? event.target
      : null;
    if (cardTarget) {
      event.preventDefault();
      navigateFromProductCard(cardTarget);
      return;
    }

    const keyboardTarget = event.target.closest("[data-info-page], [data-catalog-route], [data-subcategory-search], [data-pbm-scroll], [data-help-jump]");
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

  document.querySelector("#see-offers")?.addEventListener("click", (event) => {
    if (event.currentTarget.dataset.campaignAction) return;
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
    const couponField = event.target.closest("[data-coupon-input]");
    const helpSearchField = event.target.closest("[data-help-search]");
    const pbmCpfField = event.target.closest("[data-pbm-cpf-input]");

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
        state.deliveryFulfillmentStoreId = "";
        state.deliveryFulfillmentNote = "";
        state.shippingStatus = "idle";
        state.shippingError = "";
      }
      if (stateField.matches("[data-address-cep]")) {
        window.clearTimeout(cepLookupTimer);
        if (normalizeCep(stateField.value).length === 8) {
          cepLookupTimer = window.setTimeout(() => {
            autofillAddressFromCep();
          }, 650);
        }
      }
    }

    if (couponField) {
      state.couponDraft = couponField.value;
    }

    if (helpSearchField) {
      const query = normalizeText(helpSearchField.value);
      document.querySelectorAll("[data-help-question]").forEach((item) => {
        const matches = !query || normalizeText(item.textContent).includes(query);
        item.hidden = !matches;
      });
      document.querySelectorAll("[data-help-group]").forEach((group) => {
        const visibleQuestions = [...group.querySelectorAll("[data-help-question]")].some((item) => !item.hidden);
        group.hidden = !visibleQuestions;
      });
    }

    if (pbmCpfField) {
      pbmCpfField.value = formatCpfInput(pbmCpfField.value);
    }
  });

  document.addEventListener("change", (event) => {
    const paymentField = event.target.closest("[data-payment-select]");
    const storeField = event.target.closest('input[name="pickup-store"]');
    const productQuantitySelect = event.target.closest("[data-product-quantity-select]");
    const prescriptionFileInput = event.target.closest("[data-prescription-file]");

    if (paymentField) {
      state.customer.payment = paymentField.dataset.paymentSelect;
      renderCart();
    }

    if (prescriptionFileInput) {
      const file = prescriptionFileInput.files?.[0];
      state.prescriptionFileName = file?.name || "";
      state.prescriptionSent = false;
      state.prescriptionStoreId = "";
      renderCart();
      if (state.prescriptionFileName) {
        showToast("Receita anexada. Agora envie pelo WhatsApp da loja.");
      }
    }

    if (storeField) {
      state.selectedStore = storeField.value;
      if (state.prescriptionSent && state.prescriptionStoreId !== state.selectedStore) {
        state.prescriptionSent = false;
      }
    }

    if (productQuantitySelect) {
      const key = productPageQuantityKey(productQuantitySelect.dataset.productId, productQuantitySelect.dataset.itemId);
      state.productPageQuantities[key] = Math.max(1, Math.min(99, Number(productQuantitySelect.value) || 1));
      renderCart();
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
hydrateStaticProductCards();
renderCart();
setAppQrCode();
initCampaignCarousel();
initCollapsingCategoryBar();
bindEvents();
window.addEventListener("hashchange", renderCart);
