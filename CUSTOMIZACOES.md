# 🎨 Guia de Customizações

Este arquivo contém exemplos práticos de como customizar sua Landing Page.

## 1. Mudar Número WhatsApp

### Local 1: Botão Flutuante
**Arquivo**: `client/src/components/WhatsAppButton.tsx`

Procure por:
```typescript
const whatsappNumber = '5562994613564';
```

Mude para seu número (sem espaços, com código do país):
```typescript
const whatsappNumber = '5511987654321'; // Exemplo: São Paulo
```

### Local 2: Formulário
**Arquivo**: `client/src/pages/Home.tsx`

Procure por:
```typescript
const whatsappUrl = `https://wa.me/5562994613564?text=...`;
```

Mude para o mesmo número.

---

## 2. Mudar Cores

**Arquivo**: `client/src/index.css`

Procure pela seção `:root` e mude as variáveis:

```css
:root {
  /* Tech-Forward Minimalism Color Palette */
  --primary: #0F172A;        /* Azul Escuro - mude aqui */
  --accent: #00FF88;         /* Verde Neon - mude aqui */
  --secondary: #1E293B;      /* Cinza Escuro - mude aqui */
  --background: #0A0E27;     /* Fundo - mude aqui */
  --foreground: #FFFFFF;     /* Texto - mude aqui */
}
```

### Exemplos de Cores:

**Opção 1: Roxo e Laranja (Criativo)**
```css
--primary: #2D1B69;
--accent: #FF6B35;
--secondary: #3D2A6F;
--background: #1A0F2E;
```

**Opção 2: Azul e Ciano (Tech)**
```css
--primary: #0A3D62;
--accent: #00D9FF;
--secondary: #1B5E7F;
--background: #051B2B;
```

**Opção 3: Verde e Ouro (Premium)**
```css
--primary: #1B4332;
--accent: #D4AF37;
--secondary: #2D6A4F;
--background: #0F2818;
```

---

## 3. Mudar Tipografia

**Arquivo**: `client/index.html`

Procure por:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### Alternativas:

**Opção 1: Moderno (Montserrat + Lato)**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Lato:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Depois em `client/src/index.css`:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
}
body {
  font-family: 'Lato', sans-serif;
}
```

**Opção 2: Elegante (Playfair Display + Open Sans)**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
```

---

## 4. Mudar Conteúdo da Página

**Arquivo**: `client/src/pages/Home.tsx`

### Mudar Título Principal
Procure por:
```typescript
<h1 className="text-5xl lg:text-7xl font-bold leading-tight">
  Sua Empresa no <span className="text-accent neon-glow">Topo</span>
</h1>
```

Mude para:
```typescript
<h1 className="text-5xl lg:text-7xl font-bold leading-tight">
  Transforme seu Negócio com <span className="text-accent neon-glow">Tecnologia</span>
</h1>
```

### Mudar Subtítulo
Procure por:
```typescript
<p className="text-xl text-muted-foreground leading-relaxed">
  Sites Profissionais e IA que vende por você
</p>
```

Mude para seu subtítulo.

### Mudar Descrição
Procure por:
```typescript
<p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
  Transformo seu negócio com tecnologia de ponta...
</p>
```

Mude para sua descrição.

---

## 5. Mudar Planos de Preço

**Arquivo**: `client/src/pages/Home.tsx`

Procure pela seção de planos:
```typescript
{[
  {
    title: 'Landing Page Express',
    price: 'R$ 349',
    desc: 'Ideal para profissionais liberais',
    features: ['Design Responsivo', 'SEO Otimizado', ...],
  },
  // ... outros planos
].map((plan, idx) => (
```

Mude os valores conforme necessário.

---

## 6. Mudar Modelos Showcaseados

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:
```typescript
{[
  { name: 'Sport Store', icon: '👟', desc: 'Loja de artigos esportivos...' },
  { name: 'Loja de Moda Urbana', icon: '👕', desc: '...' },
  { name: 'Clínica Bem-Estar', icon: '💆', desc: '...' },
].map((model, idx) => (
```

Mude os nomes, ícones e descrições para seus modelos.

---

## 7. Mudar Meta Tags SEO

**Arquivo**: `client/index.html`

Procure por:
```html
<meta name="description" content="Ricardo Amorim - Criação de sites profissionais..." />
<meta name="keywords" content="Ricardo Amorim, sites profissionais, automação IA..." />
```

Mude para suas palavras-chave e descrição.

---

## 8. Adicionar Nova Seção

### Passo 1: Criar Componente
**Arquivo**: `client/src/components/NovaSecao.tsx`

```typescript
export default function NovaSecao() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4">Minha Nova Seção</h2>
        {/* Seu conteúdo aqui */}
      </div>
    </section>
  );
}
```

### Passo 2: Importar em Home.tsx
No topo de `client/src/pages/Home.tsx`:
```typescript
import NovaSecao from '@/components/NovaSecao';
```

### Passo 3: Adicionar à Página
Procure por `</section>` e adicione:
```typescript
<NovaSecao />
```

---

## 9. Mudar Logo/Branding

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:
```typescript
<h3 className="text-xl font-bold mb-4 text-accent">Ricardo Amorim</h3>
```

Mude para seu nome/marca.

---

## 10. Mudar Links de Redes Sociais

**Arquivo**: `client/src/pages/Home.tsx`

Procure por:
```typescript
<a href="https://instagram.com/ricardo_amorim7" target="_blank" rel="noopener noreferrer">
  Instagram: @ricardo_amorim7
</a>
```

Mude para seus links.

---

## 🎯 Checklist de Customização

- [ ] Número WhatsApp atualizado (2 locais)
- [ ] Cores alteradas conforme marca
- [ ] Tipografia escolhida
- [ ] Título e subtítulo personalizados
- [ ] Descrição da empresa atualizada
- [ ] Planos de preço corretos
- [ ] Modelos de showcase atualizados
- [ ] Meta tags SEO preenchidas
- [ ] Links de redes sociais corretos
- [ ] Nome/logo da empresa atualizado

---

## 📞 Suporte

Se tiver dúvidas:
- WhatsApp: (62) 99461-3564
- Instagram: @ricardo_amorim7

**Divirta-se customizando!** 🚀
