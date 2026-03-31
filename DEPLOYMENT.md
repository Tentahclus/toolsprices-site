# 🚀 Deploy Instructions - ToolsPrices.com

## Pré-requisitos

1. **Conta GitHub** - https://github.com/signup (grátis)
2. **Conta Cloudflare** - https://dash.cloudflare.com/sign-up (grátis)
3. **Git instalado** - https://git-scm.com/

---

## Passo 1: Criar Repositório no GitHub

### Através da Web:
1. Visite: https://github.com/new
2. Nome do repositório: `toolsprices.com` (ou o nome que preferir)
3. Tornar público (para SEO)
4. **Não** inicializar com README
5. Clique em "Create repository"

### Conectar ao Git (no terminal):
```bash
cd C:\Users\herna\.openclaw\workspace-jarvis-coding\toolsprices

# Adicionar remote (substitua SEU_USERNAME)
git remote add origin https://github.com/SEU_USERNAME/toolsprices.com.git

# Verificar remote
git remote -v

# Fazer push para GitHub
git push -u origin main
```

---

## Passo 2: Deploy no Cloudflare Pages

### Opção A: Deploy Automático via GitHub (Recomendado)

1. **Aceder ao Cloudflare Pages**
   - Vá para: https://dash.cloudflare.com/
   - Clique em "Workers & Pages" no menu esquerdo
   - Clique em "Create application"

2. **Conectar ao GitHub**
   - Selecione "Pages"
   - Clique em "Connect to Git"
   - Autorize Cloudflare a aceder ao GitHub (se necessário)
   - Encontre e selecione `toolsprices.com`

3. **Configurações do Build**
   - Project name: `toolsprices`
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `(deixar vazio)`
   - Build output directory: `/`
   - Root directory: `(deixar vazio)`

4. **Deploy**
   - Clique em "Save and Deploy"
   - Aguarde ~30 segundos para deploy inicial
   - Verá uma URL como: `https://toolsprices.pages.dev`

---

## Passo 3: Configurar Custom Domain

### Adicionar Domain no Cloudflare:

1. **Ir para o Projeto**
   - No dashboard do Cloudflare Pages
   - Clique no projeto `toolsprices`
   - Vá para "Custom domains"

2. **Adicionar Domain**
   - Clique em "Set up a custom domain"
   - Introduza: `toolsprices.com` ou subdomínio como `tools.seudominio.com`
   - Clique "Continue"

3. **Configurar DNS** (se tem domain no outro registrador)

   **Opção 1: Domain registado no Cloudflare:**
   - DNS records criados automaticamente ✓

   **Opção 2: Domain noutro registrador (GoDaddy, Namecheap, etc):**
   - Adicionar CNAME record:
     ```
     Type: CNAME
     Name: tools (ou @ para root)
     Value: toolsprices.pages.dev
     TTL: 3600
     ```
   - OU adicionar A records (mostrados pelo Cloudflare):
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     TTL: 3600
     ```

4. **Ativar HTTPS**
   - Aguarde cert SSL ser gerado (~1-5 minutos)
   - Activado automaticamente pelo Cloudflare ✓

---

## Passo 4: Verificar Deploy

1. **Visite o site:**
   - URL Cloudflare: `https://toolsprices.pages.dev`
   - URL custom: `https://toolsprices.com` (ou seu domain)

2. **Verificar páginas:**
   - Homepage: `https://toolsprices.com/`
   - Exemplo pricing: `https://toolsprices.com/pricing/notion.html`
   - Sitemap: `https://toolsprices.com/sitemap.xml`
   - Robots: `https://toolsprices.com/robots.txt`

3. **Testar SEO:**
   - Google Search Console: https://search.google.com/search-console/
   - Rich Results Test: https://search.google.com/test/rich-results
   - Lighthouse: Abra DevTools > Lighthouse

---

## Deploy Automático (Auto-Deploy)

Toda vez que fizer `git push`, o Cloudflare faz deploy automático:

```bash
# Editar ficheiros
# Adicionar
git add .
git commit -m "Add new pricing page for XYZ"
git push
# Deploy automático começa!
```

---

## Opção B: Deploy via Wrangler CLI (Sem GitHub)

### 1. Instalar Wrangler
```bash
npm install -g wrangler
```

