<template>
  <header class="text-center text-gray-800 text-white p-4 mb-10 ">
    <div
      class="flex flex-row justify-center align-center m-auto text-3xl md:text-5xl font-extrabold mb-3"
    >
      <img :src="logo" class="w-20" />
      <h1 class="mt-auto mb-auto ml-10">Covid-19 Tracker</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      logo: require('../assets/covid-19.png'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
