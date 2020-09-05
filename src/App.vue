<template>
  <div id="app" class="">

  <HeaderSection />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
export default {
  name: "app",
  components: {
    HeaderSection
    // SearchBoxes,
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