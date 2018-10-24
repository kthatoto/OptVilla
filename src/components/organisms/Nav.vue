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
        router-link(to='/search') 検索
      li
        router-link(to='#') ホストを始める
      li.login
        img(:src="require('@/assets/profile.png')")
</template>

<script>
export default {
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
        &.login {
          padding: 20px 0;
          height: $navHeight;
          img {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            box-shadow: 0 0 3px 0;
          }
        }
      }
    }
  }
}
</style>
