/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, m as maybeRenderHead, h as renderComponent } from '../astro_EAh7aqF7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header } from './comisiones_CWGsJlPB.mjs';
import 'clsx';
/* empty css                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$LayoutRefs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LayoutRefs;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="Xay.svg"><meta name="generator"', "><title>", '</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jura&family=Michroma&display=swap"><link rel="stylesheet" href="/css/swiper-bundle.min.css">', `</head> <body class="bg-[url('/fondo.png')] "> `, ' <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/workspaces/Web/src/layouts/LayoutRefs.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { img, p, title, span } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-xl bg-secondary border-primary border-2 rounded-lg shadow "> <img class="p-8 rounded-t-lg"${addAttribute(img, "src")} alt=""> <div class="px-5 pb-5"> <a> <h5 class="text-xl font-semibold tracking-tight text-white">${title}</h5> </a> <div class="divider divider-primary"></div> <div class="flex items-center justify-between"> <p>${p}</p> <span class="text-4xl font-bold text-white">${span}</span> </div> </div> </div>`;
}, "/workspaces/Web/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Lineart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Lineart;
  return renderTemplate`${renderComponent($$result, "LayoutRefs", $$LayoutRefs, { "title": "Lineart" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="p-20 h-screen flex row-span-3 gap-4 "> ${renderComponent($$result2, "Card", $$Card, { "title": "Lineart 1", "img": "Xayline.png", "p": "uwu", "span": "15\u20AC" })} ${renderComponent($$result2, "Card", $$Card, { "title": "Lineart 1", "img": "Xayline.png", "p": "uwu", "span": "15\u20AC" })} ${renderComponent($$result2, "Card", $$Card, { "title": "Lineart 1", "img": "Xayline.png", "p": "uwu", "span": "15\u20AC" })} </div> ` })}`;
}, "/workspaces/Web/src/pages/lineart.astro", void 0);

const $$file = "/workspaces/Web/src/pages/lineart.astro";
const $$url = "/lineart";

export { $$Lineart as default, $$file as file, $$url as url };
