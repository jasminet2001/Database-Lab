<template>
    <v-app>
      <sidebar-navigation></sidebar-navigation>
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

      }
    },
}
  </script>
  
  <style scoped>
  </style>