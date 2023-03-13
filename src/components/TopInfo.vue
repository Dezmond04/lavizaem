<template>
  <div class="check-number">
    <div class="container">
      <h1 class="check-number__title">Мгновенный займ. Быстрая заявка</h1>
      <div class="check-number__info">Круглосуточно</div>
      <div class="check-number__wrapper">
        <div class="check-number__count">{{ step }}</div>
        <h2 class="check-number__subtitle"> {{ subtitle }} </h2>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    step: {
      type: Number,
      require: true,
    },
    subtitles: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {

    };
  },
  computed: {
    subtitle() {
      return this.subtitles[this.step-1]
    },
  }
};
</script>

<style lang="scss" scoped>

</style>