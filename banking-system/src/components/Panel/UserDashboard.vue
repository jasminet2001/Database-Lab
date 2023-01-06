<template>
    <v-app style="background-color: #353B51;">
      <sidebar-navigation></sidebar-navigation>
      <div class="header">
        <h1 style="color:white;">داشبورد مدیریت</h1>
      </div>
      <div class="card">
        <v-card
        class="card-desktop"
        style="margin-bottom: 4em;"
        width="70vw"
        height="100%"
        elevation="4"
        raised
        rounded
        outlined
        >
          <v-card-text style="color:white;">
              <v-row>
                <v-col cols="6">
                  <v-row>
                    <h1>خوش آمدید مدیر گرامی</h1>
                  </v-row>
                  <v-row>
                    <h2>نام: الهام</h2>
                  </v-row>
                  <v-row>
                    <h2>نام خانوادگی: وزیری</h2>
                  </v-row>
                  <v-row>
                    <h2>منسب: مدیریت</h2>
                  </v-row>
                  <v-row>
                    <h2>آدرس ایمیل: elham@gmail.com</h2>
                  </v-row>
                  <v-row>

                  </v-row>
                </v-col>

                <v-col cols="6">
                  <v-img src="../../assets/undraw_experience_design_re_dmqq.svg"></v-img>
                </v-col>
                <v-col></v-col>

              </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-app>
</template>
  
  <script>
  import SidebarNavigation from "./SidebarNavigation.vue";
  export default {
    components: { SidebarNavigation },
    onMounted() {
      this.$vuetify.rtl = true;
    },
    data () {
      return {
        name:'',
        lastname: '',
        email: '',
        id: '',
      }
    },
}
  </script>
  
  <style scoped>
  .header{
    width: 22%;
    margin: auto;
    margin-top: 4em;
    margin-right: 25%;
  }
  .card{
    height: 75%;
    width: 85%;
    margin: auto;
    margin-right: 20%;
  }
.title{
  margin: 2em;
  margin-right: 17em;
  }
  .col *{
    margin: .5em;
  }
  .btn{
    margin-top: 2em;
  }
  .btn-mobile{
    margin-top: 1em;
  }
  .title-res{
    text-align: center;
    margin: 2em;
  }
  .card-res{
    margin: 1em;
    padding: 1em;
    border: 2px dashed #000080;
  }
  .card-desktop{
    border: 2px dashed #3838f8;
    /* background: #6565f8; */
    padding: 10em;
  }
  .row-res{
  width: 100%;
  text-align: center;
  vertical-align: middle;
  }
  .upload-title-res{
    margin-left: 4em;
  }
  </style>