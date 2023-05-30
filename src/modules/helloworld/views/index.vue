<template>
  <div class="helloworld-wrap">
    你好
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { fetchHelloworld } from "@/helloworld/service";
const store = useHelloworldStore();
</script>
<style lang="scss" scoped>
.helloworld-wrap {
}
</style>
