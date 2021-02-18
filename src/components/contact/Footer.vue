
<script>
import documents from "@/assets/js/documents";
export default {
  data() {
    return {
      allRightReserved: documents.allRightReserved
    };
  }
}
</script>

<template>
  <section id="Footer">
    <p class="all-right-reserved">{{ allRightReserved }}</p>
  </section>
</template>

<style lang="scss" scoped>
.all-right-reserved {
  @include font(12px, 15px, $font_regular);
  position: absolute;
  bottom: -50px;
  right: -35px;
}

@media screen and (max-width: 1440px) {
  .all-right-reserved {
    bottom: calc(-219px + 15px);
    right: calc(-6vw + 25px);
  }
}

@media screen and (max-width: 768px) {
  .all-right-reserved {
    @include font(10px, 12px, $font_regular);
    transform-origin: right bottom;
    transform: scale(.8);
    bottom: calc(-170px + 10px);
    right: calc(-10vw + 15px);
  }
}
</style>