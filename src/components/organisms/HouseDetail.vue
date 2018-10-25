<template lang="pug">
.houseDetail
  h1 {{ house.title }}
  p.houseDetail__number
    | 許可・登録番号
    span M130002147
</template>

<script>
export default {
  props: ['house']
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.houseDetail {
  h1 {
    font-size: 28px;
    margin-bottom: 8px;
  }
  &__number {
    font-size: 14px;
    color: $gray;
    span {
      color: $pink;
      margin-left: 10px;
    }
  }
}
</style>
