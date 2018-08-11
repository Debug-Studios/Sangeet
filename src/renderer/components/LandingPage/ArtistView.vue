<template lang="pug">
  el-row
    el-col(:span='5' v-for='(artist,index) in artists' :key='artist')
      el-container.card
        img.image(src='https://s.mxmcdn.net/images-storage/albums4/9/3/4/8/6/3/38368439_800_800.jpg')
        div(style='padding:1rem;color:#fafafa;')
          router-link.plain-text(:to="'/songs/' + artist")
            span {{artist}}
          el-dropdown.button(trigger='click')
            span.el-dropdown-link
              i.fa.fa-ellipsis-v
            el-dropdown-menu.dropdown-menu(slot='dropdown')
              el-dropdown-item.dropdown-menu-item Explore
              el-dropdown-item.dropdown-menu-item Remove
          div.bottom.clearfix
            span {{artistSongsCount[index]}} Songs


</template>

<script>
export default {
  data() {
    return {
      fetchArtist: [],
      artists: [],
      totalArtistSongs: 0,
      artistSongsCount: [],
      currentSong: null,
    };
  },

  mounted() {
    for (let i = 0; i < this.db.length; i += 1) {
      this.fetchArtist[i] = this.db[i].artist;
    }
    this.fetchArtist.sort();

    // Finding total number of Songs of Artist.
    for (let i = 0; i < this.fetchArtist.length; i += 1) {
      if (this.fetchArtist[i] !== this.currentSong) {
        if (this.totalArtistSongs > 0) {
          this.artistSongsCount.push(this.totalArtistSongs);
        }
        this.currentSong = this.fetchArtist[i];
        this.totalArtistSongs = 1;
      } else {
        this.totalArtistSongs += 1;
      }
    }
    if (this.totalArtistSongs > 0) {
      this.artistSongsCount.push(this.totalArtistSongs);
    }
    const artistSet = new Set(this.fetchArtist);
    artistSet.forEach((artistName) => {
      if (!(artistName in this.artists)) {
        this.artists.push(artistName);
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
  padding: 1px;
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

