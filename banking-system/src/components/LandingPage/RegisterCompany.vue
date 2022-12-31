<template>
    <v-container class="main-div" fluid>
      <v-row class="mb-3">
        <v-col>
          <h1 style="font-weight: bolder; font-size: 2em; color: white;
            text-shadow: 2px 2px 2px black;
          ">هنوز در بانک ما حساب افتتاح نکرده اید؟</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <button class="btn btn-mobile" v-if="this.$vuetify.breakpoint.smAndDown">
            افتتاح حساب
          </button>
          <button class="btn" v-else>
            افتتاح حساب
          </button>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<style scoped>
  .main-div {
    background-image: url("../../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg") !important;
    background-size: cover;
    height: 90vh;
    padding: 10%;
    color: white;
    text-align: center;
  }
  .btn {
    margin: 4%;
    margin-top: 10%;
    --color: white;
    padding: 0.8em 1.7em;
    width: 32%;
    background-color: #ffeb3b;
    border-radius: 3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
    font-weight: 400;
    font-size: 17px;
    font-family: inherit;
    text-transform: uppercase;
    color: navy;
    z-index: 1;
  }
  .btn::before, .btn::after {
   content: '';
   display: block;
   width: 50px;
   height: 50px;
   transform: translate(-50%, -50%);
   position: absolute;
   border-radius: 50%;
   z-index: -1;
   background-color: var(--color);
   transition: 1s ease;
  }
  .btn::before {
   top: -1em;
   left: -1em;
  }
  .btn::after {
   left: calc(100% + 1em);
   top: calc(100% + 1em);
  }
  .btn:hover::before, .btn:hover::after {
   height: 410px;
   width: 510px;
  }
  .btn:hover {
   color: rgb(10, 25, 30);
  }
  .btn:active {
   filter: brightness(.8);
  }
  .btn-mobile{
    padding: .5em;
    margin-top: 10em;
  }
  </style>