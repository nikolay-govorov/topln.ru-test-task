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
      table.statistics_table
        tbody
          tr(:key="record.id" v-for="record in stats")
            td CPA/ДОХОД
            td {{ record.event_value }}

      div
        chart(:data="chartData")
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  import Chart from './chart.vue';

  export default {
    name: 'Statistics',

    components: { Chart },

    computed: {
      ...mapGetters(['currentStats', 'statisticsForLastMonth']),

      ...mapState(['user', 'loading', 'timePeriod']),

      stats() {
        return this.currentStats.map(record => ({
          ...record,
          event_value: record.event_value.toLocaleString('ru-RU', {
            style: 'currency', currency: 'RUB',
          }),
        }));
      },

      chartData() {
        const COUNT = 30;

        const sample = this.user.statistics
          .filter(({ date }) => (Date.now() - new Date(date).getTime()) / 3600000 / 24 <= COUNT)
          .reduce((all, record) => {
            const date = new Date(record.date).toISOString().split('T')[0];

            if (!all[date]) {
              all[date] = [];
            }

            all[date].push(record);

            return all;
          }, {});

        const { count, wallet } = Array.from(new Array(COUNT))
          .map((_, index) => Date.now() - (index * 24 * 60 * 60 * 1000)).reverse()
          .map(date => new Date(date).toISOString().split('T')[0])
          .map(date => ({ date, sample: sample[date] || [] }))
          .map(({ sample: daySample }) => {
            let dayCount = 0;
            let dayWallet = 0;

            daySample.forEach(({ event, event_value: value }) => {
              if (['LINK_VISITOR', 'REGISTRATION'].includes(event)) {
                dayCount += 1;
              } else if (event === 'PAYMENT') {
                dayWallet += value;
              }
            });

            return ({ count: dayCount, wallet: dayWallet });
          })
          .reduce((s, day) => {
            s.count.push(day.count);
            s.wallet.push(day.wallet);

            return s;
          }, { count: [], wallet: [] });

        return {
          labels: Array.from(new Array(COUNT)).map((_, index) => index),

          datasets: [
            {
              yAxisID: 'count',
              label: 'Count',
              borderColor: '#FC2525',
              data: count,
            }, {
              yAxisID: 'wallet',
              label: 'Wallet',
              borderColor: '#05CBE1',
              data: wallet,
            },
          ],
        };
      },
    },
  };
</script>

<style lang="scss">
  .message {
    font-size: var(--text-size-l);
  }

  .statistics {
    display: grid;
    grid-gap: var(--step);
    grid-template-columns: minmax(auto, 380px) 1fr;
  }

  .statistics_table {
    width: 100%;
    border: 1px solid #eee;

    tr:nth-child(2n) {
      background-color: #eee;
    }

    td {
      padding: var(--step);

      &:last-child {
        text-align: right;
      }
    }
  }
</style>