### 2. Login no Cloudflare
```bash
wrangler login
# Browser abre para autorizar
```

### 3. Deploy direto
```bash
cd C:\Users\herna\.openclaw\workspace-jarvis-coding\toolsprices
wrangler pages deploy . --project-name=toolsprices
```

### 4. Adicionar custom domain
```bash
wrangler pages custom domain create toolsprices toolsprices.com
```

---

## Adicionar Analytics (Opcional)

### Google Analytics 4

1. **Criar propriedade GA4:**
   - https://analytics.google.com/
   - Configurar > Contagem de visualizações de página

2. **Adicionar tracking ID:**
   - Copie Measurement ID (ex: `G-XXXXXXXXXX`)

3. **Inserir em todos os HTMLs:**
   Adicionar antes de `</head>`:

   ```html
   <!-- Google Analytics 4 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Cloudflare Web Analytics (Simplificado)

1. Ativar em: https://dash.cloudflare.com/analytics
2. Adicionar script antes de `</body>`:
   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js'
           data-cf-beacon='{"token": "SEU_TOKEN"}'></script>
   ```

---

## Submeter Sitemap ao Google

### Google Search Console

1. Aceder: https://search.google.com/search-console/
2. Adicionar propriedade: `https://toolsprices.com`
3. Provar propriedade (via DNS ou HTML file upload)
4. Vá para: Sitemaps
5. Introduzir: `sitemap.xml`
6. Clique em "Enviar"

### Bing Webmaster Tools

1. Aceder: https://www.bing.com/webmasters/
2. Adicionar site
3. Submeter sitemap em "Sitemaps"

---

## Manutenção e Updates

### Adicionar novas ferramentas:

**Método rápido (sem regenerar tudo):**
```bash
# Editar apenas os ficheiros necessários
# Copiar template.html → pricing/new-tool.html
# Editar placeholders

# Update index.html (adicionar link)
# Update sitemap.xml (adicionar URL)

git add .
git commit -m "Add new tool: XYZ"
git push
# Deploy automático!
```

**Método programático:**
```bash
# Editar generate-pages.js (adicionar tool à lista)
node generate-pages.js
node update-index.js
node generate-sitemap.js

git add .
git commit -m "Add new tools via generator"
git push
```

### Atualizar preços:

1. Editar HTMLs diretamente ou via script
2. Testar localmente (abrir em browser)
3. Commit e push

---

## CDN e Caching

O Cloudflare Pages fornece automaticamente:
- ✅ CDN global (250+ localizações)
- ✅ Edge caching
- ✅ HTTP/2, HTTP/3
- ✅ Image optimization
- ✅ Auto-minification
- ✅ Browser caching (4 horas)

Para customizar: Cloudflare Pages > Settings > Cache > Configuração

---

## Troubleshooting

### Build falha:
- Verificar ficheiros corrompidos
- Limpar cache do Cloudflare
- Re-deploy manualmente

### Domain não funciona:
- Verificar DNS records
- Aguardar propagação DNS (até 24-48h)
- Verificar configurações de SSL

### SEO não indexa:
- Verificar robots.txt
- Submeter sitemap ao Google Search Console
- Aguardar indexação (pode demorar dias)

### Página 404:
- Verificar nome ficheiro (minusculas)
- Verificar path em sitemap.xml
- Limpar cache do browser

---

## Resumo

✅ Estrutura completa (98 páginas)
✅ SEO otimizado (Schema, meta tags)
✅ Pronto para deploy
✅ Git inicializado
✅ Scripts de geração incluídos

### Próximos passos:
1. Criar repositório GitHub
2. Conectar ao Cloudflare Pages
3. Deploy inicial
4. Adicionar custom domain
5. Submeter sitemap ao Google
6. Adicionar conteúdo único (via Poet agent)

---

**URLs úteis:**
- Dashboard Cloudflare: https://dash.cloudflare.com/
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- GitHub: https://github.com/
- Google Search Console: https://search.google.com/search-console/

**Suporte:**
- Cloudflare Community: https://community.cloudflare.com/
- GitHub Support: https://support.github.com/

---

**Tempo estimado total:** 15-30 minutos para deploy inicial
**Custo:** Grátis (Cloudflare Pages Free Tier)