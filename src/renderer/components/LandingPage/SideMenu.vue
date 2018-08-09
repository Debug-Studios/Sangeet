<template lang="pug">
  el-menu.el-menu-vertical(default-active ='1' background-color='#1b1d1c' text-color='#fff' active-text-color='#fc5f45').side-menu
    h1.app-title SANGEET
    h3.app-subtitle By Debug Studios
    router-link.plain-text(to='/nowPlaying')
      el-menu-item(index='1')
        i.item-margin.fa.fa-play
        span Now Playing
    router-link.plain-text(to='/songsView')
      el-menu-item(index='2')
        i.item-margin.fa.fa-music
        span Songs
    router-link.plain-text(to='/artistView')
      el-menu-item(index='3')
        i.item-margin.fa.fa-users
        span Artist
    router-link.plain-text(to='/albumView')
      el-menu-item(index='4')
        i.item-margin.fa.fa-images
        span Albums
    router-link.plain-text(to='/playlistView')
      el-menu-item(index='5')
        i.item-margin.fa.fa-list-alt
        span Playlists
    router-link.plain-text(to='/settings')
      el-menu-item.plain(index='6')
        i.item-margin.fa.fa-sliders-h
        span Settings
    router-link.plain-text(to='/about')
      el-menu-item(index='7')
        i.item-margin.fa.fa-info-circle
        span About Us

        // TODO: Commented as the methods refrenced are not defined. Fix it first.
    // el-upload.upload-demo(drag action='' :on-preview='handlePreview' :on-remove='handleRemove' :file-list="fileList" multiple)
    //   i.el-icon-upload
    //   .el-upload__text Drag and Drop Next Songs

</template>

<style lang="scss">
.app-title {
  font-weight: 200;
  text-align: center;
  letter-spacing: 0.6rem;
  margin-bottom: 0;
  font-size: 2rem;
}

.app-subtitle {
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0.1rem;
  margin-top: 0.5rem;
}

.el-menu-vertical {
  min-height: 88vh;
  border: 0;
}

.is-active {
  border-left: 10px solid;
}

.item-margin {
  margin-right: 10px;
}

.upload-demo .el-upload.el-upload--text {
  width: 100% !important;
}

.upload-demo .el-upload.el-upload--text div.el-upload-dragger {
  margin-top: 1rem;
  width: 100% !important;
  background-color: #2f3130;
}
</style>

