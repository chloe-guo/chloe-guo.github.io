<script>
export default {
  props: {
    worksHomePage: Object,
    workDetail: Object
  }
}
</script>

<template>
  <section id="WorkLogo">
    <router-link
      :to="{
        name: 'workPages',
        params: {
          slug: worksHomePage.slug,
          workSlug: workDetail.slug
        }
      }"
      class="work-link"
    >
      <h2 class="logo">
        <div class="logo-background-img" :style="{ backgroundImage: 'url(' + workDetail.logoBackgroundImg + ')' }"></div>
        <svg viewBox="0 0 100 100"
          width="100px" height="100px"
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="logo-icon"
        > 
          <image :xlink:href=workDetail.iconImg x="0" y="0" width="100%" height="100%" />
        </svg>
      </h2>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.work-link {
  display: block;
}

.logo {
  position: absolute;
  left: 0;
  box-shadow: 11px 11px 33px rgba($color_black, 0.2);
  overflow: hidden;
  clip-path: inset(0 0 0 0);
}

.logo-background-img {
  @include poa_center;
  @include bg_set(cover);
  width: 100%;
  height: 100%;
}

.logo-icon {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 13.5vw;
  height: 13.5vw;
}


.card-style-1 .work-card {
  .logo {
    width: 25vw;
    height: 25vw;
    top: 0;
  }

  .logo-icon {
    left: 0;
    right: 0;
  }
}

.card-style-2 .work-card {
  .logo {
    width: 65%;
    height: 22.5vw;
    top: 2.5vw;
  }


  .logo-icon {
    left: -30%;
  }

}

// -----Animation-----
.card-transition .work-card .logo {
  transition: all .4s $transition_ease;;
}

.card-in-top .work-card {
  .logo {
    top: -75vh;
    top: calc(var(--vh, 1vh) * -75);
    left: -5vw;
    transform: rotateZ(-10deg);
  }
}

.card-in-bottom .work-card {
  .logo {
    top: 85vh;
    top: calc(var(--vh, 1vh) * 85);
    left: -3vw;
    transform: rotateZ(-7deg);
  }
}

// -----vue transition-----
.layout-enter-active {
  .logo {
    transition: box-shadow .6s 3.6s $transition_ease,
                opacity .6s 3.6s $transition_ease;
  }

  .logo-background-img {
    transition: opacity .6s 3.6s $transition_ease;
  }

  .logo-icon {
    transition: opacity .4s 4s $transition_ease;
  }
}

.layout-enter {
  .logo {
    box-shadow: none;
    opacity: 0;
  }

  .logo-background-img,
  .logo-icon {
    opacity: 0;
  }
}

.layout-leave-active {
  .logo-background-img {
    transition: filter .4s .4s $transition_ease,
                opacity .6s .8s $transition_ease;
  }

  .logo-icon  {
    transition: filter .4s .6s $transition_ease,
                opacity .4s .8s $transition_ease;
  }
}

.layout-leave-to {
  .logo-background-img {
    filter: grayscale(.5);
    opacity: 0;
  }

  .logo-icon  {
    filter: grayscale(.5);
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  .logo {
    width: 55vmin !important;
    height: 55vmin !important;
  }

  .card-style-1 .work-card .logo,
  .card-style-2 .work-card .logo {
    top: 0;
  }

  .logo-icon {
    max-width: 180px;
    max-height: 180px;
    width: 40vw;
    height: 40vw;
    left: 0 !important;
  }

  // -----Animation-----
  .card-transition .work-card .logo {
    transition: all .7s $transition_ease;
  }

  .card-in-top .work-card {
    .logo {
      top: -85vh;
      top: calc(var(--vh, 1vh) * -85);
      left: 80vw;
      transform: rotateZ(60deg);
    }
  }

  .card-in-bottom .work-card {
    .logo {
      top: 85vh;
      top: calc(var(--vh, 1vh) * 85);
      left: -100vw;
      transform: rotateZ(-30deg);
    }
  }
}

@media screen and (max-width: 428px) {
  .logo {
    width: 75vw !important;
    height: 55vh !important;
    height: calc(var(--vh, 1vh) * 55) !important;
  }

  // -----Animation-----
  .card-transition .work-card .logo {
    transition: all .7s $transition_ease;
  }

  .card-in-top .work-card {
    .logo {
      top: -75vh;
      top: calc(var(--vh, 1vh) * -75);
      left: 80vw;
      transform: rotateZ(60deg);
    }
  }

  .card-in-bottom .work-card {
    .logo {
      top: 75vh;
      top: calc(var(--vh, 1vh) * 75);
      left: -100vw;
      transform: rotateZ(-30deg);
    }
  }

  // -----vue transition-----
  .layout-enter-active {
    
  }

  .layout-enter {

  }
}
</style>