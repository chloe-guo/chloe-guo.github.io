// param為傳入引數
function packageFunc (param) {
  alert(param)
}

export default {
  // Vue.js的外掛應當有一個公開方法 install。這個方法的第一個引數是 Vue 構造器，第二個引數是一個可選的選項物件。
  install: function (Vue) {
    Vue.prototype.global_func = (param) => packageFunc(param)
  }
}