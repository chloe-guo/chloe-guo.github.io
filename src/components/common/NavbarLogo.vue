<template>
  <section id="NavbarLogo">
    <div class="logoAnimation">
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
#NavbarLogo {
  position: absolute;
  opacity: 0;
}

.logoAnimation {
  width: calc(160px + 8px);
  height: 71px;
  text-align: right;
  overflow: hidden;
}

.Chloe,
.Guo {
  @include flex(space-between, flex-start, column);
  height: 50%;
  border-right: solid 1px rgba($color_black, 0);
}

.Chloe {
  width: 200%;
  height: 29px;
  overflow: hidden;
}

.Chloe svg {
  width: 160px;
  height: 100%;
}

.Guo {
  width: 62%;
  height: 29px;
  overflow: hidden;
  margin-top: 13px;
}

.Guo svg {
  width: calc( 160px * 0.61 );
  height: 100%;
}

// -----vue transition-----
.layout-enter-active {
  #NavbarLogo {
    opacity: 1;
  }

  .Chloe {
    animation: logo_hidden 1.8s,
                cursor .4s 1.8s linear infinite,
                Chloe_typing 1.5s 1.8s $transition_ease;
  }


  .Guo {
    animation: logo_hidden 3.3s,
                cursor .4s 3.3s linear infinite,
                Guo_typing .9s 3.3s $transition_ease;
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
</style>