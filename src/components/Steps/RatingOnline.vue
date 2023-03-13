<template>
  <div class="rating">
    <div class="rating__wrapper">
      <div class="rating__card rating-card" v-for="card in cards" :key="card.id">
        <div class="rating-card__wrapper">
          <div class="rating-card__logo">
            <img src="@/assets/img/logo-1.png">
          </div>
          <div class="rating-card__limit">{{card.limit}}</div>
          <div class="rating-card__requirement">
            <div class="rating-card__requirement-card">
              <div class="rating-card__requirement-text">Срок (дней)</div>
              <div class="rating-card__requirement-name">7 - 30</div>
            </div>
            <div class="rating-card__requirement-card">
              <div class="rating-card__requirement-text">Возраст</div>
              <div class="rating-card__requirement-name">18 - 75</div>
            </div>
          </div>
        </div>
        <button class="rating-card__button">Получить деньги</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 0,
          limit: 'До 30 000 руб'
        },
        {
          id: 1,
          limit: 'До 30 000 руб'
        },
        {
          id: 2,
          limit: 'До 15 000 руб'
        },
        {
          id: 3,
          limit: 'До 100 000 руб'
        },
        {
          id: 4,
          limit: 'До 30 000 руб'
        },
        {
          id: 5,
          limit: 'До 100 000 руб'
        },
        {
          id: 6,
          limit: 'До 100 000 руб'
        },
        {
          id: 7,
          limit: 'До 30 000 руб'
        },

      ]
    }
  }
}
</script>

<style lang="scss">
  .rating {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 20px;
    }
    &-card {
      width: 24%;
      text-align: center;
      &__wrapper {
        padding: 20px 30px;
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 29px;
        text-align: center;
      }
      &__limit {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      &__requirement {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        &-card {
          text-align: left;
        }
        &-text {
          font-size: 14px;
          margin-bottom: 15px;
        }
        &-name {
          font-weight: 700;
        }
      }
      &__button {
        position: relative;
        top: -15px;
        padding: 10px 20px;
        background: #6AAF5F;
        border-radius: 12px;
        font-size: 20px;
        font-weight: 700;
      }

    }
  }
  @media (max-width: 1440px) {
    .rating {
      &-card {
        width: 32%;
        &__limit {
          font-size: 24px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .rating {
      &-card {
        width: 48%;
      }
    }
  }
  @media (max-width: 768px){
    .rating {
      &-card {
        width: 100%;
      }
    }
  }
  @media (max-width: 460px) {
    .rating {
      &-card {
        &__limit {
          font-size: 20px;
        }
      }
    }
  }
</style>