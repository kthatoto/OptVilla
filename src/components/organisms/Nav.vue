<template lang="pug">
.nav
  .nav__main
    h1 Airbnbnb
    ul
      li
        router-link(to='/') ホーム
      li
        router-link(to='/') 検索する
      li
        router-link(to='/') ホストを始める
      li
        router-link(to='/') ログイン
</template>

<script>
</script>

<style lang="scss" scoped>
.nav {
  $navHeight: 75px;
  width: 100%;
  height: $navHeight;
  background-color: white;
  &__main {
    width: 800px;
    height: 100%;
    margin: 0 auto;
    h1 {
      height: $navHeight;
      line-height: $navHeight;
      vertical-align: middle;
      font-size: 1.3rem;
      float: left;
    }
    ul {
      float: right;
      li {
        $linkPadding: 25px;
        float: left;
        line-height: calc(#{$navHeight} - #{$linkPadding} * 2);
        padding: $linkPadding 0;
        font-size: 0.7rem;
        margin: 0 10px;
      }
    }
  }
}
</style>
