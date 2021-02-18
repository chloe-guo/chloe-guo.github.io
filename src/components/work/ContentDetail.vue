<script>
import documents from "@/assets/js/documents";

export default {
  components: {
  },
  data() {
    return {
      yspeed: 15,
      yPos: 0,
      mobileOffsetTop: 0,
      xspeed: 22,
      xPos: 0,
      moveOffsetTop: 0,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    worksHomePage() {
      return documents.worksHomePage.find(
        worksHomePage => worksHomePage.slug === this.$route.params.slug
      );
    },
    thisWorkDetail() {
      return this.worksHomePage.workDetails.find(
        workDetail => workDetail.slug === this.$route.params.workSlug
      );
    }
  },
  created() {
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.addEventListener("resize", this.resize);
  },
  methods: {
    resize: function () {
      this.windowWidth = window.innerWidth;
    },
    parallax: function ($scrollHeight) {
      this.mobileOffsetTop = $scrollHeight - this.$refs.mobile_detail_mask.offsetTop;
      if(this.mobileOffsetTop >= 0 && this.windowWidth > 768) {
        this.yPos = -(this.mobileOffsetTop * this.yspeed / 100);
        this.$refs.mobile_img.style.transform = "translate3d(0, " + this.yPos + "px, 0)";
      } else {
        this.yPos = -(this.mobileOffsetTop * this.yspeed / 100) + 80;
        this.$refs.mobile_img.style.transform = "translate3d(0, " + this.yPos + "px, 0)";
      }

      this.moveOffsetTop = $scrollHeight - this.$refs.move_detail_mask.offsetTop;
      if(this.moveOffsetTop >= 0 && this.windowWidth > 1024) { 
        this.xPos = -(this.moveOffsetTop * this.xspeed / 100);
        this.$refs.move_img.style.transform = "translate3d(" + this.xPos + "px, 0, 0)";
      } else if(this.moveOffsetTop >= 0 && this.windowWidth > 768) {
        this.xPos = -(this.moveOffsetTop * this.xspeed / 100) + 100;
        this.$refs.move_img.style.transform = "translate3d(" + this.xPos + "px, 0, 0)";
      } else {
        this.xPos = -(this.moveOffsetTop * this.xspeed / 100)  + 150;
        this.$refs.move_img.style.transform = "translate3d(" + this.xPos + "px, 0, 0)";
      }
    }
  }
};
</script>

<template>
  <section id="ContentDetail" ref="contentDetail">
    <div v-show="thisWorkDetail.moveImg" class="detail move-detail-mask" ref="move_detail_mask">
      <img
        :src="thisWorkDetail.moveImg"
        class="move-img"
        ref="move_img"
      >
    </div>
    <div
      v-for="(contentImg, index) in thisWorkDetail.contentImgs"
      :key="index"
      class="detail"
    >
      <img :src="contentImg" class="content-img">
    </div>
    <div v-show="thisWorkDetail.rwdImg" class="detail">
      <img :src="thisWorkDetail.rwdImg" class="rwd-img">
    </div>
    <div v-show="thisWorkDetail.mobileImg" class="detail mobile-detail-mask" ref="mobile_detail_mask">
      <img
        :src="thisWorkDetail.mobileImg"
        class="mobile-img"
        ref="mobile_img"
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
#ContentDetail {
  @include flex(flex-start, center, column);
  padding: 150px 0;
  z-index: -1;
}

.detail {
  width: 1280px;
  margin: 30px 0;
}

.mobile-img {
  transform: translate3d(0, 0, 0);
}

.detail img {
  @include img_set;
  width: 100%;
}

.mobile-detail-mask {
  @include flex(center, flex-start);
  max-height: 874px;
  overflow: hidden;
}

.move-detail-mask {
  @include flex(flex-start, center);
  max-height: 952px;
  overflow: hidden;
}

.move-detail-mask > img {
  width: 2220px;
}

@media screen and (max-width: 1440px) {
  .detail {
    width: 960px;
    margin: 20px 0;
  }

  .mobile-detail-mask {
    max-height: 665.5px;
  }

  .move-detail-mask {
    max-height: 714px;
  }

  .move-detail-mask > img {
    width: 1665px;
  }
}

@media screen and (max-width: 1024px) {
  .detail {
    width: 80vw;
    margin: 20px 0;
  }

  .mobile-detail-mask {
    max-height: 46vw;
  }

  .move-detail-mask {
    max-height: 50vw;
  }

  .move-detail-mask > img {
    width: 115vw;
  }
}

@media screen and (max-width: 768px) {
  #ContentDetail {
    padding: 30px 0;
  }

  .detail {
    width: 100vw;
    margin: 15px 0;
  }

  .move-detail-mask {
    width: 80vw;
  }

  .mobile-detail-mask {
    height: 600px;
    max-height: 600px;
  }

  .mobile-img {
    width: 80% !important;
  }
}

@media screen and (max-width: 428px) {
  .move-detail-mask {
    width: 92vw;
  }

  .mobile-detail-mask {
    height: 350px;
    max-height: 350px;
  }

  .mobile-img {
    width: 100%;
  }
}
</style>