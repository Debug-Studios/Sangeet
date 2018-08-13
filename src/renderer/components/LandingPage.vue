<template lang="pug">
  el-container(direction="vertical")

    el-row.row-bg(type="flex" justify="end")
      el-col(:span="4")
        side-menu

      el-col(:span="16" style="max-height: 88vh;padding:5px;").el-main
        transition(name="fade" mode="out-in")
          router-view(:db="db" style="max-height: 88vh")

      el-col(:span="4" )
        queue
    el-footer
      now-playing-bottom

</template>

<script>
import NowPlayingBottom from './LandingPage/NowPlayingBottom.vue';
import SideMenu from './LandingPage/SideMenu.vue';
import NowPlayingQueue from './LandingPage/NowPlayingQueue.vue';

export default {
  name: 'landing-page',
  components: { 'now-playing-bottom': NowPlayingBottom,
    'side-menu': SideMenu,
    queue: NowPlayingQueue },
  data() {
    return {
      visible: false,
      db: [],
    };
  },
  mounted() {
    this.loadDatabase();
    this.$electron.ipcRenderer.send('refresh-database');
    this.$electron.ipcRenderer.on('show-notification-loading', (event, arg) => {
      this.$message({
        title: 'Info',
        message: arg,
        customClass: 'notification',
      });
    });
    this.$electron.ipcRenderer.on('show-notification-success', (event, arg) => {
      this.$message({
        title: 'Success',
        message: arg,
        customClass: 'notification',
        type: 'success',
      });
    });
  },

  methods: {
    loadDatabase() {
      this.$db.find({}, (err, docs) => {
        if (err) {
          this.$message({
            title: 'Error',
            message: 'Failed to load songs, Please restart the app!',
            type: 'error',
            customClass: 'notification',
          });
        }


        // Retrieve the cover art for all entries
        docs.forEach((song, index) => {
          this.$uriCreator.generateImageUri(song.path, (image) => {
            Object.defineProperty(this.db[index], 'coverArt', {
              value: image,
              writable: false,
            });
          });
        });

        this.db = docs;
      });
    },
  },
};
</script>

<style lang="scss">
.el-footer {
  padding: 0;
}

// Transitions
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

