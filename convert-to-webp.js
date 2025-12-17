import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, 'public');

async function getAllImageFiles(dir, fileList = []) {
  const files = await readdir(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      await getAllImageFiles(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

async function convertToWebP(imagePath) {
  const ext = extname(imagePath);
  const outputPath = imagePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

  try {
    await sharp(imagePath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`✓ Converted: ${basename(imagePath)} -> ${basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${basename(imagePath)}:`, error.message);
  }
}

async function main() {
  console.log('🔍 Finding all PNG and JPG images...\n');

  const imageFiles = await getAllImageFiles(publicDir);

  console.log(`📦 Found ${imageFiles.length} images to convert\n`);

  for (const imagePath of imageFiles) {
    await convertToWebP(imagePath);
  }

  console.log('\n✅ Conversion complete!');
  console.log('\n⚠️  Note: Original files are kept. You can manually delete them after verifying the WebP files work correctly.');
}

main().catch(console.error);
