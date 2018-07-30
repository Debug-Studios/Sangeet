<template lang="pug">
  el-menu.el-menu-vertical-demo(default-active ='1' background-color='#1b1d1c' text-color='#fff' active-text-color='#ffd04b' style='min-height:90vh;')
    el-menu-item(index='1')
      i.el-icon-menu
      router-link.plain(to='/nowPlaying')
        span Now Playing
    el-menu-item(index='2')
      i.el-icon-setting
      router-link.plain(to='/songsView')
        span Songs
    el-menu-item(index='3')
      i.el-icon-document
      router-link.plain(to='/artistView')
        span Artist
    el-menu-item(index='4')
      i.el-icon-menu
      router-link.plain(to='/albumView')
        span Albums
    el-menu-item(index='5')
      i.el-icon-menu
      router-link.plain(to='/playlistView')
        span Playlists
    el-menu-item.plain(index='6')
      i.el-icon-setting
      router-link.plain(to='/settings')
        span Settings
    el-menu-item(index='7')
      i.el-icon-menu
      router-link.plain(to='/about')
        span About Us


</template>

<style lang="scss" scoped>

.is-active{
  border-left: 10px solid;
}

.plain{
  text-decoration: none;
  color: #fff;
}


</style>

