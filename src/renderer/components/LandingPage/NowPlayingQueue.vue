<template lang="pug">
  el-menu(default-active="1" background-color="#1b1d1c").queue
    el-menu-item(v-for="(song, index) in queue" index="index")
      img(:src="song.picture").el-icon-menu.el-picture-menu
      span(slot="title") {{song.title}}

</template>

<style lang="scss" scoped>
.queue {
  height: 90vh;

  .el-icon-menu.el-picture-menu {
    height: 2rem;
    width: 2rem;
  }
}
</style>


<script>
import GlobalBus from './GlobalEventBus';

export default {
  data () {
    return {
      queue: [],
      currentSong: {}
    };
  },
  mounted() {
    this.currentSong = this.queue[0];
    GlobalBus.$on('prepend-queue', (song) => {
      this.queue.unshift(song);
    });

    GlobalBus.$on('append-queue', (song) => {
      this.queue.push(song);
    });

    GlobalBus.$on('play-next-song', () => {
      this.queue.shift();
    });
  },
  watch: {
    queue: function () {
      if(this.currentSong !== this.queue[0] && this.queue[0] !== null) {
        GlobalBus.$emit('play-now', this.queue[0]);
        this.currentSong = this.queue[0];
      }
    }
  }
}
</script>

