
<script>
import documents from "@/assets/js/documents";
export default {
  data() {
    return {
      worksHomePage: documents.worksHomePage,
      resumePage: documents.resumePage,
      contactPage: documents.contactPage,
      allRightReserved: documents.allRightReserved
    };
  },
   methods: {
    scroll_to_hash: function (hash) {
      document.querySelector('#' + hash).scrollIntoView({behavior: "smooth", block: "center"});
    }
  }
}
</script>

<template>
  <section id="Footer">
    <ul class="resume-menu">
      <li
        v-for="resumePage in resumePage"
        :key="resumePage.slug"
        class="resume-menu-item"
      >
        <a href="javascript:;" class="resume-menu-link" v-on:click="scroll_to_hash(resumePage.slug)">{{ resumePage.slug }}</a>
      </li>
    </ul>
    <ul class="page-menu">
      <li
        v-for="worksHomePage in worksHomePage"
        :key="worksHomePage.slug"
        class="page-menu-item"
      >
        <router-link
          :to="{
            name: 'worksHomePage',
            params: { slug: worksHomePage.slug }
          }"
          class="page-menu-link"
        >
          {{ worksHomePage.slug }}
        </router-link>
      </li>
      <li
        v-for="contactPage in contactPage"
        :key="contactPage.slug"
        class="page-menu-item"
      >
        <router-link
          :to="{
            name: 'contactPage',
            params: { slug: contactPage.slug }
          }"
          class="page-menu-link"
        >
          {{ contactPage.slug }}
        </router-link>
      </li>
    </ul>
    <p class="all-right-reserved">{{ allRightReserved }}</p>
  </section>
</template>

<style lang="scss" scoped>
#Footer {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  @include flex(center, flex-start, column);
}

.resume-menu {
  padding-bottom: 95px;
}

.resume-menu-link {
  @include font(16px, 19px, $font_regular);
  text-transform: capitalize;
  margin: 4px 0;
}
.page-menu-link {
  @include font(6.25vw, 7.6vw, $font_medium);
  display: inline-block;

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 20%;
    width: 100%;
    height: 1px;
    background: #000;
  }
}

.all-right-reserved {
  position: absolute;
  bottom: 15px;
  right: 15px;
  @include font(12px, 15px, $font_regular);
}
@media screen and (max-width: 1440px) {
  #Footer {
    margin-left: 6vw;
  }
}

@media screen and (max-width: 768px) {
  #Footer {
    margin-top: 100px;
    margin-left: 10vw;
  }

  .page-menu-link {
    @include font(48px, 58px, $font_medium);
  }

  .all-right-reserved {
    @include font(10px, 12px, $font_regular);
    transform-origin: right bottom;
    transform: scale(.8);
    right: calc( -10vw + 15px);
    bottom: 10px;
  }

  .resume-menu {
    padding-bottom: 25vh;
  }

  .page-menu {
    position: absolute;
    bottom: 65px;
  }
}
</style>