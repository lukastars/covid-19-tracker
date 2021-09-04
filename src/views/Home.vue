<template>
  <div>
    <main v-if="!loading" class="m-auto mb-10  md:w-9/12 sm:w-full">
      <div
        class="container  w-full bg-white pt-4 mb-10 pb-5 shadow-md rounded-lg "
      >
        <DataTitle
          :text="currentCountry"
          :dataDate="dateData"
          :countries="countriesNames"
          :currentCountry="currentCountry"
        />

        <div class="flex flex-row ">
          <CountrySelect
            :countries="countriesNames"
            @get-country="setCurrentCountry"
          />
          <button
            v-if="currentCountry == 'Glal'"
            class=" text-sm rounded-full m-auto ml-3 bg-green-700 text-white rounded p-4  focus:outline-none hover:bg-green-600"
          >
            Clear
          </button>
        </div>
      </div>

      <div class="text-center m-6 text-gray-800 ">
        <h1 class="text-2xl font-bold">
          <i class="fas fa-hospital text-purple-500"></i>
          Cases/Deaths Data
        </h1>
      </div>

      <DataBoxes :stats="stats" />
      <div class="grid md:grid-cols-2 gap-4">
        <ChartBoxes
          :chartData="chartData"
          :currentCountry="currentCountry"
          :chartType="'Cases'"
        />

        <ChartBoxes
          :chartData="chartData"
          :currentCountry="currentCountry"
          :chartType="'Deaths'"
        />
      </div>
      <div class="text-center m-6 text-gray-800 ">
        <h1 class="text-2xl font-bold">
          <i class="fas fa-plus-square text-blue-500"></i>
          Vaccination Data
        </h1>
      </div>
      <VaccineDataBox :stats="stats" />

      <div class="grid md:grid-cols-2 gap-4">
        <VaccineChartBox
          :chartData="chartData"
          :currentCountry="currentCountry"
          :chartType="'Doses'"
        />

        <VaccineChartBox
          :chartData="chartData"
          :currentCountry="currentCountry"
          :chartType="'DailyPerMillion'"
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
import VaccineDataBox from '@/components/VaccineDataBox';
import VaccineChartBox from '@/components/VaccineChartBox';

