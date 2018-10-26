<template lang="pug">
.customsModal(v-show="showing")
  .modal(@click.self="showing = false")
    .content
      h3 フードオプション
      .options
        .option(v-for="(option, index) in selfCustoms" :key="option.slug")
          div(:class="{'-selected': option.selected}" @click="$parent.select(index)")
            img(:src="require('@/assets/foods/' + option.image)")
          span.selected(v-show="option.selected")
            icon.icon(name="check")
          h4
            span.name {{ option.name }}
            span.price ¥{{ option.price.toLocaleString() }}/人
        .option
        .option
      span.done(@click.self="showing = false") 完了
</template>

<script>
export default {
  props: ['customs'],
  data () {
    return {
      showing: false,
      selfCustoms: []
    }
  },
  created () {
    this.selfCustoms = this.customs
  },
  methods: {
    update (customs) {
      this.customs = customs
      this.$forceUpdate()
    }
  },
  watch: {
    showing () {
      if (this.showing) {
        document.body.classList.add('-modaling')
      } else {
        document.body.classList.remove('-modaling')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.customsModal {
  h3 {
    margin-bottom: 12px;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
  .content {
    position: relative;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    width: $globalWidth;
    height: 80%;
    background-color: white;
    border-radius: 15px;
    padding: 24px;
    font-size: 20px;
    overflow: scroll;
  }
  .done {
    cursor: pointer;
    position: fixed;
    top: calc(10vh + 24px);
    right: calc((100% - #{$globalWidth}) / 2 + 24px);
    color: $blue;
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px 10px;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .option {
    width: calc((100% - (24px * 3)) / 4);
    position: relative;
    .-selected {
      margin-bottom: 8px;
      outline: 3px solid $blue;
      height: 165px;
    }
    img {
      width: 100%;
      height: 165px;
      object-fit: cover;
      cursor: pointer;
    }
    h4 {
      font-size: 20px;
      margin-bottom: 100px;
      overflow: hidden;
      height: 20px;
      line-height: 20px;
      .name {
        float: left;
      }
      .price {
        float: right;
        font-weight: lighter;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
      }
    }
    .selected {
      position: absolute;
      top: 130px;
      right: 10px;
      .icon {
        color: white;
        width: 30px;
        height: 30px;
        background-color: $blue;
        border-radius: 50%;
        padding: 5px;
      }
    }
  }
}
</style>
