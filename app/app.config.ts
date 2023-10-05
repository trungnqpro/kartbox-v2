import { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'My Nuxt3',
    description:
      'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
    project: {
      links: {
        github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
      },
    },
    layout: {
      navbar: {
        menus: [
          { type: 'link', title: 'Home', to: '#home' },
          { type: 'link', title: 'Kart ID', to:'#KartId' },
          { type: 'link', title: 'Games', to: '#Games' },
          { type: 'link', title: 'Spaces', to: '#Spaces' },
          { type: 'link', title: 'Campaigns', to: '#Campaigns' },
          { type: 'link', title: 'Marketplace', to: '#NFT_Market' },
        ],
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt&nbsp;3 Awesome Starter',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/viandwi24',
        medium: 'https://viandwi24.medium.com',
        website: 'https://viandwi24.site',
      },
    },
  },
})
