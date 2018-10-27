<template lang="pug">
.payment
  .main
    .inner
      .row
        h3 支払い方法選択
        .paymentType
          div.-selected クレジットカード
          div コンビニ支払い
          div 銀行支払い
          div ネットバンク振込
      .row
        h3
          span.left カード番号
          span.right カード番号とは
        input(placeholder="4242 4242 4242 4242")
      .row
        h3
          span.left 有効期限
          span.right 有効期限とは
        span.split 月
        span.split 年
        input.split.-left(placeholder="10")
        input.split.-right(placeholder="18")
      .row
        h3
          span.left セキュリティーコード
          span.right セキュリティーコードとは
        input.split(placeholder="123")
  .next(@click="$parent.progress = 'confirmation'") 次へ
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.payment {
  .main {
    background-color: white;
    border-radius: 10px;
    padding: 20px 0;
    margin-bottom: 24px;
    .inner {
      width: 50%;
      margin: 0 auto;
    }
    .row {
      margin-bottom: 30px;
      overflow: hidden;
      .split {
        float: left;
        width: 50%;
        &.-left {
          border-right: none;
          border-radius: 5px 0 0 5px;
        }
        &.-right {
          border-radius: 0 5px 5px 0;
        }
      }
      span.split {
        font-size: 14px;
      }
    }
    h3 {
      font-weight: normal;
      font-size: 16px;
      margin-bottom: 12px;
      overflow: hidden;
      .left {
        float: left;
      }
      .right {
        float: right;
        color: $blue;
        font-size: smaller;
      }
    }
    .paymentType {
      display: flex;
      border: 1px solid $gray;
      border-radius: 8px;
      > div {
        width: 25%;
        padding: 10px 10px;
        font-size: 14px;
        text-align: center;
        &:not(:last-child) {
          border-right: 1px solid $gray;
        }
        &.-selected {
          background-color: $pink;
          color: white;
          border-radius: 8px 0 0 8px;
        }
      }
    }
  }
  .next {
    background-color: $pink;
    width: 25%;
    float: right;
    text-align: center;
    padding: 10px 0;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: $thinPink;
    }
  }
}
</style>
