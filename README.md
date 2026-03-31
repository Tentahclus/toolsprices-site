# ToolsPrices.com 🛠️

Diretório de preços de software com SEO programático. Site estático HTML otimizado para bots e motores de busca.

## 🚀 Estrutura do Projeto

```
toolsprices/
├── index.html              # Homepage com lista de ferramentas
├── template.html           # Template base para páginas de preços
├── robots.txt              # SEO - Instruções para crawlers
├── sitemap.xml             # Sitemap com todas as páginas
├── pricing/                # Páginas de preços (98 páginas)
│   ├── notion.html
│   ├── slack.html
│   ├── figma.html
│   └── ...
├── generate-pages.js       # Script para gerar páginas
├── generate-sitemap.js     # Script para gerar sitemap
└── update-index.js         # Script para atualizar homepage
```

## ✨ Características

- ✅ HTML limpo, zero JS pesado
- ✅ Schema markup (Product, SoftwareApplication)
- ✅ Meta tags SEO (title, description, OG, Twitter)
- ✅ Design minimalista (texto + tables)
- ✅ 98 páginas de ferramentas geradas
- ✅ Responsivo (mobile-friendly)
- ✅ Fast loading (< 1s)

## 📦 Deploy - Cloudflare Pages

### Opção 1: Através do GitHub (Recomendado)

1. **Criar repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USERNAME/toolsprices.com.git
   git push -u origin main
   ```

2. **Configurar Cloudflare Pages**
   - Vá para: https://dash.cloudflare.com/
   - Selecione "Workers & Pages"
   - Clique em "Create application" → "Pages"
   - Escolha "Connect to Git"
   - Selecione o repositório toolsprices.com
   - Configurações de build:
     - Framework preset: None
     - Build command: (deixar vazio)
     - Build output directory: `/` (root)
   - Clique em "Save and Deploy"

3. **Configurar Domain**
   - Após deploy, vá para "Custom domains"
   - Clique em "Set up a custom domain"
   - Introduza: `toolsprices.com` ou subdomínio como `tools.seudominio.com`
   - Siga as instruções DNS do Cloudflare

### Opção 2: Upload direto (sem Git)

1. **Instalar Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login no Cloudflare**
   ```bash
   wrangler login
   ```

3. **Fazer deploy**
   ```bash
   cd toolsprices
   wrangler pages deploy . --project-name=toolsprices
   ```

4. **Adicionar custom domain**
   ```bash
   wrangler pages custom domain create toolsprices toolsprices.com
   ```

## 🔧 Adicionar Novas Ferramentas

### Método Rápido (Manual)

1. **Copiar template.html** → `pricing/nova-ferramenta.html`
2. **Substituir placeholders:**
   - `{{ TOOL_NAME }}` → Nome da ferramenta
   - `{{ TOOL_SLUG }}` → URL-friendly slug
   - `{{ TOOL_CATEGORY }}` → Categoria
   - `{{ TOOL_OS }}` → Plataformas suportadas
   - `{{ TOOL_RATING }}` → Rating (ex: 4.7)
   - `{{ TOOL_REVIEWS }}` → Número de reviews
   - `{{ TOOL_URL }}` → URL oficial
   - `{{ TOOL_DESCRIPTION }}` → Descrição curta
   - `{{ TOOL_LONG_DESCRIPTION }}` → Descrição detalhada
   - Preços e planos (PLAN_1, PLAN_2, PLAN_3)
   - Features (FEATURE_1 a FEATURE_6)

3. **Adicionar ao index.html:**
   ```html
   <div class="tool-card">
       <h3>Nova Ferramenta</h3>
       <p>Categoria</p>
       <a href="pricing/nova-ferramenta.html">Ver preços &rarr;</a>
   </div>
   ```

4. **Atualizar sitemap.xml:**
   ```xml
   <url>
       <loc>https://toolsprices.com/pricing/nova-ferramenta.html</loc>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
   </url>
   ```

### Método Programático (Node.js)

1. **Editar `generate-pages.js`**
   ```javascript
   // Adicionar à lista tools
   const tools = [
       // ... existing tools
       { 
           name: 'Nova Ferramenta', 
           slug: 'nova-ferramenta', 
           category: 'Categoria',
           os: 'Web, iOS, Android',
           rating: '4.6',
           reviews: '1500',
           url: 'https://novaferramenta.com'
       }
   ];
   ```

2. **Executar script**
   ```bash
   node generate-pages.js
   ```

3. **Atualizar index.html**
   ```bash
   node update-index.js
   ```

4. **Regenerar sitemap**
   ```bash
   node generate-sitemap.js
   ```

5. **Commit e push para atualizar deploy automático**

## 📄 Conteúdo Vindo do Agente Poet

Use o agente **Poet** para gerar conteúdo de alta qualidade para cada página:

1. **Descrições únicas** para cada ferramenta
2. **Preços reais** e atualizados
3. **Features detailed** e específicas
4. **Comparações** com concorrentes
5. **Keywords relevantes** para SEO

Exemplo de comando para o Poet:
```
Gera conteúdo detalhado para a página do Notion, incluindo:
- Descrição única (150-200 palavras)
- Preços atuais dos 3 planos
- 10 features principais com detalhes
- Comparações breves
- Keywords para SEO
```

## 🔍 SEO Otimizações

### Schema Markup Implementado
- ✅ SoftwareApplication (para cada ferramenta)
- ✅ Product/Offer (para planos e preços)
- ✅ WebSite (para homepage)
- ✅ AggregateRating (reviews)

### Meta Tags
- ✅ Title otimizado
- ✅ Description (150-160 caracteres)
- ✅ Keywords relevantes
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs

### Technical SEO
- ✅ robots.txt configurado
- ✅ sitemap.xml com 100 páginas
- ✅ URLs amigáveis
- ✅ Estrutura semântica HTML5
- ✅ Performance otimizada
- ✅ Mobile-friendly

## 🎨 Customização

### Cores e Estilo
Editor CSS inline em cada HTML (na tag `<style>`):
- Cor principal: `#0066cc`
- Background: `#fff`
- Texto: `#333`

### Adicionar Analytics
Antes de `</head>` em cada arquivo:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 Status Atual

✅ **Estrutura completa**
✅ **98 páginas geradas**
✅ **SEO otimizado**
✅ **Schema markup**
✅ **Pronto para deploy**

### Próximos Passos
⬜ Adicionar conteúdo único via Poet agent
⬜ Verificar preços reais
⬜ Adicionar avaliações de usuários
⬜ Implementar sistema de categorias
⬜ Adicionar comparações side-by-side

## 🆘 Ajuda

Para questões:
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Schema.org: https://schema.org/
- Web.dev SEO: https://web.dev/seo/

---

**ToolsPrices.com** © 2026 - Diretório de preços de software