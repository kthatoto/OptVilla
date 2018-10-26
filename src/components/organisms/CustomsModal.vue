<template lang="pug">
.customsModal(v-show="showing" @click="showing = false")
  .modal
</template>

<script>
export default {
  props: [],
  data () {
    return {
      showing: false
    }
  },
  watch: {
    showing () {
      if (this.showing) {
        document.body.classList.add('-modaling')
      } else {
        document.body.classList.remove('-modaling')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.customsModal {
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
}
</style>
