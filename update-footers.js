const fs = require('fs');
const path = require('path');

const pricingDir = './pricing';

// Footer HTML antigo
const oldFooter = `<footer>
        <p>&copy; 2026 ToolsPrices.com. Informações atualizadas regularmente.</p>
        <p style="margin-top: 10px;">
            <a href="/">Home</a> | <a href="/pricing">Todas as Ferramentas</a>
        </p>
    </footer>`;

// Footer HTML novo
const newFooter = `<footer>
        <p>&copy; 2026 ToolsPrices.com. Informações atualizadas regularmente.</p>
        <p style="margin-top: 10px;">
            <a href="/">Home</a> | 
            <a href="/pricing">Todas as Ferramentas</a> |
            <a href="/privacy.html">Privacidade</a> | 
            <a href="/terms.html">Termos</a> | 
            <a href="/contact.html">Contacto</a>
        </p>
    </footer>`;

// Ler diretório
fs.readdir(pricingDir, (err, files) => {
    if (err) {
        console.error('Erro ao ler diretório:', err);
        return;
    }

    const htmlFiles = files.filter(file => file.endsWith('.html'));
    console.log(`Encontrados ${htmlFiles.length} ficheiros HTML para atualizar...`);

    let updatedCount = 0;

    htmlFiles.forEach(file => {
        const filePath = path.join(pricingDir, file);

        try {
            let content = fs.readFileSync(filePath, 'utf8');

            if (content.includes(oldFooter)) {
                content = content.replace(oldFooter, newFooter);
                fs.writeFileSync(filePath, content, 'utf8');
                updatedCount++;
                console.log(`✓ Atualizado: ${file}`);
            } else {
                console.log(`- Ignorado (já atualizado ou formato diferente): ${file}`);
            }
        } catch (err) {
            console.error(`Erro ao processar ${file}:`, err.message);
        }
    });

    console.log(`\n✅ Atualização concluída! ${updatedCount} ficheiros foram atualizados.`);
});