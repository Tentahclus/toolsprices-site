# 🚀 Guia de Deploy - ToolsPrices.com no Cloudflare Pages

## 📋 Checklist Pré-Deploy

✅ **Site Completo:**
- 100 páginas de preços (pricing/)
- Index.html homepage
- Página de privacidade (privacy.html)
- Página de termos de uso (terms.html)
- Página de contacto (contact.html)
- robots.txt configurado
- sitemap.xml com 103 páginas
- Schema markup em todas as páginas
- Design responsivo

✅ **Git & GitHub:**
- Repositório configurado: `https://github.com/Tentahclus/toolsprices-site.git`
- Branch: master
- Último commit: "Add AdSense required pages (Privacy, Terms, Contact)"
- Código enviado para GitHub

---

## 🔧 Passo 1: Criar Conta e Aceder ao Cloudflare

1. **Criar conta Cloudflare** (se ainda não tiver):
   - Visite: https://dash.cloudflare.com/sign-up
   - Email, password e dados básicos
   - Verify email

2. **Login:**
   - Aceda a: https://dash.cloudflare.com/
   - Faça login com a sua conta

---

## ⚡ Passo 2: Conectar ao GitHub

### A. Autorizar Cloudflare no GitHub:

1. No Cloudflare Dashboard, clique em:
   - **Workers & Pages** (menu esquerdo)
   - **Create application**

2. Selecione:
   - **Pages** tab
   - **Connect to Git**

3. Se aparecer "Authorize Cloudflare":
   - Clique em "Authorize Cloudflare"
   - Introduza credenciais GitHub se necessário
   - Autorize o acesso ao repositório

---

## 🚀 Passo 3: Configurar e Deploy

1. **Selecionar repositório:**
   - Procure por: `toolsprices-site`
   - Clique em "Set up on this site"

2. **Configurações de Build:**

   ```
   Project name:        toolsprices
   Production branch:   master
   Framework preset:    None
   Build command:       [deixar vazio]
   Build output dir:    /
   Root directory:      [deixar vazio]
   Environment variables: [necessário nenhum]
   ```

3. **Fazer Deploy:**
   - Clique em **Save and Deploy**
   - Aguarde ~30-60 segundos
   - Site ficará disponível em: `https://toolsprices.pages.dev`

---

## 🌐 Passo 4: Configurar Custom Domain

### A. Adicionar Domain no Cloudflare:

1. Após o deploy estar concluído:
   - Clique no projeto `toolsprices`
   - Vá para **Custom domains** (menu esquerdo)
   - Clique em **Set up a custom domain**

2. Introduza o domain:
   - `toolsprices.com` (se tiver o domain)
   - OU use subdomínio: `tools.seudominio.com`

3. Clique em **Continue**

### B. Configurar DNS:

#### Opção 1: Domain registado no Cloudflare
- Records criados automaticamente ✓
- SSL gerado automaticamente ✓

#### Opção 2: Domain noutro registrador (GoDaddy, Namecheap, etc)

Adicione estes DNS records no painel do seu registrador:

```
Type: CNAME
Name: @ (ou toolsprices para subdomínio)
Value: toolsprices.pages.dev
TTL: 3600 (ou Automatic)
```

OU (se CNAME não funcionar para root):

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

4. **Ativar HTTPS:**
   - O Cloudflare gera o certificado SSL automaticamente
   - Aguarde 1-5 minutos para o certificado ficar ativo
   - Verifique o ícone de cadeado no browser

---

## ✅ Passo 5: Verificar Deploy

### Testes de verificação:

1. **URL principal:**
   - Aceda a: `https://toolsprices.com` (ou domain que configurou)
   - Verifique se carrega corretamente

2. **Páginas de preços:**
   - `https://toolsprices.com/pricing/notion.html`
   - `https://toolsprices.com/pricing/figma.html`
   - Verifique se o footer tem links para Privacidade, Termos e Contacto

3. **Páginas de AdSense:**
   - `https://toolsprices.com/privacy.html`
   - `https://toolsprices.com/terms.html`
   - `https://toolsprices.com/contact.html`

4. **SEO:**
   - `https://toolsprices.com/sitemap.xml` (deve mostrar 103 URLs)
   - `https://toolsprices.com/robots.txt`

5. **Rich Results:**
   - Testar em: https://search.google.com/test/rich-results
   - Insira uma URL de pricing para verificar Schema markup

6. **Lighthouse:**
   - Abra DevTools (F12)
   - Vá para Lighthouse
   - Execute test de Performance e SEO
   - Target: 90+ em ambos

---

## 🔍 Passo 6: Submeter ao Google Search Console

1. **Adicionar propriedade:**
   - Aceda: https://search.google.com/search-console/
   - Clique em "Adicionar propriedade"
   - Selecione "URL prefix"
   - Introduza: `https://toolsprices.com`

2. **Verificar propriedade:**
   - Opção recomendada: DNS (se domain no Cloudflare)
   - Ou upload de HTML file
   - Siga as instruções do Google

3. **Submeter Sitemap:**
   - Vá para: **Sitemaps** (menu esquerdo)
   - Introduza: `sitemap.xml`
   - Clique em "Enviar"

