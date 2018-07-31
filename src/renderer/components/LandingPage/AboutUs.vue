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
          h5.contact__link: img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="20px" width="20px") 

      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3.developer__name Ayush Bahuguna
            h5.developer__role Dev
            h5.contact__link: a(class="tel" href="#") Telegram 
              a(class="git" href="#") GitHub

    el-row
      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3.developer__name Sachin Singh Rawat
            h5.developer__role UI
            h5.contact__link: a(class="tel" href="#") Telegram 
              a(class="git" href="#") GitHub

      el-col(:span="10" style="box-sizing: content-box;")
        el-container.center-container(style="align-items:center")
          img.image(src="http://assets.blabbermouth.net.s3.amazonaws.com/media/amityafflictionheartbreak.jpg" height="90px" width="90px")
        el-container(direction="vertical" style="align-items:center")
            h3.developer__name Naman Sehgal
            h5.developer__role UI
            h5.contact__link: a(class="tel" href="#") Telegram 
              a(class="git" href="#") GitHub

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
  margin-top: 0px;
}
.tel{
  text-decoration: none;
  color: #0088cc;
}
.git{
  text-decoration: none;
  color: #6e5494;
}
  
</style>
