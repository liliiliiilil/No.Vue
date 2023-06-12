<template>
  <div class="user-wrap">用户管理</div>
</template>
<script lang="ts" setup>
import { fetchUser } from "@/user/service";
const store = useUserStore();
</script>
<style lang="scss" scoped>
.user-wrap {
}
</style>
