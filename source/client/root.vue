<template lang="pug">
  .wrapper
    input-line.wrapper_input-line

    statistics.wrapper_statistics
</template>

<script>
  import InputLine from './components/input-line';
  import Statistics from './components/statistics';

  export default {
    name: 'Root',

    data() {
      return {};
    },

    components: { InputLine, Statistics },
  };
</script>

<style lang="scss">
  .wrapper {
    display: grid;

    grid-template-areas:
      "input-line"
      "statistics";

    grid-gap: calc(var(--step) * 2);
  }

  .wrapper_input-line {
    grid-area: input-line;
  }

  .wrapper_statistics {
    grid-area: statistics;
  }
</style>
