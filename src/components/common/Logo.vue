<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    logo_style: function ($className) {
      this.$refs.logo.classList.add($className);
    }
  },
};
</script>

<template>
  <section id="Logo" ref="logo">
    <div class="logo">
      <h1 class="Chloe">
        <svg viewBox="0 0 160 29"
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink"> 
          <image xlink:href="@/assets/images/Chloe_logo.svg" x="0" y="0" width="160" height="29" />
        </svg> 
      </h1>
      <h1 class="Guo">
        <svg viewBox="0 0 98 29"
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink"> 
          <image xlink:href="@/assets/images/Guo_logo.svg" x="0" y="0" width="98" height="29" />
        </svg> 
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#Logo {
  margin-left: 2vw;
}

.logo {
  width: calc(22vw + 2vw);
  height: calc(9.8vw + 1vw);
  margin-right: 6vw;
  text-align: right;
  overflow: hidden;
}

.Chloe,
.Guo {
  @include flex(center, flex-start, column);
  height: 50%;
  padding: .25vw 1vw;
  margin: .25vw 0;
  border-right: solid 1px rgba($color_black, 0);
}

.Chloe {
  width: 200%;
  height: 50%;
  overflow: hidden;
}

.Chloe svg {
  width: 22vw;
  height: 100%;
}

.Guo {
  width: 62%;
  height: 50%;
  overflow: hidden;
}

.Guo svg {
  width: calc( 22vw * 0.6 );
  height: 100%;
}

// -----vue transition-----
.layout-enter-active {
  .Chloe {
    animation: logo_hidden 1.2s,
                cursor .4s 1.2s linear infinite,
                Chloe_typing 1.5s 1.2s $transition_ease;
  }


  .Guo {
    animation: logo_hidden 2.9s,
                cursor .4s 2.9s linear infinite,
                Guo_typing .9s 2.9s $transition_ease;
  }
}

.layout-enter {
}

@keyframes cursor {
  0%, 50% {
    border-color: $color_black;
  } 51%, 100% {
    border-color: rgba($color_black, 0);
  }
}

@keyframes Chloe_typing {
  0% {
    opacity: 0;
    display: none;
    width: 0;
  } 1%, 20% {
    opacity: 1;
    display: block;
    width: 21%;
  } 21%, 40% {
    width: 40%;
  } 41%, 60% {
    width: 60%;
  } 61%, 80% {
    width: 82%;
  } 81%, 99% {
    width: 100%;
  } 100% {
    width: 120%;
  }
}

@keyframes logo_hidden {
  0%, 100% {
    opacity: 0;
    display: none;
  }
}

@keyframes Guo_typing {
  0% {
    display: none;
    width: 0;
  } 1%, 33% {
    opacity: 1;
    display: block;
    width: 21%;
  } 34%, 66% {
    width: 40%;
  } 67%, 100% {
    width: 62%;
  }
}

@media screen and (max-width: 1440px) {
  #Logo {
    margin-left: .5vw;
  }
}

@media screen and (max-width:768px) {
  #Logo.logo_mobile_hide {
    display: none;
  }

  #Logo.logo_mobile_show {
    margin-left: 2vw;

    .logo {
      width: calc(44vw + 2vw);
      height: calc(19.6vw + 1vw);
      margin-right: 6vw;
      text-align: right;
      overflow: hidden;
    }

    .Chloe,
    .Guo {
      @include flex(center, flex-start, column);
      height: 50%;
      padding: .25vw 1vw;
      margin: .25vw 0;
      border-right: solid 1px rgba($color_black, 0);
    }

    .Chloe {
      width: 200%;
      height: 50%;
      overflow: hidden;
    }

    .Chloe svg {
      width: 44vw;
      height: 100%;
    }

    .Guo {
      width: 62%;
      height: 50%;
      overflow: hidden;
    }

    .Guo svg {
      width: calc( 44vw * 0.6 );
      height: 100%;
    }
  }
}
</style>