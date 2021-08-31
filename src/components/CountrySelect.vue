<template>
  <select
    @change="onChange"
    v-model="selected"
    class="text-sm form-select w-3/4 m-auto block  border p-3 rounded shadow-md"
  >
    <option disabled value="0">Please select Country</option>
    <option v-for="country in countries" :value="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CountrySelect',
  props: ['countries'],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find((item) => item.ID === this.selected);
      this.$emit('get-country', country);
    },
  },
};
</script>
