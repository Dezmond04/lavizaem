<template>
  <div class="card-verification">
    <div class="card-verification__wrapper">
      <div class="card-verification__card">
        <input type="text" class="card-verification__card-input" placeholder="Номер карты">
        <div class="card-verification__card-icon">
          <img src="@/assets/img/icon/card.svg">
        </div>
        <button class="card-verification__paste">
          <span>Вставить</span>
          <div class="card-verification__paste-icon">
            <img src="@/assets/img/icon/paste.svg">
          </div>
        </button>
      </div>
      <div class="card-verification__bottom">
        <div class="card-verification__date">
          <input type="text" class="card-verification__date-input" placeholder="ММ / ГГ">
          <div class="card-verification__date-icon">
            <img src="@/assets/img/icon/date.svg">
          </div>
        </div>
        <div class="card-verification__cvv">
          <input type="text" class="card-verification__cvv-input" placeholder="CVV">
          <div class="card-verification__cvv-icon">
            <img src="@/assets/img/icon/cvv.svg">
          </div>
        </div>
      </div>
      <div class="card-verification__btn-wrapper">
        <button  class="card-verification__btn"
                 @click="$emit('nextStep')"
        >
          <div class="card-verification__btn-icon">
            <img src="@/assets/img/icon/basket.svg">
          </div>
          <span>Верифицировать карту</span>
        </button>
      </div>
      <div class="card-verification__pay-wrapper">
        <div class="card-verification__pay-image"
             v-for="pay in pays" :key="pay.id"
        >
          <img :src='pay.image' alt="pay-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pays: [
        {
          id: 0,
          image: require('../../assets/img/pay/pay-1.jpg'),
        },
        {
          id: 1,
          image: require('../../assets/img/pay/pay-2.jpg') ,
        },
        {
          id: 2,
          image: require('../../assets/img/pay/pay-3.jpg') ,
        },
        {
          id: 3,
          image: require('../../assets/img/pay/pay-4.jpg') ,
        },
        {
          id: 4,
          image: require('../../assets/img/pay/pay-5.jpg') ,
        },
        {
          id: 5,
          image: require('../../assets/img/pay/pay-6.jpg') ,
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.card-verification {
  &__wrapper {
    max-width: 980px;
    margin: 0 auto;
  }
  &__card {
    position: relative;
    margin-bottom: 20px;
    &-input {
      margin-bottom: 0;
      padding: 25px 240px 25px 85px;
    }
    &-icon {
      position: absolute;
      width: 45px;
      left: 25px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__paste{
    position: absolute;
    padding: 10px 25px;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    background-color: #fed330 ;
    &-icon {
      width: 35px;
      margin-left: 10px;
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  &__date {
    position: relative;
    width: 48%;
    &-input {
      padding: 25px 25px 25px 85px;
      margin-bottom: 0;
    }
    &-icon {
      position: absolute;
      left: 25px;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
    }
  }
  &__cvv {
    position: relative;
    width: 48%;
    &-input {
      padding: 25px 25px 25px 85px;
      margin-bottom: 0;
    }
    &-icon {
      position: absolute;
      left: 25px;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 20px;
    padding: 15px 25px;
    background: linear-gradient(0deg, rgba(215, 214, 214, 0.74), rgba(215, 214, 214, 0.74)), rgba(170, 160, 160, 0.74);
    border: 1px solid #000000;
    border-radius: 16px;
    &-icon {
      width: 35px;
      margin-right: 10px;
    }
    &-wrapper {
      margin-bottom: 40px;
    }
  }
  &__pay {
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-image {
      width: 15%;
      -webkit-border-radius: 16px;
      -moz-border-radius: 16px;
      & img {
        border-radius: 32px;
      }
    }
  }
}
@media (max-width: 768px) {
  .card-verification {
    &__paste {
      padding: 10px 15px;
      font-size: 16px;
      right: 15px;
      & span {
        display: none;
      }
      &-icon {
        display: flex;
        width: 20px;
        margin: 0;

      }
    }
    &__card {
      &-input {
        font-size: 16px;
        padding: 20px 65px 20px 60px;
      }
      &-icon {
        display: flex;
        width: 25px;
        left: 20px;
      }
    }
    &__date {
      &-input {
        padding: 20px 20px 20px 55px;
        font-size: 16px;
      }
      &-icon {
        display: flex;
        width: 25px;
        left: 20px;
      }
    }
    &__cvv {
      &-input {
        padding: 20px 20px 20px 55px;
        font-size: 16px;
      }
      &-icon {
        display: flex;
        width: 25px;
        left: 20px;
      }
    }
    &__btn {
      &-icon {
        width: 25px;
      }
    }
  }
}
</style>