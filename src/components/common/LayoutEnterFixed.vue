<template>
  <section id="LayoutEnterFixed" class="background">
  </section>
</template>

<style lang="scss" scoped>
.background {
  @include fix_center;
  @include bg_set(cover);
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  background-color: $color_background;
}

// -----vue transition-----
.layout-enter-active {
  .background {
    pointer-events: auto;
  }
}

.layout-enter {
}

.layout-leave-active {
  .background {
    transition: opacity .6s .8s $transition_ease;
    pointer-events: auto;
  }
}

.layout-leave-to {
  .background {
    opacity: 1;
  }
}
</style>