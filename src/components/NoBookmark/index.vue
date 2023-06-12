<template>
  <el-scrollbar :min-size="2" class="bookmark-scrollbar">
    <div class="no-component no-bookmark">
      <el-tag
        closable
        v-for="tag in tags"
        :key="tag.meta.code"
        :effect="
          store.bookmark.get('active') === tag.meta.code ? 'dark' : 'light'
        "
        :type="store.bookmark.get('active') === tag.meta.code ? '' : 'info'"
        @click="onClick(tag)"
        @close="onClose(tag)"
      >
        {{ tag.meta.label }}
      </el-tag>
    </div>
  </el-scrollbar>
</template>
<script lang="ts" setup>
const store = useGlobalStore();
const tags: Ref<any> = computed(() => {
  return [...store.bookmark.values()].filter(
    (mark) => typeof mark !== "string"
  );
});
const router = useRouter();
const route = useRoute();
const onClick = (route: any) => {
  const code = route.meta.code;
  store.bookmark.set("active", code);
  router.push(route.path);
};
const onClose = (route: any) => {
  const code = route.meta.code;
  store.bookmark.delete(code);
};
</script>
<style lang="scss" scoped>
.no-component.no-bookmark {
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 2px;
  box-sizing: border-box;
  .el-tag {
    margin: 0 6px;
    cursor: pointer;
  }
}
</style>
