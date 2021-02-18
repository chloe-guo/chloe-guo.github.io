<script>
import documents from "@/assets/js/documents";

export default {
  name: "WorksNavigation",
  components: {
  },
  data() {
    return {
      worksHomePage: documents.worksHomePage,
      showIndex: 0,
      worksAmount: 0
    };
  },
  mounted() {
    
  },
  methods: {
  }
};
</script>

<template>
  <section id="WorksNavigation">
    <p class="prompt">
      <span>Please scroll</span>
    </p>
    <ul
      v-for="worksHomePage in worksHomePage"
      :key="worksHomePage.slug"
      ref="works"
      class="works"
    >
      <li
        v-for="(workDetail, index) in worksHomePage.workDetails"
        :key="workDetail.slug"
        class="work"
      >
        <router-link
          :to="{
            name: 'workPages',
            params: {
              slug: worksHomePage.slug,
              workSlug: workDetail.slug,
              index: index
            }
          }"
          class="work-link"
        >
          <span v-if="(index + 1) < 10" class="this-number">0{{ index + 1 }}</span>
          <span v-else class="this-number">{{ index + 1 }}</span>
          <span v-if="(index + 1) < 10" class="work-name">{{ workDetail.name }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
#WorksNavigation {
  position: fixed;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 7.2vw;
  min-height: 120px;
  background: -moz-radial-gradient(rgba($color_lightGrayFont, .5) 1px, transparent 0);
  background: -webkit-radial-gradient(rgba($color_lightGrayFont, .5) 1px, transparent 0);
  background: radial-gradient(rgba($color_lightGrayFont, .5) 1px, transparent 0);
  background-size: 5px 5px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 25px;
    border-left: solid 1px rgba($color_lightGrayFont, .5);
    transform: translate(-100%, -8.5px);
  }
}

.works {
  @include flex;
  position: fixed;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 0 0 auto;
  height: 7.2vw;
  min-height: 120px;
}

.prompt {
  @include font(10px, 13px, $font_regular);
  color: $color_lightGrayFont;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  transform: translateY(calc(-100% - 15px));
  cursor: default;
  height: 13px;
  overflow-y: hidden;
}

.prompt span {
  display: block;
  opacity: .6;

  &:after {
    content: "Please scroll";
    display: block;
    position: absolute;
    margin: auto;
    bottom: -35px;
    left: 0;
    right: 0;
    transform-origin: bottom;
  }
}

.work {
  flex: 0 0 auto;
}

.work-link {
  padding: 0 1.2vw;
  margin: 0 1.2vw;
  transition: transform .3s $transition_easeOutSine;

  &:hover,
  &:active,
  &:focus {
    transform-origin: center;
    transform: scale(1.05)
  }
}

.this-number {
  @include font(10px, 2.2vw, $font_regular);
  display: block;
  text-decoration: underline;
}

.work-name {
  @include font(2vw, 2.2vw, $font_medium);
}
// -----Animation-----

.prompt span {
  transform: translateY(0);
  animation: prompt_flutter 5s $transition_easeText infinite;
  @keyframes prompt_flutter {
    0%, 70% {
      transform: translateY(0);
    } 100% {
      transform: translateY(-35px);
    }
  }

  &:after {
    transform: rotate(25deg) skewX(25deg);
    animation: prompt_after_flutter 5s $transition_easeText infinite;
    @keyframes prompt_after_flutter {
      0%, 70% {
        transform: rotate(25deg) skewX(25deg);
      } 100% {
        transform: rotate(0) skewX(0);
      }
    }
  }
}

.works.auto-play {
    transform: translateX(calc(-100% / 3));
    // animation: auto_play 6s linear infinite;
    @keyframes auto_play {
      0% {
        transform: translateX(0);
      } 100% {
        transform: translateX(calc(-100% / 3));
      }
    }
  }

  // -----vue transition-----
.layout-enter-active {
  #WorksNavigation {
    transition: opacity .8s 1.8s $transition_ease;
    &:before {
      transition: opacity .3s 3.2s $transition_ease,
                  top .5s 3.2s $transition_ease,
                  height .5s 3.2s $transition_ease;
    }
  }

  .works {
    transition: transform .6s 2.6s $transition_ease;
  }

  .prompt {
    transition: opacity .3s 3.2s $transition_ease,
                transform .5s 3.2s $transition_ease;
  }
}

.layout-enter {
  #WorksNavigation {
    opacity: 0;
    &:before {
      opacity: 0;
      top: -10px;
      height: 0px;
    }
  }

  .works {
    transform: translateY(200%);
  }

  .prompt {
    opacity: 0;
    transform: translateY(-200%);
  }
}

@media screen and (max-width: 768px) {
  .prompt {
    display: none;
  }

  .work-link {
    &:hover,
    &:active,
    &:focus {
      transform: scale(1.2)
    }
  }

  .work-name {
    @include font(12px, 16px, $font_medium);
  }

  .this-number {
    @include font(10px, 12px, $font_regular);
    transform-origin: left top;
    transform: scale(.8);
  }

  #WorksNavigation {
    min-height: 105px;

    &:before {
      height: 17px;
      transform: translate(-100%, -7.5px);
    }
  }

  .works {
    flex-wrap: wrap;
    min-height: 70px;
    margin-bottom: 15px;
  }
}
</style>