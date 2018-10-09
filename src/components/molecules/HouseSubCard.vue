<template lang="pug">
.houseSubCard
  h3 {{ house.option }}
  h2 {{ house.title }}
  p.price 一泊あたり
    span ¥{{ house.pricePerStay }}
</template>

<script>
export default {
  props: ['house']
}
</script>

<style lang="scss" scoped>
.houseSubCard {
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  h2 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 0.4rem;
    font-weight: lighter;
    color: #fe7f7f;
    margin-bottom: 10px;
  }
  .price {
    font-size: 0.8rem;
    span {
      font-weight: bold;
    }
  }
}
</style>
