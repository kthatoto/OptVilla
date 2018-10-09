<template lang="pug">
.select
  select
    option(v-for="option in options" :key="option") {{ option }}
  icon.icon(name="chevron-down")
</template>

<script>
export default {
  props: ['options']
}
</script>

<style lang="scss" scoped>
select {
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #ced4da;
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  color: #495057;
  background-color: #fff;
  appearance: none;
}
.select {
  position: relative;
  .icon {
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
