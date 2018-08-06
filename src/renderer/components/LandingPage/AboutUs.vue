<template lang="pug">
  header 
    h1 Welcome
    h3 We're Debug Studios!
    h4 A team of developers developing projects for fun. Consisting, but not limited to :
    el-row(padding-top="10px")
      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center; " )
          h3.developer__name Prajjwal Dimri
          h5.developer__role Dev
          el-container(direction="horizontal")
            h5.contact__link: a(href="#"): img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px")
            h5.contact__link: a(href="#"): img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px")
            
      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3.developer__name Ayush Bahuguna
            h5.developer__role Dev
            el-container(direction="horizontal")
              h5.contact__link: a(href="#"): img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px")
              h5.contact__link: a(href="#"): img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px")
    el-row
      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3.developer__name Sachin Singh Rawat
            h5.developer__role UI
            el-container(direction="horizontal")
              h5.contact__link: a(href="#"): img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px")
              h5.contact__link: a(href="#"): img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px")

      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3.developer__name Naman Sehgal
            h5.developer__role UI
            el-container(direction="horizontal")
              h5.contact__link: a(href="#"): img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px")
              h5.contact__link: a(href="#"): img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px")
</template>
<style scoped>
.developer__name{
  margin-bottom: 0px;
}
.developer__role{
  margin-top: 0px;
  margin-bottom: 0px;
}
.contact__link{
  margin-top: 4px;
  padding: 2px
}
  
</style>
