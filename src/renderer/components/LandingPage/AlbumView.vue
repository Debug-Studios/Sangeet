<template lang="pug">
  el-row
    el-col(:span='4' v-for='(album, index) in albums ')
      el-container.card
        img.image(:src='albumCoverImage[index]')
        div(style='padding:1rem;color:#fafafa;')
          router-link.plain-text(:to= "'/songs/' + album.name" )
            span {{album.name}}
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
export default {
  data() {
    return {
      fetchAlbums: [],
      albums: [],
      albumSongsCount: [],
      currentSong: null,
      totalAlbumSongs: 0,
      albumCoverImage: [],
    };
  },

  mounted() {
    for (let i = 0; i < this.db.length; i += 1) {
      this.fetchAlbums[i] = { name: this.db[i].album, coverArt: this.db[i].coverArt };
    }

    // Finding total number of Songs in Album.
    for (let i = 0; i < this.fetchAlbums.length; i += 1) {
      if (this.fetchAlbums[i].name !== this.currentSong) {
        if (this.totalAlbumSongs > 0) {
          this.albumSongsCount.push(this.totalAlbumSongs);
        }
        this.currentSong = this.fetchAlbums[i].name;
        this.totalAlbumSongs = 1;
      } else {
        this.totalAlbumSongs += 1;
      }
    }
    if (this.totalAlbumSongs > 0) {
      this.albumSongsCount.push(this.totalAlbumSongs);
    }


    this.fetchAlbums.forEach((album) => {
      let albumAlreadyShown = false;
      let i = this.albums.length;
      while (i--) { // eslint-disable-line
        if (this.albums[i].name === album.name) {
          albumAlreadyShown = true;
          break;
        }
      }
      if (!albumAlreadyShown) {
        this.albums.push(album);
      }
    });
    for (let i = 0; i < this.albums.length; i += 1) {
      if (this.albums[i].coverArt != null) {
        this.albumCoverImage[i] = this.albums[i].coverArt;
      } else {
        this.albumCoverImage.push('https://caurusacademy.org/wp-content/uploads/Music.jpg');
      }
    }
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

