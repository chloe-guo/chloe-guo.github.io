<script>
export default {
  props: {
    content: Object
  }
}
</script>

<template>
  <section id="ResumeContent">
    <!------ about ------>
    <div class="content" v-if="content.number === '01'">
      <img class="my-photo" :src="content.myPhoto" alt="">
      <div class="name">
        <h4 class="chinese-name">{{ content.chineseName }}</h4>
        <h6 class="english-name">{{ content.englishName }}</h6>
      </div>
      <h5 class="profession">{{ content.profession }}</h5>
      <div class="introduction">
        <p
          v-for="(introduction, index) in content.introduction"
          :key="index"
        >
          {{ introduction }}
        </p>
      </div>
    </div>
    <!------ experiences ------>
    <div class="content" v-if="content.number === '02'">
      <ul class="experiences">
        <li
          class="experience-list"
          v-for="(experienceList, index) in content.experienceLists"
          :key="index"
        >
          <span v-if="experienceList.sort" class="sort">{{ experienceList.sort }}</span>
          <span v-if="experienceList.dateStart" class="date">{{ experienceList.dateStart }} - {{ experienceList.dateEnd }}</span>
          <span v-if="experienceList.job" class="job">{{ experienceList.job }}</span>
          <img v-if="experienceList.dot" :src="experienceList.dot" alt="" class="dot">
        </li>
      </ul>
    </div>
    <!------ programming skills ------>
    <div class="content" v-if="content.number === '03'">
      <ul>
        <li
          class="programming-skill-list"
          v-for="(programmingSkill, index) in content.programmingSkills"
          :key="index"
        >
          {{ programmingSkill }}
        </li>
      </ul>
    </div>
    <!------ design skills ------>
    <div class="content design-skills" v-if="content.number === '04'">
      <ul>
        <li
          class="design-skill-list"
          v-for="(designSkill, index) in content.designSkills"
          :key="index"
        >
            <div class="level">
              <div class="background">
                <div class="line">
                  <div class="before"></div>
                  <div class="after" :style="{transform: 'rotateZ(' + (designSkill.level - 0.5) * 360 + 'deg)'}"></div>
                </div>
              </div>
            </div>
            <span class="skill-name">{{designSkill.skillName}}</span>
          </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
//------ about ------
.my-photo {
  width: 100%;
  margin: 20px 0 50px 0px;
}

.chinese-name {
  @include font(16px, 19px);
  margin-bottom: 3px;
}

.english-name {
  @include font(12px, 15px, $font_regular);
  margin-bottom: 8px;
}

.profession {
  @include font(14px, 18px, $font_regular);
  margin-bottom: 20px;
}

.introduction > p {
  @include font(14px, 22px, $font_regular);
  margin-bottom: 22px;
  color: $color_lightGrayFont;
  width: 100%;
}

//------ experiences ------
.experiences {
  margin-top: 50px;
  padding-bottom: 35px;

  &:before {
    content: "";
    display: block;
    width: 3px;
    height: calc(100% - 70px);
    background: $color_lightGrayFont;
    position: absolute;
    margin: auto;
    top: 6px;
    left: 42px;
  }
}

.experience-list {
  margin-bottom: 50px;

  &:before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    background: $color_lightGrayFont;
    position: absolute;
    margin: auto;
    top: 6px;
    left: 40px;
  }

  &:last-child:before {
    display: none;
  }
}

.experience-list:last-child {
  position: absolute;
  margin: auto;
  bottom: 0;
  left: 42px;
}

.sort,
.date {
  @include font(12px, 15px, $font_regular);
  color: $color_lightGrayFont;
}

.sort {
  margin-right: 50px;
}

.date {
  margin-right: 22px;
}

.job {
  @include font(14px, 18px, $font_regular);
}

//------ programming skills ------

