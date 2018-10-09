<template lang="pug">
.modal(v-if="showing")
  .modal__background(@click="hideModal")
  .modal__content(:style="{ height, width }")
    icon.modal__close(name="times" @click.native="hideModal")
    slot
</template>

<script>
export default {
  props: ['height', 'width'],
  data () {
    return {
      showing: false
    }
  },
  methods: {
    hideModal () {
      const href = window.location.href
      window.location.href = href.slice(0, href.length - 1)
      this.showing = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &__background {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: white;
    width: 300px;
    height: 300px;
    z-index: 2;
    padding: 10px;
    border-radius: 5px;
  }
  &__close {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
