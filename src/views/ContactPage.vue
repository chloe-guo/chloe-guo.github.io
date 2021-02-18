<script>
import documents from "@/assets/js/documents";
import Form from "@/components/contact/Form";
import Footer from "@/components/contact/Footer";
import Navbar from "@/components/common/Navbar";
import LayoutEnterScroll from '@/components/common/LayoutEnterScroll';

export default {
  components: {
    Form,
    Navbar,
    Footer,
    LayoutEnterScroll
  },
  data() {
    return {
      contactPage: documents.contactPage,
      MenuButtonFontColor: "#000000",
      logoAddress: require("@/assets/images/logo.svg")
    };
  }
}
</script>

<template>
  <section id="ContactPage" class="page">
    <Navbar />
    <h2
      v-for="contactPage in contactPage"
      :key="contactPage.slug"
      v-html="contactPage.slug"
      class="main-title"
    ></h2>
    <Form />
    <Footer />
    <LayoutEnterScroll />
  </section>
</template>

<style lang="scss" scoped>
  .main-title {
    position: absolute;
    top: 215px;
    left: 65px;
    @include font(16px, 19px, $font_bold);
    text-transform:capitalize;
    overflow: hidden;
  }

  .text {
    margin: 20px 0;
  }


// -----vue transition-----
.layout-enter-active {
  transition: opacity 4.7s $transition_ease;

  .main-title {
    transition: opacity 1.2s .2s $transition_ease,
                text-indent .8s .2s $transition_ease;
  }
}

.layout-enter {
  .main-title {
    opacity: 0;
    text-indent: -150px;
  }
}

.layout-leave-active {
  transition: opacity 1.5s $transition_ease;

  .main-title {
    transition: opacity .4s .2s $transition_ease,
                text-indent .8s .2s $transition_ease;
  }
}

.layout-leave-to {
  .main-title {
    opacity: 0;
    text-indent: -150px;
  }
}

@media screen and (max-width: 768px) {
  .main-title {
    top: 145px;
    left: 25px;
    @include font(10px, 12px, $font_medium);
  }
}
</style>