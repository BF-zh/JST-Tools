<script setup lang="ts">
import SettingsPanel from './SettingsPanel.vue'
import WidgetPanel from './WidgetPanel.vue'

const direction = ref<'rtl' | 'ltr'>('ltr')

const [widgetsOpened, toggleWidget] = useToggle(false)
const settingsOpened = ref(true)

/**
 * 打开小部件
 */
function handleToggleWidget() {
  toggleWidget()
  settingsOpened.value = false
}

/**
 * 打开设置
 */
function handleToggleSettings() {
  settingsOpened.value = !settingsOpened.value
  widgetsOpened.value = false
}
/**
 * 切换面板展示方向
 */
function handleToggleDirection(d?: 'rtl' | 'ltr') {
  direction.value = d || (direction.value === 'ltr' ? 'rtl' : 'ltr')
  GM_setValue('direction', direction.value)
  document.body.setAttribute('direction', direction.value)
}
/**
 * 挂载后初始化
 */
onMounted(() => {
  handleToggleDirection(GM_getValue('direction'))
  GM_registerMenuCommand('设置', () => {
    handleToggleSettings()
  })
  GM_registerMenuCommand('功能', () => {
    handleToggleWidget()
  })
})
</script>

<template>
  <div class="bf-setting">
    <div class="sidebar" :class="{ open: !(widgetsOpened || settingsOpened) }">
      <div title="功能" class="icon-button" @click="handleToggleWidget">
        <i i-carbon:assembly-cluster t-icon />
      </div>
      <div title="设置" class="icon-button" @click="handleToggleSettings">
        <i i-carbon:settings t-icon />
      </div>
      <div title="切换布局" class="icon-button" @click="() => handleToggleDirection()">
        <i i-carbon:activity t-icon />
      </div>
    </div>
    <t-popup v-model="settingsOpened" class="bf-settings-panel-popup" fixed>
      <SettingsPanel @close="settingsOpened = false" />
    </t-popup>
    <t-popup v-model="widgetsOpened" class="bf-widgets-panel-popup" fixed>
      <WidgetPanel />
    </t-popup>
  </div>
</template>

<style lang="scss">
.bf-setting {
  --uno: lh-normal text-12px h-[calc(100vh-120px)];

  .sidebar {
    --uno: fixed top-1/2 translate-hidden-x-50 translate-y--1/2 p-sm flex flex-col gap-sm opacity-0;
    &.open{
      --uno: opacity-100;
    }
    .icon-button {
      --uno: p-xs  bg-[#fff] bg-opacity-2 cursor-pointer c-black/50 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110;

      &:hover {
        --uno: shadow-lg bg-opacity-100 rounded-md backdrop-blur-md translate-show-x-50 c-black;
      }
    }
  }
}

.bf-settings-panel-popup,
.bf-widgets-panel-popup {
  --uno: a-v-center translate-hidden-x-100;
}

body[direction='ltr'] {

  .bf-settings-panel-popup,
  .bf-widgets-panel-popup {
    --uno: left-0;

    &.open {
      --uno: left-10px;
    }
  }
}

body[direction='rtl'] {

  .bf-settings-panel-popup,
  .bf-widgets-panel-popup {
    --uno: right-0;

    &.open {
      --uno: right-10px;
    }
  }
}
</style>
