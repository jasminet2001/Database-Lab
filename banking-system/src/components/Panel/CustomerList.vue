<template >
    <v-app style="background-color: #353B51;">
        <sidebar-navigation-vue></sidebar-navigation-vue>
        <div class="header">
            <h1 style="color:white;">لیست مشتریان</h1>
        </div>
        <div class="card" >
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
                class="elevation-1 table"
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
            {text: 'نام',align: 'start',value: 'c_national_id__first_name',},
            { text: 'نام خانوادگی', value: 'c_national_id__last_name' },
            { text: 'کد ملی', value: 'c_national_id' , filterable: true,},
        ],
    }),

    methods:{
        async ShowCustomers() {
            this.users = [];
            var that = this;
            await axios.get('http://127.0.0.1:8000/all_customers/')
                .then( (response) => {
                    const data = response.data;
                    that.users = data;
                    console.log(that.users);
                });
            console.log(that.users)
            .catch( error=>{
                console.log(error);
            });
        },
    },

    beforeCreate(){
        this.users = [];
        var that = this;
        axios.get('http://127.0.0.1:8000/all_customers/')
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
    .table{
        color:black;
    }
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