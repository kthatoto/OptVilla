<template lang="pug">
.reservation
  .price
    span ¥{{ house.price.toLocaleString() }} / 1泊
  .date
    .checkin
      label チェックイン
      div(@click="scrollToCalendar")
        input(placeholder="yyyy/mm/dd" :value="formatDate(selectedDate.start)" disabled)
    .arrow
      icon(name="arrow-right")
    .checkout
      label チェックアウト
      div(@click="scrollToCalendar")
        input(placeholder="yyyy/mm/dd" :value="formatDate(selectedDate.end)" disabled)
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
  .customs
    .label
      label フードオプション
      span(@click="$refs.modal.showing = true")
        icon.icon(name="plus")
        span 追加
    customs-modal(ref="modal" :customs="customs")
    .custom(v-for="custom in customs.filter(c => c.selected)") {{ custom.name }}
  .summary
    .row
      span.left ¥{{ house.price.toLocaleString() }} × {{ dateCount() }}泊
      span.right ¥{{ totalBasePrice().toLocaleString() }}
    .row(v-for="custom in customs.filter(c => c.selected)")
      span.left ¥{{ custom.price.toLocaleString() }}({{ custom.name }}) × {{ people.adult + people.child }}人
      span.right ¥{{ (custom.price * (people.adult + people.child)).toLocaleString() }}
  .total
    span.left 計
    span.right ¥{{ total().toLocaleString() }}
  .button(:class="{'-disabled': dateCount() <= 0}" @click="request") 予約リクエスト
</template>

<script>
import CustomsModal from '@/components/organisms/CustomsModal'
export default {
  components: { CustomsModal },
  props: ['house', 'selectedDate'],
  data () {
    return {
      people: {
        adult: 1,
        child: 0,
        infant: 0,
        expanding: false
      },
      customs: [
        { name: '中華料理', slug: 'chinese', image: 'Chinese.png', price: 4000 },
        { name: '海鮮料理', slug: 'fish', image: 'Fish.png', price: 4000 },
        { name: 'フランス料理', slug: 'french', image: 'French.png', price: 4000 },
        { name: 'イタリア料理', slug: 'italian', image: 'Italian.png', price: 4000 },
        { name: '日本料理', slug: 'jpanese', image: 'Jpanese.png', price: 4000 },
        { name: 'パーティー', slug: 'party', image: 'Party.png', price: 3000 },
        { name: '豪華ディナー', slug: 'dinner', image: 'dinner.png', price: 3000 },
        { name: '懐石料理', slug: 'kaiseki', image: 'kaiseki.png', price: 3000 },
        { name: 'ステーキ', slug: 'steak', image: 'steak.png', price: 3000 },
        { name: 'すき焼き', slug: 'sukiyaki', image: 'sukiyaki.png', price: 3000 }
      ]
    }
  },
  created () {
    this.customs.forEach(custom => {
      custom.selected = false
    })
  },
  methods: {
    toggle () {
      this.people.expanding = !this.people.expanding
    },
    scrollToCalendar () {
      this.$SmoothScroll(document.getElementById('calendars'), 800, () => {
        this.$parent.flashCalendarDates()
      })
    },
    formatDate (date) {
      if (!date || date.getFullYear() === 1970) {
        return null
      }
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    select (i) {
      this.customs[i].selected = !this.customs[i].selected
      this.$refs.modal.update(this.customs)
      this.$forceUpdate()
    },
    dateCount () {
      if (this.selectedDate.start && this.selectedDate.end) {
        return 1 + (this.selectedDate.end - this.selectedDate.start) / 86400000
      }
      return 0
    },
    totalBasePrice () {
      const dateCount = this.dateCount()
      return this.house.price * dateCount
    },
    total () {
      let sum = 0
      const peopleCount = this.people.adult + this.people.child
      sum += this.totalBasePrice()
      this.customs.filter(c => c.selected).forEach(custom => {
        sum += custom.price * peopleCount
      })
      return sum
    },
    request () {
      if (this.dateCount() <= 0) {
        return
      }
      this.$router.push('/request')
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
    .checkin, .checkout {
      width: calc((100% - #{$arrowWidth}) / 2);
      input {
        cursor: pointer;
      }
    }
    .arrow {
      padding-top: 40px;
      width: $arrowWidth;
      text-align: center;
    }
  }
  .people {
    margin-bottom: 24px;
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
  .customs {
    overflow: hidden;
    padding-bottom: 30px;
    border-bottom: 1px solid $gray;
    margin-bottom: 16px;
    .label {
      overflow: hidden;
      margin-bottom: 12px;
    }
    label {
      float: left;
    }
    span {
      float: right;
      font-size: 14px;
      color: $blue;
      cursor: pointer;
      > span {
        vertical-align: middle;
      }
    }
    .icon {
      width: 18px;
      height: 18px;
      border: 1px solid $blue;
      color: $blue;
      border-radius: 50%;
      padding: 2px;
      margin-right: 10px;
      vertical-align: text-bottom;
    }
    .custom {
      width: 100%;
      font-size: 14px;
      margin-bottom: 4px;
    }
  }
  .summary {
    font-size: 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid $gray;
    margin-bottom: 12px;
    .row {
      overflow: hidden;
      margin-bottom: 12px;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
  }
  .total {
    margin-bottom: 12px;
    overflow: hidden;
    font-weight: bold;
    .left {
      float: left;
    }
    .right {
      float: right;
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
    &.-disabled {
      background-color: $gray;
      cursor: not-allowed;
    }
  }
}
</style>
