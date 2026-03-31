// Update index.html with tools list
const fs = require('fs');

const tools = [
    { name: 'Notion', slug: 'notion', category: 'Produtividade' },
    { name: 'Slack', slug: 'slack', category: 'Comunicação' },
    { name: 'Figma', slug: 'figma', category: 'Design' },
    { name: 'Zoom', slug: 'zoom', category: 'Vídeo Conferência' },
    { name: 'Trello', slug: 'trello', category: 'Gestão de Projetos' },
    { name: 'Canva', slug: 'canva', category: 'Design' },
    { name: 'Asana', slug: 'asana', category: 'Gestão de Projetos' },
    { name: 'Dropbox', slug: 'dropbox', category: 'Armazenamento' },
    { name: 'Google Workspace', slug: 'google-workspace', category: 'Produtividade' },
    { name: 'Microsoft 365', slug: 'microsoft-365', category: 'Produtividade' },
    { name: 'GitHub', slug: 'github', category: 'Desenvolvimento' },
    { name: 'Jira', slug: 'jira', category: 'Gestão de Projetos' },
    { name: 'Salesforce', slug: 'salesforce', category: 'CRM' },
    { name: 'HubSpot', slug: 'hubspot', category: 'Marketing' },
    { name: 'Spotify', slug: 'spotify', category: 'Música' },
    { name: 'Adobe Creative Cloud', slug: 'adobe-creative-cloud', category: 'Design' },
    { name: 'Monday.com', slug: 'monday', category: 'Gestão de Projetos' },
    { name: 'ClickUp', slug: 'clickup', category: 'Gestão de Projetos' },
    { name: 'Airtable', slug: 'airtable', category: 'Bancos de Dados' },
    { name: 'Stripe', slug: 'stripe', category: 'Pagamentos' },
    { name: 'Shopify', slug: 'shopify', category: 'E-commerce' },
    { name: 'WordPress', slug: 'wordpress', category: 'CMS' },
    { name: 'Buffer', slug: 'buffer', category: 'Social Media' },
    { name: 'Hootsuite', slug: 'hootsuite', category: 'Social Media' },
    { name: 'Mailchimp', slug: 'mailchimp', category: 'Email Marketing' },
    { name: 'ConvertKit', slug: 'convertkit', category: 'Email Marketing' },
    { name: 'Grammarly', slug: 'grammarly', category: 'Escrita' },
    { name: 'Hemingway Editor', slug: 'hemingway', category: 'Escrita' },
    { name: 'Evernote', slug: 'evernote', category: 'Notas' },
    { name: 'OneNote', slug: 'onenote', category: 'Notas' },
    { name: 'Typeform', slug: 'typeform', category: 'Formulários' },
    { name: 'Google Forms', slug: 'google-forms', category: 'Formulários' },
    { name: 'SurveyMonkey', slug: 'surveymonkey', category: 'Formulários' },
    { name: 'Hotjar', slug: 'hotjar', category: 'Análise' },
    { name: 'Google Analytics', slug: 'google-analytics', category: 'Análise' },
    { name: 'Mixpanel', slug: 'mixpanel', category: 'Análise' },
    { name: 'Segment', slug: 'segment', category: 'Análise' },
    { name: 'FullStory', slug: 'fullstory', category: 'Análise' },
    { name: 'Amplitude', slug: 'amplitude', category: 'Análise' },
    { name: 'Intercom', slug: 'intercom', category: 'Suporte ao Cliente' },
    { name: 'Zendesk', slug: 'zendesk', category: 'Suporte ao Cliente' },
    { name: 'Freshdesk', slug: 'freshdesk', category: 'Suporte ao Cliente' },
    { name: 'Help Scout', slug: 'helpscout', category: 'Suporte ao Cliente' },
    { name: 'Drift', slug: 'drift', category: 'Chat ao Vivo' },
    { name: 'Olark', slug: 'olark', category: 'Chat ao Vivo' },
    { name: 'Crisp', slug: 'crisp', category: 'Chat ao Vivo' },
    { name: 'Tidio', slug: 'tidio', category: 'Chat ao Vivo' },
    { name: 'LastPass', slug: 'lastpass', category: 'Gestão de Passwords' },
    { name: '1Password', slug: '1password', category: 'Gestão de Passwords' },
    { name: 'Bitwarden', slug: 'bitwarden', category: 'Gestão de Passwords' },
    { name: 'Dashlane', slug: 'dashlane', category: 'Gestão de Passwords' },
    { name: 'NordPass', slug: 'nordpass', category: 'Gestão de Passwords' },
    { name: 'Proton VPN', slug: 'proton-vpn', category: 'VPN' },
    { name: 'NordVPN', slug: 'nordvpn', category: 'VPN' },
    { name: 'ExpressVPN', slug: 'expressvpn', category: 'VPN' },
    { name: 'Surfshark', slug: 'surfshark', category: 'VPN' },
    { name: 'CyberGhost', slug: 'cyberghost', category: 'VPN' },
    { name: 'Toggl Track', slug: 'toggl-track', category: 'Time Tracking' },
    { name: 'Harvest', slug: 'harvest', category: 'Time Tracking' },
    { name: 'RescueTime', slug: 'rescuetime', category: 'Produtividade' },
    { name: 'Clockify', slug: 'clockify', category: 'Time Tracking' },
    { name: 'Time Doctor', slug: 'time-doctor', category: 'Time Tracking' },
    { name: 'Loom', slug: 'loom', category: 'Vídeo' },
    { name: 'Vimeo', slug: 'vimeo', category: 'Vídeo' },
    { name: 'Wistia', slug: 'wistia', category: 'Vídeo' },
    { name: 'Calendly', slug: 'calendly', category: 'Agendamento' },
    { name: 'Doodle', slug: 'doodle', category: 'Agendamento' },
    { name: 'SavvyCal', slug: 'savvycal', category: 'Agendamento' },
    { name: 'Mixmax', slug: 'mixmax', category: 'Email' },
    { name: 'Superhuman', slug: 'superhuman', category: 'Email' },
    { name: 'Spark Mail', slug: 'spark-mail', category: 'Email' },
    { name: 'Notability', slug: 'notability', category: 'Notas' },
    { name: 'GoodNotes', slug: 'goodnotes', category: 'Notas' },
    { name: 'Bear', slug: 'bear', category: 'Notas' },
    { name: 'Obsidian', slug: 'obsidian', category: 'Notas' },
    { name: 'Logseq', slug: 'logseq', category: 'Notas' },
    { name: 'Roam Research', slug: 'roam-research', category: 'Notas' },
    { name: 'Miro', slug: 'miro', category: 'Colaboração' },
    { name: 'Mural', slug: 'mural', category: 'Colaboração' },
    { name: 'Jamboard', slug: 'jamboard', category: 'Colaboração' },
    { name: 'ExplainEverything', slug: 'explain-everything', category: 'Colaboração' },
    { name: 'Lucidchart', slug: 'lucidchart', category: 'Diagramação' },
    { name: 'Draw.io', slug: 'draw-io', category: 'Diagramação' },
    { name: 'Gliffy', slug: 'gliffy', category: 'Diagramação' },
    { name: 'Skitch', slug: 'skitch', category: 'Captura de Ecrã' },
    { name: 'Snagit', slug: 'snagit', category: 'Captura de Ecrã' },
    { name: 'CleanShot X', slug: 'cleanshot-x', category: 'Captura de Ecrã' },
    { name: 'CloudApp', slug: 'cloudapp', category: 'Captura de Ecrã' },
    { name: 'Otter.ai', slug: 'otter-ai', category: 'Transcrição' },
    { name: 'Rev', slug: 'rev', category: 'Transcrição' },
    { name: 'Sonix', slug: 'sonix', category: 'Transcrição' },
    { name: 'Descript', slug: 'descript', category: 'Edição de Vídeo' },
    { name: 'Camtasia', slug: 'camtasia', category: 'Edição de Vídeo' },
    { name: 'ScreenFlow', slug: 'screenflow', category: 'Edição de Vídeo' },
    { name: 'OBS Studio', slug: 'obs-studio', category: 'Streaming' },
    { name: 'Streamlabs', slug: 'streamlabs', category: 'Streaming' },
    { name: 'Restream', slug: 'restream', category: 'Streaming' },
    { name: 'Discord', slug: 'discord', category: 'Comunicação' }
];

// Generate HTML for tools list
let toolsHTML = '';
tools.forEach(tool => {
    toolsHTML += `                <div class="tool-card">
                    <h3>${tool.name}</h3>
                    <p>${tool.category}</p>
                    <a href="pricing/${tool.slug}.html">Ver preços &rarr;</a>
                </div>
`;
});

// Read index.html
let indexContent = fs.readFileSync('index.html', 'utf-8');

// Replace the placeholder with tools list
indexContent = indexContent.replace(
    /<!-- Tools list populated dynamically or server-side -->/,
    toolsHTML
);

// Write back
fs.writeFileSync('index.html', indexContent, 'utf-8');
console.log('✓ index.html updated with tools list!');
console.log(`Included ${tools.length} tools.`);