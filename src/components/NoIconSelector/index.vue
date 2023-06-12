<template>
  <div
    class="no-component no-iconselector"
    :tabindex="disabled ? 'null' : '-1'"
  >
    <div class="color-choice-block">
      <el-color-picker
        ref="elColorPickerRef"
        @active-change="onChange"
        v-model="color"
        :disabled="disabled"
      >
      </el-color-picker>
      <span :style="{ color }" class="iconfont icon-color-choice"></span>
    </div>

    <el-popover
      title=""
      trigger="click"
      width="150px"
      popper-class="icon-selector-popover"
      :disabled="disabled"
      v-model:visible="visible"
    >
      <template #reference>
        <div :class="['ignore-wrap show-icon', disabled && 'disabled']">
          <span :class="['iconfont', `icon-${icon}`]" :style="{ color }"></span>
        </div>
      </template>

      <div class="icon-wrap">
        <div
          class="icon-block"
          v-for="ic in icons"
          :key="ic"
          @click="onSelect(ic)"
        >
          <el-icon size="24">
            <span :class="['iconfont', `icon-${ic}`]"></span>
          </el-icon>

          <!-- <span class="icon-text">
            {{ ic }}
          </span> -->
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false);
const elColorPickerRef = ref();
const onClick = () => {
  elColorPickerRef.value.show();
};
const icons = [
  "menu",
  "permissions",
  "role",
  "user",
  "set",
  "log",
  "system",
  "caidan",
  "lianjie",
  "mokuai",
  "iframe",
];

const props = defineProps(["icon", "color", "disabled"]);
const emit = defineEmits(["update:icon", "update:color"]);

const icon = computed({
  get() {
    return props.icon;
  },
  set(value) {
    emit("update:icon", value);
  },
});

const color = computed({
  get() {
    return props.color;
  },
  set(value) {
    emit("update:color", value);
  },
});

const onSelect = (value: any) => {
  icon.value = value;
  visible.value = false;
};

const onChange = (value: any) => {
  color.value = value;
};
</script>
<style lang="scss" scoped>
.no-component.no-iconselector {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  overflow: hidden;

  &:focus {
    border: 1px solid var(--el-color-primary);
  }
  :deep(.el-color-picker) {
    z-index: 1;
    .el-color-picker__trigger {
      border-radius: 0;
      border: none;
      border-right: 1px solid var(--el-border-color);
      .el-icon {
        display: none;
      }
      .el-color-picker__color {
        opacity: 0;
        border: none;
      }
    }
  }

  .show-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: fit-content;
    box-sizing: border-box;
    cursor: pointer;

    .el-icon {
      transition: 0.5s;
      &.visible {
        transform: rotate(-180deg);
      }
    }
    &.disabled {
      cursor: not-allowed;
    }

    &.ignore-wrap {
      width: 64px;
      height: 30px;
    }
  }
  .color-choice-block {
    position: relative;
    background-color: var(--el-fill-color-light);

    .el-color-picker {
      z-index: 1;
    }
    .iconfont {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }
  }
}
.icon-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .icon-block {
    width: 25%;
    height: 34px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    box-sizing: border-box;

    &:hover {
      color: var(--el-color-primary);
      background-color: var(--el-fill-color-light);
    }
  }
}
</style>
<style lang="scss">
.icon-selector-popover {
  padding: 6px 0px !important;
  min-width: 120px !important;
}
</style>
