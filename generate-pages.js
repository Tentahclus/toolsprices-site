// Script para gerar páginas programáticas do ToolsPrices.com
const fs = require('fs');
const path = require('path');

// Ler template
const templateContent = fs.readFileSync('template.html', 'utf-8');

// Lista de 100 ferramentas populares (scaffold)
const tools = [
    { name: 'Notion', slug: 'notion', category: 'Produtividade', os: 'Web, iOS, Android, Mac, Windows', rating: '4.8', reviews: '12500', url: 'https://notion.so' },
    { name: 'Slack', slug: 'slack', category: 'Comunicação', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.7', reviews: '8500', url: 'https://slack.com' },
    { name: 'Figma', slug: 'figma', category: 'Design', os: 'Web, Mac, Windows, Linux, iOS, Android', rating: '4.9', reviews: '9200', url: 'https://figma.com' },
    { name: 'Zoom', slug: 'zoom', category: 'Vídeo Conferência', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.6', reviews: '15000', url: 'https://zoom.us' },
    { name: 'Trello', slug: 'trello', category: 'Gestão de Projetos', os: 'Web, iOS, Android, Mac, Windows', rating: '4.5', reviews: '11000', url: 'https://trello.com' },
    { name: 'Canva', slug: 'canva', category: 'Design', os: 'Web, iOS, Android', rating: '4.8', reviews: '20000', url: 'https://canva.com' },
    { name: 'Asana', slug: 'asana', category: 'Gestão de Projetos', os: 'Web, iOS, Android, Mac, Windows', rating: '4.6', reviews: '7800', url: 'https://asana.com' },
    { name: 'Dropbox', slug: 'dropbox', category: 'Armazenamento', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.5', reviews: '14000', url: 'https://dropbox.com' },
    { name: 'Google Workspace', slug: 'google-workspace', category: 'Produtividade', os: 'Web, iOS, Android, Mac, Windows', rating: '4.7', reviews: '18000', url: 'httpsworkspace.google.com' },
    { name: 'Microsoft 365', slug: 'microsoft-365', category: 'Produtividade', os: 'Web, iOS, Android, Mac, Windows', rating: '4.6', reviews: '22000', url: 'https://microsoft.com/365' },
    { name: 'GitHub', slug: 'github', category: 'Desenvolvimento', os: 'Web, Mac, Windows, Linux', rating: '4.8', reviews: '9500', url: 'https://github.com' },
    { name: 'Jira', slug: 'jira', category: 'Gestão de Projetos', os: 'Web, Mac, Windows, Linux', rating: '4.4', reviews: '6200', url: 'https://atlassian.com/jira' },
    { name: 'Salesforce', slug: 'salesforce', category: 'CRM', os: 'Web, iOS, Android', rating: '4.5', reviews: '8500', url: 'https://salesforce.com' },
    { name: 'HubSpot', slug: 'hubspot', category: 'Marketing', os: 'Web, iOS, Android', rating: '4.7', reviews: '9800', url: 'https://hubspot.com' },
    { name: 'Spotify', slug: 'spotify', category: 'Música', os: 'Web, iOS, Android, Mac, Windows', rating: '4.6', reviews: '45000', url: 'https://spotify.com' },
    { name: 'Adobe Creative Cloud', slug: 'adobe-creative-cloud', category: 'Design', os: 'Web, Mac, Windows', rating: '4.5', reviews: '11000', url: 'https://adobe.com/creativecloud' },
    { name: 'Monday.com', slug: 'monday', category: 'Gestão de Projetos', os: 'Web, iOS, Android, Mac, Windows', rating: '4.6', reviews: '7200', url: 'https://monday.com' },
    { name: 'ClickUp', slug: 'clickup', category: 'Gestão de Projetos', os: 'Web, iOS, Android, Mac, Windows', rating: '4.7', reviews: '6500', url: 'https://clickup.com' },
    { name: 'Airtable', slug: 'airtable', category: 'Bancos de Dados', os: 'Web, iOS, Android, Mac, Windows', rating: '4.6', reviews: '5800', url: 'https://airtable.com' },
    { name: 'Stripe', slug: 'stripe', category: 'Pagamentos', os: 'API, Web', rating: '4.8', reviews: '5200', url: 'https://stripe.com' },
    { name: 'Shopify', slug: 'shopify', category: 'E-commerce', os: 'Web, iOS, Android', rating: '4.7', reviews: '8900', url: 'https://shopify.com' },
    { name: 'WordPress', slug: 'wordpress', category: 'CMS', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.5', reviews: '25000', url: 'https://wordpress.org' },
    { name: 'Buffer', slug: 'buffer', category: 'Social Media', os: 'Web, iOS, Android', rating: '4.5', reviews: '4200', url: 'https://buffer.com' },
    { name: 'Hootsuite', slug: 'hootsuite', category: 'Social Media', os: 'Web, iOS, Android', rating: '4.4', reviews: '5500', url: 'https://hootsuite.com' },
    { name: 'Mailchimp', slug: 'mailchimp', category: 'Email Marketing', os: 'Web, iOS, Android', rating: '4.5', reviews: '12000', url: 'https://mailchimp.com' },
    { name: 'ConvertKit', slug: 'convertkit', category: 'Email Marketing', os: 'Web, iOS, Android', rating: '4.6', reviews: '3800', url: 'https://convertkit.com' },
    { name: 'Grammarly', slug: 'grammarly', category: 'Escrita', os: 'Web, iOS, Android, Mac, Windows', rating: '4.7', reviews: '18000', url: 'https://grammarly.com' },
    { name: 'Hemingway Editor', slug: 'hemingway', category: 'Escrita', os: 'Web, Mac, Windows', rating: '4.4', reviews: '2800', url: 'https://hemingwayapp.com' },
    { name: 'Evernote', slug: 'evernote', category: 'Notas', os: 'iOS, Android, Mac, Windows', rating: '4.4', reviews: '9500', url: 'https://evernote.com' },
    { name: 'OneNote', slug: 'onenote', category: 'Notas', os: 'Web, iOS, Android, Mac, Windows', rating: '4.5', reviews: '14000', url: 'https://onenote.com' },
    { name: 'Typeform', slug: 'typeform', category: 'Formulários', os: 'Web, iOS, Android', rating: '4.6', reviews: '4500', url: 'https://typeform.com' },
    { name: 'Google Forms', slug: 'google-forms', category: 'Formulários', os: 'Web, iOS, Android', rating: '4.5', reviews: '16000', url: 'https://forms.google.com' },
    { name: 'SurveyMonkey', slug: 'surveymonkey', category: 'Formulários', os: 'Web, iOS, Android', rating: '4.4', reviews: '6800', url: 'https://surveymonkey.com' },
    { name: 'Hotjar', slug: 'hotjar', category: 'Análise', os: 'Web', rating: '4.6', reviews: '3200', url: 'https://hotjar.com' },
    { name: 'Google Analytics', slug: 'google-analytics', category: 'Análise', os: 'Web, iOS, Android', rating: '4.5', reviews: '22000', url: 'https://analytics.google.com' },
    { name: 'Mixpanel', slug: 'mixpanel', category: 'Análise', os: 'Web, iOS, Android', rating: '4.6', reviews: '2900', url: 'https://mixpanel.com' },
    { name: 'Segment', slug: 'segment', category: 'Análise', os: 'API, Web', rating: '4.6', reviews: '1800', url: 'https://segment.com' },
    { name: 'FullStory', slug: 'fullstory', category: 'Análise', os: 'Web', rating: '4.7', reviews: '1500', url: 'https://fullstory.com' },
    { name: 'Amplitude', slug: 'amplitude', category: 'Análise', os: 'Web, iOS, Android', rating: '4.7', reviews: '2200', url: 'https://amplitude.com' },
    { name: 'Intercom', slug: 'intercom', category: 'Suporte ao Cliente', os: 'Web, iOS, Android', rating: '4.5', reviews: '4100', url: 'https://intercom.com' },
    { name: 'Zendesk', slug: 'zendesk', category: 'Suporte ao Cliente', os: 'Web, iOS, Android', rating: '4.5', reviews: '7200', url: 'https://zendesk.com' },
    { name: 'Freshdesk', slug: 'freshdesk', category: 'Suporte ao Cliente', os: 'Web, iOS, Android', rating: '4.4', reviews: '3800', url: 'https://freshdesk.com' },
    { name: 'Help Scout', slug: 'helpscout', category: 'Suporte ao Cliente', os: 'Web, iOS, Android', rating: '4.6', reviews: '2100', url: 'https://helpscout.com' },
    { name: 'Drift', slug: 'drift', category: 'Chat ao Vivo', os: 'Web, iOS, Android', rating: '4.5', reviews: '1900', url: 'https://drift.com' },
    { name: 'Olark', slug: 'olark', category: 'Chat ao Vivo', os: 'Web, iOS, Android', rating: '4.3', reviews: '1200', url: 'https://olark.com' },
    { name: 'Crisp', slug: 'crisp', category: 'Chat ao Vivo', os: 'Web, iOS, Android', rating: '4.5', reviews: '1100', url: 'https://crisp.chat' },
    { name: 'Tidio', slug: 'tidio', category: 'Chat ao Vivo', os: 'Web, iOS, Android', rating: '4.4', reviews: '1600', url: 'https://tidio.com' },
    { name: 'LastPass', slug: 'lastpass', category: 'Gestão de Passwords', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.5', reviews: '8500', url: 'https://lastpass.com' },
    { name: '1Password', slug: '1password', category: 'Gestão de Passwords', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.7', reviews: '5200', url: 'https://1password.com' },
    { name: 'Bitwarden', slug: 'bitwarden', category: 'Gestão de Passwords', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.7', reviews: '4200', url: 'https://bitwarden.com' },
    { name: 'Dashlane', slug: 'dashlane', category: 'Gestão de Passwords', os: 'Web, iOS, Android, Mac, Windows', rating: '4.5', reviews: '3800', url: 'https://dashlane.com' },
    { name: 'NordPass', slug: 'nordpass', category: 'Gestão de Passwords', os: 'Web, iOS, Android, Mac, Windows', rating: '4.4', reviews: '1800', url: 'https://nordpass.com' },
    { name: 'Proton VPN', slug: 'proton-vpn', category: 'VPN', os: 'iOS, Android, Mac, Windows, Linux', rating: '4.6', reviews: '6500', url: 'https://protonvpn.com' },
    { name: 'NordVPN', slug: 'nordvpn', category: 'VPN', os: 'iOS, Android, Mac, Windows, Linux', rating: '4.5', reviews: '12000', url: 'https://nordvpn.com' },
    { name: 'ExpressVPN', slug: 'expressvpn', category: 'VPN', os: 'iOS, Android, Mac, Windows, Linux', rating: '4.6', reviews: '9800', url: 'https://expressvpn.com' },
    { name: 'Surfshark', slug: 'surfshark', category: 'VPN', os: 'iOS, Android, Mac, Windows, Linux', rating: '4.5', reviews: '4500', url: 'https://surfshark.com' },
    { name: 'CyberGhost', slug: 'cyberghost', category: 'VPN', os: 'iOS, Android, Mac, Windows, Linux', rating: '4.4', reviews: '5200', url: 'https://cyberghost.com' },
    { name: 'Toggl Track', slug: 'toggl-track', category: 'Time Tracking', os: 'Web, iOS, Android, Mac, Windows', rating: '4.5', reviews: '3600', url: 'https://toggl.com/track' },
    { name: 'Harvest', slug: 'harvest', category: 'Time Tracking', os: 'Web, iOS, Android, Mac, Windows', rating: '4.4', reviews: '2500', url: 'https://getharvest.com' },
    { name: 'RescueTime', slug: 'rescuetime', category: 'Produtividade', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.4', reviews: '2100', url: 'https://rescuetime.com' },
    { name: 'Clockify', slug: 'clockify', category: 'Time Tracking', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.5', reviews: '4800', url: 'https://clockify.me' },
    { name: 'Time Doctor', slug: 'time-doctor', category: 'Time Tracking', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.3', reviews: '1900', url: 'https://timedoctor.com' },
    { name: 'Loom', slug: 'loom', category: 'Vídeo', os: 'Web, iOS, Android, Mac, Windows', rating: '4.7', reviews: '8200', url: 'https://loom.com' },
    { name: 'Vimeo', slug: 'vimeo', category: 'Vídeo', os: 'Web, iOS, Android', rating: '4.5', reviews: '9500', url: 'https://vimeo.com' },
    { name: 'Wistia', slug: 'wistia', category: 'Vídeo', os: 'Web, iOS, Android', rating: '4.6', reviews: '1800', url: 'https://wistia.com' },
    { name: 'Calendly', slug: 'calendly', category: 'Agendamento', os: 'Web, iOS, Android', rating: '4.7', reviews: '11000', url: 'https://calendly.com' },
    { name: 'Doodle', slug: 'doodle', category: 'Agendamento', os: 'Web, iOS, Android', rating: '4.4', reviews: '3500', url: 'https://doodle.com' },
    { name: 'SavvyCal', slug: 'savvycal', category: 'Agendamento', os: 'Web, iOS, Android', rating: '4.6', reviews: '800', url: 'https://savvycal.com' },
    { name: 'Mixmax', slug: 'mixmax', category: 'Email', os: 'Web, iOS, Android', rating: '4.4', reviews: '1600', url: 'https://mixmax.com' },
    { name: 'Superhuman', slug: 'superhuman', category: 'Email', os: 'iOS, Android, Mac', rating: '4.8', reviews: '3200', url: 'https://superhuman.com' },
    { name: 'Spark Mail', slug: 'spark-mail', category: 'Email', os: 'iOS, Android, Mac', rating: '4.6', reviews: '2800', url: 'https://sparkmailapp.com' },
    { name: 'Notability', slug: 'notability', category: 'Notas', os: 'iOS, Mac', rating: '4.7', reviews: '4500', url: 'https://notability.com' },
    { name: 'GoodNotes', slug: 'goodnotes', category: 'Notas', os: 'iOS, Mac', rating: '4.8', reviews: '5200', url: 'https://goodnotes.com' },
    { name: 'Bear', slug: 'bear', category: 'Notas', os: 'iOS, Mac', rating: '4.7', reviews: '2400', url: 'https://bear.app' },
    { name: 'Obsidian', slug: 'obsidian', category: 'Notas', os: 'iOS, Android, Mac, Windows, Linux', rating: '4.8', reviews: '8500', url: 'https://obsidian.md' },
    { name: 'Logseq', slug: 'logseq', category: 'Notas', os: 'iOS, Android, Mac, Windows, Linux', rating: '4.6', reviews: '3200', url: 'https://logseq.com' },
    { name: 'Roam Research', slug: 'roam-research', category: 'Notas', os: 'Web, Mac, Windows, Linux', rating: '4.5', reviews: '3800', url: 'https://roamresearch.com' },
    { name: 'Miro', slug: 'miro', category: 'Colaboração', os: 'Web, iOS, Android, Mac, Windows', rating: '4.6', reviews: '7800', url: 'https://miro.com' },
    { name: 'Mural', slug: 'mural', category: 'Colaboração', os: 'Web, iOS, Android', rating: '4.5', reviews: '2600', url: 'https://mural.co' },
    { name: 'Jamboard', slug: 'jamboard', category: 'Colaboração', os: 'Web, iOS, Android', rating: '4.4', reviews: '1800', url: 'https://jamboard.google.com' },
    { name: 'ExplainEverything', slug: 'explain-everything', category: 'Colaboração', os: 'Web, iOS, Android, Mac, Windows', rating: '4.4', reviews: '1200', url: 'https://explaineverything.com' },
    { name: 'Lucidchart', slug: 'lucidchart', category: 'Diagramação', os: 'Web, iOS, Android, Mac, Windows', rating: '4.5', reviews: '4200', url: 'https://lucidchart.com' },
    { name: 'Draw.io', slug: 'draw-io', category: 'Diagramação', os: 'Web, Mac, Windows, Linux', rating: '4.5', reviews: '6800', url: 'https://draw.io' },
    { name: 'Gliffy', slug: 'gliffy', category: 'Diagramação', os: 'Web, iOS, Android', rating: '4.3', reviews: '1100', url: 'https://gliffy.com' },
    { name: 'Skitch', slug: 'skitch', category: 'Captura de Ecrã', os: 'Mac, Windows, iOS, Android', rating: '4.2', reviews: '800', url: 'https://skitch.com' },
    { name: 'Snagit', slug: 'snagit', category: 'Captura de Ecrã', os: 'Mac, Windows', rating: '4.5', reviews: '2200', url: 'https://techsmith.com/snagit' },
    { name: 'CleanShot X', slug: 'cleanshot-x', category: 'Captura de Ecrã', os: 'Mac', rating: '4.8', reviews: '950', url: 'https://cleanshot.com' },
    { name: 'CloudApp', slug: 'cloudapp', category: 'Captura de Ecrã', os: 'Web, iOS, Mac, Windows', rating: '4.4', reviews: '1200', url: 'https://cloudapp.com' },
    { name: 'Otter.ai', slug: 'otter-ai', category: 'Transcrição', os: 'Web, iOS, Android', rating: '4.5', reviews: '3400', url: 'https://otter.ai' },
    { name: 'Rev', slug: 'rev', category: 'Transcrição', os: 'Web, iOS, Android', rating: '4.4', reviews: '2800', url: 'https://rev.com' },
    { name: 'Sonix', slug: 'sonix', category: 'Transcrição', os: 'Web', rating: '4.4', reviews: '900', url: 'https://sonix.ai' },
    { name: 'Descript', slug: 'descript', category: 'Edição de Vídeo', os: 'Web, Mac, Windows', rating: '4.7', reviews: '3200', url: 'https://descript.com' },
    { name: 'Camtasia', slug: 'camtasia', category: 'Edição de Vídeo', os: 'Mac, Windows', rating: '4.5', reviews: '2500', url: 'https://techsmith.com/camtasia' },
    { name: 'ScreenFlow', slug: 'screenflow', category: 'Edição de Vídeo', os: 'Mac', rating: '4.6', reviews: '1400', url: 'https://telestream.net/screenflow' },
    { name: 'OBS Studio', slug: 'obs-studio', category: 'Streaming', os: 'Mac, Windows, Linux', rating: '4.7', reviews: '18000', url: 'https://obsproject.com' },
    { name: 'Streamlabs', slug: 'streamlabs', category: 'Streaming', os: 'Web, iOS, Android, Mac, Windows', rating: '4.5', reviews: '8500', url: 'https://streamlabs.com' },
    { name: 'Restream', slug: 'restream', category: 'Streaming', os: 'Web, iOS, Android', rating: '4.4', reviews: '2200', url: 'https://restream.io' },
    { name: 'Discord', slug: 'discord', category: 'Comunicação', os: 'Web, iOS, Android, Mac, Windows, Linux', rating: '4.6', reviews: '35000', url: 'https://discord.com' }
];

// Generate pages
tools.forEach(tool => {
    let pageContent = templateContent
        .replace(/\{\{ TOOL_NAME \}\}/g, tool.name)
        .replace(/\{\{ TOOL_SLUG \}\}/g, tool.slug)
        .replace(/\{\{ TOOL_CATEGORY \}\}/g, tool.category)
        .replace(/\{\{ TOOL_OS \}\}/g, tool.os)
        .replace(/\{\{ TOOL_RATING \}\}/g, tool.rating)
        .replace(/\{\{ TOOL_REVIEWS \}\}/g, tool.reviews)
        .replace(/\{\{ TOOL_URL \}\}/g, tool.url)
        .replace(/\{\{ TOOL_DESCRIPTION \}\}/g, `${tool.name} é uma ferramenta ${tool.category.toLowerCase()} premium que oferece funcionalidades avançadas para melhorar a sua produtividade.`)
        .replace(/\{\{ TOOL_LONG_DESCRIPTION \}\}/g, `${tool.name} é uma das ferramentas ${tool.category.toLowerCase()} mais populares do mercado. Com uma interface intuitiva e funções poderosas, permite-lhe otimizar o seu trabalho e colaborar com equipas de forma eficiente. Ideal para profissionais e empresas que procuram uma solução fiável.`)
        .replace(/\{\{ PLAN_1_NAME \}\}/g, 'Free')
        .replace(/\{\{ PLAN_1_PRICE \}\}/g, 'Gratuito')
        .replace(/\{\{ PLAN_1_BILLING \}\}/g, 'Mensal')
        .replace(/\{ \{ PLAN_1_FEATURES \} \}/g, 'Funcionalidades básicas, 5 projetos, 100MB')
        .replace(/\{\{ PLAN_2_NAME \}\}/g, 'Pro')
        .replace(/\{\{ PLAN_2_PRICE \}\}/g, '19€')
        .replace(/\{\{ PLAN_2_BILLING \}\}/g, 'Mensal')
        .replace(/\{\{ PLAN_2_FEATURES \}\}/g, 'Todas as funcionalidades, projetos ilimitados, 10GB')
        .replace(/\{\{ PLAN_3_NAME \}\}/g, 'Enterprise')
        .replace(/\{\{ PLAN_3_PRICE \}\}/g, '49€')
        .replace(/\{\{ PLAN_3_BILLING \}\}/g, 'Mensal')
        .replace(/\{\{ PLAN_3_FEATURES \}\}/g, 'Funcionalidades avançadas, SSO, suporte 24/7, 100GB')
        .replace(/\{\{ FEATURE_1 \}\}/g, 'Interface intuitiva e fácil de usar')
        .replace(/\{\{ FEATURE_2 \}\}/g, 'Integrações com outras ferramentas populares')
        .replace(/\{\{ FEATURE_3 \}\}/g, 'Suporte em tempo real')
        .replace(/\{\{ FEATURE_4 \}\}/g, 'Relatórios e análises detalhadas')
        .replace(/\{\{ FEATURE_5 \}\}/g, 'Segurança de nível empresarial')
        .replace(/\{\{ FEATURE_6 \}\}/g, 'Colaboração em equipa em tempo real');
    
    const filePath = path.join('pricing', `${tool.slug}.html`);
    fs.writeFileSync(filePath, pageContent, 'utf-8');
    console.log(`Generated: ${filePath}`);
});

console.log(`\n✓ Generated ${tools.length} pages successfully!`);