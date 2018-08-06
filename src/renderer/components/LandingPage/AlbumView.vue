<template lang="pug">
  el-row
    el-col(:span='4' v-for='(albumname, index) in albums' :key='0')
      el-card.card(:body-style="{ padding: '0px' }")
        img.image(src='https://s.mxmcdn.net/images-storage/albums4/9/3/4/8/6/3/38368439_800_800.jpg')
        div(style='padding:5px;color:#fafafa;')
          span.song-text Album
          el-dropdown.button(trigger='click')
            span.el-dropdown-link
              i.fa.fa-ellipsis-v 
            el-dropdown-menu.dropdown-menu(slot='dropdown')
              el-dropdown-item.dropdown-menu-item Add
              el-dropdown-item.dropdown-menu-item Explore
              el-dropdown-item.dropdown-menu-item Remove
          div.bottom.clearfix
            span {{albumname}}
            
</template>

<script>
import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      fetchAlbums: [],
      albums: []
    };
  },

  mounted() {
      for(let index=0;index< this.db.length;index++){
        this.fetchAlbums[index] = this.db[index].album;
      }
      let albumSet = new Set(this.fetchAlbums);
      albumSet.forEach(albumName => {
       if(!(albumName in this.albums)){
         this.albums.push(albumName);
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

  .song-text {
    font-size: 14px;
    color: #fafafa;
  }
  
  .bottom {
    margin: 15px 0px 5px 0px; 
    line-height: 10px;
  }

  .button {
    padding: 5px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
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

