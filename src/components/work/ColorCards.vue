<script>
import documents from "@/assets/js/documents";
import Navbar from "@/components/common/Navbar";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      MenuButtonFontColor: "#FFFFFF",
      logoAddress: require("@/assets/images/logo_white.svg"),
    };
  },
  mounted() {
    this.$refs.navbar.menu_style(this.MenuButtonFontColor, 1);
    this.$refs.navbar.logo_style(this.logoAddress, "logo_show");
  },
  computed: {
    worksHomePage() {
      return documents.worksHomePage.find(
        worksHomePage => worksHomePage.slug === this.$route.params.slug
      );
    },
    thisWorkDetail() {
      return this.worksHomePage.workDetails.find(
        workDetail => workDetail.slug === this.$route.params.workSlug
      );
    }
  },
  methods: {
    addclass: function ($class_name) {
      this.$refs.colorCards.classList.add($class_name);
    }
  }
};
</script>

<template>
  <section id="ColorCards" ref="colorCards" class="mask" :style="{ backgroundColor: thisWorkDetail.backgroundColor }">
    <img class="main-img" :src="thisWorkDetail.mainImg" alt="">
    <p class="introduction" v-html="thisWorkDetail.introduction"></p>
    <Navbar ref="navbar" />
  </section>
</template>

<style lang="scss">
p.introduction > * {
  @include font(16px, 32px, $font_regular);
  color: $color_white;
  display: inline;
}

p.introduction a {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  p.introduction > * {
    @include font(10px, 18px, $font_regular);
  }
}
</style>

<style lang="scss" scoped>
#ColorCards {
  @include flex(flex-start, center, column);
  width: 100vw;
  min-height: calc(100vh + 65px);
  min-height: calc(var(--vh, 1vh) * 100 + 65px);
  margin-left: -65px;
  padding: 65px;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 100px;
    position: absolute;
    top: 0;
    right: calc(65px + 25px);
    border-left: solid 3px $color_white;
  }
}

.card-height {
  position: relative;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
}

.main-img {
  width: 1280px;
  margin: 90px 0 65px 0;
}

p.introduction {
  @include font(16px, 32px, $font_regular);
  color: $color_white;
  width: 750px;
}

@media screen and (max-width: 1440px) {
  #ColorCards {
    margin-left: -6vw;
    &:before {
      right: calc(6vw + 25px);
    }
  }

  .main-img {
    width: 960px;
  }

  p.introduction {
    width: 960px;
  }
}

@media screen and (max-width: 1024px) {
  .main-img {
    width: 80vw;
  }

  p.introduction {
    width: 80vw;
  }
}

@media screen and (max-width: 768px) {
  #ColorCards {
    margin-left: -10vw;
    min-height: auto;
    &:before {
      right: calc(10vw + 15px);
      height: 60px;
    }
  }

  .main-img {
    width: 80vw;
    margin: 20px 0;
  }

  p.introduction {
    width: 80vw;
    @include font(10px, 18px, $font_regular);
  }
}

@media screen and (max-width: 428px) {
  .main-img {
    width: 92vw;
  }

  p.introduction {
    width: 92vw;
  }
}
</style>