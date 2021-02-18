<script>
import documents from "@/assets/js/documents";
import WorkLogo from "@/components/works/workLogo";
import WorkInfo from "@/components/works/WorkInfo";

export default {
  name: "WorksDetails",
  components: {
    WorkLogo,
    WorkInfo
  },
  data() {
    return {
      worksHomePage: documents.worksHomePage,
      showIndex: 0,
      workCardsAmount: 0
    };
  },
  mounted() {
    this.workCardsAmount = this.$refs.workCard.length - 1;
    this.showIndex = 0;
    this.$parent.change_showIndex(this.showIndex);
  },
  methods: {
    change_work: function ($to, $from, $showIndex) {
      // 0ms ~ 400ms
      this.$refs.worksDetails.classList.add('card-in-' + $to);
      this.$refs.worksDetails.classList.add('card-transition');
      // 400ms ~ 450ms
      setTimeout(() => {
        if($showIndex < 0){
          this.showIndex = this.workCardsAmount;
          this.$parent.change_showIndex(this.workCardsAmount);
        } else if($showIndex > this.workCardsAmount) {
          this.showIndex = 0;
          this.$parent.change_showIndex(0);
          this.$parent.change_showIndex(this.showIndex);
        } else {
          this.showIndex = $showIndex;
        }
        this.$refs.worksDetails.classList.remove('card-in-' + $to);
        this.$refs.worksDetails.classList.add('card-in-' + $from);
        this.$refs.worksDetails.classList.remove('card-transition');
      }, 450);
      // 450ms ~ 500ms  ~ 900ms
      setTimeout(() => {
        this.$refs.worksDetails.classList.toggle('card-style-1');
        this.$refs.worksDetails.classList.toggle('card-style-2');
        this.$refs.worksDetails.classList.remove('card-in-' + $from);
        this.$refs.worksDetails.classList.add('card-transition');
      }, 500);
      // 900ms ~ 950ms
      setTimeout(() => {
        this.$refs.worksDetails.classList.remove('card-transition');
      }, 950);
    }
  }
};
</script>

<template>
  <section id="WorksDetails" class="card-style-1" ref="worksDetails">
    <ul
      v-for="worksHomePage in worksHomePage"
      :key="worksHomePage.slug"
      class="work-cards"
    >
      <li
        v-for="(workDetail, index) in worksHomePage.workDetails"
        v-show="index === showIndex"
        :key="workDetail.slug"
        ref="workCard"
        class="work-card"
      >
        <div 
          class="background-color" 
          :style="{ backgroundColor: workDetail.backgroundColor }"
        ></div>
        <WorkInfo
          :worksHomePage="worksHomePage"
          :workDetail="workDetail"
        />
        <WorkLogo
          :worksHomePage="worksHomePage"
          :workDetail="workDetail"
        />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.work-cards {
  width: 54.9vw;
  height: 28vw;
  margin-top: 3vw;
  margin-right: 3vw;
}

.work-card {
  width: 100%;
  height: 100%;
}

.background-color {
  width: 94%;
  height: 76%;
  position: absolute;
  right: 0;
  box-shadow: 11px 11px 33px rgba($color_black, 0.2);
}

.card-style-1 .work-card {
  .background-color {
    bottom: 0;
  }
}

.card-style-2 .work-card {
  .background-color {
    top: 0;
  }
}

// -----Animation-----

.card-transition .work-card .background-color {
  transition: all .4s $transition_ease;
}


.card-in-top .work-card {
  .background-color {
    width: 0;
  }
}

.card-in-bottom .work-card {
  .background-color {
    width: 0;
    right: 94%;
  }
}

// -----vue transition-----
.layout-enter-active {
  .background-color {
    transition: width .4s 3.6s $transition_ease,
                right .4s 3.6s $transition_ease;
  }
}

.layout-enter {
  .background-color {
    width: 0;
    right: 94%;
  }
}

@media screen and (max-width: 768px) {
  .work-cards {
    @include fix_center;
    width: 55vmin;
    height: 55vmin;
  }

  .background-color {
    width: 55vmin;
    height: 55vmin;
    transform: rotateZ(10deg);
  }

  .card-transition .work-card .background-color {
    transition: all .7s $transition_ease;
  }


  .card-in-top .work-card {
    .background-color {
      width: 100%;
      background: $color_background !important;
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
      transform: translate(6px, 6px) rotateZ(10deg);
    }
  }

  .card-in-bottom .work-card {
    .background-color {
      width: 100%;
      right: 0;
      background: $color_background !important;
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
      transform: translate(6px, 6px) rotateZ(10deg);
    }
  }
}

@media screen and (max-width: 428px) {
  .work-cards {
    @include fix_center;
    width: 75vw;
    height: 55vh;
    height: calc(var(--vh, 1vh) * 55);
    top: -10vh;
    top: calc(var(--vh, 1vh) * -10);
  }

  .background-color {
    width: 75vw;
    height: 55vh;
    height: calc(var(--vh, 1vh) * 55);
  }

  .background-color {
    transform: rotateZ(10deg);
  }
}
</style>