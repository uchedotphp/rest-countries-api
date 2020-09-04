<template>
  <div id="app" class="">
    <HeaderSection />
    <div
      class="px-5 py-16 phones:px-0 container tablets:px-20 desktops:px-0 mx-auto"
    >
      <SearchBoxes />
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import SearchBoxes from "@/components/SearchBoxes";
export default {
  name: "app",
  components: {
    HeaderSection,
    SearchBoxes,
  }
};
</script>

<style lang="scss">
// site font
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

// site font sizes
$homepageFontSize: 14px;
$detailsPageFontSize: 16px;

:root {
  font-size: $homepageFontSize;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Nunito Sans", sans-serif;
}
</style>