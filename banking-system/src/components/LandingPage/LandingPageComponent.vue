<template>
    <v-app style="background-color: white">
        <app-bar />
        <costumers-slide-group />
        <register-company />
        <landing-footer/>
    </v-app>
</template>

<script>
import AppBar from './AppBar.vue';
import LandingFooter from "./LandingFooter.vue";
import CostumersSlideGroup from "./CustomerCard.vue";
import RegisterCompany from "./RegisterCompany.vue";
export default {
  name: "LandingPageComponent",
  onMounted() {
    this.$vuetify.rtl = true
  },
  components: {
    RegisterCompany,
    CostumersSlideGroup,
    AppBar,
    LandingFooter,
  },
}
</script>

<style scoped>
</style>