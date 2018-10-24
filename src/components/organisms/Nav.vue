<template lang="pug">
.nav
  .nav__main
    h1
      router-link.nav__logo(to='/')
        img(:src="require('@/assets/OptVilla_mainrogo.svg')")
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
    color: #2eabab;
    display: inline-block;
    height: 100%;
    text-align: center;
    $logoHeight: 50px;
    padding: calc((#{$navHeight} - #{$logoHeight}) / 2 - 3px) 0;
    img {
      height: 50px;
    }
  }
  &__main {
    width: $globalWidth;
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
        font-size: 12px;
        margin-left: 50px;
        a {
          display: inline-block;
          height: 100%;
          &:hover {
            color: $hoverBlack;
          }
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
