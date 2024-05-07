/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DeanQqZl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$LayoutRefs } from './charactersheet_BIWK12XQ.mjs';

const $$Astro = createAstro();
const $$Traditionalart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Traditionalart;
  return renderTemplate`${renderComponent($$result, "LayoutRefs", $$LayoutRefs, { "title": "Lineart" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<a href="/commissions" class="text-accent"> <button class="btn btn-active btn-primary mx-10 mt-10 shadow-xl hover:bg-accent hover:text-white">Back to Commissions</button> </a> ` })}`;
}, "F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/traditionalart.astro", void 0);

const $$file = "F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/traditionalart.astro";
const $$url = "/traditionalart";

export { $$Traditionalart as default, $$file as file, $$url as url };
