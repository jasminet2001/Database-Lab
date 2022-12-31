<template>
    <!-- desktop -->
    <v-app-bar
    v-if="this.$vuetify.breakpoint.mdAndUp"
    clipped-right
    app
    elevate-on-scroll
    color="#000930"
    dark
    scroll-target="#scrolling-techniques-3"
    height="70%"
    class="pr-4"
    >
      <v-tabs align-with-title >
        <v-tab to="/">صفحه اصلی</v-tab>
        
        <!-- <v-tab to="/about">درباره ما</v-tab> -->
        <v-tab v-if="!loggedIn" to="/login">
          ورود
          <!-- <v-btn-toggle background-color="#000930" shaped>
            <v-btn to="/login" color="white" elevation="0" tile flat outlined class="pa-5">ورود</v-btn>
            <v-btn to="/signup" color="white" elevation="0" tile flat outlined class="">ثبت نام</v-btn>
          </v-btn-toggle> -->
        </v-tab>
        <v-tab v-if="!loggedIn" to="/signup">ثبت نام</v-tab>

        <v-tab v-else to="/dashboard">داشبورد</v-tab>
        <v-spacer />
      </v-tabs>
    </v-app-bar>
  
    <!-- responsive -->
    <v-card
    class="overflow-hidden"
    v-else
    fixed
    >
      <v-app-bar
      color="#000930"
      dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </v-app-bar>
  
      <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      color="#000930"
      dark>
        <v-list
        nav
        dense>
            <v-list-item-group
            v-model="group"
            active-class="grey lighten-4--text text--accent-4">
            <v-list-item link to="/" class="py-2">
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>صفحه اصلی</v-list-item-title>
            </v-list-item>

            <v-list-item link to="/login" class="py-2">
                <v-list-item-icon>
                <v-icon>mdi-login</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ورود</v-list-item-title>
            </v-list-item>

            <v-list-item link to="/signup" class="py-2">
                <v-list-item-icon>
                <v-icon>mdi-account-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ثبت نام</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
  
        <v-divider></v-divider>
  
        <v-list>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-brightness-4</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <v-switch
              v-model="$vuetify.theme.dark"
              inset
              label="Dark Mode"
              persistent-hint
            ></v-switch>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </template>
  
  <script>
  export default{
    name: 'AppBar',
    data(){
      return{
        tab:'',
        avatar:'',
        loggedIn: '',
        drawer: false,
        group: null,
      }
    },
    // methods: {

    // },

  }
  </script>
  
  <style scoped>
  </style>