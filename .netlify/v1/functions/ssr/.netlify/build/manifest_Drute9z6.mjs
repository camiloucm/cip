import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_Dh7wiPRC.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main%20-%20en%20limpio/","cacheDir":"file:///C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main%20-%20en%20limpio/node_modules/.astro/","outDir":"file:///C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main%20-%20en%20limpio/dist/","srcDir":"file:///C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main%20-%20en%20limpio/src/","publicDir":"file:///C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main%20-%20en%20limpio/public/","buildClientDir":"file:///C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main%20-%20en%20limpio/dist/","buildServerDir":"file:///C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main%20-%20en%20limpio/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contactanos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contactanos","isIndex":false,"type":"page","pattern":"^\\/contactanos\\/?$","segments":[[{"content":"contactanos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contactanos.astro","pathname":"/contactanos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"entradas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/entradas","isIndex":false,"type":"page","pattern":"^\\/entradas\\/?$","segments":[[{"content":"entradas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/entradas.astro","pathname":"/entradas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"habitaciones/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/habitaciones","isIndex":false,"type":"page","pattern":"^\\/habitaciones\\/?$","segments":[[{"content":"habitaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/habitaciones.astro","pathname":"/habitaciones","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"nosotros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.AsBThuUO.css"},{"type":"inline","content":".swiper-button-prev[data-astro-cid-mnfo7hpj],.swiper-button-next[data-astro-cid-mnfo7hpj]{--swiper-theme-color: var(--color-white);--swiper-navigation-size: 20px;background-color:var(--color-primary);height:48px;width:48px;border-radius:50%}.herouno[data-astro-cid-mnfo7hpj]{background-image:url(/_astro/1000343281-2.BE2DBr89.png);background-size:cover;background-position:center}.herodos[data-astro-cid-mnfo7hpj]{background-image:url(/_astro/1000343287-2.CZLvA6ui.png);background-size:cover;background-position:center}.herotres[data-astro-cid-mnfo7hpj]{background-image:url(/_astro/1000343297-2.C2n9pAn0.png);background-size:cover;background-position:center}.swiper-hero[data-astro-cid-mnfo7hpj] .swiper-pagination[data-astro-cid-mnfo7hpj]{--swiper-pagination-color: white;--swiper-pagination-bullet-size: 20px;--swiper-pagination-bullet-opacity: 60%;--swiper-pagination-bullet-inactive-color: black;--swiper-pagination-bullet-inactive-opacity: 40%;--swiper-pagination-bullet-horizontal-gap: 8px}\n"}],"routeData":{"route":"/post/[slug]","isIndex":false,"type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/pages/contactanos.astro",{"propagation":"none","containsHead":true}],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/pages/habitaciones.astro",{"propagation":"none","containsHead":true}],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contactanos@_@astro":"pages/contactanos.astro.mjs","\u0000@astro-page:src/pages/entradas@_@astro":"pages/entradas.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/habitaciones@_@astro":"pages/habitaciones.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Drute9z6.mjs","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DJW7GQ-E.mjs","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BTRkajFu.js","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.CL-oEyGo.js","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts":"_astro/Layout.astro_astro_type_script_index_2_lang.w_YI8q_d.js","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=3&lang.ts":"_astro/Layout.astro_astro_type_script_index_3_lang.D5YQ1aGL.js","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=4&lang.ts":"_astro/Layout.astro_astro_type_script_index_4_lang.BLXnwpqW.js","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=5&lang.ts":"_astro/Layout.astro_astro_type_script_index_5_lang.Dbj7w_5F.js","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/components/CheckInOut.astro?astro&type=script&index=0&lang.ts":"_astro/CheckInOut.astro_astro_type_script_index_0_lang.DL3L4Uq7.js","C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/components/components gegnerales/CardFaq.astro?astro&type=script&index=0&lang.ts":"_astro/CardFaq.astro_astro_type_script_index_0_lang.CPn97Ydc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","window.onload=function(){let e=new Date,d=String(e.getDate()).padStart(2,\"0\"),l=String(e.getMonth()+1).padStart(2,\"0\");e=e.getFullYear()+\"-\"+l+\"-\"+d;let n=document.getElementById(\"checkin\");n.setAttribute(\"min\",e),n.setAttribute(\"value\",e);let t=new Date;t.setDate(t.getDate()+1);let y=String(t.getDate()).padStart(2,\"0\"),u=String(t.getMonth()+1).padStart(2,\"0\");t=t.getFullYear()+\"-\"+u+\"-\"+y;let a=document.getElementById(\"checkout\");a.setAttribute(\"min\",t),a.setAttribute(\"value\",t)};"],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=3&lang.ts","(self.webpackChunk_am5=self.webpackChunk_am5||[]).push([[4837],{9295:function(a,t,e){e.r(t),e.d(t,{am5themes_Animated:function(){return r}});let i=e(3409);class n extends i.Q{setupDefaultRules(){super.setupDefaultRules(),this.rule(\"Component\").setAll({interpolationDuration:600}),this.rule(\"Hierarchy\").set(\"animationDuration\",600),this.rule(\"Scrollbar\").set(\"animationDuration\",600),this.rule(\"Tooltip\").set(\"animationDuration\",300),this.rule(\"MapChart\").set(\"animationDuration\",1e3),this.rule(\"MapChart\").set(\"wheelDuration\",300),this.rule(\"Entity\").setAll({stateAnimationDuration:600}),this.rule(\"Sprite\").states.create(\"default\",{stateAnimationDuration:600}),this.rule(\"Tooltip\",[\"axis\"]).setAll({animationDuration:200}),this.rule(\"WordCloud\").set(\"animationDuration\",500),this.rule(\"Polygon\").set(\"animationDuration\",600),this.rule(\"ArcDiagram\").set(\"animationDuration\",600)}}const r=n}},function(a){let t=a(a.s=9295),e=window;for(let i in t)e[i]=t[i];t.__esModule&&Object.defineProperty(e,\"__esModule\",{value:!0})}]);"],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=4&lang.ts","new Swiper(\".testimonios\",{direction:\"horizontal\",loop:!0,allowTouchMove:!0,autoplay:{delay:500,pauseOnMouseEnter:!0,disableOnInteraction:!1},pagination:{el:\".swiper-pagination\",type:\"bullets\",clickeable:!0},navigation:{nextEl:\".swiper-button-next\",prevEl:\".swiper-button-prev\"}});"],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/layouts/Layout.astro?astro&type=script&index=5&lang.ts","new Swiper(\".swiper-hero\",{direction:\"horizontal\",loop:!0,allowTouchMove:!0,autoplay:{delay:500,pauseOnMouseEnter:!0,disableOnInteraction:!1},pagination:{el:\".swiper-pagination\",type:\"bullets\",clickeable:!0,dynamicBullets:!0},navigation:{nextEl:\".swiper-button-next\",prevEl:\".swiper-button-prev\"}});"],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/components/CheckInOut.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"consult\"),c=document.getElementById(\"blackgroundDialog\"),r=document.getElementById(\"closePageOne\"),u=document.getElementById(\"checkin\"),m=document.getElementById(\"checkout\"),l=document.getElementById(\"pax\"),E=document.getElementById(\"spanCheckIn\"),g=document.getElementById(\"spanChekOut\"),v=document.getElementById(\"spanPax\"),y=document.querySelector(\".dialog-active\"),I=document.querySelector(\".dialog-inactive\"),P=document.querySelector(\".nextPage\"),T=document.querySelector(\".sentReservation\"),A=document.getElementById(\"circle-inactive\"),p=document.getElementById(\"separatorPagination\"),x=document.getElementById(\"spanCost\"),N=document.getElementById(\"spanTax\"),B=document.getElementById(\"spanTotal\");d.addEventListener(\"click\",function(){c.classList.remove(\"invisible\");let t=u.value,n=m.value,a=parseFloat(l.value);E.innerHTML=t,g.innerHTML=n,v.innerHTML=a});r.addEventListener(\"click\",function(){c.classList.add(\"invisible\")});P.addEventListener(\"click\",function(){y.classList.replace(\"dialog-active\",\"dialog-inactive\"),I.classList.replace(\"dialog-inactive\",\"dialog-active\"),A.classList.replace(\"circle-inactive\",\"circle-active\"),p.classList.replace(\"border-primary\",\"border-secondary\");let t=parseFloat(l.value),n=46,i=(t-1)*10,e;function s(){return t===1?e=n:t>=2?e=n+i:e=0,e}s();let o=e*.1;x.innerText=e.toFixed(2),N.innerText=o.toFixed(2),B.innerText=(e+o).toFixed(2)});T.addEventListener(\"click\",function(){c.classList.add(\"invisible\")});"],["C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/components/components gegnerales/CardFaq.astro?astro&type=script&index=0&lang.ts","const c=document.querySelectorAll(\".i\"),o=document.querySelectorAll(\".question\"),s=document.querySelectorAll(\".answer\");c.forEach((e,t)=>{e.addEventListener(\"click\",()=>{s[t].classList.contains(\"inactive\")?(s[t].classList.remove(\"inactive\"),s[t].classList.add(\"active\")):(s[t].classList.remove(\"active\"),s[t].classList.add(\"inactive\"));const a=e.style.transform;e.style.transform=a===\"rotate(180deg)\"?\"rotate(0deg)\":\"rotate(180deg)\"})});o.forEach((e,t)=>{e.addEventListener(\"click\",()=>{s[t].classList.contains(\"inactive\")?(s[t].classList.remove(\"inactive\"),s[t].classList.add(\"active\")):(s[t].classList.remove(\"active\"),s[t].classList.add(\"inactive\"));const a=c[t].style.transform;c[t].style.transform=a===\"rotate(180deg)\"?\"rotate(0deg)\":\"rotate(180deg)\"})});"]],"assets":["/_astro/340195972.BfNPa9W_.jpg","/_astro/1000343291.DBl0C1Vi.jpg","/_astro/Roboto-VariableFont_wdth_wght.WOy3sDCz.ttf","/_astro/1000343281-2.BE2DBr89.png","/_astro/1000343297-2.C2n9pAn0.png","/_astro/1000343286-2.DG8-sitl.png","/_astro/1000343287-2.CZLvA6ui.png","/_astro/blog.AsBThuUO.css","/favicon.svg","/_astro/Layout.astro_astro_type_script_index_1_lang.CL-oEyGo.js","/_astro/Layout.astro_astro_type_script_index_2_lang.w_YI8q_d.js","/src/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf","/src/fonts/Roboto-Italic-VariableFont_wdth,wght.woff2","/src/fonts/Roboto-VariableFont_wdth,wght.ttf","/src/fonts/Roboto-VariableFont_wdth,wght.woff2","/404.html","/blog/index.html","/contactanos/index.html","/entradas/index.html","/faq/index.html","/habitaciones/index.html","/nosotros/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"PYwrkDI6/0EDwp3Woek5LF/7P9I3uUUI0bjtYaGfug8=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\camil\\Documents\\WEB-DE-CLIENTES\\CANAL-INN\\canalinnpruebas-main - en limpio\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
