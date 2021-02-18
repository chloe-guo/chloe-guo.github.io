<script>
export default {
  props: {
    worksHomePage: Object,
    workDetail: Object
  }
}
</script>

<template>
  <section id="WorkInfo">
    <p class="number">
      <span class="no">No.&nbsp;</span>
      <span v-if="workDetail.id < 10" class="this-number">0{{ workDetail.id }}</span>
      <span v-else class="this-number">{{ workDetail.id }}</span>
      <span v-if="worksHomePage.workDetails.length < 10" class="total">0{{ worksHomePage.workDetails.length }}</span>
      <span v-else class="total">0{{ worksHomePage.workDetails.length }}</span>
    </p>
    <router-link
      :to="{
        name: 'workPages',
        params: {
          slug: worksHomePage.slug,
          workSlug: workDetail.slug
        }
      }"
      class="work-name"
    >
      <h2>
        {{ workDetail.name }}
      </h2>
    </router-link>
    <p class="annotation">
      <span class="years">{{ workDetail.years }}﹒</span>
      <span class="type">{{ workDetail.type }}</span>
    </p>
    <router-link
      :to="{
        name: 'workPages',
        params: {
          slug: worksHomePage.slug,
          workSlug: workDetail.slug
        }
      }"
      class="btn"
    >
      <span>View detail</span>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
#WorkInfo {
  @include flex(center, flex-end, column);
  position: absolute;
  right: 3.3vw;
  width: 55%;
  height: 75%;
  padding: 5% 8%;
  background: $color_background;
  box-shadow: 22px 22px 33px rgba($color_black, 0.2);
  * {
    text-align: right;
  }
}

.number {
  @include font(12px, 15px);
  margin-bottom: 16%;
  .no, .this-number {
    color: $color_black;
    display: inline-block;
  }
  .total {
    color: $color_lightGrayFont;
    padding-left: 50px;

    &::after {
      content: "";
      display: block;
      width: 42px;
      position: absolute;
      bottom: 0;
      left: 4px;
      border-bottom: 1px solid rgba($color_lightGrayFont, .8);
    }
  }
}

.work-name {
  @include font(2.5vw, 3vw);
  margin-bottom: 14%;
}

.annotation {
  margin-bottom: 7%;
  * {
    @include font(12px, 15px, $font_medium);
    color: $color_lightGrayFont;
  }
}

.btn > span {
  @include font(14px, 18px, $font_medium);
  color: $color_lightGrayFont;
}

.card-style-1 .work-card {
  #WorkInfo {
    top: 1.7vw;
  }
}

.card-style-2 .work-card {
  #WorkInfo {
    top: 7vw;
    z-index: 1;
  }
}

// -----Animation-----

.card-transition .work-card #WorkInfo {
  transition: all .4s $transition_ease;
}


.card-in-top .work-card {
  #WorkInfo {
    top: -65vh;
    top: calc(var(--vh, 1vh) * -65);
    right: -15vw;
    transform: rotateZ(7deg);
  }
}

.card-in-bottom .work-card {
  #WorkInfo {
    top: 85vh;
    top: calc(var(--vh, 1vh) * 85);
    right: 0vw;
    transform: rotateZ(3deg);
  }
}


// -----vue transition-----
.layout-enter-active {
  #WorkInfo {
    transition: box-shadow .4s 2s $transition_ease;

    & > .number {
      transition: opacity .5s 2.8s $transition_ease;
    }

    & > .work-name {
      transition: opacity .4s 2.5s $transition_ease,
                  transform .8s 2.5s $transition_ease;
    }

    & > .annotation {
      transition: opacity .5s 2.9s $transition_ease,
                  transform .3s 2.9s $transition_ease;
    }

    & > .btn {
      transition: opacity .5s 3s $transition_ease,
                  transform .3s 3s $transition_ease;
    }
  }
}

.layout-enter {
  #WorkInfo {
    box-shadow: none;

    & > .number {
      opacity: 0;
    }

    & > .work-name {
      transform: translate(-10%, 30%) skewX(8deg) rotateZ(8deg);
      opacity: 0;
    }

    & > .annotation {
      transform: translateY(30px);
      opacity: 0;
    }

    & > .btn {
      transform: translateY(20px);
      opacity: 0;
    }
  }
}

