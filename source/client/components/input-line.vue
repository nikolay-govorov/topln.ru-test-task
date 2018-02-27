<template lang="pug">
  .input-line
    input.input-line_input(v-model="id" placeholder="User ID" type="number")

    img.input-line_icon(@click="showCalendar = true" src="../assets/images/calendar.svg")

    // transition(name="calendar-fade")
      date-picker(@close="showCalendar = false" v-show="showCalendar" v-model="date")
</template>

<script>
  import DatePicker from 'vue-md-date-picker';

  export default {
    name: 'InputLine',

    data() {
      return {
        id: '',

        date: null,
        showCalendar: false,
      };
    },

    watch: {
      id() {
        this.checkID()
      }
    },

    components: { DatePicker },

    methods: {
      checkID() {
        this.$store.dispatch('checkUserID', this.id)
      },
    },
  };
</script>

<style lang="scss">
  .input-line {
    display: grid;
    grid-template-columns: minmax(280px, 760px) min-content min-content;
    grid-gap: var(--step);
    align-items: center;
    height: calc(var(--step) * 5);

    &_icon,
    &_input {
      height: 100%;
    }

    &_input {
      font-size: var(--text-size-m);
      padding: 0 var(--step);
    }

    &_icon {
      cursor: pointer;
    }
  }
</style>
