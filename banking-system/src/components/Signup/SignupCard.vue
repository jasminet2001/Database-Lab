<template>
    <v-card class="pa-4" elevation="8" outlined height="75%" shaped justify="center" align="center" width="100%">
      <v-form ref="form" color="transparent" v-model="valid" lazy-validation>
        <v-card-title v-if="!isMobile">
          <img src="https://svgshare.com/i/g44.svg" style="height:10%; margin: 0 auto">
        </v-card-title>
        <v-card-text>
          <v-row class="my-4 mx-2" justify="center" align="center" no-gutters>
            <v-col cols="12">
              <v-row>
                <p class="mt-3" style="margin: 0 auto;">حساب کاربری دارید؟</p>
                <a @click="Login()" class="mt-3"
                style="color:black; text-decoration:none; font-style: italic; margin: 0 auto">
                وارد شوید</a>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="mt-8 mx-2" justify="center" align="center">
            <v-text-field label="نام"
            autofocus
            v-model="name">
            </v-text-field>
          </v-row>
          <v-row class="mt-8 mx-2" justify="center" align="center">
            <v-text-field label="نام خانوادگی"
            autofocus
            v-model="lastname">
            </v-text-field>
          </v-row>
          <v-row class="mt-5 mx-2" justify="center" align="center">
            <v-text-field v-model="email" :rules="emailRules" label="ایمیل" required style="direction: ltr !important;">
            </v-text-field>
          </v-row>
          <v-row class="mt-5 mx-2" justify="center" align="center">
            <!-- :append-icon="show1 ? ImdiEye : ImdiEyeOff" -->
            <v-text-field
            v-model="password1"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="رمز عبور"
            hint="حداقل ۸ کارکتر بنویسید."
            counter
            @click:append="show1 = !show1"
            style="direction: ltr !important;"
            ></v-text-field>
          </v-row>
          <v-row class="mt-5 mx-2" justify="center" align="center">
            <!-- :append-icon="show2 ? ImdiEye : ImdiEyeOff" -->
            <v-text-field
            v-model="password2"   
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="تکرار رمز عبور"
            hint="حداقل ۸ کارکتر بنویسید"
            counter
            @click:append="show2 = !show2"
            style="direction: ltr !important;"
            ></v-text-field>
          </v-row>
          <v-row class="mt-16 mx-2" align="center" justify="center" no-gutters>
            <v-col cols="12">
              <v-btn class="btn white--text"
              color="#000824" width="100%"
              @click="addUsers()">
                ثبت نام
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>
    </v-card>
  </template>
  
  <script>
  // import {mdiEye, mdiEyeOff} from "@mdi/js";
  import axios from 'axios';
  export default {
    props: {
      isMobile: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        // ImdiEye: mdiEye,
        // ImdiEyeOff: mdiEyeOff,
        show1: false,
        show2: false,
        password1: '',
        password2: '',
        email:'',
        name:'',
        rules: {
          required: password1 => !!password1 || 'رمز عبور لازم است!',
          min: v => v.length >= 8 || 'حداقل ۸ کارکتر بنویسید.',
        },
        //what to do for pass2?
        // rules: {
        //   required: password2 => !!password2 || 'رمز عبور لازم است!',
        //   min: v => v.length >= 8 || 'حداقل ۸ کارکتر بنویسید.',
        // },
        emailRules: [
          v => !!v || 'ایمیل را وارد کنید',
          v => /.+@.+\..+/.test(v) || 'ایمیل صحیح وارد نمایید.',
        ],
      }
    },
    methods:{
      addUsers(){
        axios.get("",
        {
          // first_name = this.name;
          // last_name = this.lastname
          // username = this.email;
          // password1 = this.password1;
          // password2 = this.password2;
        }
        );
      }
    }
  }
</script>
  
<style scoped>
  v-app{
  background-color: #000824c8;
  }
  .link{
  color: #999696;
  text-decoration: none;
  }
</style>