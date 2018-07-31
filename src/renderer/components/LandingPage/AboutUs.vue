<template lang="pug">
  header 
    h1 About Us
    h3 Debug Studios
    h5 A team of developers developing projects for fun.
    el-row(padding-top="10px")
      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center; " )
          h3.developer__name Prajjwal Dimri
          h5.developer__role Dev

      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3 Ayush Bahuguna
            h5 Dev

    el-row
      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3 Sachin Singh Rawat
            h5 UI

      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3 Naman Sehgal
            h5 UI

</template>
<style scoped>

.developer__name{
  margin-bottom: 0px;
}

.developer__role{
  margin-top: 0px;
}
  

</style>
