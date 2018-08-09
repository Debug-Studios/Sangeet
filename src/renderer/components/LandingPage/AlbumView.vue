<template lang="pug">
  el-row
    el-col(:span='5' v-for='(album, index) in albums' :key='0')
      el-container.card
        img.image(src='https://s.mxmcdn.net/images-storage/albums4/9/3/4/8/6/3/38368439_800_800.jpg')
        div(style='padding:1rem;color:#fafafa;')
          router-link.plain-text(to= "/songsView" )
            span {{album}}
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
// import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      fetchAlbums: [],
      albums: [],
      songsCount: [],
      currentSong: null,
      totalSongs: 0,
    };
  },

  mounted() {
    for (let i = 0; i < this.db.length; i += 1) {
      this.fetchAlbums[i] = this.db[i].album;
      // this.albumArt[index] = this.db[index].coverArt;
    }
    this.fetchAlbums.sort();

    // Finding total number of Songs in Album.
    for (let i = 0; i < this.fetchAlbums.length; i += 1) {
      if (this.fetchAlbums[i] !== this.currentSong) {
        if (this.totalSongs > 0) {
          this.songsCount.push(this.totalSongs);
        }
        this.currentSong = this.fetchAlbums[i];
        this.totalSongs = 1;
      } else {
        this.totalSongs += 1;
      }
    }
    if (this.totalSongs > 0) {
      this.songsCount.push(this.totalSongs);
    }
    const albumSet = new Set(this.fetchAlbums);
    albumSet.forEach((albumName) => {
      if (!(albumName in this.albums)) {
        this.albums.push(albumName);
      }
    });
  },
  props: {
    db: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.bottom {
  margin: 15px 0px 5px 0px;
  line-height: 10px;
  font-size: 12px;
}

.button {
  padding: 5px;
  float: right;
}

.image {
  width: 100%;
  display: block;
  box-shadow: 5px 5px 15px #1b1d1c;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

