import { createServer } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer as createHttpServer } from 'node:http';

// Preserve the SPA shell for non-home routes before adding homepage HTML.
process.env.NODE_ENV = 'production';

const builtIndex = await readFile('dist/index.html', 'utf8');
const template = builtIndex.includes('<div id="root"></div>') ? builtIndex : await readFile('dist/app.html', 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('Expected an empty SPA root before prerendering.');
// Attach Vite's WebSocket handler to an unlistened server; this build needs no ports.
const transport = createHttpServer();
const server = await createServer({ server: { middlewareMode: true, hmr: { server: transport } }, appType: 'custom', cacheDir: 'node_modules/.vite-prerender', optimizeDeps: { noDiscovery: true, include: [] } });
try {
  const { render, servicesTitle, servicesDescription, faqTitle, faqDescription, productsTitle, productsDescription, aboutTitle, aboutDescription } = await server.ssrLoadModule('/src/prerender-home.tsx');
  // Motion enters on the client; static content must also be visible without JS.
  const html = render().replace(/opacity:0(?=;|")/g, 'opacity:1');
  if (!html.includes('What would make your business work better?') || !html.includes('Sellem')) {
    throw new Error('Homepage prerender did not include the expected content.');
  }
  await writeFile('dist/app.html', template);
  await writeFile('dist/index.html', template.replace('</head>', '<link rel="canonical" href="https://www.augwelltech.com/" /></head>').replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  const escapeAttribute = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  for (const page of [
    { path: '/services', title: servicesTitle, description: servicesDescription, expected: 'Scope a software build' },
    { path: '/products', title: productsTitle, description: productsDescription, expected: 'Foundry Hub' },
    { path: '/about-us', title: aboutTitle, description: aboutDescription, expected: 'Registered in two markets.' },
    { path: '/faq', title: faqTitle, description: faqDescription, expected: 'Does submitting a quotation request book a meeting?' },
  ]) {
    const pageHtml = render(page.path);
    if (!pageHtml.includes(page.expected)) throw new Error(`${page.path} prerender is missing expected content.`);
    const url = `https://www.augwelltech.com${page.path}`;
    const pageTemplate = template
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(page.title)}</title>`)
      .replace(/(<meta\s+(?:name="description"|property="og:description"|name="twitter:description")\s+content=")[^"]*("\s*\/>)/g, `$1${escapeAttribute(page.description)}$2`)
      .replace(/(<meta\s+(?:property="og:title"|name="twitter:title")\s+content=")[^"]*("\s*\/>)/g, `$1${escapeAttribute(page.title)}$2`)
      .replace('property="og:url" content="https://www.augwelltech.com/"', `property="og:url" content="${url}"`)
      .replace('</head>', `<link rel="canonical" href="${url}" /></head>`)
      .replace('<div id="root"></div>', `<div id="root">${pageHtml}</div>`);
    await mkdir(`dist${page.path}`, { recursive: true });
    await writeFile(`dist${page.path}/index.html`, pageTemplate);
  }
  console.log('Prerendered homepage, services, FAQ, products, and about content, metadata, and structured data.');
} finally {
  await server.close();
}
