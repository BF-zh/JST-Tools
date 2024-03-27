<script setup lang="ts">
import ComponentTag from './ComponentTag.vue'

const emits = defineEmits(['close'])

const [peek, togglePeek] = useToggle(false)
</script>

<template>
  <div class="settings-panel" :class="{ peek }">
    <div class="settings-panel__header">
      <div class="settings-panel__header-title">
        <i i-carbon:settings t-icon />
        <span>设置</span>
      </div>
      <div flex gap-sm>
        <i
          i-carbon:view t-icon
          title="透视"
          @mouseenter="() => togglePeek(true)"
          @mouseleave="() => togglePeek(false)"
        />
        <i i-carbon:close t-icon @click="emits('close')" />
      </div>
    </div>
    <div class="settings-panel__body">
      <div class="aside">
        <ComponentTag />
      </div>
      <div class="main">
        123124
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.settings-panel {
  --aside-width:40px;
  --uno: h-[calc(100vh-120px)] w-sm bg-white shadow-lg transition-all duration-300 border-(solid 1px gray-300) rounded-md flex flex-col;
  &__header {
    --uno: flex justify-between border-(b-1 b-solid b-gray-300) p-xs;
    &-title {
      --uno: flex items-center space-x-3px text-lg font-bold c-black;
    }
  }
  &.peek {
    --uno: opacity-5;
  }

  &__body {
    --uno: flex flex-1;

    .aside {
      --uno: w-[var(--aside-width)]  relative;
    }
    .main {
      --uno: flex-1 p-xs;
    }
  }
}
</style>
