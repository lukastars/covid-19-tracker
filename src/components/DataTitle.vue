<template>
  <div class="text-center">
    <h2 class="text-2xl font-bold  flex justify-center align-center">
      <p class="mr-2 text-gray-800">{{ text }}</p>
      <div class="mt-auto mb-auto">
        <img class="w-7 rounded-sm shadow-md" :src="currentFlag" />
      </div>
    </h2>
    <div class="text-1xl mt-4 mb-10">
      <p class="text-gray-700">{{ timestamp }}</p>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';
export default {
  name: 'DataTitle',
  props: ['text', 'dataDate', 'countries', 'currentCountry'],
  data() {
    return {
      currentFlagLink: '',
    };
  },
  computed: {
    currentFlag: function() {
      const flagLink = this.countries.find(
        (item) => item.name === this.currentCountry
      );
      return flagLink.flag;
    },
    timestamp: function() {
      const dateUnix = DateTime.fromMillis(parseInt(this.dataDate));
      const dateISO = dateUnix.toISO();
      const date = DateTime.fromISO(dateISO).toFormat('dd MMM yyyy,h:mm:ss a');
      return date;
    },
  },
};
</script>
