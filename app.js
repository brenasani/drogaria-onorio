const categories = [
  {
    id: "all",
    label: "Top ofertas",
    icon: "discount",
    tone: "deal",
    art: "offer",
    image: "assets/category-offers.jpg",
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
    image: "assets/category-medicine.jpg",
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
    image: "assets/category-hygiene-real.jpg",
    photoOnly: true,
    routeKey: "higiene-pessoal",
  },
  {
    id: "Pet",
    label: "Pet",
    icon: "heart",
    tone: "pet",
    art: "pet",
    image: "assets/category-pet.jpg",
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
    description: "Proteção solar FPS 50 para rotina de cuidado diário.",
    caution: "Confira tipo de pele, modo de uso e disponibilidade antes de concluir.",
    stock: "Disponível hoje",
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
    name: "Buscopan",
    detail: "20 comprimidos",
    category: "Medicamentos",
    price: 23.9,
    color: "#fff3d8",
    ink: "#75530b",
    round: false,
    image: "assets/products/prescription-box.svg",
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
    image: "assets/products/prescription-box.svg",
    tag: "Dor e febre",
    description: "Item demonstrativo para busca e navegacao no catalogo.",
    caution: "Confira contraindicacoes e orientacao farmaceutica.",
    stock: "Sob consulta",
  },
  {
    id: "ninho-fases",
    name: "Ninho Fases",
    detail: "800g",
    category: "Mamãe e bebê",
    price: 69.9,
    color: "#ffe16b",
    ink: "#7f5214",
    round: false,
    image: "assets/category-baby.jpg",
    tag: "Nutricao infantil",
    description: "Produto infantil exibido para simular a vitrine de mamae e bebe.",
    caution: "Consulte orientacao profissional para escolha adequada.",
    stock: "Disponivel hoje",
  },
  {
    id: "fralda-babysec",
    name: "Fralda Babysec",
    detail: "Pacote G",
    category: "Mamãe e bebê",
    price: 42.9,
    color: "#f8f0ff",
    ink: "#73509b",
    round: false,
    image: "assets/category-baby.jpg",
    tag: "Mamae e bebe",
    description: "Fralda demonstrativa para compra rapida por categoria.",
    caution: "Tamanho e disponibilidade podem variar por unidade.",
    stock: "Disponivel hoje",
  },
  {
    id: "pantene",
    name: "Pantene",
    detail: "Shampoo 400ml",
    category: "Perfumaria",
    price: 24.9,
    color: "#f5df9b",
    ink: "#6f531b",
    round: false,
    image: "assets/category-hair.jpg",
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
    image: "assets/category-hygiene.jpg",
    tag: "Higiene pessoal",
    description: "Produto de higiene para simular navegacao e compra por categoria.",
    caution: "Produto sujeito a disponibilidade por loja.",
    stock: "Disponivel hoje",
  },
  {
    id: "rexona",
    name: "Rexona",
    detail: "Desodorante aerosol 150ml",
    category: "Conveniência",
    price: 18.9,
    color: "#e8f3ec",
    ink: "#14593a",
    round: false,
    image: "assets/category-hygiene.jpg",
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
    image: "assets/products/protetor-solar.jpg",
    tag: "Dermo",
    description: "Dermocosmetico demonstrativo para a vitrine de beleza.",
    caution: "Consulte disponibilidade e versao antes de finalizar.",
    stock: "Sob consulta",
  },
  {
    id: "shampoo-pet",
    name: "Shampoo Pet",
    detail: "500ml",
    category: "Pet",
    price: 31.9,
    color: "#fff1df",
    ink: "#7a4214",
    round: false,
    image: "assets/category-pet.jpg",
    tag: "Pet",
    description: "Produto pet demonstrativo para simular a categoria.",
    caution: "Consulte orientacao para uso conforme o animal.",
    stock: "Sob consulta",
  },
];

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
const PIX_DISCOUNT_RATE = 0.05;
const LOYALTY_PROGRAM_NAME = "Cliente ON";
const LOYALTY_POINTS_PER_REAL = 1;
const LOYALTY_EXAMPLE_BALANCE = 320;
const LOYALTY_POINTS_PER_REAL_DISCOUNT = 100;
const STORE_WHATSAPP_NUMBER = "5516997997878";
const PIX_CNPJ_KEY = "58757644400109";
const PIX_MERCHANT_NAME = "DROGARIA ONORIO";
const PIX_MERCHANT_CITY = "RIBEIRAO PRETO";
const roundMoney = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

function getCustomerHeaderName() {
  return state.customer.name || state.customer.fullName || "Cliente Onório";
}

