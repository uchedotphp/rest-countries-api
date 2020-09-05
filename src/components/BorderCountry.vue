<template>
  <div class="mb-16 mt-16 container mx-auto w-10/12 phones:w-auto">
    <div>
      <button @click="$router.push('/')" class="shadow-lg bg-darkBlueColor hover:bg-darkBlueColor text-2xl text-whiteColor py-2 px-8 rounded-sm inline-flex items-center focus:bg-darkBlueColor focus:outline-none focus:border-darkBlueColor"
      >
      <svg class="mr-4" xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 512 512'><title>ionicons-v5-a</title><polyline points='244 400 100 256 244 112' style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/><line x1='120' y1='256' x2='412' y2='256' style='fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/></svg>
        <span>Back</span>
      </button>

      <div class="overflow-hidden">
        <img
          class="w-full object-cover h-full my-20"
          :src="countryDetails.flag"
          :alt="[countryDetails.name]"
        />
        <div>
          <div class="font-extrabold text-4xl pb-5">
            {{ countryDetails.name }}
          </div>
          <p class="text-2xl py-2">
            <span class="font-semibold">Native Name:</span>
            {{ countryDetails.nativeName }}
          </p>
          <p class="text-2xl py-2">
            <span class="font-semibold">Population:</span>
            {{ countryDetails.population }}
          </p>
          <p class="text-2xl py-2">
            <span class="font-semibold">Region:</span>
            {{ countryDetails.region }}
          </p>
          <p class="text-2xl py-2">
            <span class="font-semibold">Sub Region:</span>
            {{ countryDetails.subregion }}
          </p>
          <p class="text-2xl pt-2">
            <span class="font-semibold">Capital:</span>
            {{ countryDetails.capital }}
          </p>
        </div>
      </div>

        <div class="mt-10">
          <p class="text-2xl pb-2">
            <span class="font-semibold">Top Level Domain:</span>
            <span v-for="domain in countryDetails.topLevelDomain" :key="domain">
              {{domain}}
            </span>
          </p>
          <p class="text-2xl py-2">
            <span class="font-semibold">Currencies:</span>
            <span v-for="currency in countryDetails.currencies" :key="currency.name">
              {{currency.name}}
            </span>
          </p>
          <p class="text-2xl py-2">
            <span class="font-semibold">Languages:</span>
              <span v-for="(language, index) in countryDetails.languages" :key="index">
                {{language.name}}
                <span v-if="index != countryDetails.languages.length - 1">,</span>
              </span>
          </p>
        </div>

        <div class="mt-10" v-if="countryDetails.borders.length != 0">
          <div class="text-2xl py-2">
            <span class="font-semibold">Border Countries:</span>
            <div class="grid grid-cols-3 gap-4 mt-6">
              <button @click="$router.push({name: 'borderCountry', params:{name:borders}})" class="bg-darkBlueColor py-2 text-center shadow-md px-4 rounded-sm" v-for="(borders, index) in countryDetails.borders" :key="index">
              {{borders}}
            </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "BorderCountryComponent",
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
    ).catch( err => {
      console.error(err)
    });
  },
};
</script>

<style lang="scss" scoped></style>
