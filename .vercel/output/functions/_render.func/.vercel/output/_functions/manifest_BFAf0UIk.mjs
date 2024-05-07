import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DeanQqZl.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
    isIndex: rawRouteData.isIndex
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/charactersheet.ELciuWoM.css"},{"type":"inline","content":"body{background-color:#172439;background-size:cover;background-repeat:repeat-x}h2{font-family:Michroma,sans-serif;color:#fff;font-weight:700}h5{font-family:Jura,sans-serif}.card{margin:0% 15%}@media screen and (max-width: 768px){.card{margin:0%}}span{font-family:Jura,sans-serif}ul{font-size:20px;font-family:Jura,sans-serif;color:#fff;font-weight:400}.btn{font-family:Jura,sans-serif}.logo-class,.menu-class{font-family:Michroma,sans-serif}\n"}],"routeData":{"route":"/charactersheet","isIndex":false,"type":"page","pattern":"^\\/charactersheet\\/?$","segments":[[{"content":"charactersheet","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/charactersheet.astro","pathname":"/charactersheet","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.brhe2snv.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.EKmKsbKj.css"},{"type":"external","src":"/_astro/charactersheet.ELciuWoM.css"},{"type":"inline","content":"body{background-color:#172439;background-size:cover;background-repeat:no-repeat}p{font-size:20px;font-family:Jura,sans-serif;color:#fff;font-weight:400}.logo-class,.menu-class{font-family:Michroma,sans-serif}{margin:0;padding:0;box-sizing:border-box;font-family:Jura,sans-serif}.main{height:100vh;width:100%}.wrapper,.slide{position:relative;width:100%;height:100%}.slide{overflow:hidden}.slide:before{content:\"\";position:absolute;height:100%;width:100%;background-color:#0006;z-index:10}.slide .image{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.slide .image-data{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;width:100%;z-index:100}.image-data span.text{font-size:14px;font-weight:400;color:#fff}.image-data h2{font-size:45px;font-weight:600;font-family:Jura,sans-serif;color:#fff}a.button{display:inline-block;padding:10px 20px;border-radius:25px;color:#fff;background:#ff5151;text-decoration:none;margin-top:25px;transition:all .3s ease}a.button:hover{color:#ff5151;background-color:#fff}.nav-btn{height:50px;width:50px;border-radius:50%;background:#ffffff2d}.nav-btn:hover{background:#0609a1}.swiper-button-next{right:50px}.swiper-button-prev{left:50px}.nav-btn:before,.nav-btn:after{font-size:35px;color:#ff5151}.swiper-pagination-bullet{opacity:1;height:12px;width:12px;background-color:#0609a1;visibility:hidden}.swiper-pagination-bullet-active{border:2px solid #0609a1;background-color:#fff}@media screen and (max-width: 768px){.nav-btn{visibility:hidden}.swiper-pagination-bullet{visibility:visible}}\n"}],"routeData":{"route":"/commissions","isIndex":false,"type":"page","pattern":"^\\/commissions\\/?$","segments":[[{"content":"commissions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/commissions.astro","pathname":"/commissions","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/charactersheet.ELciuWoM.css"},{"type":"inline","content":"body{background-color:#172439;background-size:cover;background-repeat:repeat-x}h2{font-family:Michroma,sans-serif;color:#fff;font-weight:700}h5{font-family:Jura,sans-serif}.card{margin:0% 15%}@media screen and (max-width: 768px){.card{margin:0%}}span{font-family:Jura,sans-serif}ul{font-size:20px;font-family:Jura,sans-serif;color:#fff;font-weight:400}.btn{font-family:Jura,sans-serif}.logo-class,.menu-class{font-family:Michroma,sans-serif}\n"}],"routeData":{"route":"/heavyinkstyle","isIndex":false,"type":"page","pattern":"^\\/heavyinkstyle\\/?$","segments":[[{"content":"heavyinkstyle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/heavyinkstyle.astro","pathname":"/heavyinkstyle","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/charactersheet.ELciuWoM.css"},{"type":"inline","content":"body{background-color:#172439;background-size:cover;background-repeat:repeat-x}h2{font-family:Michroma,sans-serif;color:#fff;font-weight:700}h5{font-family:Jura,sans-serif}.card{margin:0% 15%}@media screen and (max-width: 768px){.card{margin:0%}}span{font-family:Jura,sans-serif}ul{font-size:20px;font-family:Jura,sans-serif;color:#fff;font-weight:400}.btn{font-family:Jura,sans-serif}.logo-class,.menu-class{font-family:Michroma,sans-serif}\n"}],"routeData":{"route":"/lineart","isIndex":false,"type":"page","pattern":"^\\/lineart\\/?$","segments":[[{"content":"lineart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lineart.astro","pathname":"/lineart","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/charactersheet.ELciuWoM.css"},{"type":"inline","content":"body{background-color:#172439;background-size:cover;background-repeat:repeat-x}h2{font-family:Michroma,sans-serif;color:#fff;font-weight:700}h5{font-family:Jura,sans-serif}.card{margin:0% 15%}@media screen and (max-width: 768px){.card{margin:0%}}span{font-family:Jura,sans-serif}ul{font-size:20px;font-family:Jura,sans-serif;color:#fff;font-weight:400}.btn{font-family:Jura,sans-serif}.logo-class,.menu-class{font-family:Michroma,sans-serif}\n"}],"routeData":{"route":"/portfolio","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/charactersheet.ELciuWoM.css"},{"type":"inline","content":"body{background-color:#172439;background-size:cover;background-repeat:repeat-x}h2{font-family:Michroma,sans-serif;color:#fff;font-weight:700}h5{font-family:Jura,sans-serif}.card{margin:0% 15%}@media screen and (max-width: 768px){.card{margin:0%}}span{font-family:Jura,sans-serif}ul{font-size:20px;font-family:Jura,sans-serif;color:#fff;font-weight:400}.btn{font-family:Jura,sans-serif}.logo-class,.menu-class{font-family:Michroma,sans-serif}\n"}],"routeData":{"route":"/renderstyle","isIndex":false,"type":"page","pattern":"^\\/renderstyle\\/?$","segments":[[{"content":"renderstyle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/renderstyle.astro","pathname":"/renderstyle","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/charactersheet.ELciuWoM.css"},{"type":"inline","content":"body{background-color:#172439;background-size:cover;background-repeat:repeat-x}h2{font-family:Michroma,sans-serif;color:#fff;font-weight:700}h5{font-family:Jura,sans-serif}.card{margin:0% 15%}@media screen and (max-width: 768px){.card{margin:0%}}span{font-family:Jura,sans-serif}ul{font-size:20px;font-family:Jura,sans-serif;color:#fff;font-weight:400}.btn{font-family:Jura,sans-serif}.logo-class,.menu-class{font-family:Michroma,sans-serif}\n"}],"routeData":{"route":"/traditionalart","isIndex":false,"type":"page","pattern":"^\\/traditionalart\\/?$","segments":[[{"content":"traditionalart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/traditionalart.astro","pathname":"/traditionalart","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/charactersheet.ELciuWoM.css"},{"type":"inline","content":"body{background-color:#172439;background-size:cover;background-repeat:no-repeat;overflow-y:hidden}@media (max-width: 768px){body{overflow:auto;padding:auto}}p{font-size:1.35rem;font-family:Jura,sans-serif;color:#fff;font-weight:400}.typewriter{font-size:2rem;font-family:Michroma,sans-serif;color:#fff;font-weight:700}@keyframes typing{0%{width:0}to{width:100%}}.myCursor{animation:blink 1s infinite;color:#ff5151;font-size:2rem;font-weight:700;font-family:sans-serif}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}.socialcard{border-radius:11px;padding:45px;margin:15px 50px 4% 13%;align-self:center;width:900px;height:850px}@media screen and (max-width: 768px){.socialcard{margin-left:15%;width:90%}}.artcard{border-radius:11px;margin:30px 50px 4%;align-self:center;width:1200px;height:auto}@media screen and (max-width: 768px){.artcard{margin-left:15%;width:90%}}@media screen and (max-width: 768px){.socialicon{flex-direction:row;justify-content:center;align-items:center;width:120%;margin-left:-10%}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/charactersheet.astro",{"propagation":"none","containsHead":true}],["F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/heavyinkstyle.astro",{"propagation":"none","containsHead":true}],["F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/lineart.astro",{"propagation":"none","containsHead":true}],["F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/portfolio.astro",{"propagation":"none","containsHead":true}],["F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/renderstyle.astro",{"propagation":"none","containsHead":true}],["F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/traditionalart.astro",{"propagation":"none","containsHead":true}],["F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/commissions.astro",{"propagation":"none","containsHead":true}],["F:/Asia Archivos/Pictures/Uni 2024/Web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/commissions.astro":"chunks/pages/commissions_D9qeUyhV.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Xhtca-b5.mjs","/src/pages/heavyinkstyle.astro":"chunks/pages/heavyinkstyle_DDUk4bpK.mjs","/src/pages/index.astro":"chunks/pages/index_t_Vmkm2I.mjs","/src/pages/lineart.astro":"chunks/pages/lineart_Cjyisnt-.mjs","/src/pages/portfolio.astro":"chunks/pages/portfolio_BqzIKuov.mjs","/src/pages/renderstyle.astro":"chunks/pages/renderstyle_BtwAqGl6.mjs","/src/pages/traditionalart.astro":"chunks/pages/traditionalart_t59nPwO2.mjs","\u0000@astrojs-manifest":"manifest_BFAf0UIk.mjs","F:/Asia Archivos/Pictures/Uni 2024/Web/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CAibw4IM.mjs","\u0000@astro-page:src/pages/charactersheet@_@astro":"chunks/charactersheet_thkC-F2J.mjs","\u0000@astro-page:src/pages/commissions@_@astro":"chunks/commissions_nLe_cCUn.mjs","\u0000@astro-page:src/pages/heavyinkstyle@_@astro":"chunks/heavyinkstyle_BZaKC4vx.mjs","\u0000@astro-page:src/pages/lineart@_@astro":"chunks/lineart_BfCSlYi0.mjs","\u0000@astro-page:src/pages/portfolio@_@astro":"chunks/portfolio_sR9B9gVe.mjs","\u0000@astro-page:src/pages/renderstyle@_@astro":"chunks/renderstyle_CuM8aCAq.mjs","\u0000@astro-page:src/pages/traditionalart@_@astro":"chunks/traditionalart_Dx670SeQ.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BN3xd35a.mjs","F:/Asia Archivos/Pictures/Uni 2024/Web/src/components/typewriter.jsx":"_astro/typewriter.6rV2q-CX.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","/astro/hoisted.js?q=0":"_astro/hoisted.brhe2snv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/charactersheet.ELciuWoM.css","/bdevian.svg","/binsta.svg","/bmail.svg","/btw.svg","/bustline.png","/bustline.svg","/comissions.jpg","/Concept.png","/devian.svg","/favicon.svg","/fondo.png","/fondovert.png","/insta.svg","/instagram.svg","/kitsu.jpg","/linebust.jpg","/mail.svg","/Miku.jpg","/Perfil.jpg","/portfolio.jpg","/renderstyle.png","/star wars.png","/tw.svg","/Xay.svg","/Xayline.png","/_astro/client.DbokQZWz.js","/_astro/hoisted.brhe2snv.js","/_astro/hoisted.EKmKsbKj.css","/_astro/index.NEDEFKed.js","/_astro/typewriter.6rV2q-CX.js"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
