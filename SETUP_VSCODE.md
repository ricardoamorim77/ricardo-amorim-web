# 🚀 Setup Rápido no VS Code

## Passo 1: Abrir a Pasta no VS Code

1. Abra o VS Code
2. Clique em `File` → `Open Folder`
3. Selecione a pasta `ricardo-amorim-landing`

## Passo 2: Instalar Dependências

1. Abra o Terminal Integrado: `Ctrl + ~` (ou `Cmd + ~` no Mac)
2. Execute:
```bash
pnpm install
```

Aguarde a instalação completar (pode levar 2-3 minutos).

## Passo 3: Iniciar o Servidor de Desenvolvimento

No terminal, execute:
```bash
pnpm dev
```

Você verá algo como:
```
➜  Local:   http://localhost:3000/
➜  Network: http://169.254.0.21:3000/
```

## Passo 4: Abrir no Navegador

Clique no link `http://localhost:3000/` ou abra manualmente no seu navegador.

## 📝 Arquivos Importantes para Editar

### Mudar Conteúdo da Página
- **Arquivo**: `client/src/pages/Home.tsx`
- **O que muda**: Títulos, textos, seções, planos

### Mudar Cores e Estilos
- **Arquivo**: `client/src/index.css`
- **O que muda**: Paleta de cores, fontes, temas

### Mudar Número WhatsApp
- **Arquivo 1**: `client/src/components/WhatsAppButton.tsx` (linha 5)
- **Arquivo 2**: `client/src/pages/Home.tsx` (linha 30)
- **O que muda**: Número de WhatsApp para contato

### Mudar Meta Tags e SEO
- **Arquivo**: `client/index.html`
- **O que muda**: Título, descrição, keywords

## 🔄 Hot Reload

Qualquer mudança que você fizer nos arquivos será automaticamente refletida no navegador (sem precisar recarregar manualmente).

## 🏗️ Build para Produção

Quando terminar o desenvolvimento, execute:
```bash
pnpm build
```

Isso criará uma pasta `dist/` com os arquivos otimizados para produção.

## 📦 Estrutura de Pastas

```
ricardo-amorim-landing/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          ← EDITAR CONTEÚDO AQUI
│   │   ├── components/
│   │   │   └── WhatsAppButton.tsx ← EDITAR WHATSAPP AQUI
│   │   └── index.css             ← EDITAR CORES AQUI
│   └── index.html                ← EDITAR META TAGS AQUI
├── package.json
├── README.md
└── SETUP_VSCODE.md              ← Este arquivo
```

## ⚡ Dicas Úteis

### Formatar Código
```bash
pnpm format
```

### Verificar Erros TypeScript
```bash
pnpm check
```

### Preview de Produção
```bash
pnpm preview
```

## 🆘 Troubleshooting

### Porta 3000 já está em uso
Se receber erro "Port 3000 is in use", o Vite usará automaticamente outra porta (3001, 3002, etc).

### Dependências não instalam
Tente:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro de TypeScript
Verifique se salvou o arquivo e se não há erros de sintaxe.

## 📞 Contato

Para dúvidas:
- WhatsApp: (62) 99461-3564
- Instagram: @ricardo_amorim7

---

**Pronto! Sua Landing Page está 100% funcional e pronta para customizar!** 🎉
