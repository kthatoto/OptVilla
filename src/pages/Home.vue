<template lang="pug">
.home
  Keyvisual.keyvisual
    house-sub-card.keyvisual__houseSubCard(:house="topHouse")
  .main
    Houses.houses(:houses="recommends" title="人気民泊リゾート")
    Customs.customs(:customs="customs")
    Houses.houses(:houses="recommends" title="安く泊まれる民泊リゾート")
</template>

<script>
import Keyvisual from '@/components/molecules/Keyvisual'
import HouseSubCard from '@/components/molecules/HouseSubCard'
import Houses from '@/components/organisms/Houses'
import Customs from '@/components/organisms/Customs'
export default {
  components: { Keyvisual, HouseSubCard, Houses, Customs },
  data () {
    return {
      topHouse: {
        id: 1,
        title: '湘南の海が一望できる別荘で素敵な休日を過ごしませんか？',
        maxStayerNumber: 3,
        pricePerStay: 35000,
        prefecture: '神奈川',
        city: '箱根',
        rate: 3.4
      },
      recommends: [],
      customs: [
        { id: 1, name: 'レンタルシップ', slug: 'cruiging' },
        { id: 2, name: 'イタリアンディナー', slug: 'dinner' },
        { id: 3, name: 'マッサージ・エステ', slug: 'massage' },
        { id: 4, name: 'マッサージ・エステ', slug: 'massage' }
      ]
    }
  },
  created () {
    for (let i = 2; i <= 7; i++) {
      const house = JSON.parse(JSON.stringify(this.topHouse))
      house.id = i
      house.height = i % 3 === 0 ? 300 : 200
      this.recommends.push(house)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.home {
  .keyvisual {
    margin-bottom: 100px;
    &__houseSubCard {
      width: 500px;
      position: absolute;
      left: calc((100% - #{$globalWidth}) / 2);
      bottom: 0;
      border-radius: 10px 10px 0 0;
      /deep/ h2 {
        font-size: 28px;
      }
    }
  }
  .main {
    width: $globalWidth;
    margin: 0 auto;
    .customs {
      margin-bottom: 64px;
    }
  }
}
</style>
