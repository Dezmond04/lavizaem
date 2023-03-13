<template>
  <div class="main">

    <TopInfo
        :step='step'
        :subtitles="subtitles"
    />
    <section class="step">
      <InfoMessage v-show="checkStep"/>
      <div class="container">
        <div class="step__wrapper" v-show="checkStep">
          <Step
              :step="step"
          />
          <StepInfo/>
        </div>
        <CardVerification v-show="step == 6" @nextStep="nextStep"/>
        <RatingOnline v-show="step == 7"/>
        <div class="step__check" v-show="checkStep">
          <label class="step__check-label">
            <input type="checkbox" class="step__check-checkbox">
            <span class="step__check-checker"></span>
            <span class="step__check-text">
                Мне исполнилось 18 лет, я не являюсь получателем президентских выплат на детей, согласен с договором публичной оферты и даю согласие на обработку персональных данных, получение рекламных материалов, ознакомлен с «тарифными планами».
              </span>

          </label>
        </div>
        <div class="step__btn-wrapper" v-show="checkStep">
          <button class="step__btn"
                  v-show="checkLength"
                  @click="nextStep"
          >Далее
          </button>
        </div>
      </div>
      <About/>
    </section>
  </div>
</template>


<script>
import HeaderPage from "@/components/HeaderPage.vue";
import TopInfo from "@/components/TopInfo.vue";
import StepInfo from "@/components/StepInfo.vue";
import InfoMessage from "@/components/InfoMessage.vue";
import Step from "@/components/Step.vue";
import About from "@/components/About.vue";
import CardVerification from "@/components/Steps/CardVerification.vue";
import RatingOnline from "@/components/Steps/RatingOnline.vue";

export default {
  components: {RatingOnline, CardVerification, About, Step, InfoMessage, StepInfo, TopInfo, HeaderPage,},

data() {

return {
step: 1,
subtitles: [
'Подтверждение номера телефона',
'Общая информация', 'Паспортные данные', 'Адрес регистрации','Код подтверждения', 'Верификация', 'РЕЙТИНГ ЗАЙМОВ ОНЛАЙН',
],
links: [
{
title: "Главная",
url: "/",
},
{
title: "Заявка",
url: "/order",
},
],

};
},
methods: {
nextStep() {
this.step += 1;
}
},
computed: {
checkLength() {
if (this.subtitles.length > this.step) {
return true
} else {
return false
}
},
checkStep() {
if(this.step == 6 || this.step ==7) {
return false
} else {
return true
}
}
}
};
</script>

<style lang="scss">
.step {
  padding: 40px 0;
  background: #DEF9C4;

  &__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  &__btn {
    width: 100%;
    padding: 20px 40px;
    background: #092704;
    border-radius: 12px;
    color: #FFFFFF;
    font-size: 32px;
  }
}
</style>

