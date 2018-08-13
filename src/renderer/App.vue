<template>
  <div id="app">
    <landingPage></landingPage>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
export default {
  name: 'sangeet',
  components: { landingPage: LandingPage },
  mounted() {
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

.dropdown-menu {
  background-color: #21272c;
}

.dropdown-menu-item {
  font-size: 12px;
  color: #fafafa;
}
.card {
  margin: 10px;
  background-color: #21272c;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.3s;
  display: block;
  padding: 5px;
}

.plain-text {
  text-decoration: none;
  color: #fff;
}

* {
  /* Turn on custom 8px wide scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(228, 228, 228, 0);
    -webkit-border-radius: 100px;
  }
  /* hover effect for both scrollbar area, and scrollbar 'thumb' */
  ::-webkit-scrollbar:hover {
    background-color: rgba(228, 228, 228, 0.09);
  }

  /* The scrollbar 'thumb' ...that marque oval shape in a scrollbar */
  ::-webkit-scrollbar-thumb:vertical {
    background: rgba(228, 228, 228, 0.4);
    -webkit-border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(
      252,
      95,
      69,
      0.91
    ); /* Some darker color when you click it */
    -webkit-border-radius: 100px;
  }
}

.song-name {
  font-size: 14px;
  font-weight: 600;
}

.song-artist {
  font-size: 14px;
  font-weight: 200;
}

.song-row {
  background-color: darken(#21272c, 1);
  margin-top: 2px;
}
.notification {
  background-color: #1b1d1c;
  border: 0px;
  border-radius: 0px;
}

.notification .el-notification__group h2 {
  color: #fff;
}

.notification .el-notification__icon {
  color: #fc5f45;
}
</style>
