<template>
  <v-app style="background-color: #353B51;">
      <sidebar-navigation-vue></sidebar-navigation-vue>
      <div class="header">
          <h1 style="color:white;">لیست تراکنش ها</h1>
      </div>
      <div class="card">
          <v-card width="70%">
            <v-card-title>
              <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="جست و جو"
              single-line
              hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="users"
            :search="search"
            >
            </v-data-table>
      </v-card>
      </div>
  </v-app>
</template>

<script>
import SidebarNavigationVue from './SidebarNavigation.vue';
import axios from 'axios';

export default {
  components:{
    SidebarNavigationVue
  },
  data: () => ({
    users: [],
    search: '',
    headers: [
      { text: 'بانک میدا', value: 'source_bank' },
      { text: 'بانک مقصد', value: 'destination_bank' },
      { text: 'شماره تراکنش', value: 'destination_deposit_num' , filterable: true,},
      { text: 'مبلغ', value: 'amount' },
    ],
  }),
  onMounted() {
    this.$vuetify.rtl = true;
  },
  methods:{
    ShowCustomers(){
    }
  },

  beforeCreate(){
    this.users = [];
    var that = this;
    axios.get('http://127.0.0.1:8000/all_transactions/')
    .then( (response) => {
      const data = response.data;
      that.users = data;
      console.log(that.users);
    });
    console.log(that.users)
    .catch( error=>{
      console.log(error);
    });
  }
}
</script>

<style scoped>
  .card{
    width: 90%;
    margin: auto;
    margin-top: 1em;
    margin-right: 25%;
  }
  .header{
    width: 22%;
    margin: auto;
    margin-top: 4em;
    margin-right: 25%;
  }
  /* change background */
  html{
    background: rgb(132,108,241);
    background: linear-gradient(90deg, rgba(132,108,241,1) 0%, rgba(225,205,244,1) 68%);
  }
</style>