export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
    ChartBoxes,
    VaccineDataBox,
    VaccineChartBox,
  },
  data() {
    return {
      loading: true,
      currentCountry: 'Global',
      dateData: '',
      countriesNames: [
        {
          id: 1,
          name: 'Global',
          flag: 'https://image.emojisky.com/740/42740-middle.png',
        },
      ],

      stats: {},
      chartData: {},

      globalCardData: {
        newCases: '',
        totalCases: '',
        newDeaths: '',
        totalDeaths: '',

        newVaccine: '',
        totalVaccine: '',
        lastDayVaccine: '',

        dailyPerMillion: '',
        totalPerHundred: '',
      },
      globalChartData: {
        casesNum: [],
        deathsNum: [],
        casesDates: [],
        deathsDates: [],

        vaccineNum: [],
        vaccineDates: [],
        dailyPerMillion: [],
      },
      countryCardData: {
        newCases: '',
        totalCases: '',
        newDeaths: '',
        totalDeaths: '',

        newVaccine: '',
        totalVaccine: '',
        lastDayVaccine: '',

        totalPerHundred: '',
        dailyPerMillion: '',
      },
      countryChartData: {
        casesNum: [],
        deathsNum: [],
        casesDates: [],
        deathsDates: [],

        vaccineNum: [],
        vaccineDates: [],
        dailyPerMillion: [],
      },

      loadingImage: require('../assets/globe.svg'),
    };
  },

  methods: {
    async getGlobalCardData() {
      try {
        const response = await axios.get(
          'https://www.disease.sh/v3/covid-19/all'
        );
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },

    async getHistoricalGlobalData() {
      try {
        const response = await axios.get(
          'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
        );
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    async getVaccineGlobalData() {
      try {
        const response = await axios.get(
          'https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all&fullData=true'
        );
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },

    async getCountriesData() {
      try {
        const response = await axios.get(
          'https://www.disease.sh/v3/covid-19/countries'
        );
        const data = response.data;

        return data;
      } catch (error) {
        console.error(error);
      }
    },

    async getGlobalData() {
      const cardData = await this.getGlobalCardData();
      const chartData = await this.getHistoricalGlobalData();
      const countriesData = await this.getCountriesData();

      const vaccineData = await this.getVaccineGlobalData();

      //populating globalCardData
      this.globalCardData.newCases = cardData.todayCases;
      this.globalCardData.totalCases = cardData.cases;
      this.globalCardData.newDeaths = cardData.todayDeaths;
      this.globalCardData.totalDeaths = cardData.deaths;

      this.globalCardData.totalVaccine =
        vaccineData[vaccineData.length - 1].total;
      this.globalCardData.newVaccine =
        vaccineData[vaccineData.length - 1].daily;
      this.globalCardData.lastDayVaccine =
        vaccineData[vaccineData.length - 2].daily;
      this.globalCardData.dailyPerMillion =
        vaccineData[vaccineData.length - 2].dailyPerMillion;
      this.globalCardData.totalPerHundred =
        vaccineData[vaccineData.length - 2].totalPerHundred;

      //   dailyPerMillion: '', totalPerHundred

      //populating globalChartData
      this.globalChartData.casesNum = Object.values(chartData.cases);
      this.globalChartData.deathsNum = Object.values(chartData.deaths);
      this.globalChartData.casesDates = Object.keys(chartData.cases);
      this.globalChartData.deathsDates = Object.keys(chartData.deaths);

      vaccineData.forEach((element) => {
        this.globalChartData.vaccineNum.push(element.total);
        this.globalChartData.vaccineDates.push(element.date);
        this.globalChartData.dailyPerMillion.push(element.dailyPerMillion);
      });

      //populating dateData
      this.dateData = cardData.updated;

      //populating countries array for the select options
      countriesData.forEach((element) => {
        const country = {
          name: element.country,
          id: element.countryInfo._id,
          flag: element.countryInfo.flag,
        };
        this.countriesNames.push(country);
      });

      this.stats = this.globalCardData;
      this.chartData = this.globalChartData;
    },

    async getCountryCardData(country) {
      try {
        const response = await axios.get(
          `https://www.disease.sh/v3/covid-19/countries/${country}`
        );
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    async getCountryHistoricalData(country) {
      try {
        const response = await axios.get(
          `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`
        );
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    async getVaccineCountryData(country) {
      try {
        const response = await axios.get(
          `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}?lastdays=all&fullData=true
`
        );
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },

    async getCountryData(country) {
      const cardData = await this.getCountryCardData(country);
      const chartData = await this.getCountryHistoricalData(country);
      const vaccineData = await this.getVaccineCountryData(country);
      //populating countryCardData
      this.countryCardData.newCases = cardData.todayCases;
      this.countryCardData.totalCases = cardData.cases;
      this.countryCardData.newDeaths = cardData.todayDeaths;
      this.countryCardData.totalDeaths = cardData.deaths;

      this.countryCardData.totalVaccine =
        vaccineData.timeline[vaccineData.timeline.length - 1].total;
      this.countryCardData.newVaccine =
        vaccineData.timeline[vaccineData.timeline.length - 1].daily;
      this.countryCardData.lastDayVaccine =
        vaccineData.timeline[vaccineData.timeline.length - 3].daily;
      this.countryCardData.dailyPerMillion =
        vaccineData.timeline[vaccineData.timeline.length - 3].dailyPerMillion;
      this.countryCardData.totalPerHundred =
        vaccineData.timeline[vaccineData.timeline.length - 3].totalPerHundred;

      //populating countryChartData
      this.countryChartData.casesNum = Object.values(chartData.timeline.cases);
      this.countryChartData.deathsNum = Object.values(
        chartData.timeline.deaths
      );
      this.countryChartData.casesDates = Object.keys(chartData.timeline.cases);
      this.countryChartData.deathsDates = Object.keys(
        chartData.timeline.deaths
      );

      vaccineData.timeline.forEach((element) => {
        this.countryChartData.vaccineNum.push(element.total);
        this.countryChartData.vaccineDates.push(element.date);
        this.countryChartData.dailyPerMillion.push(element.dailyPerMillion);
      });

      this.stats = this.countryCardData;
      this.chartData = this.countryChartData;
    },

    async loadData() {
      this.loading = true;

      if (this.currentCountry == 'Global') {
        await this.getGlobalData();
      } else {
        await this.getCountryData(this.currentCountry);
      }

      this.loading = false;
    },

    async setCurrentCountry(country) {
      this.currentCountry = country;
      this.loadData();
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
</style>
