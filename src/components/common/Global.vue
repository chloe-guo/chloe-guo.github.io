<script>
const windowsVH = window.innerHeight / 100;
export default {
  created() {
    window.addEventListener("resize", this.set_vh);
  },
  destroyed() {
    window.addEventListener("resize", this.set_vh);
  },
  mounted() {
    alert('qwertyhj');
  },
  methods: {
    set_vh: function () {
      this.windowsVH = window.innerHeight / 100;
      document.documentElement.style.setProperty('--vh', windowsVH + 'px');
    }
 }
};
</script>

<template>
  <section>
    
  </section>
</template>