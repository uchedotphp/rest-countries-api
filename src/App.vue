<template>
  <div id="app" class="bg-red-500 phones:bg-green-500">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
// site font
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

// site colors
$dark-blue: hsl(209, 23%, 22%);
$very-dark-blue-dark: hsl(207, 26%, 17%);
$very-dark-blue-light: hsl(200, 15%, 8%);
$dark-gray: hsl(0, 0%, 52%);
$very-light-gray: hsl(0, 0%, 98%);
$white: hsl(0, 0%, 100%);

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
  background: $dark-blue;
  font-family: "Nunito Sans", sans-serif;
}
</style>
