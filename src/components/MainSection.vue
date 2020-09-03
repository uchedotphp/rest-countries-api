<template>
  <div>
    <HeaderSection />
    <div>
      <SearchBox />
      <FilterBox />
    </div>
    <div>countries list here</div>
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import SearchBox from "@/components/SearchBox";
import FilterBox from "@/components/FilterBox";
export default {
  name: "MainSectionComponent",
  components: {
    HeaderSection,
    SearchBox,
    FilterBox
  }
};
</script>

<style lang="scss" scoped>
</style>