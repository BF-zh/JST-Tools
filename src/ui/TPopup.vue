<script setup lang="ts">
const model = defineModel({ type: Boolean, default: false })
const popup = ref<HTMLElement>()
onClickOutside(popup, () => {
  model.value = false
}, {
  detectIframe: true,
})
</script>

<template>
  <div
    ref="popup" class="bf-popup" :class="{
      open: model,
    }" v-bind="$attrs"
  >
    <div class="bf-popup__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.bf-popup {
  --uno: absolute z-2000 top-0 rounded-md transition-all duration-300 ease-in-out translate-hidden-x-100 opacity-0 ;

  &__container {
    --uno: flex items-center justify-center;
  }

  &.open {
    --uno: opacity-100 translate-show-x-0;
  }
}
</style>
