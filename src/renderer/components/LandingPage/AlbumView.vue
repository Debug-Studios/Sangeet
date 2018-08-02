<template lang="pug">
  el-row
    el-col(:span='4' v-for='index in 12' :key='0')
      el-card.card(:body-style="{ padding: '0px' }")
        img.image(src='https://s.mxmcdn.net/images-storage/albums4/9/3/4/8/6/3/38368439_800_800.jpg')
        div(style='padding:5px;color:#fafafa;')
          span Album Name
          el-dropdown.button(trigger='click')
            span.el-dropdown-link
              i.fa.fa-ellipsis-v 
            el-dropdown-menu.dropdown-menu(slot='dropdown')
              el-dropdown-item.dropdown-menu-item Add
              el-dropdown-item.dropdown-menu-item Explore
              el-dropdown-item.dropdown-menu-item Remove
          div.bottom.clearfix
            p.song-text Total Songs
</template>

<script>
export default {
  data() {
    return {
      currentData : new Data()
    };
  }
}
</script>

<style scoped>

  .song-text {
    font-size: 14px;
    color: #fafafa;
  }
  
  .bottom {
    margin-top: 13px;
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

