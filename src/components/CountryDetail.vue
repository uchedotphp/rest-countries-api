<template>
  <div class="mb-20 container mx-auto w-9/12 phones:w-auto container">
    <div>
      <svg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 512 512'><title>ionicons-v5-a</title><polyline points='244 400 100 256 244 112' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/><line x1='120' y1='256' x2='412' y2='256' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/></svg>
      <button class="mt-16 h-20 desktops:mt-0 bg-darkBlueColor hover:bg-darkBlueColor text-lg text-whiteColor font-semibold py-6 px-12 rounded-lg inline-flex items-center justify-between w-8/12 phones:w-4/12 focus:bg-darkBlueColor focus:outline-none focus:border-darkBlueColor"
      >
        <span>Back</span>
      </button>

      <div class="rounded overflow-hidden shadow-lg">
        <!-- <img
          class="w-full object-cover h-48"
          :src="countryDetails.flag"
          :alt="[countryDetails.name]"
        />
        <div class="px-6 py-8 bg-darkBlueColor">
          <div class="font-extrabold text-2xl mb-2 py-5">
            {{ countryDetails.name }}
          </div>
          <p class="text-xl">
            <span class="font-semibold">Population:</span>
            {{ countryDetails.population }}
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span>
            {{ countryDetails.region }}
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span>
            {{ countryDetails.capital }}
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "CountryDetailComponent",
  data() {
    return {
      countryDetails: {}
    }
  },
  props:{
    name: String
  },
  mounted() {
    console.log(this.name);
    console.log(this.$route.params)
    return axios.get("https://restcountries.eu/rest/v2/all").then(
      ({data}) =>{
        console.log(data);
        const detail = data.find(
          countryData =>{
            return countryData.name === this.name
          }
        );
        console.log(detail);
        this.countryDetails = detail
      }
    ).catch(err =>{
      console.error(err)
    });
  },
};
</script>

<style lang="scss" scoped></style>
