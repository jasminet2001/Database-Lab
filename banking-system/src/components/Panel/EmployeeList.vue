<template>
  <v-app style="background-color: #353B51;">
      <sidebar-navigation-vue></sidebar-navigation-vue>
      <div class="header">
          <h1>لیست کارمندان</h1>
      </div>
      <div class="card">
          <v-card width="70%">
              <v-card-title>
                  <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                  ></v-text-field>
              </v-card-title>
              <v-data-table
              :headers="headers"
              :items="cutomers"
              :search="search"
              >
              </v-data-table>
      </v-card>
      </div>
  </v-app>
</template>

<script>
// import axios from 'axios';
import SidebarNavigationVue from './SidebarNavigation.vue';
export default {
    components:{
      SidebarNavigationVue
    },
    data: () => ({
      search: '',
      headers: [
      {
          text: 'First Name',
          align: 'start',
          value: 'name',
      },
      { text: 'Last Name', value: 'lastname' },
      { text: 'National ID', value: 'id' , filterable: true,},
      // { text: 'Carbs (g)', value: 'carbs' },
      // { text: 'Protein (g)', value: 'protein' },
      // { text: 'Iron (%)', value: 'iron' },
      ],

      cutomers: [
        {
          name: 'ali',
          lastname: 'ehsani',
          id: 124,
        },
        {
          name: 'ali',
          lastname: 'tavakkoli',
          id: 123,
        },
        {
          name: 'ehsan',
          lastname: 'khosdoost',
          id: 121,
        },
      ],
    }),
    onMounted() {
      this.$vuetify.rtl = true;
    },
    methods:{
      ShowCustomers(){
          // for (let i = 0; i < 5; i++) {
          //     i = i+2;
          // }
      }
    },
}
</script>

<style scoped>
  .card{
    width: 70%;
    margin: auto;
    margin-top: 10em;
  }
  .header{
    width: 22%;
    margin: auto;
    margin-top: 5em;
  }
</style>