<script>
import documents from "@/assets/js/documents";
import NavbarLogo from "@/components/common/NavbarLogo";
export default {
  components: {
    NavbarLogo
  },
  data() {
    return {
      logoAddress: require("@/assets/images/logo.svg"),
      windowWidth: screen.width,
      worksHomePage: documents.worksHomePage
    };
  },
  methods: {
    mouseover_menu: function () {
      this.$parent.event_menu_addclass('is-hover-menu');
    },
    mouseleave_menu: function () {
      this.$parent.event_menu_removeclass('is-hover-menu');
    },
    open_menu: function () {
      this.$parent.event_menu_addclass('is-open-menu');
    },
    close_menu: function () {
      this.$parent.event_menu_removeclass('is-open-menu');
    },
    menu_style: function ($font_color, $font_opacity) {
      this.$refs.open_menu.style.color = $font_color;
      if($font_opacity === 0) {
        this.$refs.open_menu.style.opacity = 0;
      } else {
        this.$refs.open_menu.style.opacity = 1;
      }
    },
    logo_style: function ($logo_address, $className) {
      this.$refs.logo.classList.add($className);
      this.logoAddress = $logo_address;
    },
    fade_in: function ($className) {
      this.$refs.navbar.classList.add($className);
      this.$refs.navbar.classList.add($className + "-active");
      setTimeout(() => {
        this.$refs.navbar.classList.remove($className);
      }, 100);
      setTimeout(() => {
        this.$refs.navbar.classList.remove($className + "-active");
      }, 800);
    }
  },
};
</script>

<template>
  <section id="Navbar" ref="navbar">
    <router-link
            :to="{
              name: 'worksHomePage',
              params: { slug: worksHomePage.slug }
            }"
      >
      <div class="logo" ref="logo">
        <NavbarLogo />
        <svg viewBox="0 0 160 71"
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink"> 
          <image :xlink:href=logoAddress x="0" y="0" width="160" height="71" />
        </svg>
      </div>
    </router-link>
    <div class="menu-button" ref="menu_button">
      <a href="javaScript:;" ref="open_menu" v-on:click="open_menu" class="open-button" v-on:mouseover="mouseover_menu" v-on:mouseleave="mouseleave_menu">Menu 選單</a>
      <a href="javaScript:;" v-on:click="close_menu" class="close-button" v-on:mouseover="mouseover_menu" v-on:mouseleave="mouseleave_menu">Close menu 關閉選單</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#Navbar {
  @include flex(space-between, center);
  position: fixed;
  width: 100vw;
  padding: 65px 65px 0 65px;
  z-index: 1;
  top: 0;
  left: 0;
  pointer-events: none;
}

.logo {
  flex: 160px;
  pointer-events: auto;
}

.logo_still_hide {
  opacity: 0;
  pointer-events: none;
}

.logo_show {
  opacity: 1;
}

.logo_mobile_show {
  opacity: 0;
  pointer-events: none;
}

.logo svg {
  width: 160px;
  height: 71px;
}

.menu-button {
  @include flex(flex-start, flex-end, column);
  height: 32px;
  overflow: hidden;
  pointer-events: auto;
}

.menu-button > a {
  @include font(16px, 32px, $font_medium);
}

.menu-button > .close-button {
  color: $color_white;
}

.loading_show .menu-button {
  opacity: 0;
  pointer-events: none;
}

// -----Animation-----
.menu-button a {
  transform: translateY(0%);
  transition: transform .6s $transition_ease;
}

.is-open-menu .menu-button a {
  transform: translateY(-110%);
}

// -----vue transition-----
.layout-enter-active {
  #Navbar {
    transition: opacity .6s 1.4s $transition_ease;
  }
  .logo svg {
    opacity: 0;
  }
}

.layout-enter {
  #Navbar {
    opacity: 0;
  }
}

@media screen and (max-width: 1440px) {
  #Navbar {
    padding: 50px 60px 0 60px;
  }
}

@media screen and (max-width: 768px) {
  #Navbar {
    padding: 30px 40px 0 40px;
  }

  .logo_mobile_show {
    opacity: 1;
    pointer-events: auto;
  }

  .logo {
    transform-origin: left;
    transform: scale(.7);
  }
}

@media screen and (max-width: 428px) {
  #Navbar {
    padding: 15px 25px 0 25px;
  }

  .menu-button {
    @include flex(flex-start, flex-end, column);
    height: 18px;
    overflow: hidden;
    pointer-events: auto;
  }

  .menu-button > a {
    @include font(12px, 18px, $font_medium);
  }
}
</style>
