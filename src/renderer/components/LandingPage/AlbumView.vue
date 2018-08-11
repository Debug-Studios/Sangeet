<template lang="pug">
  el-row
    el-col(:span='5' v-for='(album, index) in albums')
      el-container.card
        img.image(src='https://s.mxmcdn.net/images-storage/albums4/9/3/4/8/6/3/38368439_800_800.jpg')
        div(style='padding:1rem;color:#fafafa;')
          router-link.plain-text(:to= "'/songs/' + album" )
            span {{album}}
          el-dropdown.button(trigger='click')
            span.el-dropdown-link
              i.fa.fa-ellipsis-v 
            el-dropdown-menu.dropdown-menu(slot='dropdown')
              el-dropdown-item.dropdown-menu-item Explore
              el-dropdown-item.dropdown-menu-item Remove
          div.bottom.clearfix
            span {{albumSongsCount[index]}} Songs
</template>

<script>
// import GlobalBus from './GlobalEventBus';
export default {
  data() {
    return {
      fetchAlbums: [],
      albums: [],
      albumSongsCount: [],
      currentSong: null,
      totalAlbumSongs: 0,
      albumCovers: [],
    };
  },

  mounted() {
    for (let i = 0; i < this.db.length; i += 1) {
      this.fetchAlbums[i] = this.db[i].album;
    }
    this.fetchAlbums.sort();

    // Finding total number of Songs in Album.
    for (let i = 0; i < this.fetchAlbums.length; i += 1) {
      if (this.fetchAlbums[i] !== this.currentSong) {
        if (this.totalAlbumSongs > 0) {
          this.albumSongsCount.push(this.totalAlbumSongs);
        }
        this.currentSong = this.fetchAlbums[i];
        this.totalAlbumSongs = 1;
      } else {
        this.totalAlbumSongs += 1;
      }
    }
    if (this.totalAlbumSongs > 0) {
      this.albumSongsCount.push(this.totalAlbumSongs);
    }
    const albumSet = new Set(this.fetchAlbums);
    albumSet.forEach((albumName) => {
      if (!(albumName in this.albums)) {
        this.albums.push(albumName);
      }
    });
    console.log(albumSet);
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

