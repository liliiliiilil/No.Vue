<template>
  <div class="system-settings-wrap">系统设置</div>
</template>
<script lang="ts" setup>
import { fetchSystemSettings } from "@/system-settings/service";
const store = useSystemSettingsStore();
</script>
<style lang="scss" scoped>
.system-settings-wrap {
}
</style>
