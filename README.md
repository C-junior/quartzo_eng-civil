# Quartzo Engenharia - Landing Page

Uma landing page moderna e profissional para empresa de engenharia civil, desenvolvida com Vue.js 3, Tailwind CSS e Vite.

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework reativo para interface de usuário
- **JavaScript ES6+** - Linguagem de programação principal
- **Tailwind CSS v3** - Framework de CSS utility-first
- **Vite** - Build tool e servidor de desenvolvimento
- **Vue Router** - Roteamento single-page application
- **Pinia** - Gerenciamento de estado
- **PostCSS** - Processamento de CSS

## 📋 Funcionalidades

### ✅ Seções Implementadas
- **Header/Navegação** - Menu responsivo com logo e navegação
- **Hero Section** - Apresentação principal com CTAs
- **Serviços** - Cards interativos dos serviços oferecidos
- **Sobre a Empresa** - História, missão, visão e valores
- **Portfólio** - Galeria de projetos realizados
- **Contato** - Formulário completo e informações de contato
- **Footer** - Links, informações e certificações

### 🎨 Recursos de Design
- **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- **Paleta de Cores Profissional** - Cores wine/vermelho para engenharia
- **Tipografia Moderna** - Fontes Inter e Poppins
- **Animações Suaves** - Transições e hover effects
- **Componentes Reutilizáveis** - BaseButton, BaseCard, BaseInput, BaseModal

### 🛠️ Funcionalidades Técnicas
- **Formulário de Contato** - Validação completa e integração com API
- **Navegação Suave** - Scroll suave entre seções
- **SEO Otimizado** - Meta tags e dados estruturados
- **Performance** - Lazy loading e otimizações
- **Acessibilidade** - Navegação por teclado e ARIA labels

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── layout/              # Componentes de layout
│   │   ├── HeaderSection.vue
│   │   └── FooterSection.vue
│   ├── sections/            # Seções da landing page
│   │   ├── HeroSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ContactSection.vue
│   │   ├── ServiceCard.vue
│   │   └── ProjectCard.vue
│   ├── ui/                  # Componentes base reutilizáveis
│   │   ├── BaseButton.vue
│   │   ├── BaseCard.vue
│   │   ├── BaseInput.vue
│   │   └── BaseModal.vue
│   ├── forms/               # Componentes de formulário
│   │   └── ContactForm.vue
│   └── LandingPage.vue      # Componente principal
├── stores/
│   └── main.js              # Store Pinia para gerenciamento de estado
├── services/
│   └── api.js               # Camada de serviços para API
├── assets/
│   └── css/
│       └── main.css         # Estilos principais com Tailwind
├── App.vue                  # Componente raiz
└── main.js                  # Ponto de entrada da aplicação
```

## 🎯 Paleta de Cores

### Cores Primárias
- **Wine Dark** (#7B1E26) - Vinho escuro para títulos e botões
- **Primary Red** (#C62828) - Vermelho intenso para destaques
- **White** (#FFFFFF) - Branco puro para fundo principal

### Cores Secundárias
- **Gray Light** (#F5F5F5) - Cinza claro para separações
- **Gray Dark** (#333333) - Cinza grafite para texto
- **Accent Green** (#059669) - Verde para sucesso
- **Warning** (#f59e0b) - Amarelo para avisos

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 📱 Responsividade

O projeto utiliza uma abordagem mobile-first com breakpoints:
- **sm**: 640px (tablets pequenos)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)
- **2xl**: 1536px (desktops grandes)

## 🎨 Componentes Reutilizáveis

### BaseButton
Botão com múltiplas variantes e estados:
- Variantes: primary, secondary, outline, ghost
- Tamanhos: sm, md, lg
- Estados: loading, disabled
- Suporte a fullWidth

### BaseCard
Card flexível com slots para header, body e footer:
- Variantes: default, elevated, outlined, flat
- Suporte a hover effects
- Padding configurável

### BaseInput
Input/textarea com validação e estados:
- Tipos: text, email, tel, textarea
- Validação em tempo real
- Mensagens de erro e hint
- Labels e placeholders

### BaseModal
Modal responsivo com animações:
- Tamanhos configuráveis
- Backdrop clicável
- Escape key para fechar
- Slots para header, body e footer

## 📞 Informações de Contato (Exemplo)

- **Telefone**: (11) 99999-9999
- **E-mail**: contato@quartzoeng.com.br
- **Endereço**: Rua da Engenharia, 123 - Centro, São Paulo - SP
- **WhatsApp**: Integração direta para atendimento

## 🎯 Serviços Destacados

1. **Projeto Estrutural** - Cálculo e dimensionamento de estruturas
2. **Consultoria Técnica** - Assessoria especializada
3. **Gerenciamento de Obras** - Acompanhamento completo
4. **Regularização** - Documentação e aprovações

## 🏆 Certificações Destacadas

- CREA-SP - Registro Ativo
- ISO 9001:2015 - Qualidade Certificada
- CAU - Conselho de Arquitetura
- NR-18 - Segurança no Trabalho

## 📈 SEO e Performance

### Otimizações Implementadas
- Meta tags completas
- Dados estruturados (Schema.org)
- Imagens otimizadas com lazy loading
- CSS purging automático
- Bundle splitting
- Preload de fontes críticas

### Acessibilidade
- Navegação por teclado
- ARIA labels
- Contraste adequado
- Foco visível
- Textos alternativos

## 🔧 Configuração Personalizada

### Tailwind CSS
O arquivo `tailwind.config.js` inclui:
- Cores personalizadas da marca
- Fontes customizadas (Inter, Poppins)
- Espaçamentos extras
- Utilitários personalizados

### Vite
Configurado com:
- Alias para imports (@/)
- Plugin Vue otimizado
- Servidor de desenvolvimento rápido
- Hot module replacement

## 📄 Licença

Este projeto foi desenvolvido como uma landing page profissional para empresa de engenharia civil.

---

**Desenvolvido com ❤️ usando Vue.js 3 e Tailwind CSS**