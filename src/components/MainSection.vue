<template>
  <div>
    <HeaderSection />
    <div class="px-5 py-16 phones:px-0 container tablets:px-20 desktops:px-0 mx-auto">
      <SearchBoxes />
    </div>
    <div
      class="grid grid-cols-1 phones:grid-cols-4 tablets:px-20 desktops:px-0 tablets:grid-cols-2 desktops:grid-cols-4 gap-20 mb-20 container mx-auto w-9/12 phones:w-auto container"
    >
      <div class="rounded overflow-hidden shadow-lg" v-for="country in countries" :key="country.id">
        <img class="w-full object-cover h-48" :src="country.flag" :alt="[country.name]" />
        <div class="px-6 py-8 bg-darkBlueColor">
          <div class="font-extrabold text-2xl mb-2 py-5">{{country.name}}</div>
          <p class="text-xl">
            <span class="font-semibold">Population:</span>
            {{country.population}}
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span>
            {{country.region}}
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span>
            {{country.capital}}
          </p>
        </div>
      </div>

      <!-- <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full object-cover h-48"
          src="https://source.unsplash.com/random"
          alt="country flag"
        />
        <div class="px-6 py-8 bg-darkBlueColor">
          <div class="font-extrabold text-2xl mb-2 py-5">United States of America</div>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full object-cover h-48"
          src="https://source.unsplash.com/random"
          alt="country flag"
        />
        <div class="px-6 py-8 bg-darkBlueColor">
          <div class="font-extrabold text-2xl mb-2 py-5">United States of America</div>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full object-cover h-48"
          src="https://source.unsplash.com/random"
          alt="country flag"
        />
        <div class="px-6 py-8 bg-darkBlueColor">
          <div class="font-extrabold text-2xl mb-2 py-5">United States of America</div>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full object-cover h-48"
          src="https://source.unsplash.com/random"
          alt="country flag"
        />
        <div class="px-6 py-8 bg-darkBlueColor">
          <div class="font-extrabold text-2xl mb-2 py-5">United States of America</div>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-full object-cover h-48"
          src="https://source.unsplash.com/random"
          alt="country flag"
        />
        <div class="px-6 py-8 bg-darkBlueColor">
          <div class="font-extrabold text-2xl mb-2 py-5">United States of America</div>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>-->

      <!-- <div class="px-16 py-10 rounded-lg phones:px-0">
        <img
          src="https://source.unsplash.com/random"
          class="object-cover h-48 w-full"
          alt="country flag"
        />

        <div class="px-6 py-8 bg-darkBlueColor">
          <h1 class="font-extrabold text-2xl py-5">United States of America</h1>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>

      <div class="px-16 py-10 rounded-lg phones:px-0">
        <img
          src="https://source.unsplash.com/random"
          class="object-cover h-48 w-full"
          alt="country flag"
        />

        <div class="px-6 py-8 bg-darkBlueColor">
          <h1 class="font-extrabold text-2xl py-5">United States of America</h1>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>

      <div class="px-16 py-10 rounded-lg phones:px-0">
        <img
          src="https://source.unsplash.com/random"
          class="object-cover h-48 w-full"
          alt="country flag"
        />

        <div class="px-6 py-8 bg-darkBlueColor">
          <h1 class="font-extrabold text-2xl py-5">United States of America</h1>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>

      <div class="px-16 py-10 rounded-lg phones:px-0">
        <img
          src="https://source.unsplash.com/random"
          class="object-cover h-48 w-full"
          alt="country flag"
        />

        <div class="px-6 py-8 bg-darkBlueColor">
          <h1 class="font-extrabold text-2xl py-5">United States of America</h1>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>

      <div class="px-16 py-10 rounded-lg phones:px-0">
        <img
          src="https://source.unsplash.com/random"
          class="object-cover h-48 w-full"
          alt="country flag"
        />

        <div class="px-6 py-8 bg-darkBlueColor">
          <h1 class="font-extrabold text-2xl py-5">United States of America</h1>
          <p class="text-xl">
            <span class="font-semibold">Population:</span> 323,947,000
          </p>
          <p class="text-xl">
            <span class="font-semibold">Region:</span> Americas
          </p>
          <p class="text-xl">
            <span class="font-semibold">Capital:</span> Washington, D.C.
          </p>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderSection from "@/components/HeaderSection";
import SearchBoxes from "@/components/SearchBoxes";
export default {
  name: "MainSectionComponent",
  components: {
    HeaderSection,
    SearchBoxes
  },
  data() {
    return {
      countries: []
    };
  },
  created() {
    return axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => {
        this.countries = data;
      })
      .catch(err => {
        console.error(err);
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

<style lang="scss" scoped>
</style>