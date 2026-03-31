// Gerar sitemap.xml
const fs = require('fs');

const baseUrl = 'https://toolsprices.com';

const pages = [
    '/',
    '/pricing',
    '/privacy.html',
    '/terms.html',
    '/contact.html'
];

// Add pricing pages from the tools list
const tools = [
    'notion', 'slack', 'figma', 'zoom', 'trello', 'canva', 'asana', 'dropbox', 
    'google-workspace', 'microsoft-365', 'github', 'jira', 'salesforce', 'hubspot', 
    'spotify', 'adobe-creative-cloud', 'monday', 'clickup', 'airtable', 'stripe', 
    'shopify', 'wordpress', 'buffer', 'hootsuite', 'mailchimp', 'convertkit', 
    'grammarly', 'hemingway', 'evernote', 'onenote', 'typeform', 'google-forms', 
    'surveymonkey', 'hotjar', 'google-analytics', 'mixpanel', 'segment', 'fullstory', 
    'amplitude', 'intercom', 'zendesk', 'freshdesk', 'helpscout', 'drift', 
    'olark', 'crisp', 'tidio', 'lastpass', '1password', 'bitwarden', 'dashlane', 
    'nordpass', 'proton-vpn', 'nordvpn', 'expressvpn', 'surfshark', 'cyberghost', 
    'toggl-track', 'harvest', 'rescuetime', 'clockify', 'time-doctor', 'loom', 
    'vimeo', 'wistia', 'calendly', 'doodle', 'savvycal', 'mixmax', 'superhuman', 
    'spark-mail', 'notability', 'goodnotes', 'bear', 'obsidian', 'logseq', 
    'roam-research', 'miro', 'mural', 'jamboard', 'explain-everything', 'lucidchart', 
    'draw-io', 'gliffy', 'skitch', 'snagit', 'cleanshot-x', 'cloudapp', 
    'otter-ai', 'rev', 'sonix', 'descript', 'camtasia', 'screenflow', 
    'obs-studio', 'streamlabs', 'restream', 'discord'
];

tools.forEach(tool => {
    pages.push(`/pricing/${tool}.html`);
});

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

pages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : page.startsWith('/pricing/') ? '0.8' : '0.7'}</priority>
  </url>
`;
});

sitemap += `</urlset>`;

fs.writeFileSync('sitemap.xml', sitemap, 'utf-8');
console.log('✓ sitemap.xml generated successfully!');
console.log(`\nSitemap includes ${pages.length} pages.`);