<template>
    <div class="wrapper-content">
      <section class="main-banner">
        <div class="container">
          <div class="main-banner__wrapper">
            <div class="main-banner__left">
              <div class="main-banner__range main-range">
                <div class="main-range__min-max">
                  <div class="main-range__min">1000</div>
                  <div class="main-range__max">30 000</div>
                </div>
                <h3 class="main-range__title">Сумма займа</h3>
                <div class="main-range__total">{{ total }}</div>
                <div class="main-range__slider">
                  <input
                      type="range"
                      class="main-range__input"
                      min="1000"
                      max="30000"
                      step="500"
                      v-model.number="total"
                  >
                </div>
                <div class="main-range__days">
                  <button class="main-range__days-btn"
                          v-for="day in days"
                          :key="day.id"
                          :value="day.value"
                          @click="returnDays"
                  >{{day.day}}</button>
                </div>
                <div class="main-range__return">
                  К возврату <span>{{ returnTotal }}</span> до <span>{{ returnData }}</span>
                </div>
              </div>
              <div class="main-range__get">
                <button class="main-range__get-btn">Оформить заявку</button>
              </div>
            </div>
            <div class="main-banner__right">
              <div class="main-banner__card main-banner-card">
                <div class="main-banner-card__image">
                  <img src="@/assets/img/icon/fast-time.svg" alt="Icon">
                </div>
                <div class="main-banner-card__content">
                  <div class="main-banner-card__name">Быстрое оформление</div>
                  <div class="main-banner-card__text">
                    Система оценит вашу анкету
                    и подберет самые выгодные
                    предложение конкретно для Вас
                  </div>
                </div>
              </div>
              <div class="main-banner__card main-banner-card">
                <div class="main-banner-card__image">
                  <img src="@/assets/img/icon/avatar-ico.svg" alt="Icon">
                </div>
                <div class="main-banner-card__content">
                  <div class="main-banner-card__name">Простая заявка</div>
                  <div class="main-banner-card__text">
                    Удобно и просто.
                    Нужен только телефон и паспорт
                  </div>
                </div>
              </div>
              <div class="main-banner__card main-banner-card">
                <div class="main-banner-card__image">
                  <img src="@/assets/img/icon/ico-check.svg" alt="Icon">
                </div>
                <div class="main-banner-card__content">
                  <div class="main-banner-card__name">Высокий % одобрения</div>
                  <div class="main-banner-card__text">
                    С любой кредитной историей
                  </div>
                </div>
              </div>
              <div class="main-banner__first">Первый займ <span>без процентов</span></div>
              <div class="main-banner__offer">Предложение у вас в 16:29</div>
            </div>
          </div>
          <div class="step__check">
            <label class="step__check-label">
              <input type="checkbox" class="step__check-checkbox">
              <span class="step__check-checker"></span>
              <span class="step__check-text">
                Мне исполнилось 18 лет, я не являюсь получателем президентских выплат на детей, согласен с договором публичной оферты и даю согласие на обработку персональных данных, получение рекламных материалов, ознакомлен с «тарифными планами».
              </span>

            </label>
          </div>
        </div>
      </section>
      <section class="how-work">
        <div class="container">
          <h2 class="how-work__title title">Как это работает?</h2>
          <div class="how-work__wrapper">
            <div class="how-work__card" v-for="card in workCards" :key="card.id">
              <div class="how-work__image" >
                <img :src="card.img" alt="">
              </div>
              <div class="how-work__text">{{ card.text }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="get">
        <div class="container">
          <div class="get__title title">Способы получения займа</div>
          <div class="get__wrapper">
            <div class="get__image" v-for="payImage in pays" :key="payImage.id">
              <img :src="payImage.image" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="about-us">
        <div class="container">
          <h2 class="about-us__title title">О нас</h2>
          <div class="about-us__wrapper">
            <div class="about-us__right">
              <ul class="about-us__list">
                <li class="about-us__item" v-for="aboutList in aboutLists" :key="aboutList.id">
                  <div class="about-us__image" >
                    <img :src="aboutList.image" alt="">
                  </div>
                  <div class="about-us__text">{{aboutList.text}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="question">
        <div class="container">
          <h2 class="question__title title">Вопрос - ответ</h2>
          <div class="question__spollers">
            <div class="question__spoller" v-for="question in questions" :key="question.id">
              <button
                  @click="question.open = !question.open"
                  class="question__spoller-title">
                <span>{{ question.title }}</span>
                <img src="@/assets/img/icon/arrow.svg" alt="icon">
              </button>
                <div v-show="question.open" class="question__spoller-body"> {{question.body}}</div>
            </div>
          </div>
        </div>
      </section>
      <About/>
    </div>
</template>

<script>
import About from "@/components/About.vue";

export default {
  components: {About},
  data() {
    return {
      total: 0,
      totalDays: 5,
      returnData: new Date().toLocaleDateString(),
      oneDay: 86400000,
      days: [
        {
          id: 0,
          day: '5 дней',
          value: 5,
        },
        {
          id: 1,
          day: '10 дней',
          value: 10,

        },
        {
          id: 2,
          day: '15 дней',
          value: 15,

        },
        {
          id: 3,
          day: '20 дней',
          value: 20,
        },
        {
          id: 4,
          day: '25 дней',
          value: 25,
        },
        {
          id: 5,
          day: '30 дней',
          value: 30,
        },
      ],
      workCards: [
        {
          id: 0,
          img: require('../assets/img/icon/man.svg'),
          text: 'Заполните анкету на сайте'
        },
        {
          id: 1,
          img: require('../assets/img/icon/checked.svg'),
          text: 'Подтверждаете условия'
        },
        {
          id: 0,
          img: require('../assets/img/icon/graph.svg'),
          text: 'Отправляем заявки в лучшие МФО'
        },
        {
          id: 0,
          img: require('../assets/img/icon/money.svg'),
          text: 'Получаете деньги'
        },
      ],
      pays: [
        {
          id: 0,
          image: require('../assets/img/pay/pay-1.jpg'),
        },
        {
          id: 1,
          image: require('../assets/img/pay/pay-2.jpg') ,
        },
        {
          id: 2,
          image: require('../assets/img/pay/pay-3.jpg') ,
        },
        {
          id: 3,
          image: require('../assets/img/pay/pay-4.jpg') ,
        },
        {
          id: 4,
          image: require('../assets/img/pay/pay-5.jpg') ,
        },
        {
          id: 5,
          image: require('../assets/img/pay/pay-6.jpg') ,
        },
      ],
      aboutLists: [
        {
          id:0,
          image: require('../assets/img/icon/check.svg'),
          text: 'Помогаем получить деньги в сложных ситуациях'
        },
        {
          id:1,
          image: require('../assets/img/icon/time.svg'),
          text: 'Быстрое оформление'
        },
        {
          id:2,
          image: require('../assets/img/icon/phone.svg'),
          text: 'Техподдержка на связи 24/7'
        },
        {
          id:3,
          image: require('../assets/img/icon/hands.svg'),
          text: 'Наши клиенты - наши друзья'
        },
      ],
      questions: [
        {
          id: 0,
          title: 'Как долго обрабывается заявка?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci blanditiis enim expedita fugiat incidunt ipsa magnam magni minus quisquam repellendus similique temporibus, voluptatem?',
          open: false,
        },
        {
          id: 1,
          title: 'Могут ли мне отказать в выдаче займа?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci blanditiis enim expedita fugiat incidunt ipsa magnam magni minus quisquam repellendus similique temporibus, voluptatem?',
          open: false,
        },
        {
          id: 2,
          title: 'Какой банк действителен для получения займа?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci blanditiis enim expedita fugiat incidunt ipsa magnam magni minus quisquam repellendus similique temporibus, voluptatem?',
          open: false,
        },
        {
          id: 3,
          title: 'Как получить деньги?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci blanditiis enim expedita fugiat incidunt ipsa magnam magni minus quisquam repellendus similique temporibus, voluptatem?',
          open: false,
        },
        {
          id: 4,
          title: 'Как погасить полученный займ?',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci blanditiis enim expedita fugiat incidunt ipsa magnam magni minus quisquam repellendus similique temporibus, voluptatem?',
          open: false,
        },

      ],
    }
  },
  computed: {
    returnTotal() {
      return this.total * 1.2
    },
  },
  methods: {
    returnDays(e) {
      this.totalDays = e.target.value;
      this.currentDate();
    },
    currentDate() {
      let dateNow = new Date().getTime()

      let dateReturn = +dateNow + (this.totalDays * this.oneDay)

      this.returnData = new Date(dateReturn).toLocaleDateString()
    },
    mounted() {
      this.currentDate();
    },
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 90px 0;
}
.title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}
.main-banner {
  background: #DEF9C4;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  &__left {
    width: 59%;
    background: #FFFFFF;
    border-radius: 32px;
  }
  &__right {
    width: 39%;
  }
  &-card {
    display: flex;
    align-items: flex-start;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &__image {
      width: 40px;
      flex-shrink: 0;
      margin-right: 20px;
    }
    &__name {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 10px;

    }
    &__text {
      font-size: 18px;
      font-weight: 500;
    }
  }
  &__first {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 50px;
    & span {
      color: #FD0404;
    }
  }
  &__offer {
    font-size: 18px;
    font-weight: 600;
  }
}
.main-range {
  padding: 10px 25px 0 25px;
  &__min-max {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  &__min, &__max {
    font-size: 16px;
    font-weight: 500;
  }
  &__title {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
  }
  &__total {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
  }

  &__input {
    padding: 0;
    cursor: pointer;
  }
  &__days {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    &-btn {
      width: 16%;
      padding: 25px;
      background: #FFFFFF;
      border: 1px solid #000000;
      border-radius: 34px;
    }
  }
  &__return {
    font-size: 18px;
    text-align: center;
    margin-bottom: 50px;
  }
  &__get {
    &-btn {
      width: 100%;
      border-bottom-left-radius: 32px;
      border-bottom-right-radius: 32px;
      padding: 35px 40px;
      background: #092704;
      color: #FFFFFF;
      font-size: 28px;
    }
  }
}
.how-work {
  &__title {
    margin-bottom: 50px;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__card {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  &__image {
    height: 75px;
    margin-bottom: 20px;
    & img {
      object-fit: contain;
      height: 100%;
    }
  }
  &__text {
    font-size: 24px;
    font-weight: 600;
  }
}
.get {
  background: #DEF9C4;
  &__title {
    margin-bottom: 50px;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 50px;
  }
  &__image {
    width: 30%;
    & img {
      width: 100%;
      object-fit: contain;
      -webkit-border-radius: 32px;
      -moz-border-radius: 32px;
      border-radius: 32px;
    }
  }
}
.about-us {
  &__title {
    margin-bottom: 50px;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;

  }

  &__right {
    width: 100%;
    border: 4px solid #0E981B;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 30px;
    margin: 0 auto;
  }
  &__list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 40px;
  }
  &__item {
    width: 45%;
    display: flex;
    align-items: flex-start;

  }
  &__image {
    width: 50px;
    margin-right: 20px;
    flex-shrink: 0;
    & img {
      width: 100%;
      object-fit: contain;
    }
  }
}
.question {
  &__title {
    margin-bottom: 50px;
  }
  &__spoller {
    border: 2px solid rgba(46, 79, 48, 0.29);
    border-radius: 28px;
    padding: 10px 30px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      text-align: left;
      background-color: transparent;
      border: none;
      & img {
        width: 40px;
      }

    }
    &-body {
      padding: 10px 0;
    }
  }
}
.about {
  padding: 90px 0;
  background-color: #DEF9C4;
}
@media (max-width: 1300px) {
  .main-range {
    &__days {
      &-btn {
        padding: 15px;
      }
    }
  }
  .about-us {
    &__image {
      width: 40px;
    }
  }
}
@media (max-width: 992px) {
  .main-banner {

    &__wrapper {
      flex-direction: column;
    }
    &__left {
      width: 100%;
      margin-bottom: 30px;
    }
    &__right {
      width: 60%;
      margin: 0 auto;
    }
  }
  .how-work {
    &__image {
      height: 40px;
    }
    &__text {
      font-size: 22px;
    }
  }
  .about-us {
    &__list {
      flex-direction: column;
      row-gap: 0;
    }
    &__right {
      max-width: 768px;
      margin: 0 auto;
    }
    &__item {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 20px;
      }

    }
    &__image {
      width: 30px;
      margin-right: 10px;
    }
  }
}
@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }
  .title {
    font-size: 28px;
  }
  .main-banner {

    &__right {
      width: 100%;
    }
    &-card {
      &__name {
        font-size: 18px;
      }
      &__text {
        font-size: 14px;
      }
    }
    &__first {
      font-size: 18px;
    }
    &__offer {
      font-size: 14px;
    }
  }
  .main-range {
    &__min-max {
      margin-bottom: 30px;
    }
    &__title {
      font-size: 22px;
      margin-bottom: 20px;
    }
    &__total {
      font-size: 25px;
      margin-bottom: 20px;
    }
    &__days {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      &-btn {
        width: 75px;
        padding: 20px 10px;
        font-size: 18px;

      }
    }
    &__return {
      font-size: 16px;
      margin-bottom: 20px;
    }
    &__get {
      &-btn {
        font-size: 22px;
        padding: 25px 20px;
      }
    }
  }
  .how-work {
    &__wrapper {
      flex-wrap: wrap;
      row-gap: 30px ;
    }
    &__card {
      width: 45%;
    }
    &__text {
      font-size: 18px;
    }
  }
  .about-us {
    &__wrapper {
      flex-direction: column;
    }
    &__left {
      width: 100% ;
      margin-bottom: 20px;
      padding: 15px;
    }
    &__right {
      width: 100%;
      padding: 15px;
    }
    &__text {
      font-size: 18px;
    }
  }
  .question {
    &__spoller {
      padding: 10px 15px;
      &-title {
        font-size: 16px;
        & img {
          width: 30px;
        }
      }
      &-body {
        font-size: 16px;
      }
    }
  }
  .about {
    margin-top: 0;
    padding: 60px 0;
  }
}

</style>