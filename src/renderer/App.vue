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

.dropdown-menu {
  background-color: #1b1d1c;
}

.dropdown-menu-item {
  font-size: 12px;
  color: #fafafa;

}
.card {
    margin: 10px;
    background-color: #1b1d1c;
  }
</style>
