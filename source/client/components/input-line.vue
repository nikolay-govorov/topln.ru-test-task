<template lang="pug">
  .input-line
    input.input-line_input(v-model="id" placeholder="User ID" type="number")

    v-date-picker.input-line_data-picker(mode="range" v-model="selectedDate" show-caps)
      img.input-line_icon(@click="showCalendar = true" src="../assets/images/calendar.svg")
</template>

<script>
  export default {
    name: 'InputLine',

    data() {
      return {
        id: '',

        selectedDate: {
          start: new Date(),
          end: new Date()
        },

        showCalendar: false,
      };
    },

    watch: {
      id() {
        this.checkID()
      }
    },

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
    grid-template-columns: minmax(280px, 760px) 1fr;
    grid-gap: var(--step);
    align-items: center;
    height: calc(var(--step) * 5);

    &_input {
      height: 100%;
      font-size: var(--text-size-m);
      padding: 0 var(--step);
    }

    &_data-picker {
      display: flex !important;
      align-items: center;
    }

    &_icon {
      cursor: pointer;
      margin-left: 2px;
      height: calc(var(--step) * 4.5);
    }
  }
</style>
