<template lang="pug">
.houseCard
  h3 {{ house.option }}
  h2 {{ house.title }}
</template>

<script>
export default {
  props: ['house']
}
</script>

<style lang="scss" scoped>
.houseCard {
  width: 400px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  h2 {
    font-size: 1.1rem;
  }
  h3 {
    font-size: 0.4rem;
    font-weight: lighter;
    color: #fe7f7f;
  }
}
</style>
