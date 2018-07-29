<template lang="pug">
  el-container(direction="vertical")

    el-container
      el-aside(width="200px")
        side-menu

      el-main(style="min-height: 400px;")
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
