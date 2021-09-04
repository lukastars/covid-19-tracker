<template>
  <div id="app">
    <Header />
    <div class="container ">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