@media screen and (max-width: 1440px) {
  #WorkInfo {
    padding: 3% 5%;
  }

  .number {
    @include font(10px, 12px);
    margin-bottom: 14%;
  }

  .work-name {
    @include font(2.8vw, 3vw);
    margin-bottom: 10%;
  }

  .annotation {
    margin-bottom: 7%;
    * {
      @include font(10px, 12px, $font_medium);
    }
  }

  .btn > span {
    @include font(12px, 16px, $font_medium);
  }
}

@media screen and (max-width: 768px) {
  #WorkInfo {
    background: none;
    @include fix_center;
    top: -10vh !important;
    top: calc(var(--vh, 1vh) * -10) !important;
    width: 75vw;
    height: 60vh;
    height: calc(var(--vh, 1vh) * 60);
    box-shadow: none;
    padding: 0;
    z-index: 0;
  }

  #WorkInfo * {
    text-align: center;
  }

  .number {
    position: absolute;
    bottom: -10px;
    right: -17px;
    margin-bottom: 0;
    transform-origin: right;
    transform: rotateZ(90deg) scale(.8);
    @include font(10px, 14px);
    overflow: hidden;

    .total {
      color: $color_lightGrayFont;
      padding-left: 17px;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 10px;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 8px;
        border-bottom: none;
        border-right: 1px solid rgba($color_lightGrayFont, .8);
      }
    }
  }
  .annotation {
    position: absolute;
    top: -10px;
    left: -20px;
    margin-bottom: 0;
    transform-origin: left;
    transform: rotateZ(90deg);
    @include font(10px, 14px);
    overflow: hidden;
  }

  .work-name {
    @include font(20px, 24px);
    margin-bottom: 0;
    position: absolute;
    bottom: -45px;
    margin: auto;
    left: 0;
    right: 0;
  }

  .btn {
    position: absolute;
    bottom: -65px;
    margin: auto;
    left: 0;
    right: 0;
    height: 13px;
    overflow-y: hidden;

    & > span {
      @include font(10px, 13px, $font_regular);
      display: block;

      &:after {
        content: "View detail";
        display: block;
        position: absolute;
        margin: auto;
        @include font(10px, 13px, $font_regular);
        bottom: -30px;
        left: 0;
        right: 0;
        transform-origin: bottom;
      }
    }
  }

  // -----Animation-----
  .btn span {
    transform: translateY(0);
    animation: btn_flutter 3s $transition_easeText infinite;
    @keyframes btn_flutter {
      0%, 70% {
        transform: translateY(0);
      } 100% {
        transform: translateY(-30px);
      }
    }

    &:after {
      transform: rotate(25deg) skewX(25deg);
      animation: btn_after_flutter 3s $transition_easeText infinite;
      @keyframes btn_after_flutter {
        0%, 70% {
          transform: rotate(25deg) skewX(25deg);
        } 100% {
          transform: rotate(0) skewX(0);
        }
      }
    }
  }

  .card-transition .work-card {
    .WorkInfo {
      transition: none;
    }

    .annotation, .this-number, .work-name {
      transition: all .5s $transition_ease;
    }

  }

  .card-in-top .work-card,
  .card-in-bottom .work-card {
    #WorkInfo {
      top: -10vh !important;
      top: calc(var(--vh, 1vh) * -10) !important;
      right:0;
      transform: rotateZ(0deg);
    }
  }

  .card-in-top {
    .annotation {
      top: 5px;
      opacity: 0;
    }

    .this-number {
      transform: translateY(-14px);
    }

    .work-name {
      transform: translateY(-60%);
      opacity: 0;
    }
  }

  .card-in-bottom {
    .annotation {
      top: -25px;
      opacity: 0;
    }

    .this-number {
      transform: translateY(14px);
    }

    .work-name {
      transform: translateY(60%);
      opacity: 0;
    }
  }
}

@media screen and (max-width: 428px) {
.work-name {
    bottom: -50px;
  }

  .btn {
    bottom: -65px;
  }
}
</style>