/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, m as maybeRenderHead, h as renderComponent } from '../astro_DeanQqZl.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                */
import { $ as $$Header } from './charactersheet_BIWK12XQ.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layoutcoms = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layoutcoms;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="Xay.svg"><meta name="generator"', "><title>", '</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jura&family=Michroma&display=swap"><link rel="stylesheet" href="/css/swiper-bundle.min.css">', `</head> <body class="bg-[url('/fondo.png')] "> `, ' <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "F:/Asia Archivos/Pictures/Uni 2024/Web/src/layouts/Layoutcoms.astro", void 0);

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
</h2> <a href="/heavyinkstyle" class="button">Take a look!</a> </div> </div> <div class="slide swiper-slide"> <img src="star wars.png" alt="" class="image"> <div class="image-data"> <h2>
Render<br>
Style
</h2> <a href="/renderstyle" class="button">Take a look!</a> </div> </div> <div class="slide swiper-slide"> <img src="Concept.png" alt="" class="image"> <div class="image-data"> <h2>
Character<br>
Sheet
</h2> <a href="/charactersheet" class="button">Take a look!</a> </div> </div> <div class="slide swiper-slide"> <img src="kitsu.jpg" alt="" class="image"> <div class="image-data"> <h2>
Traditional<br>
Art
</h2> <a href="/traditionalart" class="button">Take a look!</a> </div> </div> </div> <div class="swiper-button-next nav-btn"></div> <div class="swiper-button-prev nav-btn"></div> <div class="swiper-pagination"></div> </section>   `;
}, "F:/Asia Archivos/Pictures/Uni 2024/Web/src/components/Swiper.astro", void 0);

const $$Astro = createAstro();
const $$Commissions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Commissions;
  return renderTemplate`${renderComponent($$result, "Layoutcoms", $$Layoutcoms, { "title": "Commissions" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Swiper", $$Swiper, {})} ` })}`;
}, "F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/commissions.astro", void 0);

const $$file = "F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/commissions.astro";
const $$url = "/commissions";

export { $$Commissions as default, $$file as file, $$url as url };
