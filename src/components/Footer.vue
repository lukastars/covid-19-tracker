<template>
  <footer class=" text-center mt-6  p-5 bg-gray-700">
    <p class="font-bold font-mono text-gray-400">
      Made with ❤️ by Ali © {{ getYear }}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  computed: {
    getYear: function() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>
