<script>
import WorkLogo from "@/components/work/WorkLogo";
import InfoCards from "@/components/work/InfoCards";
import ColorCards from "@/components/work/ColorCards";
import ContentDetail from "@/components/work/ContentDetail";
import Footer from "@/components/work/Footer";
import Navbar from "@/components/common/Navbar";
import LayoutEnterScroll from '@/components/common/LayoutEnterScroll';

export default {
  components: {
    WorkLogo,
    InfoCards,
    ColorCards,
    ContentDetail,
    Footer,
    Navbar,
    LayoutEnterScroll
  },
  data() {
    return {
      pageHeight: 0,
      MenuButtonFontColor: "#000000",
      logoAddress: require("@/assets/images/logo.svg")
    };
  },
  mounted() {
    this.$refs.navbar.menu_style(this.MenuButtonFontColor, 1);
    this.$refs.navbar.logo_style(this.logoAddress, "logo_show");
    this.$refs.cardHeight.addclass("card-height");
  },
  created() {
    window.addEventListener("scroll", this.page_scroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.page_scroll, true);
  },
  methods: {
    page_scroll: function () {
      this.$refs.workLogo.parallax(this.$refs.page.scrollTop);
      this.$refs.contentDetail.parallax(this.$refs.page.scrollTop);
    }
  }
};
</script>

<template>
  <section id="WorkPages" class="page" ref="page">
    <div class="header">
      <Navbar ref="navbar" />
      <WorkLogo ref="workLogo" />
      <InfoCards />
    </div>
    <div class="content">
      <div class="main-content">
        <ColorCards />
        <ColorCards ref="cardHeight" />
      </div>
      <ContentDetail ref="contentDetail"/>
    </div>
    <Footer />
    <LayoutEnterScroll />
  </section>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: calc(100vh - 65px);
  height: calc(var(--vh, 1vh) * 100 - 65px);
  padding-bottom: 65px;
}

.main-content {
  z-index: 1;
}

// -----vue transition-----
.layout-enter-active {
  transition: opacity 4.7s $transition_ease;
}

.layout-leave-active {
  transition: opacity 1.5s $transition_ease;
}
</style>