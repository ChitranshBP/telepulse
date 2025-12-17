import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pagesDir = join(__dirname, 'src', 'pages');

const pageConfigs = [
  { file: 'AboutUs.tsx', seoKey: 'about' },
  { file: 'Solutions.tsx', seoKey: 'solutions' },
  { file: 'NICUTeleCare.tsx', seoKey: 'nicu' },
  { file: 'PediatricTeleICU.tsx', seoKey: 'picu' },
  { file: 'TeleEducation.tsx', seoKey: 'education' },
  { file: 'Technology.tsx', seoKey: 'technology' },
  { file: 'Resources.tsx', seoKey: 'resources' },
  { file: 'Careers.tsx', seoKey: 'careers' },
  { file: 'Contact.tsx', seoKey: 'contact' },
  { file: 'Legal.tsx', seoKey: 'legal' },
  { file: 'ResearchInnovation.tsx', seoKey: 'research' },
  { file: 'Impact.tsx', seoKey: 'impact' },
  { file: 'Partners.tsx', seoKey: 'partners' }
];

async function addSEOToPage(fileName, seoKey) {
  const filePath = join(pagesDir, fileName);

  try {
    let content = await readFile(filePath, 'utf-8');

    // Check if SEO is already imported
    if (content.includes("import SEO from '../components/SEO'")) {
      console.log(`⏭️  Skipped ${fileName} - SEO already imported`);
      return false;
    }

    // Add imports after the first import React line
    const reactImportMatch = content.match(/import React[^;]*;/);
    if (!reactImportMatch) {
      console.log(`❌ Failed ${fileName} - Could not find React import`);
      return false;
    }

    const afterReactImport = reactImportMatch.index + reactImportMatch[0].length;

    // Add SEO imports
    const seoImports = `\nimport SEO from '../components/SEO';\nimport { seoConfig } from '../utils/seoConfig';`;
    content = content.slice(0, afterReactImport) + seoImports + content.slice(afterReactImport);

    // Find the return statement in the component
    const returnMatch = content.match(/return \(/);
    if (!returnMatch) {
      console.log(`❌ Failed ${fileName} - Could not find return statement`);
      return false;
    }

    const returnIndex = returnMatch.index;

    // Add fragment and SEO component
    const seoComponent = `\n    <>\n      <SEO\n        title={seoConfig.${seoKey}.title}\n        description={seoConfig.${seoKey}.description}\n        keywords={seoConfig.${seoKey}.keywords}\n      />\n      `;

    // Replace "return (" with "return (<>SEO..."
    content = content.slice(0, returnIndex + 8) + seoComponent + content.slice(returnIndex + 8);

    // Find the closing of the return statement (before ");" or before the last "};")
    // Look for the pattern "    </div>\n  );" or similar
    const closingPattern = /(\s*<\/div>\s*\n\s*)\);/g;
    let lastMatch;
    let match;
    while ((match = closingPattern.exec(content)) !== null) {
      lastMatch = match;
    }

    if (lastMatch) {
      const insertPos = lastMatch.index + lastMatch[1].length;
      content = content.slice(0, insertPos) + '\n    </>' + content.slice(insertPos);
    }

    await writeFile(filePath, content, 'utf-8');
    console.log(`✓ Updated ${fileName}`);
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${fileName}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔍 Adding SEO components to all pages...\n');

  let successCount = 0;
  let skipCount = 0;

  for (const { file, seoKey } of pageConfigs) {
    const result = await addSEOToPage(file, seoKey);
    if (result === true) successCount++;
    else if (result === false && !result) skipCount++;
  }

  console.log(`\n✅ Updated ${successCount} pages`);
  if (skipCount > 0) {
    console.log(`⏭️  Skipped ${skipCount} pages (already have SEO)`);
  }
}

main().catch(console.error);
