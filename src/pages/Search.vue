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
import api from '@/utils/Api'
export default {
  components: { SearchBar, Customs, Houses },
  data () {
    return {
      topHouse: {},
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
    api('GET',
      process.env.API_ENDPOINT + '/api/rooms?keyword=recommend',
      {}
    ).then(response => {
      const data = response.data
      this.topHouse = data[0]
      this.houses = data.slice(1, 15)
    })
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
