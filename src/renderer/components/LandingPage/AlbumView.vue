<template lang="pug">
  el-row
    el-col(:span='4' v-for='index in 12' :key='0')
      el-card.card(:body-style="{ padding: '0px' }")
        img.image(src='../../assets/images/image1.png')
        div(style='padding:5px;')
          span Album Name
          el-button.button(type='default' icon='fa fa-ellipsis-v' plain)
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

  .card {
    margin: 8px;
  }

  .song-text {
    font-size: 14px;
    color: rgb(102, 96, 96);
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

