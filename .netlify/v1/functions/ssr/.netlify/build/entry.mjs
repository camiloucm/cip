import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Drute9z6.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/contactanos.astro.mjs');
const _page4 = () => import('./pages/entradas.astro.mjs');
const _page5 = () => import('./pages/faq.astro.mjs');
const _page6 = () => import('./pages/habitaciones.astro.mjs');
const _page7 = () => import('./pages/nosotros.astro.mjs');
const _page8 = () => import('./pages/post/_slug_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/contactanos.astro", _page3],
    ["src/pages/entradas.astro", _page4],
    ["src/pages/faq.astro", _page5],
    ["src/pages/habitaciones.astro", _page6],
    ["src/pages/nosotros.astro", _page7],
    ["src/pages/post/[slug].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ef8c560f-ac6d-4810-9160-feee3292c7ba"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
