<template>
    <!-- desktop mode -->
    <v-navigation-drawer
    class="grey darken-4"
    v-if="this.$vuetify.breakpoint.mdAndUp"
    dark
    clipped
    right
    app
    permanent
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar class="mx-auto">
            <v-img src=""></v-img>
          </v-list-item-avatar>
        </v-list-item>
  
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title
            class="text-h6 white--text">
              Name
            </v-list-item-title>
            <v-list-item-subtitle
            class="white--text">
              Jasmine@gmail.com
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  
      <v-divider></v-divider>
  
      <v-list nav
      dense
      >
        <v-list-item link to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-monitor-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>داشبورد</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/employeelist">
          <v-list-item-icon>
            <v-icon>mdi-account-edit-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>لیست کارمندان</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/customerList">
          <v-list-item-icon>
            <v-icon>mdi-lock-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>لیست مشتریان</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/transactions">
          <v-list-item-icon>
            <v-icon>mdi-bookmark-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>لیست تراکنش ها</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-form-select</v-icon>
          </v-list-item-icon>
          <v-list-item-title>لیست شعبات</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>خروج</v-list-item-title>
        </v-list-item>
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
  
    <!-- responsive -->
    <v-card
    class="overflow-hidden"
    v-else
    fixed
    >
      <v-app-bar
      color="grey darken-4"
      dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </v-app-bar>
  
      <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      dark
      >
        <v-list
        nav
        dense
        >
          <v-list-item-group
          v-model="group"
          active-class="grey lighten-4--text text--accent-4"
          >
            <v-list-item link to="/dashboard" class="py-2">
              <v-list-item-icon>
                <v-icon>mdi-monitor-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title>داشبورد</v-list-item-title>
            </v-list-item>
  
            <v-list-item link to="/employeelist" class="py-2">
              <v-list-item-icon>
                <v-icon>mdi-account-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>لیست کارمندان</v-list-item-title>
            </v-list-item>
  
            <v-list-item link to="/customerList" class="py-2">
              <v-list-item-icon>
                <v-icon>mdi-bookmark-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>لیست مشتریان</v-list-item-title>
            </v-list-item>
  
            <v-list-item link to="/transactions" class="py-2">
              <v-list-item-icon>
                <v-icon>mdi-form-select</v-icon>
              </v-list-item-icon>
              <v-list-item-title>لیست تراکنش ها</v-list-item-title>
            </v-list-item>

            <v-list-item link to="/" class="py-2">
              <v-list-item-icon>
                <v-icon>mdi-credit-card-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>لیست شعبات</v-list-item-title>
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
  
          <v-list-item link @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>خروج</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
    onMounted() {
      this.$vuetify.rtl = true;
    },
  }
  </script>
  
  <style scoped>
  </style>