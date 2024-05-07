export { renderers } from '../renderers.mjs';

const page = () => import('./pages/charactersheet_BIWK12XQ.mjs').then(n => n.c);

export { page };
