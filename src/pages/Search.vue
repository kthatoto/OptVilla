<template lang="pug">
.search
  SearchBar.searchBar
</template>

<script>
import SearchBar from '@/components/molecules/SearchBar'
export default {
  components: { SearchBar }
}
</script>

<style lang="scss" scoped>
@import '@/styles/resources';
.search {
  .searchBar {
    border-top: 2px solid $white;
    border-bottom: 1px solid $pink;
  }
}
</style>
