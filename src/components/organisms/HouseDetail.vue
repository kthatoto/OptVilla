<template lang="pug">
.houseDetail
  h1 {{ house.title }}
  p.houseDetail__number
    | 許可・登録番号
    span M130002147
  p.houseDetail__explanation(v-text="house.body" style="white-space: pre;")
  h3 予約可能状況
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
  p {
    font-size: 14px;
  }
  &__number {
    color: $gray;
    margin-bottom: 18px;
    span {
      color: $pink;
      margin-left: 10px;
    }
  }
  &__explanation {
    padding-bottom: 18px;
    line-height: 1.8;
    border-bottom: 1px solid $gray;
    margin-bottom: 48px;
  }
}
</style>
