<template lang="pug">
.search
  Modal(ref="modal" width="450px" height="550px")
    .inner
      .place
        label 場所
        input(placeholder="どこでも")
      .date
        .checkin
          label チェックイン
          input(placeholder="yyyy/mm/dd")
        .arrow
          icon(name="arrow-right")
        .checkout
          label チェックアウト
          input(placeholder="yyyy/mm/dd")
      .count
        label 人数
        Select(:options="countOptions")
      .price
        label 値段
        Select(:options="priceOptions")
      .button(@click="incIndex") {{ searchButton.word.slice(0, searchButton.index) }}
</template>

<script>
import Modal from '@/components/organisms/Modal'
import Select from '@/components/atoms/Select'
export default {
  components: { Modal, Select },
  data () {
    return {
      countOptions: ['ゲスト1人', 'ゲスト2人', 'ゲスト3人'],
      priceOptions: [
        '一泊あたり ~¥1,000',
        'まあおてごろに ¥1,000~¥3,000',
        'なんだかかんだ ¥3,000~¥5,000',
        'そうはいっても ¥5,000~¥10,000',
        'もはやいさぎよく ¥10,000~'
      ],
      searchButton: {
        word: '検索しても何も起きないよ...',
        index: 2
      }
    }
  },
  methods: {
    showModal () {
      this.$refs.modal.showing = true
    },
    incIndex () {
      this.searchButton.index++
      if (this.searchButton.index > 20) {
        alert('おしすぎ')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$pink: #fe7f7f;
.search {
  label {
    display: block;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 3px;
  }
  .inner {
    padding: 40px 20px 0;
    > div {
      margin-bottom: 30px;
    }
  }
  .date {
    display: flex;
    $arrowWidth: 50px;
    .checkin {
      width: calc((100% - #{$arrowWidth}) / 2);
    }
    .checkout {
      width: calc((100% - #{$arrowWidth}) / 2);
    }
    .arrow {
      padding-top: 30px;
      width: $arrowWidth;
      text-align: center;
    }
  }
  .button {
    background-color: $pink;
    color: white;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    cursor: pointer;
    user-select: none;
  }
}
</style>
