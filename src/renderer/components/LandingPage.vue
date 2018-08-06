<template lang="pug">
  el-container(direction="vertical")

    el-row.row-bg(type="flex" justify="end")
      el-col(:span="4")
        side-menu

      el-col(:span="16" style="max-height: 90vh").el-main
        router-view(:db="db")

      el-col(:span="4" )
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
      visible: false,
      db: []
    };
  },
  async mounted () {
    this.$db.find({}, (err, docs) => {
      if(err) console.error('Error loading song database. Please restart!');


      // Retrieve the cover art for all entries
      docs.forEach((song, index) => {
        this.$uriCreator.generateImageUri(song.path, (image) => {
          Object.defineProperty(this.db[index], 'coverArt', {
            value: image,
            writable: false
          })
        });
      });

      this.db = docs;
    });
  }
};
</script>

<style lang="scss" scoped>
.el-footer {
  padding: 0;
}
</style>

