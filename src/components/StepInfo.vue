<template>
  <div class="step__info step-info">
    <div class="step-info__top">
      <div class="step-info__get">
        <div class="step-info__get-text">Вы получите</div>
        <div class="step-info__get-sum"> {{sum}} руб </div>
      </div>
      <div class="step-info__days">
        <div class="step-info__days-text">На срок</div>
        <div class="step-info__days-sum"> {{days}} дня </div>
      </div>
      <div class="step-info__line"></div>
      <div class="step-info__return">
        <div class="step-info__return-text">Вернуть</div>
        <div class="step-info__return-sum"> {{ returnSum }} </div>
      </div>
      <div class="step-info__time">
        <div class="step-info__time-text">До (включительно)</div>
        <div class="step-info__time-sum"> {{ returnTime }} </div>
      </div>
    </div>
    <div class="step-info__bottom">
      <div class="step-info_help">
        <div class="step-info__help-question">
          Нужна помощь?
        </div>
        <div class="step-info__help-text">
          Вы можете связаться с нами в любое время
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: '2000',
      days: '2',
      returnSum: "2200",
      returnTime: '12.03.2023'
    }
  }
}
</script>


<style lang="scss" scoped>

</style>