function updateAccountHeader() {
  const accountButton = document.querySelector("#login-top");
  const accountTitle = document.querySelector("#account-title");
  const accountSubtitle = document.querySelector("#account-subtitle");

  if (!accountTitle || !accountSubtitle) {
    return;
  }

  if (state.loggedIn) {
    const customerName = getCustomerHeaderName();
    accountTitle.textContent = customerName;
    accountSubtitle.textContent = "Minha conta";
    accountButton?.setAttribute("aria-label", `Minha conta de ${customerName}`);
    return;
  }

  accountTitle.textContent = "Cliente Onório";
  accountSubtitle.textContent = "Entrar ou cadastrar";
  accountButton?.setAttribute("aria-label", "Entrar ou cadastrar na Drogaria Onório");
}

const pickupStores = [
  {
    id: "loja-portugal",
    name: "Loja 1 - Av Portugal 2777",
    address: "Jd Botânico - Ribeirão Preto/SP",
    time: "Retirada grátis em até 60 minutos",
    fullAddress: "Av. Portugal, 2777 - Jardim Botânico - Ribeirão Preto/SP",
    phone: "(16) 3442-2440",
    phoneHref: "+551634422440",
    email: "onoriodrogaria@gmail.com",
    lat: -21.2099552,
    lng: -47.7908571,
  },
  {
    id: "loja-arnaldo",
    name: "Loja 2 - Av Arnaldo Victaliano 1199",
    address: "Iguatemi - Ribeirão Preto/SP",
    time: "Retirada grátis em até 60 minutos",
    fullAddress: "Av. Arnaldo Victaliano, 1191 - Iguatemi - Ribeirão Preto/SP",
    phone: "(16) 3618-0883",
    phoneHref: "+551636180883",
    email: "drogariaciasaude@yahoo.com.br",
    lat: -21.1957848,
    lng: -47.7804726,
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
    text: "Pix com 5% de desconto, Mercado Pago, PicPay, boleto e cartao de credito em ate 3x sem juros, ou ate 6x acima de R$ 1.000,00.",
    cards: [
      ["Pix", "5% de desconto"],
      ["Cartao", "Ate 6x sem juros acima de R$ 1.000,00"],
      ["Mercado Pago", "Disponivel no checkout"],
      ["PicPay e boleto", "Disponiveis no checkout"],
    ],
    primary: ["Ir para pagamento", "pagamento"],
  },
  servicos: {
    eyebrow: "Saude",
    title: "Servicos da Drogaria Onorio",
    text: "Area para consultas, testes, vacinacao, orientacao farmaceutica e atendimento da loja.",
    cards: [
      ["Vacinas", "Consultar disponibilidade"],
      ["Testes rapidos", "Agendamento demonstrativo"],
      ["Servicos farmaceuticos", "Orientacao e acompanhamento"],
    ],
    primary: ["Falar com atendimento", "atendimento"],
  },
  vacinas: {
    eyebrow: "Servicos",
    title: "Vacinas",
    text: "Tela demonstrativa para consultar disponibilidade de vacinas e iniciar um agendamento.",
    cards: [
      ["Gripe", "Consultar unidade"],
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
  blackfriday: {
    eyebrow: "Campanha",
    title: "Black Friday Onorio",
    text: "Pagina reservada para campanhas especiais, descontos progressivos e ofertas sazonais da drogaria.",
    cards: [
      ["Ofertas relampago", "Produtos selecionados por tempo limitado"],
      ["Genéricos", "Campanhas com descontos de ate 95% quando disponiveis"],
      ["Leve 3 pague 2", "Promocoes combinadas em produtos participantes"],
    ],
    primary: ["Ver descontos", "descontos"],
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

const getProduct = (id) => products.find((product) => product.id === id);

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

function getDeliveryFeeFromDistance(distanceKm) {
  return distanceKm > DELIVERY_DISTANCE_LIMIT_KM ? DELIVERY_FEE_FAR : DELIVERY_FEE_CLOSE;
}

function currentDeliveryFee() {
  return state.deliveryQuote?.fee || DELIVERY_FEE_CLOSE;
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

  return {
    cep,
    formattedCep: formatCep(cep),
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
    fee: getDeliveryFeeFromDistance(distanceKm),
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
  return `
    <div class="shipping-result">
      <div>
        <strong>${escapeHtml(quote.address || `CEP ${quote.formattedCep}`)}</strong>
        <span>Loja mais próxima: ${escapeHtml(quote.nearestStoreName)} · ${formatDistance(quote.distanceKm)}</span>
      </div>
      <div>
        <small>Taxa de entrega</small>
        <strong>${formatCurrency(quote.fee)}</strong>
      </div>
    </div>
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
  return total > 1000 ? 6 : 3;
}

function cardInstallmentText(total) {
  const installments = maxCardInstallments(total);
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
    const haystack = normalizeText(`${product.name} ${product.detail} ${product.category} ${product.tag}`);
    return inCategory && (!query || haystack.includes(query));
  });
}

function itemImage(item, className = "checkout-product-img") {
  return `<img class="${className}" src="${escapeHtml(item.image || "assets/products/prescription-box.svg")}" alt="${escapeHtml(item.name)}" loading="lazy" />`;
}

function cardFlags() {
  return `
    <span class="mini-flag visa">Visa</span>
    <span class="mini-flag mastercard">Master</span>
    <span class="mini-flag amex">Amex</span>
    <span class="mini-flag elo">Elo</span>
  `;
}

function digitalPaymentFlags() {
  return `
    <span class="mini-flag mercado-pago">MP</span>
    <span class="mini-flag picpay">PicPay</span>
    <span class="mini-flag boleto">Boleto</span>
    <span class="mini-flag pix">Pix</span>
  `;
}

function checkoutHeader() {
  return `
    <header class="checkout-header">
      <a class="checkout-logo" href="#" data-route="#home" aria-label="Voltar para a loja">
        <img src="assets/onorio-logo.png" alt="Drogaria Onório" />
      </a>
      <div class="checkout-header-info">
        <span>${svg("headset")} Central de atendimento</span>
        <span>${svg("shield")} Ambiente 100% seguro</span>
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
        <span>${state.delivery === "home" ? `Entrega domicílio${state.deliveryQuote ? ` (${formatDistance(state.deliveryQuote.distanceKm)})` : ""}` : "Retirada na loja"}</span>
        <strong>${shipping ? formatCurrency(shipping) : "Grátis"}</strong>
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

  return `
    <div class="checkout-card customer-review-card">
      <div class="customer-welcome-copy">
        <span>Cadastro do cliente</span>
        <h1>Olá, ${escapeHtml(firstName)}. Obrigado pela confiança.</h1>
        <p>Confira seus dados cadastrados antes de seguir com a compra na Drogaria Onório.</p>
      </div>
      <div class="customer-data-grid">
        <div>
          <span>Nome completo</span>
          <strong>${escapeHtml(fullName)}</strong>
        </div>
        <div>
          <span>CPF</span>
          <strong>${escapeHtml(state.customer.cpf || "CPF cadastrado")}</strong>
        </div>
        <div>
          <span>CEP cadastrado</span>
          <strong>${escapeHtml(customerCep || "Ainda não informado")}</strong>
        </div>
        <div class="customer-points-box">
          <span>Pontos disponíveis</span>
          <strong>${availablePoints} pontos</strong>
          <small>Valem ${formatCurrency(pointsToDiscount(availablePoints))} de desconto. Nesta compra: +${pointsEarned} pontos.</small>
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
            <input id="cep-input" type="text" inputmode="numeric" autocomplete="postal-code" maxlength="9" placeholder="Insira seu CEP" value="${escapeHtml(formatCep(state.cep))}" />
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
        <div class="summary-line"><span>Frete</span><strong>${state.delivery === "home" ? formatCurrency(shipping) : "Calcule o CEP"}</strong></div>
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
                      <input data-checkout-state="cep" type="text" inputmode="numeric" autocomplete="postal-code" maxlength="9" placeholder="Insira seu CEP" value="${escapeHtml(formatCep(state.cep))}" />
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
          <div class="summary-line"><span>${state.delivery === "home" ? "Frete" : "Retirada"}</span><strong>${state.delivery === "home" ? formatCurrency(shipping) : "Grátis"}</strong></div>
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
            <span class="payment-flags-inline"><span class="mini-flag picpay">PicPay</span></span>
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
            <span class="payment-flags-inline"><span class="mini-flag mercado-pago">MP</span></span>
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
            <span class="payment-flags-inline"><span class="mini-flag boleto">Boleto</span></span>
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
                <small>${total > 1000 ? "Compras acima de R$ 1.000,00 podem parcelar em até 6x sem juros." : "Compras até R$ 1.000,00 podem parcelar em até 3x sem juros."}</small>
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

function renderFinishedPage() {
  const { total, pointsEarned, pointsDiscount } = calculateCart();
  return `
    ${checkoutHeader()}
    <main class="login-page finish-page">
      <section class="login-card finish-card">
        <img src="assets/onorio-avatar-transparent.png" alt="" />
        <h1>Pedido finalizado</h1>
        <p>Recebemos a intenção de compra no protótipo da Drogaria Onório.</p>
        <strong>${formatCurrency(total)}</strong>
        <span>${state.usePoints ? `Cliente ON usado: - ${formatCurrency(pointsDiscount)}` : "Cliente ON não utilizado nesta compra"}</span>
        <span>Novos pontos acumulados: +${pointsEarned}</span>
        <button type="button" class="checkout-primary" data-route="#home">Voltar para a loja</button>
      </section>
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

function infoPrimaryAction(page) {
  const [label, action] = page.primary || ["Voltar para a loja", "home"];

  if (action === "whatsapp") {
    return `<a class="checkout-primary info-action-link" href="https://wa.me/${STORE_WHATSAPP_NUMBER}" target="_blank" rel="noopener">${label}</a>`;
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
  const isCheckout =
    ["#cesta", "#login", "#revisao", "#entrega", "#pagamento", "#finalizado"].includes(route) ||
    isCatalog ||
    isInfo;

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
  } else if (isInfo) {
    checkoutFlow.innerHTML = renderInfoPage(decodeURIComponent(route.replace("#pagina/", "")) || "atendimento");
  } else {
    checkoutFlow.innerHTML = renderers[route]();
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

function navigateTo(route) {
  state.storeModalOpen = false;
  closeCartDrawer();
  closeModal();

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
      <div class="product-art">${productMedia(product)}</div>
      <div class="product-copy">
        <h3>${product.name}</h3>
        <p>${product.detail}</p>
        <small class="stock-chip">${escapeHtml(product.stock || "Consultar estoque")}</small>
        <button type="button" class="detail-button" data-detail="${product.id}">
          Ver detalhes
        </button>
        <div class="product-price">${formatCurrency(product.price)}</div>
        <button type="button" class="add-button" data-add="${product.id}">
          Adicionar
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
  const cartPill = document.querySelector("#cart-pill");
  const cartCount = document.querySelector("#cart-count");
  const cartCaption = document.querySelector("#cart-caption");
  const cartTotalPill = document.querySelector("#cart-total-pill");
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

  cartCount.textContent = cartItemLabel;
  cartTotalPill.textContent = formatCurrency(total);
  cartPill.setAttribute("aria-label", `${cartItemLabel} na cesta. Total ${formatCurrency(total)}.`);
  cartCaption.textContent =
    itemCount === 0 ? "Nenhum item ainda" : `${itemCount} ${itemCount === 1 ? "item" : "itens"}`;
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
    `Endereço/bairro: ${state.customer.address || "Não informado"}`,
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
  const header = document.querySelector(".market-header");
  if (!header) return;

  let ticking = false;
  const updateHeader = () => {
    header.classList.toggle("is-compact", window.scrollY > 96);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    },
    { passive: true },
  );

  updateHeader();
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
    const modalAddButton = event.target.closest("[data-modal-add]");
    const closeModalButton = event.target.closest("[data-modal-close]");
    const copyOrderButton = event.target.closest("[data-copy-order]");
    const openWhatsAppButton = event.target.closest("[data-open-whatsapp]");
    const cookieButton = event.target.closest("[data-cookie-close]");
    const campaignActionButton = event.target.closest("[data-campaign-action]");
    const routeButton = event.target.closest("[data-route]");
    const catalogRouteButton = event.target.closest("[data-catalog-route]");
    const infoPageButton = event.target.closest("[data-info-page]");
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

    if (routeButton) {
      event.preventDefault();
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
      navigateTo(`#pagina/${encodeURIComponent(infoPageButton.dataset.infoPage)}`);
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
      const cep = normalizeCep(cepInput?.value || state.cep);

      state.cep = formatCep(cep);
      state.delivery = "home";
      state.shippingStatus = "loading";
      state.shippingError = "";
      renderCart();

      try {
        const quote = await quoteDeliveryByCep(cep);
        state.deliveryQuote = quote;
        state.selectedStore = quote.nearestStoreId;
        state.shippingStatus = "done";
        state.shippingError = "";
        showToast(`Frete calculado: ${formatCurrency(quote.fee)} para ${formatDistance(quote.distanceKm)}.`);
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
      return;
    }

    if (openStoreButton) {
      state.storeModalOpen = true;
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

    if (
      document.body.classList.contains("cart-open") &&
      !event.target.closest("#cart-panel") &&
      !event.target.closest("#cart-pill")
    ) {
      closeCartDrawer();
    }

    if (addButton) {
      addToCart(addButton.dataset.add);
    }

    if (detailButton) {
      openProductModal(detailButton.dataset.detail);
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
      if (action === "vaccine") {
        navigateTo("#pagina/vacinas");
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
        showToast("Pix ganha 5% de desconto; cartões em até 3x sem juros.");
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
    }

    if (stateField) {
      state[stateField.dataset.checkoutState] = stateField.value;
      if (stateField.dataset.checkoutState === "cep" && normalizeCep(state.deliveryQuote?.cep) !== normalizeCep(stateField.value)) {
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
initCampaignCarousel();
initCollapsingCategoryBar();
bindEvents();
window.addEventListener("hashchange", renderCart);
