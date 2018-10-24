<template lang="pug">
.search
  SearchBar.searchBar
  .main
    Customs.customs(:customs="customs")
    Houses(:houses="houses")
</template>

<script>
import SearchBar from '@/components/molecules/SearchBar'
import Customs from '@/components/organisms/Customs'
import Houses from '@/components/organisms/Houses'
export default {
  components: { SearchBar, Customs, Houses },
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
      houses: [],
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
      this.houses.push(house)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.search {
  .searchBar {
    border-top: 2px solid $white;
    border-bottom: 1px solid $pink;
    margin-bottom: 64px;
  }
  .main {
    width: $globalWidth;
    margin: 0 auto;
  }
  .customs {
    margin-bottom: 100px;
  }
}
</style>
