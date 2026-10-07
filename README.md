# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Marketing page rendering

`npm run build` builds the Vite app and prerenders the homepage into `dist/index.html` , the services page into `dist/services/index.html`, FAQs into `dist/faq/index.html`, products into `dist/products/index.html`, and About Us into `dist/about-us/index.html` using the same React content shown in the browser. This makes the service descriptions, project links, FAQs, and JSON-LD available without JavaScript. `dist/app.html` retains the empty SPA shell for other routes; the Azure Static Web Apps and Vercel configs serve the prerendered pages at `/`, `/services`, `/faq`, `/products`, and `/about-us` and route other requests to the SPA shell. Keep that distinction when deploying to another host.

Homepage content and its matching structured data live in `src/pages/components/home/conversion-content.tsx`. No client results, conversion gains, or review scores are asserted there. Measure discovery calls and quote requests after launch before judging conversion uplift.

New homepage inquiry CTAs send `homepage_inquiry_click` to the existing Google Analytics tag when it is available, with `inquiry_method` and `placement` parameters. Services page CTAs send `services_inquiry_click` with a `placement` parameter. These events measure CTA clicks, not completed bookings or submitted enquiries.

Shared FAQ answers and the full FAQ topic groups live in `src/utils/data/faq.data.ts`. Keep answers accurate and free of unverified price, delivery, or performance promises.

The portfolio catalog lives in `src/utils/data/products.data.ts` and supplies the Products page and homepage previews. Only add website URLs confirmed by Augwell. See `OPTIMIZATION_STRATEGY.md` for the strategy and remaining measurement work.
