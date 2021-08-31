<template>
  <div>
    <main v-if="!loading" class="m-auto mb-10 w-9/12">
      <div
        class="container sm:w-full w-4/5 bg-white pt-4 mb-10 pb-5 shadow-md rounded-lg "
      >
        <DataTitle :text="title" :dataDate="dataDate" />
        <div class="flex flex-row ">
          <CountrySelect :countries="countries" @get-country="getCountryData" />
          <button
            v-if="stats.Country"
            @click="clearCountryData"
            class=" text-sm rounded-full m-auto ml-3 bg-green-700 text-white rounded p-4  focus:outline-none hover:bg-green-600"
          >
            Clear
          </button>
        </div>
      </div>
      <DataBoxes :stats="stats" />
      <div class="grid md:grid-cols-2 gap-4">
        <ChartBoxes
          :countryName="stats"
          :chartType="'Cases'"
          v-if="stats.Country"
        />

        <ChartBoxes
          :countryName="stats"
          :chartType="'Deaths'"
          v-if="stats.Country"
        />
      </div>
    </main>
    <main v-else class="flex flex-col align-center justify-center text-center">
      <div class="text-gray-500 text-3xl mt-10 mb-6">
        Fetching Data...
      </div>
      <img class=" w-50 m-auto" :src="loadingImage" alt="loadingImage" />
    </main>
  </div>
</template>

<script>
import DataTitle from '@/components/DataTitle';
import DataBoxes from '@/components/DataBoxes';
import CountrySelect from '@/components/CountrySelect';
import ChartBoxes from '@/components/ChartBoxes';

export default {
  name: 'Home',
  components: { DataTitle, DataBoxes, CountrySelect, ChartBoxes },
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/globe.svg'),
    };
  },
  methods: {
    async getCovidData() {
      try {
        const response = await axios.get('https://api.covid19api.com/summary');
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },

    getCountryData(country) {
      this.title = country.Country;
      this.stats = country;
    },
    async clearCountryData() {
      this.loading = true;
      const data = await this.getCovidData();
      this.title = 'Global';
      this.stats = data.Global;
      this.dataDate = data.Date;
      this.countries = data.Countries;
      this.loading = false;
    },
  },
  async created() {
    const data = await this.getCovidData();
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
</style>
