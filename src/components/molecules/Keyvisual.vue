<template lang="pug">
.keyvisual
  img(:src="house.image_url")
  slot
</template>

<script>
export default {
  props: ['house']
}
</script>

<style lang="scss" scoped>
.keyvisual {
  width: 100%;
  height: 500px;
  position: relative;
  img {
    width: 100%;
  }
}
</style>
