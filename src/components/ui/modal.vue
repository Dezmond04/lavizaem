<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal__content">
        <div class="modal__header">
          <span class="modal__title"> {{ title }} </span>
          <button
              class="modal__close"
              @click="$emit('close')"
          ></button>
        <div class="modal__body">
          <slot name="body">
            Default body
          </slot>
        </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      if(e.keyCode === 27) this.$emit('close')
    })
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      -webkit-transition: opacity 0.3s ease;
      -moz-transition: opacity 0.3s ease;
      -ms-transition: opacity 0.3s ease;
      -o-transition: opacity 0.3s ease;
      transition: opacity 0.3s ease;
      z-index: 10;
    }
  }
</style>