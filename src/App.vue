<template lang="pug">
#app
  Nav
  router-view
</template>

<script>
import Nav from '@/components/organisms/Nav'
export default {
  name: 'App',
  components: { Nav }
}
</script>

<style lang="scss">
@import '@/styles/resources';
html {
  font-family: '游ゴシック体', 'Yu Gothic', YuGothic, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  color: $black;
}
body {
  background-color: #f4f4f4;
}
a {
  color: inherit;
}
input {
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #ced4da;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  color: #495057;
  background-color: #fff;
  appearance: none;
}
#app {
  padding-bottom: 100px;
}
</style>
