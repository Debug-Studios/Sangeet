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

.transparent-button {
  background: none !important;
  border: none !important;

  &:hover,
  &:active,
  &:focus {
    background: none !important;
    border: none !important;
  }
}

.center-container {
  justify-content: center;
}
</style>
