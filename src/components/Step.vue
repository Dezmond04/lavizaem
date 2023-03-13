<template>
    <div class="step-inputs">
        <FirstStep v-show="step == 1"/>
        <SecondStep v-show="step == 2"/>
        <ThirdStep v-show="step == 3"/>
        <FourthStep v-show="step ==4"/>
        <FifthStep v-show="step == 5"/>
    </div>
</template>

<script>
import FirstStep from "@/components/Steps/FirstStep.vue";
import SecondStep from "@/components/Steps/SecondStep.vue";
import ThirdStep from "@/components/Steps/ThirdStep.vue"
import FourthStep from "@/components/Steps/FourthStep.vue";
import FifthStep from "@/components/Steps/FifthStep.vue";
import SixthStep from "@/components/Steps/CardVerification.vue";

export default {
  components: {SixthStep, FifthStep, FourthStep, FirstStep, SecondStep, ThirdStep},
  props: {
    step: {
      type: Number,
      require: true,
    }
  },

};
</script>

<style>


</style>