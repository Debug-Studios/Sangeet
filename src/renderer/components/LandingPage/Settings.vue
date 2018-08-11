<template lang="pug">
  .settings-view
    h1 Settings
    el-row.scan-paths
      el-col(:span="17")
        el-tree(:data="scanPaths" :props="scanPathsProps" :check-on-click-node="true" show-checkbox ref="tree")
      el-col(:span="6" :offset="1").control-buttons
        el-button(type="primary" icon="fas fa-plus" @click="addFolder")  Add Music Folders
        el-button(type="info" icon="fas fa-minus" @click="removeFolder")  Remove selected folders
</template>

<script>

export default {
  data() {
    return {
      scanPaths: [],
      scanPathsProps: {
        label: 'label',
      },
      checkedNodes: [],
    };
  },
  mounted() {
    this.updateScanPaths();
  },
  methods: {
    addFolder() {
      let paths = this.$electron.remote.dialog.showOpenDialog({ properties: ['openDirectory', 'multiSelections'] });
      if (this.$settings.has('scanPaths')) {
        const previousPaths = this.$settings.get('scanPaths');
        previousPaths.push(...paths);
        paths = new Set(previousPaths);
      }
      this.$settings.set('scanPaths', paths);
      this.updateScanPaths();
    },
    removeFolder() {
      const checkedNodes = this.$refs.tree.getCheckedNodes();
      let previousPaths = this.$settings.get('scanPaths');
      checkedNodes.forEach((node) => {
        previousPaths = previousPaths.filter(path => path !== node.label);
      });
      this.$settings.set('scanPaths', previousPaths);
      this.updateScanPaths();
    },
    updateScanPaths() {
      const paths = this.$settings.get('scanPaths');
      this.scanPaths = [];
      paths.forEach((path) => {
        this.scanPaths.push({ label: path });
      });
    },
  },
};
</script>

<style lang="scss">
.settings-view {
  padding: 1rem;

  .el-tree {
    background: transparent;
  }

  .el-tree-node:focus > .el-tree-node__content {
    background: transparent;
  }

  .el-tree-node__content:hover {
    background: transparent;
  }

  .scan-paths {
    border: 0.5px solid grey;
    padding: 1rem;

    .control-buttons {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > * {
        margin-bottom: 1rem;
        margin-left: 0;
      }
    }
  }
}
</style>


