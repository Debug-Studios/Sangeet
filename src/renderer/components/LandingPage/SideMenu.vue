<template lang="pug">
  el-menu.el-menu-vertical-demo(default-active ='1' background-color='#1b1d1c' text-color='#fff' active-text-color='#ffd04b' style='min-height:90vh;')
    router-link.plain(to='/nowPlaying')
      el-menu-item(index='1')
        i.el-icon-menu
        span Now Playing
    router-link.plain(to='/songsView')
      el-menu-item(index='2')
        i.el-icon-setting
        span Songs
    router-link.plain(to='/artistView')
      el-menu-item(index='3')
        i.el-icon-document
        span Artist
    router-link.plain(to='/albumView')
      el-menu-item(index='4')
        i.el-icon-menu
        span Albums
    router-link.plain(to='/playlistView')
      el-menu-item(index='5')
        i.el-icon-menu
        span Playlists
    router-link.plain(to='/settings')
      el-menu-item.plain(index='6')
        i.el-icon-setting
        span Settings
    router-link.plain(to='/about')
      el-menu-item(index='7')
        i.el-icon-menu
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

