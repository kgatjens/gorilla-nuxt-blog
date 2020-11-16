<template>
  <div class="md-layout md-aligmnet-center">
    <md-toolbar elevation="2">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">
        Nuxt Gorilla Post
      </nuxt-link>
      <div class="md-toolbar-section-end">

        <template v-if="authenticated">
          <md-button>
          <md-avatar><img :src="user.avatar" :alt="user.email"></md-avatar>
          {{user.email}}
          </md-button>
        </template>
        <template v-else>
          <md-button to="/register">Register</md-button>
        </template>
        
      </div>
    </md-toolbar>

    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="background:#ccc;padding:5px;">
            <ul v-for="post in posts" :key="post.id" class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <md-card md-with-hover style="margin-top:10px">
                  <md-card-media >
                    <img :alt="post.title.rendered" :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url" />
                  </md-card-media>

                  <md-card-header>
                    <div class="md-title">
                      <a target="_blank" :href="post.link" :title="post.title.rendered">{{post.title.rendered}}</a>
                    </div>
                    <div class="md-subhead">
                       {{post._embedded.author[0].name}}
                    </div>
                  </md-card-header>

                  <md-card-content>
                    <md-button class="md-icon-button">
                      <md-icon class="small-icon">bookmark</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                      <md-icon class="small-icon">share</md-icon>
                    </md-button>
                  </md-card-content>
                </md-card>  
            </ul>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ app }) {
      const posts = await app.$axios.$get('/api/posts?_embed');
      return { posts: posts }
    },
    computed:{
      authenticated(){
        return this.$store.getters.authenticated;
      },
      user(){
        return this.$store.getters.user;
      },
    }
  }
</script>

