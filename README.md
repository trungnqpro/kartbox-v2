## Getting Started

- Node env: latest or v20.3.0
- NPM: latest

### Installation

- clone this repository
  ```bash
  git clone https://gitlab.famtechvn.net/game/dragon-kart/web/kartbox-v2.git
  ```
- install dependencies
  ```bash
  pnpm install
  ```
- run development server
  ```bash
  pnpm dev
  ```
- install anymore package
  ```bash
  pnpm add -wD package_name
  ```

## Features

- [x] 📚 [Nuxt Layer Support](https://nuxt.com/docs/getting-started/layers#layers)
- [x] 💨 [Tailwind CSS v3](https://tailwindcss.com/)
- [x] ✨ [Headless UI](https://headlessui.dev/)
- [x] 🔔 [Nuxt Icon](https://icones.js.org/) (https://github.com/nuxt-modules/icon)
- [x] 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [x] 🪝 Built-in Awesome Component & Layout
- [x] 🌙 [Theme Manager (Color Mode)](https://color-mode.nuxtjs.org/)
- [x] Configurable Theme (Easy to change)
  - [x] Primary Colors
  - [x] Font

## To Dos

- [x] Nuxt Layer Support
- [x] Nuxt Awesome Modules Core
  - [x] create modules `~/modules/awesome.ts`
- [x] Adding Pinia
  - [x] auto import "defineStore" as "definePiniaStore"
  - [x] auto import folder "stores"
- [] State management: https://nuxt.com/docs/getting-started/state-management
- [x] Eslint & Prettier
- [x] 🌙 Theme Switcher (light, dark, system)
- [ ] 🇮🇩 Language Switcher
- [x] useCustomFetch extends from https://nuxt.com/docs/getting-started/data-fetching
- [] Error handling: https://nuxt.com/docs/getting-started/error-handling
- [] Deployment: https://nuxt.com/docs/getting-started/deployment
- [] Fonts: https://nuxt.com/docs/getting-started/styling
- [] Assets vs Public folder: https://nuxt.com/docs/getting-started/assets
- [] Runtimeconfig vs app.config: https://nuxt.com/docs/getting-started/configuration
