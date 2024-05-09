import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind(), react(),],
  output: "server",
  adapter: vercel()
});