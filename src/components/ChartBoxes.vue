<template>
  <div
    class="bg-white shadow-md rounded-lg w-full m-auto mt-10 sm:h-56  md:h-h-72 lg:h-96 p-3"
    :id="chartType + 'chart-container'"
  >
    <canvas :id="chartType"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import moment from 'moment';

export default {
  name: 'ChartBoxes',
  props: ['countryName', 'chartType', 'id'],
  data() {
    return {
      country: this.countryName.Country,
      countryData: {},
      totalCases: [],
      totalDeath: [],
      totalDate: [],
    };
  },

  watch: {
    countryName: function() {
      this.country = this.countryName.Country;
    },
    country: async function() {
      await this.updateData();
    },
  },

  methods: {
    async getCountryData() {
      try {
        const response = await axios.get(
          `https://api.covid19api.com/country/${this.country}`
        );
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    getTotalCases() {
      const totalCases = [];
      this.countryData.forEach((element) => {
        totalCases.push(element.Confirmed);
      });
      return totalCases;
    },
    getTotalDeath() {
      const totalDeath = [];
      this.countryData.forEach((element) => {
        totalDeath.push(element.Deaths);
      });
      return totalDeath;
    },
    getTotalDate() {
      const totalDate = [];
      this.countryData.forEach((element) => {
        totalDate.push(moment(element.Date).format('MMM Do YY'));
      });
      return totalDate;
    },

    chartIt() {
      const totalCases = this.totalCases;
      const totalDate = this.totalDate;
      const totalDeath = this.totalDeath;
      const ctx = document.getElementById(
        this.chartType == 'Cases' ? 'Cases' : 'Deaths'
      );
      const chartContainer = document.getElementById(
        this.chartType + 'chart-container'
      );
      ctx.remove();
      const chartCanvas = document.createElement('canvas');
      chartCanvas.setAttribute(
        'id',
        this.chartType == 'Cases' ? 'Cases' : 'Deaths'
      );
      chartContainer.appendChild(chartCanvas);
      const canvas = document.getElementById(
        this.chartType == 'Cases' ? 'Cases' : 'Deaths'
      );
      const chartData = {
        type: 'line',
        data: {
          labels: totalDate,
          datasets: [
            {
              label: this.chartType == 'Cases' ? 'Cases' : 'Deaths',
              fill: false,
              data: this.chartType == 'Cases' ? totalCases : totalDeath,
              backgroundColor:
                this.chartType == 'Cases' ? '#1e40af' : '#dc2626',
              borderColor: this.chartType == 'Cases' ? '#1e40af' : '#dc2626',
              borderWidth: 5,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          maintainAspectRatio: false,

          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },

          legend: {
            position: 'bottom',
          },

          title: {
            display: true,

            text: `Total ${this.chartType == 'Cases' ? 'Cases' : 'Deaths'} in ${
              this.countryName.Country
            }`,
          },
          elements: {
            point: {
              radius: 0,
            },
          },

          scales: {
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 15,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
      };
      const myChart = new Chart(canvas, chartData);
    },

    async updateData() {
      const data = await this.getCountryData();
      this.countryData = data;
      this.totalCases = this.getTotalCases();
      this.totalDate = this.getTotalDate();
      this.totalDeath = this.getTotalDeath();
      this.chartIt();
    },
  },

  async created() {
    await this.updateData();
  },
};
</script>
