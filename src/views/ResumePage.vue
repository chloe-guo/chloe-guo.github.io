<script>
import documents from "@/assets/js/documents";
import ResumeContent from "@/components/resume/ResumeContent";
import Footer from "@/components/resume/Footer";
import Logo from "@/components/common/Logo";
import Navbar from "@/components/common/Navbar";
import LayoutEnterScroll from '@/components/common/LayoutEnterScroll';

export default {
  components: {
    ResumeContent,
    Footer,
    Logo,
    Navbar,
    LayoutEnterScroll
  },
  data() {
    return {
      resumePages: documents.resumePage,
      MenuButtonFontColor: "#000000",
      logoAddress: require("@/assets/images/logo.svg"),
      hash: "",
    };
  },
  computed: {
    resumePage: function () {
      return documents.resumePage.find(
        resumePage => resumePage.slug === this.$route.params.slug
      );
    }
  },
  mounted() {
    this.$refs.navbar.menu_style(this.MenuButtonFontColor, 1);
    this.$refs.navbar.logo_style(this.logoAddress, "logo_still_hide");
    this.$refs.logo.logo_style("logo_mobile_show");
    this.hash = this.$route.fullPath.substr(7);
    if(this.hash != "") {
      document.querySelector(this.hash).scrollIntoView({block: "center"});
    }
  },
  created() {
    window.addEventListener("scroll", this.page_scroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.page_scroll, true);
  },
  methods: {
    page_scroll: function () {
      if(this.$refs.background_color.scrollTop >= this.$refs.footer.offsetTop) {
        this.$refs.background_color.classList.add('orange_background');
      } else {
        this.$refs.background_color.classList.remove('orange_background');
      }
    }
  }
};
</script>

<template>
  <section id="ResumePage" class="page">
    <Navbar ref="navbar" />
    <div class="background-color" ref="background_color">
      <div class="resume">
        <div 
          v-for="resumePage in resumePages"
          :key="resumePage.slug"
          class="resume-list"
        >
          <h2 class="main-title" v-html="resumePage.slug" :id="resumePage.slug"></h2>
          <div class="resume-item">
            <div 
              v-for="content in resumePage.content"
              :key="content.number"
              class="content"
            >
              <h3 class="number">{{ content.number }}</h3>
              <h3 class="title" v-html="content.title"></h3>
              <ResumeContent
                class="ResumeContent"
                :content="content"
              />
            </div>
          </div>
        </div>
        <div class="footer" ref="footer">
          <Footer/>
        </div>
      </div>
      <div class="logo">
        <Logo ref="logo"/>
      </div>
    </div>
    <LayoutEnterScroll />
  </section>
</template>

<style lang="scss" scoped>
.background-color {
  @include fix_center;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  transition: background .6s $transition_easeOutSine;
  overflow-x: hidden;
  overflow-y: scroll;
}

.background-color.orange_background {
  background: #D19675;
}

.logo {
  @include page_base;
  @include fix_center;
  @include flex;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  margin-left: 3vw;
  pointer-events: none;
  z-index: 1;
}

.resume {
  position: absolute;
  top: 1.5vw;
  left: 65px;
}

.resume-item {
  transform-origin: left;
}

.resume-list {
  padding-top: 60px;
}

.resume-list:first-child {
  padding-top: 9.6vw;
}

.resume-list:nth-child(odd) {
  width: calc(33.8vw + 13vw);
  padding-left: 13vw;
}

.resume-list:nth-child(even) {
  width: calc(500px + 58.5vw);
  padding-left: 58.5vw;
}

.resume-list .content:nth-child(even) {
  width: calc(500px + 58.5vw - 13vw);
  padding-left: calc(58.5vw - 13vw);
}

.main-title {
  position: absolute;
  left: 0;
  @include font(16px, 19px);
  text-transform: capitalize;
  overflow: hidden;
}

.number,
.title {
  @include font(16px, 19px);
  margin-bottom: 20px;
}

.footer {
  width: 100vw;
}

// -----vue transition-----
.layout-enter-active {
  transition: opacity 4.3s $transition_ease;

  .main-title {
    transition: opacity 1.2s .2s $transition_ease,
                text-indent .8s .2s $transition_ease;
  }
  .resume-item {
    transition: transform .6s .2s $transition_ease,
                opacity 1.2s .2s $transition_ease,
                letter-spacing .8s .2s $transition_ease;
  }
}

.layout-enter {
  .main-title {
    opacity: 0;
    text-indent: -150px;
  }
  .resume-item {
    transform: translateX(20px) skewY(20deg);
    opacity: 0;
    letter-spacing: 3px;
  }
}

.layout-leave-active {
  transition: opacity 1.5s $transition_ease;

  .main-title {
    transition: opacity .4s .2s $transition_ease,
                text-indent .8s .2s $transition_ease;
  }
  .resume-item {
    transition: transform .6s .2s $transition_ease,
                opacity .4s .2s $transition_ease,
                letter-spacing .8s .2s $transition_ease;
  }
}

.layout-leave-to {
  .main-title {
    opacity: 0;
    text-indent: -150px;
  }
  .resume-item {
    transform: translateX(20px) skewY(-20deg);
    opacity: 0;
    letter-spacing: 3px;
  }
}

@media screen and (max-width: 1440px) {
  .resume {
    left: 3vw;
  }

  .resume-list:first-child {
    padding-top: 9.6vw;
  }

  .resume-list:nth-child(odd) {
    width: calc(40.5vw + 8vw);
    padding-left: 8vw;
  }

  .resume-list:nth-child(even) {
    width: calc(550px + 44.5vw);
    padding-left: 44.5vw;
  }

  .resume-list .content:nth-child(even) {
    width: calc(550px +44.5vw - 8vw);
    padding-left: calc(44.5vw - 8vw);
  }
}

@media screen and (max-width: 1024px) {
  .resume {
    left: 0;
    top: 145px;
  }

  .main-title {
    opacity: 0 !important;
  }

  .resume-list {
    padding-top: 60px;
  }

  .resume-list:first-child {
    padding-top: 0vw;
  }

  .resume-list:nth-child(odd) {
    width: 60vw;
    padding-left: 10vw;
  }

  .resume-list:nth-child(even) {
    width: 90vw;
    padding-left: 50vw;
  }

  .resume-list .content:nth-child(even) {
    width: 90vw;
    padding-left: 40vw;
    padding-top: 60px;
  }

  .number,
  .title {
    @include font(12px, 14px);
    margin-bottom: 5px;
  }
}

@media screen and (max-width: 768px) {
  .resume-list:nth-child(odd) {
    width: 70vw;
  }
  
  .footer {
    width: auto;
  }
}

@media screen and (max-width: 428px) {
  .resume {
    left: 0;
    top: 115px;
  }

  .resume-list:nth-child(odd) {
    width: 80vw;
  }
  .resume-list:nth-child(even) {
    padding-left: 20vw;
  }
  .resume-list .content:nth-child(even) {
    padding-left: 10vw;
  }
}
</style>
