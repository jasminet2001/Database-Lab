<template >
    <v-app style="background-color: #353B51;">
        <sidebar-navigation-vue></sidebar-navigation-vue>
        <div class="header">
            <h1 style="color:white;">لیست مشتریان</h1>
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
                class="elevation-1"
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
            {text: 'نام',align: 'start',value: 'name',},
            { text: 'نام خانوادگی', value: 'lastname' },
            { text: 'کد ملی', value: 'id' , filterable: true,},
        ],

        // cutomers: [
        //     {
        //         name: 'ali',
        //         lastname: 'ehsani',
        //         id: 124,
        //     },
        //     {
        //         name: 'ali',
        //         lastname: 'tavakkoli',
        //         id: 123,
        //     },
        //     {
        //         name: 'ehsan',
        //         lastname: 'khosdoost',
        //         id: 121,
        //     },
        // ],
    }),

    methods:{
        onMounted() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then( response => {
                this.users = response.data.users;
                });
                // .catch( error=>{
                //     console.log(error);
                // });
        },
    },
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