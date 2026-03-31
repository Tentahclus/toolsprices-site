# ⚡ Quick Start Deploy - ToolsPrices.com

## 🚀 Deploy em 5 Passos

### Passo 1: Aceder ao Cloudflare
Visite: https://dash.cloudflare.com/

### Passo 2: Criar Pages Project
1. Clique em **Workers & Pages** (menu esquerdo)
2. Clique em **Create application**
3. Selecione **Connect to Git**
4. Autorize Cloudflare a aceder ao GitHub (se necessário)
5. Procurar e selecionar **toolsprices-site**

### Passo 3: Configurar Build
```
Project name: toolsprices
Framework: None
Build command: [deixar vazio]
Build output directory: /
```

Clique em **Save and Deploy**

### Passo 4: Verificar Deploy
Após ~30 segundos, visite:
- **URL temporária**: https://toolsprices.pages.dev
- Verifique se o site carrega

### Passo 5: Adicionar Custom Domain
1. No projeto Cloudflare, clique em **Custom domains**
2. Clique em **Set up a custom domain**
3. Introduza: `toolsprices.com` (ou seu domain)
4. Adicione DNS records no seu registrador

---

## 📋 URLs Importantes

- **Repositório GitHub**: https://github.com/Tentahclus/toolsprices-site
- **Cloudflare Dashboard**: https://dash.cloudflare.com/
- **Deploy URL**: https://toolsprices.pages.dev

---

## ✅ Checklist de Verificação

Após deploy, verifique:

- [ ] Homepage carrega: `https://toolsprices.com`
- [ ] Página de pricing funciona: `https://toolsprices.com/pricing/notion.html`
- [ ] Páginas legais funcionam:
  - [ ] `https://toolsprices.com/privacy.html`
  - [ ] `https://toolsprices.com/terms.html`
  - [ ] `https://toolsprices.com/contact.html`
- [ ] Sitemap acessível: `https://toolsprices.com/sitemap.xml`
- [ ] Robots.txt acessível: `https://toolsprices.com/robots.txt`
- [ ] Todos os links no footer funcionam
- [ ] HTTPS está ativo (cadeado verde)

---

## 🎯 Next Steps After Deploy

### 1. Submeter ao Google Search Console
- Visite: https://search.google.com/search-console/
- Adicionar propriedade: `https://toolsprices.com`
- Verificar propriedade
- Enviar sitemap: `sitemap.xml`

### 2. Configurar AdSense
- Criar conta: https://www.google.com/adsense/
- Submeter site para aprovação
- Esperar 1-2 semanas para aprovação

### 3. Adicionar Analytics
- Criar propriedade GA4: https://analytics.google.com
- Adicionar tracking code em todas as páginas

---

## 📞 Ajuda

Para instruções detalhadas, verifique:
- `CLOUDFLARE_DEPLOY_GUIDE.md` - Guia completo
- `SETUP_COMPLETE_REPORT.md` - Relatório completo

---

**Tempo estimado total de deploy**: 15-30 minutos 💪