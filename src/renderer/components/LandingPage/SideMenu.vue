<template lang="pug">
  el-col(:span='24')
    el-menu.el-menu-vertical-demo(default-active ='2' background-color='#545c64' text-color='#fff' active-text-color='#ffd04b' style='min-height:90vh;')
      el-menu-item(index='1')
        i.el-icon-menu
        span Now Playing
      el-menu-item(index='2')
        i.el-icon-setting
        span Songs
      el-menu-item(index='3')
        i.el-icon-document
        span Artist
      el-menu-item(index='4')
        i.el-icon-menu
        span Albums
      el-menu-item(index='5')
        i.el-icon-menu
        span Playlists
      el-menu-item(index='6')
        i.el-icon-setting
        span Settings
      el-menu-item(index='7')
        i.el-icon-menu
        a(href='/about')
          span About Us

        
</template>

<style lang="scss" scoped>
// Only for UI Creation purpose
div {
  border: 1px solid white;
}
</style>

