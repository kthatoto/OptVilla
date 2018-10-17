<template lang="pug">
.nav
  .nav__main
    h1
      router-link.nav__logo(to='/') Airbnbnb
    ul
      li
        router-link(to='/') ホーム
      li
        router-link(to='#' @click.native="showSearch") 検索
      li
        router-link(to='/hosting') ホストを始める
      li
        router-link(to='/login') ログイン
  Search(ref="search")
</template>

<script>
import Search from '@/components/organisms/Search'
export default {
  components: { Search },
  methods: {
    showSearch () {
      this.$refs.search.showModal()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.nav {
  $navHeight: 90px;
  width: 100%;
  height: $navHeight;
  background-color: white;
  &__logo {
    background-color: #2eabab;
    color: white;
    display: inline-block;
    height: 100%;
    width: 200px;
    text-align: center;
  }
  &__main {
    width: 900px;
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
        height: 100%;
        padding: $linkPadding 0;
        font-size: 0.7rem;
        margin: 0 25px;
        a {
          display: inline-block;
          height: 100%;
          &.router-link-exact-active {
            color: $pink;
            font-weight: bold;
            border-bottom: 1px solid $pink;
          }
        }
      }
    }
  }
}
</style>
