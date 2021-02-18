<script>
import Logo from "@/components/common/Logo";
import WorksDetails from "@/components/works/WorksDetails";
import WorksNavigation from "@/components/works/WorksNavigation";
import Navbar from "@/components/common/Navbar";
import LayoutEnterFixed from '@/components/common/LayoutEnterFixed';

export default {
  name: "WorksHomePage",
  components: {
    Logo,
    WorksDetails,
    WorksNavigation,
    Navbar,
    LayoutEnterFixed
  },
  data() {
    return {
      scrollTF: true,
      showIndex: 0,
      MenuButtonFontColor: "#000000",
      logoAddress: require("@/assets/images/logo.svg"),
      touchStartPointY: 0,
      distanceY: 0
    };
  },
  mounted() {
    this.$refs.navbar.menu_style(this.MenuButtonFontColor, 1);
    this.$refs.navbar.logo_style(this.logoAddress, "logo_mobile_show");
    this.$refs.logo.logo_style("logo_mobile_hide");
  },
  methods: {
    scroll_work: function (event) {
      if (this.scrollTF === true) {
        this.scrollTF = false;
        if (event.deltaY > 0) {
          this.showIndex++;
          this.$refs.worksDetails.change_work('top', 'bottom', this.showIndex);
        } else if(event.deltaY < 0) {
          this.showIndex--;
          this.$refs.worksDetails.change_work('bottom', 'top', this.showIndex);
        }
        // 950ms ~ 1000ms
        setTimeout(() => {
            this.scrollTF = true;
          }, 1300);
      }
    },
    change_showIndex: function ($showIndex) {
      this.showIndex = $showIndex;
    },
    touchstart_work: function (event) {
      this.touchStartPointY = event.targetTouches[0].clientY;
      this.distanceY = 0;
    },
    touchmove_work: function (event) {
      if (event.targetTouches.length == 1) {
        this.distanceY = event.targetTouches[0].clientY - this.touchStartPointY;
      }
    },
    touchend_work: function () {
      if (this.scrollTF === true) {
        this.scrollTF = false;
        if (this.distanceY > 0) {
          this.showIndex--;
          this.$refs.worksDetails.change_work('bottom', 'top', this.showIndex);
        } else if(this.distanceY < 0) {
          this.showIndex++;
          this.$refs.worksDetails.change_work('top', 'bottom', this.showIndex);
        }
        // 950ms ~ 1000ms
        setTimeout(() => {
          this.scrollTF = true;
        }, 1300);
        this.touchStartPointY = 0;
        this.distanceY = 0;
      }
    }
  }
};
</script>

<template>
  <section id="WorksHomePage" class="page"
    v-on:wheel.prevent="scroll_work"
  >
    <Navbar ref="navbar" />
    <Logo ref="logo"/>
    <div class="content" 
      v-on:touchstart="touchstart_work"
      v-on:touchmove="touchmove_work"
      v-on:touchend="touchend_work"
    >
      <WorksDetails ref="worksDetails"/>
    </div>
    <WorksNavigation ref="worksNavigation"/>
    <LayoutEnterFixed />
  </section>
</template>

<style lang="scss" scoped>
#WorksHomePage {
  @include flex(space-between);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: hidden;
  padding-bottom: 200px;
}

// -----vue transition-----
.layout-enter-active {
  transition: opacity 4.7s $transition_ease;
}

.layout-leave-active {
  transition: opacity 1.5s $transition_ease;
}
</style>