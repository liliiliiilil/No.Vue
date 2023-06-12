<template>
  <template v-for="item in props.list" :key="item.path">
    <el-sub-menu
      v-if="item.children && item.children.length"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <span :class="`iconfont icon-${item.meta.icon}`"></span>
        </el-icon>
        <span>{{ item.meta.label }}</span>
      </template>
      <M :list="item.children" />
    </el-sub-menu>

    <el-menu-item
      v-else
      :index="item.path"
      :class="route.path === item.path ? 'no-active' : ''"
    >
      <el-icon>
        <span :class="`iconfont icon-${item.meta.icon}`"></span>
      </el-icon>
      <template #title>
        <span>{{ item.meta.label }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts" setup>
import M from "./M.vue";
const props = defineProps({
  list: {
    type: Array<any>,
    required: true,
  },
});
const route = useRoute();
</script>
<style lang="scss">
.no-active {
  color: var(--el-color-primary) !important;
}
</style>
