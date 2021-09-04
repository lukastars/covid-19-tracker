<template>
  <div
    class="bg-white shadow-md rounded-lg w-full m-auto mt-10  p-3"
    :id="chartType + 'chart-container'"
  >
    <canvas :id="chartType"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'ChartBoxes',
  props: ['chartData', 'currentCountry', 'chartType'],

  watch: {
    chartData: function() {
      this.chartIt();
    },
  },

  methods: {
    chartIt() {
      const totalCases = this.chartData.casesNum;
      const totalDate = this.chartData.casesDates;
      const totalDeath = this.chartData.deathsNum;

      const chartContainer = document.getElementById(
        this.chartType + 'chart-container'
      );
      const ctx = document.getElementById(this.chartType);
      ctx.remove();
      const chartCanvas = document.createElement('canvas');
      chartCanvas.setAttribute('id', this.chartType);
      chartContainer.appendChild(chartCanvas);
      const canvas = document.getElementById(this.chartType);

      const chartData = {
        type: 'line',
        data: {
          labels: totalDate,
          datasets: [
            {
              label: this.chartType,
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
          aspectRatio: 1,

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
              this.currentCountry
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
  },
  mounted() {
    this.chartIt();
  },
};
</script>
