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
html {
  font-size: 16px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
body {
  background-color: #efefef;
}
a {
  color: inherit;
}
</style>
