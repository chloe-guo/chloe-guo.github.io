<template>
  <section id="From">
    <div class="title">Contact Us</div>
    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeN_smLEm5tzXaTq6K66CBESqHkNUpuoBVjW3W7VhlUhUlzag/formResponse">
      <div class="form-group">
        <label for="Name">Name<span>*</span></label>
        <input type="text" id="Name" name="entry.1854092078" placeholder="請輸入姓名（必填）" required>
      </div>
      <div class="form-group">
        <label for="Company">Company</label>
        <input type="text" id="Company" name="entry.116120685" placeholder="請輸入公司名稱">
      </div>
      <div class="form-group">
        <label for="E-mail">E-mail<span>*</span></label>
        <input type="email" id="E-mail" name="entry.595532115" placeholder="請輸入電子郵件（必填）" required>
      </div>
      <div class="form-group">
        <label for="Message">Message<span>*</span></label>
        <textarea type="text" id="Message" name="entry.299155765" rows="6" placeholder="請輸入訊息（必填）" required></textarea>
      </div>
      <input type="submit" id="Submit" value="送出">
    </form>
  </section>
</template>

<style lang="scss" scoped>
#From {
  width: calc(100% - 18% - 18%);
  margin-top: 140px;
  padding-bottom: 165px;
  margin-left: 18%;
  margin-right: 18%;
  transform-origin: left;
}

.title {
  @include font(5vw, 5.5vw, $font_medium);
  margin-bottom: 4vw;
}

.form-group {
  @include flex(flex-start, flex-start);
  width: 100%;
  padding: 60px 0 15px;
  border-bottom: solid 1px rgba($color_lightGrayFont, .3);
}

label {
  display: inline-block;
  flex: 0 0 140px;
  width: 140px;
  @include font(16px, 19px);
}

label span {
  color: #d19675;
  @include font(22px, 25px);
}

input[type=text],
input[type=email],
textarea {
  width: calc(100% - 140px);
  background: rgba(255, 255, 255, 0);
  box-shadow: none;
  border: 0;
  @include font(16px, 19px, $font_regular);
  padding: 5px;
}

input[type=text],
input[type=email] {
  height: 30px;
}

::-webkit-input-placeholder { /* Edge */
  color: rgba($color_lightGrayFont, .6);
  @include font(16px, 19px, $font_regular);
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba($color_lightGrayFont, .6);
  @include font(16px, 19px, $font_regular);
}

::placeholder {
  color: rgba($color_lightGrayFont, .6);
  @include font(16px, 19px, $font_regular);
}

input[type=text]:focus,
input[type=email]:focus,
textarea:focus {
  outline: none;
}

input[type=submit] {
  width: 100%;
  margin-top: 60px;
  padding: 30px 0;
  border: none;
  background: rgba($color_lightGrayFont, .15);
  color: rgba($color_lightGrayFont, .8);
  @include font(16px, 19px, $font_medium);
  transition: background .3s $transition_easeOutSine,
              color .3s $transition_easeOutSine;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover,
  &:active,
  &:focus {
    background: rgba($color_lightGrayFont, .6);
    color: rgba($color_background, 1);
  }
}

// -----vue transition-----
.layout-enter-active {
  #From {
    transition: transform .6s .2s $transition_ease,
                opacity 1.2s .2s $transition_ease,
                letter-spacing .8s .2s $transition_ease;
  }
}

.layout-enter {
  #From {
    transform: translateX(20px) skewY(20deg);
    opacity: 0;
    letter-spacing: 3px;
  }
}

.layout-leave-active {
  #From {
    transition: transform .6s .2s $transition_ease,
                opacity .4s .2s $transition_ease,
                letter-spacing .8s .2s $transition_ease;
  }
}

.layout-leave-to {
  #From {
    transform: translateX(20px) skewY(-20deg);
    opacity: 0;
    letter-spacing: 3px;
  }
}

@media screen and (max-width: 1024px) {
  #From {
    width: calc(100% - 12% - 12%);
    margin-top: 120px;
    padding-bottom: 145px;
    margin-left: 12%;
    margin-right: 12%;
  }
}

@media screen and (max-width: 768px) {
  #From {
    width: calc(100vw - 50px);
    margin-top: 85px;
    padding-bottom: 40px;
    margin-left: 0;
    margin-right: 0;
    left: calc(-10vw + 25px);
  }
  .main-title {
    top: 145px;
    left: 25px;
    @include font(10px, 12px, $font_regular);
  }

  .title {
    @include font(40px, 48px, $font_medium);
    margin-bottom: 40px;
  }

  .form-group {
    padding: 40px 0 5px;
    flex-direction: column;
  }

  label {
    flex: 0 0 auto;
    width: auto;
    @include font(12px, 15px);
    margin-bottom: 20px;
  }

  label span {
    @include font(18px, 22px);
  }

  input[type=text],
  input[type=email],
  textarea {
    width: 100%;
    @include font(12px, 15px, $font_regular);
    padding: 5px;
  }

  input[type=text],
  input[type=email] {
    height: 25px;
  }

  ::-webkit-input-placeholder { /* Edge */
    @include font(12px, 15px,  $font_regular);
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    @include font(12px, 15px, $font_regular);
  }

  ::placeholder {
    @include font(12px, 15px, $font_regular);
  }

  input[type=submit] {
    margin-top: 40px;
    padding: 15px 0;
    @include font(14px, 16px, $font_medium);
  }
}
</style>