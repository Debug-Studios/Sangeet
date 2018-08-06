<template lang="pug">
  el-menu(default-active="1" @open="handleOpen" @close="handleClose" background-color="#1b1d1c").queue
    el-menu-item(v-for="(item, index) in queue" index="index")
      img(:src="item.picture").el-icon-menu.el-picture-menu
      span(slot="title") {{item.name}}

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
    this.currentSong = queue[0];
    GlobalBus.$on('prepend-queue', (song) => {
      this.queue.unshift(song);
      this.currentSong = queue[0];
    });

    GlobalBus.$on('append-queue', (song) => {
      this.queue.push(song);
      this.currentSong = queue[0];
    });
  },
  watch: {
    queue: function () {
      if(this.currentSong !== queue[0]) {
        GlobalBus.$emit('play-now', queue[0]);
      }
    }
  }
}
</script>

