<template lang="pug">
  div
    el-button(@click="visible=true") Button
    el-dialog(:visible.sync="visible" title="Hello World")
      p Try Element
</template>

<script>

  export default {
    name: 'landing-page',
    /* eslint-disable */
    data() {
      return {
        visible: false
      }
    },
    /* eslint-enable */
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>

