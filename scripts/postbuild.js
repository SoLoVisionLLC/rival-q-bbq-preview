import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist! Run vite build first.');
  process.exit(1);
}

const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('index.html not found in dist/');
  process.exit(1);
}

const htmlContent = fs.readFileSync(indexPath, 'utf-8');

const pages = [
  'menu.html',
  'schedule.html',
  'catering.html',
  'about.html',
  'contact.html',
  'policies.html',
  '404.html',
];

pages.forEach((page) => {
  const target = path.join(distDir, page);
  fs.writeFileSync(target, htmlContent);
  console.log(`Generated static entry: dist/${page}`);
});

console.log('Postbuild completed successfully.');
