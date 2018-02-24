<template lang="pug">
  .wrapper
    input-line

    statistics
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
  .wrapper {}
</style>
