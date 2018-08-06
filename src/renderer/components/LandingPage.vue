<template lang="pug">
  el-container(direction="vertical")

    el-row.row-bg(type="flex" justify="end")
      el-col(:span="4")
        side-menu

      el-col(:span="15" style="max-height: 90vh").el-main
        router-view

      el-col(:span="4")
        queue

    el-footer
      now-playing-bottom

</template>

<script>
import NowPlayingBottom from "./LandingPage/NowPlayingBottom.vue";
import SideMenu from "./LandingPage/SideMenu.vue";
import NowPlayingQueue from './LandingPage/NowPlayingQueue.vue';

export default {
  name: "landing-page",
  components: { "now-playing-bottom": NowPlayingBottom,
    "side-menu": SideMenu,
    "queue": NowPlayingQueue },
  data() {
    return {
      visible: false
    };
  },
};
</script>

<style lang="scss" scoped>
.el-footer {
  padding: 0;
}
</style>

