<template lang="pug">
  p.message {{message}}
</template>

<script>
  export default {
    name: 'root',

    data() {
      return {
        message: 'Hello TopLN.ru',
      };
    },
  }
</script>

<style lang="scss">
  .message {
    text-align: center;
  }
</style>
