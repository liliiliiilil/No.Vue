<template>
  <div class="role-wrap">角色管理</div>
</template>
<script lang="ts" setup>
import { fetchRole } from "@/role/service";
const store = useRoleStore();
</script>
<style lang="scss" scoped>
.role-wrap {
}
</style>
