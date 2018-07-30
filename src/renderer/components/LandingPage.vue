<template lang="pug">
  el-container(direction="vertical")

    el-row
      el-col(:span="6")
        side-menu

      el-col(:span="16" :offset="1").el-main
        router-view

    el-footer
      now-playing-bottom

</template>

<script>
import NowPlayingBottom from "./LandingPage/NowPlayingBottom.vue";
import SideMenu from "./LandingPage/SideMenu.vue";

export default {
  name: "landing-page",
  components: { "now-playing-bottom": NowPlayingBottom, "side-menu": SideMenu },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-footer {
  padding: 0;
}
</style>

