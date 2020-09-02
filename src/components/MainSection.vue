<template>
  <div>
    <div>
      <SearchBox />
      <FilterBox />
    </div>
    <div>countries list here</div>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import FilterBox from "@/components/FilterBox";
export default {
  name: "MainSectionComponent",
  components: {
    SearchBox,
    FilterBox
  }
};
</script>

<style lang="scss" scoped>
</style>