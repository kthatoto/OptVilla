<template lang="pug">
.request
  .progress
    div(:class="{'-current': progress === 'payment'}") 1. 支払い方法の選択
    div(:class="{'-current': progress === 'confirmation'}") 2. 宿泊内容の確認
    div(:class="{'-current': progress === 'complete'}") 3. 完了
  Payment.payment(v-show="progress === 'payment'")
  Confirmation.confirmation(v-show="progress === 'confirmation'")
  .complete(v-show="progress === 'complete'")
    .main
      h2 ご予約ありがとうございました
    .next(@click="close") 閉じる
</template>

<script>
import Payment from '@/components/organisms/request/Payment'
import Confirmation from '@/components/organisms/request/Confirmation'
export default {
  components: { Payment, Confirmation },
  data () {
    return {
      progress: 'payment'
    }
  },
  methods: {
    close () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.request {
  padding-top: 36px;
  width: $globalWidth;
  margin: 0 auto;
  .progress {
    margin-bottom: 36px;
    display: flex;
    font-size: 22px;
    > div {
      width: 33%;
      text-align: center;
      background-color: white;
      border-radius: 10px;
      padding: 10px;
      margin: 0 1px;
      &.-current {
        color: $pink;
      }
    }
  }
  .complete {
    .main {
      text-align: center;
      background-color: white;
      border-radius: 10px;
      padding: 180px 0;
      margin-bottom: 24px;
    }
  }
  .next {
    background-color: $pink;
    width: 25%;
    text-align: center;
    padding: 10px 0;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    float: right;
    &:hover {
      background-color: $thinPink;
    }
  }
}
</style>
