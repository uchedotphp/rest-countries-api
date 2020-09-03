<template>
  <div id="app">
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
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,800;1,600&display=swap");

$dark-blue: hsl(209, 23%, 22%);
$very-dark-blue-dark: hsl(207, 26%, 17%);
$very-dark-blue-light: hsl(200, 15%, 8%);
$dark-gray: hsl(0, 0%, 52%);
$very-light-gray: hsl(0, 0%, 98%);
$white: hsl(0, 0%, 100%);

* {
  margin: 0;
  padding: 0;
}

body {
  background: $dark-blue;
  font-family: "Nunito Sans", sans-serif;
}
</style>
