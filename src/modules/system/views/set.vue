<template>
  <div class="system-wrap">系统设置</div>
</template>
<script lang="ts" setup>
import { fetchSystem } from "@/system/service";
const store = useSystemStore();
</script>
<style lang="scss" scoped>
.system-wrap {
}
</style>
