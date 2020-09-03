<template>
  <div id="app" class="bg-red-500 phones:bg-green-500">
    <MainSection />
  </div>
</template>

<script>
import MainSection from "@/components/MainSection";
export default {
  name: "app",
  components: {
    MainSection
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
  // background: $dark-blue;
  font-family: "Nunito Sans", sans-serif;
}
</style>
