<template>
  <div class="no-component no-breadcrumb">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item
        v-for="rte in matched"
        :to="{ path: rte.path }"
        :key="rte.path"
        >{{ rte.meta.label }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const matched = computed(() => route.matched);
</script>
<style lang="scss" scoped>
.no-component.no-breadcrumb {
}
</style>
