<template>
    <v-app style="background-color: #353B51;">
        <sidebar-navigation-vue></sidebar-navigation-vue>
        <div class="header">
          <h1 style="color:white;">لیست شعبات</h1>
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
  import axios from 'axios';
  import SidebarNavigationVue from './SidebarNavigation.vue';

  export default {
      components:{
        SidebarNavigationVue
      },
      data: () => ({
        users: [],
        search: '',
        headers: [
          {text: 'نام شعبه', align: 'start', value: 'name', filterable: true},
          { text: 'رئیس شعبه', value: 'chief_name' },
          { text: 'آدرس شعبه', value: 'address' },
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
          axios.get('http://127.0.0.1:8000/all_branches/')
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
</style>