<template>
  <div id="app">
    <landingPage></landingPage>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
export default {
  name: "sangeet",
  components: {'landingPage': LandingPage}
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
