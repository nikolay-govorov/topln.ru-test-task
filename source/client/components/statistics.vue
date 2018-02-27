<template lang="pug">
  div
    .message(v-if="loading.error")
      | Error loading statistics

    .message(v-else-if="!user.id")
      | Enter your user ID

    .message(v-else-if="!timePeriod.start || !timePeriod.end")
      | Enter your time period

    .message(v-else-if="!loading.loaded")
      | Loading...

    .message(v-else-if="!user.statistics.length")
      | There is no information available for the selected period

    .statistics(v-else)
      .statistics_table Table

      .statistics_chart Chart
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Statistics',

    computed: mapState(['user', 'loading', 'timePeriod']),
  };
</script>

<style lang="scss">
  .message {
    font-size: var(--text-size-l);
  }

  .statistics {
    display: grid;
    grid-gap: var(--step);
    grid-template-columns: auto 1fr;
  }

  .statistics_table {

  }

  .statistics_chart {

  }
</style>
