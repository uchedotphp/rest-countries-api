<template>
  <div class="grid grid-cols-1 desktops:grid-cols-2">
    <div>
      <input
        v-model="search"
        class="font-semibold shadow-md rounded-lg px-12 w-full tablets:w-9/12 h-20 bg-darkBlueColor text-whiteColor focus:bg-darkBlueColor focus:outline-none focus:border-darkBlueColor placeholder-whiteColor text-xl border-darkBlueColor"
        placeholder="Search for a country..."
      />
    </div>

    <div class="relative desktops:flex justify-end">
      <button
        @click.prevent="toggleFilter"
        class="mt-16 h-20 desktops:mt-0 bg-darkBlueColor hover:bg-darkBlueColor text-lg text-whiteColor font-semibold py-6 px-12 rounded-lg inline-flex items-center justify-between w-8/12 phones:w-4/12 focus:bg-darkBlueColor focus:outline-none focus:border-darkBlueColor"
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

      <div
        class="w-8/12 absolute phones:mt-24 bg-darkBlueColor mt-2 rounded-lg text-lg font-semibold px-12 py-6 z-10 phones:w-4/12"
        v-bind:class="[showFilter ? 'block' : 'hidden']"
      >
        <a class="block py-2 text-xl" href="#">Africa</a>
        <a class="block py-2 text-xl" href="#">Asia</a>
        <a class="block py-2 text-xl" href="#">Europe</a>
        <a class="block py-2 text-xl" href="#">America</a>
        <a class="block py-2 text-xl" href="#">Oceania</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBoxesComponent",
  data() {
    return {
      search: "",
      showFilter: false
    };
  },
  methods: {
    toggleFilter() {
      this.showFilter = this.showFilter ? false : true;
    }
  },
  computed: {
    // search() {}
  }
};
</script>

<style lang="scss" scoped>
</style>