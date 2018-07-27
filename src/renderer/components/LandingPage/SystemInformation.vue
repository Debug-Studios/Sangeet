<template lang="pug">
  div
    .title Information
    .items
      .item
        .name Path:
        .value {{ path }}
      .item
        .name Route Name:
        .value {{ name }}
      .item
        .name Vue.js:
        .value {{ vue }}
      .item
        .name Electron:
        .value {{ electron }}
      .item
        .name Node:
        .value {{ node }}
      .item
        .name Platform:
        .value {{ platform }}
</template>

<script>
  export default {
    data() {
      return {
        electron: process.versions.electron,
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version,
      };
    },
  };
</script>

