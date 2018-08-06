<template lang="pug">
  el-menu(default-active="2" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#1b1d1c").queue
    el-menu-item(index="1")
      i.el-icon-menu
      span(slot="title") Song 1

    el-menu-item(index="2")
      i.el-icon-menu
      span(slot="title") Song 2

    el-menu-item(index="3")
      i.el-icon-menu
      span(slot="title") Song 3

</template>

<style lang="scss" scoped>
.queue {
  height: 90vh;
}
</style>


<script>
export default {
  data () {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen (key,keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {}
  }
}
</script>

