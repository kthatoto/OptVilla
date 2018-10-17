<template lang="pug">
.houseSubCard
  h2 {{ house.title }}
  p.pink カスタマイズ
  p.options
    span(v-for="option in house.options" :key="option") {{ option }},
  p.price １泊
    span(v-if="house.maxStayerNumber")  (最大{{ house.maxStayerNumber }}人)
    span  / ¥{{ house.pricePerStay }}
</template>

<script>
export default {
  props: ['house']
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.houseSubCard {
  background-color: white;
  padding: 24px;
  h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }
  .pink {
    color: $pink;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .options {
    color: $hoverBlack;
    font-size: 14px;
    margin-bottom: 16px;
  }
  .price {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
}
</style>
