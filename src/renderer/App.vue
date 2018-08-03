<template>
  <div id="app">
    <landingPage></landingPage>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
export default {
  name: "sangeet",
  components: {'landingPage': LandingPage},
  mounted() {
    console.log(this.$db);
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
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

.left-container {
  justify-content: flex-start;
}

.right-container {
  justify-content: flex-end;
}
</style>
