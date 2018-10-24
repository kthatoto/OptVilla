<template lang="pug">
.searchBar
  .searchBar__main
    .button 場所
    .button 人数
    .button カスタマイズ
    .button 料金
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.searchBar {
  background-color: white;
  &__main {
    width: $globalWidth;
    height: 50px;
    margin: 0 auto;
  }
  .button {
    display: inline-block;
    background-color: $blue;
    color: white;
    padding: 8px 24px;
    border-radius: 5px;
    margin: 10px 0;
    margin-right: 18px;
    line-height: 14px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background-color: $hoverBlue;
    }
  }
}
</style>
