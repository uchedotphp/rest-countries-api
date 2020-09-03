<template>
  <div class="bg-darkBlueColor shadow-md">
    <div
      class="phones:max-w-screen-desktops flex items-baseline justify-between mx-auto px-5 py-10"
    >
      <h5 class="phones:text-4xl text-2xl font-extrabold">Where in the world?</h5>

      <button
        class="bg-darkBlueColor hover:bg-darkBlueColor text-xl phones:text-2xl text-whiteColor font-semibold inline-flex items-center focus:outline-none focus:border-darkBlueColor"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-3" viewBox="0 0 512 512">
          <title>ionicons-v5-j</title>
          <path
            d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
            style="fill:#fff;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          />
        </svg>
        <span>Dark Mode</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSectionComponent"
};
</script>

<style lang="scss" scoped>
</style>