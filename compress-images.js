import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = './public';

// Recursive function to get all image files
function getFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFilesRecursively(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const tempPath = filePath + '.tmp';
  const originalSize = fs.statSync(filePath).size;
  
  try {
    let pipeline = sharp(filePath);
    
    if (ext === '.png') {
      // High-quality PNG compression (palette: true achieves ~70-80% size reduction with minimal visual impact)
      pipeline = pipeline.png({ palette: true, quality: 85, effort: 8 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, progressive: true });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 80 });
    }
    
    await pipeline.toFile(tempPath);
    
    const compressedSize = fs.statSync(tempPath).size;
    
    if (compressedSize < originalSize) {
      // Overwrite original with compressed
      fs.copyFileSync(tempPath, filePath);
      fs.unlinkSync(tempPath);
      const ratio = ((1 - compressedSize / originalSize) * 100).toFixed(1);
      console.log(`✅ Compressed ${filePath}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(compressedSize / 1024 / 1024).toFixed(2)}MB (-${ratio}%)`);
    } else {
      // Keep original if compressed is larger
      fs.unlinkSync(tempPath);
      console.log(`ℹ️ Skipped ${filePath}: Already optimized`);
    }
  } catch (err) {
    console.error(`❌ Failed to compress ${filePath}:`, err.message);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function main() {
  console.log('Starting image compression in public/ folder...');
  const files = getFilesRecursively(PUBLIC_DIR);
  console.log(`Found ${files.length} images to process.\n`);
  
  for (const file of files) {
    await compressImage(file);
  }
  console.log('\nCompression complete!');
}

main().catch(console.error);
