<template lang="pug">
.reservation
  .price
    span ¥{{ house.price.toLocaleString() }} / 1泊
  .date
    .checkin
      label チェックイン
      input(placeholder="yyyy/mm/dd")
    .arrow
      icon(name="arrow-right")
    .checkout
      label チェックアウト
      input(placeholder="yyyy/mm/dd")
  .people
    label 人数
    .people__input
      .people__numbers(:class="{'-expanding': people.expanding}" @click="toggle")
        span.people__number 大人 {{ people.adult }}人
        span.people__number(v-show="people.child > 0") 小人 {{ people.child }}人
        span.people__number(v-show="people.infant > 0") 乳幼児 {{ people.infant }}人
        icon.icon(name="chevron-down")
      .people__console(v-show="people.expanding")
        .console__row
          .console__label 大人
          .console
            icon.icon(name="minus" :class="{'-invalid': people.adult <= 1}"
              @click.native="people.adult = Math.max(1, people.adult - 1)")
            span {{ people.adult }}人
            icon.icon(name="plus" @click.native="people.adult += 1")
        .console__row
          .console__label
            span 小人
            span.note ※年齢2才〜12才
          .console
            icon.icon(name="minus" :class="{'-invalid': people.child <= 0}"
              @click.native="people.child = Math.max(0, people.child - 1)")
            span {{ people.child }}人
            icon.icon(name="plus" @click.native="people.child += 1")
        .console__row
          .console__label 乳幼児
          .console
            icon.icon(name="minus" :class="{'-invalid': people.infant <= 0}"
              @click.native="people.infant = Math.max(0, people.infant - 1)")
            span {{ people.infant }}人
            icon.icon(name="plus" @click.native="people.infant += 1")
  .button 予約リクエスト
</template>

<script>
import Select from '@/components/atoms/Select'
export default {
  components: { Select },
  props: ['house'],
  data () {
    return {
      people: {
        adult: 1,
        child: 0,
        infant: 0,
        expanding: false
      }
    }
  },
  methods: {
    toggle () {
      this.people.expanding = !this.people.expanding
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.reservation {
  position: sticky;
  top: 30px;
  margin-top: 0;
  background-color: white;
  border-radius: 15px;
  padding: 24px;
  label {
    display: block;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .price {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid $gray;
  }
  .date {
    display: flex;
    $arrowWidth: 50px;
    margin-bottom: 24px;
    .checkin {
      width: calc((100% - #{$arrowWidth}) / 2);
    }
    .checkout {
      width: calc((100% - #{$arrowWidth}) / 2);
    }
    .arrow {
      padding-top: 40px;
      width: $arrowWidth;
      text-align: center;
    }
  }
  .people {
    &__input {
      padding: 10px;
      border-radius: 5px;
      width: 100%;
      border: 1px solid #ced4da;
      color: #495057;
      position: relative;
    }
    &__numbers {
      cursor: pointer;
      > .icon {
        position: absolute;
        top: 13px;
        right: 15px;
      }
      &.-expanding {
        border-bottom: 1px solid $gray;
        padding-bottom: 12px;
        margin-bottom: 12px;
      }
    }
    &__number {
      user-select: none;
      font-size: 14px;
      margin-right: 15px;
    }
    &__console {
      overflow: hidden;
      user-select: none;
    }
    .console {
      float: right;
      .icon {
        width: 18px;
        height: 18px;
        border: 1px solid $blue;
        color: $blue;
        border-radius: 50%;
        padding: 2px;
        cursor: pointer;
        &.-invalid {
          color: #2dadac36;
          border: 1px solid #2dadac36;
          cursor: not-allowed;
        }
      }
      > span {
        width: 70px;
        display: inline-block;
        text-align: center;
      }
      &__row {
        width: 100%;
        overflow: hidden;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      &__label {
        font-weight: bold;
        font-size: 14px;
        float: left;
        .note {
          color: $gray;
          font-weight: normal;
          margin-left: 10px;
        }
      }
    }
  }
  .button {
    margin-top: 24px;
    background-color: $pink;
    color: white;
    text-align: center;
    border-radius: 5px;
    padding: 10px 0;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: $thinPink;
    }
  }
}
</style>
