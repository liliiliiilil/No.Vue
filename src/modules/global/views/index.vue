<template>
  <!-- 作布局拦截 -->
  <div :class="['global-wrap', single && 'single']">
    <!-- 单布局 -->
    <template v-if="single">
      <router-view v-slot="{ Component, route }">
        <suspense>
          <template #default>
            <div class="module-wrap">
              <component class="module" :is="Component" :key="route.path" />
            </div>
          </template>
          <template #fallback> Loading... </template>
        </suspense>
      </router-view>
    </template>

    <!-- 内容布局 -->
    <template v-else>
      <router-view v-slot="{ Component, route }">
        <suspense>
          <template #default>
            <div class="module-wrap">
              <component class="module" :is="Component" :key="route.path" />
            </div>
          </template>
          <template #fallback> Loading... </template>
        </suspense>
      </router-view>
    </template>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const single = computed(() =>
  ["login"].some((path) => route.path.includes(path))
);
</script>

<style lang="scss" scoped>
.global-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .module-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  font-size: 16px;
  .global-wrap .module-wrap .module {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
