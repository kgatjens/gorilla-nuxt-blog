<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="registerUser" >
      <md-card class="md-layout-item md-size-25 md-small-size-50">
        <md-card-header>
          <div class="md-title">Register a new user</div>
        </md-card-header>

        <md-card-content>
              <md-field>
            <label for="email">Email</label>
            <md-input type="email"  name="email" id="email" autocomplete="email" v-model="form.email"  />

            <!-- <md-input type="email" :disabled="loading" name="email" id="email" autocomplete="email" v-model="form.email"  /> -->

          </md-field>

          <div class="md-layout-item md-small-size-100">
                  <md-field>
                <label for="password">Password</label>
                <!-- <md-input type="password" :disabled="loading" name="password" id="password" autocomplete="password" v-model="form.password"  /> -->

                <md-input type="password"  name="password" id="password" autocomplete="password" v-model="form.password"  />

              </md-field>
            </div>
          

        </md-card-content>
        <!-- <md-progress-bar md-mode="indeterminate" v-if="sending" /> -->
        
        <md-card-actions>
          <!-- <md-button  type="submit" class="md-primary" :disabled="loading">Register user</md-button> -->
          <md-button  type="submit" class="md-primary" >Register user</md-button>
        </md-card-actions>

      </md-card>
      <md-snackbar :md-active.sync="authenticated">The user was registered with success!</md-snackbar>
    </form>


  </div>
</template>

<script>

  export default {
    name: 'FormValidation',
    data: () => ({
      form: {
        password: null,
        email: null,
      }
    }),
    computed:{
      authenticated(){
        return this.$store.getters.authenticated;
      }
    },
    watch:{
      authenticated(token){
        if(token){
          setTimeout(()=>this.$router.push('/'),1500);
        }
      }
    },
    methods: {
      async registerUser(){
          await this.$store.dispatch('authenticateUser',{
              email: this.form.email,
              password: this.form.password,
              returnSecureToken: true
          })
      }
    }
  }
    
     
</script>