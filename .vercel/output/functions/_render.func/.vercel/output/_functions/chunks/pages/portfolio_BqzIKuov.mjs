/* empty css                                   */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_DeanQqZl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$LayoutRefs } from './charactersheet_BIWK12XQ.mjs';

const $$Astro = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${renderComponent($$result, "LayoutRefs", $$LayoutRefs, { "title": "Lineart" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ` })}`;
}, "F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/portfolio.astro", void 0);

const $$file = "F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
