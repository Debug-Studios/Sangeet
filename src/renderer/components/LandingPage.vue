<template lang="pug">
  div
    section.section
      .container
        h1.title
        | Hello World
</template>

<script>

  export default {
    name: 'landing-page',
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>

