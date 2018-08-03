<template lang="pug">
  el-row.now-playing-bottom
    el-col(:span="6" style="border-right: 1px solid #2f3130")
      el-container.center-container(style="align-items:center")
        img.image(src="https://s.mxmcdn.net/images-storage/albums4/9/3/4/8/6/3/38368439_800_800.jpg" height="64px" width="64px")
        el-container(direction="vertical").song-container
          h4.song-name {{songName}}
          h5.song-artist {{songArtist}}

          audio(:src="currentSongUri")#audio-player


    el-col(:span="18")
      el-row.seekbar-row
        vueSlideBar(v-model="seekbarProgress" :min="0" :max="100" :showTooltip="false" style="padding-top: 0 !important" :processStyle="{ backgroundColor: '#30a9de' }")

      el-row.media-controls
        el-col(:span="4")
          h5.time-text {{playedTime}} / {{totalTime}}

        el-col(:span="14" style="display:flex")
          el-col(:span="6").el-container.right-container
            el-button(icon="fas fa-random" plain circle).transparent-button
          el-col(:span="12").el-container.center-container
            el-button(icon="fas fa-backward" plain circle).transparent-button
            el-button(icon="fas fa-play-circle fa-3x" plain circle type="primary").transparent-button
            el-button(icon="fas fa-forward" plain circle).transparent-button
          el-col(:span="6").el-container.left-container
            el-button(icon="fas fa-stop" plain circle).transparent-button

        el-col(:span="6" style="align-items: center").el-container.center-container
          el-button(icon="fas fa-volume-up" plain circle).transparent-button
          el-col(:span="24")
            vueSlideBar(v-model="volume" :min="0" :max="100" :showTooltip="false" style="padding-top: 0 !important" :processStyle="{ backgroundColor: '#30a9de' }")


</template>

<script>
import VueSlideBar from 'vue-slide-bar';
import { setTimeout } from 'timers';

export default {
  components:{'vueSlideBar': VueSlideBar},
  data(){
    return {
      songName: 'Never Going Back',
      songArtist: 'The Score',
      totalTime: 0,
      playedTime: 0,
      volume: 80,
      seekbarProgress: 10,
      currentSongUri: '',
      isPaused: false
    }
  },
  mounted() {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.addEventListener('loadeddata', () => {
      if(audioPlayer.readyState >= 2){
        audioPlayer.play();
      }
    });

    this.$db.find({}, (err, docs) => {
      this.$dataUriCreator(docs[0].path, (content) => {
        this.currentSongUri = content;
      });
      this.totalTime = Math.round(docs[0].duration);
    });
  },
  methods: {
    refreshUI: function() {
      const audioPlayer = document.getElementById('audio-player');
      this.playedTime = Math.ceil(audioPlayer.currentTime);
      audioPlayer.volume = this.volume / 100;
    }
  },
  watch : {
    volume : function () {
      this.refreshUI();
    }
  }
}
</script>


<style lang="scss" scoped>
.now-playing-bottom {
  background-color: #1b1d1c;
  border: none;
  display: flex;
  align-items: center;
  max-height: 9.99vh;
}

.seekbar-row {
  padding: 0;
}

.media-controls {
  display: flex;
  padding: 0rem 1rem;
}

.song-container {
  margin: 0 1rem;

  & > * {
    margin: 0.3rem 0;
  }

  .song-name {
    font-weight: 400;
    margin-bottom: 0;
  }

  .song-artist {
    font-weight: 200;
  }
}
</style>
