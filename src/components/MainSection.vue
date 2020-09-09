<template>
  <div>
    <div
      class="px-5 py-16 phones:px-0 container tablets:px-20 desktops:px-0 mx-auto"
    >
      <SearchBoxes v-on:searchedValue="listenToSearch" />
    </div>
    <div
      class="grid grid-cols-1 phones:grid-cols-4 tablets:px-20 desktops:px-0 tablets:grid-cols-2 desktops:grid-cols-4 gap-20 mb-20 container mx-auto w-9/12 phones:w-auto container"
    >
      <div
        v-loading="loading"
        element-loading-text="Loading..."
        class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
        v-for="country in filteredSearch"
        :key="country.name"
      >
        <router-link
          :to="{ name: 'countryDetails', params: { name: country.alpha3Code } }"
        >
          <img
            class="w-full object-cover h-56"
            :src="country.flag"
            :alt="[country.name]"
          />
        </router-link>
        <div
          :class="[
            'px-6',
            'py-8',
            mode ? 'bg-whiteColor' : 'bg-darkBlueColor',
            mode ? 'text-veryDarkBlueDarkColor' : 'text-whiteColor',
          ]"
        >
          <div class="font-extrabold text-2xl mb-2 py-5">
            {{ country.name }}
          </div>
          <p class="text-xl">
            <span class="font-semibold">Population:</span>
            {{ country.population }}
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span>
            {{ country.region }}
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span>
            {{ country.capital }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "./../event-bus";
import Nprogress from "nprogress";
import SearchBoxes from "@/components/SearchBoxes";
export default {
  name: "MainSectionComponent",
  components: {
    SearchBoxes,
  },
  data() {
    return {
      mode: true,
      countries: [],
      searchedCountry: "",
      loading: false,
    };
  },
  mounted() {
    EventBus.$on("currentMode", (value) => {
      this.mode = value;
    });
  },
  methods: {
    listenToSearch(value) {
      console.log(value);
      this.searchedCountry = value;
      console.log("new value for searched country: ", this.searchedCountry);
    },
  },
  created() {
    axios.interceptors.request.use((config) => {
      Nprogress.start();
      return config;
    });

    axios.interceptors.response.use((response) => {
      Nprogress.done();
      return response;
    });

    return axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => {
        this.countries = data;
        // console.log(data.alpha3Code)
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
  computed: {
    filteredSearch() {
      return this.countries.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(this.searchedCountry.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
