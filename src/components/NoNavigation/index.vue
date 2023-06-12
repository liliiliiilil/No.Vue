<template>
  <div class="no-component no-navigation">
    <div class="breadcrumb-wrap">
      <no-breadcrumb></no-breadcrumb>
    </div>
    <div class="bookmark-wrap">
      <no-bookmark></no-bookmark>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.no-component.no-navigation {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6px;
  box-sizing: border-box;
  .breadcrumb-wrap {
    padding-left: 10px;
  }
  .bookmark-wrap {
    height: fit-content;
  }
}
</style>
