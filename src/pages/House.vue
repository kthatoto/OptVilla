<template lang="pug">
.house
  Keyvisual.keyvisual
</template>

<script>
import Keyvisual from '@/components/molecules/Keyvisual'
export default {
  components: { Keyvisual },
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.house {
  .keyvisual {
    margin-bottom: 100px;
  }
}
</style>
