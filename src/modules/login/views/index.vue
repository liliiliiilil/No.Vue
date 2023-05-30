<template>
  <div class="login-wrap">
    <div class="login" @click="handleClick()">{{ $t(store.text) }}</div>
    <div
      class="item"
      v-for="(
        { size, left, bottom, background, opacity, zIndex, y }, index
      ) in items"
      :key="index"
      :style="{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}px`,
        bottom: `${bottom}px`,
        'background-color': background,
        'z-index': zIndex,
        'box-shadow': `0px 0px 20px ${background}`,
        opacity: opacity,
        transform: `translate(0, ${y}%)`,
      }"
    ></div>
  </div>
</template>
<script lang="ts" setup>
const locale = useLocale();
const topic = useTopic();
const store = useLoginStore();

const handleClick = () => {
  locale.value = locale.value === "zh_CN" ? "en_US" : "zh_CN";
  topic.value = topic.value === "night" ? "sunny" : "night";
};

const items = ref();
const timer = ref();
const animation = (interval = 100, skip = 50) => {
  if (timer.value) {
    clearInterval(timer.value);
  }
  window.requestAnimationFrame(() => {
    timer.value = setInterval(() => {
      const innerHeight = window.innerHeight;
      items.value = items.value.map(
        (el: { y: number; size: number; bottom: number; opacity: number }) => {
          el.y += skip;
          const h = (el.y / 100) * el.size;
          if (el.y > 0) {
            el.opacity = 1;
          }
          if (h - el.bottom > el.size * 6) {
            el.y = -300;
            el.bottom = innerHeight * 2;
            el.opacity = 0;
          }
          return el;
        }
      );
    }, interval);
  });
};

const randomRgba = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r},${g},${b},0.8)`;
};
const randomInteger = (max: number, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
onMounted(() => {
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight * 2;
  items.value = Array(300)
    .fill(1)
    .map(() => {
      const size = randomInteger(60, 10);
      const left = randomInteger(innerWidth, 0);
      const bottom = randomInteger(innerHeight, 10);
      return {
        size,
        left,
        bottom,
        background: randomRgba(),
        zIndex: randomInteger(9, 1),
        opacity: 1,
        y: 0,
      };
    });

  animation();
});
</script>
<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .item {
    transition: transform 0.2s;
  }
  .login {
    user-select: none;
    box-shadow: 0px 0px 60px red;
    padding: 0 16px;
    z-index: 5;
    font-size: 96px;
    text-transform: uppercase;
    background: linear-gradient(
      219deg,
      var(--color-1) 19%,
      transparent 19%,
      transparent 20%,
      var(--color-5) 20%,
      var(--color-5) 39%,
      transparent 39%,
      transparent 40%,
      var(--color-4) 40%,
      var(--color-4) 59%,
      transparent 59%,
      transparent 60%,
      var(--color-3) 60%,
      var(--color-3) 79%,
      transparent 79%,
      transparent 80%,
      var(--color-2) 80%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    cursor: pointer;
  }
}
</style>
