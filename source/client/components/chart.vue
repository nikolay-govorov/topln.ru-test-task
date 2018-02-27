<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,

    props: ['data'],

    mounted () {
      this.renderChart(this.data, {
        scales: {
          yAxes: [
            {
              type:"linear",
              id: "count",
              display: true,
              position: "left",
            },
            {
              type:"linear",
              id: "wallet",
              display: true,
              position: "right",
              ticks: {
                callback: label => label.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
              },
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false
      })
    },
  };
</script>

<style lang="scss">

</style>
