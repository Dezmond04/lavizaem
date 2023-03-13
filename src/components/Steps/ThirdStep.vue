<template>
  <div class="step-inputs__wrapper">
    <input class="step-inputs__input" type="text" placeholder="1. Серия и номер паспорта">
    <input class="step-inputs__input" type="text" placeholder="2. Код подразделения">
    <input class="step-inputs__input" type="text" placeholder="3. Дата выдачи">
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