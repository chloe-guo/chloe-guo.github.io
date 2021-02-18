<script>
import documents from "@/assets/js/documents";

export default {
  data() {
    return {
    };
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
  }
};
</script>

<template>
  <section id="InfoCards">
    <ul class="info-cards">
      <li class="info-card this-info">
        <p class="number">
          <span v-if="thisWorkDetail.id < 10" class="this-number">0{{ thisWorkDetail.id }}</span>
          <span v-else class="this-number">{{ thisWorkDetail.id }}</span>
        </p>
        <div class="work-name">
          <h2>
            {{ thisWorkDetail.name }}
          </h2>
        </div>
        <p class="annotation">
          <span class="years">{{ thisWorkDetail.years }}﹒</span>
          <span class="type">{{ thisWorkDetail.type }}</span>
        </p>
      </li>
      <li
        v-for="(workDetail, index) in worksHomePage.workDetails"
        :key="workDetail.slug"
        class="info-card next-info"
        v-show="index === thisWorkDetail.id"
      >
        <p class="number">
          <span v-if="(index + 1) < 10" class="this-number">0{{ index + 1 }}</span>
          <span v-else class="this-number">{{ index + 1 }}</span>
         </p> 
        <router-link
          :to="{
            name: 'workPages',
            params: { workSlug: workDetail.slug }
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
      </li>
      <li
        v-for="(workDetail, index) in worksHomePage.workDetails"
        :key="workDetail.slug + '_clone'"
        class="info-card next-info"
        v-show="thisWorkDetail.id === 6 && index === 0"
      >
        <p class="number">
          <span class="this-number">01</span>
         </p> 
        <router-link
          :to="{
            name: 'workPages',
            params: { workSlug: workDetail.slug }
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
      </li>
     </ul>
  </section>
</template>

<style lang="scss" scoped>
#InfoCards {
  width: 100%;
  height: calc(150px + 65px);
  position: absolute;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 65px;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: calc(100% - 25px);
    position: absolute;
    top: 25px;
    right: 25px;
    border-left: solid 3px $color_black;
  }

  &::after {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    position: absolute;
    top: 0;
    right: calc(25px - 1px);
    border-radius: 50%;
    background: $color_black;
  }
}

.number span {
  @include font(12px, 15px, $font_bold);
  color: $color_deepGrayFont;
}

.work-name {
  @include font(32px, 39px, $font_bold);
  margin: 5.5px 0 12px 0;
}

.annotation span {
  @include font(12px, 15px);
  color: $color_lightGrayFont;
}

.this-info {
  left: 0;
}

.next-info {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
}

// -----vue transition-----
.layout-enter-active {
  .this-info {
    transition: left .9s 1.5s $transition_ease,
                opacity .6s 1.8s $transition_ease;
  }
  #InfoCards {
      &::before {
        transition: right .9s 1.7s $transition_ease,
        opacity .6s 2s $transition_ease;
      }

      &::after {
        transition: right .9s 1.7s $transition_ease,
        opacity .6s 2s $transition_ease;
      }
  }
  .next-info {
    transition: right .9s 1.7s $transition_ease,
                opacity .6s 2s $transition_ease;
  }
}

.layout-enter {
  .this-info {
    left: -50vw;
    opacity: 0;
  }

  #InfoCards {
    &::before {
      right: calc(-50vw + 25px);
      opacity: 0;
    }

    &::after {
      right: calc(-50vw + 25px - 1px);
      opacity: 0;
    }
  }

  .next-info {
    right: -50vw;
    opacity: 0;
  }
}

.layout-leave-active {
  .this-info {
    transition: left .9s .4s $transition_ease,
                opacity .6s .5s $transition_ease;
  }
  #InfoCards {
      &::before {
        transition: right .9s .5s $transition_ease,
        opacity .6s .6s $transition_ease;
      }

      &::after {
        transition: right .9s .5s $transition_ease,
        opacity .6s .6s $transition_ease;
      }
  }
  .next-info {
    transition: right .9s .5s $transition_ease,
                opacity .6s .6s $transition_ease;
  }
}

.layout-leave-to {
  .this-info {
    left: -50vw;
    opacity: 0;
  }

  #InfoCards {
    &::before {
      right: calc(-50vw + 25px);
      opacity: 0;
    }

    &::after {
      right: calc(-50vw + 25px - 1px);
      opacity: 0;
    }
  }

  .next-info {
    right: -50vw;
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  #InfoCards {
    height: calc(80px + 65px);

    &::before {
      right: 15px;
    }

    &::after {
      right: calc(15px - 1px);
    }
  }

  .work-name {
    @include font(20px, 24px);
    margin: 2px 0 4px 0;
  }

  .annotation span,
  .number span {
    @include font(10px, 12px, $font_bold);
    transform-origin: left top;
    transform: scale(.8);
  }

  .this-info {
    left: -5vw;
  }
}

</style>