.programming-skill-list {
  @include font(14px, 22px, $font_regular);
  margin: 20px 0;
  color: $color_lightGrayFont;
  padding-left: 12px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: calc((22px - 4px) / 2);
    width: 4px;
    height: 4px;
    background: $color_lightGrayFont;
  }
}

.programming-skill-list:first-child {
  margin: 40px 0 20px 0;
}

//------ design skills ------
.design-skills {
  padding-bottom: 35px;
  margin-top: 60px;
}

.design-skills ul {
  @include flex(flex-start);
  flex-wrap: wrap;
}

.design-skill-list {
  margin-right: 45px;
  margin-bottom: 45px;
  width: 80px;
}

.skill-name {
  @include font(14px, 18px, $font_regular);
  display: block;
  text-align: center;
}

.level {
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
  border-radius: 50%;
  background: rgba($color_lightGrayFont, .3);
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $color_background;
    @include poa_center;
    z-index: 1;
    transition: background .6s $transition_easeOutSine;
  }
}

.orange_background .level {
  &::before {
    background: #D19675;
  }
}

.line {
  width: 40px;
  height: 80px;
  position: absolute;
  right: 0;
}

.before,
.after {
  width: 40px;
  height: 80px;
  transform-origin: 0px 40px;
  background: $color_deepGrayFont;
  @include poa_center;
}

@media screen and (max-width: 768px) {
  //------ about ------
  .my-photo {
      margin: 10px 0 20px 0px;
  }

  .chinese-name {
    @include font(12px, 15px);
    margin-bottom: 2px;
  }

  .english-name {
    @include font(12px, 15px, $font_regular);
    margin-bottom: 4px;
  }

  .profession {
    @include font(12px, 15px, $font_regular);
    margin-bottom: 10px;
  }

  .introduction > p {
    @include font(12px, 20px, $font_regular);
    margin-bottom: 12px;
    color: $color_lightGrayFont;
    width: 100%;
  }

  //------ experiences ------
  .experiences {
    margin-top: 30px;
    padding-bottom: 35px;

    &:before {
      left: 32px;
    }
  }

  .experience-list {
    margin-bottom: 30px;
    &:before {
      left: 30px;
    }
    &:last-child {
      left: 32px;
    }
  }

  .sort,
  .date {
    @include font(10px, 13px, $font_regular);
  }

  .sort {
    margin-right: 25px;
  }

  .date {
    margin-right: 5px;
  }

  .job {
    @include font(12px, 14px, $font_regular);
    position: absolute;
    display: block;
    left: 45px;
    padding-top: 3px;
  }

  //------ programming skills ------

  .programming-skill-list {
    @include font(12px, 16px, $font_regular);
    margin: 15px 0;
    padding-left: 12px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: calc((16px - 4px) / 2);
      width: 4px;
      height: 4px;
      background: $color_lightGrayFont;
    }
  }

  .programming-skill-list:first-child {
    margin: 30px 0 15px 0;
  }

  //------ design skills ------
  .design-skills {
    padding-bottom: 15px;
    margin-top: 40px;
  }

  .design-skills ul {
    @include flex(flex-start);
    flex-wrap: wrap;
  }

  .design-skill-list {
    @include flex(center, center, column);
    margin-right: 15px;
    margin-bottom: 25px;
    width: 70px;
  }

  .skill-name {
    @include font(12px, 14px, $font_regular);
    width: 80px;
  }

  .level {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 50%;
    background: rgba($color_lightGrayFont, .3);
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: $color_background;
      @include poa_center;
      z-index: 1;
      transition: background .6s $transition_easeOutSine;
    }
  }

  .orange_background .level {
    &::before {
      background: #D19675;
    }
  }

  .line {
    width: 25px;
    height: 50px;
    position: absolute;
    right: 0;
  }

  .before,
  .after {
    width: 25px;
    height: 50px;
    transform-origin: 0px 25px;
    background: $color_deepGrayFont;
    @include poa_center;
  }
}
</style>