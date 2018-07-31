<template lang="pug">
  el-menu.el-menu-vertical-demo(default-active ='1' background-color='#1b1d1c' text-color='#fff' active-text-color='#30a9de' style='min-height:90vh;')
    router-link.plain(to='/nowPlaying')
      el-menu-item(index='1')
        i.item-margin.fa.fa-play
        span Now Playing
    router-link.plain(to='/songsView')
      el-menu-item(index='2')
        i.item-margin.fa.fa-music
        span Songs
    router-link.plain(to='/artistView')
      el-menu-item(index='3')
        i.item-margin.fa.fa-users
        span Artist
    router-link.plain(to='/albumView')
      el-menu-item(index='4')
        i.item-margin.fa.fa-images
        span Albums
    router-link.plain(to='/playlistView')
      el-menu-item(index='5')
        i.item-margin.fa.fa-list-alt
        span Playlists
    router-link.plain(to='/settings')
      el-menu-item.plain(index='6')
        i.item-margin.fa.fa-sliders-h
        span Settings
    router-link.plain(to='/about')
      el-menu-item(index='7')
        i.item-margin.fa.fa-info-circle
        span About Us
    el-upload.upload-demo(drag action='' :on-preview='handlePreview' :on-remove='handleRemove' :file-list="fileList" multiple)
      i.el-icon-upload
      .el-upload__text Drag and Drop Next Songs
      
    

</template>

<style lang="scss">

.is-active{
  border-left: 10px solid;
}

.plain{
  text-decoration: none;
  color: #fff;
}

.item-margin {
  margin-right: 10px;
}

.upload-demo .el-upload.el-upload--text{
  width: 100% !important;
   
}

.upload-demo .el-upload.el-upload--text div.el-upload-dragger{
  margin-top: 1rem;
  width: 100% !important;
  background-color: #2f3130;
   
}



</style>

