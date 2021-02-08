const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang:'css' },
    { src: '~/assets/theme.scss', lang:'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-material'}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: false,
    proxy:true
  },
  proxy: {
    "/api/": {
      target: "https://gorillalogic.com/wp-json/wp/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCq-vskpwqYy8OhLY4DHsH-dLICj5OW9go",
      pathRewrite: { "^/register/": "" }
    }

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  generate: {
    fallback: true
  }
}
