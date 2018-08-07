<template lang="pug">
  el-row
    el-col(:span='5' v-for='(artist, index) in artists' :key='0')
      el-container.card
        img.image(src='https://s.mxmcdn.net/images-storage/albums4/9/3/4/8/6/3/38368439_800_800.jpg')
        div(style='padding:1rem;color:#fafafa;')
          router-link.plain-text(to= "/songsView")
            span {{artist}}
          el-dropdown.button(trigger='click')
            span.el-dropdown-link
              i.fa.fa-ellipsis-v 
            el-dropdown-menu.dropdown-menu(slot='dropdown')
              el-dropdown-item.dropdown-menu-item Explore
              el-dropdown-item.dropdown-menu-item Remove
          div.bottom.clearfix
            span {{songsCount[index]}} Songs
              
            
</template>

<script>
import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      fetchArtist: [],
      artists: [],
      totalSongs: 0,
      songsCount: [],
      currentSong: null
    };
  },

  mounted() {
      for(let i=0;i< this.db.length;i++){
        this.fetchArtist[i] = this.db[i].artist;
      }
      this.fetchArtist.sort();

      // Finding total number of Songs in Album.
      for(let i= 0; i< this.fetchArtist.length; i++){
          if(this.fetchArtist[i] != this.currentSong){
            if(this.totalSongs > 0){
              this.songsCount.push(this.totalSongs);
            }
            this.currentSong = this.fetchArtist[i];
            this.totalSongs = 1;
          }else{
            this.totalSongs++;
          }
        }
        if(this.totalSongs > 0){
          this.songsCount.push(this.totalSongs);
        }
      let artistSet = new Set(this.fetchArtist);
      artistSet.forEach(artistName => {
       if(!(artistName in this.artists)){
         this.artists.push(artistName);
       }
      });
  },
  props: {
    db: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>

  .bottom {
    margin: 15px 0px 5px 0px; 
    line-height: 10px;
    font-size: 12px;
  }

  .button {
    padding: 1px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    box-shadow: 5px 5px 15px  #1b1d1c; 
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }


</style>

