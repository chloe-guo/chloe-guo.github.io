<script>
import Navigation from "@/components/common/Navigation";
import Navbar from "@/components/common/Navbar";

export default {
  components: {
    Navigation,
    Navbar
  },
  data() {
    return {
      show: true,
      MenuButtonFontColor: "#000000",
      logoAddress: require("@/assets/images/logo.svg")
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.loading_rate.innerHTML="20%";
    }, 100);
    setTimeout(() => {
      this.$refs.loading_rate.innerHTML="45%";
    }, 180);
    setTimeout(() => {
      this.$refs.loading_rate.innerHTML="60%";
    }, 350);
    setTimeout(() => {
      this.$refs.loading_rate.innerHTML="80%";
    }, 400);
    setTimeout(() => {
      this.$refs.loading_rate.innerHTML="100%";
    }, 490);
    setTimeout(() => {
      this.$refs.app.classList.remove("is-open-menu");
    }, 500);
    setTimeout(() => {
      this.$refs.app.classList.remove("loading_show");
    }, 1500);

    this.$refs.navbar.fade_in("fade-in");
    this.$refs.navbar.menu_style(this.MenuButtonFontColor, 0);
    this.$refs.navbar.logo_style(this.logoAddress, "logo_still_hide");
  },
  methods: {
    menu_active_addclass: function ($class_name) {
      this.$refs.app.classList.add($class_name);
    },
    menu_active_removeclass: function ($class_name) {
      this.$refs.app.classList.remove($class_name);
    }
 }
};
</script>

<template>
  <section id="app" ref="app" class="is-open-menu loading_show">
    <div class="layout">
      <Navigation />
      <div class="loading">
        <h3 class="rate" ref="loading_rate">0%</h3>
      </div>
      <div class="mask">
        <Navbar ref="navbar" />
        <transition name="layout" mode="out-in">
          <router-view :key="$route.path" />
        </transition>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
* {
  @include font(16px, 22px);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
  color: $color_deepFont;
  text-decoration: none;
}

html,
body,
#app {
  font-family: "Montserrat", sans-serif;
  background: $color_background;
}

a, button {
  display: block;
  cursor: pointer !important;
}

.page {
  @include fix_center;
  @include page_base;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
}

.mask {
  // mask 遮罩
  clip: rect(0, auto, auto, 0);
  position: absolute;
}
</style>

<style lang="scss" scoped>
.mask {
  width: 120vw;
  height: 220vmax;
  // 內置矩形 inset(上右下左的邊距 round 上右下左圓角)
  clip-path: inset(0 0 0 0 round 200vmax 0 0 0);
  position: fixed;
  margin: auto;
  right: auto;
  background: $color_background;
}

.loading {
  @include poa_center;
  @include flex;
  @include page_base;
  background: $color_background;
  display: none;
}

.loading_show .loading {
  display: flex;
}

.rate {
  @include font(5vw, 6vw);
}

// -----Animation-----
.mask {
  right: -20vw;
  bottom: 20vmax;
  top: -70vmax;
  transition: top .25s $transition_easeOutSine, 
              right 1s $transition_easeInQuart,
              bottom 1s $transition_easeInQuart,
              clip-path .6s $transition_ease;
}

.is-hover-menu .mask {
  top: 0;
  transition: top .25s $transition_easeInSine, 
              right 1s $transition_easeInQuart,
              bottom 1s $transition_easeInQuart,
              clip-path .6s $transition_ease;
}

.is-open-menu .mask {
  right: -130vw;
  bottom: -110vmax;
  transition: top .25s $transition_easeInSine,
              right 1s $transition_easeOutQuart,
              bottom 1s $transition_easeOutQuart,
              clip-path .6s $transition_ease;
}

@media screen and (max-width: 1440px) {
  .page {
    padding: 124px 6vw 219px;
  }
}

@media screen and (max-width: 1024px) {
  .mask {
    top: -80vmax;
  }
}

@media screen and (max-width: 768px) {
  .page {
    padding: 80px 10vw 170px 10vw;
  }

  .rate {
    @include font(36px, 48px);
  }

  // -----Animation-----
  .mask {
    width: 350vw;
    clip-path: inset(0 0 0 0 round 350vw 0 0 0);
    right: -100vw;
    bottom: 0vmax;
    top: 0vmax;
  }

  .is-hover-menu .mask {
    top: 0;
  }

  .is-open-menu .mask {
    right: -150vw;
    bottom: -320vmax;
  }
}
</style>