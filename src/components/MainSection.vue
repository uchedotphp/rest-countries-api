<template>
  <div>
    <HeaderSection />
    <div class="px-5 py-10 phones:max-w-screen-desktops mx-auto">
      <SearchBoxes />
    </div>
    <!-- <div>countries list here</div> -->
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import SearchBoxes from "@/components/SearchBoxes";
export default {
  name: "MainSectionComponent",
  components: {
    HeaderSection,
    SearchBoxes
  }
};
</script>

<style lang="scss" scoped>
</style>