4. **Solicitar indexação:**
   - Vá para: **Inspeção de URL**
   - Introduza a homepage: `https://toolsprices.com`
   - Clique em "Solicitar Indexação"
   - Faça o mesmo para algumas páginas de preços

---

## 💰 Passo 7: Configurar Google AdSense

1. **Criar conta AdSense:**
   - Aceda: https://www.google.com/adsense/
   - "Start now"
   - Introduza dados do site e pagamento
   - Email: [email a definir nas páginas de contacto]

2. **Colocar código AdSense:**

   Após aprovação, adicione o tracking code:

   **Em index.html** (antes de `</head>`):
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"
            crossorigin="anonymous"></script>
   ```

   **Em todas as páginas** (incluindo pricing/):
   - Use script de bulk update similar ao `update-footers.js`
   - Adiciona o snippet do AdSense em todas as páginas

   **Exemplo de ad code** (onde quiser mostrar ads):
   ```html
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
   ```

3. **Onde colocar os ads:**
   - Na sidebar (desktop)
   - Entre conteúdo e footer
   - No início dos artigos (pricing pages)
   - Não exagere: mantenha UX positivo

4. **Aprovação AdSense:**
   - Pode demorar 1-2 semanas
   - Garanta que o site seja único e valoroso
   - Conteúdo suficiente em cada página
   - Navegação clara

---

## 📊 Passo 8: Adicionar Analytics (Opcional)

### Google Analytics 4:

1. Criar propriedade GA4: https://analytics.google.com
2. Obter Measurement ID (G-XXXXXXXXXX)
3. Adicionar em todas as páginas (antes de `</head>`):

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

### Cloudflare Web Analytics (alternativa gratuita):

1. Ativar em: https://dash.cloudflare.com/analytics
2. Adicionar antes `</body>`:

   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js'
           data-cf-beacon='{"token": "SEU_TOKEN"}'></script>
   ```

---

## 🔄 Passo 9: Auto-Deploy (Git → Cloudflare)

Com a conexão ao GitHub configurada, o deploy é automático:

```bash
# Fazer alterações
vim pricing/new-tool.html

# Commit
git add pricing/new-tool.html
git commit -m "Add new tool XYZ"
git push

# Deploy automático! ⚡
```

---

## 📝 Checklist Pós-Deploy

Depois do deploy estar ativo:

- [ ] Custom domain configurado e com HTTPS
- [ ] Todas as páginas 403/404 testadas
- [ ] Robots.txt acessível
- [ ] Sitemap.xml acessível
- [ ] Schema markup validado (Rich Results Test)
- [ ] Lighthouse test passou (90+ Performance, 90+ SEO)
- [ ] Site submetido ao Google Search Console
- [ ] Sitemap enviado ao Google
- [ ] Páginas indexadas (ver no Search Console)
- [ ] AdSense configurado e código adicionado
- [ ] Analytics configurado
- [ ] Mobile-friendly test passou
- [ ] Speed test passou (PageSpeed Insights)

---

## 🐛 Troubleshooting

### Build falha:
- Verificar se `index.html` existe na raiz
- Verificar se há erros de sintaxe em HTML
- Limpar cache do Cloudflare (Purge Cache)

### Domain não funciona:
- Verificar DNS records no registrador
- Aguardar propagação DNS (pode demorar 24-48h)
- Verificar configurações SSL no Cloudflare

### Páginas 404:
- Verificar nomes de ficheiros (case-sensitive em Linux)
- Verificar se o git push incluiu todos os ficheiros
- Limpar cache do browser

### AdSense rejeitou:
- Verificar se as páginas são únicas e têm conteúdo
- Adicionar mais conteúdo único em cada página
- Garantir navegação clara e UX profissional
- Re-submitir após correções

### SEO não indexa:
- Verificar robots.txt (nó bloquear crawlers importantes)
- Submeter sitemap ao Google Search Console
- Criar backlinks internos (cross-link entre páginas)
- Aguardar indexação (pode demorar dias/semanas)

---

## 📌 URLs Importantes

- **Cloudflare Dashboard**: https://dash.cloudflare.com/
- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **GitHub Repo**: https://github.com/Tentahclus/toolsprices-site
- **Google Search Console**: https://search.google.com/search-console/
- **AdSense**: https://www.google.com/adsense/
- **Google Analytics**: https://analytics.google.com/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev/

---

## ⏱️ Tempo Estimado

- **Configuração inicial:** 15-30 minutos
- **Deploy primário:** 30-60 segundos
- **Configuração domain:** 5-10 minutos
- **SEO Setup (GSC + Sitemap):** 10-15 minutos
- **AdSense Setup:** 30-60 minutos (mais aprovação)
- **Total inicial:** ~1-2 horas

---

## 💡 Dicas

1. **Monitorar performance**: Use Cloudflare Web Analytics ou GA4
2. **Testar regularmente**: PageSpeed e Lighthouse mensalmente
3. **Manter sitemap atualizado**: Regenerar ao adicionar páginas
4. **Backlinks**: Criar conteúdo linkável para melhorar SEO
5. **Social signals**: Partilhar nas redes sociais
6. **Update prices**: Verificar preços regularmente para manter precisão

---

**Status atual**: ✅ Pronto para deploy
**GitHub**: https://github.com/Tentahclus/toolsprices-site
**Código enviado**: Sim (commit dd70acf)

Boa sorte com o deploy! 🚀