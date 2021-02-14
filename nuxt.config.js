export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Frontend Mentor | myteam website challenge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A Frontend Mentor Challenge',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Livvic:wght@500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/typography.scss',
    '@/assets/styles/link-anchor.scss',
  ],
  styleResources: {
    scss: [
      '~/assets/styles/variables.scss',
      '~/assets/styles/utils.scss',
      '~/assets/styles/mixins.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/pages', pattern: '*/components/**' }
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        component: resolve(__dirname, 'pages/home/index.vue')
      })
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-optimized-images',
    '@nuxt/image',
    'nuxt-purgecss',
  ],

  optimizedImages: {
    optimizeImages: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Environment Configuration: https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config#env
  env: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  /* router: {
    base: process.env.NODE_ENV === "development" ? process.env.BASE_URL : '/frontend-mentor-challenges/myteam-multi-page-website/'
  }, */
  /* static: {
    prefix: true
  } */
}
