/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as addAttribute, f as renderHead, e as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_EAh7aqF7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="asitabxlla" content="asitabxlla website"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="Xay.svg"><meta name="frontpage"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jura&family=Michroma&display=swap">${renderHead()}</head> <body class="bg-[url('/fondo.png')] flex"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/workspaces/Web/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { img, href, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}> <div class="card w-fit bg-base-100 shadow-xl image-full mt-7 my-10  border border-primary hover:scale-105 hover:shadow-md hover:shadow-primary"> <figure class=""><img${addAttribute(img, "src")}${addAttribute(title, "alt")} class=""></figure> </div> </a>`;
}, "/workspaces/Web/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$SocialIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialIcon;
  const { img, socialName, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class=""> <div class="border rounded border-primary transform rotate-45 inline-block p-1 hover:scale-105 hover:shadow-md hover:shadow-primary m-4"> <img${addAttribute(img, "src")}${addAttribute(socialName, "alt")} width="90" class="-rotate-45"> </div> </a>`;
}, "/workspaces/Web/src/components/SocialIcon.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Asitabxlla" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="flex flex-col md:flex-row justify-center p-20 md:content-center"> <div class="card max-w-md h-full bg-[#0f1825] border border-[#ff5151] p-10 rounded mr-10"> <div class="flex justify-center items-center"> <img src="Perfil.jpg" alt="Me" class="rounded-xl w-80 border-red-500 border-2 mb-5"> </div> <div class=" ml-5 text-pretty"> ${renderComponent($$result2, "Typewriter", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/workspaces/Web/src/components/typewriter.jsx", "client:component-export": "default" })} </div> <div class="divider divider-primary"></div> <div class="m-5"> <p class="text-pretty">|ESP/ENG| (she/her)</p> <p class="text-pretty">Hago dibujitos, juego a cositas y pinto moñecos cuando tengo tiempo </p> </div> <div class="flex flex-row align-middle justify-center class-icon"> ${renderComponent($$result2, "SocialIcon", $$SocialIcon, { "img": "/tw.svg", "socialName": "Twitter", "href": "https://twitter.com/asitabxlla" })} ${renderComponent($$result2, "SocialIcon", $$SocialIcon, { "img": "/insta.svg", "socialName": "Instagram", "href": "https://www.instagram.com/asitabxlla/" })} ${renderComponent($$result2, "SocialIcon", $$SocialIcon, { "img": "/devian.svg", "socialName": "DeviantArt", "href": "https://www.deviantart.com/asitadraws" })} ${renderComponent($$result2, "SocialIcon", $$SocialIcon, { "img": "/mail.svg", "socialName": "Mail", "href": "mailto:asiabxlla@gmail.com" })} </div> </div> <div class="basis-1/2 place-content-center md:container md:mx-auto"> <div class=" "> ${renderComponent($$result2, "Hero", $$Hero, { "title": "", "href": "/comisiones", "img": "/comissions.jpg" })}</div> <div class=""> ${renderComponent($$result2, "Hero", $$Hero, { "title": "", "href": "/portfolio", "img": "/portfolio.jpg" })}</div> </div> </div> </main> ` })}`;
}, "/workspaces/Web/src/pages/index.astro", void 0);

const $$file = "/workspaces/Web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
