<template>
<div>
    <div
      class="px-5 py-16 phones:px-0 container tablets:px-20 desktops:px-0 mx-auto"
    >
      <SearchBoxes />
    </div>
    <div class="grid grid-cols-1 phones:grid-cols-4 tablets:px-20 desktops:px-0 tablets:grid-cols-2 desktops:grid-cols-4 gap-20 mb-20 container mx-auto w-9/12 phones:w-auto container"
    >
      <div v-loading="loading" element-loading-text="Loading..."
        class="rounded overflow-hidden shadow-lg"
        v-for="country in countries"
        :key="country.name"
      >
      <router-link :to="{ name: 'countryDetails', params: { name: country.name } }">
        <img
          class="w-full object-cover h-56"
          :src="country.flag"
          :alt="[country.name]"
        />
      </router-link>
        <div class="px-6 py-8 bg-darkBlueColor">
          <div class="font-extrabold text-2xl mb-2 py-5">
            <!-- <router-link :to="{name: 'countryDetails',id: country.id}"> -->
              {{ country.name }}
            <!-- </router-link> -->
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
    <!-- </router-link> -->
    </div>
</div>
</template>

<script>
import axios from "axios";
import SearchBoxes from "@/components/SearchBoxes";
export default {
  name: "MainSectionComponent",
  components:{
    SearchBoxes
  },
  data() {
    return {
      countries: [],
      loading: false,
    };
  },
  created() {
    return axios
      .get("https://restcountries.eu/rest/v2/all?_page=1&_limit=20")
      .then(({ data }) => {
        this.countries = data;
      })
      .catch(error => {
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
      console.log('Error', error.message);
    }
    console.log(error.config);
      });
  },
  computed: {
    // filteredSearch() {
    //   return this.countries.filter(country => {
    //     return country.name.includes();
    //   });
    // }
  }
};
</script>

<style lang="scss" scoped></style>
