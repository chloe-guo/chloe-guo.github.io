
<script>
import documents from "@/assets/js/documents";
export default {
  data() {
    return {
      allRightReserved: documents.allRightReserved,
      contactPage: documents.contactPage,
      worksHomePages: documents.worksHomePage,
      showIndex: 0,
      worksAmount: 0
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
  }
}
</script>

<template>
  <section id="Footer">
    <div class="works-menu">
      <h2 class="title">Other Works</h2>
      <p class="number">
        <span v-if="thisWorkDetail.id < 10" class="this-number">0{{ thisWorkDetail.id }}</span>
        <span v-else class="this-number">{{ thisWorkDetail.id }}</span>
      </p> 
      <ul
      v-for="worksHomePage in worksHomePages"
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
    </div>
    <router-link
      :to="{
        name: 'contactPage',
        params: { slug: contactPage.slug }
      }"
      class="button"
      :style="{ backgroundColor: thisWorkDetail.backgroundColor }"
    >
      <p>CONTACT ME</p>
      <p class="all-right-reserved">{{ allRightReserved }}</p>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
#Footer {
  padding-top: 220px;
  padding-bottom: 270px;
}

.title {
  @include font(16px, 19px);
  position: absolute;
  top: -35px;
  left: 65px;
}

.works-menu {
  left: -65px;
  bottom: 0;
  width: 100vw;
  height: 185px;
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
    height: 50px;
    transform: translateY(-50%);
    border-left: solid 1px rgba($color_lightGrayFont, .5);
  }
}

.number > span {
  @include font(10px, 13px);
  color: rgba($color_black, .45);
  text-align: center;
  position: absolute;
  margin: auto;
  top: -40px;
  left: 0;
  right: 0;
  text-decoration: none;
}

.works {
  @include flex;
  @include poa_center;
  flex: 0 0 auto;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  padding-bottom: 13px;
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

.works.auto-play {
    transform: translateX(calc(-100% / 3));
    @keyframes auto_play {
      0% {
        transform: translateX(0);
      } 100% {
        transform: translateX(calc(-100% / 3));
      }
    }
  }

.button {
  width: 100vw;
  height: 160px;
  background: #000;
  @include flex;
  position: absolute;
  margin: auto;
  left: -65px;
  bottom: -65px;

  &:before {
    content: "";
    display: block;
    @include poa_center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color .3s $transition_easeOutSine;
  }

  & > p {
    color: #fff;
    @include font(16px, 19px);
    transition: letter-spacing .3s $transition_easeOutSine;
  }

  & > .all-right-reserved {
    position: absolute;
    bottom: 15px;
    right: 25px;
    @include font(12px, 15px, $font_regular);
  }
  
  &:hover,
  &:active,
  &:focus {
    &:before {
      background-color: rgba(0, 0, 0, .2);
    }

    & > p:not(.all-right-reserved) {
      letter-spacing: 2px;
    }
  }
}

// -----vue transition-----
.layout-leave-active {
  .works {
    transition: opacity .8s .6s $transition_ease;
  }

  .button {
    transition: transform .4s .8s $transition_ease;
  }
}

.layout-leave-to {
  .works {
    opacity: 0;
  }

  .button {
    transform: translateY(100%);
  }
}

@media screen and (max-width: 1440px) {
  #Footer {
    padding-top: 100px;
    padding-bottom: 110px;
  }

  .works-menu {
    left: -6vw;
  }

  .button {
    left: -6vw;
    bottom: -219px;
  }
}

@media screen and (max-width: 768px) {
  #Footer {
    padding-top: 75px;
    padding-bottom: 85px;
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

  .works-menu {
    min-height: 135px;
    height: auto;
    &:before {
      height: 25px;
    }
  }

  .works {
    flex-wrap: wrap;
    height: 75px;
    min-height: 35px;
    margin-bottom: 25px;
  }

  .works-menu {
    left: -10vw;
  }

  .button {
    left: -10vw;
    bottom: -170px;
    height: 110px;
  }

  .title {
    left: 25px;
    @include font(12px, 16px);
    top: -30px;
  }

  .number > span {
    top: -25px;
    left: 17vw;
  }

  .button > p {
    @include font(14px, 18px);
  }

  .button > .all-right-reserved {
    @include font(10px, 12px, $font_regular);
    transform-origin: right bottom;
    transform: scale(.8);
    right: 15px;
    bottom: 10px;
  }
}
</style>