import { readFile, access } from 'node:fs/promises';
import vm from 'node:vm';
const root = new URL('../public/', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
for (const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
  if (!/^(https?:|data:)/.test(match[1])) await access(new URL(match[1], root));
}
for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
for (const match of html.matchAll(/\bhref="#([^"]+)"/g)) {
  if (!ids.has(match[1])) throw new Error(`Âncora sem destino: ${match[1]}`);
}
console.log('Site pronto: HTML, JavaScript, links internos e imagens verificados.');
