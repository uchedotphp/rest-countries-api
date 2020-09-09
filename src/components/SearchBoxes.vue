<template>
  <div class="grid grid-cols-1 desktops:grid-cols-2">
    <div>
      <input
        v-model="search"
        class="font-semibold shadow-md rounded-lg px-12 w-full tablets:w-9/12 h-20 focus:outline-none focus:border-darkBlueColor text-xl border-darkBlueColor"
        :class="[
          mode ? 'focus:bg-whiteColor' : 'focus:bg-darkBlueColor',
          mode ? 'bg-whiteColor' : 'bg-darkBlueColor',
          mode ? 'placeholder-veryDarkBlueDarkColor' : 'placeholder-whiteColor',
        ]"
        placeholder="Search for a country..."
      />
    </div>

    <div class="relative desktops:flex justify-end">
      <button
        @click.prevent="toggleFilter"
        :class="[
          'mt-16',
          'h-20',
          'desktops:mt-0',
          mode ? 'bg-whiteColor' : 'bg-darkBlueColor',
          'text-lg',
          'font-semibold',
          'py-6',
          'px-12',
          'rounded-lg',
          'inline-flex',
          'items-center',
          'justify-between',
          'w-8/12',
          'phones:w-4/12',
          mode ? 'focus:bg-whiteColor' : 'focus:bg-darkBlueColor',
          'focus:outline-none',
          'focus:border-darkBlueColor',
          'shadow-lg',
        ]"
      >
        <span :class="[mode ? 'text-veryDarkBlueDarkColor' : 'text-whiteColor']"
          >Filter by Region</span
        >
        <svg
          v-if="mode"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-a</title>
          <polyline
            points="112 184 256 328 400 184"
            style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-a</title>
          <polyline
            points="112 184 256 328 400 184"
            style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
          />
        </svg>
      </button>

      <div
        :class="[
          'w-8/12',
          'absolute',
          'phones:mt-24',
          mode ? 'bg-whiteColor' : 'bg-darkBlueColor',
          'mt-2',
          'rounded-lg',
          'text-lg',
          'font-semibold',
          'px-12',
          'py-6',
          'z-10',
          'phones:w-4/12',
          showFilter ? 'block' : 'hidden',
        ]"
      >
        <a
          class="block py-2 text-xl"
          :class="[mode ? 'text-veryDarkBlueDarkColor' : 'text-whiteColor']"
          href="#"
          >Africa</a
        >
        <a
          class="block py-2 text-xl"
          :class="[mode ? 'text-veryDarkBlueDarkColor' : 'text-whiteColor']"
          href="#"
          >Asia</a
        >
        <a
          class="block py-2 text-xl"
          :class="[mode ? 'text-veryDarkBlueDarkColor' : 'text-whiteColor']"
          href="#"
          >Europe</a
        >
        <a
          class="block py-2 text-xl"
          :class="[mode ? 'text-veryDarkBlueDarkColor' : 'text-whiteColor']"
          href="#"
          >America</a
        >
        <a
          class="block py-2 text-xl"
          :class="[mode ? 'text-veryDarkBlueDarkColor' : 'text-whiteColor']"
          href="#"
          >Oceania</a
        >
      </div>
    </div>

    <!-- <select
      v-model="selected"
      class="justify-end bg-darkBlueColor desktops:flex"
    >
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select> -->
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "./../event-bus";
export default {
  name: "SearchBoxesComponent",
  data() {
    return {
      mode: true,
      search: "",
      showFilter: false,
    };
  },
  mounted() {
    EventBus.$on("currentMode", (value) => {
      this.mode = value;
    });
  },
  created() {
    return axios
      .get("https://restcountries.eu/rest/v2/region/europe")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  },
  methods: {
    toggleFilter() {
      this.showFilter = this.showFilter ? false : true;
    },
    filterRegion() {},
  },
  watch: {
    search() {
      console.log(this.search);
      this.$emit("searchedValue", this.search);
    },
  },
};
</script>

<style lang="scss" scoped></style>
