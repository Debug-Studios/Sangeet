<template lang="pug">
  div
    el-row
      el-button Button
      el-button(type="primary") Button 2
      el-button(type="success")
      el-button(type="info")
      el-button(type="warning")
      el-button(type="danger" icon="el-icon-search" circle)

</template>

<script>
export default {
  name: "landing-page",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>
