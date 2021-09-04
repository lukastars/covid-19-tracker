<template>
  <div class="grid md:grid-cols-2 gap-4 mt-8">
    <!--Box 1-->
    <div class="w-full m-auto shadow-md bg-white p-10 text-center rounded-lg">
      <h3 class="text-2xl text-gray-600  mb-4">
        <i class="fas fa-syringe text-blue-500"></i> Doses Administered
      </h3>

      <div class="text-2xl mb-4 text-blue-500 ">
        <span class="font-bold"
          >New: +{{ numberWithCommas(stats.lastDayVaccine) }}</span
        >
      </div>

      <div class="text-1xl mb-4">
        <span class="font-bold text-gray-700"
          >Total: {{ numberWithCommas(stats.totalVaccine) }}
        </span>
      </div>
    </div>

    <!--Box 2-->
    <div class="w-full m-auto shadow-md bg-white p-10 text-center rounded-lg">
      <h3 class="text-2xl text-gray-600  mb-4">
        <i class="far fa-chart-bar text-blue-500"></i> Other Statistics
      </h3>

      <div class="text-2xl mb-4 text-blue-500 ">
        <span class="font-bold"
          >Daily Per Million:
          {{ numberWithCommas(stats.dailyPerMillion) }}</span
        >
      </div>

      <div class="text-1xl mb-4">
        <span class="font-bold text-gray-700"
          >Total Per Hundred: {{ numberWithCommas(stats.totalPerHundred) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaccineDataBox',
  props: ['stats'],

  methods: {
    numberWithCommas: function(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>
