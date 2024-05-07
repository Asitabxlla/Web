/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent } from '../astro_DeanQqZl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$LayoutRefs } from './charactersheet_BIWK12XQ.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { img, title, h5 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card lg:card-side bg-secondary shadow-xl border-primary border-2 rounded-md flex flex-col "> <div class="rounded-md flex justify-center"> <img class="p-5"${addAttribute(img, "src")} alt="lineart"> </div> <div class="card-body"> <h2 class="card-title text-4xl">${title}</h2> <div class="divider divider-primary"></div> <ul class="text-white text-3xl list-none"> <li>Extra character: + 80% original price</li> <li>Complicated details or background: +15€</li> <li>Maximum characters per piece: 3</li> </ul> <h5 class="text-white text-4xl flex justify-end">${h5}</h5> </div> </div>`;
}, "F:/Asia Archivos/Pictures/Uni 2024/Web/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary shadow"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"> <img src="Xay.svg" class="h-8" alt="Flowbite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Asitabxlla</span> </a> <ul class="flex flex-wrap items-center mb-6 text-lg font-medium text-gray-200 sm:mb-0"> <li> <a href="/index" class="hover:underline hover:text-primary me-4 md:me-6">About</a> </li> <li> <a href="#" class="hover:underline hover:text-primary me-4 md:me-6">Privacy Policy</a> </li> <li> <a href="#" class="hover:underline hover:text-primary me-4 md:me-6">Terms Of Service</a> </li> <li> <a href="#" class="hover:underline hover:text-primary">Contact</a> </li> </ul> </div> <hr class="my-6 border-primary sm:mx-auto lg:my-8"> <span class="block text-lg text-gray-200 sm:text-center">© 2024 <a href="/" class="hover:underline hover:text-primary">Asitabxlla™</a>. All Rights Reserved.</span> </div> </footer>`;
}, "F:/Asia Archivos/Pictures/Uni 2024/Web/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Lineart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Lineart;
  return renderTemplate`${renderComponent($$result, "LayoutRefs", $$LayoutRefs, { "title": "Lineart" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<a href="/commissions" class="text-accent"> <button class="btn btn-active btn-primary mx-10 mt-10 shadow-xl hover:bg-accent hover:text-white">Back to Commissions</button> </a> <div class="m-5 grid grid-row-3 gap-10 "> ${renderComponent($$result2, "Card", $$Card, { "title": "Lineart Bust", "img": "bustline.png", "h5": "10\u20AC" })} ${renderComponent($$result2, "Card", $$Card, { "title": "Lineart 1", "img": "Xayline.png", "h5": "" })} ${renderComponent($$result2, "Card", $$Card, { "title": "Lineart 1", "img": "bustline.svg", "h5": "" })} </div> <footer> ${renderComponent($$result2, "Footer", $$Footer, {})} </footer> ` })}`;
}, "F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/lineart.astro", void 0);

const $$file = "F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/lineart.astro";
const $$url = "/lineart";

export { $$Lineart as default, $$file as file, $$url as url };
