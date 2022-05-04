import Vue from "vue";
import App from "./App.vue";

export function test(param) {
  new Vue({
    el: "#app",
    render: h => h(App),
    created() {
      console.log(param);
      test11();
    }
  });
}

// new Vue({
//   el:"#app",
//   template:`<div id="app">asdfasdf</div>`,
//   created(){
//     console.log(param);
//   }
