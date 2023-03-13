ThirdStep.vue<template>
  <div class="step-inputs__wrapper">
    <input class="step-inputs__input" type="text" placeholder="1. Адрес регистрации">
    <input class="step-inputs__input" type="text" placeholder="2. Город">
    <input class="step-inputs__input" type="text" placeholder="3. Улица">
    <input class="step-inputs__input" type="text" placeholder="4. Дом">
    <input class="step-inputs__input" type="text" placeholder="5. Квартира">
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
  .step-inputs {
    &__input {
      background: #FFFFFF;
      border-radius: 33px;
      font-size: 24px;
    }
  }
</style>