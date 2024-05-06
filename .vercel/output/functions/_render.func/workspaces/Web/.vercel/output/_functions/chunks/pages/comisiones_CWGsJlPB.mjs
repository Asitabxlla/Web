/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, m as maybeRenderHead, h as renderComponent } from '../astro_EAh7aqF7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                               */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$Layoutcoms = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layoutcoms;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="Xay.svg"><meta name="generator"', "><title>", '</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jura&family=Michroma&display=swap"><link rel="stylesheet" href="/css/swiper-bundle.min.css">', `</head> <body class="bg-[url('/fondo.png')] "> `, ' <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/workspaces/Web/src/layouts/Layoutcoms.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <nav class="bg-secondary border-b-4 border-primary p-2 pb-2 "> <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 logo-class"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="Xay.svg" class="h-10" alt="Literally me"> <span class="self-center text-2xl whitespace-nowrap">Asitabxlla</span> </a> <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse"> <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-accent focus:outline-none 
                " aria-controls="mega-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div id="mega-menu" class="text-xl items-center justify-between hidden w-full md:flex md:w-auto md:order-1 menu-class"> <ul class="flex flex-col font-medium md:flex-row md:mt-2 md:space-x-8 rtl:space-x-reverse mb-2"> <li> <a href="/" class="block py-2 px-3 text-primary border-b border-primary hover:bg-base-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">Home</a> </li> <li> <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center justify-between w-full py-2 px-3 text-white border-b border-primary hover:bg-base-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">
Commissions
<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path> </svg> </button> <div id="mega-menu-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-base-100 border border-primary rounded-lg shadow-md md:grid-cols-1 "> <div class="p-6 pb-6 text-gray-900 md:pb-4"> <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button"> <li> <a href="/lineart" class="text-white hover:text-blue-600">
Lineart Style
</a> </li> <li> <a href="#" class="text-white hover:text-blue-600">
Heavy Ink Style
</a> </li> <li> <a href="#" class="text-white hover:text-blue-600">
Render Style
</a> </li> <li> <a href="#" class="text-white hover:text-blue-600">
Character Sheet
</a> </li> <li> <a href="#" class="text-white hover:text-blue-600">
Traditional Art
</a> </li> <li> <a href="#" class="text-white hover:text-blue-600">
Terms Of Service
</a> </li> </ul> </div> </div> </li> <li> <a href="#" class="block py-2 px-3 text-white border-b border-primary hover:bg-base-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Portfolio</a> </li> </ul> </div> </div> </nav> </header>`;
}, "/workspaces/Web/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Swiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Swiper;
  return renderTemplate`${maybeRenderHead()}<section class="main swiper mySwiper"> <div class="wrapper swiper-wrapper"> <div class="slide swiper-slide"> <img src="Xayline.png" alt="" class="image"> <div class="image-data"> <h2>
Lineart <br>
Style
</h2> <a href="/lineart" class="button">Take a look!</a> </div> </div> <div class="slide swiper-slide"> <img src="renderstyle.png" alt="" class="image"> <div class="image-data"> <h2>
Heavy Ink<br>
Style
</h2> <a href="#" class="button">Take a look!</a> </div> </div> <div class="slide swiper-slide"> <img src="star wars.png" alt="" class="image"> <div class="image-data"> <h2>
Render<br>
Style
</h2> <a href="#" class="button">Take a look!</a> </div> </div> <div class="slide swiper-slide"> <img src="Concept.png" alt="" class="image"> <div class="image-data"> <h2>
Character<br>
Sheet
</h2> <a href="#" class="button">Take a look!</a> </div> </div> <div class="slide swiper-slide"> <img src="kitsu.jpg" alt="" class="image"> <div class="image-data"> <h2>
Traditional<br>
Art
</h2> <a href="#" class="button">Take a look!</a> </div> </div> </div> <div class="swiper-button-next nav-btn"></div> <div class="swiper-button-prev nav-btn"></div> <div class="swiper-pagination"></div> </section>   `;
}, "/workspaces/Web/src/components/Swiper.astro", void 0);

const $$Astro = createAstro();
const $$Comisiones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Comisiones;
  return renderTemplate`${renderComponent($$result, "Layoutcoms", $$Layoutcoms, { "title": "Commissions" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Swiper", $$Swiper, {})} ` })}`;
}, "/workspaces/Web/src/pages/comisiones.astro", void 0);

const $$file = "/workspaces/Web/src/pages/comisiones.astro";
const $$url = "/comisiones";

const comisiones = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Comisiones,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, comisiones as c };
