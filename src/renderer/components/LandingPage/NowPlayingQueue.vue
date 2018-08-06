<template lang="pug">
  el-menu(default-active="-1" background-color="#1b1d1c").queue
    el-menu-item(v-for="(song, index) in queue" index="index" @click.capture="queueItemClick(index)")
      img(:src="song.coverArt").el-icon-menu.el-picture-menu
      span(slot="title") {{song.title}}

</template>

<style lang="scss" scoped>
.queue {
  height: 90vh;

  .el-icon-menu.el-picture-menu {
    height: 2rem;
    width: 2rem;
  }

  .el-menu-item.is-active {
    border-left: 0;
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
    let index = 0;
    GlobalBus.$on('prepend-queue', async (song) => {
      // Using unshift method on the array leads to duplicate keys error as Vue doesn't update
      // the array indexes in its memory. So shift the whole queue one by one
      index = this.queue.unshift(song);

    });

    GlobalBus.$on('append-queue', (song) => {
      index = this.queue.push(song);
    });

    GlobalBus.$on('play-next-song', () => {
      this.queue.shift();
    });

  },
  methods: {
    // Plays the clicked item in the queue
    queueItemClick (queueIndex) {
      // Removes the song from the array.
      const song = this.queue.splice(queueIndex, 1)[0];
      GlobalBus.$emit('prepend-queue', song);
    }
  },
  watch: {
    queue: function () {
      // If the currently playing song is not at the top of the queue
      // then play the song on top of the queue. (Useful for prepend)
      if(this.currentSong !== this.queue[0]) {
        GlobalBus.$emit('play-now', this.queue[0]);
        this.currentSong = this.queue[0];
      }
    }
  }
}
</script>

