<template>
  <div class="grid grid-cols-1 phones:grid-cols-2 justify-between">
    <div class>
      <input
        class="font-semibold shadow-md rounded-lg px-12 w-full h-20 bg-darkBlueColor text-whiteColor focus:bg-darkBlueColor focus:outline-none focus:border-darkBlueColor placeholder-whiteColor text-xl border-darkBlueColor"
        placeholder="Search for a country..."
      />
    </div>

    <!-- <div
      class="flex justify-between py-6 px-12 text-lg font-semibold w-8/12 mt-16 phones:mt-0 rounded-lg bg-darkBlueColor text-whiteColor"
    >
      <p>Fliter by Region</p>
      <ion-icon name="chevron-down-outline"></ion-icon>
      <div>
        <a href="#">Africa</a>
        <a href="#">America</a>
        <a href="#">Asia</a>
        <a href="#">Europe</a>
        <a href="#">Oceania</a>
      </div>
    </div>-->
    <button
      class="mt-16 phones:mt-0 bg-darkBlueColor hover:bg-darkBlueColor text-lg text-whiteColor font-semibold py-6 px-12 rounded-lg inline-flex items-center justify-between w-8/12 focus:bg-darkBlueColor focus:outline-none focus:border-darkBlueColor"
    >
      <span>Filter by Region</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 512 512">
        <title>ionicons-v5-a</title>
        <polyline
          points="112 184 256 328 400 184"
          style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBoxesComponent"
};
</script>

<style lang="scss" scoped>
</style>