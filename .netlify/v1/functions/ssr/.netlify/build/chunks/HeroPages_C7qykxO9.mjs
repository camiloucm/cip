import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_Dh7wiPRC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$HeroPages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroPages;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="h-[calc(100vh-600px)] mt-[-73px] mb-30" data-astro-cid-mnfo7hpj> <article class="w-4/5 flex justify-center items-end m-auto" data-astro-cid-mnfo7hpj> <div class="flex items-end justify-start w-full translate-y-[calc(100vh-600px)] z-3" data-astro-cid-mnfo7hpj> <div class="block z-1000 sm:py-4 sm:px-14 py-2 px-7 bg-secondary" data-astro-cid-mnfo7hpj> <h1 class="uppercase font-bold text-primary sm:text-4xl text-xl" data-astro-cid-mnfo7hpj> ${title} </h1> </div> </div> </article> <article class="swiper swiper-hero w-full h-full" data-astro-cid-mnfo7hpj> <div class="swiper-wrapper" data-astro-cid-mnfo7hpj> <div class=" swiper-slide w-full h-screen bg-cover bg-center" data-astro-cid-mnfo7hpj> <div class="herouno bg-cover bg-center flex items-end w-full h-full object-cover" data-astro-cid-mnfo7hpj></div> </div> <div class="swiper-slide w-full h-screen " data-astro-cid-mnfo7hpj> <div class="herodos bg-cover bg-center flex items-end w-full h-full object-cover" data-astro-cid-mnfo7hpj></div> </div> <div class="swiper-slide " data-astro-cid-mnfo7hpj> <div class="herotres bg-cover bg-center flex items-end w-full h-full object-cover" data-astro-cid-mnfo7hpj></div> </div> </div> </article> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/canalinnpruebas-main - en limpio/src/components/HeroPages.astro", void 0);

export { $$HeroPages as $ };
