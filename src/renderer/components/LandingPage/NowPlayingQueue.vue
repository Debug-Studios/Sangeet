<template lang="pug">
  el-menu(default-active="2" @open="handleOpen" @close="handleClose" :collapse="isCollapse")

</template>

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

