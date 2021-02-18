<script>
import documents from "@/assets/js/documents";
import Navbar from "@/components/common/Navbar";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      slug: this.$route.params.slug,
      worksHomePage: documents.worksHomePage,
      resumePage: documents.resumePage,
      contactPage: documents.contactPage,
      MenuButtonFontColor: "#000000",
      logoAddress: require("@/assets/images/logo.svg")
    };
  },
  mounted() {
    this.$refs.navbar.menu_style(this.MenuButtonFontColor, 0);
    this.$refs.navbar.logo_style(this.logoAddress, "logo_still_hide");
  },
  methods: {
    event_menu_addclass: function ($class_name) {
      this.$parent.menu_active_addclass($class_name);
    },
    event_menu_removeclass: function ($class_name) {
      this.$parent.menu_active_removeclass($class_name);
    },
    close_menu: function () {
      this.$parent.menu_active_removeclass('is-open-menu');
    }
  }
};
</script>

<template>
  <section id="Navigation">
    <Navbar ref="navbar" />
    <div class="nav">
      <div class="nav-background">
        <div class="background-img large-img" :style="{ backgroundImage: 'url(' + require('@/assets/images/nav_bg.jpg') + ')' }"></div>
        <div class="background-img small-img" :style="{ backgroundImage: 'url(' + require('@/assets/images/nav_bg.jpg') + ')' }"></div>
      </div>
      <h2 class="logo">
        <router-link
          :to="{
            name: 'worksHomePage',
            params: { slug: worksHomePage.slug }
          }"
        class="logo_link"
        >
          <svg viewBox="0 0 160 71"
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink"> 
            <image xlink:href="@/assets/images/logo_white.svg" width="160" height="71" />
          </svg>
        </router-link>
      </h2>
      <ul class="nav-menu">
        <li
          v-for="worksHomePage in worksHomePage"
          :key="worksHomePage.slug"
          v-on:click="close_menu"
          class="nav-item"
        >
          <router-link
            :to="{
              name: 'worksHomePage',
              params: { slug: worksHomePage.slug }
            }"
            class="nav-link"
          >
            {{ worksHomePage.slug }}&nbsp;{{ worksHomePage.title }}
          </router-link>
        </li>
        <li
          v-for="resumePage in resumePage"
          :key="resumePage.slug"
          v-on:click="close_menu"
          class="nav-item"
        >
          <router-link
            :to="{
              name: 'resumePage',
              params: { slug: resumePage.slug }
            }"
            class="nav-link"
          >
            {{ resumePage.slug }}&nbsp;{{ resumePage.title }}
          </router-link>
        </li>
        <li
          v-for="contactPage in contactPage"
          :key="contactPage.slug"
          v-on:click="close_menu"
          class="nav-item"
        >
          <router-link
            :to="{
              name: 'contactPage',
              params: { slug: contactPage.slug }
            }"
            class="nav-link"
          >
            {{ contactPage.slug }}&nbsp;{{ contactPage.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.logo, .logo_link {
  width: 160px;
  height: 71px;
}

.nav {
  @include page_base;
  @include fix_center;
  flex: 0, 0, auto;
}

.nav * {
  color: $color_white;
}

.nav-menu {
  @include fix_center;
  @include flex;
  flex-wrap: wrap;
  padding: 0;
  width: 950px;
  height: 294px;
}

.nav-item {
  display: block;
  margin: 20px 25px;
  overflow-y: hidden;
}

.nav-link {
  @include font(48px, 58px);
  padding: 0px 25px;
  text-transform: uppercase;
}


.nav-background {
  @include fix_center;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  &::before,
  &::after {
    @include fix_center;
    content: "";
    display: block;
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    z-index: 1;
  }

  &::before {
    background: rgba($color_black, .5);
  }

  &::after {
    background: rgba($color_black, .3);
  }
}

.nav-background .large-img {
  @include poa_center;
  @include bg_set(auto);
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  filter: grayscale(.8);
}

.nav-background .small-img{
  @include fix_center;
  @include bg_set(auto, center, calc(50% - 22px));
  top: 45px;
  width: 480px;
  height: 675px;
  filter: grayscale(.8);
  z-index: 1;
}

// -----Animation-----
.nav .nav-link {
  transform: translateY(110%);
  transition: transform 1s $transition_ease;
}

.is-open-menu .nav .nav-link {
  transform: translateY(0%);
}



// -----vue transition-----
.layout-enter-active {
  .logo {
    opacity: 0;
  }
}

@media screen and (max-width: 1440px) {
  .nav {
    padding: 50px 60px 0 50px;
  }

  .nav-background .small-img {
    width: 360px;
    height: 506.25px;
    top: 0px;
    @include bg_set(auto, center);
  }
}

@media screen and (max-width: 1024px) {
.nav-menu {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 350px;
    height: auto;
    align-items: flex-start;
  }

  .nav-item {
    margin: 20px 0;
  }

  .nav-link{
    @include font(36px, 48px, $font_medium);
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .nav {
    padding: 30px 40px 0 40px;
  }

  .nav-background .small-img {
    width: 55vmin !important;
    height: 55vmin !important;
  }
  

  .nav-menu {
    width: 275px;
  }

  .nav-item {
    margin: 20px 0;
  }

  .nav-link{
    @include font(28px, 36px, $font_medium);
  }
}

@media screen and (max-width: 428px) {
  .logo {
    transform-origin: left;
    transform: scale(.7);
  }

  .nav {
    padding: 15px 25px 0 25px;
  }

  .nav-background .small-img {
    width: 75vw !important;
    height: 55vh !important;
    height: calc(var(--vh, 1vh) * 55) !important;
  }

  .nav-item {
    margin: 10px 0;
  }

  .nav-link{
    @include font(28px, 36px, $font_medium);
    padding: 0;
  }
}
</style>