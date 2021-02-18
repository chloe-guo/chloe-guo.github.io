<script>
import documents from "@/assets/js/documents";

export default {
  components: {
  },
  data() {
    return {
      speed: 40,
      yPos: 0
    };
  },
  computed: {
    worksHomePage: function () {
      return documents.worksHomePage.find(
        worksHomePage => worksHomePage.slug === this.$route.params.slug
      );
    },
    thisWorkDetail: function () {
      return this.worksHomePage.workDetails.find(
        workDetail => workDetail.slug === this.$route.params.workSlug
      );
    }
  },
  methods: {
    parallax: function ($scrollHeight) {
      this.yPos = -($scrollHeight * this.speed / 100);
      this.$refs.logo_background_img.style.transform = "translate3d(0, " + this.yPos + "px, 0)";
    }
  }
};
</script>

<template>
  <section id="WorkLogo">
    <div class="background-img" :style="{ backgroundImage: 'url('  + thisWorkDetail.backgroundImg + ')' }"></div>
    <div class="logo mask">
      <div class="logo-background-img" ref="logo_background_img" :style="{ backgroundImage: 'url(' + thisWorkDetail.logoBackgroundImg + ')' }"></div>
      <svg viewBox="0 0 100 100"
        width="100px" height="100px"
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="logo-icon"
      >
        <image :xlink:href=thisWorkDetail.iconImg x="0" y="0" width="100%" height="100%" />
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#WorkLogo {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.background-img {
  @include fix_center;
  @include bg_set(cover);
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  filter: grayscale(.5);
  opacity: 0;
  pointer-events: none;
  z-index: 2;

  &::before {
    @include fix_center;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba($color_black, .4);
  }
}

.logo {
  @include poa_center;
  top: 45px;
  width: 480px;
  height: 675px;
}

.logo-background-img {
  @include fix_center;
  @include bg_set(contain);
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  transform: translate3d(0, 0, 0);
}

.logo-icon {
  @include poa_center;
  width: 62%;
  height: auto;
}

@media screen and (max-width: 1440px) {
  .logo {
    width: 360px;
    height: 506.25px;
  }
}

// -----vue transition-----
.layout-enter-active {
  .background-img {
    // transition: opacity .8s 1.4s $transition_ease;
    animation: fade_in 2.4s $transition_ease;
  }

  .logo-background-img {
    transition: filter .4s 2s $transition_ease,
                opacity .8s 1.6s $transition_ease;
  }

  .logo-icon {
    transition: filter .6s 1.8s $transition_ease,
                opacity .6s 2s $transition_ease;
  }
}

.layout-enter {
  .logo-background-img,
  .logo-icon {
    filter: grayscale(.5);
    opacity: 0;
    z-index: 1;
  }
}

@keyframes fade_in {
  0% {
    opacity: 0;
  } 66% {
    opacity: 1;
  } 100% {
    opacity: 0;
  }
}

.layout-leave-active {
  .logo-background-img {
    transition: filter .4s .8s $transition_ease,
                opacity .8s .6s $transition_ease;
  }

  .logo-icon {
    transition: filter .6s .6s $transition_ease,
                opacity .6s .8s $transition_ease;
  }
}

.layout-leave-to {
  .logo-background-img,
  .logo-icon {
    filter: grayscale(.5);
    opacity: 0;
  }
}
@media screen and (max-width: 1440px) {
  .logo {
    top: -120px;
  }
}
@media screen and (max-width: 768px) {
  .logo {
    width: 55vmin !important;
    height: 55vmin !important;
    top: -30px;
  }

  .logo-icon {
    width: 40%;
  }
}

@media screen and (max-width: 428px) {
  .logo {
    width: 75vw !important;
    height: 55vh !important;
    height: calc(var(--vh, 1vh) * 55) !important;
    top: -30px;
  }

  .header {
    padding-bottom: 200px;
  }
}
</style>