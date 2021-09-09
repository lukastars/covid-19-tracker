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

export default {
  name: 'VaccineChartBox',
  props: ['chartData', 'currentCountry', 'chartType'],

  watch: {
    chartData: function() {
      fil;
      this.chartIt();
    },
  },
  created() {
    this.chartData.dailyPerMillion.pop();
    this.chartData.dailyPerMillion.pop();
    this.chartData.dailyPerMillion.pop();
  },

  methods: {
    chartIt() {
      const totalDoses = this.chartData.vaccineNum;
      const totalDate = this.chartData.vaccineDates;
      const dailyPerMillion = this.chartData.dailyPerMillion;

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
              data: this.chartType == 'Doses' ? totalDoses : dailyPerMillion,
              backgroundColor: '#3B82F6',
              borderColor: '#3B82F6',
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

            text: ` ${
              this.chartType == 'Doses'
                ? 'Total Doses Administered'
                : 'Daily Doses Per Million'
            } in ${this.currentCountry}`,
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
                  callback: function(value, index, values) {
                    if (value >= 1000000000) {
                      return (
                        (value / 1000000000).toFixed(1).replace(/\.0$/, '') +
                        'B'
                      );
                    }
                    if (value >= 1000000) {
                      return (
                        (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
                      );
                    }
                    if (value >= 1000) {
                      return (
                        (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
                      );
                    }
                    return value;
                  },
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
