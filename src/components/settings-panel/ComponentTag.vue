<script setup lang="ts">
const [open, toggleOpen] = useToggle(false)
</script>

<template>
  <div class="component-tag" :class="{ open }">
    <div
      class="component-tag__wrapper"
      :class="{ selected: open }"
      @mouseenter="toggleOpen(true)"
      @mouseleave="toggleOpen(false)"
    >
      <div class="component-tag__icon">
        <i i-carbon:time t-icon size-18px />
      </div>
      <span class="text-nowrap text-sm">最近</span>
    </div>
  </div>
</template>

<style lang="scss">
.component-tag{
  --icon-width:var(--aside-width);
  --uno: size-full border-(r-1px r-solid r-gray-300) transition-all duration-300 ease-in-out of-hidden absolute;

  &.open{
    --uno: w-8em;
  }

  &__wrapper{
    --uno: flex items-center gap-2px p-2px  cursor-pointer relative;

    &.selected{
      --uno: bg-gray-100;
    }
    &:hover{
      --uno: bg-gray-100;
    }
  }
  &__icon{
    --uno: w-[var(--icon-width)] aspect-[1] flex-center-sm shrink-0;
  }
}
</style>
