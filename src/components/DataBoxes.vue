<template>
  <div class="grid md:grid-cols-2 gap-4">
    <!--Box 1-->
    <div class="w-full m-auto shadow-md bg-white p-10 text-center rounded-lg">
      <h3 class="text-2xl text-gray-600  mb-4">
        <i class="fas fa-hospital-user text-blue-800"></i> Cases
      </h3>

      <div class="text-2xl mb-4 text-blue-800 ">
        <span class="font-bold"
          >New: +{{ numberWithCommas(stats.newCases) }}</span
        >
      </div>

      <div class="text-1xl mb-4">
        <span class="font-bold text-gray-700"
          >Total: {{ numberWithCommas(stats.totalCases) }}
        </span>
      </div>
    </div>

    <!--Box 2-->
    <div class="w-full m-auto shadow-md bg-white p-10 text-center rounded-lg">
      <h3 class="text-2xl text-gray-600  mb-4">
        <i class="fas fa-skull-crossbones text-red-600"></i> Deaths
      </h3>

      <div class="text-2xl text-red-600 mb-4">
        <span class="font-bold"
          >New: +{{ numberWithCommas(stats.newDeaths) }}</span
        >
      </div>

      <div class="text-1xl mb-4">
        <span class="font-bold text-gray-700"
          >Total: {{ numberWithCommas(stats.totalDeaths) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataBoxes',
  props: ['stats'],

  methods: {
    numberWithCommas: function(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>
