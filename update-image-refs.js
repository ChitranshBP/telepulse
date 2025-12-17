import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = join(__dirname, 'src');

async function getAllTsxFiles(dir, fileList = []) {
  const files = await readdir(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      await getAllTsxFiles(filePath, fileList);
    } else if (/\.(tsx|ts|jsx|js)$/i.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

async function updateImageReferences(filePath) {
  let content = await readFile(filePath, 'utf-8');
  let modified = false;

  // Replace .png, .jpg, .jpeg with .webp
  const patterns = [
    { pattern: /\.png(['"])/g, replacement: '.webp$1' },
    { pattern: /\.jpg(['"])/g, replacement: '.webp$1' },
    { pattern: /\.jpeg(['"])/g, replacement: '.webp$1' }
  ];

  for (const { pattern, replacement } of patterns) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  }

  if (modified) {
    await writeFile(filePath, content, 'utf-8');
    console.log(`✓ Updated: ${filePath.replace(srcDir, 'src')}`);
    return true;
  }

  return false;
}

async function main() {
  console.log('🔍 Finding all TypeScript/React files...\n');

  const tsxFiles = await getAllTsxFiles(srcDir);
  let updatedCount = 0;

  console.log(`📦 Found ${tsxFiles.length} files to check\n`);

  for (const filePath of tsxFiles) {
    const updated = await updateImageReferences(filePath);
    if (updated) {
      updatedCount++;
    }
  }

  console.log(`\n✅ Updated ${updatedCount} files with new image references!`);
}

main().catch(console.error);
