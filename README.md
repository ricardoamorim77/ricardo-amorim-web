# Ricardo Amorim - Landing Page de Alta Conversão

Landing Page profissional para agência de criação de sites e automação com IA, focada em pequenas empresas.

## 🎯 Características

- **Design Tech-Forward Minimalism**: Azul escuro com verde neon, tipografia ousada
- **100% Responsivo**: Otimizado para desktop, tablet e mobile
- **Alta Conversão**: CTAs dominantes, formulário integrado ao WhatsApp
- **SEO Otimizado**: Meta tags, estrutura semântica, palavras-chave
- **Botão WhatsApp Flutuante**: Acesso rápido em todas as páginas
- **Integração Direta**: Formulário envia dados formatados para WhatsApp

## 📋 Seções da Página

1. **Hero Section**: Título impactante com CTA principal
2. **Showcase de Modelos**: 3 exemplos de vitrines prontas
3. **Serviços e Planos**: 3 planos + add-on de IA
4. **Diferenciais de IA**: Destaque para automação 24h
5. **Formulário de Orçamento**: Integrado com WhatsApp
6. **Footer**: Links de contato e redes sociais

## 🚀 Como Usar

### 1. Instalação
```bash
cd ricardo-amorim-landing
pnpm install
```

### 2. Desenvolvimento
```bash
pnpm dev
```
Acesse `http://localhost:3000` (ou a porta indicada)

### 3. Build para Produção
```bash
pnpm build
```

### 4. Preview de Produção
```bash
pnpm preview
```

## 🎨 Paleta de Cores

- **Primário**: #0F172A (Azul Escuro)
- **Accent**: #00FF88 (Verde Neon)
- **Secundário**: #1E293B (Cinza Escuro)
- **Fundo**: #0A0E27 (Preto Profundo)
- **Texto**: #FFFFFF (Branco Puro)

## 🔤 Tipografia

- **Títulos**: Poppins Bold 700
- **Subtítulos**: Poppins SemiBold 600
- **Corpo**: Inter Regular 400
- **CTAs**: Poppins Bold 700

## 📱 Responsividade

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔗 Integração WhatsApp

O formulário envia dados formatados para:
**WhatsApp: (62) 99461-3564**

Dados enviados:
- Nome da Empresa
- Tipo de Site
- Desejo de Assistente IA
- Visão do Site
- Requisitos Especiais

## 📊 SEO

Otimizado para busca por "Ricardo Amorim Web" com:
- Meta tags descritivas
- Palavras-chave relevantes
- Estrutura semântica
- Open Graph tags
- Título e descrição únicos

## 📁 Estrutura de Arquivos

```
ricardo-amorim-landing/
├── client/
│   ├── public/          # Arquivos estáticos
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas (Home, NotFound)
│   │   ├── contexts/    # Contextos React
│   │   ├── lib/         # Utilitários
│   │   ├── App.tsx      # Roteamento
│   │   ├── main.tsx     # Entry point
│   │   └── index.css    # Estilos globais
│   └── index.html       # HTML base
├── server/              # Servidor Express (placeholder)
├── package.json         # Dependências
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias

- **React 19**: Framework UI
- **Tailwind CSS 4**: Estilos utilitários
- **TypeScript**: Type safety
- **Wouter**: Roteamento leve
- **shadcn/ui**: Componentes acessíveis
- **Lucide React**: Ícones
- **Vite**: Build tool

## ✨ Customizações

### Mudar Cores
Edite `client/src/index.css` nas variáveis CSS:
```css
--primary: #0F172A;
--accent: #00FF88;
```

### Mudar Número WhatsApp
Edite em `client/src/components/WhatsAppButton.tsx` e `client/src/pages/Home.tsx`:
```typescript
const whatsappNumber = '5562994613564';
```

### Adicionar Novas Seções
Crie componentes em `client/src/components/` e importe em `client/src/pages/Home.tsx`

## 📈 Performance

- Lazy loading de imagens
- Code splitting automático
- Minificação em produção
- Cache de assets com hash

## 🔒 Segurança

- Sanitização de inputs
- HTTPS recomendado
- Proteção contra XSS
- Headers de segurança

## 📞 Suporte

Para dúvidas ou customizações:
- WhatsApp: (62) 99461-3564
- Instagram: @ricardo_amorim7

## 📄 Licença

© 2026 Ricardo Amorim - Todos os direitos reservados.
